import * as React from 'react'
import { EntityHeader } from '../utils/jsonResponses/EntityHeader'
import { library } from '@fortawesome/fontawesome-svg-core'
import { 
  faLink,
  faFolder,
  faFile,
  faListAlt,
  faTable,
  faThList,
  faArchive 
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

library.add(faLink)
library.add(faFolder)
library.add(faFile)
library.add(faListAlt)
library.add(faTable)
library.add(faThList)
library.add(faArchive)

type IconType = 'FileEntity' | 'Folder' | 'Link' | 'Project' | 'TableEntity' | 'EntityView'

const getIconTypeForEntity = (name: IconType) => {
  switch(name) {
    case 'Link':
      return 'link'
    case 'Folder':
      return 'folder'
    case 'FileEntity':
      return 'file'
    case 'TableEntity':
      return 'table'
    case 'Project':
      return 'list-alt'
    case 'EntityView':
      return 'th-list'
    default:
      return ''
  }
}

type EntityTypeIconProps = {
  type: string
}
const EntityTypeIcon: React.SFC<EntityTypeIconProps> = ({ type }) => {
  const splitType = type.split('.')
  const name = splitType[splitType.length - 1] as IconType
  const iconType = getIconTypeForEntity(name)
  const iconStyle: React.CSSProperties = {
    marginRight: 5
  }
  if (iconType === '') {
    console.log('type = ', type)
    return <React.Fragment />
  }
  return <FontAwesomeIcon style={iconStyle} icon={iconType}/>
}

type EntityLinkProps = {
  entityHeader: EntityHeader
  className?: string
}

export const EntityLink: React.SFC<EntityLinkProps> = ({ entityHeader, className }) => {
  const { id, name, type } = entityHeader
  return (
    <a className={className} target="_blank" rel="noopener noreferrer" href={`https://www.synapse.org/#!Synapse:${id}`}>
      <p className={className}>
        <EntityTypeIcon type={type} />
        {name}
      </p>
    </a>
  )
} 
