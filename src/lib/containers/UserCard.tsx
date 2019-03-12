import * as React from 'react'
import { getUserProfileWithProfilePic } from './getUserData'
import UserCardViewSwitch from './UserCardViewSwitch'
import { getPrincipalAliasRequest } from '../utils/SynapseClient'

type UserBadgeState = {
  userProfileBundle: any
}

type UserBadgeProps = {
  userProfileBundle?: any
  alias?: string
  ownerId?: string
  size: string
  mask: number
  token?: string
  type?: string
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
    const { userProfileBundle, size } = this.props
    if (!userProfileBundle) {
      return (
        <UserCardViewSwitch
          userBundle={this.state.userProfileBundle}
          size={size}
        />
      )
    }
    return (
      <UserCardViewSwitch
        userBundle={this.props.userProfileBundle}
        size={size}
      />
    )
  }
}
