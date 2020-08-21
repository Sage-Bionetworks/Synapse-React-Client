import * as React from 'react'
import UserCardListRotate from '../../../lib/containers/UserCardListRotate'

export const PeopleProfileDemo = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <UserCardListRotate sql={"SELECT * FROM syn22096112 where feature=true"} count={3} />
      </div>
    </div>
  )
}