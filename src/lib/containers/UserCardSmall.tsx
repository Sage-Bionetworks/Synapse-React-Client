import React, { useRef, useState, useEffect } from 'react'
import { Avatar, AvatarSize } from './Avatar'
import UserCardMedium from './UserCardMedium'
import { useOverlay } from '../utils/hooks/useOverlay'
import { UserBundle, UserProfile } from '../utils/synapseTypes/'
import { SynapseClient, SynapseConstants } from '../utils'
import IconSvg from './IconSvg'

export type UserCardSmallProps = {
  userProfile: UserProfile
  showCardOnHover?: boolean
  disableLink?: boolean
  link?: string
  showAccountLevelIcon?: boolean
  openLinkInNewTab?: boolean
  withAvatar?: boolean
  avatarSize?: AvatarSize
  imageURL?: string
}

const TIMER_DELAY_SHOW = 250 // milliseconds
const TIMER_DELAY_HIDE = 500

export const UserCardSmall: React.FunctionComponent<UserCardSmallProps> = ({
  userProfile,
  showCardOnHover = true,
  disableLink,
  link,
  showAccountLevelIcon = false,
  openLinkInNewTab,
  withAvatar = false,
  avatarSize = 'SMALL',
  imageURL,
  ...rest
}) => {

  const [userBundle, setUserBundle] = useState<UserBundle | undefined>()
  const [accountLevelIcon, setAccountLevelIcon] = useState<JSX.Element>(<IconSvg options={{icon: 'accountRegistered'}} />)
  const target = useRef(null)

  let mounted = true

  useEffect(() => {
    if (mounted) {
      if (showAccountLevelIcon) {
        getUserAccountLevelIcon()
      }
    }
    return () => {
      mounted = false
    }
  }, [])
  
  const getUserAccountLevelIcon = async() => {
    try {
      const certificationOrVerification =
        SynapseConstants.USER_BUNDLE_MASK_IS_CERTIFIED |
        SynapseConstants.USER_BUNDLE_MASK_IS_VERIFIED

      const bundle: UserBundle = await SynapseClient.getUserBundle(
        userProfile.ownerId,
        certificationOrVerification,
        undefined,
      )
      if (userBundle?.isCertified) {
        setAccountLevelIcon(<IconSvg options={{icon: 'accountCertified'}} />)
      }
      if (userBundle?.isVerified) {
        setAccountLevelIcon(<IconSvg options={{icon: 'accountValidated'}} />)
      }
      setUserBundle(bundle)
    } catch (err) {
      console.log("getUserAccountLevelIcon", err)
    }
  }

  const mediumUserCard = (
    <UserCardMedium userProfile={userProfile} imageURL={imageURL} {...rest} />
  )

  if (link == null) {
    link = `https://www.synapse.org/#!Profile:${userProfile.ownerId}`
  }

  const { OverlayComponent, toggleShow, toggleHide } = useOverlay(
    mediumUserCard,
    target,
    TIMER_DELAY_SHOW,
    TIMER_DELAY_HIDE,
  )

  const avatar = withAvatar ? (
    <span className="SRC-inline-avatar">
      <Avatar
        userProfile={userProfile}
        avatarSize={avatarSize}
        imageURL={imageURL}
      />
    </span>
  ) : (
    <></>
  )

  return showCardOnHover ? (
    <>
      {OverlayComponent}

      <span
        ref={target}
        onMouseEnter={() => toggleShow()}
        onMouseLeave={() => toggleHide()}
        onClick={event => {
          event.preventDefault()
          // if someone explicitly set the disable link,
          // we just return without going to the Synapse's user profile page
          if (disableLink) {
            return
          }
          window.open(link, '_blank')
        }}
        className="SRC-userCard UserCardSmall SRC-underline-on-hover"
        style={{ whiteSpace: 'nowrap' }}
      >
        {avatar}
        {`@${userProfile.userName}`}
        {showAccountLevelIcon && <span className={"account-level-icon"}>{accountLevelIcon}</span>}
      </span>
    </>
  ) : disableLink ? (
    <span
      className="SRC-userCard UserCardSmall SRC-boldText"
      style={{ cursor: 'unset' }}
    >
      {avatar}
      {`@${userProfile.userName}`}
    </span>
  ) : (
    <span>
      {avatar}
      {/* eslint-disable-next-line react/jsx-no-target-blank*/}
      <a
        className="SRC-userCard UserCardSmall"
        target={openLinkInNewTab ? '_blank' : ''}
        rel={openLinkInNewTab ? 'noreferrer' : ''}
        href={link}
      >
        {`@${userProfile.userName}`}
      </a>
    </span>
  )
}
