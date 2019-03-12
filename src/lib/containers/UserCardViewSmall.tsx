import * as React from 'react'
// ignore because this is rollup requiring imports be named a certain way
// tslint:disable-next-line
import ReactTooltip from "react-tooltip"
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCircle,  } from '@fortawesome/free-solid-svg-icons'
import { UserProfile } from '../utils/jsonResponses/UserProfile'
import { getColor } from './getUserData'

library.add(faCircle)

type UserBadgeViewProps = {
  loadingBar?: JSX.Element
  userProfile: UserProfile
}

export const UserCardViewSmall: React.SFC<UserBadgeViewProps> = ({ userProfile }) => {
  const link = `https://www.synapse.org/#!Profile:${userProfile.ownerId}`
  let img
  let marginLeft
  let label = ''
  if (userProfile.displayName) {
    label += userProfile.displayName
  } else if (userProfile.firstName && userProfile.lastName) {
    label += (userProfile.firstName + userProfile.lastName)
  }
  if (userProfile.userName) {
    label += ` (${userProfile.userName})`
  }
  if (userProfile.position) {
    label += ` <br/>${userProfile.position}`
  }
  if (userProfile.location) {
    label += ` <br/>${userProfile.location}`
  }
  const tooltipId = label
  if (userProfile.preSignedURL) {
    marginLeft = '3px'
    img = (
      <img
        data-for={tooltipId}
        data-tip={label}
        key={userProfile.preSignedURL}
        className="userProfileImage"
        alt="User Profile"
        src={userProfile.preSignedURL}
      />
    )
  } else {
    const color = getColor(userProfile.userName)
    marginLeft = '3px'
    img = (
      <svg height={24} width={24} data-for={tooltipId} data-tip={label}>
        <circle
          r={12}
          cx={'50%'}
          cy={'50%'}
          fill={color}
        />
        <text
          textAnchor={'middle'}
          alignmentBaseline={'middle'}
          x={'50%'}
          y={'50%'}
          fill={'white'}
        >
          {userProfile.firstName[0] || userProfile.userName[0]}
        </text>
      </svg>
    )
  }
  return (
    <a href={link} className="SRC-userCard">
      {img}
      <ReactTooltip delayShow={1000} id={tooltipId} multiline={true}/>
      <span style={{ marginLeft, whiteSpace: 'nowrap' }}>{`@ ${userProfile.firstName} ${userProfile.lastName} (${userProfile.userName})`}</span>
    </a>
  )
}
