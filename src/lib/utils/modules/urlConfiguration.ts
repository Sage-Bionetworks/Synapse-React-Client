import { KeyAndAliasMap } from '../../../lib/containers/GenericCard'

export type KeyValue = {
  [index: string]: string
}

// This will construct a sql query accordingly
// SELECT <columns> FROM <synapseId> WHERE <searchParams>
export type URLConfiguation = {
  searchParams: KeyValue
  synapseId: string
  // if !columns then we assume its SELECT *
  columns?: KeyAndAliasMap
}

export const generateSQL = (urlConfiguration: URLConfiguation) => {
  const { searchParams, synapseId, columns } = urlConfiguration
  const whereClause = Object.keys(searchParams).map(
    (key) => {
      return `"${key}" LIKE '${searchParams[key]}'`
    }
  ).join(' ')
  let selectClause
  if (!columns) {
    selectClause = ' * '
  } else {
    const columnsLen = Object.keys(columns).length
    selectClause = Object.keys(columns).map(
      (key, index) => {
        const alias = columns[key]
        const statement = alias ? `${key} AS ${alias},` : `${key},`
        if (index - 1 < columnsLen) {
           return `${statement},`
        }
        return `${statement}`
      }
    ).join(' ')
  }
  return `SELECT ${selectClause} FROM ${synapseId} WHERE ${whereClause}`
}
