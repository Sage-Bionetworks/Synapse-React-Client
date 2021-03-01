import * as React from 'react'
import { EntityType } from '../utils/synapseTypes'
import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faLink,
  faFolder,
  faFile,
  faListAlt,
  faServer,
  faTable,
  faThList,
  IconDefinition,
} from '@fortawesome/free-solid-svg-icons'
import { faDocker } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

library.add(
  faLink,
  faFolder,
  faFile,
  faListAlt,
  faServer,
  faTable,
  faThList,
  faDocker,
)

const _ENTITY_TYPE_ICON_MAP = new Map<EntityType, IconDefinition>([
  [EntityType.PROJECT, faListAlt],
  [EntityType.FOLDER, faFolder],
  [EntityType.FILE, faFile],
  [EntityType.TABLE, faTable],
  [EntityType.LINK, faLink],
  [EntityType.ENTITY_VIEW, faThList],
  [EntityType.DOCKER_REPO, faDocker],
  [EntityType.SUBMISSION_VIEW, faServer],
])

const getIconTypeForEntity = (type: EntityType): IconDefinition | '' => {
  switch (type) {
    case EntityType.PROJECT:
    case EntityType.FOLDER:
    case EntityType.FILE:
    case EntityType.TABLE:
    case EntityType.LINK:
    case EntityType.ENTITY_VIEW:
    case EntityType.DOCKER_REPO:
    case EntityType.SUBMISSION_VIEW:
      return _ENTITY_TYPE_ICON_MAP.get(type)!
    default:
      return ''
  }
}

type EntityTypeIconProps = {
  type: EntityType
  style?: React.CSSProperties
}

export const EntityTypeIcon: React.FC<EntityTypeIconProps> = ({
  type,
  style,
}) => {
  if (!type) {
    return <></>
  }
  const iconType = getIconTypeForEntity(type)
  if (iconType === '') {
    console.warn('Could not retrieve icon for Entity with type: ', type)
    return <React.Fragment />
  }
  return <FontAwesomeIcon icon={iconType} style={style} />
}
