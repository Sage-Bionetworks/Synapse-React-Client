import React from 'react'
import { Handle, Position } from 'react-flow-renderer'
import { UsedURL } from '../../utils/synapseTypes/Provenance/Provenance'
import Typography from '../../utils/typography/Typography'

export type ExternalGraphNodeLabelProps = UsedURL

export const ExternalGraphNodeLabel = (data: ExternalGraphNodeLabelProps) => {
  return (
    <>
      <Handle type="target" position={Position.Top} isConnectable={false} />
      <Typography variant="headline3">Used URL</Typography>
      <div>{data.name}</div>
      <div>{data.url}</div>
      <Handle type="source" position={Position.Bottom} isConnectable={false} />
    </>
  )
}
