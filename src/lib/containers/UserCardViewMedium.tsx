import * as React from 'react'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCircle, faEllipsisV, faClipboard } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { getColor } from './getUserData'
import { UserBundle } from '../utils/jsonResponses/UserBundle'

library.add(faCircle)
library.add(faEllipsisV)
library.add(faClipboard)

type UserBadgeViewProps = {
  loadingBar?: JSX.Element
  userBundle: UserBundle
}

// tslint:disable-next-line:function-name
export function UserCardViewMedium({ userBundle }: UserBadgeViewProps) {
  const textAreaRef = React.useRef<HTMLTextAreaElement>(null)

  function copyToClipboard(_e: any) {
    textAreaRef.current!.select()
    document.execCommand('copy')
  }

  const { userProfile } = userBundle
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
  if (userProfile.preSignedURL) {
    img = (
      <img
        style={{ borderRadius: '50%', padding: '5px', marginLeft: '26px' }}
        width={'67px'}
        height={'67px'}
        key={userProfile.preSignedURL}
        alt="User Profile"
        src={userProfile.preSignedURL}
      />
    )
  } else {
    const radius = 40
    const color = getColor(userProfile.userName)
    img = (
      <svg style={{ marginLeft: '26px' }} height={radius * 2} width={radius * 2}>
        <circle
          r={radius}
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
        {/* textarea is placeholder for email text to get copied to clipboard */}
        <div
          className="SRC-eqHeightRow SRC-inlineFlex"
        >
          <textarea
            className="SRC-textareaCopy SRC-eqHeightRow"
            ref={textAreaRef}
            onClick={copyToClipboard}
            value={`${userName}@synapse.org`}
            readOnly={true}
          />
          <FontAwesomeIcon color="gray" icon="clipboard"/>
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
