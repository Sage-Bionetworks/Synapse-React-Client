import * as React from 'react'
import { UserProfile } from '../utils/jsonResponses/UserProfile'
import UserCard, { UserCardSize } from './UserCard'
import { MEDIUM_USER_CARD } from '../utils/SynapseConstants'
import { getUserProfileWithProfilePicAttached } from '../utils/functions/getUserData'
import { UserProfileList } from '../utils/SynapseClient'
import { QueryResultBundle } from '../utils/jsonResponses/Table/QueryResultBundle'

export type UserCardListProps = {
  list: string[]
  size?: UserCardSize
  // Data should not be needed, however, it gives the option to fill in a user profile with other column
  // fields. This is required specifically by AMP-AD Explore/People page
  data?: QueryResultBundle
}

type MapOwnerIdToUserProfile = {
  [index: number]: UserProfile
}
export type UserCardListState = {
  userProfileMap: MapOwnerIdToUserProfile
}
export default class UserCardList extends React.Component<
  UserCardListProps,
  UserCardListState
> {
  constructor(props: UserCardListProps) {
    super(props)
    this.state = {
      userProfileMap: {},
    }
    this.update = this.update.bind(this)
  }

  componentDidMount() {
    const { list } = this.props
    this.update(list)
  }

  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set#Implementing_basic_set_operations
  difference(setA: Set<String>, setB: Set<String>) {
    const _difference = new Set(setA)
    for (const elem of Array.from(setB)) {
      _difference.delete(elem)
    }
    return _difference
  }

  componentDidUpdate(prevProps: UserCardListProps) {
    // Note - Set object not fully supported by IE11, additionally there are a few caveats to using the Set object
    // described here https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
    // the use below with primitives is well defined.
    const priorListOfIds = new Set(prevProps.list)
    const curListOfIds = new Set(this.props.list.filter(el => el))
    // check that the props have changed by seeing that at least one element is different
    if (this.difference(curListOfIds, priorListOfIds).size > 0) {
      const internalData = new Set(Object.keys(this.state.userProfileMap))
      // get the set difference between the current list and whats stored in state, describes what
      // needs to get looked up.
      const difference = Array.from(
        this.difference(curListOfIds, internalData),
      ) as string[]
      if (difference.length > 0) {
        this.update(difference)
      }
    }
  }

  update(list: string[]) {
    getUserProfileWithProfilePicAttached(list.filter(el => el))
      .then((data: UserProfileList) => {
        const newEntries = {}
        data.list.forEach(el => {
          const { ownerId } = el
          newEntries[ownerId] = el
        })
        this.setState({
          userProfileMap: { ...this.state.userProfileMap, ...newEntries },
        })
      })
      .catch((err: string) => {
        console.log('Error on batch call =', err)
      })
  }

  /**
   * Given data this will find rows where there is no userId columnType and create faux user profiles
   * using firstName, lastName, and instituion (company in UserProfile object).
   * @param {QueryResultBundle} data
   * @returns list of UserProfiles with firstName, lastName, company, userName (first letter of firstName) filled out.
   * @memberof UserCardList
   */
  manuallyExtractData(data: QueryResultBundle) {
    const firstNameIndex = data.queryResult.queryResults.headers.findIndex(
      el => el.name === 'firstName',
    )
    const lastNameIndex = data.queryResult.queryResults.headers.findIndex(
      el => el.name === 'lastName',
    )
    const institutionIndex = data.queryResult.queryResults.headers.findIndex(
      el => el.name === 'institution',
    )
    const ownerId = data.queryResult.queryResults.headers.findIndex(
      el => el.columnType === 'USERID',
    )
    const nullOwnerIdsRows = data.queryResult.queryResults.rows.filter(
      el => !el.values[ownerId],
    )
    return nullOwnerIdsRows.map<UserProfile>(el => {
      const values = el.values
      return {
        firstName: values[firstNameIndex],
        lastName: values[lastNameIndex],
        company: values[institutionIndex],
        ownerId: '',
        userName: values[firstNameIndex][0],
      }
    })
  }

  render() {
    const { size = MEDIUM_USER_CARD, data, list } = this.props
    const { userProfileMap = {} } = this.state
    const fauxUserProfilesList = data && this.manuallyExtractData(data)
    let fauxUserProfileIndex = 0
    return (
      <div className="SRC-card-grid-row SRC-adjust-for-bootstrap-margin">
        {// we loop through the list from the props because thats the 'active set of data' whereas the data stored in state could be stale
        list.map(ownerId => {
          const userProfile = userProfileMap[ownerId]
          if (userProfile) {
            return (
              <div
                key={JSON.stringify(userProfile)}
                className="SRC-grid-item SRC-narrow-grid-item"
              >
                <UserCard
                  size={size}
                  preSignedURL={userProfile.clientPreSignedURL}
                  userProfile={userProfile}
                />
              </div>
            )
          }
          const fauxUserProfile =
            fauxUserProfilesList && fauxUserProfilesList[fauxUserProfileIndex]
          if (!fauxUserProfile) {
            // This could happen in one of two cases:
            // - The props just updated with a new userlist where the data is being gathered for this particular user
            //   OR there is no mapping for this user
            return false
          }
          fauxUserProfileIndex += 1
          return (
            <div
              key={JSON.stringify(fauxUserProfile)}
              className="SRC-grid-item SRC-narrow-grid-item"
            >
              <UserCard
                disableLink={true}
                hideEmail={true}
                size={size}
                userProfile={fauxUserProfile}
              />
            </div>
          )
        })}
      </div>
    )
  }
}
