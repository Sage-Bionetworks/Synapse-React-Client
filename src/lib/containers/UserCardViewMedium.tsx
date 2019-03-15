import * as React from 'react'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCircle, faEllipsisV, faCopy } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { getColor } from './getUserData'
import { UserProfile } from '../utils/jsonResponses/UserProfile'
// tslint:disable-next-line
// import ReactTooltip from "react-tooltip"

library.add(faCircle)
library.add(faEllipsisV)
library.add(faCopy)

type UserBadgeViewProps = {
  loadingBar?: JSX.Element
  userProfile: UserProfile
}

// Disable function name because compiler has to know that its a class
// tslint:disable-next-line:function-name
export function UserCardViewMedium({ userProfile }: UserBadgeViewProps) {
  const htmlDivRef = React.useRef<HTMLDivElement>(null)
  const [showModal, setShowModal] = React.useState(false)

  /**
   * Function handles copying to clipboard the user's email address
   *
   * @param {string} value the email address of the user
   * @returns
   */
  function copyToClipboard(value: string) {
    return function _copyToClipboard(_e: any) {
      // https://hackernoon.com/copying-text-to-clipboard-with-javascript-df4d4988697f
      // this copies the email to the clipoard
      const el = document.createElement('textarea')
      el.value = value
      el.setAttribute('readonly', '')
      el.style.position = 'absolute'
      el.style.left = '-9999px'
      htmlDivRef.current!.appendChild(el)
      el.select()
      document.execCommand('copy')
      htmlDivRef.current!.removeChild(el)
      setShowModal(true)
      // hide after 4 seconds
      setTimeout(
        () => {
          setShowModal(false)
        },
        4000
      )
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
  // should pass in the userprofile json object
  // Need a clickhandler, need to provide the base url all together
  // link should be a prop, but with default for now
  const link = `https://www.synapse.org/#!Profile:${userProfile.ownerId}`
  const email = `${userName}@synapse.org`
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
      <TransitionGroup>
        {
          showModal
          &&
        <CSSTransition
          key={email}
          classNames="SRC-card"
          timeout={{ enter: 500, exit: 300 }}
        >
          <div key={link} className="SRC-modal"> Copied text to clipboard! </div>
        </CSSTransition>}
      </TransitionGroup>
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
          className="SRC-showGrayOnHover SRC-eqHeightRow SRC-inlineFlex SRC-copyContainer"
          onClick={copyToClipboard(email)}
          ref={htmlDivRef}
        >
          {userName}@synapse.org
          <FontAwesomeIcon
            style={{ marginLeft: '4px' }}
            color="lightgray"
            icon="copy"
          />
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
