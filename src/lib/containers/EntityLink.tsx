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
  link?: boolean
  className?: string
}

export const EntityLink = (props: EntityLinkProps) => {
  const { entity: entityOrId, className, link = true } = props

  let entityId = ''
  if (typeof entityOrId === 'string') {
    entityId = entityOrId
  }

  const { data: fetchedEntity } = useGetEntity(entityId, undefined, {
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
            href={`${PRODUCTION_ENDPOINT_CONFIG.PORTAL}#!Synapse:${entity.id!}`}
          >
            <EntityTypeIcon type={type} style={{ marginRight: '5px' }} />
            {entity.name}
          </a>
        </p>
      )
    } else {
      return (
        <p className={className}>
          <EntityTypeIcon type={type} style={{ marginRight: '5px' }} />
          {entity.name}
        </p>
      )
    }
  } else {
    // Entity has not been fetched yet
    return <Skeleton variant="rect" width="100" />
  }
}
