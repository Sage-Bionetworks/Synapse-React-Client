import * as React from 'react'
import { getUserProfileWithProfilePic } from './getUserData'
import UserCardSwitch from './UserCardSwitch'
import { getPrincipalAliasRequest } from '../utils/SynapseClient'
import { MenuAction } from './UserCardContextMenu'
import { UserProfile } from '../utils/jsonResponses/UserProfile'

type UserCardState = {
  userProfile: UserProfile | undefined
  preSignedURL: string
  isLoading: boolean
}

export type UserCardProps = {
  // Note - either specify userProfile OR (alias or ownerId)
  userProfile?: UserProfile
  loadingBar?: JSX.Element
  hideEmail?: boolean
  preSignedURL?: string
  alias?: string
  ownerId?: string
  size: string
  token?: string
  hideText?: boolean
  profileClickHandler?: (userProfile: UserProfile) => void
  menuActions? : MenuAction[]
}

export default class UserCard extends React.Component<UserCardProps, UserCardState> {
  constructor(props: any) {
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
      getPrincipalAliasRequest(token, alias, 'USER_NAME')
      .then(
        (aliasData: any) => {
          this.getUserProfile(aliasData.principalId!)
        }
      )
    } else {
      this.getUserProfile(ownerId!)
    }
  }

  public getUserProfile(ownerId: string) {
    getUserProfileWithProfilePic(ownerId!, this.props.token)
    .then(
      (data) => {
        const { userProfile, preSignedURL } = data
        this.setState({ userProfile, preSignedURL, isLoading: false })
      }
    ).catch(
      (err) => {
        console.log('failed to get user bundle ', err)
      }
    )
  }
  public render() {
    const { userProfile, loadingBar = <span/>, ...rest } = this.props
    let userProfileAtRender
    let preSignedURLAtRender
    if (!userProfile) {
      // userProfile wans't passed in from props
      if (this.state.isLoading) {
        // still making the API call
        return loadingBar
      }
      userProfileAtRender = this.state.userProfile
      preSignedURLAtRender = this.state.preSignedURL
    } else {
      // otherwise we have the profile from props
      userProfileAtRender = userProfile
      preSignedURLAtRender = this.props.preSignedURL
    }
    return (
      <UserCardSwitch
        userProfile={userProfileAtRender!}
        preSignedURL={preSignedURLAtRender}
        {...rest}
      />
    )
  }
}
