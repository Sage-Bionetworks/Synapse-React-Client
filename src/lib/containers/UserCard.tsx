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
  // Note - either specify userProfile OR (alias or ownerId)
  userProfile?: UserProfile
  loadingScreen?: JSX.Element
  hideEmail?: boolean
  preSignedURL?: string
  alias?: string
  ownerId?: string
  size: UserCardSize
  hideText?: boolean
  hideTooltip?: boolean
  menuActions?: MenuAction[]
  link?: string
  disableLink?: boolean
}

export default class UserCard extends React.Component<
  UserCardProps,
  UserCardState
> {
  constructor(props: any) {
    super(props)
    this.state = { userProfile: undefined, isLoading: true, preSignedURL: '' }
    this.getUserProfile = this.getUserProfile.bind(this)
  }

  public componentDidMount() {
    const { userProfile, ownerId, alias } = this.props
    if (userProfile) {
      return
    }
    if (alias) {
      getPrincipalAliasRequest('', alias, 'USER_NAME').then(
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
    getUserProfileWithProfilePic(ownerId!, '')
      .then(data => {
        const { userProfile, preSignedURL } = data
        this.setState({ userProfile, preSignedURL, isLoading: false })
      })
      .catch(err => {
        console.log('failed to get user bundle ', err)
      })
  }

  public render() {
    const {
      userProfile,
      loadingScreen = <span />,
      preSignedURL,
      size,
      ...rest
    } = this.props
    let userProfileAtRender
    let preSignedURLAtRender
    if (!userProfile) {
      // userProfile wans't passed in from props
      if (this.state.isLoading) {
        // still making the API call
        return loadingScreen
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
