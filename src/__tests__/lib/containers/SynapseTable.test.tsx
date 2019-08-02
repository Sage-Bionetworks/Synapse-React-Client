import * as React from 'react'
import { shallow } from 'enzyme'
import SynapseTable, { SynapseTableProps, SORT_STATE, METADATA_BTN_ID, DOWNLOAD_FILES_BTN_ID } from '../../../lib/containers/SynapseTable'
import { QueryWrapperChildProps } from '../../../lib/containers/QueryWrapper'
import syn16787123Json from '../../../mocks/syn16787123.json'
import { SynapseConstants } from '../../../lib'
import { QueryResultBundle } from '../../../lib/utils/jsonResponses/Table/QueryResultBundle'
import { cloneDeep } from '../../../lib/utils/modules'
import { Row } from '../../../lib/utils/jsonResponses/Table/QueryResult'
import { SelectColumn } from '../../../lib/utils/jsonResponses/Table/SelectColumn'
import { ColumnModel } from '../../../lib/utils/jsonResponses/Table/ColumnModel'
import ModalDownload from '../../../lib/containers/ModalDownload'

const createShallowComponent = (props: SynapseTableProps & QueryWrapperChildProps) => {
  const wrapper = shallow(
      <SynapseTable
        {...props}
      />
    )
  const instance = wrapper.instance() as SynapseTable
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
      SynapseConstants.BUNDLE_MASK_QUERY_RESULTS
    ,
    query: {
      sql: 'SELECT * FROM syn16787123',
      isConsistent: false,
      limit: 25,
      offset: 0,
      selectedFacets: [
        {
          columnName: 'projectStatus',
          concreteType: 'org.sagebionetworks.repo.model.table.FacetColumnValuesRequest',
          facetValues: [
            'Active',
            'Completed',
          ],
        },
        {
          columnName: 'tumorType',
          concreteType: 'org.sagebionetworks.repo.model.table.FacetColumnValuesRequest',
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
            'SMN'
          ],
        }
      ]
    }
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
  } as SynapseTableProps & QueryWrapperChildProps

  it('renders without crashing', async () => {
    const { wrapper } = createShallowComponent(props)
    expect(wrapper).toBeDefined()
  })

  describe('Dropdown column menu works', () => {
    it('renders dropdown column menu', async () => {
      const { wrapper } = createShallowComponent(props)
      // there are a total of 13 columns in view, so we expect
      // 13 list elements
      expect(wrapper.find('.SRC-column-menu li.SRC-table-dropdown-list')).toHaveLength(totalColumns)
    })

    it('toggle column selection functions correctly', async () => {
      const visibleColumnCount = 3
      const propsWithVisibleColumnCountSet = {
        ...props,
        visibleColumnCount
      }
      const { wrapper, instance } = createShallowComponent(propsWithVisibleColumnCountSet)
      const eventStub = {
        preventDefault: jest.fn()
      } as any
      // arbitrary value chosen for column selected
      await instance.toggleColumnSelection(5)(eventStub)
      expect(wrapper.state('isColumnSelected')).toEqual(
        [true, true, true, false, false, true, false, false, false, false, false, false, false]
      )
    })
  })
  describe('Download options dropdown works', () => {
    it('renders ModalDownload', async () => {
      const { wrapper } = await createShallowComponent(props)
      // Double check its not showing be default
      expect(wrapper.find(ModalDownload)).toHaveLength(0)

      // Click the dropdown
      await wrapper.find(`#${METADATA_BTN_ID}`).simulate('click')
      // See that modal download is
      expect(wrapper.find(ModalDownload)).toHaveLength(1)

      // Click elsewhere and see that modal download has closed
      await wrapper.find('.SRC-menu-wall').simulate('click')
      expect(wrapper.find(ModalDownload)).toHaveLength(0)
    })
  })
  describe('PORTALS-527: aggregate query support (show underlying data)', () => {
    it('sql parsing test', async () => {
      const { instance } = createShallowComponent(props)
      const originalSql: string =
        'SELECT bar, baz, count(distinct file_id)' +
        'AS biz FROM syn987654321 ' +
        'WHERE species=\'Human\' ' +
        'AND assay=\'rnaSeq\' group by 1,2 order by 3 asc'
      const headers: SelectColumn[] = [
        { columnType: 'STRING', name: 'bar', id: '1' },
        { columnType: 'STRING', name: 'baz', id: '2' },
        { columnType: 'INTEGER', name: 'biz', id: '3' },
      ]
      const columnModels: ColumnModel[] = [
        { columnType: 'ENTITYID', name: 'id', id: '1111' },
        { columnType: 'STRING', facetType: 'enumeration', name: 'bar', id: '2222' },
        { columnType: 'STRING', facetType: 'enumeration', name: 'baz', id: '333' },
        { columnType: 'STRING', name: 'species', id: '444' },
        { columnType: 'STRING', name: 'assay', id: '555' },
      ]
      const testRow: Row = {
        rowId: 123,
        values: ['bar1', 'baz1', '10'],
        versionNumber: 8
      }
      const sql = instance.getSqlUnderlyingDataForRow(testRow, originalSql, headers, columnModels)
      expect(sql.synId).toEqual('syn987654321')
      expect(sql.newSql).toEqual('SELECT *\n  FROM syn987654321\n  WHERE ((((`species` = \'Human\') AND (`assay` = \'rnaSeq\')) AND (`bar` = \'bar1\')) AND (`baz` = \'baz1\'))')
    })
    it('sql parsing test without WHERE clause', async () => {
      const { instance } = createShallowComponent(props)
      const originalSql: string =
        'SELECT bar, baz, count(distinct file_id)' +
        'AS biz FROM syn987654321 ' +
        'Group By 1,2 order by 3 asc'
      const headers: SelectColumn[] = [
        { columnType: 'STRING', name: 'bar', id: '1' },
        { columnType: 'STRING', name: 'baz', id: '2' },
        { columnType: 'INTEGER', name: 'biz', id: '3' },
      ]
      const columnModels: ColumnModel[] = [
        { columnType: 'ENTITYID', name: 'id', id: '1111' },
        { columnType: 'STRING', facetType: 'enumeration', name: 'bar', id: '2222' },
        { columnType: 'STRING', facetType: 'enumeration', name: 'baz', id: '333' },
      ]
      const testRow: Row = {
        rowId: 123,
        values: ['bar1', 'baz1', '10'],
        versionNumber: 8
      }
      const sql = instance.getSqlUnderlyingDataForRow(testRow, originalSql, headers, columnModels)
      expect(sql.synId).toEqual('syn987654321')
      expect(sql.newSql).toEqual('SELECT *\n  FROM syn987654321\n  WHERE ((`bar` = \'bar1\') AND (`baz` = \'baz1\'))')
    })
  })
  describe('PORTALS-527: get count function column indexes', () => {
    it('not group by', async () => {
      const { instance } = createShallowComponent(props)
      const originalSql: string =
        'SELECT bar, baz' +
        'FROM syn987654321 ' +
        'WHERE species=\'Human\' ' +
        'AND assay=\'rnaSeq\''
      const columnIndexes: number[] = instance.getCountFunctionColumnIndexes(originalSql)
      expect(columnIndexes).toHaveLength(0)
    })
    it('group by with count function', async () => {
      const { instance } = createShallowComponent(props)
      const originalSql: string =
        'SELECT bar, baz, count(distinct id) as files, concat(biz)' +
        'FROM syn987654321 ' +
        'WHERE species=\'Human\' ' +
        'AND assay=\'rnaSeq\' group by 1, 2'
      const columnIndexes: number[] = instance.getCountFunctionColumnIndexes(originalSql)
      expect(columnIndexes).toEqual([2])
    })
    it('group by without count function', async () => {
      const { instance } = createShallowComponent(props)
      const originalSql: string =
        'SELECT bar, baz, concat(distinct id) as files, concat(biz)' +
        'FROM syn987654321 ' +
        'WHERE species=\'Human\' ' +
        'AND assay=\'rnaSeq\' group by 1, 2'
      const columnIndexes: number[] = instance.getCountFunctionColumnIndexes(originalSql)
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
      expect(wrapper.find('div.SRC-table-facet-dropdown')).toHaveLength(5)
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
        name: 'projectName'
      }
      const eventStub = {} as any
      await instance.handleColumnSortPress(columnClickInformation)(eventStub)
      const projectNameIconDescending = [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      const descendingColumnObject = {
        column: sortedColumn,
        direction: SORT_STATE[1]
      }
      const projectNameColumnDescending = [descendingColumnObject]
      expect(wrapper.state('columnIconSortState')).toEqual(projectNameIconDescending)
      expect(wrapper.state('sortedColumnSelection')).toEqual(projectNameColumnDescending)
      // below we match only the part of the object that we expect to have changed
      expect(executeQueryRequest).toHaveBeenCalledWith(expect.objectContaining(
        {
          query: expect.objectContaining(
            {
              sort: [descendingColumnObject]
            }
          )
        }
      ))

      // simulate second button click
      // simulate having clicked the sort button on the first column
      // projectName -- this should set it to descend
      await instance.handleColumnSortPress(columnClickInformation)(eventStub)
      const projectNameIconAscending = [2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      const ascendingColumnObject = {
        column: sortedColumn,
        direction: SORT_STATE[2]
      }
      const projectNameColumnAscending = [ascendingColumnObject]
      expect(wrapper.state('columnIconSortState')).toEqual(projectNameIconAscending)
      expect(wrapper.state('sortedColumnSelection')).toEqual(projectNameColumnAscending)
      // below we match only the part of the object that we expect to have changed
      expect(executeQueryRequest).toHaveBeenCalledWith(expect.objectContaining(
        {
          query: expect.objectContaining(
            {
              sort: [ascendingColumnObject]
            }
          )
        }
      ))
      // simulate second button click
      // simulate having clicked the sort button on the first column
      // projectName -- this should set it to descend
      await instance.handleColumnSortPress(columnClickInformation)(eventStub)
      const projectNameIconOff = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      // it shouldn't be in the api call at all
      const projectNameColumnOff: any = []
      expect(wrapper.state('columnIconSortState')).toEqual(projectNameIconOff)
      expect(wrapper.state('sortedColumnSelection')).toEqual(projectNameColumnOff)
      // below we match only the part of the object that we expect to have changed
      expect(executeQueryRequest).toHaveBeenCalledWith(expect.objectContaining(
        {
          query: expect.objectContaining(
            {
              sort: []
            }
          )
        }
      ))
    })

  })

})
