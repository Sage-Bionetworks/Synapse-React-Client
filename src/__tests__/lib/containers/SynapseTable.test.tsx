import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { mount, shallow } from 'enzyme'
import { cloneDeep } from 'lodash-es'
import * as React from 'react'
import { SynapseConstants } from '../../../lib'
import { EntityLink } from '../../../lib/containers/EntityLink'
import HasAccess from '../../../lib/containers/HasAccess'
import MarkdownSynapse from '../../../lib/containers/MarkdownSynapse'
import { QueryWrapperChildProps } from '../../../lib/containers/QueryWrapper'
import { getColumnIndiciesWithType } from '../../../lib/containers/synapse_table_functions/getColumnIndiciesWithType'
import { getUniqueEntities } from '../../../lib/containers/synapse_table_functions/getUniqueEntities'
import { SynapseTableCell } from '../../../lib/containers/synapse_table_functions/SynapseTableCell'
import SynapseTable, {
  SORT_STATE,
  SynapseTableProps,
} from '../../../lib/containers/table/SynapseTable'
import { NOT_SET_DISPLAY_VALUE } from '../../../lib/containers/table/SynapseTableConstants'
import UserCard from '../../../lib/containers/UserCard'
import { EnumFacetFilter } from '../../../lib/containers/widgets/query-filter/EnumFacetFilter'
import { unCamelCase } from '../../../lib/utils/functions/unCamelCase'
import { AUTHENTICATED_USERS } from '../../../lib/utils/SynapseConstants'
import { SynapseContextProvider } from '../../../lib/utils/SynapseContext'
import {
  ColumnType,
  EntityHeader,
  QueryBundleRequest,
  QueryResultBundle,
  Row,
  UserGroupHeader,
  UserProfile,
} from '../../../lib/utils/synapseTypes/'
import { MOCK_CONTEXT_VALUE } from '../../../mocks/MockSynapseContext'
import syn16787123Json from '../../../mocks/query/syn16787123.json'

const createShallowComponent = (
  props: SynapseTableProps & QueryWrapperChildProps,
) => {
  const wrapper = mount<SynapseTable>(<SynapseTable {...props} />, {
    wrappingComponent: SynapseContextProvider,
    wrappingComponentProps: {
      synapseContext: MOCK_CONTEXT_VALUE,
    },
  })
  const instance = wrapper.instance()
  return { wrapper, instance }
}

