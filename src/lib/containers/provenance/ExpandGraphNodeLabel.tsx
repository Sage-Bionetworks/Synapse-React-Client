import React from 'react'
import { Handle, Position } from 'react-flow-renderer'
import { Reference } from '../../utils/synapseTypes'
import Typography from '../../utils/typography/Typography'

export type ExpandGraphNodeLabelProps = Reference

export const ExpandGraphNodeLabel = (data: ExpandGraphNodeLabelProps) => {
  return (
    <>
      <Handle type="target" position={Position.Top} isConnectable={false} />
      <Typography variant="headline3">Expand node</Typography>
      <div>{data.targetId}</div>
      <div>{data.targetVersionNumber}</div>
      <Handle type="source" position={Position.Bottom} isConnectable={false} />
    </>
  )
}
