import {
  getColumnIndiciesWithType,
  getCountFunctionColumnIndices,
  getSqlUnderlyingDataForRow,
  getUniqueEntities,
} from '../../../lib/containers/table/SynapseTableUtils'
import {
  ColumnType,
  QueryResultBundle,
  Row,
} from '../../../lib/utils/synapseTypes'
import queryResultBundleJson from '../../../mocks/query/syn16787123.json'

const queryResultBundle: QueryResultBundle =
  queryResultBundleJson as QueryResultBundle

describe('Synapse Table Utilities tests', () => {
  describe('PORTALS-527: get count function column indexes', () => {
    it('not group by', () => {
      const originalSql: string =
        'SELECT bar, baz' +
        'FROM syn987654321 ' +
        "WHERE species='Human' " +
        "AND assay='rnaSeq'"
      const columnIndexes: number[] = getCountFunctionColumnIndices(originalSql)
      expect(columnIndexes).toHaveLength(0)
    })
    it('group by with count function', () => {
      const originalSql: string =
        'SELECT bar, baz, count(distinct id) as files, concat(biz)' +
        'FROM syn987654321 ' +
        "WHERE species='Human' " +
        "AND assay='rnaSeq' group by 1, 2"
      const columnIndexes: number[] = getCountFunctionColumnIndices(originalSql)
      expect(columnIndexes).toEqual([2])
    })
    it('group by without count function', () => {
      const originalSql: string =
        'SELECT bar, baz, concat(distinct id) as files, concat(biz)' +
        'FROM syn987654321 ' +
        "WHERE species='Human' " +
        "AND assay='rnaSeq' group by 1, 2"
      const columnIndexes: number[] = getCountFunctionColumnIndices(originalSql)
      expect(columnIndexes).toHaveLength(0)
    })
  })

  describe('PORTALS-527: aggregate query support (show underlying data)', () => {
    it('sql parsing test', () => {
      const originalSql: string =
        'SELECT bar, baz, count(distinct file_id)' +
        'AS biz FROM syn987654321 ' +
        "WHERE species='Human' " +
        "AND assay='rnaSeq' group by 1,2 order by 3 asc"
      const testRow: Row = {
        rowId: 123,
        values: ['bar1', 'baz1', '10'],
        versionNumber: 8,
      }
      const sql = getSqlUnderlyingDataForRow(
        testRow,
        originalSql,
        queryResultBundle,
      )
      expect(sql.synId).toEqual('syn987654321')
      expect(sql.newSql).toEqual(
        "SELECT *\n  FROM syn987654321\n  WHERE ((((`species` = 'Human') AND (`assay` = 'rnaSeq')) AND (`bar` = 'bar1')) AND (`baz` = 'baz1'))",
      )
    })
    it('sql parsing test without WHERE clause', () => {
      const originalSql: string =
        'SELECT bar, baz, count(distinct file_id)' +
        'AS biz FROM syn987654321 ' +
        'Group By 1,2 order by 3 asc'
      const testRow: Row = {
        rowId: 123,
        values: ['bar1', 'baz1', '10'],
        versionNumber: 8,
      }
      const sql = getSqlUnderlyingDataForRow(
        testRow,
        originalSql,
        queryResultBundle,
      )
      expect(sql.synId).toEqual('syn987654321')
      expect(sql.newSql).toEqual(
        "SELECT *\n  FROM syn987654321\n  WHERE ((`bar` = 'bar1') AND (`baz` = 'baz1'))",
      )
    })
  })

  describe('Table cell renderer utilities', () => {
    const ENTITYID_INDEX = 0
    const USERID_INDEX = 1
    const DATE_INDEX = 2
    const STRING_LIST_INDEX = 3
    const DATE_LIST_INDEX = 4
    const BOOLEAN_LIST_INDEX = 5
    const INTEGER_LIST_INDEX = 6
    const FILEHANDLEID_INDEX = 7
    const ENTITYIDLIST_INDEX = 8
    const MOCKED_STRING = 'MOCKED_VALUE'
    const MOCKED_STRING_LIST = '["MOCKED_VALUE1","MOCKED_VALUE2"]'
    const MOCK_DATE_VALUE = '1581360939000'
    const MOCKED_DATE_LIST = `[${MOCK_DATE_VALUE}]`
    const MOCKED_BOOLEAN_LIST = '[true, false]'
    const MOCKED_INTEGER_LIST = '[10, 11]'
    const MOCKED_NUM = 1
    // The query result bundle has two columns of type entity, the second
    // is of type ENTITYID, the third is USERID
    const mockData: QueryResultBundle = {
      concreteType: 'org.sagebionetworks.repo.model.table.QueryResultBundle',
      selectColumns: [
        {
          id: MOCKED_STRING,
          name: MOCKED_STRING,
          columnType: ColumnType.ENTITYID,
        },
        {
          id: MOCKED_STRING,
          name: MOCKED_STRING,
          columnType: ColumnType.USERID,
        },
        {
          id: MOCKED_STRING,
          name: MOCKED_STRING,
          columnType: ColumnType.DATE,
        },
        {
          id: MOCKED_STRING,
          name: MOCKED_STRING,
          columnType: ColumnType.STRING_LIST,
        },
        {
          id: MOCKED_STRING,
          name: MOCKED_STRING,
          columnType: ColumnType.DATE_LIST,
        },
        {
          id: MOCKED_STRING,
          name: MOCKED_STRING,
          columnType: ColumnType.BOOLEAN_LIST,
        },
        {
          id: MOCKED_STRING,
          name: MOCKED_STRING,
          columnType: ColumnType.INTEGER_LIST,
        },
        {
          id: MOCKED_STRING,
          name: MOCKED_STRING,
          columnType: ColumnType.FILEHANDLEID,
        },
      ],
      queryResult: {
        concreteType: 'org.sagebionetworks.repo.model.table.QueryResult',
        queryResults: {
          concreteType: 'org.sagebionetworks.repo.model.table.RowSet',
          tableId: MOCKED_STRING,
          etag: MOCKED_STRING,
          headers: [
            {
              columnType: ColumnType.ENTITYID,
              name: MOCKED_STRING,
              id: MOCKED_STRING,
            },
            {
              columnType: ColumnType.USERID,
              name: MOCKED_STRING,
              id: MOCKED_STRING,
            },
            {
              columnType: ColumnType.DATE,
              name: MOCKED_STRING,
              id: MOCKED_STRING,
            },
            {
              id: MOCKED_STRING,
              name: MOCKED_STRING,
              columnType: ColumnType.STRING_LIST,
            },
            {
              id: MOCKED_STRING,
              name: MOCKED_STRING,
              columnType: ColumnType.DATE_LIST,
            },
            {
              id: MOCKED_STRING,
              name: MOCKED_STRING,
              columnType: ColumnType.BOOLEAN_LIST,
            },
            {
              id: MOCKED_STRING,
              name: MOCKED_STRING,
              columnType: ColumnType.INTEGER_LIST,
            },
            {
              id: MOCKED_STRING,
              name: MOCKED_STRING,
              columnType: ColumnType.FILEHANDLEID,
            },
          ],
          rows: [
            {
              values: [
                'syn123',
                'syn120',
                '1567525763000',
                MOCKED_STRING_LIST,
                MOCKED_DATE_LIST,
                MOCKED_BOOLEAN_LIST,
                MOCKED_INTEGER_LIST,
              ],
              versionNumber: MOCKED_NUM,
              rowId: MOCKED_NUM,
            },
            {
              // @ts-ignore
              values: [
                'syn124',
                'syn120',
                null,
                MOCKED_STRING_LIST,
                MOCKED_DATE_LIST,
                MOCKED_BOOLEAN_LIST,
                MOCKED_INTEGER_LIST,
              ],
              versionNumber: MOCKED_NUM,
              rowId: MOCKED_NUM,
            },
            {
              values: [
                'syn125',
                'syn121',
                '1567525763003',
                MOCKED_STRING_LIST,
                MOCKED_DATE_LIST,
                MOCKED_BOOLEAN_LIST,
                MOCKED_INTEGER_LIST,
              ],
              versionNumber: MOCKED_NUM,
              rowId: MOCKED_NUM,
            },
          ],
        },
      },
    }
    it('gets column indicies correctly', () => {
      const entities = getColumnIndiciesWithType(mockData, ColumnType.ENTITYID)
      expect(entities).toEqual([ENTITYID_INDEX])
      const userIds = getColumnIndiciesWithType(mockData, ColumnType.USERID)
      expect(userIds).toEqual([USERID_INDEX])
      const dates = getColumnIndiciesWithType(mockData, ColumnType.DATE)
      expect(dates).toEqual([DATE_INDEX])
      const stringLists = getColumnIndiciesWithType(
        mockData,
        ColumnType.STRING_LIST,
      )
      expect(stringLists).toEqual([STRING_LIST_INDEX])
      const dateLists = getColumnIndiciesWithType(
        mockData,
        ColumnType.DATE_LIST,
      )
      expect(dateLists).toEqual([DATE_LIST_INDEX])
      const booleanLists = getColumnIndiciesWithType(
        mockData,
        ColumnType.BOOLEAN_LIST,
      )
      expect(booleanLists).toEqual([BOOLEAN_LIST_INDEX])
      const integerLists = getColumnIndiciesWithType(
        mockData,
        ColumnType.INTEGER_LIST,
      )
      expect(integerLists).toEqual([INTEGER_LIST_INDEX])
      const dateOrIntegerLists = getColumnIndiciesWithType(
        mockData,
        ColumnType.DATE_LIST,
        ColumnType.INTEGER_LIST,
      )
      expect(dateOrIntegerLists).toEqual([DATE_LIST_INDEX, INTEGER_LIST_INDEX])

      const fileHandleId = getColumnIndiciesWithType(
        mockData,
        ColumnType.FILEHANDLEID,
      )
      expect(fileHandleId).toEqual([FILEHANDLEID_INDEX])
    })

    it('gets unique entities', () => {
      // test entityId column type
      let mapEntityIdToHeader = {}
      let indicies = [ENTITYID_INDEX]
      let uniqueEntities = getUniqueEntities(
        mockData,
        mapEntityIdToHeader,
        indicies,
      )
      expect(uniqueEntities.size).toEqual(3)
      // test userId column
      mapEntityIdToHeader = {
        syn120: {},
      }
      indicies = [USERID_INDEX]
      uniqueEntities = getUniqueEntities(
        mockData,
        mapEntityIdToHeader,
        indicies,
      )
      expect(uniqueEntities.size).toEqual(1)
    })
  })
})
