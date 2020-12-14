import { cloneDeep } from 'lodash-es'
import * as React from 'react'
import { Button, Modal } from 'react-bootstrap'
import { lexer } from 'sql-parser'
import { SynapseClient } from '../../utils'
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
  EntityColumnType,
  ColumnModel,
} from '../../utils/synapseTypes/'
import { DownloadConfirmation } from '../download_list/DownloadConfirmation'
import HasAccess from '../HasAccess'
import { QueryWrapperChildProps } from '../QueryWrapper'
import TotalQueryResults from '../TotalQueryResults'
import { unCamelCase } from './../../utils/functions/unCamelCase'
import { ICON_STATE } from './SynapseTableConstants'
import NoData from '../../assets/icons/file-dotted.svg'
import { renderTableCell } from '../synapse_table_functions/renderTableCell'
import { getUniqueEntities } from '../synapse_table_functions/getUniqueEntities'
import { getColumnIndiciesWithType } from '../synapse_table_functions/getColumnIndiciesWithType'
import { Checkbox } from '../widgets/Checkbox'
import { LabelLinkConfig } from '../CardContainerLogic'
import { EnumFacetFilter } from '../widgets/query-filter/EnumFacetFilter'
import {
  applyMultipleChangesToValuesColumn,
  applyChangesToValuesColumn,
} from '../widgets/query-filter/QueryFilter'
import ColumnResizer from 'column-resizer'
import ModalDownload from '../ModalDownload'
import loadingScreen from '../LoadingScreen'
import { Icon } from '../row_renderers/utils'
import FileEntityHandleQueryWrapper, { FileFetchResponse } from '../FileEntityHandleQueryWrapper'
import DirectDownload from '../DirectDownload'

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

// Hold constants for next and previous button actions
const NEXT = 'NEXT'
const PREVIOUS = 'PREVIOUS'

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
export interface Dictionary<T> {
  [key: string]: T
}
export type SynapseTableState = {
  sortedColumnSelection: SortItem[]
  columnIconSortState: number[]
  isDownloadConfirmationOpen: boolean
  isExportTableDownloadOpen: boolean
  isExpanded: boolean
  isFileView: boolean
  mapEntityIdToHeader: Dictionary<EntityHeader>
  mapUserIdToHeader: Dictionary<Partial<UserGroupHeader & UserProfile>>
  isColumnSelectionOpen: boolean
  isUserModifiedQuery?: boolean //flag to signal that the selection criterial has been defined by user and if no records are returned do not hide the table
  isFetchingEntityHeaders: boolean
  isFetchingEntityVersion: boolean
  fileEntityHandleArray: FileFetchResponse[] // an array to contain either an object of authorized file or unauthorized file response.
}
export type SynapseTableProps = {
  visibleColumnCount?: number
  title?: string
  showAccessColumn?: boolean
  showDownloadColumn?: boolean
  columnLinks?: LabelLinkConfig
  hideDownload?: boolean
  enableLeftFacetFilter?: boolean
  isRowSelectionVisible?: boolean
}

export default class SynapseTable extends React.Component<
  QueryWrapperChildProps & SynapseTableProps,
  SynapseTableState
