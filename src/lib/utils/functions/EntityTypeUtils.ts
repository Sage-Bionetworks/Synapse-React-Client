import { EntityHeader, EntityType, ProjectHeader } from '../synapseTypes'
import { Hit } from '../synapseTypes/Search'

export function getEntityTypeFromHeader(
  header: EntityHeader | ProjectHeader | Hit,
) {
  // Hit has the `node_type` field which is what we already want.
  if ((header as Hit).node_type) {
    return (header as Hit).node_type
  }
  // ProjectHeader doesn't have the `type` field, so we can just check that to determine if it's a ProjectHeader
  return (header as EntityHeader).type === undefined
    ? EntityType.PROJECT
    : stringToEntityType((header as EntityHeader).type)
}

export function isContainerType(type: EntityType): boolean {
  switch (type) {
    case EntityType.PROJECT:
    case EntityType.FOLDER:
      return true
    case EntityType.LINK:
    case EntityType.DOCKER_REPO:
    case EntityType.FILE:
    case EntityType.TABLE:
    case EntityType.SUBMISSION_VIEW:
    case EntityType.ENTITY_VIEW:
      return false
    default:
      throw new Error(`Unknown entity type: ${type}`)
  }
}

export function stringToEntityType(typeString: string): EntityType {
  switch (typeString) {
    case 'org.sagebionetworks.repo.model.Project':
      return EntityType.PROJECT
    case 'org.sagebionetworks.repo.model.Folder':
    case 'folder':
      return EntityType.FOLDER
    case 'org.sagebionetworks.repo.model.FileEntity':
    case 'file':
      return EntityType.FILE
    case 'org.sagebionetworks.repo.model.Link':
      return EntityType.LINK
    case 'org.sagebionetworks.repo.model.docker.DockerRepository':
      return EntityType.DOCKER_REPO
    case 'org.sagebionetworks.repo.model.table.TableEntity':
      return EntityType.TABLE
    case 'org.sagebionetworks.repo.model.table.SubmissionView':
      return EntityType.SUBMISSION_VIEW
    case 'org.sagebionetworks.repo.model.table.EntityView':
      return EntityType.ENTITY_VIEW
    default:
      throw new Error(`Unknown entity type: ${typeString}`)
  }
}

export function isVersionableEntityType(type: EntityType): boolean {
  switch (type) {
    case EntityType.PROJECT:
    case EntityType.FOLDER:
    case EntityType.LINK:
    case EntityType.DOCKER_REPO:
      return false
    case EntityType.FILE:
    case EntityType.TABLE:
    case EntityType.SUBMISSION_VIEW:
    case EntityType.ENTITY_VIEW:
      return true
    default:
      throw new Error(`Unknown entity type: ${type}`)
  }
}
