export enum ProjectHeaderEnum {
  CREATED = 'CREATED',
  PARTICIPATED = 'PARTICIPATED',
  TEAM = 'TEAM',
}

// https://docs.synapse.org/rest/org/sagebionetworks/repo/model/ProjectHeader.html
type ProjectHeader = {
  name: string //	The name of the project
  id: string //	The id of the project
  lastActivity: string //	The optional last recorded activity for this project and the current user.
  modifiedOn: string //	The date this project was last modified.
  modifiedBy: number //	The ID of the user that last modified this project.
}

// https://docs.synapse.org/rest/org/sagebionetworks/repo/model/ProjectHeaderList.html
export type ProjectHeaderList = {
  results: ProjectHeader[]
  nextPageToken: string
}
