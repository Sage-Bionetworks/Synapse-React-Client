import moment from 'moment'
import React, { useMemo } from 'react'
import { formatDate } from '../../utils/functions/DateFormatter'
import { useGetUserProfile } from '../../utils/hooks/SynapseAPI'
import { Activity } from '../../utils/synapseTypes/Provenance/Provenance'
import { UserCardSmall } from '../UserCardSmall'

export type ActivityNodeLabelProps = Activity
export const ActivityNodeLabel = (data: ActivityNodeLabelProps) => {
  const { data: userProfile } = useGetUserProfile(data.modifiedBy)
  const friendlyModifiedOn = formatDate(moment(data.modifiedOn))
  return useMemo(
    () => (
      <>
        {userProfile && <UserCardSmall userProfile={userProfile} />}
        <div>{friendlyModifiedOn}</div>
      </>
    ),
    [userProfile, friendlyModifiedOn],
  )
}
