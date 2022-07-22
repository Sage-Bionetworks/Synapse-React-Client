import React from 'react'
import { Handle, Position } from 'react-flow-renderer'
import { Activity } from '../../utils/synapseTypes/Provenance/Provenance'
import Typography from '../../utils/typography/Typography'

export type ActivityNodeLabelProps = Activity
export const ActivityNodeLabel = (data: ActivityNodeLabelProps) => {
  return (
    <>
      <Handle type="target" position={Position.Top} isConnectable={false} />
      <Typography variant="headline3">Activity</Typography>
      <div>{data?.name}</div>
      <Handle type="source" position={Position.Bottom} isConnectable={false} />
    </>
  )
}
