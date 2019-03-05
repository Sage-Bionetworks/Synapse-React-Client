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
        style={{ borderRadius: '50%', padding: '5px' }}
        width={'67px'}
        height={'67px'}
        key={userProfile.preSignedURL}
        alt="User Profile"
        src={userProfile.preSignedURL}
      />
    )
  } else {
    const color = getColor(userProfile.userName)
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
    <div className="SRC-centerContent col-xs-3">
      {img}
      <span style={{ display: 'inline-block', paddingLeft: '17px', paddingTop: '10px', paddingBottom: '10px' }}>
        <p>
          {name}
        </p>
        <p>
          {position}
        </p>
        {/* textarea is placeholder for email text */}
        <textarea
          style={{ border: 'none', backgroundColor: 'transparent', resize: 'none', outline: 'none', disable: 'inline' }}
          ref={textAreaRef}
          onClick={copyToClipboard}
          value={`${userName}@synapse.org`}
          readOnly={true}
        >
          <FontAwesomeIcon color="gray" icon="clipboard"/>
        </textarea>
      </span>
      <span
        role={'button'}
        style={{ display: 'inline-block', paddingLeft: '17px', paddingTop: '10px', paddingBottom: '10px' }}
      >
        <FontAwesomeIcon color="blue" icon="ellipsis-v"/>
      </span>
    </div>
  )
}
