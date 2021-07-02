import React from 'react'
import { getEntityTypeFromHeader } from '../utils/functions/EntityTypeUtils'
import { PRODUCTION_ENDPOINT_CONFIG } from '../utils/functions/getEndpoint'
import { EntityHeader } from '../utils/synapseTypes/'
import { EntityTypeIcon } from './EntityIcon'

type EntityLinkProps = {
  entityHeader: EntityHeader
  className?: string
}

export const EntityLink: React.FC<EntityLinkProps> = ({
  entityHeader,
  className,
}) => {
  const { id, name } = entityHeader
  const type = getEntityTypeFromHeader(entityHeader)
  return (
    <p className={className}>
      <a
        className={className}
        target="_blank"
        rel="noopener noreferrer"
        href={`${PRODUCTION_ENDPOINT_CONFIG.PORTAL}#!Synapse:${id}`}
      >
        <EntityTypeIcon type={type} style={{ marginRight: '5px' }} />
        {name}
      </a>
    </p>
  )
}
