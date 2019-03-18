import * as React from 'react'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCircle, faEllipsisV, faCopy } from '@fortawesome/free-solid-svg-icons'
import { UserProfile } from '../utils/jsonResponses/UserProfile'

library.add(faCircle)
library.add(faEllipsisV)
library.add(faCopy)

type UserBadgeViewProps = {
  userProfile: UserProfile
}

// Disable function name because compiler has to know that its a class
// tslint:disable-next-line:function-name
export function UserCardViewLarge({ userProfile }: UserBadgeViewProps) {

  const {
    summary,
    url
  } = userProfile

  return (
    <div>
      {
        summary && (
          <div>
            <p className="SRC-card-metadata-title"> Bio: </p>
            <br/>
            <p>
              {summary}
            </p>
          </div>
        )
      }
      {
        url && (
          <div>
            <p className="SRC-card-metadata-title"> More Info </p>
            <br/>
            <p>
              {url}
            </p>
          </div>
        )
      }
      {/* {
        summary && (
          <div>
            <p className="SRC-card-metadata-title"> Bio </p>
            <br/>
            <p>
              {summary}
            </p>
          </div>
        )
      } */}
    </div>
  )
}
