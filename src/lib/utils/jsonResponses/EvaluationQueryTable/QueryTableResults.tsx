// https://docs.synapse.org/rest/org/sagebionetworks/repo/model/query/Row.html
export type Row = {
  values: string[]
}

// https://docs.synapse.org/rest/org/sagebionetworks/repo/model/query/QueryTableResults.html
export type QueryTableResults = {
  headers: string[]
  rows: Row[]
  totalNumberOfResults: number
}
