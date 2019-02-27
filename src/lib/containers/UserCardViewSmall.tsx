import * as React from 'react'
// ignore because this is rollup requiring imports be named a certain way
// tslint:disable-next-line
import ReactTooltip from "react-tooltip"
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCircle,  } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

library.add(faCircle)

const COLORS: string[] = [
  'chocolate',
  'black',
  'firebrick',
  'maroon',
  'olive',
  'limegreen',
  'forestgreen',
  'darkturquoise',
  'teal',
  'blue',
  'navy',
  'darkmagenta',
  'purple',
  'stateblue',
  'orangered',
  'forestblue',
  'blueviolet'
]

const getColor = (hash: number) => {
  return COLORS[hash % COLORS.length]
}

const hash = (userName: string) => {
  const val = userName
                .split('')
                .reduce((prevHash, currVal) => (((prevHash << 5) - prevHash) + currVal.charCodeAt(0)) | 0, 0)
  return Math.abs(val)
}

type UserBadgeViewProps = {
  loadingBar?: JSX.Element
  userBundle: any
}

export const UserCardViewSmall: React.SFC<UserBadgeViewProps> = ({ userBundle }) => {
  const { userProfile } = userBundle
  const hashedUserName = hash(userProfile.userName)
  const color = getColor(hashedUserName)
  const link = `https://www.synapse.org/#!Profile:${userProfile.ownerId}`
  const tooltipId = JSON.stringify(userProfile)
  let img
  let marginLeft
  // @ts-ignore
  const label = 'a very good label'
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
        <ReactTooltip delayShow={1000} id={tooltipId} />
        <span style={{ marginLeft, whiteSpace: 'nowrap' }}>{`@ ${userProfile.firstName} ${userProfile.lastName} (${userProfile.userName})`}</span>
    </a>
  )
}
