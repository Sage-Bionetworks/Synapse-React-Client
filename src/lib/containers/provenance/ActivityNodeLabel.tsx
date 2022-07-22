import moment from 'moment'
import React from 'react'
import { Handle, Position } from 'react-flow-renderer'
import { formatDate } from '../../utils/functions/DateFormatter'
import { useGetUserProfile } from '../../utils/hooks/SynapseAPI'
import { Activity } from '../../utils/synapseTypes/Provenance/Provenance'
import { UserCardSmall } from '../UserCardSmall'

export type ActivityNodeLabelProps = Activity
export const ActivityNodeLabel = (data: ActivityNodeLabelProps) => {
  const { data: userProfile } = useGetUserProfile(data.modifiedBy)
  const friendlyModifiedOn = formatDate(moment(data.modifiedOn))
  return (
    <>
      <Handle type="target" position={Position.Top} isConnectable={false} />
      {userProfile && <UserCardSmall userProfile={userProfile} />}
      <div>{friendlyModifiedOn}</div>
      <Handle type="source" position={Position.Bottom} isConnectable={false} />
    </>
  )
}
