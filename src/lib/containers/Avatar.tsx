import React from 'react'
import { getColor } from '../utils/functions/getUserData'
import { UserProfile } from '../utils/synapseTypes'

export type AvatarSize = 'SMALL' | 'LARGE'

export type AvatarProps = {
  userProfile: UserProfile
  avatarSize?: AvatarSize
  imageURL?: string
}

export const Avatar: React.FunctionComponent<AvatarProps> = ({
  userProfile,
  avatarSize = 'LARGE',
  imageURL,
}) => {
  const sizeClass = avatarSize === 'SMALL' ? 'SRC-userImgSmall' : 'SRC-userImg'

  return imageURL ? (
    <div
      style={{ backgroundImage: `url(${imageURL})` }}
      className={sizeClass}
    />
  ) : (
    <div
      style={{ background: getColor(userProfile.userName) }}
      className={`${sizeClass} SRC-centerContentInline`}
    >
      {userProfile.firstName &&
        (userProfile.firstName[0] || userProfile.userName[0])}
    </div>
  )
}
