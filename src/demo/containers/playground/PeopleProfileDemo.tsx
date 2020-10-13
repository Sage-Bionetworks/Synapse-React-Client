import * as React from 'react'
import UserCardListRotate from '../../../lib/containers/UserCardListRotate'
import UserCardListGroups from '../../../lib/containers/home_page/people/UserCardListGroups'
import { MEDIUM_USER_CARD } from '../../../lib/utils/SynapseConstants'

export const PeopleProfileDemo = () => {
  return (
    <div className="homepage-color-background">
      <UserCardListGroups
        sql={'SELECT * FROM syn21781196 WHERE isFeatured=\'true\''}
        columnName='Project Title'
        facetValues={[
          'Somatic Mosaicism in the brain of Tourette syndrome',
          'Role of brain somatic mosaicism in autism, schizophrenia, and bipolar disorder'
        ]}
        size={MEDIUM_USER_CARD}
        summaryLinkText={'EXPLORE ALL PEOPLE'}
        summaryLink={'/Explore/People'}
        count={6}
      ></UserCardListGroups>
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