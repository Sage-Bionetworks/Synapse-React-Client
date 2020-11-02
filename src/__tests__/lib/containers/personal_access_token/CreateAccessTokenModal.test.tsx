import { mount, ReactWrapper } from 'enzyme'
import CopyToClipboardInput from 'lib/containers/CopyToClipboardInput'
import { Error } from 'lib/containers/Error'
import {
  CreateAccessTokenModal,
  CreateAccessTokenModalProps,
} from 'lib/containers/personal_access_token/CreateAccessTokenModal'
import { Checkbox } from 'lib/containers/widgets/Checkbox'
import * as React from 'react'
import { Button } from 'react-bootstrap'
import { act } from 'react-dom/test-utils'

const EXAMPLE_PAT = 'abcdefghiklmnop'
const SynapseClient = require('../../../../lib/utils/SynapseClient')

const createMountedComponent = (props: CreateAccessTokenModalProps) => {
  const wrapper = mount<React.FunctionComponent<CreateAccessTokenModalProps>>(
    <CreateAccessTokenModal {...props} />,
  )

  return { wrapper }
}

const resolveAllPending = async (
  wrapper: ReactWrapper<
    React.FunctionComponent<CreateAccessTokenModalProps>,
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

const mockOnClose = jest.fn(() => null)
const mockOnCreate = jest.fn(() => null)

SynapseClient.createPersonalAccessToken = jest.fn().mockResolvedValue({
  token: EXAMPLE_PAT,
})

describe('basic functionality', () => {
  const props = {
    onClose: mockOnClose,
    onCreate: mockOnCreate,
    token: 'abc123',
  }

  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('displays the token after successful creation', async () => {
    const tokenName = 'Token Name'
    const { wrapper } = createMountedComponent(props)
    await resolveAllPending(wrapper)

    // Fill out the form
    await act(async () => {
      await wrapper
        .find('input')
        .at(0)
        .simulate('change', {
          target: {
            value: tokenName,
          },
        })
      await wrapper.find(Checkbox).at(0).prop('onChange')()
      await wrapper.find(Checkbox).at(1).prop('onChange')()
      await wrapper.find(Checkbox).at(2).prop('onChange')()
      await wrapper.find(Button).at(1).simulate('click')
    })
    await resolveAllPending(wrapper)

    expect(mockOnCreate).toHaveBeenCalled()
    expect(SynapseClient.createPersonalAccessToken).toHaveBeenCalled()

    expect(wrapper.find(CopyToClipboardInput).props().value).toEqual(
      EXAMPLE_PAT,
    )

    // Click away from the modal to close
    await act(async () => {
      await wrapper.find('div.modal-backdrop').simulate('click')
    })
    await resolveAllPending(wrapper)

    expect(mockOnClose).toHaveBeenCalled()
  })

  it('requires a token name and at least one permission before dispatching the request', async () => {
    const { wrapper } = createMountedComponent(props)
    await resolveAllPending(wrapper)
    expect(wrapper.find(Error).length).toBe(0)

    // Try to create with no name or permissions
    await act(async () => {
      await wrapper.find(Button).at(1).simulate('click')
    })
    await resolveAllPending(wrapper)
    expect(mockOnCreate).not.toHaveBeenCalled()
    expect(SynapseClient.createPersonalAccessToken).not.toHaveBeenCalled()
    expect(wrapper.find(Error).length).toBe(1)

    // Add a name
    await act(async () => {
      await wrapper
        .find('input')
        .at(0)
        .simulate('change', {
          target: {
            value: 'some name',
          },
        })
      await wrapper.find(Button).at(1).simulate('click')
    })
    await resolveAllPending(wrapper)

    expect(mockOnCreate).not.toHaveBeenCalled()
    expect(SynapseClient.createPersonalAccessToken).not.toHaveBeenCalled()
    expect(wrapper.find(Error).length).toBe(1)

    // Remove name, add a permission
    await act(async () => {
      await wrapper
        .find('input')
        .at(0)
        .simulate('change', {
          target: {
            value: '',
          },
        })
      await wrapper.find(Checkbox).at(0).prop('onChange')()
      await wrapper.find(Button).at(1).simulate('click')
    })
    await resolveAllPending(wrapper)

    expect(mockOnCreate).not.toHaveBeenCalled()
    expect(SynapseClient.createPersonalAccessToken).not.toHaveBeenCalled()
    expect(wrapper.find(Error).length).toBe(1)
  })

  it('gracefully handles an error from the backend', async () => {
    const { wrapper } = createMountedComponent(props)
    await resolveAllPending(wrapper)

    const errorReason = 'Malformed input'
    SynapseClient.createPersonalAccessToken = jest.fn().mockRejectedValue({
      error: 400,
      reason: errorReason,
    })

    // Fill out the form and send the request
    await act(async () => {
      await wrapper
        .find('input')
        .at(0)
        .simulate('change', {
          target: {
            value: 'token name',
          },
        })
      await wrapper.find(Checkbox).at(0).prop('onChange')()
      await wrapper.find(Button).at(1).simulate('click')
    })
    await resolveAllPending(wrapper)

    expect(wrapper.find(Error).length).toBe(1)
    expect(wrapper.find(Error).props().error).toEqual(errorReason)
  })

  it('successfully calls onClose and not onCreate when exited without creating a token', async () => {
    const { wrapper } = createMountedComponent(props)
    await resolveAllPending(wrapper)

    // Click away from the modal to close
    await act(async () => {
      await wrapper.find('div.modal-backdrop').simulate('click')
    })
    await resolveAllPending(wrapper)

    expect(mockOnClose).toHaveBeenCalled()

    expect(mockOnCreate).not.toHaveBeenCalled()
    expect(SynapseClient.createPersonalAccessToken).not.toHaveBeenCalled()
  })
})
