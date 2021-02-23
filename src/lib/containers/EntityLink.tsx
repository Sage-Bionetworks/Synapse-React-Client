import React from 'react'
import { getEntityTypeFromHeader } from '../utils/functions/EntityTypeUtils'
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
        href={`https://www.synapse.org/#!Synapse:${id}`}
      >
        <EntityTypeIcon type={type} style={{ marginRight: '5px' }} />
        {name}
      </a>
    </p>
  )
}
