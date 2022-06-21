import React, { useEffect, useMemo, useRef, useState } from 'react'
import { SynapseClient, SynapseConstants } from '../utils'
import { PRODUCTION_ENDPOINT_CONFIG } from '../utils/functions/getEndpoint'
import { useOverlay } from '../utils/hooks/useOverlay'
import { UserBundle, UserProfile } from '../utils/synapseTypes/'
import { Avatar, AvatarSize } from './Avatar'
import IconSvg from './IconSvg'
import UserCardMedium from './UserCardMedium'

export type UserCardSmallProps = {
  userProfile: UserProfile
  showCardOnHover?: boolean
  disableLink?: boolean
  link?: string
  showAccountLevelIcon?: boolean
  openLinkInNewTab?: boolean
  withAvatar?: boolean
  avatarSize?: AvatarSize
  isLoadingAvatar?: boolean
  imageURL?: string
  className?: string
  showFullName?: boolean
}

const TIMER_DELAY_SHOW = 250 // milliseconds
const TIMER_DELAY_HIDE = 500

export const UserCardSmall = (props: UserCardSmallProps) => {
  const {
    userProfile,
    showCardOnHover = true,
    disableLink,
    showAccountLevelIcon = false,
    openLinkInNewTab,
    withAvatar = false,
    avatarSize = 'SMALL',
    imageURL,
    className,
    showFullName = false,
    isLoadingAvatar,
    ...rest
  } = props
  let { link } = props

  const [userBundle, setUserBundle] = useState<UserBundle | undefined>()
  const [accountLevelIcon, setAccountLevelIcon] = useState<JSX.Element>(
    <IconSvg options={{ icon: 'accountRegistered' }} />,
  )
  const target = useRef(null)

  useEffect(() => {
    let isMounted = true
    const getUserAccountLevelIcon = async () => {
      try {
        const certificationOrVerification =
          SynapseConstants.USER_BUNDLE_MASK_IS_CERTIFIED |
          SynapseConstants.USER_BUNDLE_MASK_IS_VERIFIED

        const bundle: UserBundle = await SynapseClient.getUserBundle(
          userProfile.ownerId,
          certificationOrVerification,
          undefined,
        )
        if (isMounted) {
          if (userBundle?.isCertified) {
            setAccountLevelIcon(
              <IconSvg options={{ icon: 'accountCertified' }} />,
            )
          }
          if (userBundle?.isVerified) {
            setAccountLevelIcon(
              <IconSvg options={{ icon: 'accountValidated' }} />,
            )
          }
          setUserBundle(bundle)
        }
      } catch (err) {
        if (isMounted) {
          console.log('getUserAccountLevelIcon', err)
        }
      }
    }

    if (showAccountLevelIcon) {
      getUserAccountLevelIcon()
    }
    return () => {
      console.log('UserCardSmall is rerendering/unmounting')
      isMounted = false
    }
  }, [
    showAccountLevelIcon,
    userBundle?.isCertified,
    userBundle?.isVerified,
    userProfile.ownerId,
  ])

  const mediumUserCard = useMemo(
    () => (
      <UserCardMedium userProfile={userProfile} imageURL={imageURL} {...rest} />
    ),
    [imageURL, rest, userProfile],
  )

  if (link == null) {
    link = `${PRODUCTION_ENDPOINT_CONFIG.PORTAL}#!Profile:${userProfile.ownerId}`
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
        isLoadingAvatar={isLoadingAvatar}
      />
    </span>
  ) : (
    <></>
  )

  const fullName = showFullName ? (
    <span className={'user-fullname'}>
      &nbsp;
      {`${userProfile.firstName ?? ''}`}&nbsp;{`${userProfile.lastName ?? ''}`}
    </span>
  ) : (
    <></>
  )

  return showCardOnHover ? (
    <>
      <OverlayComponent />
      <a
        ref={target}
        href={disableLink ? undefined : link}
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
        className={`SRC-userCard UserCardSmall ${className ?? ''}`}
        style={{ whiteSpace: 'nowrap' }}
      >
        {avatar}
        {`@${userProfile.userName}`}
        {fullName}
        {showAccountLevelIcon && (
          <span className={'account-level-icon'}>{accountLevelIcon}</span>
        )}
      </a>
    </>
  ) : disableLink ? (
    <span
      className="SRC-userCard UserCardSmall SRC-boldText"
      style={{ cursor: 'unset' }}
    >
      {avatar}
      {`@${userProfile.userName}`}
      {fullName}
    </span>
  ) : (
    <a>
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
    </a>
  )
}
