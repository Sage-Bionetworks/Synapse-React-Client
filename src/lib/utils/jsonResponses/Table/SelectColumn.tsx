export type EntityColumnType =
  | 'STRING'
  | 'DOUBLE'
  | 'BOOLEAN'
  | 'INTEGER'
  | 'DATE'
  | 'FILEHANDLEID'
  | 'ENTITYID'
  | 'LINK'
  | 'LARGETEXT'
  | 'USERID'

// https://docs.synapse.org/rest/org/sagebionetworks/repo/model/table/SelectColumn.html
export type SelectColumn = {
  name: string // The required display name of the column
  columnType: EntityColumnType
  // The column type determines the type of data that can be stored in a co
  id: string // The optional ID of the select column, if this is a direct column selected
}
