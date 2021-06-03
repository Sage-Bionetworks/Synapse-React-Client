import { AttachmentData } from './AttachmentData'
import { ConcreteEntityType } from './ConcreteEntityType'

// https://rest-docs.synapse.org/rest/org/sagebionetworks/repo/model/Entity.html

export interface Entity {
  attachments?: AttachmentData[] // 	This field is deprecated and will be removed in future versions of Synapse
  name: string // The name of this entity.
  description?: string // The description of this entity.
  readonly id?: string // The unique immutable ID for this entity. A new ID will be generated for new Entities. Once issued, this ID is guaranteed to never change or be re-issued
  uri?: string // This field is deprecated and will be removed in future versions of Synapse
  readonly etag?: string // Synapse employs an Optimistic Concurrency Control (OCC) scheme to handle concurrent updates. Since the E-Tag changes every time an entity is updated it is used to detect when a client's current representation of an entity is out-of-date.
  readonly createdOn?: string // The date this entity was created.
  readonly modifiedOn?: string // The date this entity was last modified.
  readonly createdBy?: string // The ID of the user that created this entity.
  readonly modifiedBy?: string // The ID of the user that last modified this entity.
  annotations?: string // This field is deprecated and will be removed in future versions of Synapse
  accessControlList?: string // This field is deprecated and will be removed in future versions of Synapse
  parentId?: string // The ID of the Entity that is the parent of this Entity.
  entityType?: string // This field is deprecated and will be removed in future versions of Synapse
  readonly concreteType: ConcreteEntityType // Indicates which implementation of Entity this object represents. It should be set to one of the following: org.sagebionetworks.repo.model.Project, org.sagebionetworks.repo.model.Folder, or org.sagebionetworks.repo.model.FileEntity.
}
