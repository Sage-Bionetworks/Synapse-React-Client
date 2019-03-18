import * as React from 'react'
import { SynapseConstants } from '../utils'
import { UserCardViewSmall } from './UserCardViewSmall'
import { UserProfile } from '../utils/jsonResponses/UserProfile'
import { UserCardViewMedium } from './UserCardViewMedium'
import { MenuAction } from './UserCardContextMenu'
import { UserCardViewLarge } from './UserCardViewLarge'

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
    case SynapseConstants.MEDIUM_USER_CARD:
      return (<UserCardViewMedium {...rest}/>)
    case SynapseConstants.LARGE_USER_CARD:
      return (
        <div>
          <UserCardViewMedium {...rest} />
          <UserCardViewLarge {...rest}/>
        </div>
      )
    default:
      return <span/>
  }
}

export default UserCardViewSwitch
