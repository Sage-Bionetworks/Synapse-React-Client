import * as React from 'react'
import { SynapseConstants } from '../utils'
import { UserCardViewSmall } from './UserCardViewSmall'
import { UserProfile } from '../utils/jsonResponses/UserProfile'
import { UserCardViewMedium } from './UserCardViewMedium'

type UserBadgeViewProps = {
  loadingBar?: JSX.Element
  userBundle: UserProfile
  size: string
}

export const UserCardViewSwitch: React.SFC<UserBadgeViewProps> = ({ userBundle, loadingBar = (<div/>), size }) => {
  if (!userBundle) {
    return loadingBar || false
  }
  switch (size) {
    case SynapseConstants.SMALL_USER_CARD:
      return (<UserCardViewSmall userProfile={userBundle}/>)
    default:
      return (<UserCardViewMedium userProfile={userBundle}/>)
  }
}

export default UserCardViewSwitch
