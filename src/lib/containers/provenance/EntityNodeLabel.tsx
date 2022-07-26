import React, { useMemo } from 'react'
import {
  convertToEntityType,
  isVersionableEntity,
} from '../../utils/functions/EntityTypeUtils'
import { PRODUCTION_ENDPOINT_CONFIG } from '../../utils/functions/getEndpoint'
import { useGetEntity } from '../../utils/hooks/SynapseAPI'
import { EntityType, Reference } from '../../utils/synapseTypes'
import Tooltip from '../../utils/tooltip/Tooltip'
import { EntityTypeIcon } from '../EntityIcon'

export type EntityNodeLabelProps = Reference

export const EntityNodeLabel = (data: EntityNodeLabelProps) => {
  const { targetId, targetVersionNumber } = data
  const { data: entity } = useGetEntity(targetId, targetVersionNumber)
  const entityType: EntityType = entity?.concreteType
    ? convertToEntityType(entity?.concreteType)
    : EntityType.FILE
  const entityVersionString = `${targetId}.${targetVersionNumber}`
  return useMemo(
    () => (
      <>
        <EntityTypeIcon type={entityType} includeTooltip={false} />
        {entity ? (
          <>
            <div>
              <Tooltip title={entity.name} placement="top" enterNextDelay={300}>
                <a
                  href={`${PRODUCTION_ENDPOINT_CONFIG.PORTAL}#!Synapse:${entity.id}${entityVersionString}`}
                >
                  {entity.name}
                </a>
              </Tooltip>
            </div>
            {isVersionableEntity(entity) && (
              <div>
                <div>v.{entity.versionNumber}</div>
                {!entity.isLatestVersion && <div>(old version)</div>}
              </div>
            )}
          </>
        ) : (
          <span>{entityVersionString}</span>
        )}
      </>
    ),
    [entity, entityType, entityVersionString],
  )
}
