import * as React from 'react'
import getUserProfileData from './getUserProfileData'
import UserBadgeView from './UserBadgeView'

type UserBadgeState = {
  data: any
}

type UserBadgeProps = {
  principalId: number
  token: string
}

export default class UserBadge extends React.Component<UserBadgeProps, UserBadgeState> {
  constructor(props: any) {
    super(props)
    this.state = { data: {} }
  }
  public componentDidMount() {
    getUserProfileData([this.props.principalId], this.props.token)
        .then(
                (data: any) => {
                  this.setState({ data })
                }
        )
  }
  public render() {
    return <UserBadgeView data={this.state.data} />
  }
}
