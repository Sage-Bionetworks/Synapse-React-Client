export enum EntityColumnType {
  STRING = 'STRING',
  DOUBLE = 'DOUBLE',
  BOOLEAN = 'BOOLEAN',
  INTEGER = 'INTEGER',
  DATE = 'DATE',
  FILEHANDLEID = 'FILEHANDLEID',
  ENTITYID = 'ENTITYID',
  LINK = 'LINK',
  LARGETEXT = 'LARGETEXT',
  USERID = 'USERID',
  STRING_LIST = 'STRING_LIST',
  INTEGER_LIST = 'INTEGER_LIST',
  BOOLEAN_LIST = 'BOOLEAN_LIST',
  DATE_LIST = 'DATE_LIST',
}

// https://docs.synapse.org/rest/org/sagebionetworks/repo/model/table/SelectColumn.html
export type SelectColumn = {
  name: string // The required display name of the column
  columnType: EntityColumnType
  // The column type determines the type of data that can be stored in a co
  id: string // The optional ID of the select column, if this is a direct column selected
}
