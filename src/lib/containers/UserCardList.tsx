import * as React from 'react'
import { UserProfile } from '../utils/jsonResponses/UserProfile'
import UserCard from './UserCard'
import { MEDIUM_USER_CARD } from '../utils/SynapseConstants'
import { getUserProfileWithProfilePicAttached } from './getUserData'
import { UserProfileList } from '../utils/SynapseClient'

export type UserCardListProps = {
  list: number []
  size?: string
}

type MapOwnerIdToUserProfile = {
  [index: number]: UserProfile
}
export type UserCardListState = {
  userProfileMap: MapOwnerIdToUserProfile
}
export default class UserCardList extends React.Component<UserCardListProps, UserCardListState> {

  constructor(props: UserCardListProps) {
    super(props)
    this.state = {
      userProfileMap: {}
    }
  }

  componentDidMount() {
    const { list } = this.props
    this.update(list)
  }

  componentDidUpdate(prevProps: UserCardListProps) {
    const prevPropsAsNumber = prevProps.list.map(el => Number(el))
    const activeData = this.props.list.map(el => Number(el))
    // check that the props have changed
    if (!activeData.every(el => prevPropsAsNumber.includes(el))) {
      const internalData = Object.keys(this.state.userProfileMap).map(el => Number(el))
      // get the set difference between the current list and the prior list
      const difference = activeData.filter(el => !internalData.includes(Number(el))).filter(el => el !== 0)
      if (difference.length > 0) {
        this.update(difference)
      }
    }
  }

  update = (list: number []) => {
    getUserProfileWithProfilePicAttached(list).then(
      (data: UserProfileList) => {
        const newEntries = {}
        data.list.map(
          (el) => {
            const { ownerId } = el
            newEntries[ownerId] = el
          }
        )
        this.setState({
          userProfileMap: { ...this.state.userProfileMap, ...newEntries }
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
      <div className="SRC-card-grid-row SRC-adjust-for-bootstrap-margin">
        {
          // we loop through the list from the props because thats the 'active set of data' whereas the data stored in state
          this.props.list.map(
            (ownerId) => {
              const userProfile = this.state.userProfileMap[ownerId]
              if (userProfile) {
                return (
                  <div key={JSON.stringify(userProfile)} className="SRC-grid-item SRC-narrow-grid-item">
                    <UserCard size={size} preSignedURL={userProfile.clientPreSignedURL} userProfile={userProfile}/>
                  </div>)
              }
              // e.g. still loading
              return false
            }
          )
        }
      </div>
    )
  }
}
