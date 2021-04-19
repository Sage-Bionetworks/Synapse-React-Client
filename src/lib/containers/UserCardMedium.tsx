import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faCircle,
  faCopy,
  faEllipsisV,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import ReactTooltip from 'react-tooltip'
import { SynapseClient, SynapseConstants } from '../utils'
import IconCopy from '../assets/icons/IconCopy'
import ValidatedProfileIcon from '../assets/icons/ValidatedProfile'
import { UserBundle, UserProfile } from '../utils/synapseTypes/'
import { Avatar } from './Avatar'
import { ToastMessage } from './ToastMessage'
import UserCardContextMenu, { MenuAction } from './UserCardContextMenu'
import { UserCardLarge } from './UserCardLarge'

library.add(faCircle)
library.add(faEllipsisV)
library.add(faCopy)

type UserCardState = {
  showModal: boolean
  isContextMenuOpen: boolean
  ORCIDHref?: string
}

export type UserCardMediumProps = {
  userProfile: UserProfile
  menuActions?: MenuAction[]
  imageURL?: string
  hideEmail?: boolean
  isLarge?: boolean
  link?: string
  openLinkInNewTab?: boolean
  disableLink?: boolean
  isCertified?: boolean
  isValidated?: boolean
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
      ORCIDHref: undefined,
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

  public async updateOrcID() {
    // PORTALS-1893: Add ORCID to medium/large card
    const { ORCIDHref } = this.state
    if (!ORCIDHref) {
      const { userProfile } = this.props
      const { ownerId } = userProfile
      const bundle: UserBundle = await SynapseClient.getUserBundle(
        ownerId,
        SynapseConstants.USER_BUNDLE_MASK_ORCID,
        undefined,
      )
      this.setState({ ORCIDHref: bundle.ORCID })
    }
  }

  public componentDidMount() {
    // SWC-4778: https://stackoverflow.com/questions/23821768/how-to-listen-for-click-events-that-are-outside-of-a-component
    window.addEventListener('mouseup', this.pageClick, false)
    this.updateOrcID()
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
      imageURL,
      hideEmail = false,
      disableLink = false,
      link,
      openLinkInNewTab = false,
      isValidated,
      isCertified,
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
    const validatedUserProfileTooltipId = `${userName}-tooltip`
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
    const avatar = (
      <Avatar
        userProfile={userProfile}
        imageURL={imageURL}
        avatarSize={'LARGE'}
      />
    )
    const mediumCard = (
      <React.Fragment>
        {!hideEmail && (
          <ToastMessage
            show={showModal}
            text="Email address copied to clipboard"
            autohide={true}
          ></ToastMessage>
        )}
        {disableLink && avatar}
        {!disableLink && (
          // eslint-disable-next-line react/jsx-no-target-blank
          <a
            href={linkLocation}
            target={openLinkInNewTab ? '_blank' : ''}
            rel={openLinkInNewTab ? 'noreferrer' : ''}
            className={`SRC-no-underline-on-hover ${
              isLarge ? 'SRC-isLargeCard' : ''
            }`}
          >
            {avatar}
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
                {name}
              </span>
            ) : (
              // consolidate click events
              // eslint-disable-next-line react/jsx-no-target-blank
              <a
                href={linkLocation}
                target={openLinkInNewTab ? '_blank' : ''}
                rel={openLinkInNewTab ? 'noreferrer' : ''}
                tabIndex={0}
                className={'SRC-hand-cursor SRC-primary-text-color'}
              >
                {name}
              </a>
            )}
            {isValidated && (
              <span
                data-for={validatedUserProfileTooltipId}
                data-tip="This user profile has been validated."
              >
                <ReactTooltip
                  delayShow={300}
                  place="bottom"
                  type="dark"
                  effect="solid"
                  id={validatedUserProfileTooltipId}
                />
                {ValidatedProfileIcon}
              </span>
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
          {this.state.ORCIDHref && (
            <a
              href={this.state.ORCIDHref}
              target="_blank"
              rel="noopener noreferrer"
              tabIndex={0}
            >
              <p
                className={
                  isLarge
                    ? 'SRC-whiteText'
                    : 'SRC-primary-text-color SRC-primary-color-hover'
                }
              >
                View ORCID
              </p>
            </a>
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
          style={{ border: '1px solid #DDDDDF', backgroundColor: 'white' }}
          className={`cardContainer SRC-userCard SRC-userCardMediumUp ${
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
        className={
          isContextMenuOpen ? 'SRC-hand-cursor cardContainer' : 'cardContainer'
        }
        onClick={isContextMenuOpen ? this.toggleContextMenu : undefined}
      >
        <div
          className={`SRC-primary-background-color SRC-userCard SRC-userCardMediumUp ${
            isContextMenuOpen ? 'SRC-hand-cursor' : ''
          }`}
        >
          {mediumCard}
        </div>
        {isLarge ? (
          <UserCardLarge userProfile={userProfile} isCertified={isCertified} />
        ) : (
          false
        )}
      </div>
    )
  }
}
