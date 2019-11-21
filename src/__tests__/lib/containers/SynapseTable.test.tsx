import * as React from 'react'
import { shallow } from 'enzyme'
import SynapseTable, {
  SynapseTableProps,
  SORT_STATE,
  unCamelCase,
} from '../../../lib/containers/table/SynapseTable'
import { QueryWrapperChildProps } from '../../../lib/containers/QueryWrapper'
import syn16787123Json from '../../../mocks/syn16787123.json'
import { SynapseConstants } from '../../../lib'
import { QueryResultBundle } from '../../../lib/utils/jsonResponses/Table/QueryResultBundle'
import { cloneDeep } from '../../../lib/utils/functions'
import { Row } from '../../../lib/utils/jsonResponses/Table/QueryResult'
import ModalDownload from '../../../lib/containers/ModalDownload'
import { EntityLink } from 'lib/containers/EntityLink'
import { EntityHeader } from 'lib/utils/jsonResponses/EntityHeader'
import { Dictionary } from 'lodash'
import { UserGroupHeader } from 'lib/utils/jsonResponses/UserGroupHeader'
import { UserProfile } from 'lib/utils/jsonResponses/UserProfile'
import { AUTHENTICATED_USERS } from 'lib/utils/SynapseConstants'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import UserCard from 'lib/containers/UserCard'
import { Modal } from 'react-bootstrap'
import { ColumnSelection } from 'lib/containers/table/table-top'
import FacetFilter from 'lib/containers/table/table-top/FacetFilter'
import MarkdownSynapse from 'lib/containers/MarkdownSynapse'

const createShallowComponent = (
  props: SynapseTableProps & QueryWrapperChildProps,
) => {
  const wrapper = shallow<SynapseTable>(<SynapseTable {...props} />)
  const instance = wrapper.instance()
  return { wrapper, instance }
}

