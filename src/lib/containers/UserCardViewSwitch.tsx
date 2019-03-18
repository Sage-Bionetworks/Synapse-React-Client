import * as React from 'react'
import { SynapseConstants } from '../utils'
import { UserCardViewSmall } from './UserCardViewSmall'
import { UserProfile } from '../utils/jsonResponses/UserProfile'
import { UserCardViewMedium } from './UserCardViewMedium'
import { MenuAction } from './UserCardContextMenu'

type UserBadgeViewProps = {
  loadingBar?: JSX.Element
  userProfile: UserProfile
  size: string
  menuActions?: MenuAction []
}

export const UserCardViewSwitch: React.SFC<UserBadgeViewProps> = (
  { size, loadingBar, ...rest }
) => {
  switch (size) {
    case SynapseConstants.SMALL_USER_CARD:
      return (<UserCardViewSmall {...rest}/>)
    default:
      return (<UserCardViewMedium {...rest}/>)
  }
}

export default UserCardViewSwitch
