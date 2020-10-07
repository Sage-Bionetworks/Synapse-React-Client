import * as React from 'react'
import UserCardListRotate from '../../../lib/containers/UserCardListRotate'
import { MEDIUM_USER_CARD } from 'lib/utils/SynapseConstants'

export const PeopleProfileDemo = () => {
  return (
    <div className="homepage-color-background">
      <div className="container-fluid">
        <div className="row">
          <UserCardListRotate
            sql={"SELECT * FROM syn22096112 where feature=true"}
            count={3}
            summaryLinkText={"EXPLORE ALL PEOPLE"}
            summaryLink={"/Explore/People"}
          />
        </div>
        <div className="row">
          <UserCardListRotate
            sql={"SELECT * FROM syn13897207 where isFeatured=true"}
            count={3}
            useQueryResultUserData={true}
            size={MEDIUM_USER_CARD}
            summaryLinkText={"EXPLORE ALL PEOPLE"}
            summaryLink={"/Explore/People"}            
          />
        </div>
      </div>
    </div>
  )
}