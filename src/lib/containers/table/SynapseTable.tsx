import ColumnResizer from 'column-resizer'
import { cloneDeep, eq } from 'lodash-es'
import * as React from 'react'
import { Modal } from 'react-bootstrap'
import NoData from '../../assets/icons/NoData'
import { SynapseClient } from '../../utils'
import {
  hasFilesInView,
  isDataset,
  isEntityView,
} from '../../utils/functions/EntityTypeUtils'
import { PRODUCTION_ENDPOINT_CONFIG } from '../../utils/functions/getEndpoint'
import { getUserProfileWithProfilePicAttached } from '../../utils/functions/getUserData'
import { isGroupByInSql } from '../../utils/functions/sqlFunctions'
import { SynapseContextType } from '../../utils/SynapseContext'
import {
  ColumnModel,
  ColumnType,
  EntityHeader,
  FacetColumnRequest,
  FacetColumnResult,
  FacetColumnResultValues,
  QueryBundleRequest,
  ReferenceList,
  Row,
  SelectColumn,
  SortItem,
  UserGroupHeader,
  UserProfile,
} from '../../utils/synapseTypes/'
import AddToDownloadListV2 from '../AddToDownloadListV2'
import { LabelLinkConfig } from '../CardContainerLogic'
import DirectDownload from '../DirectDownload'
import { HasAccessV2 } from '../HasAccessV2'
import loadingScreen from '../LoadingScreen'
import ModalDownload from '../ModalDownload'
import { QueryVisualizationContextType } from '../QueryVisualizationWrapper'
import { QueryContextType } from '../QueryContext'
import { Icon } from '../row_renderers/utils'
import { SynapseTableCell } from '../synapse_table_functions/SynapseTableCell'
import TotalQueryResults from '../TotalQueryResults'
import { Checkbox } from '../widgets/Checkbox'
import { EnumFacetFilter } from '../widgets/query-filter/EnumFacetFilter'
import {
  applyChangesToValuesColumn,
  applyMultipleChangesToValuesColumn,
} from '../widgets/query-filter/QueryFilter'
import { unCamelCase } from './../../utils/functions/unCamelCase'
import SearchResultsNotFound from './SearchResultsNotFound'
import { ICON_STATE } from './SynapseTableConstants'
import {
  getColumnIndiciesWithType,
  getCountFunctionColumnIndices,
  getSqlUnderlyingDataForRow,
  getUniqueEntities,
} from './SynapseTableUtils'
import { TablePagination } from './TablePagination'
import NoContentAvailable from './NoContentAvailable'
import { InteractiveCopyIdsIcon } from '../InteractiveCopyIdsIcon'
import { displayToast } from '../ToastMessage'

export const EMPTY_HEADER: EntityHeader = {
  id: '',
  name: '',
  type: 'org.sagebionetworks.repo.model.FileEntity',
  versionNumber: -1,
  versionLabel: '',
  benefactorId: -1,
  createdBy: '',
  createdOn: '',
  modifiedBy: '',
  modifiedOn: '',
}

type Direction = '' | 'ASC' | 'DESC'
export const SORT_STATE: Direction[] = ['', 'DESC', 'ASC']
export const DOWNLOAD_OPTIONS_CONTAINER_CLASS = 'SRC-download-options-container'
const RESIZER_OPTIONS: any = {
  resizeMode: 'overflow',
  partialRefresh: 'true',
  liveDrag: true,
  headerOnly: 'true',
}
type Info = {
  index: number
  name: string
}

export type SynapseTableState = {
  sortedColumnSelection: SortItem[]
  columnIconSortState: number[]
  isExportTableDownloadOpen: boolean
  isExpanded: boolean
  mapEntityIdToHeader: Record<string, EntityHeader>
  mapUserIdToHeader: Record<string, Partial<UserGroupHeader & UserProfile>>
  isColumnSelectionOpen: boolean
  isFetchingEntityHeaders: boolean
}

