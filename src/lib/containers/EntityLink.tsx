import { Skeleton } from '@material-ui/lab'
import React from 'react'
import {
  convertToEntityType,
  getEntityTypeFromHeader,
} from '../utils/functions/EntityTypeUtils'
import { PRODUCTION_ENDPOINT_CONFIG } from '../utils/functions/getEndpoint'
import { useGetEntity } from '../utils/hooks/SynapseAPI/useEntity'
import { Entity, EntityHeader } from '../utils/synapseTypes/'
import { EntityTypeIcon } from './EntityIcon'

type EntityLinkProps = {
  entity: string | EntityHeader | Entity
  versionNumber?: number
  link?: boolean
  className?: string
}

export const EntityLink = (props: EntityLinkProps) => {
  const { entity: entityOrId, className, versionNumber, link = true } = props

  let entityId = ''
  if (typeof entityOrId === 'string') {
    entityId = entityOrId
  }

  const { data: fetchedEntity } = useGetEntity(entityId, versionNumber, {
    enabled: !!entityId && typeof entityOrId === 'string',
  })

  if (fetchedEntity || typeof entityOrId !== 'string') {
    const entity = fetchedEntity ?? (entityOrId as Entity | EntityHeader)
    let type
    if ('concreteType' in entity) {
      type = convertToEntityType(entity.concreteType)
    } else {
      type = getEntityTypeFromHeader(entity)
    }

    if (link) {
      return (
        <p className={className}>
          <a
            className={className}
            target="_blank"
            rel="noopener noreferrer"
            href={`${PRODUCTION_ENDPOINT_CONFIG.PORTAL}#!Synapse:${entity.id!}${
              versionNumber ? `.${versionNumber}` : ''
            }`}
          >
            <EntityTypeIcon type={type} style={{ marginRight: '6px' }} />
            {entity.name}
          </a>
        </p>
      )
    } else {
      return (
        <p className={className}>
          <EntityTypeIcon type={type} style={{ marginRight: '6px' }} />
          {entity.name}
        </p>
      )
    }
  } else {
    // Entity has not been fetched yet
    // TODO: Handle not found, unauthorized
    return <Skeleton variant="rect" width="100" />
  }
}
