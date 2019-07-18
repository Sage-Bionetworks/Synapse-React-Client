import { lexer, parser } from 'sql-parser'

export type KeyValue = {
  [index: string]: string
}

export type SQLOperator = 'LIKE' | '='

const generateTokenUsingOperator = (literal: string, operator: SQLOperator, match: string) => {
  switch (operator) {
    case 'LIKE':
      return [
        ['LITERAL', literal, '1'],
        ['OPERATOR', operator, '1'],
        ['STRING', `%${match}%`, '1'], 
      ]
    case '=':
      return [
        ['LITERAL', literal, '1'],
        ['OPERATOR', operator, '1'],
        ['STRING', match, '1'], 
      ]
  } 
}

// This will construct a sql query by adding the conditions in searchParams
// to the WHERE clause, preserving all other clauses
export const insertWhereClauseFromURL = (searchParams: KeyValue, sql: string, operator: SQLOperator = 'LIKE') => {
  const tokens: string[][] = lexer.tokenize(sql)
  // we want to either create a where clause or insert into the where clause
  const foundIndex = tokens.findIndex(el => el[0] === 'WHERE')
  const whereClauseIndex = foundIndex === -1 ? (tokens.findIndex(el => el[0] === 'FROM') + 2) : foundIndex
  const indexAfterWhereClause = whereClauseIndex + 1
  if (foundIndex === -1) {
    // insert a where clause
    tokens.splice(whereClauseIndex, 0, ['WHERE', 'WHERE', '1'])
  } else {
    // if this is inserting into a where clause then we have to make sure that the logic is chained
    tokens.splice(indexAfterWhereClause, 0, ['CONDITIONAL', 'AND', '1'])
  }
  const searchParamsLen = Object.keys(searchParams).length
  Object.keys(searchParams).forEach(
    (key, index) => {
      const token = generateTokenUsingOperator(key, operator, searchParams[key])
      if (index < searchParamsLen - 1) {
        // make sure to chain the ANDs until the last one
        token.unshift(['CONDITIONAL', 'AND', '1'])
      }
      tokens.splice(indexAfterWhereClause, 0, ...token)
    }
  )
  return formatSQLFromParser(tokens)
}

export const formatSQLFromParser = (tokens: string [][]) => {
  // remove backtick from output sql (for table name): `syn1234` becomes syn1234
  const synId = tokens[tokens.findIndex(el => el[0] === 'FROM') + 1][1]
  const newSql = parser.parse(tokens).toString()
  const splitString = `\`${synId}\``
  return newSql.split(splitString).join(synId)
}
