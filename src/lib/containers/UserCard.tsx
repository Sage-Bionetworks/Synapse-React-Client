import * as React from 'react'
import { getUserProfileWithProfilePic } from './getUserData'
import UserCardViewSwitch from './UserCardViewSwitch'
import { getPrincipalAliasRequest } from '../utils/SynapseClient'
import { MenuAction } from './UserCardContextMenu'

type UserBadgeState = {
  userProfileBundle: any
}

type UserBadgeProps = {
  userProfileBundle?: any
  alias?: string
  ownerId?: string
  size: string
  mask?: number
  token?: string
  type?: string
  menuActions? : MenuAction[]
}

export default class UserProfileSmall extends React.Component<UserBadgeProps, UserBadgeState> {
  constructor(props: any) {
    super(props)
    this.state = { userProfileBundle: undefined }
    this.getUserProfile = this.getUserProfile.bind(this)
  }

  public componentDidMount() {
    const { userProfileBundle, ownerId, alias } = this.props
    if (userProfileBundle) {
      return
    }
    if (alias) {
      getPrincipalAliasRequest(this.props.token, alias, 'USER_NAME')
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
        this.setState({ userProfileBundle: data })
      }
    ).catch(
      (err) => {
        console.log('failed to get user bundle ', err)
      }
    )
  }
  public render() {
    const { userProfileBundle, size, menuActions } = this.props
    let userBundle
    if (!userProfileBundle) {
      userBundle = this.state.userProfileBundle
    } else {
      userBundle = this.props.userProfileBundle
    }
    return (
      <UserCardViewSwitch
        menuActions={menuActions}
        userBundle={userBundle}
        size={size}
      />
    )
  }
}
