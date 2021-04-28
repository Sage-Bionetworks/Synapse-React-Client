import React, { useRef } from 'react'
import { UserProfile } from '../utils/synapseTypes/'
import { Avatar, AvatarSize } from './Avatar'
import UserCardMedium from './UserCardMedium'
import { useOverlay } from '../utils/hooks/useOverlay'

export type UserCardSmallProps = {
  userProfile: UserProfile
  showCardOnHover?: boolean
  disableLink?: boolean
  link?: string
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
  openLinkInNewTab,
  withAvatar = false,
  avatarSize = 'SMALL',
  imageURL,
  ...rest
}) => {
  const target = useRef(null)

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
          window.open(link, '_blank')
        }}
        className="SRC-userCard UserCardSmall SRC-underline-on-hover"
        style={{ whiteSpace: 'nowrap' }}
      >
        {avatar}
        {`@${userProfile.userName}`}
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
