import { act } from '@testing-library/react'
import { mount } from 'enzyme'
import { AccessTokenCardList } from 'lib/containers/personal_access_token/AccessTokenCardList'
import { AccessTokenPage } from 'lib/containers/personal_access_token/AccessTokenPage'
import { CreateAccessTokenModal } from 'lib/containers/personal_access_token/CreateAccessTokenModal'
import * as React from 'react'
import { resolveAllPending } from 'lib/testutils/EnzymeHelpers'

describe('basic functionality', () => {
  const props = {
    title: 'A title',
    body: 'A body',
    token: 'abc123',
  }

  it('shows the create token modal when the button is clicked and hides when onClose is called', async () => {
    const wrapper = mount(<AccessTokenPage {...props} />)
    await resolveAllPending(wrapper)

    expect(wrapper.find(CreateAccessTokenModal).length).toEqual(0)

    // Click 'Create new token' button
    act(() => {
      wrapper.find('button').simulate('click')
    })
    await resolveAllPending(wrapper)

    expect(wrapper.find(CreateAccessTokenModal).length).toEqual(1)

    // close the modal using the prop
    act(() => {
      wrapper.find(CreateAccessTokenModal).prop('onClose')()
    })
    await resolveAllPending(wrapper)

    expect(wrapper.find(CreateAccessTokenModal).length).toEqual(0)
  })

  it('rerenders the list when onCreate is called', async () => {
    const wrapper = mount(<AccessTokenPage {...props} />)
    await resolveAllPending(wrapper)

    const originalKey = wrapper.find(AccessTokenCardList).key()

    await act(async () => {
      await wrapper.find('button').simulate('click')
      await resolveAllPending(wrapper)
      await wrapper.find(CreateAccessTokenModal).prop('onCreate')()
      await resolveAllPending(wrapper)
    })

    expect(wrapper.find(AccessTokenCardList).key()).not.toEqual(originalKey)
  })
})
