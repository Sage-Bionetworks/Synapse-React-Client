import React, { useMemo } from 'react'
import {
  isVersionableEntityType,
  convertToEntityType,
} from '../../utils/functions/EntityTypeUtils'
import { PRODUCTION_ENDPOINT_CONFIG } from '../../utils/functions/getEndpoint'
import Tooltip from '../../utils/tooltip/Tooltip'
import { ProvenanceEntityIcon } from './ProvenanceEntityIcon'
import { EntityHeaderIsCurrent } from './ProvenanceUtils'

export const EntityNodeLabel = (data: EntityHeaderIsCurrent) => {
  const { entityHeader, isCurrentVersion } = data
  const targetVersionNumberString = entityHeader.versionNumber
    ? `.${entityHeader.versionNumber}`
    : ''
  const entityVersionString = `${entityHeader.id}${targetVersionNumberString}`
  return useMemo(
    () => (
      <>
        <div>
          <ProvenanceEntityIcon entityHeader={entityHeader} />
        </div>
        <>
          <div>
            <Tooltip
              title={entityHeader.name}
              placement="top"
              enterNextDelay={300}
            >
              <a
                href={`${PRODUCTION_ENDPOINT_CONFIG.PORTAL}#!Synapse:${entityVersionString}`}
              >
                {entityHeader.name}
              </a>
            </Tooltip>
          </div>
          {isVersionableEntityType(convertToEntityType(entityHeader.type)) && (
            <div>
              <div>v.{entityHeader.versionNumber}</div>
              {!isCurrentVersion && <div>(old version)</div>}
            </div>
          )}
        </>
      </>
    ),
    [entityHeader, entityVersionString, isCurrentVersion],
  )
}
