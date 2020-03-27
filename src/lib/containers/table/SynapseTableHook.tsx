import React, { useEffect, useState } from 'react'
import { ElementWithTooltip } from '../widgets/ElementWithTooltip'
import { IconProp, library } from '@fortawesome/fontawesome-svg-core'
import {
  faCheck,
  faColumns,
  faDownload,
  faCog,
  faFilter,
  faGlobeAmericas,
  faSort,
  faSortAmountDown,
  faSortAmountUp,
  faTimes,
  faUsers,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { cloneDeep } from 'lodash-es'
import { Dropdown, Modal } from 'react-bootstrap'
import { lexer } from 'sql-parser'
import { SynapseClient } from '../../utils'
import { readFacetValues } from '../../utils/functions/facetUtils'
import { getUserProfileWithProfilePicAttached } from '../../utils/functions/getUserData'
import {
  formatSQLFromParser,
  isGroupByInSql,
} from '../../utils/functions/sqlFunctions'
import {
  EntityHeader,
  FacetColumnResult,
  FacetColumnResultValues,
  QueryBundleRequest,
  ReferenceList,
  Row,
  SelectColumn,
  SortItem,
  UserGroupHeader,
  UserProfile,
  FacetColumnRequest,
} from '../../utils/synapseTypes/'
import { getColorPallette } from '../ColorGradient'
import { DownloadConfirmation } from '../download_list/DownloadConfirmation'
import HasAccess from '../HasAccess'
import ModalDownload from '../ModalDownload'
import { FacetSelection, QueryWrapperChildProps } from '../QueryWrapper'
import TotalQueryResults from '../TotalQueryResults'
import { unCamelCase } from './../../utils/functions/unCamelCase'
import { ICON_STATE, SELECT_ALL } from './SynapseTableConstants'
import {
  ColumnSelection,
  DownloadOptions,
  EllipsisDropdown,
  ExpandTable,
} from './table-top/'
import FacetFilter from './table-top/FacetFilter'
import { QueryFilter } from '../widgets/query-filter/QueryFilter'
import NoData from '../../assets/icons/file-dotted.svg'
import { renderTableCell } from './table-top/table_helpers/renderTableCell'
import { getUniqueEntities } from './table-top/table_helpers/getUniqueEntities'
import { getColumnIndiciesWithType } from './table-top/table_helpers/getColumnIndiciesWithType'
import { usePrevious } from './table-top/table_helpers/usePrevious'

export const EMPTY_HEADER: EntityHeader = {
  id: '',
  name: '',
  type: '',
  versionNumber: -1,
  versionLabel: '',
  benefactorId: -1,
  createdBy: '',
  createdOn: '',
  modifiedBy: '',
  modifiedOn: '',
}

// Add all icons to the library so you can use it in your page
library.add(faColumns)
library.add(faSort)
library.add(faSortAmountUp)
library.add(faSortAmountDown)
library.add(faCheck)
library.add(faTimes)
library.add(faFilter)
library.add(faCog)
library.add(faDownload)
library.add(faUsers)
library.add(faGlobeAmericas)

// Hold constants for next and previous button actions
const NEXT = 'NEXT'
const PREVIOUS = 'PREVIOUS'

type Direction = '' | 'ASC' | 'DESC'
export const SORT_STATE: Direction[] = ['', 'DESC', 'ASC']
export const DOWNLOAD_OPTIONS_CONTAINER_CLASS = 'SRC-download-options-container'

type Info = {
  index: number
  name: string
}
export interface Dictionary<T> {
  [key: string]: T
}

export type SynapseTableProps = {
  visibleColumnCount?: number
  title: string
  loadingScreen?: JSX.Element
  showAccessColumn?: boolean
  markdownColumns?: string[] // array of column names which should render as markdown
  enableDownloadConfirmation?: boolean
  enableLeftFacetFilter?: boolean
}

export default function SynapseTableComponent({
  visibleColumnCount,
  title,
  loadingScreen,
  showAccessColumn,
  markdownColumns,
  enableDownloadConfirmation,
  enableLeftFacetFilter,

  isAllFilterSelectedForFacet,
  isLoading,
  token,
  entityId,
  isLoadingNewData,
  executeQueryRequest,
  executeInitialQueryRequest,
  getNextPageOfData,
  getLastQueryRequest,
  getInitQueryRequest,
  data,
  facet,
  updateParentState,
  rgbIndex,
  unitDescription,
  facetAliases,
  lastFacetSelection,
  chartSelectionIndex,
  asyncJobStatus,
  showBarChart,
  hasMoreData,
}: SynapseTableProps & QueryWrapperChildProps) {
  const [sortedColumnSelection, setSortedColumnSelection] = useState<
    SortItem[]
  >([])
  const [isColumnSelected, setIsColumnSelected] = useState<boolean[]>([])
  const [columnIconSortState, setColumnIconSortState] = useState<number[]>([])
  const [isModalDownloadOpen, setIsModalDownloadOpen] = useState<boolean>(false)
  const [isDownloadConfirmationOpen, setIsDownloadConfirmationOpen] = useState<
    boolean
  >(false)
  const [isExpanded, setIsExpanded] = useState<boolean>(false)
  const [isFileView, setIsFileView] = useState<boolean>(false)
  const [mapEntityIdToHeader, setMapEntityIdToHeader] = useState<
    Dictionary<EntityHeader>
  >({})
  const [mapUserIdToHeader, setMapUserIdToHeader] = useState<
    Dictionary<Partial<UserGroupHeader & UserProfile>>
  >({})
  const [showColumnSelection, setShowColumnSelection] = useState<boolean>(false)
  const [isShowLeftFilter, setIsShowLeftFilter] = useState<boolean>(
    enableLeftFacetFilter!,
  )
  const [isUserModifiedQuery, setIsUserModifiedQuery] = useState<boolean>()

  const prevProps = usePrevious({
    visibleColumnCount,
    title,
    loadingScreen,
    showAccessColumn,
    markdownColumns,
    enableDownloadConfirmation,
    enableLeftFacetFilter,

    isAllFilterSelectedForFacet,
    isLoading,
    token,
    entityId,
    isLoadingNewData,
    executeQueryRequest,
    executeInitialQueryRequest,
    getNextPageOfData,
    getLastQueryRequest,
    getInitQueryRequest,
    data,
    facet,
    updateParentState,
    rgbIndex,
    unitDescription,
    facetAliases,
    lastFacetSelection,
    chartSelectionIndex,
    asyncJobStatus,
    showBarChart,
    hasMoreData,
  })

  useEffect(() => {
    const getEntityHeadersInData = async () => {
      // const { data, token } = this.props
      if (!data) {
        return
      }
      const _mapEntityIdToHeader = cloneDeep(mapEntityIdToHeader)
      const _mapUserIdToHeader = cloneDeep(mapUserIdToHeader)
      const entityIdColumnIndicies = getColumnIndiciesWithType(data, 'ENTITYID')
      const userIdColumnIndicies = getColumnIndiciesWithType(data, 'USERID')
      const distinctEntityIds = getUniqueEntities(
        data,
        _mapEntityIdToHeader,
        entityIdColumnIndicies,
      )
      const distinctUserIds = getUniqueEntities(
        data,
        _mapUserIdToHeader,
        userIdColumnIndicies,
      )
      // Make call to resolve entity ids
      if (distinctEntityIds.size > 0) {
        const referenceList: ReferenceList = Array.from(distinctEntityIds).map(
          id => {
            return { targetId: id }
          },
        )
        try {
          // initialize mapEntityIdToHeader
          referenceList.forEach(el => {
            _mapEntityIdToHeader[el.targetId] = EMPTY_HEADER
          })
          const data = await SynapseClient.getEntityHeader(referenceList, token)
          const { results } = data
          results.forEach(el => {
            _mapEntityIdToHeader[el.id] = el
          })
        } catch (err) {
          console.error('Error on retrieving entity header list , ', err)
        }
      }
      if (distinctUserIds.size === 0) {
        if (distinctEntityIds.size > 0) {
          setMapEntityIdToHeader(_mapEntityIdToHeader)
          // this.setState({ mapEntityIdToHeader })
        }
        return
      }
      // Make call to get group headers and user profiles
      const ids = Array.from(distinctUserIds)
      const userPorfileIds: string[] = []
      // TODO: Grab Team Badge
      try {
        const data = await SynapseClient.getGroupHeadersBatch(ids, token)
        data.children.forEach(el => {
          if (el.isIndividual) {
            userPorfileIds.push(el.ownerId)
          } else {
            _mapUserIdToHeader[el.ownerId] = el
          }
        })
      } catch (err) {
        console.error('Error on getGroupHeaders batch: ', err)
      }
      if (userPorfileIds.length > 0) {
        try {
          const data = await getUserProfileWithProfilePicAttached(
            userPorfileIds,
            token,
          )
          data.list.forEach((el: UserProfile) => {
            _mapUserIdToHeader[el.ownerId] = el
          })
        } catch (err) {
          console.error('Error on getUserProfile : ', err)
        }
      }
      if (distinctEntityIds.size > 0 || distinctUserIds.size > 0) {
        setMapEntityIdToHeader(_mapEntityIdToHeader)
        setMapUserIdToHeader(_mapUserIdToHeader)
        // this.setState({
        //   mapEntityIdToHeader,
        //   mapUserIdToHeader,
        // })
      }
    }

    getEntityHeadersInData()

    //@ts-ignore
    const getTableConcreteType = async (
      prevProps: QueryWrapperChildProps & SynapseTableProps,
    ) => {
      // const { data, token } = this.props
      if (!data) {
        return
      }
      const currentTableId = data?.queryResult.queryResults.tableId
      const previousTableId = prevProps.data?.queryResult.queryResults.tableId
      if (currentTableId && previousTableId !== currentTableId) {
        const entityData = await SynapseClient.getEntity(token, currentTableId)
        setIsFileView(entityData.concreteType.includes('EntityView'))
        // this.setState({
        //   isFileView: entityData.concreteType.includes('EntityView'),
        // })
      }
    }

    getTableConcreteType(prevProps!)
  }, [data, mapEntityIdToHeader, mapUserIdToHeader, prevProps, token])

  const showGroupRowData = (selectedRow: Row) => {
    // magic happens - parse query, deep copy query bundle request, modify, encode, send to Synapse.org.  Easy!
    const queryCopy = getLastQueryRequest!().query
    const parsed = getSqlUnderlyingDataForRow(selectedRow, queryCopy.sql)
    queryCopy.sql = parsed.newSql
    const queryJSON = JSON.stringify(queryCopy)
    // encode this copy of the query (json)
    const encodedQuery = btoa(queryJSON)
    return `https://www.synapse.org/#!Synapse:${parsed.synId}/tables/query/${encodedQuery}`
  }

  const renderDropdownDownloadOptions = (isFileView?: boolean) => {
    // const partialState = {
    //   isModalDownloadOpen: true,
    //   isExpanded: false,
    // }
    return (
      <DownloadOptions
        onDownloadFiles={(e: React.SyntheticEvent) => showDownload(e)}
        onExportMetadata={() =>
          // {this.setState(partialState)
          {
            setIsModalDownloadOpen(true)
            setIsExpanded(false)
          }
        }
        isUnauthenticated={!token}
        isFileView={isFileView}
      />
    )
  }

  /* 
    The ColumnSelection dropdown state is held in SynapseTable because the EllipsisDropdown has
    an option to open the dropdown, 'show columns'
  */
  const onToggleColumnSelectionShow = (
    _show: boolean,
    _event: React.SyntheticEvent<Dropdown<'div'>, Event>,
    metadata: any,
  ) => {
    // Any click event for the Dropdown will close the dropdown (assuming its open), so we have
    // to handle the onToggle event and manually manage the dropdown open state. If metadata
    // is defined the event occuring is inside the dropdown which we then want to keep open, otherwise
    // we close it.
    if (metadata.source) {
      setShowColumnSelection(true)
      // this.setState({
      //   showColumnSelection: true,
      // })
    } else {
      setShowColumnSelection(false)
      // this.setState({
      //   showColumnSelection: false,
      // })
    }
  }

  const renderColumnSelection = (headers: SelectColumn[]) => {
    return (
      <ColumnSelection
        headers={headers}
        isColumnSelected={isColumnSelected}
        visibleColumnCount={visibleColumnCount}
        show={showColumnSelection}
        toggleColumnSelection={toggleColumnSelection}
        onToggle={onToggleColumnSelectionShow}
      />
    )
  }

  const renderTable = (
    headers: SelectColumn[],
    facets: FacetColumnResult[],
    rows: Row[],
  ) => {
    const lastQueryRequest = getLastQueryRequest!()
    // handle displaying the previous button -- if offset is zero then it
    // shouldn't be displayed
    const pastZero: boolean = lastQueryRequest.query.offset! > 0
    // const { hasMoreData, showAccessColumn, token } = this.props

    const zeroMarginRight: React.CSSProperties = {
      marginRight: 0,
    }
    const nextBtn = (
      <button
        onClick={handlePaginationClick(NEXT)}
        className="SRC-light-button SRC-standard-button-shape"
        style={zeroMarginRight}
        type="button"
      >
        Next
      </button>
    )
    const previousBtn = (
      <button
        onClick={handlePaginationClick(PREVIOUS)}
        className="SRC-light-button SRC-standard-button-shape"
        type="button"
        style={!hasMoreData && pastZero ? zeroMarginRight : undefined}
      >
        Previous
      </button>
    )

    let isShowingAccessColumn: boolean | undefined = showAccessColumn
    if (showAccessColumn && rows.length > 0) {
      // PORTALS-924: verify that row actualy contains a defined rowId
      isShowingAccessColumn = rows[0].rowId !== undefined
    }
    /* min height ensure if no rows are selected that a dropdown menu is still accessible */
    return (
      <div style={{ minHeight: '300px' }} className="SRC-overflowAuto">
        {isDownloadConfirmationOpen && (
          <DownloadConfirmation
            token={token!}
            queryBundleRequest={getLastQueryRequest!()}
            fnClose={() => {
              setIsDownloadConfirmationOpen(false)
              // this.setState({ isDownloadConfirmationOpen: false })
            }}
          />
        )}
        <table className="table table-striped table-condensed">
          <thead className="SRC_bordered">
            <tr>{createTableHeader(headers, facets, isShowingAccessColumn)}</tr>
          </thead>
          <tbody>{createTableRows(rows, headers, isShowingAccessColumn)}</tbody>
        </table>
        <div style={{ textAlign: 'right' }}>
          {pastZero && previousBtn}
          {hasMoreData && nextBtn}
        </div>
      </div>
    )
  }

  const renderTableTop = (
    headers: SelectColumn[],
    enableLeftFacetFilter?: boolean,
  ) => {
    // const { title } = this.props
    // const { isExpanded, isFileView } = this.state
    const { colorPalette } = getColorPallette(rgbIndex!, 1)
    const background = colorPalette[0]

    // const onDownloadTableOnlyArguments = {
    //   isExpanded: false,
    //   isModalDownloadOpen: true,
    // }
    // const onExpandArguments = {
    //   isExpanded: !isExpanded,
    // }

    const queryRequest = getLastQueryRequest!()
    return (
      <div
        className={`SRC-centerContent${
          isShowLeftFilter ? ' SRC-marginBottomTen' : ''
        }`}
        style={{ background, padding: 8 }}
      >
        <h3 className="SRC-tableHeader"> {title}</h3>
        <span className="SRC-inlineFlex" style={{ marginLeft: 'auto' }}>
          {!isGroupByInSql(queryRequest.query.sql) && (
            <>
              {!enableLeftFacetFilter /* without filter flag*/ && (
                <ElementWithTooltip
                  idForToolTip={'advancedSearch'}
                  image={faFilter}
                  callbackFn={advancedSearch}
                  tooltipText={'Open Advanced Search in Synapse'}
                />
              )}
              {enableLeftFacetFilter && (
                <>
                  <ElementWithTooltip
                    idForToolTip={'advancedSearch'}
                    image={faCog}
                    callbackFn={advancedSearch}
                    tooltipText={'Open Advanced Search in Synapse'}
                  />
                  <ElementWithTooltip
                    idForToolTip={'filter'}
                    image={faFilter}
                    callbackFn={
                      () => setIsShowLeftFilter(!isShowLeftFilter)
                      // this.setState({
                      //   isShowLeftFilter: !this.state.isShowLeftFilter,
                      // })
                    }
                    tooltipText={'Toggle Search Panel'}
                  />
                </>
              )}
              {renderDropdownDownloadOptions(isFileView)}
              {renderColumnSelection(headers)}
            </>
          )}
          <ExpandTable
            isExpanded={isExpanded}
            onExpand={() => {
              setIsExpanded(!isExpanded)
              // this.setState(onExpandArguments)
            }}
          />
        </span>
        <EllipsisDropdown
          onDownloadFiles={(e: React.SyntheticEvent) => showDownload(e)}
          onDownloadTableOnly={() => {
            setIsExpanded(false)
            setIsModalDownloadOpen(true)
            // this.setState(onDownloadTableOnlyArguments)
          }}
          onShowColumns={() => {
            // this.setState({ showColumnSelection: true })
            setShowColumnSelection(true)
          }}
          onFullScreen={() => {
            // this.setState(onExpandArguments)
            setIsExpanded(!isExpanded)
          }}
          isExpanded={isExpanded}
          isUnauthenticated={!token}
          isGroupedQuery={isGroupByInSql(queryRequest.query.sql)}
          isFileView={isFileView}
        />
      </div>
    )
  }

  /**
   * Return the select column indexes for columns that use the aggregate count function.
   * If sql does not have a GROUP BY, this returns an empty array.
   * @param originalSql
   */
  const getCountFunctionColumnIndexes = (originalSql: string): number[] => {
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

  const getSqlUnderlyingDataForRow = (
    selectedRow: Row,
    originalSql: string,
  ): { synId: string; newSql: string } => {
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
      if (
        token[0] === 'FUNCTION' ||
        token[1].toLocaleLowerCase() === 'concat'
      ) {
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

  /**
   * Handle a click on next or previous
   *
   * @memberof SynapseTable
   */
  const handlePaginationClick = (eventType: string) => (
    _event: React.MouseEvent<HTMLButtonElement>,
  ) => {
    const queryRequest = getLastQueryRequest!()
    let currentOffset = queryRequest.query.offset!
    // if its a "previous" click subtract from the offset
    // otherwise its next and we paginate forward
    if (eventType === PREVIOUS) {
      currentOffset -= 25
    }
    if (eventType === NEXT) {
      currentOffset += 25
    }
    queryRequest.query.offset = currentOffset
    executeQueryRequest!(queryRequest)
  }
  /**
   * Handle a column having been selected
   *
   * @memberof SynapseTable
   */
  const handleColumnSortPress = (dict: Info) => (_: React.SyntheticEvent) => {
    // by using Synthetic event we can use the handler on both key press and mouse click
    let _columnIconSortState = cloneDeep(columnIconSortState)
    if (_columnIconSortState.length === 0) {
      _columnIconSortState = Array(getLengthOfPropsData()).fill(0)
    }
    // get currently sorted items and remove/insert/update this selection
    const _sortedColumnSelection = cloneDeep(sortedColumnSelection)
    const index = findSelectionIndex(_sortedColumnSelection, dict.name)
    // if its present then remove it
    if (index !== -1) {
      _sortedColumnSelection.splice(index, 1)
    }
    _columnIconSortState[dict.index] =
      (_columnIconSortState[dict.index] + 1) % ICON_STATE.length
    if (_columnIconSortState[dict.index] > 0) {
      _sortedColumnSelection.unshift({
        column: dict.name,
        direction: SORT_STATE[_columnIconSortState[dict.index]],
      })
    }
    const queryRequest = getLastQueryRequest!()
    queryRequest.query.sort = _sortedColumnSelection
    executeQueryRequest!(queryRequest)
    setColumnIconSortState(_columnIconSortState)
    setSortedColumnSelection(_sortedColumnSelection)
    // this.setState({
    //   columnIconSortState,
    //   sortedColumnSelection,
    // })
  }

  const createTableRows = (
    rows: Row[],
    headers: SelectColumn[],
    isShowingAccessColumn: boolean | undefined,
  ) => {
    const rowsFormatted: JSX.Element[] = []
    // const { token } = this.props

    // const {
    //   isColumnSelected,
    //   mapEntityIdToHeader,
    //   mapUserIdToHeader,
    // } = this.state

    const entityColumnIndicies = getColumnIndiciesWithType(data, 'ENTITYID')
    const userColumnIndicies = getColumnIndiciesWithType(data, 'USERID')
    const dateColumnIndicies = getColumnIndiciesWithType(data, 'DATE')
    const dateListColumnIndicies = getColumnIndiciesWithType(data, 'DATE_LIST')
    const booleanListColumnIndicies = getColumnIndiciesWithType(
      data,
      'BOOLEAN_LIST',
    )
    const otherListColumnIndicies = getColumnIndiciesWithType(
      data,
      'STRING_LIST',
      'INTEGER_LIST',
    )
    const isColumnSelectedLen = isColumnSelected.length
    // find column indices that are COUNT type
    const countColumnIndexes = getCountFunctionColumnIndexes(
      getLastQueryRequest!().query.sql,
    )

    // const { visibleColumnCount = Infinity, markdownColumns = [] } = this.props

    visibleColumnCount = visibleColumnCount ?? Infinity
    markdownColumns = markdownColumns ?? []

    rows.forEach((row, rowIndex) => {
      const rowContent = row.values.map(
        (columnValue: string, colIndex: number) => {
          const columnName = headers[colIndex].name
          const isMarkdownColumn = markdownColumns!.includes(columnName)
          const index = findSelectionIndex(sortedColumnSelection, columnName)
          const usedVisibleColumnCount = isGroupByInSql(
            getLastQueryRequest!().query.sql,
          )
            ? Infinity
            : visibleColumnCount
          // on iniital load isColumnSelected is null and we by default show all columns that come
          // before visibileColumnCount
          const isColumnActiveInitLoad: boolean =
            colIndex < usedVisibleColumnCount! && isColumnSelectedLen === 0
          // past the initial load -- when a user has started clicking items, then isColumnSelected is
          // not null and we verify that this column is part of the selection.
          const isColumnActivePastInitLoad =
            isColumnSelectedLen !== 0 && isColumnSelected[colIndex]
          const isCountColumn = countColumnIndexes.includes(colIndex)
          const isBold = index === -1 ? '' : 'SRC-boldText'
          if (isColumnActiveInitLoad || isColumnActivePastInitLoad) {
            return (
              <td
                className="SRC_noBorderTop"
                key={`(${rowIndex}${columnValue}${colIndex})`}
              >
                {isCountColumn && (
                  <a
                    href={showGroupRowData(row)}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <p className={isBold}>{columnValue}</p>
                  </a>
                )}

                {!isCountColumn &&
                  renderTableCell({
                    entityColumnIndicies,
                    userColumnIndicies,
                    dateColumnIndicies,
                    dateListColumnIndicies,
                    booleanListColumnIndicies,
                    otherListColumnIndicies,
                    colIndex,
                    columnValue,
                    isBold,
                    mapEntityIdToHeader,
                    mapUserIdToHeader,
                    isMarkdownColumn,
                    rowIndex,
                  })}
              </td>
            )
          }
          return <td className="SRC-hidden" key={`(${rowIndex},${colIndex})`} />
        },
      )
      // also push the access column value if we are showing user access for individual items (still shown if not logged in)
      if (isShowingAccessColumn) {
        const rowSynapseId = `syn${row.rowId}`
        rowContent.push(
          <td key={`(${rowIndex},accessColumn)`} className="SRC_noBorderTop">
            <HasAccess
              entityId={rowSynapseId}
              entityVersionNumber={row.versionNumber?.toString()}
              token={token}
            ></HasAccess>
          </td>,
        )
      }

      const rowFormatted = <tr key={row.rowId}>{rowContent}</tr>
      rowsFormatted.push(rowFormatted)
    })
    return rowsFormatted
  }

  const createTableHeader = (
    headers: SelectColumn[],
    facets: FacetColumnResult[],
    isShowingAccessColumn: boolean | undefined,
  ) => {
    // const {
    //   isColumnSelected,
    //   sortedColumnSelection,
    //   columnIconSortState,
    // } = this.state

    // const { visibleColumnCount = Infinity, facetAliases = {} } = this.props
    visibleColumnCount = visibleColumnCount ?? Infinity
    facetAliases = facetAliases ?? {}
    const usedVisibleColumnCount = isGroupByInSql(
      getLastQueryRequest!().query.sql,
    )
      ? Infinity
      : visibleColumnCount
    const tableColumnHeaderElements: JSX.Element[] = headers.map(
      (column: SelectColumn, index: number) => {
        // two cases when rendering the column headers on init load
        // of the page we have to show only this.props.visibleColumnCount many
        // columns, afterwards we rely on the isColumnSelected to get choices
        const initRender: boolean =
          index < usedVisibleColumnCount! && isColumnSelected.length === 0
        const subsequentRender =
          isColumnSelected[index] && isColumnSelected.length !== 0
        if (initRender || subsequentRender) {
          // for background color
          const isSelected: boolean =
            findSelectionIndex(sortedColumnSelection, column.name) !== -1
          // for icon state
          const columnIndex: number =
            columnIconSortState[index] === undefined
              ? 0
              : columnIconSortState[index]
          // we have to figure out if the current column is a facet selection
          const facetIndex: number = facets.findIndex(
            (facetColumnResult: FacetColumnResult) => {
              const facetDisplayValue =
                facetAliases![facetColumnResult.columnName] ||
                facetColumnResult.columnName
              return facetDisplayValue === column.name
            },
          )
          // the header must be included in the facets and it has to be enumerable for current rendering capabilities
          const isFacetSelection: boolean =
            facetIndex !== -1 && facets[facetIndex].facetType === 'enumeration'
          const isSelectedSpanClass = isSelected
            ? 'SRC-primary-background-color SRC-anchor-light'
            : ''
          const isSelectedIconClass = isSelected
            ? 'SRC-selected-table-icon'
            : 'SRC-primary-text-color'
          const sortSpanBackgoundClass = `SRC-tableHead SRC-hand-cursor SRC-sortPadding SRC-primary-background-color-hover  ${isSelectedSpanClass}`
          const displayColumnName: string | undefined = unCamelCase(column.name)
          return (
            <th key={column.name}>
              <div className="SRC-split">
                <span style={{ whiteSpace: 'nowrap' }}>
                  {displayColumnName}
                </span>
                <div className="SRC-centerContent">
                  {isFacetSelection &&
                    !enableLeftFacetFilter &&
                    configureFacetDropdown(facets, facetIndex)}
                  <span
                    tabIndex={0}
                    className={sortSpanBackgoundClass}
                    onKeyPress={handleColumnSortPress({
                      index,
                      name: column.name,
                    })}
                    onClick={handleColumnSortPress({
                      index,
                      name: column.name,
                    })}
                  >
                    <FontAwesomeIcon
                      className={`SRC-primary-background-color-hover  ${isSelectedIconClass}`}
                      icon={ICON_STATE[columnIndex] as IconProp}
                    />
                  </span>
                </div>
              </div>
            </th>
          )
        } else {
          return <th className="SRC-hidden" key={column.name} />
        }
      },
    )
    // also push the access column if we are showing user access for individual items (must be logged in)
    if (isShowingAccessColumn) {
      tableColumnHeaderElements.push(
        <th key="accessColumn">
          <div className="SRC-centerContent">
            <span style={{ whiteSpace: 'nowrap' }}>Access</span>
          </div>
        </th>,
      )
    }
    return tableColumnHeaderElements
  }

  /**
   * Utility to search through array of objects and find object with key "column"
   * equal to input parameter "name"
   *
   * @param {*} sortedColumnSelection
   * @param {*} name
   * @returns -1 if not present, otherwise the index of the object
   * @memberof SynapseTable
   */
  const findSelectionIndex = (
    sortedColumnSelection: SortItem[],
    name: string,
  ) => {
    if (sortedColumnSelection.length !== 0) {
      // find if the current selection exists already and remove it
      return sortedColumnSelection.findIndex(
        (el: SortItem) => el.column === name,
      )
    }
    return -1
  }

  // Direct user to corresponding query on synapse
  const advancedSearch = (event: React.SyntheticEvent) => {
    event && event.preventDefault()
    const lastQueryRequest = getLastQueryRequest!()
    const { query } = lastQueryRequest
    // base 64 encode the json of the query and go to url with the encoded object
    const encodedQuery = btoa(JSON.stringify(query))
    const synTable = lastQueryRequest.entityId
    window.open(
      `https://www.synapse.org/#!Synapse:${synTable}/tables/query/${encodedQuery}`,
      '_blank',
    )
  }

  const showDownload = (event: React.SyntheticEvent) => {
    if (enableDownloadConfirmation) {
      setIsDownloadConfirmationOpen(true)
      // this.setState({ isDownloadConfirmationOpen: true })
    } else {
      advancedSearch(event)
    }
  }

  const getLengthOfPropsData = () => {
    // const { data } = this.props
    return data!.queryResult.queryResults.headers.length
  }
  /**
   * Handles the toggle of a column select, this will cause the table to
   * either show the column or hide depending on the prior state of the column
   *
   * @memberof SynapseTable
   */
  const toggleColumnSelection = (index: number) => (
    _event: React.MouseEvent<HTMLLIElement>,
  ) => {
    let _isColumnSelected: boolean[]
    // lazily initialize isColumnSelected, at first it's empty
    // and then on first column click we set it
    if (isColumnSelected.length === 0) {
      visibleColumnCount = visibleColumnCount ?? Infinity

      // const { visibleColumnCount = Infinity } = this.props
      // unpack all the data

      const lengthOfPropsData = getLengthOfPropsData()
      let defaultSelection
      // fill up to visibleColumnCount with true and the rest as false
      if (visibleColumnCount === Infinity) {
        // if set to zero then its all true
        defaultSelection = Array(lengthOfPropsData).fill(true)
      } else {
        // fill in whole array as false
        defaultSelection = Array(lengthOfPropsData).fill(false)
        // then fill in up until lengthOfPropsData with true
        defaultSelection.fill(true, 0, visibleColumnCount)
      }
      _isColumnSelected = defaultSelection
    } else {
      _isColumnSelected = cloneDeep(isColumnSelected)
    }
    _isColumnSelected[index] = !_isColumnSelected[index]
    setIsColumnSelected(_isColumnSelected)
    // this.setState({ isColumnSelected })
  }

  /**
   * Show the dropdown menu for a column that has been faceted
   *
   * @param {number} index this is column index of the query table data
   * @param {string} columnName this is the name of the column
   * @param {FacetColumnResult[]} facetColumnResults
   * @param {number} facetIndex
   * @returns
   * @memberof SynapseTable
   */
  const configureFacetDropdown = (
    facetColumnResults: FacetColumnResult[],
    facetIndex: number,
  ) => {
    // this grabs the specific facet selection
    const facetColumnResult = facetColumnResults[
      facetIndex
    ] as FacetColumnResultValues
    const isChecked = isAllFilterSelectedForFacet![facetColumnResult.columnName]
    return (
      <FacetFilter
        lastFacetSelection={lastFacetSelection!}
        isLoading={isLoading!}
        applyChanges={applyChanges}
        isAllFilterSelectedForFacet={isChecked}
        facetColumnResult={facetColumnResult}
      />
    )
  }

  const applyChangesFromQueryFilter = (facets: FacetColumnRequest[]) => {
    const queryRequest: QueryBundleRequest = getLastQueryRequest!()
    queryRequest.query.selectedFacets = facets
    setIsUserModifiedQuery(true)
    // this.setState({ isUserModifiedQuery: true })
    executeQueryRequest!(queryRequest)
  }

  /**
   * When the user decides to submit their changes for the dropdown menu with the facet, they have an
   * apply button, this method handles that submission.
   *
   * @memberof SynapseTable
   */
  const applyChanges = ({
    ref,
    columnName,
    facetValue = '',
    selector = '',
  }: {
    ref: React.RefObject<HTMLSpanElement>
    columnName: string
    facetValue?: string
    selector?: string
  }) => (_: React.SyntheticEvent<HTMLElement>) => {
    const htmlCheckboxes = Array.from(
      ref.current!.querySelectorAll('.SRC-facet-checkboxes'),
    ) as HTMLInputElement[]
    const queryRequest: QueryBundleRequest = getLastQueryRequest!()
    // const { isAllFilterSelectedForFacet } = this.props
    const { newQueryRequest } = readFacetValues({
      htmlCheckboxes,
      queryRequest,
      selector,
      facet: columnName,
    })

    const lastFacetSelection = {
      columnName,
      facetValue,
      selector,
    } as FacetSelection
    isAllFilterSelectedForFacet![columnName] = selector === SELECT_ALL
    updateParentState!({
      lastFacetSelection,
      isAllFilterSelectedForFacet,
    })

    executeQueryRequest!(newQueryRequest)
    setIsUserModifiedQuery(true)
    // this.setState({ isUserModifiedQuery: true })
  }

  type ColumnReference = {
    index: number
    name: string
  }

  const RenderTable = () => {
    if (data === undefined) {
      return loadingScreen || <div />
    }
    // unpack all the data
    // const {
    //   data,
    //   isLoading = true,
    //   unitDescription,
    //   token,
    //   showBarChart,
    // } = this.props

    const { queryResult } = data
    const { queryResults } = queryResult
    const { rows } = queryResults
    const { headers } = queryResults
    const { facets = [] } = data

    // const { isModalDownloadOpen, isExpanded } = this.state

    const queryRequest = getLastQueryRequest!()
    const { sql, selectedFacets } = queryRequest.query

    let className = 'SRC-marginTopMinusTen'
    if (showBarChart) {
      className = 'SRC-marginBottomTop'
    }

    const hasResults = data.queryResult.queryResults.rows.length > 0
    if (!hasResults && !isUserModifiedQuery) {
      return (
        <div className="text-center SRCBorderedPanel SRCBorderedPanel--padded2x">
          <img src={NoData} alt="no data"></img>
          <div style={{ marginTop: '20px', fontStyle: 'italic' }}>
            This table is currently empty
          </div>
        </div>
      )
    }
    const content = (
      <>
        <div className={className}>
          <div
            className={`SRC-centerContent text-left`}
            style={{ height: '20px' }}
          >
            {unitDescription && !isGroupByInSql(queryRequest.query.sql) && (
              <TotalQueryResults
                isLoading={isLoading!}
                style={{ fontSize: 15 }}
                unitDescription={unitDescription}
                getLastQueryRequest={getLastQueryRequest!}
                token={token}
                frontText={'Showing'}
              />
            )}
          </div>
          {renderTableTop(headers, enableLeftFacetFilter)}
          <div className="row ">
            {isShowLeftFilter && (
              <div
                className="col-xs-12 col-sm-3 col-lg-3"
                style={{ paddingRight: '0px' }}
              >
                {
                  <QueryFilter
                    // {...this.props}
                    data={data!}
                    token={token!}
                    applyChanges={(newFacets: FacetColumnRequest[]) =>
                      applyChangesFromQueryFilter(newFacets)
                    }
                  />
                }
              </div>
            )}
            <div
              className={`${
                isShowLeftFilter ? 'col-xs-12 col-sm-9 col-lg-9' : 'col-xs-12'
              }`}
            >
              {renderTable(headers, facets, rows)}
            </div>
          </div>
        </div>
      </>
    )
    return (
      <React.Fragment>
        {// modal can render anywhere, this is not a particular location
        isModalDownloadOpen && (
          <ModalDownload
            onClose={() => {
              // this.setState({ isModalDownloadOpen: false })
              setIsModalDownloadOpen(false)
            }}
            sql={sql}
            selectedFacets={selectedFacets}
            token={token}
            entityId={queryRequest.entityId}
          />
        )}
        {isExpanded && (
          <Modal
            animation={false}
            centered={true}
            show={true}
            // @ts-ignore
            onHide={() => this.setState({ isExpanded: false })}
            dialogClassName={'modal-90w'}
          >
            <Modal.Header
              // @ts-ignore
              onHide={() => this.setState({ isExpanded: false })}
              closeButton={true}
            ></Modal.Header>
            <Modal.Body>{content}</Modal.Body>
          </Modal>
        )}
        {!isExpanded && content}
      </React.Fragment>
    )
  }

  return <RenderTable />
}
