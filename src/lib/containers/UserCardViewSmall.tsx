import * as React from 'react'
// ignore because this is rollup requiring imports be named a certain way
// tslint:disable-next-line
import ReactTooltip from "react-tooltip"
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCircle,  } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { getColor } from './getUserData'
import { UserBundle } from '../utils/jsonResponses/UserBundle'

library.add(faCircle)

type UserBadgeViewProps = {
  loadingBar?: JSX.Element
  userBundle: UserBundle
}

export const UserCardViewSmall: React.SFC<UserBadgeViewProps> = ({ userBundle }) => {
  const { userProfile } = userBundle
  const link = `https://www.synapse.org/#!Profile:${userProfile.ownerId}`
  let img
  let marginLeft
  // TODO: get the correct label
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
        key={userProfile.preSignedURL}
        className="userProfileImage"
        alt="User Profile"
        src={userProfile.preSignedURL}
      />
    )
  } else {
    const color = getColor(userProfile.userName)
    marginLeft = '30px'
    img = (
      <React.Fragment>
        <FontAwesomeIcon className="fa-stack-2x" color={color} icon={'circle'} />
          <strong style={{ top: '-5px', right: '-10px' }} className="fa-stack-1x SRC-whiteText">
           {userProfile.firstName[0] || userProfile.userName[0]}
          </strong>
      </React.Fragment>
    )
  }
  return (
    <a href={link} className="fa-layers fa-fw SRC-centerContent">
        <span data-for={tooltipId} data-tip={label}>
          {img}
        </span>
        <ReactTooltip delayShow={1000} id={tooltipId} multiline={true}/>
        <span style={{ marginLeft, whiteSpace: 'nowrap' }}>{`@ ${userProfile.firstName} ${userProfile.lastName} (${userProfile.userName})`}</span>
    </a>
  )
}
