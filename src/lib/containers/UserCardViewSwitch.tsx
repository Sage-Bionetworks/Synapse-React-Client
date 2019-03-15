import * as React from 'react'
import { SynapseConstants } from '../utils'
import { UserCardViewSmall } from './UserCardViewSmall'
import { UserProfile } from '../utils/jsonResponses/UserProfile'
import { UserCardViewMedium } from './UserCardViewMedium'
import { MenuAction } from './UserCardContextMenu'

type UserBadgeViewProps = {
  loadingBar?: JSX.Element
  userBundle: UserProfile
  size: string
  menuActions?: MenuAction []
}

export const UserCardViewSwitch: React.SFC<UserBadgeViewProps> = (
  { userBundle, loadingBar = (<div/>), size, menuActions }
) => {
  if (!userBundle) {
    return loadingBar || false
  }
  switch (size) {
    case SynapseConstants.SMALL_USER_CARD:
      return (<UserCardViewSmall userProfile={userBundle}/>)
    default:
      return (<UserCardViewMedium menuActions={menuActions} userProfile={userBundle}/>)
  }
}

export default UserCardViewSwitch
