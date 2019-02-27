import * as React from 'react'
import { getUserProfile } from './getUserData'
import UserBadgeView from './UserBadgeView'
import { getPrincipalAliasRequest } from '../utils/SynapseClient'

type UserBadgeState = {
  userProfileData: any
}

type UserBadgeProps = {
  alias?: string
  principalId?: number
  token?: string
  type?: string
}

export default class UserBadge extends React.Component<UserBadgeProps, UserBadgeState> {
  constructor(props: any) {
    super(props)
    this.state = { userProfileData: undefined }
  }
  public componentDidMount() {
    const { alias = '', type = '' } = this.props
    if (alias) {
      getPrincipalAliasRequest(this.props.token, alias, type).then(
        (aliasData: any) => {
          getUserProfile([aliasData.principalId], this.props.token)
          .then(
            (userProfileData: any) => {
              this.setState({ userProfileData })
            }
          )
        }
      ).catch(
        (err) => {
          console.log('failed to get user alias ', err)
        }
      )
    }
  }
  public render() {
    return <UserBadgeView data={this.state.userProfileData} />
  }
}
