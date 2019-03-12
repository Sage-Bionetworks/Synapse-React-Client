import * as React from 'react'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCircle, faEllipsisV, faClipboard } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { getColor } from './getUserData'
import { UserProfile } from '../utils/jsonResponses/UserProfile'

library.add(faCircle)
library.add(faEllipsisV)
library.add(faClipboard)

type UserBadgeViewProps = {
  loadingBar?: JSX.Element
  userProfile: UserProfile
}

// tslint:disable-next-line:function-name
export function UserCardViewMedium({ userProfile }: UserBadgeViewProps) {
  const fauxTextAreaRef = React.useRef<HTMLDivElement>(null)

  function copyToClipboard(value: string) {
    return function _copyToClipboard(_e: any) {
      // https://hackernoon.com/copying-text-to-clipboard-with-javascript-df4d4988697f
      const el = document.createElement('textarea')
      el.value = value
      el.setAttribute('readonly', '')
      el.style.position = 'absolute'
      el.style.left = '-9999px'
      fauxTextAreaRef.current!.appendChild(el)
      el.select()
      document.execCommand('copy')
      fauxTextAreaRef.current!.removeChild(el)
      document.execCommand('copy')
    }
  }

  const {
    displayName,
    userName,
    firstName,
    lastName,
    position
  } = userProfile
  // configure info to display
  let img
  let name = ''
  const link = `https://www.synapse.org/#!Profile:${userProfile.ownerId}`
  if (displayName) {
    name = displayName
  } else if (firstName && lastName) {
    name = (firstName + lastName)
  }
  if (userName) {
    name = userName
  }
  const diameter = 80
  if (userProfile.preSignedURL) {
    img = (
      <img
        style={{ borderRadius: '50%', padding: '5px', marginLeft: '26px' }}
        width={diameter}
        height={diameter}
        key={userProfile.preSignedURL}
        alt="User Profile"
        src={userProfile.preSignedURL}
      />
    )
  } else {
    const color = getColor(userProfile.userName)
    img = (
      <svg style={{ marginLeft: '26px' }} height={diameter} width={diameter}>
        <circle
          r={diameter / 2}
          cx={'50%'}
          cy={'50%'}
          fill={color}
        />
        <text
          textAnchor={'middle'}
          alignmentBaseline={'middle'}
          fontSize={26}
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
    <div className="SRC-userCard SRC-userCardMedium">
      {img}
      <div className="SRC-cardMetaData">
        <div className="SRC-eqHeightRow">
          <a href={link}>
            {name}
          </a>
        </div>
        {position &&
          <div className="SRC-eqHeightRow">
            {position}
          </div>
        }
        <div
          className="SRC-eqHeightRow SRC-inlineFlex SRC-copyContainer"
          onClick={copyToClipboard(`${userName}@synapse.org`)}
          ref={fauxTextAreaRef}
        >
          {userName}@synapse.org
          <FontAwesomeIcon style={{ marginLeft: '4px' }} color="gray" icon="clipboard"/>
        </div>
      </div>
      <span
        role={'button'}
        className="SRC-inlineBlock SRC-cardMenuButton"
      >
        <FontAwesomeIcon color="#4393C7" icon="ellipsis-v"/>
      </span>
    </div>
  )
}
