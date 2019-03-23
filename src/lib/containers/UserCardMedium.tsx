import * as React from 'react'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCircle, faEllipsisV, faCopy } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { getColor } from './getUserData'
import { UserProfile } from '../utils/jsonResponses/UserProfile'
import UserCardContextMenu, { MenuAction } from './UserCardContextMenu'
import { UserCardLarge } from './UserCardLarge'

library.add(faCircle)
library.add(faEllipsisV)
library.add(faCopy)

type UserCardState = {
  showModal: boolean
  isContextMenuOpen: boolean
}

export type UserCardMediumProps = {
  userProfile: UserProfile
  menuActions?: MenuAction []
  preSignedURL?: string
  hideEmail?: boolean
  isLarge?: boolean
  profileClickHandler?: (userProfile: UserProfile) => void
}

// Disable function name because compiler has to know that its a React class
// tslint:disable-next-line:function-name
export default class UserCardMedium extends React.Component<UserCardMediumProps, UserCardState> {

  public htmlDivRef = React.createRef<HTMLDivElement>()

  constructor(props: UserCardMediumProps) {
    super(props)
    this.state = {
      showModal: false,
      isContextMenuOpen: false
    }
  }

  /**
   * Function handles copying to clipboard the user's email address
   *
   * @param {string} value the email address of the user
   * @returns
   */
  public copyToClipboard = (value: string) => (event: React.SyntheticEvent) => {
    console.log('event = ', event)
    event.preventDefault()
    // https://hackernoon.com/copying-text-to-clipboard-with-javascript-df4d4988697f
    // this copies the email to the clipoard
    const el = document.createElement('textarea')
    el.value = value
    el.setAttribute('readonly', '')
    el.style.position = 'absolute'
    el.style.left = '-9999px'
    this.htmlDivRef.current!.appendChild(el)
    el.select()
    document.execCommand('copy')
    this.htmlDivRef.current!.removeChild(el)
    // show modal and hide after 4 seconds, the timing is per Material Design
    this.setState({ showModal: true })
    // hide after 4 seconds
    setTimeout(
      () => {
        this.setState({ showModal: false })
      },
      4000
    )
  }

  public toggleContextMenu = (_event: any) => {
    this.setState({ isContextMenuOpen: !this.state.isContextMenuOpen })
  }

  render () {
    const {
      userProfile,
      menuActions,
      profileClickHandler,
      isLarge = false,
      preSignedURL,
      hideEmail = false
    } = this.props
    const { isContextMenuOpen, showModal } = this.state
    const {
      displayName,
      userName,
      firstName,
      lastName,
      position
    } = userProfile
    const diameter = 80
    let img
    let name = ''
    const link = `https://www.synapse.org/#!Profile:${userProfile.ownerId}`
    // link is overriden by custom click handler
    const email = `${userName}@synapse.org`
    // call the click handler with userProfile handed to it -- only if its defined
    const profileClickHandlerWithParam = profileClickHandler && (
      (event: React.SyntheticEvent) => {
        event.preventDefault()
        profileClickHandler(userProfile)
      }
    )
    if (displayName) {
      name = displayName
    } else if (firstName && lastName) {
      name = (firstName + lastName)
    }
    if (userName) {
      name = userName
    }
    if (preSignedURL) {
      img = (
        <img
          style={{ borderRadius: '50%', padding: '5px', marginLeft: '26px' }}
          width={diameter}
          height={diameter}
          alt="User Profile"
          src={preSignedURL}
        />
      )
    } else {
      img = (
          <svg
            className="SRC-userImg"
            style={{ marginLeft: '26px' }}
            height={diameter}
            width={diameter}
          >
            <circle
              r={diameter / 2}
              cx={'50%'}
              cy={'50%'}
              fill={getColor(userProfile.userName)}
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
    const mediumCard = (
      <React.Fragment>
        {
          !hideEmail
          &&
          <TransitionGroup>
          {
            showModal
            &&
            <CSSTransition
              key={email}
              classNames="SRC-card"
              timeout={{ enter: 500, exit: 300 }}
            >
            <div key={email} className="SRC-modal"> Copied text to clipboard! </div>
            </CSSTransition>
          }
          </TransitionGroup>
        }
        {img}
        <div className="SRC-cardContent">
          <p className="SRC-eqHeightRow">
            {/* if its a medium component the header should be clickable,
              if its large then it should NOT be clickable */}
            {/* make SRC-whiteText overridable with a good name! */}
            {isLarge ? <span className="SRC-whiteText"> {name} </span> :  (
                // consolidate click events
                <a
                  href={link}
                  onClick={profileClickHandlerWithParam ? profileClickHandlerWithParam : undefined}
                  onKeyPress={profileClickHandlerWithParam ? profileClickHandlerWithParam : undefined}
                  tabIndex={0}
                  className={'SRC-hand-cursor SRC-primary-text-color'}
                >
                  {name}
                </a>
              )}
          </p>
          {
            position &&
            <p className={`${isLarge ? 'SRC-whiteText' : ''} SRC-eqHeightRow`}>
              {position}
            </p>
          }
          {
            !hideEmail
            &&
            <p
              className={`${isLarge ? 'SRC-whiteText' : 'SRC-primary-text-color'} SRC-hand-cursor SRC-showGrayOnHover
              SRC-eqHeightRow SRC-inlineFlex SRC-emailText`}
              onClick={this.copyToClipboard(email)}
              onKeyPress={this.copyToClipboard(email)}
              tabIndex={0}
              ref={this.htmlDivRef}
            >
              {`${userName}@synapse.org`}
              <FontAwesomeIcon
                style={{ marginLeft: '4px' }}
                color={isLarge ? 'white' : 'lightgray'}
                icon="copy"
              />
            </p>
          }
        </div>
        {/* conditionally render menu actions, if its not defined then we don't show the button */}
        {
          menuActions &&
          <span
            className={`SRC-extraPadding SRC-hand-cursor SRC-primary-background-color-hover SRC-inlineBlock
            SRC-cardMenuButton ${isContextMenuOpen ? 'SRC-primary-background-color' : ''}`}
            style={{ outline: 'none' }}
            tabIndex={0}
            onClick={this.toggleContextMenu}
            onKeyPress={this.toggleContextMenu}
          >
            <FontAwesomeIcon
              className={isContextMenuOpen || isLarge ? 'SRC-whiteText' : 'SRC-primary-text-color'}
              icon="ellipsis-v"
            />
            {
              isContextMenuOpen
              &&
              <UserCardContextMenu menuActions={menuActions} userProfile={userProfile}/>
            }
          </span>
        }
      </React.Fragment>
    )

    if (!isLarge) {
      return (
        <div
          style={{ border: '1px solid #DDDDDF' }}
          className={`SRC-userCard SRC-userCardMediumUp ${isContextMenuOpen ? 'SRC-hand-cursor' : ''}`}
          onClick={isContextMenuOpen ? this.toggleContextMenu : undefined}
        >
          {mediumCard}
        </div>
      )
    }
    // else return medium card inside large component
    // when the component is large we have to set the click handler to wrap both the top and bottom portion
    return (
      <div
        style={{ boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)' }}
        className={isContextMenuOpen ? 'SRC-hand-cursor' : ''}
        onClick={isContextMenuOpen ? this.toggleContextMenu : undefined}
      >
        <div className={`SRC-primary-background-color SRC-userCard SRC-userCardMediumUp ${isContextMenuOpen ? 'SRC-hand-cursor' : ''}`}>
          {mediumCard}
        </div>
        {isLarge ? <UserCardLarge userProfile={userProfile}/> : false}
      </div>
    )
  }
}