describe('basic functionality', () => {
  // setup tests
  const title = 'studies'
  const synapseId = 'syn16787123'
  const castData = syn16787123Json as QueryResultBundle
  const totalColumns = 13
  const lastQueryRequest = {
    concreteType: 'org.sagebionetworks.repo.model.table.QueryBundleRequest',
    partMask:
      SynapseConstants.BUNDLE_MASK_QUERY_COLUMN_MODELS |
      SynapseConstants.BUNDLE_MASK_QUERY_FACETS |
      SynapseConstants.BUNDLE_MASK_QUERY_RESULTS,
    query: {
      sql: 'SELECT * FROM syn16787123',
      isConsistent: false,
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
            'org.sagebionetworks.UNDEFINED_NULL_NOTSET',
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
    facet: 'tumorType',
  } as SynapseTableProps & QueryWrapperChildProps

  it('renders without crashing', async () => {
    const { wrapper } = createShallowComponent(props)
    expect(wrapper).toBeDefined()
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

  describe('Dropdown column menu works', () => {
    it('renders with the correct props', async () => {
      const { wrapper } = createShallowComponent(props)
      expect(wrapper.find(ColumnSelection).props().headers).toEqual(
        syn16787123Json.queryResult.queryResults.headers,
      )
    })

    it('toggle column selection works correctly', async () => {
      const visibleColumnCount = 3
      const propsWithVisibleColumnCountSet = {
        ...props,
        visibleColumnCount,
      }
      const { wrapper, instance } = createShallowComponent(
        propsWithVisibleColumnCountSet,
      )
      const eventStub = {
        preventDefault: jest.fn(),
      } as any
      // arbitrary value chosen for column selected
      await instance.toggleColumnSelection(5)(eventStub)
      expect(wrapper.state('isColumnSelected')).toEqual([
        true,
        true,
        true,
        false,
        false,
        true,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
      ])
    })
  })
  describe('Download options dropdown works', () => {
    it('isModalDownloadOpen opens the ModalDownload', async () => {
      const { wrapper } = await createShallowComponent(props)
      // Verify its not showing by default
      expect(wrapper.find(ModalDownload)).toHaveLength(0)
      await wrapper.setState({ isModalDownloadOpen: true })
      // See that modal download is present
      expect(wrapper.find(ModalDownload)).toHaveLength(1)
    })
  })
  describe('Expand modal opens when isExpanded is set to true', () => {
    it('works', async () => {
      const { wrapper } = await createShallowComponent(props)
      // No modal to start
      expect(wrapper.find(Modal)).toHaveLength(0)
      await wrapper.setState({ isExpanded: true })
      // Modal is open now
      expect(wrapper.find(Modal)).toHaveLength(1)
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
      const columnIndexes: number[] = instance.getCountFunctionColumnIndexes(
        originalSql,
      )
      expect(columnIndexes).toHaveLength(0)
    })
    it('group by with count function', async () => {
      const { instance } = createShallowComponent(props)
      const originalSql: string =
        'SELECT bar, baz, count(distinct id) as files, concat(biz)' +
        'FROM syn987654321 ' +
        "WHERE species='Human' " +
        "AND assay='rnaSeq' group by 1, 2"
      const columnIndexes: number[] = instance.getCountFunctionColumnIndexes(
        originalSql,
      )
      expect(columnIndexes).toEqual([2])
    })
    it('group by without count function', async () => {
      const { instance } = createShallowComponent(props)
      const originalSql: string =
        'SELECT bar, baz, concat(distinct id) as files, concat(biz)' +
        'FROM syn987654321 ' +
        "WHERE species='Human' " +
        "AND assay='rnaSeq' group by 1, 2"
      const columnIndexes: number[] = instance.getCountFunctionColumnIndexes(
        originalSql,
      )
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
      expect(wrapper.find(FacetFilter)).toHaveLength(5)
      // if visible column count isn't set then nothing should be hidden
      expect(wrapper.find('th.SRC-hidden')).toHaveLength(0)
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
    const MOCKED_STRING = 'MOCKED_VALUE'
    const MOCKED_NUM = 1
    // syn16787123Json has two columns of type entity, the second
    // is of type ENTITYID, the third is USERID
    const mockData: QueryResultBundle = {
      concreteType: 'org.sagebionetworks.repo.model.table.QueryResultBundle',
      selectColumns: [
        {
          id: MOCKED_STRING,
          name: MOCKED_STRING,
          columnType: 'ENTITYID',
        },
        {
          id: MOCKED_STRING,
          name: MOCKED_STRING,
          columnType: 'USERID',
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
              columnType: 'ENTITYID',
              name: MOCKED_STRING,
              id: MOCKED_STRING,
            },
            {
              columnType: 'USERID',
              name: MOCKED_STRING,
              id: MOCKED_STRING,
            },
          ],
          rows: [
            {
              values: ['syn123', 'syn120'],
              versionNumber: MOCKED_NUM,
              rowId: MOCKED_NUM,
            },
            {
              values: ['syn124', 'syn120'],
              versionNumber: MOCKED_NUM,
              rowId: MOCKED_NUM,
            },
            {
              values: ['syn125', 'syn121'],
              versionNumber: MOCKED_NUM,
              rowId: MOCKED_NUM,
            },
          ],
        },
      },
    }
    const { instance } = createShallowComponent({
      ...props,
      data: mockData,
    })

    it('gets column indicies correctly ', () => {
      const entities = instance.getColumnIndiciesWithType('ENTITYID')
      expect(entities).toEqual([ENTITYID_INDEX])
      const userIds = instance.getColumnIndiciesWithType('USERID')
      expect(userIds).toEqual([USERID_INDEX])
    })

    it('gets unique entities', () => {
      // test entityId column type
      let mapEntityIdToHeader = {}
      let indicies = [ENTITYID_INDEX]
      let uniqueEntities = instance.getUniqueEntities(
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
      uniqueEntities = instance.getUniqueEntities(
        mockData,
        mapEntityIdToHeader,
        indicies,
      )
      expect(uniqueEntities.size).toEqual(1)
    })

    describe('renders table cells correctly', () => {
      const entityColumnIndicies: number[] = [ENTITYID_INDEX]
      const userColumnIndicies: number[] = [USERID_INDEX]
      const mockEntityLinkValue: string = 'syn122'
      const mockUserCardValue: string = 'syn123'
      const mockAllAuthenticatedUsersValue: string = 'syn124'
      const mockTeamValue: string = 'syn125'
      const teamName: string = 'team name'
      const mockColumnValue: string = 'syn126'
      // We only care about the conditional rendering, not the
      // instantiation of the EntityLink, so we cast the value
      const mapEntityIdToHeader = {
        [mockEntityLinkValue]: {} as EntityHeader,
      }
      const mapUserIdToHeader: Dictionary<
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
      it('renders an entity link', () => {
        const tableCell = shallow(
          <div>
            {instance.renderTableCell({
              entityColumnIndicies,
              userColumnIndicies,
              colIndex: ENTITYID_INDEX,
              columnValue: mockEntityLinkValue,
              isBold: '',
              mapEntityIdToHeader,
              mapUserIdToHeader: {},
              isMarkdownColumn: false,
            })}
          </div>,
        )
        expect(tableCell.find(EntityLink)).toHaveLength(1)
      })
      it('renders a link for all authenticated users', () => {
        const tableCell = shallow(
          <div>
            {instance.renderTableCell({
              entityColumnIndicies,
              userColumnIndicies,
              colIndex: USERID_INDEX,
              columnValue: mockAllAuthenticatedUsersValue,
              isBold: '',
              mapEntityIdToHeader: {},
              mapUserIdToHeader,
              isMarkdownColumn: false,
            })}
          </div>,
        )
        expect(
          tableCell
            .find('span')
            .text()
            .trim(),
        ).toEqual('<FontAwesomeIcon /> All registered Synapse users')
        expect(tableCell.find(FontAwesomeIcon).props().icon).toEqual(
          'globe-americas',
        )
      })
      it('renders a link for a team', () => {
        const tableCell = shallow(
          <div>
            {instance.renderTableCell({
              entityColumnIndicies,
              userColumnIndicies,
              colIndex: USERID_INDEX,
              columnValue: mockTeamValue,
              isBold: '',
              mapEntityIdToHeader: {},
              mapUserIdToHeader,
              isMarkdownColumn: false,
            })}
          </div>,
        )
        expect(
          tableCell
            .find('a')
            .text()
            .trim(),
        ).toEqual(`<FontAwesomeIcon /> ${teamName}`)
        expect(tableCell.find(FontAwesomeIcon).props().icon).toEqual('users')
      })
      it('renders a user card link', () => {
        const tableCell = shallow(
          <div>
            {instance.renderTableCell({
              entityColumnIndicies,
              userColumnIndicies,
              colIndex: USERID_INDEX,
              columnValue: mockUserCardValue,
              isBold: '',
              mapEntityIdToHeader: {},
              mapUserIdToHeader,
              isMarkdownColumn: false,
            })}
          </div>,
        )
        expect(tableCell.find(UserCard)).toHaveLength(1)
      })
      it('renders a markdown value', () => {
        const mockMarkdownColumnValue = '# column markdown'
        const tableCell = shallow(
          <div>
            {instance.renderTableCell({
              entityColumnIndicies,
              userColumnIndicies,
              colIndex: USERID_INDEX,
              columnValue: mockMarkdownColumnValue,
              isBold: '',
              mapEntityIdToHeader: {},
              mapUserIdToHeader,
              isMarkdownColumn: true,
            })}
          </div>,
        )
        expect(tableCell.find(MarkdownSynapse).props().markdown).toEqual(
          mockMarkdownColumnValue,
        )
      })
      it('renders a standard value', () => {
        const tableCell = shallow(
          <div>
            {instance.renderTableCell({
              entityColumnIndicies,
              userColumnIndicies,
              colIndex: USERID_INDEX,
              columnValue: mockColumnValue,
              isBold: '',
              mapEntityIdToHeader: {},
              mapUserIdToHeader,
              isMarkdownColumn: false,
            })}
          </div>,
        )
        expect(
          tableCell
            .find('p')
            .text()
            .trim(),
        ).toEqual(mockColumnValue)
      })
    })
  })
})
