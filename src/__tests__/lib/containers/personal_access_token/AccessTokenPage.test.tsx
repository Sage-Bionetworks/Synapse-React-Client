import { mount, ReactWrapper } from 'enzyme'
import * as React from 'react'
import { act } from 'react-dom/test-utils'
import { AccessTokenCardList } from 'lib/containers/personal_access_token/AccessTokenCardList'
import {
  AccessTokenPage,
  AccessTokenPageProps,
} from 'lib/containers/personal_access_token/AccessTokenPage'
import { CreateAccessTokenModal } from 'lib/containers/personal_access_token/CreateAccessTokenModal'

const createMountedComponent = (props: AccessTokenPageProps) => {
  const wrapper = mount<React.FunctionComponent<AccessTokenPageProps>>(
    <AccessTokenPage {...props} />,
  )

  return { wrapper }
}

const resolveAllPending = async (
  wrapper: ReactWrapper<
    React.FunctionComponent<AccessTokenPageProps>,
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

describe('basic functionality', () => {
  const props = {
    title: 'A title',
    body: 'A body',
    token: 'abc123',
  }

  it('shows the create token modal when the button is clicked and hides when onClose is called', async () => {
    const { wrapper } = createMountedComponent(props)
    await resolveAllPending(wrapper)

    expect(wrapper.find(CreateAccessTokenModal).length).toEqual(0)

    // Click 'Create new token' button
    wrapper.find('button').simulate('click')
    await resolveAllPending(wrapper)

    expect(wrapper.find(CreateAccessTokenModal).length).toEqual(1)

    // close the modal using the prop
    wrapper.find(CreateAccessTokenModal).prop('onClose')()
    await resolveAllPending(wrapper)

    expect(wrapper.find(CreateAccessTokenModal).length).toEqual(0)
  })

  it('rerenders the list when onCreate is called', async () => {
    const { wrapper } = createMountedComponent(props)
    await resolveAllPending(wrapper)

    const originalKey = wrapper.find(AccessTokenCardList).key()

    wrapper.find('button').simulate('click')
    await resolveAllPending(wrapper)
    wrapper.find(CreateAccessTokenModal).prop('onCreate')()
    await resolveAllPending(wrapper)

    expect(wrapper.find(AccessTokenCardList).key()).not.toEqual(originalKey)
  })
})