> {
  constructor(props: QueryWrapperChildProps & SynapseTableProps) {
    super(props)
    this.componentDidMount = this.componentDidMount.bind(this)
    this.componentWillUnmount = this.componentWillUnmount.bind(this)
    this.componentDidUpdate = this.componentDidUpdate.bind(this)
    this.shouldComponentUpdate = this.shouldComponentUpdate.bind(this)
    this.handleColumnSortPress = this.handleColumnSortPress.bind(this)
    this.handlePaginationClick = this.handlePaginationClick.bind(this)
    this.findSelectionIndex = this.findSelectionIndex.bind(this)
    this.toggleColumnSelection = this.toggleColumnSelection.bind(this)
    this.advancedSearch = this.advancedSearch.bind(this)
    this.getLengthOfPropsData = this.getLengthOfPropsData.bind(this)
    this.configureFacetDropdown = this.configureFacetDropdown.bind(this)
    this.enableResize = this.enableResize.bind(this)
    this.disableResize = this.disableResize.bind(this)
    this.getFileEntityHandleCallback = this.getFileEntityHandleCallback.bind(this)

    // store the offset and sorted selection that is currently held
    this.state = {
      /* columnIconSortState tells what icon to display for a table
         header. There are three states for a particular header-
          0 - show descending icon but *deselected*
          1 - show descending icon selected
          2 - show ascending icon selected
      */
      columnIconSortState: [],
      isDownloadConfirmationOpen: false,
      isExportTableDownloadOpen: false,
      isExpanded: false,
      isColumnSelectionOpen: false,
      isFileView: false,
      // sortedColumnSelection contains the columns which are
      // selected currently and their sort status as eithet
      // off, desc, or asc.
      sortedColumnSelection: [],
      mapEntityIdToHeader: {},
      mapUserIdToHeader: {},
      isFetchingEntityHeaders: false,
      isFetchingEntityVersion: false,
      fileEntityHandleArray: []
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
    nextProps: QueryWrapperChildProps & SynapseTableProps,
    nextState: Readonly<SynapseTableState>,
    nextContext: any,
  ): boolean {
    this.disableResize()
    return super.shouldComponentUpdate
      ? super.shouldComponentUpdate(nextProps, nextState, nextContext)
      : true
  }
  componentDidUpdate(prevProps: QueryWrapperChildProps & SynapseTableProps) {
    this.getEntityHeadersInData(prevProps.token !== this.props.token)
    this.getTableConcreteType(prevProps)
    this.enableResize()
  }

  public async getTableConcreteType(
    prevProps: QueryWrapperChildProps & SynapseTableProps,
  ) {
    const { data, token } = this.props
    if (!data) {
      return
    } else if (
      this.state.isFetchingEntityVersion &&
      prevProps.token === this.props.token
    ) {
      return
    }
    const currentTableId = data?.queryResult.queryResults.tableId
    const previousTableId = prevProps.data?.queryResult.queryResults.tableId
    if (currentTableId && previousTableId !== currentTableId) {
      this.setState({
        isFetchingEntityVersion: true,
      })
      const entityData = await SynapseClient.getEntity(token, currentTableId)
      this.setState({
        isFileView: entityData.concreteType.includes('EntityView'),
        isFetchingEntityVersion: false,
      })
    }
  }

  enableResize() {
    if (!this.resizer) {
      if (this.tableElement) {
        this.resizer = new ColumnResizer(this.tableElement, RESIZER_OPTIONS)
      }
    } else {
      this.resizer.reset(RESIZER_OPTIONS)
    }
  }

  disableResize() {
    if (this.resizer) {
      this.resizer.reset({ disable: true })
    }
  }

  public async getEntityHeadersInData(forceRefresh: boolean) {
    const { data, token } = this.props
    if (!data) {
      return
    } else if (this.state.isFetchingEntityHeaders && !forceRefresh) {
      return
    }
    const mapEntityIdToHeader = cloneDeep(this.state.mapEntityIdToHeader)
    const mapUserIdToHeader = cloneDeep(this.state.mapUserIdToHeader)
    const entityIdColumnIndicies = getColumnIndiciesWithType(
      this.props.data,
      EntityColumnType.ENTITYID,
    )
    const userIdColumnIndicies = getColumnIndiciesWithType(
      this.props.data,
      EntityColumnType.USERID,
    )
    const distinctEntityIds = getUniqueEntities(
      data,
      mapEntityIdToHeader,
      entityIdColumnIndicies,
    )
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
        const data = await SynapseClient.getEntityHeader(referenceList, token)
        const { results } = data
        results.forEach(el => {
          mapEntityIdToHeader[el.id] = el
        })
      } catch (err) {
        console.error('Error on retrieving entity header list , ', err)
      }
    }
    const userPorfileIds: string[] = []
    if (distinctUserIds.size > 0) {
      // Make call to get group headers and user profiles
      const ids = Array.from(distinctUserIds)
      // TODO: Grab Team Badge
      try {
        const data = await SynapseClient.getGroupHeadersBatch(ids, token)
        data.children.forEach(el => {
          if (el.isIndividual) {
            userPorfileIds.push(el.ownerId)
          } else {
            mapUserIdToHeader[el.ownerId] = el
          }
        })
      } catch (err) {
        console.error('Error on getGroupHeaders batch: ', err)
      }
    }
    if (userPorfileIds.length > 0) {
      try {
        const data = await getUserProfileWithProfilePicAttached(
          userPorfileIds,
          token,
        )
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

  // Callback function to pass to FileEntityHandleQueryWrapper to save file entity/handle information
  public getFileEntityHandleCallback(result:FileFetchResponse[]) {
    if (result.length) {
      this.setState({
        fileEntityHandleArray: result
      })
    }
  }

  /**
   * Display the view
   */
  public render() {
    if (this.props.isLoadingNewData) {
      return loadingScreen
    } else if (!this.props.data) {
      return <></>
    }
    // unpack all the data
    const {
      data,
      isLoading = true,
      unitDescription,
      token,
      showBarChart,
      enableLeftFacetFilter,
    } = this.props
    const { queryResult, columnModels = [] } = data
    const { queryResults } = queryResult
    const { rows } = queryResults
    const { headers } = queryResults
    const { facets = [] } = data
    const { isExpanded, isExportTableDownloadOpen } = this.state
    const queryRequest = this.props.getLastQueryRequest!()

    let className = ''
    if (showBarChart) {
      className = 'SRC-marginBottomTop'
    }
    const hasResults = data.queryResult.queryResults.rows.length > 0
    if (!hasResults && !this.state.isUserModifiedQuery) {
      return (
        <div className="text-center SRCBorderedPanel SRCBorderedPanel--padded2x">
          <img src={NoData} alt="no data"></img>
          <div style={{ marginTop: '20px', fontStyle: 'italic' }}>
            This table is currently empty
          </div>
        </div>
      )
    }
    const table = (
      <div className="col-xs-12">
        <FileEntityHandleQueryWrapper
          rows={rows}
          token={token}
          getFileEntityHandleCallback={this.getFileEntityHandleCallback}
        ></FileEntityHandleQueryWrapper>
        {this.renderTable(headers, columnModels, facets, rows)}
      </div>
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
              token={token}
            />
          )}
          {!enableLeftFacetFilter &&
            unitDescription &&
            !isGroupByInSql(queryRequest.query.sql) && (
              <div
                className={`SRC-centerContent text-left`}
                style={{ minHeight: '20px' }}
              >
                <TotalQueryResults
                  isLoading={isLoading}
                  style={{ fontSize: 15 }}
                  unitDescription={unitDescription}
                  lastQueryRequest={queryRequest}
                  token={token}
                  frontText={'Showing'}
                  applyChanges={(newFacets: FacetColumnRequest[]) =>
                    this.applyChangesFromQueryFilter(newFacets)
                  }
                />
              </div>
            )}
          {/* FRAGILE, CHANGE WITH CAUTION, see - https://sagebionetworks.jira.com/browse/PORTALS-1539 */}
          <div className={enableLeftFacetFilter ? '' : 'row'}>{table}</div>
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

  private showGroupRowData = (selectedRow: Row) => {
    // magic happens - parse query, deep copy query bundle request, modify, encode, send to Synapse.org.  Easy!
    const queryCopy = this.props.getLastQueryRequest!().query
    const parsed = this.getSqlUnderlyingDataForRow(selectedRow, queryCopy.sql)
    queryCopy.sql = parsed.newSql
    const queryJSON = JSON.stringify(queryCopy)
    // encode this copy of the query (json)
    const encodedQuery = btoa(queryJSON)
    return `https://www.synapse.org/#!Synapse:${parsed.synId}/tables/query/${encodedQuery}`
  }

  private renderTable = (
    headers: SelectColumn[],
    columnModels: ColumnModel[],
    facets: FacetColumnResult[],
    rows: Row[],
  ) => {
    const lastQueryRequest = this.props.getLastQueryRequest?.()!
    // handle displaying the previous button -- if offset is zero then it
    // shouldn't be displayed
    const pastZero: boolean = lastQueryRequest.query.offset! > 0
    const {
      hasMoreData,
      showAccessColumn,
      showDownloadColumn,
      token,
      isRowSelectionVisible,
    } = this.props

    const nextBtn = (
      <Button
        variant="light-primary-base"
        className="pill-xl"
        onClick={this.handlePaginationClick(NEXT)}
        style={{
          marginRight: 0,
          display: 'inline-flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
        type="button"
      >
        Next
      </Button>
    )
    const previousBtn = (
      <Button
        variant="light-primary-base"
        className="pill-xl"
        onClick={this.handlePaginationClick(PREVIOUS)}
        type="button"
        style={{
          marginRight: !hasMoreData && pastZero ? 0 : '10px',
          display: 'inline-flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        Previous
      </Button>
    )

    let isShowingAccessColumn: boolean | undefined =
      showAccessColumn && this.state.isFileView
    let isShowDownloadColumn: boolean | undefined =
      showDownloadColumn && this.state.isFileView
    /* min height ensure if no rows are selected that a dropdown menu is still accessible */
    return (
      <div style={{ minHeight: '400px' }} className="SRC-overflowAuto">
        {this.state.isDownloadConfirmationOpen && (
          <DownloadConfirmation
            token={token!}
            getLastQueryRequest={this.props.getLastQueryRequest!}
          />
        )}
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
                isShowDownloadColumn,
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
              isShowDownloadColumn,
              isRowSelectionVisible,
            )}
          </tbody>
        </table>
        <div className="bootstrap-4-backport" style={{ textAlign: 'right' }}>
          {pastZero && previousBtn}
          {hasMoreData && nextBtn}
        </div>
      </div>
    )
  }

  /**
   * Return the select column indexes for columns that use the aggregate count function.
   * If sql does not have a GROUP BY, this returns an empty array.
   * @param originalSql
   */
  public getCountFunctionColumnIndexes(originalSql: string): number[] {
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

  public getSqlUnderlyingDataForRow(
    selectedRow: Row,
    originalSql: string,
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
    if (this.props.data === undefined) {
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
  private handlePaginationClick = (eventType: string) => (
    _event: React.MouseEvent<HTMLButtonElement>,
  ) => {
    const queryRequest = this.props.getLastQueryRequest!()
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
    this.props.executeQueryRequest!(queryRequest)
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
    const queryRequest = this.props.getLastQueryRequest!()
    queryRequest.query.sort = sortedColumnSelection
    queryRequest.query.offset = 0
    this.props.executeQueryRequest!(queryRequest)
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
    isRowSelectionVisible: boolean | undefined,
  ) {
    const rowsFormatted: JSX.Element[] = []
    const {
      token,
      data,
      isColumnSelected,
      selectedRowIndices,
      updateParentState,
      columnLinks = [],
    } = this.props
    const { selectColumns = [], columnModels = [] } = data!
    const { mapEntityIdToHeader, mapUserIdToHeader } = this.state
    const entityColumnIndicies = getColumnIndiciesWithType(
      data,
      EntityColumnType.ENTITYID,
    )
    const userColumnIndicies = getColumnIndiciesWithType(
      data,
      EntityColumnType.USERID,
    )
    const dateColumnIndicies = getColumnIndiciesWithType(
      data,
      EntityColumnType.DATE,
    )
    const dateListColumnIndicies = getColumnIndiciesWithType(
      data,
      EntityColumnType.DATE_LIST,
    )
    const booleanListColumnIndicies = getColumnIndiciesWithType(
      data,
      EntityColumnType.BOOLEAN_LIST,
    )
    const otherListColumnIndicies = getColumnIndiciesWithType(
      data,
      EntityColumnType.STRING_LIST,
      EntityColumnType.INTEGER_LIST,
    )
    // find column indices that are COUNT type
    const countColumnIndexes = this.getCountFunctionColumnIndexes(
      this.props.getLastQueryRequest!().query.sql,
    )

    rows.forEach((row, rowIndex) => {
      const rowContent = row.values.map(
        (columnValue: string, colIndex: number) => {
          const columnName = headers[colIndex].name
          const isColumnActive = isColumnSelected!.includes(columnName)
          const columnLinkConfig = columnLinks.find(el => {
            return el.matchColumnName === columnName
          })
          const index = this.findSelectionIndex(
            this.state.sortedColumnSelection,
            columnName,
          )
          const isCountColumn = countColumnIndexes.includes(colIndex)
          const isBold = index === -1 ? '' : 'SRC-boldText'
          if (isColumnActive) {
            return (
              <td
                className="SRC_noBorderTop SRC-synapseTableTd"
                key={`(${rowIndex}${columnValue}${colIndex})`}
              >
                {isCountColumn && (
                  <a
                    href={this.showGroupRowData(row)}
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
                    columnLinkConfig,
                    rowIndex,
                    selectColumns,
                    columnModels,
                    columnName,
                  })}
              </td>
            )
          }
          return <td className="SRC-hidden" key={`(${rowIndex},${colIndex})`} />
        },
      )

      const entityVersionNumber = row.versionNumber?.toString()
      const rowSynapseId = `syn${row.rowId}`
      const fileEntityHandle = this.state.fileEntityHandleArray ? this.state.fileEntityHandleArray[rowIndex] : undefined

      // also push the access column value if we are showing user access for individual items (still shown if not logged in)
      if (isShowingAccessColumn) {
        rowContent.unshift(
          <td key={rowSynapseId} className="SRC_noBorderTop">
            <HasAccess
              key={rowSynapseId}
              entityId={rowSynapseId}
              entityVersionNumber={entityVersionNumber}
              token={token}
            ></HasAccess>
          </td>,
        )
      }

      if (isShowingDownloadColumn) {
        rowContent.unshift(
          <td className="SRC_noBorderTop direct-download">
            <DirectDownload
              key={"direct-download-"+rowSynapseId}
              token={token}
              fileEntityHandle={fileEntityHandle}
            ></DirectDownload>
          </td>
        )
      }

      if (isRowSelectionVisible && selectedRowIndices) {
        rowContent.unshift(
          <td key={`(${rowIndex},rowSelectColumn)`} className="SRC_noBorderTop">
            <Checkbox
              label=""
              id={`(${rowIndex},rowSelectColumnCheckbox)`}
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
                // update parent state on change
                updateParentState!({
                  selectedRowIndices: cloneSelectedRowIndices,
                })
              }}
            ></Checkbox>
          </td>,
        )
      }

      const rowFormatted = <tr key={row.rowId}>{rowContent}</tr>
      rowsFormatted.push(rowFormatted)
    })
    return rowsFormatted
  }

  public isSortableColumn(column: EntityColumnType) {
    switch (column) {
      case EntityColumnType.USERID:
      case EntityColumnType.ENTITYID:
      case EntityColumnType.FILEHANDLEID:
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
    isRowSelectionVisible: boolean | undefined,
    lastQueryRequest: QueryBundleRequest,
  ) {
    const { sortedColumnSelection, columnIconSortState } = this.state
    const {
      facetAliases = {},
      isColumnSelected,
      token,
      lockedFacet,
    } = this.props
    const tableColumnHeaderElements: JSX.Element[] = headers.map(
      (column: SelectColumn, index: number) => {
        const isHeaderSelected = isColumnSelected!.includes(column.name)
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
                      token,
                      facetAliases,
                    )}
                  {this.isSortableColumn(column.columnType) && (
                    <span
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
        </th>
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
    const lastQueryRequest = this.props.getLastQueryRequest!()
    const { query } = lastQueryRequest
    // base 64 encode the json of the query and go to url with the encoded object
    const encodedQuery = btoa(JSON.stringify(query))
    const synTable = lastQueryRequest.entityId
    window.open(
      `https://www.synapse.org/#!Synapse:${synTable}/tables/query/${encodedQuery}`,
      '_blank',
    )
  }

  private getLengthOfPropsData() {
    const { data } = this.props
    return data!.queryResult.queryResults.headers.length
  }
  /**
   * Handles the toggle of a column select, this will cause the table to
   * either show the column or hide depending on the prior state of the column
   *
   * @memberof SynapseTable
   */
  public toggleColumnSelection = (columnName: string) => {
    let isColumnSelected = cloneDeep(this.props.isColumnSelected!)
    if (isColumnSelected.includes(columnName)) {
      isColumnSelected = isColumnSelected.filter(el => el !== columnName)
    } else {
      isColumnSelected.push(columnName)
    }
    this.props.updateParentState!({ isColumnSelected })
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
    token?: string,
    facetAliases?: {},
  ) {
    return (
      <EnumFacetFilter
        containerAs="Dropdown"
        facetValues={facetColumnResult.facetValues}
        columnModel={columnModel!}
        token={token}
        facetAliases={facetAliases}
        onChange={(facetNamesMap: {}) => {
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
    const queryRequest: QueryBundleRequest = this.props.getLastQueryRequest!()
    queryRequest.query.selectedFacets = facets
    queryRequest.query.offset = 0
    this.setState({ isUserModifiedQuery: true })
    this.props.executeQueryRequest!(queryRequest)
  }
}
type ColumnReference = {
  index: number
  name: string
}
