import { SelectColumn, Row } from '../synapseTypes'
import { SYNAPSE_ENTITY_ID_REGEX } from '../functions/RegularExpressions'
import {
  ColumnMultiValueFunction,
  ColumnMultiValueFunctionQueryFilter,
  ColumnSingleValueFilterOperator,
  ColumnSingleValueQueryFilter,
  QueryFilter,
} from '../synapseTypes/Table/QueryFilter'

export type SQLOperator = 'LIKE' | '=' | 'HAS'

// look for "group by", multi-line and case insensitive
const GROUP_BY_REGEX = /group by/im
export const isGroupByInSql = (sql: string): boolean => {
  return GROUP_BY_REGEX.test(sql)
}
const WITHOUT_SYN_PREFIX = 3

export const getWhereInsertIndex = (tokens: string[][]): number => {
  const existingWhereIndex = tokens.findIndex(el => el[0] === 'WHERE')
  if (existingWhereIndex !== -1) {
    return existingWhereIndex
  }
  let targetIndex = tokens.findIndex(el => el[0] === 'GROUP')
  if (targetIndex !== -1) {
    return targetIndex
  }
  targetIndex = tokens.findIndex(el => el[0] === 'HAVING')
  if (targetIndex !== -1) {
    return targetIndex
  }
  targetIndex = tokens.findIndex(el => el[0] === 'ORDER')
  if (targetIndex !== -1) {
    return targetIndex
  }
  //else insert it at the end
  targetIndex = tokens.findIndex(el => el[0] === 'EOF')
  return targetIndex
}

/**
 * Given the search params, return a set of QueryFilters to narrow the the query to view just related data. May return null if a QueryFilter should not be added.
 * @param sql
 * @param searchParams
 * @param operator
 * @returns
 */
export const generateQueryFilterFromSearchParams = (
  searchParams?: Record<string, string>,
  operator: SQLOperator = 'LIKE',
): QueryFilter[] | null => {
  if (!searchParams) {
    return null
  }
  const isQueryWrapperKey = (key: string) => key.startsWith('QueryWrapper')
  const searchParamKeys = Object.keys(searchParams)
  if (
    searchParamKeys.length === 0 ||
    searchParamKeys.every(isQueryWrapperKey)
  ) {
    return null
  }

  const queryFilters = Object.keys(searchParams)
    .filter(key => !isQueryWrapperKey(key))
    .map(key => {
      if (operator === 'HAS') {
        const filter: ColumnMultiValueFunctionQueryFilter = {
          concreteType:
            'org.sagebionetworks.repo.model.table.ColumnMultiValueFunctionQueryFilter',
          columnName: key,
          function: ColumnMultiValueFunction.HAS,
          values: searchParams[key].split(','),
        }
        return filter
      } else if (operator === 'LIKE') {
        let value = searchParams[key]
        if (value.match(SYNAPSE_ENTITY_ID_REGEX)) {
          // If we use a LIKE statement with a synId the backend will look for a string with the first three
          // characters being 'syn', however, it stores synIds without 'syn', so the query will fail
          // The backend usually parses 'syn' out, but not with the LIKE clause since its expecting a regex, so we
          // parse this out. This will cause a bug if something matches the synId regex but is in free text.
          value = value.substring(WITHOUT_SYN_PREFIX)
        }
        const filter: ColumnSingleValueQueryFilter = {
          concreteType:
            'org.sagebionetworks.repo.model.table.ColumnSingleValueQueryFilter',
          columnName: key,
          operator: ColumnSingleValueFilterOperator.LIKE,
          // Add wildcards around the value
          values: [`%${value}%`],
        }
        return filter
      } else {
        // operator is '='
        // The backend doesn't have an '=' operator for query filters, but we can just use LIKE without wildcards.
        const filter: ColumnSingleValueQueryFilter = {
          concreteType:
            'org.sagebionetworks.repo.model.table.ColumnSingleValueQueryFilter',
          columnName: key,
          operator: ColumnSingleValueFilterOperator.LIKE,
          values: [searchParams[key]],
        }
        return filter
      }
    })
  return queryFilters
}

//parses synapse entity id from a sql query string
//look for a pattern of 'from[some number of spaces]syn[somenumbers]` case insensitive
export const parseEntityIdFromSqlStatement = (sql: string): string => {
  const matches = sql.match(/(from)\s+(syn)\d+/gi)
  return matches && matches[0] ? matches[0].substr(5).trim() : ''
}

export const parseEntityIdAndVersionFromSqlStatement = (
  sql: string,
): { entityId: string; versionNumber?: number } | null => {
  const regex = /from\s+(syn\d+)(?:\.(\d+))?/i
  const matches = regex.exec(sql)
  if (!matches) {
    return null
  }
  return {
    entityId: matches[1],
    versionNumber: matches[2] ? parseInt(matches[2]) : undefined,
  }
}

export const resultToJson = <T>(
  headerColumns: SelectColumn[],
  rowColumns: Row[],
): T[] => {
  const result: T[] = []
  const rows = rowColumns.map(row => row.values)
  const headers = headerColumns.map(column => column.name)
  rows.forEach((row, index) => {
    result[index] = {} as T
    row.forEach((text, cellIndex) => {
      result[index][headers[cellIndex]] = text
    })
  })
  return result
}
