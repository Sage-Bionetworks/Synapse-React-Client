import { RestrictableObjectDescriptor } from './RestrictableObjectDescriptor'

export enum ACCESS_TYPE {
  CREATE = 'CREATE',
  READ = 'READ',
  UPDATE = 'UPDATE',
  DELETE = 'DELETE',
  CHANGE_PERMISSIONS = 'CHANGE_PERMISSIONS',
  DOWNLOAD = 'DOWNLOAD',
  UPLOAD = 'UPLOAD',
  PARTICIPATE = 'PARTICIPATE',
  SUBMIT = 'SUBMIT',
  READ_PRIVATE_SUBMISSION = 'READ_PRIVATE_SUBMISSION',
  UPDATE_SUBMISSION = 'UPDATE_SUBMISSION',
  DELETE_SUBMISSION = 'DELETE_SUBMISSION',
  TEAM_MEMBERSHIP_UPDATE = 'TEAM_MEMBERSHIP_UPDATE',
  SEND_MESSAGE = 'SEND_MESSAGE',
  CHANGE_SETTINGS = 'CHANGE_SETTINGS',
  MODERATE = 'MODERATE',
}

export interface AccessRequirement {
  versionNumber: number //	The version number issued to this version on the object.
  id: number //	The unique immutable ID. Provided by the system, the user may not set this field.
  etag: string //	Synapse employs an Optimistic Concurrency Control (OCC) scheme to handle concurrent updates. Since the E-Tag changes every time an entity is updated it is used to detect when a client's current representation of an object is out-of-date.
  createdOn: string //	The date this object was created. Provided by the system, the user may not set this field.
  modifiedOn: string //	The date this object was last modified. Provided by the system, the user may not set this field.
  createdBy: string //	The user that created this object. Provided by the system, the user may not set this field.
  modifiedBy: string //	The user that last modified this object. Provided by the system, the user may not set this field.
  subjectIds: Array<RestrictableObjectDescriptor> // The IDs of the items controlled by this Access Requirement. Required when creating or updating.
  accessType: ACCESS_TYPE //	The enumeration of possible permission.
  description?: string // Short optional description for the AR. Limited to 50 characters.
  concreteType: string //	Indicates which type of AccessRequirement this object represents. Provided by the system, the user may not set this field.
}
