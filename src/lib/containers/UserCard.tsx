import * as React from 'react'
import { getUserBundle } from './getUserData'
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
    const { userProfileBundle, ownerId, mask, alias, token } = this.props
    if (userProfileBundle) {
      return
    }
    if (alias) {
      getPrincipalAliasRequest(this.props.token, alias, 'USER_NAME')
      .then(
        (aliasData: any) => {
          this.getUserBundleInfo(aliasData.principalId!, mask, token)
        }
      )
    } else {
      this.getUserBundleInfo(ownerId!, mask, token)
    }
  }

  public getUserBundleInfo(ownerId: string, mask: number, token?: string) {
    getUserBundle(ownerId!, mask, this.props.token)
    .then(
      (data: any) => {
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
