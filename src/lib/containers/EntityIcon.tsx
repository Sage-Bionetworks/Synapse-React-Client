import * as React from 'react'
import { EntityType } from '../utils/synapseTypes'
import { entityTypeToFriendlyName } from '../utils/functions/EntityTypeUtils'
import IconSvg, { Icon, IconSvgOptions, type2SvgIconName } from './IconSvg'

const getIconTypeForEntity = (type: EntityType): Icon | '' => {
  switch (type) {
    case EntityType.PROJECT:
    case EntityType.FOLDER:
    case EntityType.FILE:
    case EntityType.TABLE:
    case EntityType.LINK:
    case EntityType.ENTITY_VIEW:
    case EntityType.DOCKER_REPO:
    case EntityType.SUBMISSION_VIEW:
    case EntityType.DATASET:
    case EntityType.DATASET_COLLECTION:
    case EntityType.MATERIALIZED_VIEW:
      return type2SvgIconName[type]!
    default:
      return ''
  }
}

type EntityTypeIconProps = {
  type: EntityType
  style?: React.CSSProperties
  className?: string
}

export const EntityTypeIcon: React.FC<
  Omit<IconSvgOptions, 'icon'> & EntityTypeIconProps
> = props => {
  const { type, style, className } = props
  if (!type) {
    return <></>
  }
  const iconType = getIconTypeForEntity(type)
  if (iconType === '') {
    console.warn('Could not retrieve icon for Entity with type: ', type)
    return <React.Fragment />
  }
  return (
    <span style={style} className={className}>
      <IconSvg
        options={{
          icon: iconType,
          label: entityTypeToFriendlyName(type),
          ...props,
        }}
      />
    </span>
  )
}
