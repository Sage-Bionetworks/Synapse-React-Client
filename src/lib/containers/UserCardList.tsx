import * as React from 'react'
import { UserProfile } from '../utils/jsonResponses/UserProfile'
import UserCard from './UserCard'
import { MEDIUM_USER_CARD } from '../utils/SynapseConstants'
import { getUserProfileWithProfilePicAttached } from './getUserData'
import { UserProfileList } from '../utils/SynapseClient'

export type UserCardListProps = {
  list: string []
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
    this.update = this.update.bind(this)
  }

  componentDidMount() {
    const { list } = this.props
    this.update(list)
  }

  difference(setA: Set<String>, setB: Set<String>) {
    const _difference = new Set(setA)
    for (const elem of Array.from(setB)) {
      _difference.delete(elem)
    }
    return _difference
  }

  componentDidUpdate(prevProps: UserCardListProps) {
    const priorListOfIds = new Set(prevProps.list)
    const curListOfIds = new Set(this.props.list.filter(el => el !== null))
    // check that the props have changed by seeing that at least one element is different
    if (this.difference(curListOfIds, priorListOfIds).size > 0) {
      const internalData = new Set(Object.keys(this.state.userProfileMap))
      // get the set difference between the current list and whats stored in state, describes what
      // needs to get looked up.
      const difference = Array.from(this.difference(curListOfIds, internalData)) as string []
      if (difference.length > 0) {
        this.update(difference)
      }
    }
  }

  update (list: string []) {
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
      (err: string) => {
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
