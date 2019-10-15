import { IconProp, library } from '@fortawesome/fontawesome-svg-core'
import { 
  faCheck,
  faColumns,
  faFilter,
  faSort,
  faSortAmountDown,
  faSortAmountUp,
  faTimes,
  faDownload,
  faUsers,
  faGlobeAmericas,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as React from 'react'
import ReactTooltip from "react-tooltip"
import { FacetColumnResult,
  FacetColumnResultValueCount,
  FacetColumnResultValues
} from '../utils/jsonResponses/Table/FacetColumnResult'
import ColumnsSvg from '../assets/icons/columns.svg'
import ExpandSvg from '../assets/icons/expand.svg'
import ShrinkSvg from '../assets/icons/shrink.svg'
import { QueryBundleRequest } from '../utils/jsonResponses/Table/QueryBundleRequest'
import { Row } from '../utils/jsonResponses/Table/QueryResult'
import { SelectColumn, EntityColumnType } from '../utils/jsonResponses/Table/SelectColumn'
import { getColorPallette } from './ColorGradient'
import { QueryWrapperChildProps, FacetSelection } from './QueryWrapper'
import { cloneDeep } from '../utils/modules/'
import { SortItem } from '../utils/jsonResponses/Table/Query'
import { getIsValueSelected, readFacetValues } from '../utils/modules/facetUtils'
import { lexer } from 'sql-parser'
import { formatSQLFromParser, isGroupByInSql } from '../utils/modules/sqlFunctions'
import ModalDownload from './ModalDownload'
import { SynapseClient } from '../utils'
import { ReferenceList } from '../utils/jsonResponses/ReferenceList'
import { EntityHeader } from '../utils/jsonResponses/EntityHeader'
import { EntityLink } from './EntityLink'
import TotalQueryResults from './TotalQueryResults'
import { QueryResultBundle } from '../utils/jsonResponses/Table/QueryResultBundle'
import UserCard from './UserCard'
import { AUTHENTICATED_USERS } from '../utils/SynapseConstants'
import { UserProfile } from '../utils/jsonResponses/UserProfile'
import { getUserProfileWithProfilePicAttached } from './getUserData'
import { UserGroupHeader } from '../utils/jsonResponses/UserGroupHeader'
import { Modal } from 'react-bootstrap'

const MIN_SPACE_FACET_MENU = 700

// Add all icons to the library so you can use it in your page
library.add(faColumns)
library.add(faSort)
library.add(faSortAmountUp)
library.add(faSortAmountDown)
library.add(faCheck)
library.add(faTimes)
library.add(faFilter)
library.add(faDownload)
library.add(faUsers)
library.add(faGlobeAmericas)
// Hold constants for next and previous button actions
const NEXT = 'NEXT'
const PREVIOUS = 'PREVIOUS'
export const SELECT_ALL = 'SELECT_ALL'
export const DESELECT_ALL = 'DESELECT_ALL'
export const DOWNLOAD_FILES_MENU_TEXT = 'Download Files'
// double check these icons!
export const ICON_STATE: string [] = ['sort-amount-down', 'sort-amount-down', 'sort-amount-up']
type Direction = ''|'ASC'|'DESC'
export const SORT_STATE: Direction [] = ['', 'DESC', 'ASC']
export const DOWNLOAD_OPTIONS_CONTAINER_CLASS = 'SRC-download-options-container' 
export const EXPAND_CLASS = 'SRC-expand-class'
type Info = {
  index: number
  name: string
}
interface Dictionary<T> {
  [key: string]: T;
}
export type SynapseTableState = {
  sortedColumnSelection: SortItem []
  isDropdownColumnMenuOpen: boolean
  isColumnSelected: boolean[]
  columnIconSortState: number[],
  activeFilterIndex: number
  activeFilterClass: string,
  isMenuWallOpen: boolean,
  isModalDownloadOpen: boolean
  isExpanded: boolean
  mapEntityIdToHeader: Dictionary<EntityHeader>
  mapUserIdToHeader: Dictionary<Partial<UserGroupHeader & UserProfile>>
  isDropdownDownloadOptionsOpen: boolean
}
export type SynapseTableProps = {
  visibleColumnCount?: number
  synapseId: string
  title: string
  loadingScreen?: JSX.Element
}

const TOOLTIP_DELAY_SHOW = 500

// This is a convenient way to categorize all the dropdown state variables, although problematic
// if any state variable mapping to a boolean does NOT represent a dropdown
type BooleanKeys<T> = { [k in keyof T]: T[k] extends boolean ? k : never }[keyof T];

export default class SynapseTable extends React.Component<QueryWrapperChildProps &
                                                          SynapseTableProps, SynapseTableState> {

  constructor(props: QueryWrapperChildProps & SynapseTableProps) {
    super(props)
    this.handleColumnSortPress = this.handleColumnSortPress.bind(this)
    this.handlePaginationClick = this.handlePaginationClick.bind(this)
    this.findSelectionIndex = this.findSelectionIndex.bind(this)
    this.toggleColumnSelection = this.toggleColumnSelection.bind(this)
    this.advancedSearch = this.advancedSearch.bind(this)
    this.getLengthOfPropsData = this.getLengthOfPropsData.bind(this)
    this.configureFacetDropdown = this.configureFacetDropdown.bind(this)
    this.closeAllDropdowns = this.closeAllDropdowns.bind(this)
    this.applyChanges = this.applyChanges.bind(this)
    this.toggleFilterDropdown = this.toggleFilterDropdown.bind(this)
    // store the offset and sorted selection that is currently held
    this.state = {
      /* columnIconSortState tells what icon to display for a table
         header. There are three states for a particular header-
          0 - show descending icon but *deselected*
          1 - show descending icon selected
          2 - show ascending icon selected
      */
      columnIconSortState: [],
      activeFilterClass: '',
      isColumnSelected: [],
      activeFilterIndex: -1,
      isDropdownColumnMenuOpen: false,
      isMenuWallOpen: false,
      isModalDownloadOpen: false,
      isDropdownDownloadOptionsOpen: false,
      isExpanded: false,
      // sortedColumnSelection contains the columns which are
      // selected currently and their sort status as eithet
      // off, desc, or asc.
      sortedColumnSelection: [],
      mapEntityIdToHeader: {},
      mapUserIdToHeader: {}
    }
    this.renderFacetSelection = this.renderFacetSelection.bind(this)
    this.getEntityHeadersInData = this.getEntityHeadersInData.bind(this)
    this.getColumnIndiciesWithType = this.getColumnIndiciesWithType.bind(this)
  }

  componentDidMount() {
    this.getEntityHeadersInData()
  }

  componentDidUpdate() {
    this.getEntityHeadersInData()
  }

  public async getEntityHeadersInData() {
    const { data, token } = this.props
    if (!data) {
      return
    }
    const mapEntityIdToHeader = cloneDeep(this.state.mapEntityIdToHeader)
    const mapUserIdToHeader = cloneDeep(this.state.mapUserIdToHeader)
    const entityIdColumnIndicies = this.getColumnIndiciesWithType('ENTITYID')
    const userIdColumnIndicies = this.getColumnIndiciesWithType('USERID')
    const distinctEntityIds = this.getUniqueEntities(data, mapEntityIdToHeader, entityIdColumnIndicies)
    const distinctUserIds = this.getUniqueEntities(data, mapUserIdToHeader, userIdColumnIndicies)
    // Make call to resolve entity ids
    if (distinctEntityIds.size > 0) {
      const referenceList: ReferenceList = Array.from(distinctEntityIds).map(id => { return { targetId: id }})
      try {
        const data = await SynapseClient.getEntityHeader(referenceList, token)
        const { results } = data
        results.forEach(
          el => {
            mapEntityIdToHeader[el.id] = el
          }
        )
      } catch (err) {
        console.error('Error on retrieving entity header list , ', err)
      }
    }
    if (distinctUserIds.size === 0) {
      if (distinctEntityIds.size > 0) {
       this.setState({mapEntityIdToHeader}) 
      }
      return
    }
    // Make call to get group headers and user profiles
    const ids = Array.from(distinctUserIds)
    const idsWithUserProfiles: string [] = []
    // TODO: Grab Team Badge
    try {
      const data = await SynapseClient.getGroupHeadersBatch(ids, token)
      data.children.forEach(
        (el) => {
          if (el.isIndividual) {
            idsWithUserProfiles.push(el.ownerId)
          } else {
            mapUserIdToHeader[el.ownerId] = el
          }
        }
      )
    } catch (err) {
      console.error('Error on getGroupHeaders batch: ', err)
    }
    if (idsWithUserProfiles.length > 0) {
      try {
        const data = await getUserProfileWithProfilePicAttached(idsWithUserProfiles, token)
        data.list.forEach(
          (el: UserProfile) => {
            mapUserIdToHeader[el.ownerId] = el
          }
        )
      } catch (err) {
        console.error('Error on getUserProfile : ', err)
      }
    }
    if (distinctEntityIds.size > 0 || distinctUserIds.size > 0) {
      this.setState({
        mapEntityIdToHeader,
        mapUserIdToHeader
      })
    }
  }

  public getUniqueEntities(data: QueryResultBundle, mapIdToHeader: {}, indicies: number []) {
    const distinctEntities = new Set<string>()
    data!.queryResult.queryResults.rows.forEach((row) => {
      row.values.forEach((el: any, colIndex: number) => {
        // make sure this is a column of type entity and that we haven't retrieved this entity's information prior
        if (indicies.includes(colIndex) && !Object.prototype.hasOwnProperty.call(mapIdToHeader,el) && el) {
          distinctEntities.add(el)
        }
      })
    })
    return distinctEntities
  }

  public getColumnIndiciesWithType(columnType: EntityColumnType) {
    const { data } = this.props
    const columnsOfTypeEntity: number [] = []
    data && data.selectColumns && data.selectColumns.forEach((el, index) => {
      if (el.columnType === columnType) {
        columnsOfTypeEntity.push(index)
      } 
    })
    return columnsOfTypeEntity
  }

  public toggleStateVariables = (...values: BooleanKeys<SynapseTableState> []) => (_event: React.SyntheticEvent) => {
    const updatedState = {} 
    values.forEach(
      el => updatedState[el] = !this.state[el]
    )
    this.setState(updatedState)
  }

  /**
   * Display the view
   */
  public render() {
    if (this.props.data === undefined) {
      return this.props.loadingScreen || <div/>
    }
    // unpack all the data
    const { data, isLoading = true, unitDescription, token, synapseId, facet, showBarChart } = this.props
    const { queryResult } = data
    const { queryResults } = queryResult
    const { rows } = queryResults
    const { headers } = queryResults
    const { facets = [] } = data
    const { isMenuWallOpen, isModalDownloadOpen, isExpanded } = this.state
    const queryRequest = this.props.getLastQueryRequest!()
    const {
      sql,
      selectedFacets
    } = queryRequest.query
    const style: React.CSSProperties = {}
    if (showBarChart) {
      style.marginTop = 15
      style.marginBottom = 15
    } else {
      style.marginTop = -10
    }
    const content = (
        <>
         <div className="SRC-centerContent" style={{ height:'20px', textAlign: 'left', ...style}}>
          {
            unitDescription && !isGroupByInSql(queryRequest.query.sql)
            &&
            <TotalQueryResults 
              facet={facet}
              data={data}
              isLoading={isLoading}
              style={{fontSize: 15}}
              unitDescription={unitDescription}
              frontText={'Showing'}
            />
          }
        </div>
        {this.renderTableTop(headers)}
        {this.renderTable(headers, facets, rows)}
        {/* its intentional that the menu-wall is placed here because of the way that z-index works*/}
        {isMenuWallOpen && <button onClick={this.closeAllDropdowns} className='SRC-menu-wall' />}
      </>
    )
    return (
      <React.Fragment>
        {
          // modal can render anywhere, this is not a particular location
          isModalDownloadOpen
          &&
          <ModalDownload
            onClose={this.toggleStateVariables('isModalDownloadOpen', 'isDropdownDownloadOptionsOpen', 'isMenuWallOpen')}
            sql={sql}
            selectedFacets={selectedFacets}
            token={token}
            entityId={synapseId}
          />
        }
        {
          isExpanded
          &&
          <Modal         
            animation={false}
            centered={true}
            show={true}
            // @ts-ignore
            onHide={this.toggleStateVariables('isExpanded')}
            dialogClassName={'modal-90w'}
          >
            <Modal.Header 
              // @ts-ignore
              onHide={this.toggleStateVariables('isExpanded')} 
              closeButton={true}
            >
            </Modal.Header>
            <Modal.Body>
              {content}
            </Modal.Body>
          </Modal>
        }
        {
          !isExpanded
          &&
          content
        }
    </React.Fragment>
    )
  }

  private showGroupRowData = (selectedRow: Row) => (_event: React.MouseEvent<HTMLAnchorElement>) => {
    // magic happens - parse query, deep copy query bundle request, modify, encode, send to Synapse.org.  Easy!
    const queryCopy = cloneDeep(this.props.getLastQueryRequest!().query)
    const parsed = this.getSqlUnderlyingDataForRow(
      selectedRow,
      queryCopy.sql)
    queryCopy.sql = parsed.newSql
    const queryJSON = JSON.stringify(queryCopy)
    // encode this copy of the query (json)
    const encodedQuery = btoa(queryJSON)
    // open this in a new window on synapse.org
    window.open(`https://www.synapse.org/#!Synapse:${parsed.synId}/tables/query/${encodedQuery}`, '_self')
  }

  private renderDropdownDownloadOptions = () => {
    const { isDropdownDownloadOptionsOpen, isExpanded } = this.state
    const tooltipAdvancedSearchId = 'openAdvancedSearch'
    const tooltipDownloadId = 'download'
    const toggleStateArgs: BooleanKeys<SynapseTableState> [] = ['isModalDownloadOpen']
    // we don't want two modals to show at once, so we close out the expanded view if its already showing
    if (isExpanded) {
      toggleStateArgs.push('isExpanded')
    }
    return (
      <span className={`dropdown ${DOWNLOAD_OPTIONS_CONTAINER_CLASS} ${isDropdownDownloadOptionsOpen ? 'open' : ''}`}>
        <button 
          style={{ marginLeft: '10px' }}
          data-for={tooltipDownloadId} 
          data-tip="Download Options"
          className="SRC-primary-background-color-hover SRC-extraPadding SRC-hand-cursor" 
          onClick={this.toggleStateVariables('isDropdownDownloadOptionsOpen', 'isMenuWallOpen')}
        >
          <FontAwesomeIcon size="1x" color="white" icon="download" />
        </button>
        <ReactTooltip 
          delayShow={TOOLTIP_DELAY_SHOW}
          place="top"
          type="dark"
          effect="solid"
          id={tooltipAdvancedSearchId} 
        />
        <ul className="SRC-table-dropdown-zindex dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenu1">
          <li
            style={{ listStyle: 'none' }}
            className="SRC-table-dropdown-list SRC-primary-background-color-hover"
            onClick={this.toggleStateVariables(...toggleStateArgs)}
          >
            <a href="javascript:void">
              Export Metadata
            </a>
          </li>
          <li
            style={{ listStyle: 'none' }}
            className="SRC-table-dropdown-list SRC-primary-background-color-hover"
            onClick={this.advancedSearch}
          >
            <a href="javascript:void">
              { DOWNLOAD_FILES_MENU_TEXT }
            </a>
          </li>
        </ul>
      </span>
    )
  }

  private renderDropdownColumnMenu = (headers: SelectColumn[]) => {
    const { isDropdownColumnMenuOpen } = this.state
    const tooltipColumnSelectionId = 'addAndRemoveColumns'
    let addRemoveColClasses  = 'SRC-inlineFlex SRC-primary-background-color-hover  dropdown-toggle SRC-hand-cursor'
    addRemoveColClasses += (isDropdownColumnMenuOpen ? 'SRC-primary-background-color' : '')
    return (
      <span style={{marginLeft: 10, height: 30, width: 34, padding: 1}} className={`dropdown ${isDropdownColumnMenuOpen ? 'open' : ''}`}>  
        <span 
          tabIndex={0} 
          data-for={tooltipColumnSelectionId} 
          data-tip="Add / Remove Columns" 
          className={addRemoveColClasses} 
          onKeyPress={this.toggleStateVariables('isDropdownColumnMenuOpen', 'isMenuWallOpen')} 
          onClick={this.toggleStateVariables('isDropdownColumnMenuOpen', 'isMenuWallOpen')} 
          id="dropdownMenu1"
        >
          <img alt="columns selection" src={ColumnsSvg}/>
        </span>
        <ReactTooltip 
          delayShow={TOOLTIP_DELAY_SHOW} 
          place="top" 
          type="dark" 
          effect="solid" 
          id={tooltipColumnSelectionId} 
        />
        <ul className="SRC-table-dropdown-zindex dropdown-menu dropdown-menu-right SRC-column-menu" aria-labelledby="dropdownMenu1">
          {this.renderDropdownColumnMenuItems(headers)}
        </ul>
      </span>
    )
  }

  private renderTable = (headers: SelectColumn[], facets: FacetColumnResult[], rows: Row[]) => {
    // handle displaying the previous button -- if offset is zero then it
    // shouldn't be displayed
    const pastZero: boolean = this.props.getLastQueryRequest!().query.offset! > 0
    const previous = (
      <button
        onClick={this.handlePaginationClick(PREVIOUS)}
        className="SRC-light-button SRC-standard-button-shape pull-right"
        type="button"
      >
        Previous
      </button>
    )

    const hasMoreData = this.props.hasMoreData
    const next = (
      (
        <button
          onClick={this.handlePaginationClick(NEXT)}
          className="SRC-light-button SRC-standard-button-shape pull-right"
          type="button"
        >
          Next
        </button>
      )
    )

    /* min height ensure if no rows are selected that a dropdown menu is still accessible */
    return (
      <div style={{ minHeight: '300px' }} className="SRC-overflowAuto">
        <table className="table table-striped table-condensed">
          <thead className="SRC_borderTop">
            <tr>
              {this.createTableHeader(headers, facets)}
            </tr>
          </thead>
          <tbody>{this.createTableRows(rows, headers)}</tbody>
        </table>
        {hasMoreData && next}
        {pastZero && previous}
      </div>
    )
  }

  private renderTableTop = (headers: SelectColumn[] ) => {
    const {
      title,
    } = this.props
    const { isExpanded } = this.state
    const tooltipExpandId = 'expand'
    const tooltipAdvancedSearchId = 'openAdvancedSearch'
    const tooltipDownloadId = 'download'
    const { colorPalette } = getColorPallette(this.props.rgbIndex!, 1)
    const backgroundColor = colorPalette[0]
    return (
      <div 
        className="SRC-centerContent" 
        style={{ background: backgroundColor, padding: 8 }}
      >
        <h3 className="SRC-tableHeader"> {title}</h3>
        <span 
          className="SRC-inlineFlex"
          style={{ marginLeft: 'auto' }}
          >
            {!isGroupByInSql(this.props.getLastQueryRequest!().query.sql)
                &&
                <>
                  <span 
                    tabIndex={0}
                    data-for={tooltipAdvancedSearchId}
                    data-tip="Open Advanced Search in Synapse" 
                    className="SRC-primary-background-color-hover SRC-extraPadding SRC-hand-cursor"
                    onKeyPress={this.advancedSearch}
                    onClick={this.advancedSearch}
                  >
                    <FontAwesomeIcon 
                      size="1x"
                      color="white"
                      icon={'filter'}
                    />
                  </span>
                <ReactTooltip 
                  delayShow={TOOLTIP_DELAY_SHOW} 
                  place="top"
                  type="dark"
                  effect="solid"
                  id={tooltipDownloadId} 
                />
                {this.renderDropdownDownloadOptions()}
                {this.renderDropdownColumnMenu(headers)}
              </>
            }
            <span
              tabIndex={0}
              data-for={tooltipExpandId} 
              data-tip="Expand table in full screen"
              className={`SRC-primary-background-color-hover SRC-inlineFlex SRC-extraPadding SRC-hand-cursor ${EXPAND_CLASS}`}
              onKeyPress={this.toggleStateVariables('isExpanded')} 
              onClick={this.toggleStateVariables('isExpanded')}
            >
              {isExpanded ? <img src={ShrinkSvg} alt="shrink table" /> : <img src={ExpandSvg} alt="expand table" />}
            </span>
            <ReactTooltip
              delayShow={TOOLTIP_DELAY_SHOW}
              place="top"
              type="dark"
              effect="solid"
              id={tooltipExpandId} 
            />
          </span>
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
      for (let index = selectIndex + 1; index < fromIndex - selectIndex - 1; index += 1) {
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
    originalSql: string
  ): { synId: string, newSql: string } {
    let tokens: string[][] = lexer.tokenize(originalSql)
    const selectIndex = tokens.findIndex(el => el[0] === 'SELECT')
    const fromIndex = tokens.findIndex(el => el[0] === 'FROM')

    // gather all of the column names literals between select and from (and their indices)
    const columnReferences: ColumnReference[] = []
    let columnIndex = 0
    let foundFunctionForColumn = false
    for (let index = selectIndex + 1; index < fromIndex - selectIndex - 1; index += 1) {
      const token = tokens[index]
      // parsing error.  concat function is reported as a LITERAL instead of a function
      if (token[0] === 'FUNCTION' || token[1].toLocaleLowerCase() === 'concat') {
        foundFunctionForColumn = true
      } else if (token[0] === 'LITERAL' && !foundFunctionForColumn) {
        // found a column
        columnReferences.push({index: columnIndex, name: token[1]})
      } else if (token[0] === 'SEPARATOR') {
        // next column
        columnIndex += 1
        // reset "found function"
        foundFunctionForColumn = false
      }
    }

    // remove all tokens after (and including) group
    tokens = tokens.slice(0, tokens.findIndex(el => el[0] === 'GROUP'))
    // replace all columns with *
    tokens.splice(selectIndex + 1, fromIndex - selectIndex - 1, ['STAR', '*', '1'])
    // add new items to where clause, but only if the column name corresponds to a real column in the table/view!
    // use row.values
    if (this.props.data === undefined) {
      return { synId: '', newSql: '' }
    }
    const whereIndex = tokens.findIndex(el => el[0] === 'WHERE')
    if (whereIndex === -1) {
      // does not contain a where clause
      tokens.push(
        ['WHERE', 'WHERE', '1'],
      )
    } else {
      // alreay contains a where clause, add the first AND
      tokens.push(
        ['CONDITIONAL', 'AND', '1'],
      )
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
  private handlePaginationClick = (eventType: string) => (_event: React.MouseEvent<HTMLButtonElement>) => {
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
    columnIconSortState[dict.index] = (columnIconSortState[dict.index] + 1) % ICON_STATE.length
    if (columnIconSortState[dict.index] > 0) {
      sortedColumnSelection.unshift({
        column: dict.name,
        direction: SORT_STATE[columnIconSortState[dict.index]]
      })
    }
    const queryRequest = this.props.getLastQueryRequest!()
    queryRequest.query.sort = sortedColumnSelection
    this.props.executeQueryRequest!(queryRequest)
    this.setState({
      columnIconSortState,
      sortedColumnSelection
    })
  }

  /**
   * Renders the dropdown menu to the top right of table that allows users
   * to toggle a columnn from the view of the table
   *
   * @private
   * @param {SelectColumn[]} headers
   * @returns {React.ReactNode}
   * @memberof SynapseTable
   */
  private renderDropdownColumnMenuItems = (headers: SelectColumn[]) => {
    return headers.map((header: any, index: number) => {
      let isColumnSelected: boolean | undefined = this.state.isColumnSelected[index]
      // if visibleColumnCount is not defined then show all columns
      const { visibleColumnCount = Infinity } = this.props
      if (isColumnSelected === undefined) {
        isColumnSelected = (index < visibleColumnCount)
      }
      const iconStyle: any = { width: '11px', marginRight: '10px' }
      if (!isColumnSelected) {
        iconStyle.visibility = 'hidden'
      }
      const maybeShowPrimaryColor = isColumnSelected ? 'SRC-primary-text-color' : ''

      return (
        <li
          style={{ listStyle: 'none' }}
          className="SRC-table-dropdown-list SRC-primary-background-color-hover "
          key={header.name}
          onClick={this.toggleColumnSelection(index)}
        >
          <a href="javascript:void">
            <FontAwesomeIcon
              style={iconStyle}
              className={maybeShowPrimaryColor}
              icon="check"
            />
            {header.name}
          </a>
        </li>
      )
    })
  }
  private createTableRows(rows: Row [], headers: SelectColumn[]) {
    const rowsFormatted: JSX.Element[] = []
    const { isColumnSelected, mapEntityIdToHeader, mapUserIdToHeader } = this.state
    const entityColumnIndicies = this.getColumnIndiciesWithType('ENTITYID')
    const userColumnIndicies = this.getColumnIndiciesWithType('USERID')
    const isColumnSelectedLen = isColumnSelected.length
    // find column indices that are COUNT type
    const countColumnIndexes = this.getCountFunctionColumnIndexes(this.props.getLastQueryRequest!().query.sql)
    const {
      visibleColumnCount = Infinity
    } = this.props
    rows.forEach((row: any, rowIndex) => {
      const rowContent = row.values.map(
        (columnValue: string, colIndex: number) => {
          const columnName = headers[colIndex].name
          const index = this.findSelectionIndex(this.state.sortedColumnSelection, columnName)
          const usedVisibleColumnCount = isGroupByInSql(this.props.getLastQueryRequest!().query.sql) ?  Infinity: visibleColumnCount
          // on iniital load isColumnSelected is null and we by default show all columns that come
          // before visibileColumnCount
          const isColumnActiveInitLoad: boolean = colIndex < usedVisibleColumnCount && isColumnSelectedLen === 0
          // past the initial load -- when a user has started clicking items, then isColumnSelected is
          // not null and we verify that this column is part of the selection.
          const isColumnActivePastInitLoad = isColumnSelectedLen !== 0 && this.state.isColumnSelected[colIndex]
          const isCountColumn = countColumnIndexes.includes(colIndex)
          const isBold = index === -1 ? '' : 'SRC-boldText'
          if (isColumnActiveInitLoad || isColumnActivePastInitLoad) {
            return (
              <td className="SRC_noBorderTop" key={`(${rowIndex}${columnValue}${colIndex})`}>
                  {
                    isCountColumn &&
                    <a href="javascript:void" onClick={this.showGroupRowData(row)}>
                      <p className={isBold}>{columnValue}</p>
                    </a>
                  }
                  {
                    !isCountColumn &&
                    this.renderTableCell({ entityColumnIndicies, userColumnIndicies, colIndex, columnValue, isBold, mapEntityIdToHeader, mapUserIdToHeader })
                  }
              </td>
            )
          }
          return (<td className="SRC-hidden" key={`(${rowIndex},${colIndex})`}/>)
        })
      const rowFormatted = (
        <tr key={row.rowId}>{rowContent}</tr>
      )
      rowsFormatted.push(rowFormatted)
    })
    return rowsFormatted
  }

  // Render table cell, supports Entity's and User Icons
  public renderTableCell(
    { 
      entityColumnIndicies,
      userColumnIndicies,
      colIndex,
      columnValue,
      isBold,
      mapEntityIdToHeader,
      mapUserIdToHeader
    }:{ 
      entityColumnIndicies: number[]; 
      userColumnIndicies: number[];
      colIndex: number;
      columnValue: string;
      isBold: string; 
      mapEntityIdToHeader: Dictionary<EntityHeader>,
      mapUserIdToHeader: Dictionary<any>
    }): React.ReactNode {
    if (entityColumnIndicies.includes(colIndex) &&  Object.prototype.hasOwnProperty.call(mapEntityIdToHeader, columnValue)) {
      return <EntityLink entityHeader={mapEntityIdToHeader[columnValue]} className={isBold} />
    } else if (userColumnIndicies.includes(colIndex) && Object.prototype.hasOwnProperty.call(mapUserIdToHeader, columnValue)) {
      const { ownerId, userName } = mapUserIdToHeader[columnValue]
      if (mapUserIdToHeader[columnValue].isIndividual === false) {
        // isUserGroupHeader
        const icon = userName === AUTHENTICATED_USERS ? 'globe-americas': 'users'
        if (userName === AUTHENTICATED_USERS) {
          return <span ><FontAwesomeIcon icon={icon}/> All registered Synapse users </span>
        }
        return (<a rel="noopener noreferrer" href={`https://www.synapse.org/#!Team:${ownerId}`}> <FontAwesomeIcon icon={icon}/> {userName} </a>)
      } else {
        // isUserCard
        return  (
          <UserCard 
            userProfile={mapUserIdToHeader[columnValue]} 
            preSignedURL={mapUserIdToHeader[columnValue].clientPreSignedURL}
            size={'SMALL USER CARD'}
          />
        )
      }
    } else {
      return (<p className={isBold}> {columnValue} </p>)
    }
  }

  private createTableHeader(headers: SelectColumn[], facets: FacetColumnResult[]) {
    const { isColumnSelected, sortedColumnSelection, columnIconSortState } = this.state
    const { visibleColumnCount = Infinity, facetAliases = {} } = this.props
    const usedVisibleColumnCount = isGroupByInSql(this.props.getLastQueryRequest!().query.sql) ? Infinity: visibleColumnCount
    return headers.map((column: SelectColumn, index: number) => {
      // two cases when rendering the column headers on init load
      // of the page we have to show only this.props.visibleColumnCount many
      // columns, afterwards we rely on the isColumnSelected to get choices
      const initRender: boolean = index < usedVisibleColumnCount && isColumnSelected.length === 0
      const subsequentRender = isColumnSelected[index] && isColumnSelected.length !== 0
      if (initRender || subsequentRender) {
        // for background color
        const isSelected: boolean = this.findSelectionIndex(sortedColumnSelection, column.name) !== -1
        // for icon state
        const columnIndex: number = columnIconSortState[index] === undefined ? 0 : columnIconSortState[index]
        // we have to figure out if the current column is a facet selection
        const facetIndex: number = facets.findIndex((facetColumnResult: FacetColumnResult) => {
          const facetDisplayValue = facetAliases[facetColumnResult.columnName] || facetColumnResult.columnName
          return facetDisplayValue === column.name
        })
        // the header must be included in the facets and it has to be enumerable for current rendering capabilities
        const isFacetSelection: boolean = facetIndex !== -1 && facets[facetIndex].facetType === 'enumeration'
        const isSelectedSpanClass = (isSelected ? 'SRC-primary-background-color SRC-anchor-light' : '')
        const isSelectedIconClass = isSelected ? 'SRC-selected-table-icon' : 'SRC-primary-text-color'
        const sortSpanBackgoundClass = `SRC-tableHead SRC-hand-cursor SRC-sortPadding SRC-primary-background-color-hover  ${isSelectedSpanClass}`
        return (
          <th key={column.name}>
            <div className="SRC-centerContent">
              <span style={{ whiteSpace: 'nowrap' }}>
              {column.name}
              </span>
              {isFacetSelection && this.configureFacetDropdown(index, facets, facetIndex)}
              <span
                tabIndex={0}
                className={sortSpanBackgoundClass}
                onKeyPress={this.handleColumnSortPress({ index, name: column.name })}
                onClick={this.handleColumnSortPress({ index, name: column.name })}
              >
                <FontAwesomeIcon
                  className={`SRC-primary-background-color-hover  ${isSelectedIconClass}`}
                  icon={ICON_STATE[columnIndex] as IconProp}
                />
              </span>
            </div>
          </th>
        )
      } else {
        return <th className="SRC-hidden" key={column.name} />
      }
    })
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
  private findSelectionIndex(sortedColumnSelection: SortItem [], name: string) {
    if (sortedColumnSelection.length !== 0) {
      // find if the current selection exists already and remove it
      return sortedColumnSelection.findIndex((el: SortItem) => el.column === name)
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
    const synTable = this.props.synapseId
    window.open(`https://www.synapse.org/#!Synapse:${synTable}/tables/query/${encodedQuery}`, '_self')
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
  public toggleColumnSelection = (index: number) => (event: React.MouseEvent<HTMLLIElement>) => {
    event.preventDefault()
    let isColumnSelected: boolean []
    // lazily initialize isColumnSelected, at first it's empty
    // and then on first column click we set it
    if (this.state.isColumnSelected.length === 0) {
      const { visibleColumnCount = Infinity } = this.props
      // unpack all the data
      const lengthOfPropsData = this.getLengthOfPropsData()
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
      isColumnSelected = defaultSelection
    } else {
      isColumnSelected = cloneDeep(this.state.isColumnSelected)
    }
    isColumnSelected[index] = !isColumnSelected[index]
    this.setState({ isColumnSelected })
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
  public configureFacetDropdown(index: number, facetColumnResults: FacetColumnResult[], facetIndex: number) {

    // this grabs the specific facet selection
    const facetColumnResult = facetColumnResults[facetIndex] as FacetColumnResultValues
    const columnName = facetColumnResult.columnName

    // this is related to whether we've selected this column or not
    const isCurFilterSelected = this.state.activeFilterIndex === index

    const ref: React.RefObject<HTMLSpanElement> = React.createRef()
    const refOuterDiv: React.RefObject<HTMLDivElement> = React.createRef()

    const applyPrimary = isCurFilterSelected ? 'SRC-primary-background-color' : 'SRC-primary-text-color'
    const classList = isCurFilterSelected ? this.state.activeFilterClass : ''
    const style = { alignItems: 'center', marginLeft: '10px', marginRight: '3px', color: 'black', display: 'flex' }
    const isChecked = this.props.isAllFilterSelectedForFacet![columnName]
    return (
      <div
        ref={refOuterDiv}
        style={style}
        className={`SRC-table-dropdown-zindex SRC-table-facet-dropdown btn-group SRC-tableHead ${isCurFilterSelected ? 'open SRC-anchor-light' : ''}`}
      >
        <span
          tabIndex={0}
          className={`SRC-padding SRC-hand-cursor SRC-primary-background-color-hover ${applyPrimary}`}
          onKeyPress={this.toggleFilterDropdown(index, isCurFilterSelected, refOuterDiv)}
          onClick={this.toggleFilterDropdown(index, isCurFilterSelected, refOuterDiv)}
          style={{ outline: 'none' }}
        >
          <FontAwesomeIcon
            style={{ margin: 'auto' }}
            size={'1x'}
            className={applyPrimary}
            color={isCurFilterSelected ? 'white' : ''}
            icon="filter"
          />
        </span>

        <div style={{paddingLeft: 20}} className={`dropdown-menu dropdown-menu-override SRC-minDropdownWidth ${classList}`}>
          <ul style={{ listStyleType: 'none' }} className="scrollable checkbox">
            <label
              className="dropdownList SRC-border-bottom-only SRC-overflowWrap SRC-base-font SRC-fullWidth"
              style={{paddingBottom: 10}}
            >
            <input
              onClick={this.applyChanges({ ref, columnName, selector: SELECT_ALL })}
              checked={isChecked}
              className="SRC-facet-checkboxes"
              type="checkbox"
              />
              <span> All </span>
            </label>
            <span ref={ref}>
              {this.renderFacetSelection(facetColumnResult, ref, columnName)}
            </span>
          </ul>
        </div>
      </div>
    )
  }

  // This closes out all the dropdowns, since the button calling this method is only rendered if the dropdown
  // is visible then we can safely close out all dropdowns without checking them
  public closeAllDropdowns(_: React.SyntheticEvent) {
    // this ensures all dropdown variables are set to false and any additional dropdowns added are added to this list
    const dropdownKeys: BooleanKeys<SynapseTableState> [] = [
      'isDropdownColumnMenuOpen',
      'isDropdownDownloadOptionsOpen',
      'isModalDownloadOpen',
      'isMenuWallOpen'
    ]
    const updatedState = {
      activeFilterClass: '',
      activeFilterIndex: -1,
    }
    dropdownKeys.forEach(
      el => {
        updatedState[el] = false
      }
    )
    this.setState(updatedState)
  }

  public renderFacetSelection(
    facetColumnResult: FacetColumnResultValues,
    ref: React.RefObject<HTMLSpanElement>,
    columnName: string,
  ): React.ReactNode {

    const { lastFacetSelection, isLoading, isAllFilterSelectedForFacet } = this.props
    return facetColumnResult.facetValues.map(
      (facetColumnResultValueCount: FacetColumnResultValueCount) => {
        const { value: facetValue, count } = facetColumnResultValueCount
        let displayValue = facetValue
        if (displayValue === 'org.sagebionetworks.UNDEFINED_NULL_NOTSET') {
          displayValue = 'unannotated'
        }
        const key = columnName + facetValue + count 
        const isValueSelected = isAllFilterSelectedForFacet![columnName] ? false :  getIsValueSelected({
          columnName,
          isLoading,
          lastFacetSelection,
          curFacetSelection: facetColumnResultValueCount,
        })
        return (
          <li className="checkbox SRC-table-checkbox" key={key}>
            <label className="dropdownList SRC-overflowWrap SRC-base-font SRC-fullWidth">
              <input
                onChange={this.applyChanges({ ref, columnName, facetValue })}
                checked={isValueSelected}
                className="SRC-facet-checkboxes"
                type="checkbox"
                value={facetValue}
                />
              <span>
                {displayValue}
                <span style={{ color: '#DDDDDF', marginLeft: '3px' }}> ({count}) </span>
              </span>
            </label>
          </li>
        )
      })
  }

  /**
   * When the user decides to submit their changes for the dropdown menu with the facet, they have an
   * apply button, this method handles that submission.
   *
   * @memberof SynapseTable
   */
  public applyChanges = ({
      ref,
      columnName,
      facetValue = '',
      selector = '',
    }: {
      ref: React.RefObject<HTMLSpanElement>,
      columnName: string,
      facetValue?: string,
      selector?: string,
    }) => (_: React.SyntheticEvent<HTMLElement>) => {
      const htmlCheckboxes = Array.from(ref.current!.querySelectorAll('.SRC-facet-checkboxes')) as HTMLInputElement []
      const queryRequest: QueryBundleRequest = this.props.getLastQueryRequest!()
      const { isAllFilterSelectedForFacet } = this.props
      const { newQueryRequest } = readFacetValues({
        htmlCheckboxes,
        queryRequest,
        selector,
        facet: columnName
      })

      const lastFacetSelection = {
        columnName,
        facetValue,
        selector
      } as FacetSelection
      isAllFilterSelectedForFacet![columnName] = selector === SELECT_ALL
      this.props.updateParentState!({
        lastFacetSelection,
        isAllFilterSelectedForFacet
      })

      this.props.executeQueryRequest!(newQueryRequest)
    }

  public toggleFilterDropdown =
   (index: number, isCurFilterSelected: boolean, refOuterDiv: React.RefObject<HTMLDivElement>) => (_event: any) => {
     // The dropdown is located inside of a scrollable, to know whether the current filter menu item is near the
     // front of the scrollable we can examine its parent bounding rect -- this gives a relative value
     // (that changes on scroll) of the filter to a fixed left most point.
     const tHeadLeftPosition = refOuterDiv.current!.parentElement!.getBoundingClientRect().left
     const activeFilterClass = tHeadLeftPosition < MIN_SPACE_FACET_MENU ?
       'SRC-forceLeftDropdown dropdown-menu-left' : 'dropdown-menu-right'
     // set the class names for this dropdown item
     this.setState({
       activeFilterClass,
       activeFilterIndex: index,
       isDropdownColumnMenuOpen: false,
       isMenuWallOpen: !isCurFilterSelected
     })
   }
}

type ColumnReference = {
  index: number,
  name: string
}
