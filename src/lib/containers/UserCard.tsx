import React, { useState, useEffect } from 'react'
import { getPrincipalAliasRequest } from '../utils/SynapseClient'
import { MenuAction } from './UserCardContextMenu'
import { UserProfile } from '../utils/synapseTypes/'
import { SynapseConstants } from '../utils/'
import { UserCardSmall, UserCardSmallProps } from './UserCardSmall'
import UserCardMedium, { UserCardMediumProps } from './UserCardMedium'
import usePreFetchResource from '../utils/hooks/usePreFetchImage'
import { Avatar, AvatarProps, AvatarSize } from './Avatar'
import { useSynapseContext } from '../utils/SynapseContext'
import { useGetUserProfileWithProfilePic } from '../utils/hooks/SynapseAPI/useUserBundle'

export type UserCardSize =
  | 'AVATAR'
  | 'SMALL USER CARD'
  | 'MEDIUM USER CARD'
  | 'LARGE USER CARD'

export type UserCardProps = {
  /** A UserProfile may be used for data for the card. You must supply one of `userProfile`, `alias`, `ownerId` */
  userProfile?: UserProfile
  /** Whether or not to hide the user's Synapse email address */
  hideEmail?: boolean
  /** If set, the corresponding image will be shown for the user. */
  preSignedURL?: string
  /** An alias that resolves the ownerId for the UserProfile. You must supply one of `userProfile`, `alias`, `ownerId` */
  alias?: string
  /** The unique ownerId of the UserProfile. You must supply one of `userProfile`, `alias`, `ownerId` */
  ownerId?: string
  /** Specifies the card size */
  size: UserCardSize
  /** For the small user card or avatar, shows the medium user card on mouseover */
  showCardOnHover?: boolean
  /** For the small user card, hides the tooltip observed when hovering over the profile image. */
  hideTooltip?: boolean
  /** Specifies the dropdown menu functionality for the ellipsis on medium/large cards. If field === 'SEPERATOR' then a break will occur in the menu. If left undefined, the menu will not render to the screen. */
  menuActions?: MenuAction[]
  /** The link to point to on the user name, defaults to https://www.synapse.org/#!Profile:${userProfile.ownerId} */
  link?: string
  openLinkInNewTab?: boolean
  /** Disables the `@username` link for the small user card (if `showCardOnHover` is false). For the medium user card, disables linking the user's name to their profile (or other specified destination) */
  disableLink?: boolean
  isCertified?: boolean
  isValidated?: boolean
  /** Determines the size of the avatar when size === 'AVATAR' or (size === 'SMALL' and withAvatar is true) */
  avatarSize?: AvatarSize
  /** Whether to show the avatar with the name for the small user card */
  withAvatar?: boolean
}

export const UserCard: React.FunctionComponent<UserCardProps> = (
  props: UserCardProps,
) => {
  const {
    userProfile: initialProfile,
    preSignedURL: initialPreSignedURL,
    size,
    ownerId,
    alias,
    ...rest
  } = props
  const { accessToken } = useSynapseContext()
  const [userProfile, setUserProfile] = useState(initialProfile)
  const [principalId, setPrincipalId] = useState(ownerId)
  const [isLoading, setIsLoading] = useState(true)
  const [preSignedURL, setPresignedUrl] = useState(initialPreSignedURL ?? '')
  // We fetch the image right away in case it is an expiring presigned URL
  const imageURL = usePreFetchResource(preSignedURL)

  const { data: profileAndImage } = useGetUserProfileWithProfilePic(
    principalId!,
    {
      enabled: !!principalId,
    },
  )

  useEffect(() => {
    if (profileAndImage) {
      if (!initialProfile) {
        setUserProfile(profileAndImage.userProfile)
      }
      if (!initialPreSignedURL) {
        setPresignedUrl(profileAndImage.preSignedURL)
      }
    }
  }, [profileAndImage, initialPreSignedURL, initialProfile])

  useEffect(() => {
    if (userProfile) {
      setIsLoading(false)
    } else if (alias) {
      // Before we can get the profile, we must get the principal ID using the alias
      getPrincipalAliasRequest(accessToken, alias, 'USER_NAME').then(
        aliasData => {
          setPrincipalId(aliasData.principalId.toString())
        },
      )
    }
  }, [userProfile, alias, accessToken])

  function getCard(
    cardSize: UserCardSize,
    propsForChild: AvatarProps | UserCardSmallProps | UserCardMediumProps,
  ) {
    switch (cardSize) {
      case SynapseConstants.AVATAR:
        return <Avatar {...propsForChild} />
      case SynapseConstants.SMALL_USER_CARD:
        return <UserCardSmall {...propsForChild} />
      case SynapseConstants.MEDIUM_USER_CARD:
        return <UserCardMedium {...propsForChild} />
      case SynapseConstants.LARGE_USER_CARD:
        return <UserCardMedium isLarge={true} {...propsForChild} />
      default:
        return <span />
    }
  }

  return isLoading || userProfile == null ? (
    <></>
  ) : (
    getCard(props.size, { userProfile, imageURL, ...rest })
  )
}
export default UserCard
