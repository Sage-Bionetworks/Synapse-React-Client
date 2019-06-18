import * as React from 'react'
import { UserProfile } from '../utils/jsonResponses/UserProfile'
import UserCard from './UserCard'
import { MEDIUM_USER_CARD } from '../utils/SynapseConstants'
import { getUserProfileWithProfilePicAttached } from './getUserData'

export type UserCardListProps = {
  list: number []
  size?: string
}

export type UserCardListState = {
  userProfiles: UserProfile []
}
export default class UserCardList extends React.Component<UserCardListProps, UserCardListState> {

  constructor(props: UserCardListProps) {
    super(props)
    this.state = {
      userProfiles: []
    }
  }

  componentDidMount() {
    const { list } = this.props
    this.update(list)
  }

  componentDidUpdate(prevProps: UserCardListProps) {
    if (prevProps.list.length < this.props.list.length) {
      const difference = this.props.list.slice(prevProps.list.length)
      this.update(difference)
    }
  }

  update = (list: number []) => {
    getUserProfileWithProfilePicAttached(list).then(
      (data) => {
        this.setState({
          userProfiles: this.state.userProfiles.concat(data.list)
        })
      }
    ).catch(
      (err) => {
        console.log('Error on batch call =', err)
      }
    )
  }

  render() {
    const { size = MEDIUM_USER_CARD } = this.props
    return (
      <div className="SRC-card-grid-row SRC-adjust-margin">
        {this.state.userProfiles.map(
          userProfile =>
            (
              <div className="SRC-grid-item SRC-narrow-grid-item" key={JSON.stringify(userProfile)}>
                <UserCard
                  size={size}
                  preSignedURL={userProfile.clientPreSignedURL}
                  userProfile={userProfile}
                />
              </div>
            )
        )}
      </div>
    )
  }
}
