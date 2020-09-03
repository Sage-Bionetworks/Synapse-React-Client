import { lexer, parser } from 'sql-parser'
import { SYNAPSE_REGX } from '../../containers/GenericCard'
import { SelectColumn, Row } from '../synapseTypes'

export type KeyValue = {
  [index: string]: string
}

export type SQLOperator = 'LIKE' | '=' | 'HAS'

// look for "group by", multi-line and case insensitive
const GROUP_BY_REGEX = /group by/im
export const isGroupByInSql = (sql: string): boolean => {
  return GROUP_BY_REGEX.test(sql)
}
const WITHOUT_SYN_PREFIX = 3

const generateTokenUsingOperator = (
  literal: string,
  operator: SQLOperator,
  match: string,
) => {
  let usedMatchForLike = match
  if (match.match(SYNAPSE_REGX)) {
    // If we use a LIKE statement with a synId the backend will look for a string with the first three
    // characters being 'syn', however, it stores synIds without 'syn', so the query will fail
    // The backend usually parses 'syn' out, but not with the LIKE clause since its expecting a regex, so we
    // parse this out. This will cause a bug if something matches the synId regex but is in free text.
    usedMatchForLike = match.substring(WITHOUT_SYN_PREFIX)
  }
  // form the has clause, e.g sql = ".... HAS ('condition1', 'condition2',...,'conditionN')
  const matchForHas = match
    .split(',')
    // NOTE - Using single quotes to surround the search term is necessary for the backend parser.
    .map(el => `'${el}'`)
    .join(',')
  switch (operator) {
    case 'LIKE':
      return [
        ['LITERAL', literal, '1'],
        ['OPERATOR', operator, '1'],
        ['STRING', `%${usedMatchForLike}%`, '1'],
      ]
    case 'HAS':
      return [
        ['LITERAL', literal, '1'],
        ['OPERATOR', operator, '1'],
        // Using parameter as hack, the parser will use the exact value for a parameter value,
        // it won't add quotes around the argument or remove parens (which is the standard behavior
        // for type STRING)
        ['PARAMETER', `(${matchForHas})`, '1'],
      ]
    default:
      // default use operator as-is
      return [
        ['LITERAL', literal, '1'],
        ['OPERATOR', operator, '1'],
        ['STRING', match, '1'],
      ]
  }
}

// This will construct a sql query by adding the conditions in searchParams
// to the WHERE clause, preserving all other clauses
export const insertConditionsFromSearchParams = (
  searchParams: KeyValue,
  sql: string,
  operator: SQLOperator = 'LIKE',
) => {
  // if there are no search params, or if all search params are QueryWrapper queries
  const isQueryWrapperKey = (key: string) => key.startsWith('QueryWrapper')
  let searchParamKeys = Object.keys(searchParams)
  if (searchParamKeys.length == 0 || searchParamKeys.every(isQueryWrapperKey)) {
    return sql
  }
  const tokens: string[][] = lexer.tokenize(sql)
  // we want to either create a where clause or insert into the where clause
  const foundIndex = tokens.findIndex(el => el[0] === 'WHERE')
  const whereClauseIndex =
    foundIndex === -1
      ? tokens.findIndex(el => el[0] === 'FROM') + 2
      : foundIndex
  const indexAfterWhereClause = whereClauseIndex + 1
  if (foundIndex === -1) {
    // insert a where clause
    tokens.splice(whereClauseIndex, 0, ['WHERE', 'WHERE', '1'])
  } else {
    // if this is inserting into a where clause then we have to make sure that the logic is chained
    tokens.splice(indexAfterWhereClause, 0, ['CONDITIONAL', 'AND', '1'])
  }
  const searchParamsLen = Object.keys(searchParams).length
  Object.keys(searchParams).forEach((key, index) => {
    const token = generateTokenUsingOperator(key, operator, searchParams[key])
    if (index < searchParamsLen - 1) {
      // make sure to chain the ANDs until the last one
      token.unshift(['CONDITIONAL', 'AND', '1'])
    }
    tokens.splice(indexAfterWhereClause, 0, ...token)
  })
  return formatSQLFromParser(tokens)
}

export const formatSQLFromParser = (tokens: string[][]) => {
  // replace all DBLSTRINGs (escaped strings) with LITERALs
  tokens.forEach(value => {
    if (value[0] == 'DBLSTRING') {
      value[0] = 'LITERAL'
    }
  })
  // if synId has a DOT (e.g. 'syn123.2') then we have to alter the sql produced
  const dotIndex = tokens.findIndex(val => val[0] === 'DOT')
  if (dotIndex !== -1) {
    // Given sql with a versioned entity, e.g. "select * from syn123.2"
    // Tokens has the form:
    /*
    [
      ["SELECT" , "select"],
      ..
      ["FROM", "from"],
      ["LITERAL", "syn123"],
      ["DOT", "."],
      ["LITERAL", "2"],

      which we need to transform to

      ["SELECT" , "select"],
      ..
      ["FROM", "from"],
      ["LITERAL", "syn123.2"],
    */

    const synId = tokens[dotIndex - 1][1]
    const version = tokens[dotIndex + 1][1]
    const synIdWithVersion = `${synId}.${version}`
    tokens.splice(dotIndex, 2)
    tokens[dotIndex - 1] = ['LITERAL', synIdWithVersion]
  }
  const newSql = parser.parse(tokens).toString() as string
  // construct the sql using their formatter and then alter it to remove erroneous
  // backticks from the table identifier: e.g. (their output) `syn1234` ->  (our output) syn1234
  const synId = tokens[tokens.findIndex(el => el[0] === 'FROM') + 1][1]
  const synIdWithBackticks = `\`${synId}\``
  return newSql.replace(synIdWithBackticks, synId)
}
// @ts-ignore
window.formatSQLFromParser = formatSQLFromParser

//parses synapse entity id from a sql query string
//look for a pattern of 'from[some number of spaces]syn[somenumbers]` case insensitive
export const parseEntityIdFromSqlStatement = (sql: string): string => {
  const matches = sql.match(/(from)\s+(syn)\d+/gi)
  return matches && matches[0] ? matches[0].substr(5).trim() : ''
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
