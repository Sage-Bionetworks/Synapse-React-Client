import * as React from 'react'
import UserCardListRotate from '../../../lib/containers/UserCardListRotate'

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
      </div>
    </div>
  )
}