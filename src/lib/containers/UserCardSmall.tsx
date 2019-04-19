import * as React from 'react'
// ignore because this is rollup requiring imports be named a certain way
// tslint:disable-next-line
import ReactTooltip from "react-tooltip"
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCircle,  } from '@fortawesome/free-solid-svg-icons'
import { UserProfile } from '../utils/jsonResponses/UserProfile'
import { getColor } from './getUserData'

library.add(faCircle)

export type UserCardSmallProps = {
  userProfile: UserProfile
  preSignedURL?: string
  hideText?: boolean
  hideTooltip?: boolean
  link?: string
}

export const UserCardSmall: React.SFC<UserCardSmallProps> = (
  { userProfile, hideText = false, hideTooltip = false, preSignedURL, link }
) => {
  const linkLocation = link ? link : `https://www.synapse.org/#!Profile:${userProfile.ownerId}`
  let img
  let marginLeft
  let label = ''
  if (!hideTooltip) {
    if (userProfile.displayName) {
      label += userProfile.displayName
    } else if (userProfile.firstName && userProfile.lastName) {
      label += (`${userProfile.firstName} ${userProfile.lastName}`)
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
  }

  if (preSignedURL) {
    marginLeft = '3px'
    img = (
      <div
        className="SRC-userImgSmall"
        style={{ backgroundImage: `url(${preSignedURL})` }}
        data-for={label}
        data-tip={label}
      />
    )
  } else {
    const color = getColor(userProfile.userName)
    marginLeft = '3px'
    img = (
      <div style={{ background: color }} className="SRC-userImgSmall SRC-centerContentInline">
        {userProfile.firstName && userProfile.firstName[0] || userProfile.userName[0]}
      </div>
    )
  }
  return (
    <a
      href={linkLocation}
      className="SRC-userCard SRC-primary-text-color SRC-no-underline-on-hover"
    >
      {img}
        <ReactTooltip delayShow={1000} id={label} multiline={true}/>
        {!hideText && <span className="SRC-primary-text-color SRC-underline-on-hover" style={{ marginLeft, whiteSpace: 'nowrap' }}>{`@${userProfile.userName}`}</span>}
    </a>
  )
}
