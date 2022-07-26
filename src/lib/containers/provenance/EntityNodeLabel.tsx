import React, { useMemo } from 'react'
import { isVersionableEntity } from '../../utils/functions/EntityTypeUtils'
import { PRODUCTION_ENDPOINT_CONFIG } from '../../utils/functions/getEndpoint'
import { useGetEntity } from '../../utils/hooks/SynapseAPI'
import { Reference } from '../../utils/synapseTypes'
import Tooltip from '../../utils/tooltip/Tooltip'
import { ProvenanceEntityIcon } from './ProvenanceEntityIcon'

export type EntityNodeLabelProps = Reference

export const EntityNodeLabel = (data: EntityNodeLabelProps) => {
  const { targetId, targetVersionNumber } = data
  const { data: entity } = useGetEntity(targetId, targetVersionNumber)
  const targetVersionNumberString = targetVersionNumber
    ? `.${targetVersionNumber}`
    : ''
  const entityVersionString = `${targetId}${targetVersionNumberString}`
  return useMemo(
    () => (
      <>
        <div>
          <ProvenanceEntityIcon entity={entity} />
        </div>
        {entity ? (
          <>
            <div>
              <Tooltip title={entity.name} placement="top" enterNextDelay={300}>
                <a
                  href={`${PRODUCTION_ENDPOINT_CONFIG.PORTAL}#!Synapse:${entityVersionString}`}
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
    [entity, entityVersionString],
  )
}
