import React, { useRef } from 'react'
import { getColor } from '../utils/functions/getUserData'
import { UserProfile } from '../utils/synapseTypes'
import UserCardMedium from './UserCardMedium'
import { useOverlay } from '../utils/hooks/useOverlay'

const TIMER_DELAY_SHOW = 250 // milliseconds
const TIMER_DELAY_HIDE = 500

export type AvatarSize = 'SMALL' | 'MEDIUM' | 'LARGE'

export type AvatarProps = {
  userProfile: UserProfile
  avatarSize?: AvatarSize
  imageURL?: string
  showCardOnHover?: boolean
}

export const Avatar: React.FunctionComponent<AvatarProps> = ({
  userProfile,
  avatarSize = 'LARGE',
  imageURL,
  showCardOnHover = false,
}) => {
  const target = useRef(null)

  const mediumUserCard = (
    <UserCardMedium userProfile={userProfile} imageURL={imageURL} />
  )
  const {
    OverlayComponent,
    isShowing: isShowingOverlay,
    toggleShow,
    toggleHide,
  } = useOverlay(mediumUserCard, target, TIMER_DELAY_SHOW, TIMER_DELAY_HIDE)

  let sizeClass
  switch (avatarSize) {
    case 'SMALL':
      sizeClass = 'SRC-userImgSmall'
      break
    case 'MEDIUM':
      sizeClass = 'SRC-userImgMedium'
      break
    case 'LARGE':
      sizeClass = 'SRC-userImg'
      break
    default:
      break
  }

  const cursorStyle = showCardOnHover ? 'pointer' : 'unset'

  return (
    <>
      {showCardOnHover && OverlayComponent}
      {imageURL ? (
        <div
          ref={target}
          onMouseEnter={() => toggleShow()}
          onMouseLeave={() => toggleHide()}
          onClick={event => {
            event.stopPropagation()
            isShowingOverlay ? toggleHide(false) : toggleShow(false)
          }}
          style={{ backgroundImage: `url(${imageURL})`, cursor: cursorStyle }}
          className={sizeClass}
        />
      ) : (
        <div
          ref={target}
          onMouseEnter={() => toggleShow()}
          onMouseLeave={() => toggleHide()}
          onClick={event => {
            event.stopPropagation()
            isShowingOverlay ? toggleHide(false) : toggleShow(false)
          }}
          style={{
            background: getColor(userProfile.userName),
            cursor: cursorStyle,
          }}
          className={`${sizeClass} SRC-centerContentInline`}
        >
          {userProfile.firstName &&
            (userProfile.firstName[0] || userProfile.userName[0])}
        </div>
      )}
    </>
  )
}
