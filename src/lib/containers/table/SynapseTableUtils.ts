import { lexer } from 'sql-parser'
import {
  formatSQLFromParser,
  isGroupByInSql,
} from '../../utils/functions/sqlFunctions'
import { ColumnType, QueryResultBundle, Row } from '../../utils/synapseTypes'

type ColumnReference = {
  index: number
  name: string
}

export const getColumnIndiciesWithType = (
  data: QueryResultBundle | undefined,
  ...columnTypes: ColumnType[]
) => {
  const columnsOfTypeEntity: number[] = []
  data?.selectColumns?.forEach((el, index) => {
    if (columnTypes.includes(el.columnType)) {
      columnsOfTypeEntity.push(index)
    }
  })
  return columnsOfTypeEntity
}

export const getUniqueEntities = (
  data: QueryResultBundle,
  mapIdToHeader: {},
  indicies: number[],
) => {
  const distinctEntities = new Set<string>()
  data.queryResult.queryResults.rows.forEach(row => {
    row.values.forEach((el: any, colIndex: number) => {
      // make sure this is a column of type entity and that we haven't retrieved this entity's information prior
      if (
        indicies.includes(colIndex) &&
        !Object.prototype.hasOwnProperty.call(mapIdToHeader, el) &&
        el
      ) {
        distinctEntities.add(el)
      }
    })
  })
  return distinctEntities
}

/**
 * Return the select column indexes for columns that use the aggregate count function.
 * If sql does not have a GROUP BY, this returns an empty array.
 * @param originalSql
 * @deprecated See comments on SWC-6075
 */
export function getCountFunctionColumnIndices(originalSql: string): number[] {
  const indexes: number[] = []
  if (isGroupByInSql(originalSql)) {
    const tokens: string[][] = lexer.tokenize(originalSql)
    const selectIndex = tokens.findIndex(el => el[0] === 'SELECT')
    const fromIndex = tokens.findIndex(el => el[0] === 'FROM')
    let columnIndex = 0
    for (
      let index = selectIndex + 1;
      index < fromIndex - selectIndex - 1;
      index += 1
    ) {
      const token = tokens[index]
      if (token[0] === 'FUNCTION' && token[1].toLowerCase() === 'count') {
        // found a count column!
        indexes.push(columnIndex)
      } else if (token[0] === 'SEPARATOR') {
        // next column
        columnIndex += 1
      }
    }
  }
  return indexes
}

/**
 *
 * @deprecated See comments on SWC-6075
 */
export function getSqlUnderlyingDataForRow(
  selectedRow: Row,
  originalSql: string,
  data?: QueryResultBundle,
): { synId: string; newSql: string } {
  let tokens: string[][] = lexer.tokenize(originalSql)
  const selectIndex = tokens.findIndex(el => el[0] === 'SELECT')
  const fromIndex = tokens.findIndex(el => el[0] === 'FROM')

  // gather all of the column names literals between select and from (and their indices)
  const columnReferences: ColumnReference[] = []
  let columnIndex = 0
  let foundFunctionForColumn = false
  for (
    let index = selectIndex + 1;
    index < fromIndex - selectIndex - 1;
    index += 1
  ) {
    const token = tokens[index]
    // parsing error.  concat function is reported as a LITERAL instead of a function
    if (token[0] === 'FUNCTION' || token[1].toLocaleLowerCase() === 'concat') {
      foundFunctionForColumn = true
    } else if (token[0] === 'LITERAL' && !foundFunctionForColumn) {
      // found a column
      columnReferences.push({ index: columnIndex, name: token[1] })
    } else if (token[0] === 'SEPARATOR') {
      // next column
      columnIndex += 1
      // reset "found function"
      foundFunctionForColumn = false
    }
  }

  // remove all tokens after (and including) group
  tokens = tokens.slice(
    0,
    tokens.findIndex(el => el[0] === 'GROUP'),
  )
  // replace all columns with *
  tokens.splice(selectIndex + 1, fromIndex - selectIndex - 1, [
    'STAR',
    '*',
    '1',
  ])
  // add new items to where clause, but only if the column name corresponds to a real column in the table/view!
  // use row.values
  if (data === undefined) {
    return { synId: '', newSql: '' }
  }
  const whereIndex = tokens.findIndex(el => el[0] === 'WHERE')
  if (whereIndex === -1) {
    // does not contain a where clause
    tokens.push(['WHERE', 'WHERE', '1'])
  } else {
    // alreay contains a where clause, add the first AND
    tokens.push(['CONDITIONAL', 'AND', '1'])
  }

  // look for headers in column models, if they match then add a where clause
  columnReferences.forEach((value: ColumnReference, index: number) => {
    const rowValue = selectedRow.values[value.index]
    // PORTALS-712: support null values
    if (rowValue) {
      tokens.push(
        ['LITERAL', value.name, '1'],
        ['OPERATOR', '=', '1'],
        ['STRING', rowValue, '1'],
        ['CONDITIONAL', 'AND', '1'],
      )
    } else {
      tokens.push(
        ['LITERAL', value.name, '1'],
        ['OPERATOR', 'IS', '1'],
        ['BOOLEAN', 'null', '1'],
        ['CONDITIONAL', 'AND', '1'],
      )
    }
  })
  // remove the last AND
  tokens.pop()
  // remove backtick from output sql (for table name): `syn1234` becomes syn1234
  const synId = tokens[tokens.findIndex(el => el[0] === 'FROM') + 1][1]
  tokens.push(['EOF', '', '1'])
  return { synId, newSql: formatSQLFromParser(tokens) }
}
