import * as React from 'react'
import { getUserProfileWithProfilePic } from '../utils/functions/getUserData'
import { getPrincipalAliasRequest } from '../utils/SynapseClient'
import { MenuAction } from './UserCardContextMenu'
import { UserProfile } from '../utils/synapseTypes/'
import { SynapseConstants } from '../utils/'
import { UserCardSmall } from './UserCardSmall'
import UserCardMedium from './UserCardMedium'

type UserCardState = {
  userProfile: UserProfile | undefined
  preSignedURL: string
  isLoading: boolean
}

export type UserCardSize =
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
  /** For the small user card, hides the text next to the user profile image */
  hideText?: boolean
  /** For the small user card, hides the tooltip observed when hovering over the profile image. */
  hideTooltip?: boolean
  /** Specifies the dropdown menu functionality for the ellipsis on medium/large cards. If field === 'SEPERATOR' then a break will occur in the menu. If left undefined, the menu will not render to the screen. */
  menuActions?: MenuAction[]
  /** The link to point to on the user name, defaults to https://www.synapse.org/#!Profile:${userProfile.ownerId} */
  link?: string
  /** Authentication token used to retrieve data */
  token?: string
  /** For the medium user card, disables linking the user's name to their profile (or other specified destination) */
  disableLink?: boolean
  /** For the small user card, reduces the size of the image to approximately the height of the text. */
  extraSmall?: boolean
  isCertified?: boolean
  isValidated?: boolean
}

export default class UserCard extends React.Component<
  UserCardProps,
  UserCardState
> {
  constructor(props: UserCardProps) {
    super(props)
    this.state = { userProfile: undefined, isLoading: true, preSignedURL: '' }
    this.getUserProfile = this.getUserProfile.bind(this)
  }

  public componentDidMount() {
    const { userProfile, ownerId, alias, token } = this.props
    if (userProfile) {
      return
    }
    if (alias) {
      getPrincipalAliasRequest(token, alias, 'USER_NAME').then(
        (aliasData: any) => {
          this.getUserProfile(aliasData.principalId!)
        },
      )
    } else {
      // check for ownerId!
      this.getUserProfile(ownerId!)
    }
  }

  public getUserProfile(ownerId: string) {
    getUserProfileWithProfilePic(ownerId!, this.props.token)
      .then(data => {
        const { userProfile, preSignedURL } = data
        this.setState({ userProfile, preSignedURL, isLoading: false })
      })
      .catch(err => {
        console.log('failed to get user bundle ', err)
      })
  }

  public render() {
    const { userProfile, preSignedURL, size, ...rest } = this.props
    let userProfileAtRender
    let preSignedURLAtRender
    if (!userProfile) {
      // userProfile wasn't passed in from props
      if (this.state.isLoading) {
        // still making the API call
        return <></>
      }
      userProfileAtRender = this.state.userProfile
      preSignedURLAtRender = this.state.preSignedURL
    } else {
      // otherwise we have the profile from props
      userProfileAtRender = userProfile
      preSignedURLAtRender = preSignedURL
    }
    const propsForChild = {
      userProfile: userProfileAtRender!,
      preSignedURL: preSignedURLAtRender,
      ...rest,
    }
    switch (size) {
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
}
