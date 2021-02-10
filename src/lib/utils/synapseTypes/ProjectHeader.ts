export type ProjectHeaderList = {
  results: Array<ProjectHeader>
  nextPageToken: string
}

export type ProjectHeader = {
  name: string
  id: string
  lastActivity: string
  modifiedOn: string
  modifiedBy: number
}
