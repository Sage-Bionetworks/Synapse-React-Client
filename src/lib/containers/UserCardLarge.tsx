import * as React from 'react'
import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faCircle,
  faEllipsisV,
  faCopy,
} from '@fortawesome/free-solid-svg-icons'
import { UserProfile } from '../utils/synapseTypes/UserProfile'

library.add(faCircle)
library.add(faEllipsisV)
library.add(faCopy)

type UserCardLargeProps = {
  userProfile: UserProfile
}

/**
 * UserCardLarge wraps around UserCardMedium
 *
 * @export UserCardLarge
 * @param {UserCardLargeProps} { userProfile }
 */
// Disable function name because compiler has to know that its a class
// tslint:disable-next-line:function-name
export function UserCardLarge({ userProfile }: UserCardLargeProps) {
  const { summary, industry, location, url } = userProfile

  return (
    <div className="SRC-cardMetaData">
      {summary && (
        <div>
          <p className="SRC-card-metadata-title"> Bio </p>
          <p>{summary}</p>
        </div>
      )}
      {url && (
        <div>
          <p className="SRC-card-metadata-title"> More Info </p>
          <p>{url}</p>
        </div>
      )}
      {industry && (
        <div>
          <p className="SRC-card-metadata-title"> Industry </p>
          <p>{industry}</p>
        </div>
      )}
      {location && (
        <div>
          <p className="SRC-card-metadata-title"> Location </p>
          <p>{location}</p>
        </div>
      )}
    </div>
  )
}
