import {
  EntityHeader,
  EntityType,
  ENTITY_CONCRETE_TYPE,
  ProjectHeader,
} from '../synapseTypes'
import { Hit } from '../synapseTypes/Search'

export function getEntityTypeFromHeader(
  header:
    | Pick<EntityHeader, 'name' | 'id' | 'type'>
    | EntityHeader
    | ProjectHeader
    | Hit,
) {
  // Hit has the `node_type` field which is what we already want.
  if ((header as Hit).node_type) {
    return (header as Hit).node_type
  }
  // ProjectHeader doesn't have the `type` field, so we can just check that to determine if it's a ProjectHeader
  return (header as EntityHeader).type === undefined
    ? EntityType.PROJECT
    : convertToEntityType((header as EntityHeader).type)
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
    case EntityType.DATASET:
      return false
    default:
      throw new Error(`Unknown entity type: ${type}`)
  }
}

export function entityTypeToFriendlyName(entityType: EntityType): string {
  switch (entityType) {
    case EntityType.PROJECT:
      return 'Project'
    case EntityType.FOLDER:
      return 'Folder'
    case EntityType.FILE:
      return 'File'
    case EntityType.TABLE:
      return 'Table'
    case EntityType.LINK:
      return 'Link'
    case EntityType.ENTITY_VIEW:
      return 'Entity View'
    case EntityType.DOCKER_REPO:
      return 'Docker Repository'
    case EntityType.SUBMISSION_VIEW:
      return 'Submission View'
    case EntityType.DATASET:
      return 'Dataset'
    default:
      console.warn('Entity type could not be mapped to name:', entityType)
      return ''
  }
}

export function convertToEntityType(
  typeString: string | ENTITY_CONCRETE_TYPE | EntityType,
): EntityType {
  switch (typeString) {
    case EntityType.PROJECT:
    case 'org.sagebionetworks.repo.model.Project':
      return EntityType.PROJECT
    case EntityType.FOLDER:
    case 'org.sagebionetworks.repo.model.Folder':
      return EntityType.FOLDER
    case EntityType.FILE:
    case 'org.sagebionetworks.repo.model.FileEntity':
      return EntityType.FILE
    case EntityType.LINK:
    case 'org.sagebionetworks.repo.model.Link':
      return EntityType.LINK
    case EntityType.DOCKER_REPO:
    case 'org.sagebionetworks.repo.model.docker.DockerRepository':
      return EntityType.DOCKER_REPO
    case EntityType.TABLE:
    case 'org.sagebionetworks.repo.model.table.TableEntity':
      return EntityType.TABLE
    case EntityType.SUBMISSION_VIEW:
    case 'org.sagebionetworks.repo.model.table.SubmissionView':
      return EntityType.SUBMISSION_VIEW
    case EntityType.ENTITY_VIEW:
    case 'org.sagebionetworks.repo.model.table.EntityView':
      return EntityType.ENTITY_VIEW
    case EntityType.DATASET:
    case 'org.sagebionetworks.repo.model.table.Dataset':
      return EntityType.DATASET
    default:
      throw new Error(`Unknown entity type: ${typeString}`)
  }
}

/**
 * https://docs.synapse.org/rest/org/sagebionetworks/repo/model/VersionableEntity.html
 * @param type
 * @returns
 */
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
    case EntityType.DATASET:
      return true
    default:
      throw new Error(`Unknown entity type: ${type}`)
  }
}
