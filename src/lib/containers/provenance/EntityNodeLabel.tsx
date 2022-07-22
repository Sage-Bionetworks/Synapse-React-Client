import React from 'react'
import { Handle, Position } from 'react-flow-renderer'
import { convertToEntityType } from '../../utils/functions/EntityTypeUtils'
import { PRODUCTION_ENDPOINT_CONFIG } from '../../utils/functions/getEndpoint'
import { useGetEntity } from '../../utils/hooks/SynapseAPI'
import { EntityType, Reference } from '../../utils/synapseTypes'
import { EntityTypeIcon } from '../EntityIcon'

export type EntityNodeLabelProps = Reference

export const EntityNodeLabel = (data: EntityNodeLabelProps) => {
  const { targetId, targetVersionNumber } = data
  const { data: entity } = useGetEntity(targetId, targetVersionNumber)
  const entityType: EntityType = entity?.concreteType
    ? convertToEntityType(entity?.concreteType)
    : EntityType.FILE
  const entityVersionString =
    entity && 'versionNumber' in entity ? `.${entity['versionNumber']}` : ''
  return (
    <>
      <Handle type="target" position={Position.Top} isConnectable={false} />
      <EntityTypeIcon type={entityType} includeTooltip={false} />
      <a
        href={`${PRODUCTION_ENDPOINT_CONFIG.PORTAL}#!Synapse:${entity?.id}${entityVersionString}`}
      >
        {entity?.name}
      </a>
      <Handle type="source" position={Position.Bottom} isConnectable={false} />
    </>
  )
}
