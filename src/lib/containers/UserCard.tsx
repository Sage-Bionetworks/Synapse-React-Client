import * as React from 'react'
import { getUserBundleWithProfilePic } from './getUserData'
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
    this.getUserBundleInfo = this.getUserBundleInfo.bind(this)
  }

  public componentDidMount() {
    const { userProfileBundle, ownerId, mask, alias } = this.props
    if (userProfileBundle) {
      return
    }
    if (alias) {
      getPrincipalAliasRequest(this.props.token, alias, 'USER_NAME')
      .then(
        (aliasData: any) => {
          this.getUserBundleInfo(aliasData.principalId!, mask)
        }
      )
    } else {
      this.getUserBundleInfo(ownerId!, mask)
    }
  }

  public getUserBundleInfo(ownerId: string, mask: number) {
    getUserBundleWithProfilePic(ownerId!, mask, this.props.token)
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