export type SynapseTableProps = {
  synapseContext: SynapseContextType
  queryContext: QueryContextType
  queryVisualizationContext: QueryVisualizationContextType
  title?: string
  showAccessColumn?: boolean
  showDownloadColumn?: boolean
  columnLinks?: LabelLinkConfig
  hideDownload?: boolean
  isRowSelectionVisible?: boolean
  /**
   * If true, columns created by the COUNT function will render with a link to Synapse that opens the disaggregated query results filtered by the conditions of that row.
   * Note that this is very brittle and only supports one column at a time. See SWC-6075 for more information. Default false.
   */
  linkCountToDisaggregatedQuery?: boolean
  showNoContentAvailableWhenEmpty?: boolean
}

export default class SynapseTable extends React.Component<
  SynapseTableProps,
  SynapseTableState
> {
  constructor(props: SynapseTableProps) {
    super(props)
    this.componentDidMount = this.componentDidMount.bind(this)
    this.componentWillUnmount = this.componentWillUnmount.bind(this)
    this.componentDidUpdate = this.componentDidUpdate.bind(this)
    this.shouldComponentUpdate = this.shouldComponentUpdate.bind(this)
    this.handleColumnSortPress = this.handleColumnSortPress.bind(this)
    this.findSelectionIndex = this.findSelectionIndex.bind(this)
    this.toggleColumnSelection = this.toggleColumnSelection.bind(this)
    this.advancedSearch = this.advancedSearch.bind(this)
    this.getLengthOfPropsData = this.getLengthOfPropsData.bind(this)
    this.configureFacetDropdown = this.configureFacetDropdown.bind(this)
    this.enableResize = this.enableResize.bind(this)
    this.disableResize = this.disableResize.bind(this)
    this.isEntityViewOrDataset = this.isEntityViewOrDataset.bind(this)
    this.allRowsHaveId = this.allRowsHaveId.bind(this)
    this.handleCopyIdsToClipboard = this.handleCopyIdsToClipboard.bind(this)

    // store the offset and sorted selection that is currently held
    this.state = {
      /* columnIconSortState tells what icon to display for a table
         header. There are three states for a particular header-
          0 - show descending icon but *deselected*
          1 - show descending icon selected
          2 - show ascending icon selected
      */
      columnIconSortState: [],
      isExportTableDownloadOpen: false,
      isExpanded: false,
      isColumnSelectionOpen: false,
      // sortedColumnSelection contains the columns which are
      // selected currently and their sort status as eithet
      // off, desc, or asc.
      sortedColumnSelection: [],
      mapEntityIdToHeader: {},
      mapUserIdToHeader: {},
      isFetchingEntityHeaders: false,
    }
    this.getEntityHeadersInData = this.getEntityHeadersInData.bind(this)
  }

  // instance variables
  resizer: any
  tableElement: HTMLTableElement | null | undefined = undefined

  componentWillUnmount() {
    this.disableResize()
  }

  componentDidMount() {
    this.getEntityHeadersInData(true)
    this.enableResize()
  }

  shouldComponentUpdate(
    nextProps: SynapseTableProps,
    nextState: Readonly<SynapseTableState>,
  ): boolean {
    // ignore isFetching state variables when checking for change in state
    const {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      isFetchingEntityHeaders: oldIsFetchingEntityHeaders,
      ...oldState
    } = this.state
    const {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      isFetchingEntityHeaders: newIsFetchingEntityHeaders,
      ...newState
    } = nextState
    const isPropsChange = !eq(this.props, nextProps)
    const isStateChange = !eq(oldState, newState)
    const shouldComponentUpdate = isPropsChange || isStateChange
    if (shouldComponentUpdate) {
      this.disableResize()
    }
    return shouldComponentUpdate
  }
  componentDidUpdate(
    prevProps: SynapseTableProps,
    prevState: Readonly<SynapseTableState>,
  ) {
    // PORTALS-2081: if the data changed, then get the new entity headers
    if (!eq(prevProps.queryContext.data, this.props.queryContext.data)) {
      this.getEntityHeadersInData(false)
    } else if (
      prevProps.queryContext.entity &&
      this.props.queryContext.entity &&
      !eq(
        isEntityView(prevProps.queryContext.entity),
        isEntityView(this.props.queryContext.entity),
      )
    ) {
      // if we determined that this is an entity view, force refresh the entity headers (for Views we need to get the rowIds!)
      this.getEntityHeadersInData(true)
    }
    this.enableResize()
  }

  enableResize() {
    if (!this.resizer) {
      // only create the resizer if the tableElement is in the DOM and there's more than one select column in the data.
      if (this.tableElement && this.getLengthOfPropsData() > 1) {
        this.resizer = new ColumnResizer(this.tableElement, RESIZER_OPTIONS)
      }
    } else {
      // TODO: use event driven solution instead of timeout.
      // We need to give SynapseTableCell time to render (which will change the column size).
      // Alternatively, we may be able to use SizeMe (or withSize() on Cell component) to respond to width change.
      setTimeout(() => {
        this.resizer.reset(RESIZER_OPTIONS)
      }, 1000)
    }
  }

  disableResize() {
    if (this.resizer) {
      this.resizer.reset({ disable: true })
    }
  }

  public async getEntityHeadersInData(forceRefresh: boolean) {
    const { data, entity } = this.props.queryContext
    if (!data || !entity) {
      return
    } else if (this.state.isFetchingEntityHeaders && !forceRefresh) {
      return
    }
    const mapEntityIdToHeader = cloneDeep(this.state.mapEntityIdToHeader)
    const mapUserIdToHeader = cloneDeep(this.state.mapUserIdToHeader)
    const entityIdColumnIndicies = getColumnIndiciesWithType(
      data,
      ColumnType.ENTITYID,
    )
    const userIdColumnIndicies = getColumnIndiciesWithType(
      data,
      ColumnType.USERID,
    )

    const distinctEntityIds = getUniqueEntities(
      data,
      mapEntityIdToHeader,
      entityIdColumnIndicies,
    )
    // also include row entity ids if this is a view (it's possible that the ID column was not selected)
    if (this.isEntityViewOrDataset() && this.allRowsHaveId()) {
      const rows = data.queryResult?.queryResults?.rows ?? []
      rows.forEach((row: Row) => {
        const rowSynapseId = `syn${row.rowId}`
        distinctEntityIds.add(rowSynapseId)
      })
    }
    const distinctUserIds = getUniqueEntities(
      data,
      mapUserIdToHeader,
      userIdColumnIndicies,
    )
    if (distinctEntityIds.size === 0 && distinctUserIds.size === 0) {
      return
    }
    this.setState({
      isFetchingEntityHeaders: true,
    })
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
          mapEntityIdToHeader[el.targetId] = EMPTY_HEADER
        })
        const data = await SynapseClient.getEntityHeaders(
          referenceList,
          this.props.synapseContext.accessToken,
        )
        const { results } = data
        results.forEach(el => {
          mapEntityIdToHeader[el.id] = el
        })
      } catch (err) {
        console.error('Error on retrieving entity header list , ', err)
      }
    }
    const userProfileIds: string[] = []
    if (distinctUserIds.size > 0) {
      // Make call to get group headers and user profiles
      const ids = Array.from(distinctUserIds)
      // TODO: Grab Team Badge
      try {
        const data = await SynapseClient.getGroupHeadersBatch(
          ids,
          this.props.synapseContext.accessToken,
        )
        data.children.forEach(el => {
          if (el.isIndividual) {
            userProfileIds.push(el.ownerId)
          } else {
            mapUserIdToHeader[el.ownerId] = el
          }
        })
      } catch (err) {
        console.error('Error on getGroupHeaders batch: ', err)
      }
    }
    if (userProfileIds.length > 0) {
      try {
        const data = await getUserProfileWithProfilePicAttached(userProfileIds)
        data.list.forEach((el: UserProfile) => {
          mapUserIdToHeader[el.ownerId] = el
        })
      } catch (err) {
        console.error('Error on getUserProfile : ', err)
      }
    }
    this.setState({
      mapEntityIdToHeader,
      mapUserIdToHeader,
      isFetchingEntityHeaders: false,
    })
  }

  /**
   * Display the view
   */
  public render() {
    if (
      !this.props.queryContext.data &&
      this.props.queryContext.isLoadingNewBundle
    ) {
      return loadingScreen
    } else if (!this.props.queryContext.data) {
      return <></>
    }
    // unpack all the data
    const {
      queryContext: { data },
      queryVisualizationContext: { topLevelControlsState, unitDescription },
      showNoContentAvailableWhenEmpty,
    } = this.props
    const { queryResult, columnModels = [] } = data
    const { facets = [] } = data
    const { isExpanded, isExportTableDownloadOpen } = this.state
    const queryRequest = this.props.queryContext.getLastQueryRequest()
    const { showFacetFilter } = topLevelControlsState
    let className = ''
    const hasResults = (data.queryResult?.queryResults.rows.length ?? 0) > 0
    // Show the No Results UI if the current page has no rows, and this is the first page of data (offset === 0).
    if (!hasResults && queryRequest.query.offset === 0) {
      if (queryRequest.query.additionalFilters) {
        return <SearchResultsNotFound />
      } else {
        if (showNoContentAvailableWhenEmpty) {
          return <NoContentAvailable />
        } else {
          return (
            <div className="text-center SRCBorderedPanel SRCBorderedPanel--padded2x">
              {NoData}
              <div style={{ marginTop: '20px', fontStyle: 'italic' }}>
                This table is currently empty
              </div>
            </div>
          )
        }
      }
    }

    const { rows, headers } = queryResult!.queryResults

    const table = (
      <div>{this.renderTable(headers, columnModels, facets, rows)}</div>
    )
    const content = (
      <>
        <div className={className}>
          {isExportTableDownloadOpen && (
            <ModalDownload
              onClose={() => {
                this.setState({
                  isExportTableDownloadOpen: false,
                })
              }}
              queryBundleRequest={queryRequest}
            />
          )}
          {!showFacetFilter &&
            unitDescription &&
            !isGroupByInSql(queryRequest.query.sql) && (
              <div
                className={`SRC-centerContent text-left`}
                style={{ minHeight: '20px' }}
              >
                <TotalQueryResults
                  style={{ fontSize: 15 }}
                  frontText={'Showing'}
                  applyChanges={(newFacets: FacetColumnRequest[]) =>
                    this.applyChangesFromQueryFilter(newFacets)
                  }
                />
              </div>
            )}
          {/* FRAGILE, CHANGE WITH CAUTION, see - https://sagebionetworks.jira.com/browse/PORTALS-1539 */}
          <div>{table}</div>
        </div>
      </>
    )
    return (
      <React.Fragment>
        {isExpanded && (
          <Modal
            animation={false}
            show={true}
            // @ts-ignore
            onHide={() => this.setState({ isExpanded: false })}
            dialogClassName={'modal-90w'}
            backdrop="static"
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

  /**
   * handle copy IDs to clipboard
   */
  public handleCopyIdsToClipboard = (columnIndex: number) => {
    const {
      queryContext: { data },
    } = this.props
    const { rows } = data!.queryResult!.queryResults
    const synIDs = rows
      .map((row: Row) => {
        return `${row.values[columnIndex]}`
      })
      .join('\n')
    // https://caniuse.com/mdn-api_clipboard_writetext
    navigator.clipboard.writeText(synIDs).then(() => {
      displayToast('Successfully copied to clipboard')
    })
  }

  /**
   * If this is a view/dataset and rows have an ID, then rows represent individual objects in Synapse.
   * Presence of row IDs also indicates that the query is also necessarily not summary data, e.g. the query does
   * not include an operation like GROUP BY, DISTINCT, etc., that would cause rows to not map 1:1 to Synapse Entities
   */
  private allRowsHaveId(): boolean {
    const {
      queryContext: { data },
    } = this.props
    return (
      data?.queryResult?.queryResults.rows.every(row => !!row.rowId) ?? false
    )
  }

  private isEntityViewOrDataset(): boolean {
    const {
      queryContext: { entity },
    } = this.props
    return (entity && (isEntityView(entity) || isDataset(entity))) ?? false
  }

  private showGroupRowData = (selectedRow: Row) => {
    // magic happens - parse query, deep copy query bundle request, modify, encode, send to Synapse.org.  Easy!
    const queryCopy = this.props.queryContext.getLastQueryRequest().query
    const parsed = getSqlUnderlyingDataForRow(
      selectedRow,
      queryCopy.sql,
      this.props.queryContext.data,
    )
    queryCopy.sql = parsed.newSql
    const queryJSON = JSON.stringify(queryCopy)
    // encode this copy of the query (json)
    const encodedQuery = btoa(queryJSON)
    return `${PRODUCTION_ENDPOINT_CONFIG.PORTAL}#!Synapse:${parsed.synId}/tables/query/${encodedQuery}`
  }

  private renderTable = (
    headers: SelectColumn[],
    columnModels: ColumnModel[],
    facets: FacetColumnResult[],
    rows: Row[],
  ) => {
    const lastQueryRequest = this.props.queryContext.getLastQueryRequest?.()!
    // handle displaying the previous button -- if offset is zero then it
    // shouldn't be displayed
    const {
      queryContext: { entity },
      showAccessColumn,
      showDownloadColumn,
      isRowSelectionVisible,
    } = this.props

    /**
     * i.e. the view may have FileEntities in it
     *
     * PORTALS-2010:  Enhance change made for PORTALS-1973.  File specific action will only be shown for rows that represent FileEntities.
     */
    const isFileViewOrDataset =
      entity &&
      ((isEntityView(entity) && hasFilesInView(entity)) || isDataset(entity))

    const isShowingAccessColumn: boolean | undefined =
      showAccessColumn &&
      entity &&
      this.isEntityViewOrDataset() &&
      this.allRowsHaveId()
    const isLoggedIn = !!this.props.synapseContext.accessToken

    const rowsAreDownloadable =
      entity && isFileViewOrDataset && isLoggedIn && this.allRowsHaveId()

    const isShowingAddToV2DownloadListColumn: boolean = !!(
      rowsAreDownloadable && !this.props.hideDownload
    )

    const isShowingDirectDownloadColumn =
      rowsAreDownloadable && showDownloadColumn

    /* min height ensure if no rows are selected that a dropdown menu is still accessible */
    return (
      <div className="SynapseTable SRC-overflowAuto" data-testid="SynapseTable">
        <table
          ref={node => (this.tableElement = node)}
          className="table table-striped table-condensed"
        >
          <thead className="SRC_bordered">
            <tr>
              {this.createTableHeader(
                headers,
                columnModels,
                facets,
                isShowingAccessColumn,
                isShowingDirectDownloadColumn,
                isShowingAddToV2DownloadListColumn,
                isRowSelectionVisible,
                lastQueryRequest,
              )}
            </tr>
          </thead>
          <tbody>
            {this.createTableRows(
              rows,
              headers,
              isShowingAccessColumn,
              isShowingDirectDownloadColumn,
              isShowingAddToV2DownloadListColumn,
              isRowSelectionVisible,
            )}
          </tbody>
        </table>
        <div className="bootstrap-4-backport" style={{ textAlign: 'right' }}>
          <TablePagination />
        </div>
      </div>
    )
  }

  /**
   * Handle a column having been selected
   *
   * @memberof SynapseTable
   */
  public handleColumnSortPress = (dict: Info) => (_: React.SyntheticEvent) => {
    // by using Synthetic event we can use the handler on both key press and mouse click
    let columnIconSortState = cloneDeep(this.state.columnIconSortState)
    if (columnIconSortState.length === 0) {
      columnIconSortState = Array(this.getLengthOfPropsData()).fill(0)
    }
    // get currently sorted items and remove/insert/update this selection
    const sortedColumnSelection = cloneDeep(this.state.sortedColumnSelection)
    const index = this.findSelectionIndex(sortedColumnSelection, dict.name)
    // if its present then remove it
    if (index !== -1) {
      sortedColumnSelection.splice(index, 1)
    }
    columnIconSortState[dict.index] =
      (columnIconSortState[dict.index] + 1) % ICON_STATE.length
    if (columnIconSortState[dict.index] > 0) {
      sortedColumnSelection.unshift({
        column: dict.name,
        direction: SORT_STATE[columnIconSortState[dict.index]],
      })
    }
    const queryRequest = this.props.queryContext.getLastQueryRequest()
    queryRequest.query.sort = sortedColumnSelection
    queryRequest.query.offset = 0
    this.props.queryContext.executeQueryRequest(queryRequest)
    this.setState({
      columnIconSortState,
      sortedColumnSelection,
    })
  }

  private createTableRows(
    rows: Row[],
    headers: SelectColumn[],
    isShowingAccessColumn: boolean | undefined,
    isShowingDownloadColumn: boolean | undefined,
    isShowingAddToV2DownloadListColumn: boolean,
    isRowSelectionVisible: boolean | undefined,
  ) {
    const rowsFormatted: JSX.Element[] = []
    const {
      queryContext: { data },
      queryVisualizationContext: {
        columnsToShowInTable,
        selectedRowIndices,
        setSelectedRowIndices,
      },
      columnLinks = [],
      linkCountToDisaggregatedQuery = false,
    } = this.props
    const { selectColumns = [], columnModels = [] } = data!
    const { mapEntityIdToHeader, mapUserIdToHeader } = this.state
    // find column indices that are COUNT type
    const countColumnIndexes = getCountFunctionColumnIndices(
      this.props.queryContext.getLastQueryRequest().query.sql,
    )

    rows.forEach((row, rowIndex) => {
      const entityVersionNumber = row.versionNumber?.toString()
      const rowSynapseId = `syn${row.rowId}`

      const rowContent = row.values.map(
        (columnValue: string, colIndex: number) => {
          const columnName = headers[colIndex].name
          const isColumnActive = columnsToShowInTable.includes(columnName)
          const columnLinkConfig = columnLinks.find(el => {
            return el.matchColumnName === columnName
          })
          const index = this.findSelectionIndex(
            this.state.sortedColumnSelection,
            columnName,
          )
          const isCountColumn = countColumnIndexes.includes(colIndex)
          const linkToDisaggregatedQuery =
            isCountColumn && linkCountToDisaggregatedQuery
          const isBold = index === -1 ? '' : 'SRC-boldText'
          if (isColumnActive) {
            return (
              <td
                className="SRC_noBorderTop SRC-synapseTableTd"
                key={`(${rowIndex}${columnValue}${colIndex})`}
              >
                {linkToDisaggregatedQuery ? (
                  <a
                    href={this.showGroupRowData(row)}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <p className={isBold}>{columnValue}</p>
                  </a>
                ) : (
                  <SynapseTableCell
                    columnType={headers[colIndex].columnType}
                    columnValue={columnValue}
                    isBold={isBold}
                    mapEntityIdToHeader={mapEntityIdToHeader}
                    mapUserIdToHeader={mapUserIdToHeader}
                    rowIndex={rowIndex}
                    columnLinkConfig={columnLinkConfig}
                    columnName={columnName}
                    rowData={row.values}
                    selectColumns={selectColumns}
                    columnModels={columnModels}
                    rowId={row.rowId}
                    rowVersionNumber={row.versionNumber}
                  />
                )}
              </td>
            )
          }
          return <td className="SRC-hidden" key={`(${rowIndex},${colIndex})`} />
        },
      )

      // also push the access column value if we are showing user access for individual items (still shown if not logged in)
      if (isShowingAccessColumn) {
        rowContent.unshift(
          <td key={rowSynapseId} className="SRC_noBorderTop">
            <HasAccessV2
              key={rowSynapseId}
              entityId={rowSynapseId}
              entityVersionNumber={entityVersionNumber}
            />
          </td>,
        )
      }
      const isFileEntity: boolean =
        mapEntityIdToHeader[rowSynapseId]?.type ==
        'org.sagebionetworks.repo.model.FileEntity'
      if (isShowingDownloadColumn) {
        // SWC-5790: If this is a FileEntity, the download icon should just go to entity page
        rowContent.unshift(
          <td
            key={`direct-download-${rowSynapseId}`}
            className="SRC_noBorderTop direct-download"
          >
            {isFileEntity && (
              <DirectDownload
                associatedObjectId={rowSynapseId}
                entityVersionNumber={entityVersionNumber}
              ></DirectDownload>
            )}
          </td>,
        )
      }
      if (isShowingAddToV2DownloadListColumn) {
        rowContent.unshift(
          <td
            key={`add-to-download-list-v2-${rowSynapseId}`}
            className="SRC_noBorderTop add-to-download-list-v2"
          >
            {isFileEntity && (
              <AddToDownloadListV2
                entityId={rowSynapseId}
                entityVersionNumber={parseInt(entityVersionNumber!)}
              ></AddToDownloadListV2>
            )}
          </td>,
        )
      }

      if (isRowSelectionVisible && selectedRowIndices) {
        rowContent.unshift(
          <td key={`(${rowIndex},rowSelectColumn)`} className="SRC_noBorderTop">
            <Checkbox
              label=""
              checked={selectedRowIndices.includes(rowIndex)}
              onChange={(checked: boolean) => {
                const cloneSelectedRowIndices = [...selectedRowIndices]
                if (checked) {
                  cloneSelectedRowIndices.push(rowIndex)
                } else {
                  const index = cloneSelectedRowIndices.indexOf(rowIndex)
                  if (index > -1) {
                    cloneSelectedRowIndices.splice(index, 1)
                  }
                }
                // update context on change
                setSelectedRowIndices(cloneSelectedRowIndices)
              }}
            ></Checkbox>
          </td>,
        )
      }

      const rowFormatted = <tr key={row.rowId ?? rowIndex}>{rowContent}</tr>
      rowsFormatted.push(rowFormatted)
    })
    return rowsFormatted
  }

  public isSortableColumn(column: ColumnType) {
    switch (column) {
      case ColumnType.USERID:
      case ColumnType.ENTITYID:
      case ColumnType.FILEHANDLEID:
        return false
      default:
        return true
    }
  }

  private createTableHeader(
    headers: SelectColumn[],
    columnModels: ColumnModel[],
    facets: FacetColumnResult[],
    isShowingAccessColumn: boolean | undefined,
    isShowingDownloadColumn: boolean | undefined,
    isShowingAddToV2DownloadListColumn: boolean,
    isRowSelectionVisible: boolean | undefined,
    lastQueryRequest: QueryBundleRequest,
  ) {
    const { sortedColumnSelection, columnIconSortState } = this.state
    const {
      queryVisualizationContext: { facetAliases = {}, columnsToShowInTable },
      queryContext: { lockedFacet },
    } = this.props
    const tableColumnHeaderElements: JSX.Element[] = headers.map(
      (column: SelectColumn, index: number) => {
        const isHeaderSelected = columnsToShowInTable.includes(column.name)
        if (isHeaderSelected) {
          // for background color
          const isSelected: boolean =
            this.findSelectionIndex(sortedColumnSelection, column.name) !== -1
          // for icon state
          const columnIndex: number =
            columnIconSortState[index] === undefined
              ? 0
              : columnIconSortState[index]
          // we have to figure out if the current column is a facet selection
          const facetIndex: number = facets.findIndex(
            (facetColumnResult: FacetColumnResult) => {
              return facetColumnResult.columnName === column.name
            },
          )
          // the header must be included in the facets and it has to be enumerable for current rendering capabilities
          const isFacetSelection: boolean =
            facetIndex !== -1 && facets[facetIndex].facetType === 'enumeration'
          const facet = facets[facetIndex] as FacetColumnResultValues
          const isSelectedSpanClass = isSelected
            ? 'SRC-primary-background-color SRC-anchor-light'
            : ''
          const isSelectedIconClass = isSelected
            ? 'SRC-selected-table-icon tool-icon'
            : 'SRC-primary-text-color tool-icon'
          const sortSpanBackgoundClass = `SRC-tableHead SRC-hand-cursor SRC-sortPadding SRC-primary-background-color-hover  ${isSelectedSpanClass}`
          const displayColumnName: string | undefined = unCamelCase(
            column.name,
            facetAliases,
          )
          const columnModel = columnModels.find(el => el.name === column.name)!
          const isLockedFacetColumn =
            column.name.toLowerCase() === lockedFacet?.facet?.toLowerCase() // used in details page to disable filter the column
          const isEntityIDColumn =
            columnModel &&
            columnModel.name == 'id' &&
            columnModel.columnType == ColumnType.ENTITYID
          return (
            <th key={column.name}>
              <div className="SRC-split">
                <span style={{ whiteSpace: 'nowrap' }}>
                  {displayColumnName}
                </span>
                <div className="SRC-centerContent">
                  {isFacetSelection &&
                    !isLockedFacetColumn &&
                    this.configureFacetDropdown(
                      facet,
                      columnModel,
                      lastQueryRequest,
                      facetAliases,
                    )}
                  {this.isSortableColumn(column.columnType) && (
                    <span
                      role="button"
                      aria-label="sort"
                      tabIndex={0}
                      className={sortSpanBackgoundClass}
                      onKeyPress={this.handleColumnSortPress({
                        index,
                        name: column.name,
                      })}
                      onClick={this.handleColumnSortPress({
                        index,
                        name: column.name,
                      })}
                    >
                      <Icon
                        type={ICON_STATE[columnIndex]}
                        cssClass={isSelectedIconClass}
                      ></Icon>
                    </span>
                  )}
                  {isEntityIDColumn && (
                    <InteractiveCopyIdsIcon
                      onCopy={() => {
                        this.handleCopyIdsToClipboard(index)
                      }}
                    />
                  )}
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
      tableColumnHeaderElements.unshift(
        <th key="accessColumn">
          <div className="SRC-centerContent">
            <span style={{ whiteSpace: 'nowrap' }}>Access</span>
          </div>
        </th>,
      )
    }
    // add direct download column if logged in
    if (isShowingDownloadColumn) {
      tableColumnHeaderElements.unshift(
        <th key="downloadColumn">
          <div className="SRC-centerContent">&nbsp;</div>
        </th>,
      )
    }
    if (isShowingAddToV2DownloadListColumn) {
      tableColumnHeaderElements.unshift(
        <th
          data-testid="AddToDownloadListV2ColumnHeader"
          key="addToV2DownloadListColumn"
        >
          <div className="SRC-centerContent">&nbsp;</div>
        </th>,
      )
    }
    if (isRowSelectionVisible) {
      tableColumnHeaderElements.unshift(
        <th key="rowSelectionColumn">
          <div className="SRC-centerContent">{/* checkboxes column */}</div>
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
  private findSelectionIndex(sortedColumnSelection: SortItem[], name: string) {
    if (sortedColumnSelection.length !== 0) {
      // find if the current selection exists already and remove it
      return sortedColumnSelection.findIndex(
        (el: SortItem) => el.column === name,
      )
    }
    return -1
  }

  // Direct user to corresponding query on synapse
  private advancedSearch(event: React.SyntheticEvent) {
    event && event.preventDefault()
    const lastQueryRequest = this.props.queryContext.getLastQueryRequest()
    const { query } = lastQueryRequest
    // base 64 encode the json of the query and go to url with the encoded object
    const encodedQuery = btoa(JSON.stringify(query))
    const synTable = lastQueryRequest.entityId
    window.open(
      `${PRODUCTION_ENDPOINT_CONFIG.PORTAL}#!Synapse:${synTable}/tables/query/${encodedQuery}`,
      '_blank',
    )
  }

  private getLengthOfPropsData() {
    const { data } = this.props.queryContext
    return data?.queryResult?.queryResults.headers.length ?? 0
  }
  /**
   * Handles the toggle of a column select, this will cause the table to
   * either show the column or hide depending on the prior state of the column
   *
   * @memberof SynapseTable
   */
  public toggleColumnSelection = (columnName: string) => {
    const {
      queryVisualizationContext: {
        columnsToShowInTable,
        setColumnsToShowInTable,
      },
    } = this.props
    let columnsToShowInTableCopy = cloneDeep(columnsToShowInTable)
    if (columnsToShowInTableCopy.includes(columnName)) {
      columnsToShowInTableCopy = columnsToShowInTableCopy.filter(
        el => el !== columnName,
      )
    } else {
      columnsToShowInTableCopy.push(columnName)
    }
    setColumnsToShowInTable(columnsToShowInTableCopy)
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
  public configureFacetDropdown(
    facetColumnResult: FacetColumnResultValues,
    columnModel: ColumnModel,
    lastQueryRequest: QueryBundleRequest,
    facetAliases?: Record<string, string>,
  ) {
    return (
      <EnumFacetFilter
        containerAs="Dropdown"
        facetValues={facetColumnResult.facetValues}
        columnModel={columnModel}
        facetAliases={facetAliases}
        onChange={(facetNamesMap: Record<string, string>) => {
          applyMultipleChangesToValuesColumn(
            lastQueryRequest,
            facetColumnResult,
            this.applyChangesFromQueryFilter,
            facetNamesMap,
          )
        }}
        onClear={() => {
          applyChangesToValuesColumn(
            lastQueryRequest,
            facetColumnResult,
            this.applyChangesFromQueryFilter,
          )
        }}
      />
    )
  }

  public applyChangesFromQueryFilter = (facets: FacetColumnRequest[]) => {
    const queryRequest: QueryBundleRequest =
      this.props.queryContext.getLastQueryRequest()
    queryRequest.query.selectedFacets = facets
    queryRequest.query.offset = 0
    this.props.queryContext.executeQueryRequest(queryRequest)
  }
}
