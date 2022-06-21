import React, { useEffect, useState } from 'react'
import { SynapseClient, SynapseConstants } from '../utils/'
import { useGetUserProfile } from '../utils/hooks/SynapseAPI/useUserBundle'
import usePreFetchResource from '../utils/hooks/usePreFetchResource'
import { getPrincipalAliasRequest } from '../utils/SynapseClient'
import { useSynapseContext } from '../utils/SynapseContext'
import { UserProfile } from '../utils/synapseTypes/'
import { Avatar, AvatarProps, AvatarSize } from './Avatar'
import { MenuAction } from './UserCardContextMenu'
import UserCardMedium, { UserCardMediumProps } from './UserCardMedium'
import { UserCardSmall, UserCardSmallProps } from './UserCardSmall'

export type UserCardSize =
  | 'AVATAR'
  | 'SMALL USER CARD'
  | 'MEDIUM USER CARD'
  | 'LARGE USER CARD'

export type UserCardProps = {
  /** A UserProfile may be used for data for the card. You must supply one of `userProfile`, `alias`, `ownerId` */
  userProfile?: UserProfile
  /** An alias that resolves the ownerId for the UserProfile. You must supply one of `userProfile`, `alias`, `ownerId` */
  alias?: string
  /** The unique ownerId of the UserProfile. You must supply one of `userProfile`, `alias`, `ownerId` */
  ownerId?: string
  /** Whether or not to hide the user's Synapse email address */
  hideEmail?: boolean
  /** If set, the corresponding image will be shown for the user. */
  preSignedURL?: string
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
  /** Whether to show the full name in the small user card */
  showFullName?: boolean
  className?: string
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
  const [principalId, setPrincipalId] = useState(ownerId)
  const [isLoading, setIsLoading] = useState(true)
  const [fetchedPresignedUrl, setFetchedPresignedUrl] = useState<
    string | null | undefined
  >(undefined)

  const { data: fetchedProfile } = useGetUserProfile(principalId!, {
    enabled: !!principalId && !initialProfile,
  })

  const userProfile = initialProfile ?? fetchedProfile

  useEffect(() => {
    let isCanceled = false
    if (!initialPreSignedURL && (ownerId || userProfile?.ownerId)) {
      SynapseClient.getProfilePicPreviewPresignedUrl(
        (ownerId ?? userProfile?.ownerId)!,
      ).then(result => {
        if (!isCanceled) {
          setFetchedPresignedUrl(result)
        }
      })
    }
    return () => {
      isCanceled = true
    }
  }, [initialPreSignedURL, ownerId, userProfile?.ownerId])

  const presignedUrl = initialPreSignedURL ?? fetchedPresignedUrl
  const hasProfileImage = presignedUrl !== null

  const imageURL = usePreFetchResource(
    hasProfileImage ? presignedUrl : undefined,
  )

  const isLoadingAvatar = hasProfileImage && !imageURL

  useEffect(() => {
    let isCanceled = false
    if (userProfile) {
      setIsLoading(false)
    } else if (alias) {
      // Before we can get the profile, we must get the principal ID using the alias
      getPrincipalAliasRequest(accessToken, alias, 'USER_NAME').then(
        aliasData => {
          if (!isCanceled) {
            setPrincipalId(aliasData.principalId.toString())
          }
        },
      )
    }
    return () => {
      isCanceled = true
    }
  }, [userProfile, alias, accessToken])

  function Card(props: {
    cardSize: UserCardSize
    propsForChild: AvatarProps | UserCardSmallProps | UserCardMediumProps
  }) {
    const { cardSize, propsForChild } = props
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
    <Card
      cardSize={size}
      propsForChild={{
        userProfile,
        imageURL,
        isLoadingAvatar,
        ...rest,
      }}
    />
  )
}
export default UserCard
