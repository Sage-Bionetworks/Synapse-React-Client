import * as React from 'react'
import { mount } from 'enzyme'
import { SynapseConstants } from '../../../lib/utils/'
import UserCard, { UserCardProps } from '../../../lib/containers/UserCard'
import { UserCardSmall } from '../../../lib/containers/UserCardSmall'
import { UserCardMedium } from '../../../lib/containers/UserCardMedium'
import { UserCardLarge } from '../../../lib/containers/UserCardLarge'
import { UserCardSwitch, UserCardSwitchProps } from '../../../lib/containers/UserCardSwitch'
import { mockUserProfileData } from '../../../mocks/mock_user_profile'

const createMountedComponentSwitch = (props: UserCardSwitchProps) => {
  const wrapper = mount(
      <UserCardSwitch
        {...props}
      />
    )
  const instance = wrapper.instance() as UserCard
  return { wrapper, instance }
}

// need mount because of the deep render of the children
const createMountedComponent = (props: UserCardProps) => {
  const wrapper = mount(
      <UserCard
        {...props}
      />
    )
  const instance = wrapper.instance() as UserCard
  return { wrapper, instance }
}

describe('it renders the cards without failing', () => {

  const props = {
    ownerId : '3374422',
    userProfile: mockUserProfileData
  }

  it('renders a small card', () => {
    const size = SynapseConstants.SMALL_USER_CARD
    const { wrapper } = createMountedComponent({ ...props, size })
    expect(wrapper).toBeDefined()
    expect(wrapper.find(UserCardSmall)).toHaveLength(1)
  })

  it('renders a medium card', () => {
    const size = SynapseConstants.MEDIUM_USER_CARD
    const { wrapper } = createMountedComponent({ ...props, size })
    expect(wrapper).toBeDefined()
    expect(wrapper.find(UserCardMedium)).toHaveLength(1)
  })

  it('renders a large card', () => {
    const size = SynapseConstants.LARGE_USER_CARD
    const { wrapper } = createMountedComponent({ ...props, size })
    expect(wrapper).toBeDefined()
    expect(wrapper.find(UserCardLarge)).toHaveLength(1)
  })
})

describe('it creates the correct UI for the small card', () => {

  const props = {
    ownerId : '3374422',
    userProfile: mockUserProfileData
  }

  it('renders the UI correctly', () => {
    const size = SynapseConstants.SMALL_USER_CARD
    const { wrapper } = createMountedComponentSwitch({ ...props, size })
    expect(wrapper).toBeDefined()
    expect(wrapper.find(UserCardSmall)).toHaveLength(1)
    expect(wrapper.render().find('svg')).toHaveLength(1)
  })

})
