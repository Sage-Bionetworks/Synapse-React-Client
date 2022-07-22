import React from 'react'
import { Handle, Position } from 'react-flow-renderer'
import { useGetEntity } from '../../utils/hooks/SynapseAPI'

export type EntityNodeLabelProps = {
  entityId: string
  versionNumber: string
}
export const EntityNodeLabel = (data: EntityNodeLabelProps) => {
  const { entityId, versionNumber } = data
  const { data: entity } = useGetEntity(entityId, versionNumber)
  return (
    <>
      <Handle type="target" position={Position.Top} isConnectable={false} />
      <div>{entity?.name}</div>
      <Handle type="source" position={Position.Bottom} isConnectable={false} />
    </>
  )
}
