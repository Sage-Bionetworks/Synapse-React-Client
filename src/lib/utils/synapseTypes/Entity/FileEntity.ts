import { Entity, VersionableEntity } from './Entity'
import { AssertionError } from 'assert'

export type FILE_ENTITY_CONCRETE_TYPE = 'org.sagebionetworks.repo.model.FileEntity'

// https://rest-docs.synapse.org/rest/org/sagebionetworks/repo/model/FileEntity.html
export interface FileEntity extends VersionableEntity {
  concreteType: FILE_ENTITY_CONCRETE_TYPE
  dataFileHandleId: string // 	ID of the file associated with this entity.
  fileNameOverride?: string // 	An optional replacement for the name of the uploaded file. This is distinct from the entity name. If omitted the file will retain its original name.
}

export function assertIsFileEntity(val: Entity): asserts val is FileEntity {
  if (val.concreteType !== 'org.sagebionetworks.repo.model.FileEntity') {
    throw new AssertionError({
      message: `File Entity exepcted but found ${val}`,
    })
  }
}
