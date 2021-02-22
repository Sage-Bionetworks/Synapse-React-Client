import { shallow } from 'enzyme'
import {
  AccessTokenCard,
  AccessTokenCardProps,
} from '../../../../lib/containers/personal_access_token/AccessTokenCard'
import WarningModal from '../../../../lib/containers/synapse_form_wrapper/WarningModal'
import * as React from 'react'
import { Button } from 'react-bootstrap'
import { act } from 'react-dom/test-utils'

const SynapseClient = require('../../../../lib/utils/SynapseClient')
const mockOnDelete = jest.fn(() => null)

SynapseClient.deletePersonalAccessToken = jest
  .fn()
  .mockResolvedValue({ status: 200 })

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

describe('basic functionality', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('correctly styles when expired', async () => {
    const wrapperActive = shallow(<AccessTokenCard {...activeTokenProps} />)
    expect(
      wrapperActive
        .find('div.PersonalAccessTokenCard')
        .hasClass('bg-warning'),
    ).toBe(false)

    const wrapperExpired = shallow(<AccessTokenCard {...expiredTokenProps} />)
    expect(
      wrapperExpired
        .find('div.PersonalAccessTokenCard')
        .hasClass('bg-warning'),
    ).toBe(true)
  })

  it('modal pops up and sends request on delete', async () => {
    const wrapper = shallow(<AccessTokenCard {...activeTokenProps} />)

    expect(wrapper.find(WarningModal).props().show).toBe(false)

    // Click delete button to open modal
    await act(async () => {
      await wrapper.find(Button).simulate('click')
    })

    expect(wrapper.find(WarningModal).props().show).toBe(true)

    // Click 'Delete'
    await act(async () => {
      await wrapper.find(WarningModal).props().onConfirm()
    })

    expect(SynapseClient.deletePersonalAccessToken).toHaveBeenCalled()
    expect(mockOnDelete).toHaveBeenCalled()
  })

  it('does not delete when modal is canceled', async () => {
    const wrapper = shallow(<AccessTokenCard {...activeTokenProps} />)

    // Click delete button to open modal
    wrapper.find(Button).simulate('click')

    // Click 'Cancel'
    await act(async () => {
      await wrapper.find(WarningModal).props().onCancel()
    })

    expect(SynapseClient.deletePersonalAccessToken).not.toHaveBeenCalled()
    expect(mockOnDelete).not.toHaveBeenCalled()
  })

  it('sends request on delete with no modal when expired', async () => {
    const wrapper = shallow(<AccessTokenCard {...expiredTokenProps} />)

    // Click delete button -- no modal should open, because the token has expired.
    await act(async () => {
      await wrapper.find(Button).simulate('click')
    })

    expect(wrapper.find(WarningModal).props().show).toBe(false)
    expect(SynapseClient.deletePersonalAccessToken).toHaveBeenCalled()
    expect(mockOnDelete).toHaveBeenCalled()
  })
})
