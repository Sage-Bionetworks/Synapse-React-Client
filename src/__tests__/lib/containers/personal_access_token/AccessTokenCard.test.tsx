import { mount, ReactWrapper } from 'enzyme'
import {
  AccessTokenCard,
  AccessTokenCardProps,
} from 'lib/containers/personal_access_token/AccessTokenCard'
import * as React from 'react'
import { Button } from 'react-bootstrap'
import { act } from 'react-dom/test-utils'
import WarningModal from 'lib/containers/synapse_form_wrapper/WarningModal'

const SynapseClient = require('../../../../lib/utils/SynapseClient')

const createMountedComponent = (props: AccessTokenCardProps) => {
  const wrapper = mount<React.FunctionComponent<AccessTokenCardProps>>(
    <AccessTokenCard {...props} />,
  )

  return { wrapper }
}

const resolveAllPending = async (
  wrapper: ReactWrapper<
    React.FunctionComponent<AccessTokenCardProps>,
    any,
    React.Component<{}, {}, any>
  >,
) => {
  await act(
    async (): Promise<any> => {
      await Promise.resolve(wrapper)
      await new Promise(resolve => setImmediate(resolve))
      wrapper.update()
      return wrapper
    },
  )
}

const mockOnDelete = jest.fn(() => null)

SynapseClient.deletePersonalAccessToken = jest
  .fn()
  .mockResolvedValue({ status: 200 })

describe('basic functionality', () => {
  const activeTokenProps: AccessTokenCardProps = {
    accessToken: {
      id: '45',
      userId: '3350396',
      scopes: ['view', 'download'],
      name: 'My access token',
      createdOn: '2020-08-23T14:59:19.073Z',
      lastUsed: '2020-10-25T14:59:19.073Z',
      state: 'ACTIVE',
    },
    onDelete: mockOnDelete,
    token: 'abc123',
  }

  const expiredTokenProps: AccessTokenCardProps = {
    accessToken: {
      id: '45',
      userId: '3350396',
      scopes: ['view', 'download'],
      name: 'My access token',
      createdOn: '2020-08-23T14:59:19.073Z',
      lastUsed: '2020-10-25T14:59:19.073Z',
      state: 'EXPIRED',
    },
    onDelete: mockOnDelete,
    token: 'abc123',
  }

  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('correctly styles when expired', async () => {
    const wrapperActive = createMountedComponent(activeTokenProps).wrapper
    await resolveAllPending(wrapperActive)

    expect(wrapperActive.find('div').at(0).hasClass('bg-warning')).toBe(false)

    const wrapperExpired = createMountedComponent(expiredTokenProps).wrapper
    await resolveAllPending(wrapperExpired)
    expect(wrapperExpired.find('div').at(0).hasClass('bg-warning')).toBe(true)
  })

  it('modal pops up and sends request on delete', async () => {
    const { wrapper } = createMountedComponent(activeTokenProps)
    await resolveAllPending(wrapper)

    expect(wrapper.find(WarningModal).props().show).toBe(false)

    // Click delete button to open modal
    wrapper.find(Button).simulate('click')
    await resolveAllPending(wrapper)

    expect(wrapper.find(WarningModal).props().show).toBe(true)

    // Click 'Delete'
    wrapper.find(WarningModal).find(Button).at(1).simulate('click')
    await resolveAllPending(wrapper)

    expect(SynapseClient.deletePersonalAccessToken).toHaveBeenCalled()
    expect(mockOnDelete).toHaveBeenCalled()
  })

  it('does not delete when modal is canceled', async () => {
    const { wrapper } = createMountedComponent(activeTokenProps)
    await resolveAllPending(wrapper)

    // Click delete button to open modal
    wrapper.find(Button).simulate('click')
    await resolveAllPending(wrapper)

    // Click 'Cancel'
    wrapper.find(WarningModal).find(Button).at(0).simulate('click')
    await resolveAllPending(wrapper)

    expect(SynapseClient.deletePersonalAccessToken).not.toHaveBeenCalled()
    expect(mockOnDelete).not.toHaveBeenCalled()
  })

  it('sends request on delete with no modal when expired', async () => {
    const { wrapper } = createMountedComponent(expiredTokenProps)
    await resolveAllPending(wrapper)

    // Click delete button -- no modal should open, because the token has expired.
    wrapper.find(Button).simulate('click')
    await resolveAllPending(wrapper)

    expect(wrapper.find(WarningModal).props().show).toBe(false)
    expect(SynapseClient.deletePersonalAccessToken).toHaveBeenCalled()
    expect(mockOnDelete).toHaveBeenCalled()
  })
})
