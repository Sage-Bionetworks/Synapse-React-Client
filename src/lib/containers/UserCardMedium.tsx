import * as React from 'react'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faCircle,
  faEllipsisV,
  faCopy,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { getColor } from './getUserData'
import { UserProfile } from '../utils/jsonResponses/UserProfile'
import UserCardContextMenu, { MenuAction } from './UserCardContextMenu'
import { UserCardLarge } from './UserCardLarge'
import IconCopy from '../assets/icons/IconCopy'

library.add(faCircle)
library.add(faEllipsisV)
library.add(faCopy)

type UserCardState = {
  showModal: boolean
  isContextMenuOpen: boolean
}

export type UserCardMediumProps = {
  userProfile: UserProfile
  menuActions?: MenuAction[]
  preSignedURL?: string
  hideEmail?: boolean
  isLarge?: boolean
  link?: string
  disableLink?: boolean
}

export default class UserCardMedium extends React.Component<
  UserCardMediumProps,
  UserCardState
> {
  public htmlDivRef = React.createRef<HTMLDivElement>()

  constructor(props: UserCardMediumProps) {
    super(props)
    this.state = {
      showModal: false,
      isContextMenuOpen: false,
    }
  }

  /**
   * Function handles copying to clipboard the user's email address
   *
   * @param {string} value the email address of the user
   * @returns
   */
  public copyToClipboard = (value: string) => (event: React.SyntheticEvent) => {
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
    setTimeout(() => {
      this.setState({ showModal: false })
    }, 4000)
  }

  public toggleContextMenu = (_event: any) => {
    this.setState({ isContextMenuOpen: !this.state.isContextMenuOpen })
  }

  public componentDidMount() {
    // SWC-4778: https://stackoverflow.com/questions/23821768/how-to-listen-for-click-events-that-are-outside-of-a-component
    window.addEventListener('mouseup', this.pageClick, false)
  }

  public componentWillUnmount() {
    window.removeEventListener('mouseup', this.pageClick, false)
  }

  public pageClick = (_event: any) => {
    if (!this.state.isContextMenuOpen) {
      return
    }
    // hide content menu (deferred, to allow menu action to process)
    setTimeout(() => {
      if (this.state.isContextMenuOpen) {
        this.toggleContextMenu(_event)
      }
    }, 10)
  }

  render() {
    const {
      userProfile,
      menuActions,
      isLarge = false,
      preSignedURL,
      hideEmail = false,
      disableLink = false,
      link,
    } = this.props
    const { isContextMenuOpen, showModal } = this.state
    const {
      displayName,
      userName,
      firstName,
      lastName,
      position,
      company,
    } = userProfile
    let img
    let name = ''
    const linkLocation = link
      ? link
      : `https://www.synapse.org/#!Profile:${userProfile.ownerId}`
    // linkLocation is overriden by custom click handler
    const email = `${userName}@synapse.org`
    if (displayName) {
      name = displayName
    } else if (firstName && lastName) {
      name = `${firstName} ${lastName}`
    } else if (userName) {
      name = userName
    }
    if (preSignedURL) {
      img = (
        <div
          style={{ backgroundImage: `url(${preSignedURL})` }}
          className="SRC-userImg"
        />
      )
    } else {
      img = (
        <div
          style={{ background: getColor(userName) }}
          className="SRC-userImg SRC-centerContentInline"
        >
          {userProfile.firstName &&
            (userProfile.firstName[0] || userProfile.userName[0])}
        </div>
      )
    }
    const mediumCard = (
      <React.Fragment>
        {!hideEmail && (
          <TransitionGroup>
            {showModal && (
              <CSSTransition
                key={email}
                classNames="SRC-card"
                timeout={{ enter: 500, exit: 300 }}
              >
                <div key={email} className="SRC-modal">
                  {' '}
                  Email address copied to clipboard{' '}
                </div>
              </CSSTransition>
            )}
          </TransitionGroup>
        )}
        {disableLink && img}
        {!disableLink && (
          <a
            href={linkLocation}
            className={`SRC-no-underline-on-hover ${
              isLarge ? 'SRC-isLargeCard' : ''
            }`}
          >
            {img}
          </a>
        )}
        <div className="SRC-cardContent">
          <p className="SRC-eqHeightRow SRC-userCardName">
            {/*
              if its a medium component the header should be clickable (unless disableLink is set),
              if its large then it should NOT be clickable
            */}
            {/* make SRC-whiteText overridable with a good name! */}
            {isLarge || disableLink ? (
              <span className={isLarge ? 'SRC-whiteText' : 'SRC-blackText'}>
                {' '}
                {name}{' '}
              </span>
            ) : (
              // consolidate click events
              <a
                href={linkLocation}
                tabIndex={0}
                className={'SRC-hand-cursor SRC-primary-text-color'}
              >
                {name}
              </a>
            )}
          </p>
          {(position || company) && (
            <p className={`${isLarge ? 'SRC-whiteText' : ''}`}>
              {position} {position ? ' / ' : ''} {company}
            </p>
          )}
          {!hideEmail && (
            <p
              className={`${
                isLarge
                  ? 'SRC-whiteText'
                  : 'SRC-primary-text-color SRC-primary-color-hover'
              }
              SRC-hand-cursor SRC-eqHeightRow SRC-inlineFlex SRC-emailText SRC-cardSvg`}
              onClick={this.copyToClipboard(email)}
              onKeyPress={this.copyToClipboard(email)}
              tabIndex={0}
              ref={this.htmlDivRef}
            >
              <span style={{ paddingRight: '5px' }}>
                {`${userName}@synapse.org`}
              </span>
              {IconCopy}
            </p>
          )}
        </div>
        {/* conditionally render menu actions, if its not defined then we don't show the button */}
        {menuActions && (
          <React.Fragment>
            <span
              className={`SRC-extraPadding SRC-hand-cursor SRC-primary-background-color-hover SRC-inlineBlock
              SRC-cardMenuButton ${
                isContextMenuOpen ? 'SRC-primary-background-color' : ''
              }`}
              style={{ outline: 'none' }}
              tabIndex={0}
              onClick={this.toggleContextMenu}
              onKeyPress={this.toggleContextMenu}
            >
              <FontAwesomeIcon
                className={
                  isContextMenuOpen || isLarge
                    ? 'SRC-whiteText'
                    : 'SRC-primary-text-color'
                }
                icon="ellipsis-v"
                fixedWidth={true}
              />
            </span>
            {isContextMenuOpen && (
              <UserCardContextMenu
                menuActions={menuActions}
                userProfile={userProfile}
              />
            )}
          </React.Fragment>
        )}
        {!menuActions && <span style={{ padding: '0px 0px 0px 35px' }} />}
      </React.Fragment>
    )

    if (!isLarge) {
      return (
        <div
          style={{ border: '1px solid #DDDDDF' }}
          className={`SRC-userCard SRC-userCardMediumUp ${
            isContextMenuOpen ? 'SRC-hand-cursor' : ''
          }`}
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
        <div
          className={`SRC-primary-background-color SRC-userCard SRC-userCardMediumUp ${
            isContextMenuOpen ? 'SRC-hand-cursor' : ''
          }`}
        >
          {mediumCard}
        </div>
        {isLarge ? <UserCardLarge userProfile={userProfile} /> : false}
      </div>
    )
  }
}
