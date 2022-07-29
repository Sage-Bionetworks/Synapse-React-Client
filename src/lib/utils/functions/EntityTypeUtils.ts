import {
  Entity,
  EntityHeader,
  EntityType,
  EntityView,
  ENTITY_CONCRETE_TYPE,
  ENTITY_VIEW_TYPE_MASK_FILE,
  ProjectHeader,
  Dataset,
  Table,
  TableEntity,
  SubmissionView,
  VersionableEntity,
  VIEW_CONCRETE_TYPE_VALUES,
  View,
  TABLE_CONCRETE_TYPE_VALUES,
  SUBMISSION_VIEW_CONCRETE_TYPE_VALUE,
  DATASET_CONCRETE_TYPE_VALUE,
  ENTITY_VIEW_CONCRETE_TYPE_VALUE,
  DatasetCollection,
  DATASET_COLLECTION_CONCRETE_TYPE_VALUE,
} from '../synapseTypes'
import { Hit } from '../synapseTypes/Search'
import {
  MaterializedView,
  MATERIALIZED_VIEW_CONCRETE_TYPE_VALUE,
} from '../synapseTypes/Table/MaterializedView'
import { TABLE_ENTITY_CONCRETE_TYPE_VALUE } from '../synapseTypes/Table/TableEntity'
import { isTypeViaConcreteTypeFactory } from './TypeUtils'

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
    case EntityType.DATASET_COLLECTION:
    case EntityType.MATERIALIZED_VIEW:
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
      return 'View'
    case EntityType.DOCKER_REPO:
      return 'Docker Repository'
    case EntityType.SUBMISSION_VIEW:
      return 'Submission View'
    case EntityType.DATASET:
      return 'Dataset'
    case EntityType.DATASET_COLLECTION:
      return 'Dataset Collection'
    case EntityType.MATERIALIZED_VIEW:
      return 'Materialized View'
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
    case EntityType.DATASET_COLLECTION:
    case 'org.sagebionetworks.repo.model.table.DatasetCollection':
      return EntityType.DATASET_COLLECTION
    case EntityType.MATERIALIZED_VIEW:
    case 'org.sagebionetworks.repo.model.table.MaterializedView':
      return EntityType.MATERIALIZED_VIEW
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
    case EntityType.MATERIALIZED_VIEW: // MaterializedView implements VersionableEntity, but versions aren't supported.
      return false
    case EntityType.FILE:
    case EntityType.TABLE:
    case EntityType.SUBMISSION_VIEW:
    case EntityType.ENTITY_VIEW:
    case EntityType.DATASET:
    case EntityType.DATASET_COLLECTION:
      return true
    default:
      throw new Error(`Unknown entity type: ${type}`)
  }
}

export const isTable = isTypeViaConcreteTypeFactory<Table, Entity>(
  ...TABLE_CONCRETE_TYPE_VALUES,
)

export const isView = isTypeViaConcreteTypeFactory<View, Entity>(
  ...VIEW_CONCRETE_TYPE_VALUES,
)

export const isTableEntity = isTypeViaConcreteTypeFactory<TableEntity, Entity>(
  TABLE_ENTITY_CONCRETE_TYPE_VALUE,
)

export const isSubmissionView = isTypeViaConcreteTypeFactory<
  SubmissionView,
  Entity
>(SUBMISSION_VIEW_CONCRETE_TYPE_VALUE)

export const isMaterializedView = isTypeViaConcreteTypeFactory<
  MaterializedView,
  Entity
>(MATERIALIZED_VIEW_CONCRETE_TYPE_VALUE)

export const isDataset = isTypeViaConcreteTypeFactory<Dataset, Entity>(
  DATASET_CONCRETE_TYPE_VALUE,
)
export const isDatasetCollection = isTypeViaConcreteTypeFactory<
  DatasetCollection,
  Entity
>(DATASET_COLLECTION_CONCRETE_TYPE_VALUE)

export const isEntityView = isTypeViaConcreteTypeFactory<EntityView, Entity>(
  ENTITY_VIEW_CONCRETE_TYPE_VALUE,
)

/**
 * @param entityView
 * @returns true iff the viewTypeMask allows files to appear in the view
 */
export function hasFilesInView(entityView: EntityView) {
  return (entityView.viewTypeMask & ENTITY_VIEW_TYPE_MASK_FILE) != 0
}

/**
 * @param entityView
 * @returns true iff the viewTypeMask allows only files to appear in the view
 */
export function isFileView(entityView: EntityView) {
  return entityView.viewTypeMask === ENTITY_VIEW_TYPE_MASK_FILE
}

export function isVersionableEntity(
  entity: Entity,
): entity is VersionableEntity {
  return isVersionableEntityType(convertToEntityType(entity.concreteType))
}

export function getVersionDisplay(entity: Entity): string {
  if (!isVersionableEntity(entity)) {
    console.warn("Entity isn't versionable:", entity)
    return ''
  }

  if (entity.isLatestVersion) {
    if (!isTable(entity)) {
      // e.g. Files. Always show the version number
      return `${entity.versionNumber!.toString()} (Current)`
    } else if (isDataset(entity)) {
      return 'Draft'
    } else {
      return 'Current'
    }
  } else {
    return entity.versionNumber!.toString()
  }
}
