import * as React from 'react'
import { SynapseConstants } from '../utils'
import { UserCardSmall } from './UserCardSmall'
import { UserProfile } from '../utils/jsonResponses/UserProfile'
import { UserCardMedium } from './UserCardMedium'
import { MenuAction } from './UserCardContextMenu'

type UserBadgeViewProps = {
  loadingBar?: JSX.Element
  userProfile: UserProfile
  size: string
  menuActions?: MenuAction []
}

export const UserCardSwitch: React.SFC<UserBadgeViewProps> = (
  { size, loadingBar, ...rest }
) => {
  switch (size) {
    case SynapseConstants.SMALL_USER_CARD:
      return (<UserCardSmall {...rest}/>)
    case SynapseConstants.MEDIUM_USER_CARD:
      return (<UserCardMedium {...rest}/>)
    case SynapseConstants.LARGE_USER_CARD:
      return (
        <UserCardMedium isLarge={true} {...rest} />
      )
    default:
      return <span/>
  }
}

export default UserCardSwitch