describe('basic functionality', () => {
  const SynapseClient = require('../../../lib/utils/SynapseClient')
  // setup tests
  const title = 'studies'
  const synapseId = 'syn16787123'
  const castData = syn16787123Json
  const totalColumns = 13
  const lastQueryRequest: QueryBundleRequest = {
    concreteType: 'org.sagebionetworks.repo.model.table.QueryBundleRequest',
    entityId: '12345',
    partMask:
      SynapseConstants.BUNDLE_MASK_QUERY_COLUMN_MODELS |
      SynapseConstants.BUNDLE_MASK_QUERY_FACETS |
      SynapseConstants.BUNDLE_MASK_QUERY_RESULTS,
    query: {
      sql: 'SELECT * FROM syn16787123',
      limit: 25,
      offset: 0,
      selectedFacets: [
        {
          columnName: 'projectStatus',
          concreteType:
            'org.sagebionetworks.repo.model.table.FacetColumnValuesRequest',
          facetValues: ['Active', 'Completed'],
        },
        {
          columnName: 'tumorType',
          concreteType:
            'org.sagebionetworks.repo.model.table.FacetColumnValuesRequest',
          facetValues: [
            SynapseConstants.VALUE_NOT_SET,
            'Cutaneous Neurofibroma',
            'JMML',
            'Low Grade Glioma',
            'MPNST',
            'Plexiform Neurofibroma',
            'Plexiform Neurofibroma | MPNST',
            'Plexiform Neurofibroma | MPNST | Cutaneous Neurofibroma',
            'Schwannoma',
            'Schwannoma | Meningioma',
            'SMN',
          ],
        },
      ],
    },
  }
  const getLastQueryRequest = jest.fn(() => cloneDeep(lastQueryRequest))
  const executeQueryRequest = jest.fn()

  const props = {
    lastQueryRequest,
    getLastQueryRequest,
    executeQueryRequest,
    synapseId,
    title,
    chartSelectionIndex: 0,
    isAllFilterSelectedForFacet: {},
    data: castData,
    topLevelControlsState: {
      showColumnFilter: true,
      showFacetFilter: true,
      showFacetVisualization: true,
      showSearchBar: false,
      showDownloadConfirmation: false,
      showColumnSelectDropdown: false,
    },
    isColumnSelected: [
      'projectStatus',
      'dataStatus',
      'fundingAgency',
      'tumorType',
      'diseaseFocus',
    ],
    facet: 'tumorType',
  } as SynapseTableProps & QueryWrapperChildProps

  it('renders without crashing', async () => {
    const { wrapper } = createShallowComponent(props)
    expect(wrapper).toBeDefined()
  })

  it('Does not renders HasAccess when the entity type is not EntityView', async () => {
    const { wrapper, instance } = createShallowComponent({
      ...props,
      showAccessColumn: true,
    })
    expect(wrapper).toBeDefined()
    expect(instance.state.isFileView).toEqual(false)
    expect(wrapper.find(HasAccess)).toHaveLength(0)
  })

  it('updates correctly', async () => {
    const mockEntityCall = jest.fn().mockResolvedValue({
      concreteType: 'EntityView',
    })
    SynapseClient.getEntity = mockEntityCall
    const { wrapper, instance } = createShallowComponent(props)
    expect(wrapper).toBeDefined()
    const newTableId = 'syn123'
    // setup data
    const dataWithNewTableId = cloneDeep(syn16787123Json) as QueryResultBundle
    dataWithNewTableId.queryResult.queryResults.tableId = 'syn123'
    // listen to function call

    await wrapper.setProps({
      data: dataWithNewTableId,
    })
    // since we now disable lifecycle methods during construction (because of DOM interaction for column-resizer), manually call update functions
    instance.getEntityHeadersInData(true)
    instance.getTableConcreteType(props)

    expect(mockEntityCall).toHaveBeenCalledWith(
      MOCK_CONTEXT_VALUE.accessToken,
      newTableId,
    )
  })

  describe('unCamelCase', () => {
    it('works as expected', async () => {
      expect(unCamelCase('basicCase')).toEqual('Basic Case')
      expect(unCamelCase('DNA')).toEqual('DNA')
      expect(unCamelCase('AnotherCase')).toEqual('Another Case')
      expect(unCamelCase('silly ColumnName Test (ms)')).toEqual(
        'Silly Column Name Test (ms)',
      )
      // these cases do not work as expected, and still need facet aliases
      // expect(unCamelCase('pH')).toEqual('pH') // actual 'P H'
      // expect(unCamelCase('nf1Genotype/nf2Genotype')).toEqual('NF1 Genotype/NF2 Genotype') // actual 'Nf1Genotype/nf2Genotype'
      // expect(unCamelCase('cBioFileFormat')).toEqual('cBio File Format') // actual 'C Bio File Format'
    })
  })

  describe('PORTALS-527: aggregate query support (show underlying data)', () => {
    it('sql parsing test', async () => {
      const { instance } = createShallowComponent(props)
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
      const sql = instance.getSqlUnderlyingDataForRow(testRow, originalSql)
      expect(sql.synId).toEqual('syn987654321')
      expect(sql.newSql).toEqual(
        "SELECT *\n  FROM syn987654321\n  WHERE ((((`species` = 'Human') AND (`assay` = 'rnaSeq')) AND (`bar` = 'bar1')) AND (`baz` = 'baz1'))",
      )
    })
    it('sql parsing test without WHERE clause', async () => {
      const { instance } = createShallowComponent(props)
      const originalSql: string =
        'SELECT bar, baz, count(distinct file_id)' +
        'AS biz FROM syn987654321 ' +
        'Group By 1,2 order by 3 asc'
      const testRow: Row = {
        rowId: 123,
        values: ['bar1', 'baz1', '10'],
        versionNumber: 8,
      }
      const sql = instance.getSqlUnderlyingDataForRow(testRow, originalSql)
      expect(sql.synId).toEqual('syn987654321')
      expect(sql.newSql).toEqual(
        "SELECT *\n  FROM syn987654321\n  WHERE ((`bar` = 'bar1') AND (`baz` = 'baz1'))",
      )
    })
  })
  describe('PORTALS-527: get count function column indexes', () => {
    it('not group by', async () => {
      const { instance } = createShallowComponent(props)
      const originalSql: string =
        'SELECT bar, baz' +
        'FROM syn987654321 ' +
        "WHERE species='Human' " +
        "AND assay='rnaSeq'"
      const columnIndexes: number[] =
        instance.getCountFunctionColumnIndexes(originalSql)
      expect(columnIndexes).toHaveLength(0)
    })
    it('group by with count function', async () => {
      const { instance } = createShallowComponent(props)
      const originalSql: string =
        'SELECT bar, baz, count(distinct id) as files, concat(biz)' +
        'FROM syn987654321 ' +
        "WHERE species='Human' " +
        "AND assay='rnaSeq' group by 1, 2"
      const columnIndexes: number[] =
        instance.getCountFunctionColumnIndexes(originalSql)
      expect(columnIndexes).toEqual([2])
    })
    it('group by without count function', async () => {
      const { instance } = createShallowComponent(props)
      const originalSql: string =
        'SELECT bar, baz, concat(distinct id) as files, concat(biz)' +
        'FROM syn987654321 ' +
        "WHERE species='Human' " +
        "AND assay='rnaSeq' group by 1, 2"
      const columnIndexes: number[] =
        instance.getCountFunctionColumnIndexes(originalSql)
      expect(columnIndexes).toHaveLength(0)
    })
  })

  describe('create table headers works', () => {
    it('renders correctly', () => {
      const { wrapper } = createShallowComponent(props)
      // there are a total of 13 columns in view, so we expect
      // 13 headers
      expect(wrapper.find('th')).toHaveLength(totalColumns)
      // there are five facets for the dataset so there should be 5
      // faceted columns
      expect(wrapper.find(EnumFacetFilter)).toHaveLength(5)
      expect(wrapper.find('th.SRC-hidden')).toHaveLength(8)
    })

    it('handle column sort press works', async () => {
      /*
        Overview:
          Go through clicking a column's sort button, there are
          three states that cycle:
            - off
            - descending
            - ascending
      */
      const { wrapper, instance } = createShallowComponent(props)
      // simulate having clicked the sort button on the first column
      // projectName -- this should set it to descend
      const sortedColumn = 'projectName'
      const columnClickInformation = {
        index: 0,
        name: 'projectName',
      }
      const eventStub = {} as any
      await instance.handleColumnSortPress(columnClickInformation)(eventStub)
      const projectNameIconDescending = [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      const descendingColumnObject = {
        column: sortedColumn,
        direction: SORT_STATE[1],
      }
      const projectNameColumnDescending = [descendingColumnObject]
      expect(wrapper.state('columnIconSortState')).toEqual(
        projectNameIconDescending,
      )
      expect(wrapper.state('sortedColumnSelection')).toEqual(
        projectNameColumnDescending,
      )
      // below we match only the part of the object that we expect to have changed
      expect(executeQueryRequest).toHaveBeenCalledWith(
        expect.objectContaining({
          query: expect.objectContaining({
            sort: [descendingColumnObject],
          }),
        }),
      )

      // simulate second button click
      // simulate having clicked the sort button on the first column
      // projectName -- this should set it to descend
      await instance.handleColumnSortPress(columnClickInformation)(eventStub)
      const projectNameIconAscending = [2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      const ascendingColumnObject = {
        column: sortedColumn,
        direction: SORT_STATE[2],
      }
      const projectNameColumnAscending = [ascendingColumnObject]
      expect(wrapper.state('columnIconSortState')).toEqual(
        projectNameIconAscending,
      )
      expect(wrapper.state('sortedColumnSelection')).toEqual(
        projectNameColumnAscending,
      )
      // below we match only the part of the object that we expect to have changed
      expect(executeQueryRequest).toHaveBeenCalledWith(
        expect.objectContaining({
          query: expect.objectContaining({
            sort: [ascendingColumnObject],
          }),
        }),
      )
      // simulate second button click
      // simulate having clicked the sort button on the first column
      // projectName -- this should set it to descend
      await instance.handleColumnSortPress(columnClickInformation)(eventStub)
      const projectNameIconOff = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      // it shouldn't be in the api call at all
      const projectNameColumnOff: any = []
      expect(wrapper.state('columnIconSortState')).toEqual(projectNameIconOff)
      expect(wrapper.state('sortedColumnSelection')).toEqual(
        projectNameColumnOff,
      )
      // below we match only the part of the object that we expect to have changed
      expect(executeQueryRequest).toHaveBeenCalledWith(
        expect.objectContaining({
          query: expect.objectContaining({
            sort: [],
          }),
        }),
      )
    })
  })

  describe('table cells render correctly', () => {
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
    // syn16787123Json has two columns of type entity, the second
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

    it('gets column indicies correctly ', () => {
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

    describe('renders table cells correctly', () => {
      const mockEntityLinkValue: string = 'syn122'
      const mockUserCardValue: string = 'syn123'
      const mockAllAuthenticatedUsersValue: string = 'syn124'
      const mockTeamValue: string = 'syn125'
      const teamName: string = 'team name'
      const mockColumnValue: string = 'syn126'
      const mockDateValue: string = '1574268563000'
      const mockRowId = 122
      const mockRowVersion = 2
      const mockIsEntityView = false

      // We only care about the conditional rendering, not the
      // instantiation of the EntityLink, so we cast the value
      const mapEntityIdToHeader = {
        [mockEntityLinkValue]: {} as EntityHeader,
      }
      const mapUserIdToHeader: Record<
        string,
        Partial<UserGroupHeader & UserProfile>
      > = {
        [mockAllAuthenticatedUsersValue]: {
          isIndividual: false,
          userName: AUTHENTICATED_USERS,
        },
        [mockTeamValue]: {
          isIndividual: false,
          userName: teamName,
        },
        [mockUserCardValue]: {},
      }

      const tableCellProps = {
        isBold: '',
        mapUserIdToHeader: {},
        columnLinkConfig: undefined,
        rowIndex: undefined,
        columnName: '',
        selectColumns: undefined,
        columnModels: undefined,
        isEntityView: mockIsEntityView,
        rowId: mockRowId,
        rowVersionNumber: mockRowVersion
      }

      it('renders an entity link', () => {
        const tableCell = shallow(
          <SynapseTableCell
            {...tableCellProps}
            columnType={ColumnType.ENTITYID}
            columnValue={mockEntityLinkValue}
            mapEntityIdToHeader={mapEntityIdToHeader}
          />,
        )
        expect(tableCell.find(EntityLink)).toHaveLength(1)
      })
      it('PORTALS-2095: renders an entity link for name column in EntityView', () => {
        const tableCell = shallow(
          <SynapseTableCell
            {...tableCellProps}
            columnName='name'
            columnType={ColumnType.STRING}
            columnValue='My amazing project folder'
            mapEntityIdToHeader={mapEntityIdToHeader}
            isEntityView={true}
          />,
        )
        expect(tableCell.find(EntityLink)).toHaveLength(1)
      })

      it('renders a link for all authenticated users', () => {
        const tableCell = shallow(
          <SynapseTableCell
            {...tableCellProps}
            columnType={ColumnType.USERID}
            columnValue={mockAllAuthenticatedUsersValue}
            mapUserIdToHeader={mapUserIdToHeader}
          />,
        )
        expect(tableCell.find('span').text().trim()).toEqual(
          '<FontAwesomeIcon /> All registered Synapse users',
        )
        expect(tableCell.find(FontAwesomeIcon).props().icon).toEqual(
          'globe-americas',
        )
      })
      it('renders a link for a team', () => {
        const tableCell = shallow(
          <SynapseTableCell
            {...tableCellProps}
            columnType={ColumnType.USERID}
            columnValue={mockTeamValue}
            mapUserIdToHeader={mapUserIdToHeader}
          />,
        )
        expect(tableCell.find('a').text().trim()).toEqual(
          `<FontAwesomeIcon /> ${teamName}`,
        )
        expect(tableCell.find(FontAwesomeIcon).props().icon).toEqual('users')
      })
      it('renders a user card link', () => {
        const tableCell = shallow(
          <SynapseTableCell
            {...tableCellProps}
            columnType={ColumnType.USERID}
            columnValue={mockUserCardValue}
            mapUserIdToHeader={mapUserIdToHeader}
          />,
        )
        expect(tableCell.find(UserCard)).toHaveLength(1)
      })
      it('renders a markdown value', () => {
        const mockMarkdownColumnValue = '# column markdown'
        const tableCell = mount(
          <SynapseTableCell
            {...tableCellProps}
            columnType={ColumnType.USERID}
            columnValue={mockMarkdownColumnValue}
            mapUserIdToHeader={mapUserIdToHeader}
            columnLinkConfig={{
              isMarkdown: true,
              matchColumnName: 'a',
            }}
            columnName={'a'}
            selectColumns={[
              { columnType: ColumnType.STRING, name: 'a', id: '' },
            ]}
          />,
        )
        expect(tableCell.find(MarkdownSynapse).props().markdown).toEqual(
          mockMarkdownColumnValue,
        )
      })
      it('renders a standard value', () => {
        const tableCell = shallow(
          <SynapseTableCell
            {...tableCellProps}
            columnType={ColumnType.STRING}
            columnValue={mockColumnValue}
            mapUserIdToHeader={mapUserIdToHeader}
          />,
        )
        expect(tableCell.find('p').text().trim()).toEqual(mockColumnValue)
      })

      it('renders a date value', () => {
        const tableCell = shallow(
          <SynapseTableCell
            {...tableCellProps}
            columnType={ColumnType.DATE}
            columnValue={mockDateValue}
            mapUserIdToHeader={mapUserIdToHeader}
          />,
        )
        expect(tableCell.find('p').text().trim()).toEqual(
          new Date(Number(mockDateValue)).toLocaleString(),
        )
      })

      it('renders a date list value', () => {
        const tableCell = shallow(
          <SynapseTableCell
            {...tableCellProps}
            columnType={ColumnType.DATE_LIST}
            columnValue={MOCKED_DATE_LIST}
            mapUserIdToHeader={mapUserIdToHeader}
          />,
        )
        expect(tableCell.find('span').text().trim()).toEqual(
          new Date(Number(MOCK_DATE_VALUE)).toLocaleString(),
        )
      })

      it('renders a integer list value', () => {
        const tableCell = shallow(
          <SynapseTableCell
            {...tableCellProps}
            columnType={ColumnType.INTEGER_LIST}
            columnValue={MOCKED_INTEGER_LIST}
            mapUserIdToHeader={mapUserIdToHeader}
          />,
        )
        expect(tableCell.find('span').first().text().trim()).toEqual('10,')
        expect(tableCell.find('span').last().text().trim()).toEqual('11')
      })

      it('renders a boolean list value', () => {
        const tableCell = shallow(
          <SynapseTableCell
            {...tableCellProps}
            columnType={ColumnType.BOOLEAN_LIST}
            columnValue={MOCKED_BOOLEAN_LIST}
            mapUserIdToHeader={mapUserIdToHeader}
          />,
        )
        expect(tableCell.find('span').first().text().trim()).toEqual('true,')
        expect(tableCell.find('span').last().text().trim()).toEqual('false')
      })

      it('renders an empty cell for null date', () => {
        const tableCell = shallow(
          <SynapseTableCell
            {...tableCellProps}
            columnType={ColumnType.DATE}
            isMarkdownColumn={false}
          />,
        )
        expect(tableCell.find('p').first().text().trim()).toEqual(
          NOT_SET_DISPLAY_VALUE,
        )
      })
    })
  })
})
