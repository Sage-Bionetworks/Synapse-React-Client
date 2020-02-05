export enum ApprovalState {
  APPROVED = 'APPROVED',
  REVOKED = 'REVOKED',
}

export interface AccessApproval {
  id: number //	The unique immutable ID
  etag: string //	Synapse employs an Optimistic Concurrency Control (OCC) scheme to handle concurrent updates. Since the E-Tag changes every time an entity is updated it is used to detect when a client's current representation of an object is out-of-date.
  createdOn: string //	The date this object was created.
  modifiedOn: string //	The date this object was last modified.
  createdBy: string //	The user that created this object.
  modifiedBy: string //	The user that last modified this object.
  requirementId: number //	The ID of the Access Requirement that this object approves.
  requirementVersion: number //	The version of the Access Requirement that this object approves.
  submitterId: string //	The user who performed the necessary action(s) to gain this approval.
  accessorId: string //	The ID of the principal (user or group) approved for access
  expiredOn: string //	The date this object will be expired.
  state: ApprovalState //	JSON enum for the state of AccessApproval
}
