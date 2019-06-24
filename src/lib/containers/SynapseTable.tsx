import { IconProp, library } from '@fortawesome/fontawesome-svg-core'
import { faCheck,
         faColumns,
         faDatabase,
         faFilter,
         faSort,
         faSortAmountDown,
         faSortAmountUp,
         faTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as React from 'react'
// tslint:disable-next-line
import ReactTooltip from "react-tooltip"
import { FacetColumnResult,
         FacetColumnResultValueCount,
         FacetColumnResultValues
} from '../utils/jsonResponses/Table/FacetColumnResult'
import { QueryBundleRequest } from '../utils/jsonResponses/Table/QueryBundleRequest'
import { Row } from '../utils/jsonResponses/Table/QueryResult'
import { SelectColumn } from '../utils/jsonResponses/Table/SelectColumn'
import { getColorPallette } from './ColorGradient'
import { QueryWrapperChildProps, FacetSelection } from './QueryWrapper'
import { cloneDeep } from '../utils/modules/'
import { SortItem } from '../utils/jsonResponses/Table/Query'
import { getIsValueSelected, readFacetValues } from '../utils/modules/facetUtils'
import { lexer } from 'sql-parser'
import { ColumnModel } from '../utils/jsonResponses/Table/ColumnModel'
import { formatSQLFromParser } from '../utils/modules/sqlFunctions'

const MIN_SPACE_FACET_MENU = 700

// Add all icons to the library so you can use it in your page
library.add(faColumns)
library.add(faSort)
library.add(faSortAmountUp)
library.add(faSortAmountDown)
library.add(faCheck)
library.add(faTimes)
library.add(faFilter)
library.add(faDatabase)
// Hold constants for next and previous button actions
const NEXT = 'NEXT'
const PREVIOUS = 'PREVIOUS'
export const SELECT_ALL = 'SELECT_ALL'
export const DESELECT_ALL = 'DESELECT_ALL'
// double check these icons!
export const ICON_STATE: string [] = ['sort-amount-down', 'sort-amount-down', 'sort-amount-up']
type direction = ''|'ASC'|'DESC'
export const SORT_STATE: direction [] = ['', 'DESC', 'ASC']
type Info = {
  index: number
  name: string
}
// look for "group by", multi-line and case insensitive
const GROUP_BY_REGEX = /group by/mi
export type SynapseTableState = {
  sortedColumnSelection: SortItem []
  offset: number
  isOpen: boolean
  isColumnSelected: boolean[]
  columnIconSortState: number[],
  isFilterSelected: boolean []
  filterClassList: string [],
  menuWallIsActive: boolean,
}

export type SynapseTableProps = {
  visibleColumnCount?: number
  synapseId: string
  title: string
}

export default class SynapseTable extends React.Component<QueryWrapperChildProps &
                                                          SynapseTableProps, SynapseTableState> {

  constructor(props: QueryWrapperChildProps & SynapseTableProps) {
    super(props)
    this.handleColumnSortPress = this.handleColumnSortPress.bind(this)
    this.handlePaginationClick = this.handlePaginationClick.bind(this)
    this.findSelectionIndex = this.findSelectionIndex.bind(this)
    this.toggleColumnSelection = this.toggleColumnSelection.bind(this)
    this.toggleMenuWall = this.toggleMenuWall.bind(this)
    this.advancedSearch = this.advancedSearch.bind(this)
    this.download = this.download.bind(this)
    this.getLengthOfPropsData = this.getLengthOfPropsData.bind(this)
    this.configureFacetDropdown = this.configureFacetDropdown.bind(this)
    this.closeMenuClickHandler = this.closeMenuClickHandler.bind(this)
    this.showPaginationButtons = this.showPaginationButtons.bind(this)
    this.useFacetAliasIfDefined = this.useFacetAliasIfDefined.bind(this)
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
      filterClassList: Array(100).fill(''),
      isColumnSelected: [],
      isFilterSelected: Array(100).fill(false),
      isOpen: false,
      menuWallIsActive: false,
      offset: 0,
      // sortedColumnSelection contains the columns which are
      // selected currently and their sort status as eithet
      // off, desc, or asc.
      sortedColumnSelection: [],
    }
    this.renderFacetSelection = this.renderFacetSelection.bind(this)
  }

  public useFacetAliasIfDefined(facetName: string) {
    const { facetAliases = {} } = this.props
    return facetAliases[facetName] || facetName
  }

  public isGroupByInSql(sql?: string): boolean {
    const testSql = sql ? sql : this.props.getLastQueryRequest!().query.sql
    return GROUP_BY_REGEX.test(testSql)
  }
    /**
     * Display the view
     */
  public render() {
    if (this.props.data === undefined) {
      return (<div/>)
    }
    // unpack all the data
    const { data, filter, isLoading, unitDescription } = this.props
    const { queryResult } = data
    const { queryResults } = queryResult
    const { rows } = queryResults
    const { headers } = queryResults
    const { facets } = data
    const { colorPalette } = getColorPallette(this.props.rgbIndex!, 1)
    const backgroundColor = colorPalette[0]
    // handle displaying the previous button -- if offset is zero then it
    // shouldn't be displayed
    const pastZero: boolean = this.props.getLastQueryRequest!().query.offset! > 0

    const xData: any[] = []
    data.facets.forEach((item: any) => {
      if (item.facetType === 'enumeration' && item.columnName === filter) {
        item.facetValues.forEach(
          (facetValue: any) => {
            if (item.columnName) {
              xData.push({ columnName: item.columnName, ...facetValue })
            }
          })
      }
    })
    // edge case -- if they are all false then they are considered all true..
    // sum up the counts of data
    let anyTrue = false
    let totalAllFalseCase = 0
    let totalStandardCase = 0
    for (const key in xData) {
      if (xData.hasOwnProperty(key)) {
        anyTrue = anyTrue || xData[key].isSelected
        totalAllFalseCase += xData[key].count
        totalStandardCase += xData[key].isSelected ? xData[key].count : 0
      }
    }
    let total = anyTrue ? totalStandardCase : totalAllFalseCase

    if (rows.length === 0) {
      total = 0
    }

    const tooltipIdOne = 'openAdvancedSearch'
    const tooltipIdTwo = 'addAndRemoveColumns'
    const { menuWallIsActive, isOpen } = this.state
    const optionalHiddenClass: string = !menuWallIsActive ? 'hidden' : ''
    let addRemoveColClasses  = 'SRC-extraPadding SRC-primary-background-color-hover dropdown-toggle SRC-hand-cursor'
    addRemoveColClasses += (isOpen ? 'SRC-primary-background-color' : '')
    return (
      <React.Fragment>
        <button onClick={this.closeMenuClickHandler} className={`SRC-menu-wall ${optionalHiddenClass}`} />
        <div className="SRC-marginBottomTen">
          <p style={{ height:'20px' }}>
            {!isLoading && <strong> Showing {total} {unitDescription} </strong>}
            {isLoading &&
              <React.Fragment>
                <span className={'spinner'}/>
                <strong> {'    '} Table results updating...</strong>
              </React.Fragment>
            }
          </p>
        </div>
        <div className="SRC-padding SRC-centerContent" style={{ background: backgroundColor }}>
            <h3 className="SRC-tableHeader"> {this.props.title}</h3>
            <span style={{ marginLeft: 'auto', marginRight: '10px' }}>
                <span className={` dropdown ${this.state.isOpen ? 'open' : ''}`}>
                    <span
                        tabIndex={0}
                        data-for={tooltipIdOne}
                        data-tip="Open Advanced Search in Synapse"
                        className="SRC-primary-background-color-hover SRC-extraPadding SRC-hand-cursor"
                        onKeyPress={this.advancedSearch}
                        onClick={this.advancedSearch}
                    >
                        <FontAwesomeIcon size="1x" color="white"  icon="database"/>
                    </span>
                    <ReactTooltip
                        delayShow={1500}
                        place="bottom"
                        type="dark"
                        effect="solid"
                        id={tooltipIdOne}
                    />
                    {
                      !this.isGroupByInSql() &&
                      <React.Fragment>
                        <span
                            tabIndex={0}
                            data-for={tooltipIdTwo}
                            data-tip="Add / Remove Columns"
                            style={{ marginLeft: '10px' }}
                            className={addRemoveColClasses}
                            onKeyPress={this.toggleMenuWall}
                            onClick={this.toggleMenuWall}
                            id="dropdownMenu1"
                        >
                            <FontAwesomeIcon color="white" icon="columns"/>
                        </span>
                        <ReactTooltip
                            delayShow={1500}
                            place="bottom"
                            type="dark"
                            effect="solid"
                            id={tooltipIdTwo}
                        />
                        <ul className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenu1">
                            {this.renderDropdownColumnMenu(headers)}
                        </ul>
                      </React.Fragment>
                    }
                </span>
            </span>
        </div>
        {/* min height ensure if no rows are selected that a dropdown menu is still accessible */}
        <div style={{ minHeight: '300px' }} className="SRC-overflowAuto">
            <table className="table table-striped table-condensed">
                <thead className="SRC_borderTop">
                    <tr>
                        {this.createTableHeader(headers, facets)}
                    </tr>
                </thead>
                {<tbody>{this.createTableRows(rows, headers)}</tbody>}
            </table>
            {total > 0 && this.showPaginationButtons(pastZero)}
        </div>
      </React.Fragment>
    )
  }

  private showGroupRowData = (selectedRow: Row) => (_event: React.MouseEvent<HTMLAnchorElement>) => {
    // magic happens - parse query, deep copy query bundle request, modify, encode, send to Synapse.org.  Easy!
    const queryCopy = cloneDeep(this.props.getLastQueryRequest!().query)
    // unpack all the data
    const { data } = this.props
    const { queryResult, columnModels } = data!
    const { queryResults } = queryResult
    const { headers } = queryResults
    const parsed = this.getSqlUnderlyingDataForRow(
      selectedRow,
      queryCopy.sql,
      headers,
      columnModels)
    queryCopy.sql = parsed.newSql
    const queryJSON = JSON.stringify(queryCopy)
    // encode this copy of the query (json)
    const encodedQuery = btoa(queryJSON)
    // open this in a new window on synapse.org
    window.open(`https://www.synapse.org/#!Synapse:${parsed.synId}/tables/query/${encodedQuery}`, '_self')
  }

  /**
   * Return the select column indexes for columns that use the aggregate count function.
   * If sql does not have a GROUP BY, this returns an empty array.
   * @param originalSql
   */
  public getCountFunctionColumnIndexes(originalSql: string): number[] {
    const indexes: number[] = []
    if (this.isGroupByInSql(originalSql)) {
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
    originalSql: string,
    headers: SelectColumn[],
    columnModels: ColumnModel[]
  ): { synId: string, newSql: string } {
    let tokens: string[][] = lexer.tokenize(originalSql)
    // remove all tokens after (and including) group
    tokens = tokens.slice(0, tokens.findIndex(el => el[0] === 'GROUP'))
    // replace all columns with *
    const selectIndex = tokens.findIndex(el => el[0] === 'SELECT')
    const fromIndex = tokens.findIndex(el => el[0] === 'FROM')
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
    headers.map((header: any, index: number) => {
      const matchingColumnModel = columnModels!.find(columnModel => columnModel.name === header.name)
      if (matchingColumnModel) {
        const rowValue = selectedRow.values[index]
        tokens.push(
          ['LITERAL', matchingColumnModel.name, '1'],
          ['OPERATOR', '=', '1'],
          ['STRING', rowValue, '1'],
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

  private showPaginationButtons(pastZero: boolean): any {

    const previous = (
      <button
        onClick={this.handlePaginationClick(PREVIOUS)}
        className="SRC-primary-background-color-hover SRC-viewMoreButton pull-right"
        type="button"
      >
        Previous
      </button>
    )

    const next = (
      (
        <button
          onClick={this.handlePaginationClick(NEXT)}
          className="SRC-primary-background-color-hover SRC-viewMoreButton pull-right"
          type="button"
        >
          Next
        </button>
      )
    )

    return (
      <React.Fragment>
        {next}
        {pastZero && previous}
      </React.Fragment>
    )
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
  private renderDropdownColumnMenu(headers: SelectColumn[]): React.ReactNode {
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
          className="SRC-table-dropdown-list SRC-primary-background-color-hover"
          key={header.name}
          onClick={this.toggleColumnSelection(index)}
        >
          <a className="SRC-no-focus" href="">
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
    const { isColumnSelected } = this.state
    const isColumnSelectedLen = isColumnSelected.length
    // find column indices that are COUNT type
    const countColumnIndexes = this.getCountFunctionColumnIndexes(this.props.getLastQueryRequest!().query.sql)

    rows.forEach((row: any, i: any) => {
      const rowContent = row.values.map(
        (columnValue: string, j: number) => {
          const columnName = headers[j].name
          const index = this.findSelectionIndex(this.state.sortedColumnSelection, columnName)
          const { visibleColumnCount = Infinity } = this.props
          // on iniital load isColumnSelected is null and we by default show all columns that come
          // before visibileColumnCount
          const isColumnActiveInitLoad: boolean = j < visibleColumnCount && isColumnSelectedLen === 0
          // past the initial load -- when a user has started clicking items, then isColumnSelected is
          // not null and we verify that this column is part of the selection.
          const isColumnActivePastInitLoad = isColumnSelectedLen !== 0 && this.state.isColumnSelected[j]
          const isCountColumn = countColumnIndexes.includes(j)
          if (isColumnActiveInitLoad || isColumnActivePastInitLoad) {
            return (
              <td className="SRC_noBorderTop" key={`(${i}${columnValue}${j})`}>
                  {
                    isCountColumn &&
                    <a href="" onClick={this.showGroupRowData(row)}>
                      <p className={`${index === -1 ? '' : 'SRC-boldText'}`}>{columnValue}</p>
                    </a>
                  }
                  {
                    !isCountColumn &&
                    <p className={`${index === -1 ? '' : 'SRC-boldText'}`}>{columnValue}</p>
                  }
              </td>
            )
          }
          return (<td className="SRC-hidden" key={`(${i},${j})`}/>)
        })
      const rowFormatted = (
        <tr key={row.rowId}>{rowContent}</tr>
      )
      rowsFormatted.push(rowFormatted)
    })
    return rowsFormatted
  }

  private createTableHeader(headers: SelectColumn[], facets: FacetColumnResult[]) {
    const columnElements: JSX.Element[] = []
    const { isColumnSelected, sortedColumnSelection, columnIconSortState } = this.state
    const { visibleColumnCount = Infinity } = this.props
    headers.map((column: SelectColumn, index: number) => {
      // two cases when rendering the column headers on init load
      // of the page we have to show only this.props.visibleColumnCount many
      // columns, afterwards we rely on the isColumnSelected to get choices
      const initRender: boolean = index < visibleColumnCount && isColumnSelected.length === 0
      const subsequentRender = isColumnSelected[index] && isColumnSelected.length !== 0
      if (initRender || subsequentRender) {
        // for background color
        const isSelected: boolean = this.findSelectionIndex(sortedColumnSelection, column.name) !== -1
        // for icon state
        const columnIndex: number = columnIconSortState[index] === undefined ? 0 : columnIconSortState[index]
        // we have to figure out if the current column is a facet selection
        const facetIndex: number = facets.findIndex((facetColumnResult: FacetColumnResult) => {
          return this.useFacetAliasIfDefined(facetColumnResult.columnName) === column.name
        })
        // the header must be included in the facets and it has to be enumerable for current rendering capabilities
        const isFacetSelection: boolean = facetIndex !== -1 && facets[facetIndex].facetType === 'enumeration'
        const isSelectedSpanClass = (isSelected ? 'SRC-primary-background-color SRC-anchor-light' : '')
        const isSelectedIconClass = isSelected ? 'SRC-selected-table-icon' : 'SRC-primary-text-color'
        const sortSpanBackgoundClass = `SRC-tableHead SRC-hand-cursor SRC-sortPadding SRC-primary-background-color-hover ${isSelectedSpanClass}`
        columnElements.push(
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
        columnElements.push(<th className="SRC-hidden" key={column.name} />)
      }
    })
    return columnElements
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

  // TODO: implement this method
  private download() {
    return
  }

  // Direct user to synapse corresponding synapse table
  private advancedSearch(event: React.SyntheticEvent) {
    event.preventDefault()
    const lastQueryRequest = this.props.getLastQueryRequest!()
    const { query } = lastQueryRequest
        // base 64 encode the json of the query and go to url with the encoded object
    const encodedQuery = btoa(JSON.stringify(query))
    const synTable = this.props.synapseId
    window.open(`https://www.synapse.org/#!Synapse:${synTable}/tables/query/${encodedQuery}`, '_blank')
  }

  /**
   * Handles the opening and closing of the column select menu, this method
   * is only necessary because react overrides the behavior that bootstrap
   * embeds in its menus
   *
   * @memberof SynapseTable
   */
  public toggleMenuWall() {
    const { isOpen, isFilterSelected } = this.state

    if (!isOpen) {
      // the dropdown was closed coming into this method, so now it will be opened
      // so we activate the menu wall.
      for (let i = 0; i < isFilterSelected.length; i += 1) {
        isFilterSelected[i] = false
      }
      this.setState({ menuWallIsActive: true })
    } else {
      // dropdown was open coming into this method, so we activate the menu wall
      // to allow the dropdown to be closed
      this.setState({ menuWallIsActive: false })
    }

    this.setState({ isFilterSelected, isOpen: !isOpen })
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
    const isCurFilterSelected = this.state.isFilterSelected[index]

    const ref: React.RefObject<HTMLSpanElement> = React.createRef()
    const refOuterDiv: React.RefObject<HTMLDivElement> = React.createRef()

    const applyPrimary = isCurFilterSelected ? 'SRC-primary-background-color' : 'SRC-primary-text-color'
    const classList = this.state.filterClassList[index]
    const style = { alignItems: 'center', marginLeft: '10px', marginRight: '3px', color: 'black', display: 'flex' }

    return (
      <div
        ref={refOuterDiv}
        style={style}
        className={`SRC-table-facet-dropdown btn-group SRC-tableHead ${isCurFilterSelected ? 'open SRC-anchor-light' : ''}`}
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

        <div className={`dropdown-menu SRC-minDropdownWidth ${classList}`}>
          <div className="paddingMenuDropdown">
            <ul style={{ listStyleType: 'none' }} className="scrollable">
              <br />
              <label
                style={{ paddingBottom: '8px' }}
                className="dropdownList SRC-border-bottom-only SRC-overflowWrap SRC-base-font containerCheckbox"
              >
                All
                <input
                  onClick={this.applyChanges({ ref, columnName, selector: SELECT_ALL })}
                  checked={this.props.isAllFilterSelectedForFacet![columnName]}
                  className="SRC-facet-checkboxes"
                  type="checkbox"
                />
                <span className="checkmark" />
              </label>
              <span ref={ref}>
                {this.renderFacetSelection(facetColumnResult, ref, columnName)}
              </span>
            </ul>

          </div>
        </div>
      </div>
    )
  }

  public closeMenuClickHandler(_: React.SyntheticEvent) {
    const { menuWallIsActive } = this.state
    const isFilterSelected = cloneDeep(this.state.isFilterSelected)
    const filterClassList = cloneDeep(this.state.filterClassList)

    if (menuWallIsActive) {
      // need to close the menus and column select menu
      for (let i = 0; i < isFilterSelected.length; i += 1) {
        isFilterSelected[i] = false
        filterClassList[i] = ''
      }

      this.setState({
        filterClassList,
        isFilterSelected,
        isOpen: false,
        menuWallIsActive: false
      })
    }
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
          <li key={key}>
            <label className="dropdownList SRC-overflowWrap SRC-base-font containerCheckbox">
              {displayValue}
              <span style={{ color: '#DDDDDF', marginLeft: '3px' }}> ({count}) </span>
              <input
                onChange={this.applyChanges({ ref, columnName, facetValue })}
                checked={isValueSelected}
                className="SRC-facet-checkboxes"
                type="checkbox"
                value={facetValue}
              />
              <span className="checkmark" />
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
        filter: columnName
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
   (index: number, isCurFilterSelected: boolean, refOuterDiv: React.RefObject<HTMLDivElement>) => (_event?: any) => {
     const isFilterSelected = cloneDeep(this.state.isFilterSelected)
     const filterClassList = cloneDeep(this.state.filterClassList)
     isFilterSelected[index] = !isCurFilterSelected
     // close all the other filters menus
     for (let i = 0; i < isFilterSelected.length; i += 1) {
       if (i !== index) {
         isFilterSelected[i] = false
       }
     }
     // The dropdown is located inside of a scrollable, to know whether the current filter menu item is near the
     // front of the scrollable we can examine its parent bounding rect -- this gives a relative value
     // (that changes on scroll) of the filter to a fixed left most point.
     const tHeadLeftPosition = refOuterDiv.current!.parentElement!.getBoundingClientRect().left
     let classNames = '' //  the classes to be applied to the filter dropdown menu
     if (isFilterSelected[index]) {
       classNames = tHeadLeftPosition < MIN_SPACE_FACET_MENU ?
         'SRC-forceLeftDropdown dropdown-menu-left' : 'dropdown-menu-right'
     } else {
       classNames = ''
     }
     // set the class names for this dropdown item
     filterClassList[index] = classNames
     this.setState({
       filterClassList,
       isFilterSelected,
       isOpen: false,
       menuWallIsActive: !isCurFilterSelected
     })
   }
}
