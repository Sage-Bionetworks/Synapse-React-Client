import React from 'react'
import { Handle, Position } from 'react-flow-renderer'
import { UsedURL } from '../../utils/synapseTypes/Provenance/Provenance'

export type ExternalGraphNodeLabelProps = UsedURL

export const ExternalGraphNodeLabel = (data: ExternalGraphNodeLabelProps) => {
  return (
    <>
      <Handle type="target" position={Position.Top} isConnectable={false} />
      <a href={data.url} rel="noopener noreferrer">
        {data.name}
      </a>
      <Handle type="source" position={Position.Bottom} isConnectable={false} />
    </>
  )
}
