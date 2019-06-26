import * as React from 'react'
import { mount, shallow } from 'enzyme'
import { SynapseConstants } from '../../../lib/utils'
import UserCard, { UserCardProps } from '../../../lib/containers/UserCard'
import { UserCardSmall, UserCardSmallProps } from '../../../lib/containers/UserCardSmall'
import UserCardMedium, { UserCardMediumProps } from '../../../lib/containers/UserCardMedium'
import { UserCardLarge } from '../../../lib/containers/UserCardLarge'
import { mockUserProfileData } from '../../../mocks/mock_user_profile'
import UserCardContextMenu, { UserCardContextMenuProps, MenuAction } from '../../../lib/containers/UserCardContextMenu'
import { SEPERATOR } from '../../../lib/utils/SynapseConstants'

const { firstName } = mockUserProfileData

const createUserCardContextMenu = (props: UserCardContextMenuProps) => {
  const wrapper = shallow(
      <UserCardContextMenu
        {...props}
      />
    )
  return { wrapper }
}

const createLargeComponent = (props: UserCardMediumProps) => {
  const wrapper = shallow<UserCardMedium>(
      <UserCardMedium
        {...props}
        isLarge={true}
      />
    )
  const instance = wrapper.instance()
  return { wrapper, instance }
}

const createMediumComponent = (props: UserCardMediumProps) => {
  const wrapper = shallow<UserCardMedium>(
      <UserCardMedium
        {...props}
      />
    )
  const instance = wrapper.instance()
  return { wrapper, instance }
}

const createSmallComponent = (props: UserCardSmallProps) => {
  const wrapper = shallow(
      <UserCardSmall
        {...props}
      />
    )
  const instance = wrapper.instance()
  return { wrapper, instance }
}

// need mount because of the deep render of the children
const createMountedComponent = (props: UserCardProps) => {
  const wrapper = mount<UserCard>(
      <UserCard
        {...props}
      />
    )
  const instance = wrapper.instance()
  return { wrapper, instance }
}

describe('it renders the different sized cards without failing', () => {

  const props = {
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
    userProfile: mockUserProfileData,
    size : SynapseConstants.SMALL_USER_CARD
  }

  it('displays a div with text for a user without an img', () => {
    const { wrapper } = createSmallComponent({ ...props })
    expect(wrapper.render().find('div.SRC-userImgSmall')).toHaveLength(1)
    expect(wrapper.render().find('div.SRC-userImgSmall').text()).toEqual(firstName[0])
  })

  it('displays an img for a user with an img set', () => {
    const { wrapper } = createSmallComponent(
      { ...props, preSignedURL : 'link-to-user-img.com' }
    )
    expect(wrapper.render().find('div.SRC-userImgSmall')).toHaveLength(1)
  })

  it("doesn't hide text by default", () => {
    const { wrapper } = createSmallComponent({ ...props, preSignedURL : 'link-to-user-img.com' })
    expect(wrapper.render().find('span.SRC-primary-text-color')).toHaveLength(1)
  })

  it('hides text when hideText is set to true', () => {
    const { wrapper } = createSmallComponent({ ...props, preSignedURL : 'link-to-user-img.com', hideText: true })
    expect(wrapper.render().find('span.SRC-primary-text-color')).toHaveLength(0)
  })
})

describe('it creates the correct UI for the medium card', () => {

  const props = {
    userProfile: mockUserProfileData,
    size : SynapseConstants.MEDIUM_USER_CARD
  }

  it('displays an svg for a user without an img', () => {
    const { wrapper } = createMediumComponent({ ...props })
    // one svg is for the clipboard icon, the other is for the user
    expect(wrapper.render().find('div.SRC-userImg')).toHaveLength(1)
    expect(wrapper.render().find('div.SRC-userImg').text()).toEqual(firstName[0])
  })

  it('displays an img for a user with an img set', () => {
    const { wrapper } = createMediumComponent({ ...props, preSignedURL: 'my-img-url' })
    expect(wrapper.render().find('div.SRC-userImg')).toHaveLength(1)
  })

  it("doesn't hide user email by default", () => {
    const { wrapper } = createMediumComponent({ ...props })
    expect(wrapper.render().find('p.SRC-emailText')).toHaveLength(1)
  })

  it("hide's user email by when hideEmail set ", () => {
    const { wrapper } = createMediumComponent({ ...props, hideEmail: true })
    expect(wrapper.render().find('p.SRC-emailText')).toHaveLength(0)
  })

  it('displays the context menu on toggle', async () => {
    const menuActions = [
      {
        field: 'text',
        callback: () => {}
      }
    ] as MenuAction []
    const { wrapper } = createMediumComponent({ ...props, menuActions })
    expect(wrapper.render().find('.SRC-menu-wall')).toHaveLength(0)
    const instance = wrapper.instance() as UserCardMedium
    const _event = {} as any
    await instance.toggleContextMenu(_event)
    expect(wrapper.render().find('div.dropdown')).toHaveLength(1)
  })
})

describe('it creates the correct UI for the UserCardContextMenu', () => {

  const props = {
    userProfile: mockUserProfileData,
  }

  it('renders without crashing', () => {
    const menuActions = [
      {
        field: 'text',
        callback: () => {}
      }
    ] as MenuAction []
    const { wrapper } = createUserCardContextMenu({ ...props, menuActions })
    // one svg is for the clipboard icon, one for the ellipsis,
    // and one is for the user svg
    expect(wrapper).toBeDefined()
  })

  it('renders a break with SEPERATOR in menuActions', () => {
    const menuActions = [
      {
        field: 'text',
        callback: () => {}
      },
      {
        field: SEPERATOR,
        callback: () => {}
      },
      {
        field: 'other text',
        callback: () => {}
      }
    ] as MenuAction []
    const { wrapper } = createUserCardContextMenu({ ...props, menuActions })
    expect(wrapper.find('hr.SRC-break')).toHaveLength(1)
  })

})
describe('it creates the correct UI for the large card', () => {

  const props = {
    userProfile: mockUserProfileData,
    size : SynapseConstants.LARGE_USER_CARD
  }

  it('displays the user\'s information', async () => {
    const { wrapper } = createLargeComponent({ ...props })
    expect(wrapper.render().find('div.SRC-cardMetaData')).toHaveLength(1)
    // only two fields are set for the mock profile, so there should only be two
    // fields shown
    expect(wrapper.render().find('div.SRC-cardMetaData').children()).toHaveLength(2)
  })
})
