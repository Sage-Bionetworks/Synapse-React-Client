// http://rest-docs.synapse.org/rest/org/sagebionetworks/repo/model/Team.html
export type Team = {
  id: string //The id of the Team.
  name: string //The name of the Team.
  description: string //A short description of this Team.
  icon: string //fileHandleId for icon image of the Team
  canPublicJoin: boolean //true for teams which members can join without an invitation or approval
  etag: string // Synapse employs an Optimistic Concurrency Control (OCC) scheme to handle concurrent updates. Since the E-Tag changes every time a Team is updated it is used to detect when a client's current representation of a Team is out-of-date.
  createdOn: string //The date this Team was created.
  modifiedOn: string //The date this Team was last modified.
  createdBy: string //The ID of the user that created this Team.
  modifiedBy: string //The ID of the user that last modified this Team.
}
