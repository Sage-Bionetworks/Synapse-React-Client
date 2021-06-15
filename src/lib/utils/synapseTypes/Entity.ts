import { AttachmentData } from './AttachmentData'
import { ConcreteEntityType } from './ConcreteEntityType'

// https://rest-docs.synapse.org/rest/org/sagebionetworks/repo/model/Entity.html

export interface Entity {
  /** The name of this entity? */
  name: string
  /** The description of this entity. */
  description?: string
  /** The unique immutable ID for this entity. A new ID will be generated for new Entities. Once issued, this ID is guaranteed to never change or be re-issued */
  readonly id?: string
  /** Synapse employs an Optimistic Concurrency Control (OCC) scheme to handle concurrent updates. Since the E-Tag changes every time an entity is updated it is used to detect when a client's current representation of an entity is out-of-date. */
  readonly etag?: string
  /** The date this entity was created. */
  readonly createdOn?: string
  /** The date this entity was last modified. */
  readonly modifiedOn?: string
  /** The ID of the user that created this entity. */
  readonly createdBy?: string
  /** The ID of the user that last modified this entity. */
  readonly modifiedBy?: string
  /** The ID of the Entity that is the parent of this Entity. */
  parentId?: string
  /** Indicates which implementation of Entity this object represents. */
  readonly concreteType: ConcreteEntityType
  /** @deprecated This field is deprecated and will be removed in future versions of Synapse */
  attachments?: AttachmentData[]
  /** @deprecated This field is deprecated and will be removed in future versions of Synapse */
  annotations?: string
  /** @deprecated This field is deprecated and will be removed in future versions of Synapse */
  accessControlList?: string
  /** @deprecated This field is deprecated and will be removed in future versions of Synapse */
  entityType?: string
  /** @deprecated This field is deprecated and will be removed in future versions of Synapse */
  uri?: string
}
