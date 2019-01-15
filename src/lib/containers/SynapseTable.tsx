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
import * as PropTypes from 'prop-types'
import * as React from 'react'
// tslint:disable-next-line
import closeSvg from '../assets/icons/close.svg'
// tslint:disable-next-line
import ReactTooltip from "react-tooltip"
import { FacetColumnRequest } from '../utils/jsonResponses/Table/FacetColumnRequest'
import { FacetColumnResult,
         FacetColumnResultValueCount,
         FacetColumnResultValues
} from '../utils/jsonResponses/Table/FacetColumnResult'
import { QueryBundleRequest } from '../utils/jsonResponses/Table/QueryBundleRequest'
import { Row } from '../utils/jsonResponses/Table/QueryResult'
import { SelectColumn } from '../utils/jsonResponses/Table/SelectColumn'
import { getColorPallette } from './ColorGradient'
import { QueryWrapperChildProps } from './QueryWrapper'

const uuidv4 = require('uuid/v4')
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

const cloneDeep = require('lodash.clonedeep')
// Hold constants for next and previous button actions
const NEXT = 'NEXT'
const PREVIOUS = 'PREVIOUS'
const SELECT_ALL = 'SELECT_ALL'
const DESELECT_ALL = 'DESELECT_ALL'
// double check these icons!
const ICON_STATE: string [] = ['sort-amount-down', 'sort-amount-down', 'sort-amount-up']
const SORT_STATE = ['', 'ASC', 'DESC']

type Info = {
  index: number
  name: string
}

type SynapseTableState = {
  sortSelection: SortSelection []
  offset: number
  isOpen: boolean
  isColumnSelected: boolean[]
  columnIconState: number[],
  isFilterSelected: boolean []
  applyClickedArray: boolean []
  filterClassList: string [],
  menuWallIsActive: boolean
}

type SynapseTableProps = {
  visibleColumnCount?: number
  synapseId: string
  title: string
}

type SortSelection = {
  column: string
  name: string
}

export default class SynapseTable extends React.Component<QueryWrapperChildProps &
                                                          SynapseTableProps, SynapseTableState> {

  protected static propTypes = {
    synapseId: PropTypes.string,
    title: PropTypes.string,
    visibleColumnCount: PropTypes.number
  }

  constructor(props: QueryWrapperChildProps & SynapseTableProps) {
    super(props)
    this.handleColumnClick = this.handleColumnClick.bind(this)
    this.handlePaginationClick = this.handlePaginationClick.bind(this)
    this.findSelectionIndex = this.findSelectionIndex.bind(this)
    this.toggleColumnSelection = this.toggleColumnSelection.bind(this)
    this.toggleDropdown = this.toggleDropdown.bind(this)
    this.advancedSearch = this.advancedSearch.bind(this)
    this.download = this.download.bind(this)
    this.getLengthOfPropsData = this.getLengthOfPropsData.bind(this)
    this.configureFacetDropdown = this.configureFacetDropdown.bind(this)
    this.closeMenuClickHandler = this.closeMenuClickHandler.bind(this)
    this.showPaginationButtons = this.showPaginationButtons.bind(this)
        // store the offset and sorted selection that is currently held
    this.state = {
      applyClickedArray: Array(100).fill(false),
      columnIconState: [],
      filterClassList: Array(100).fill(''),
      isColumnSelected: [],
      isFilterSelected: Array(100).fill(false),
      isOpen: false,
      menuWallIsActive: false,
      offset: 0,
      sortSelection: []
    }
    this.renderFacetSelection = this.renderFacetSelection.bind(this)
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

    const tooltipIdOne = uuidv4()
    const tooltipIdTwo = uuidv4()
    const { menuWallIsActive, isOpen } = this.state
    const optionalHiddenClass: string = !menuWallIsActive ? 'hidden' : ''
    let addRemoveColClasses  = 'SRC-extraPadding SRC-primary-background-color-hover dropdown-toggle SRC-hand-cursor'
    addRemoveColClasses += (isOpen ? 'SRC-primary-background-color' : '')

    return (
      <React.Fragment>
          <button onClick={this.closeMenuClickHandler} className={`SRC-menu-wall ${optionalHiddenClass}`} />
          <div className="container-fluid">
              <div className="row SRC-marginBottomTen">
                  <span>
                      {!isLoading && <strong> Showing {total} {unitDescription} </strong>}
                      <span className={isLoading ? 'spinner' : ''} style={isLoading ? {} : { display: 'none' }} />
                      {isLoading && <strong> &nbsp;&nbsp; Table results updating... </strong>}
                  </span>
              </div>
          </div>
          <div className="container-fluid" >
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

                          <span
                              tabIndex={0}
                              data-for={tooltipIdTwo}
                              data-tip="Add / Remove Columns"
                              style={{ marginLeft: '10px' }}
                              className={addRemoveColClasses}
                              onKeyPress={this.toggleDropdown}
                              onClick={this.toggleDropdown}
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
                      </span>
                  </span>
              </div>
          </div>
          <div className="container-fluid">
              <div className="row SRC-overflowAuto">
                  <table className="table table-striped table-condensed">
                      <thead className="SRC_borderTop">
                          <tr>
                              {this.createTableHeader(headers, facets)}
                          </tr>
                      </thead>
                      {<tbody> {this.createTableRows(rows, headers)}</tbody>}
                  </table>
                  {total > 0 && this.showPaginationButtons(pastZero)}
              </div>
          </div>
      </React.Fragment>
    )
  }

  /**
   * Handle a click on next or previous
   *
   * @memberof SynapseTable
   */
  private handlePaginationClick = (eventType: string) => (event: React.MouseEvent<HTMLButtonElement>) => {
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
  private handleColumnClick = (dict: Info) => (event: React.SyntheticEvent) => {
    // by using Synthetic event we can use the handler on both key press and mouse click
    let columnIconState = cloneDeep(this.state.columnIconState)
    if (columnIconState.length === 0) {
      columnIconState = Array(this.getLengthOfPropsData()).fill(0)
    }
    // get currently sorted items and remove/insert this selection
    const sortSelection = cloneDeep(this.state.sortSelection)
    const index = this.findSelectionIndex(sortSelection, dict.name)
    if (index !== -1) {
      sortSelection.splice(index, 1)
    }
    columnIconState[dict.index] = (columnIconState[dict.index] + 1) % ICON_STATE.length
    if (columnIconState[dict.index] > 0) {
      sortSelection.unshift({
        column: dict.name,
        direction: SORT_STATE[columnIconState[dict.index]]
      })
    }
    const queryRequest = this.props.getLastQueryRequest!()
    queryRequest.query.sort = sortSelection
    this.props.executeQueryRequest!(queryRequest)
    this.setState({
      columnIconState,
      sortSelection
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

  private renderDropdownColumnMenu(headers: SelectColumn[]): React.ReactNode {
    return headers.map((header: any, index: number) => {
      let isColumnSelected: boolean | undefined = this.state.isColumnSelected[index]
      const { visibleColumnCount = 0 } = this.props
      if (isColumnSelected === undefined) {
        isColumnSelected = (index < visibleColumnCount) || (visibleColumnCount === 0)
      }
      const iconStyle: any = { width: '11px', marginRight: '10px' }
      if (!isColumnSelected) {
        iconStyle.visibility = 'hidden'
      }
      const maybeShowPrimaryColor = isColumnSelected ? 'SRC-primary-text-color' : ''

      return (
        <li
          style={{ listStyle: 'none' }}
          className="SRC-primary-background-color-hover SRC-nested-color"
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
    }
        )
  }

  private createTableRows(rows: Row [], headers: SelectColumn[]) {
    const rowsFormatted: JSX.Element[] = []
    const { isColumnSelected } = this.state
    const isColumnSelectedLen = isColumnSelected.length
    rows.forEach((expRow: any, i: any) => {
      const rowContent = expRow.values.map(
        (value: string, j: number) => {
          const columnName = headers[j].name
          const index = this.findSelectionIndex(this.state.sortSelection, columnName)
          const { visibleColumnCount = 0 } = this.props
            // we have to check if this column is selected under initial load
            // there are two cases:
            // 1. If the user has just clicked on the screen, we should show the column if its within
            // the limit of the rows specified
            // 2. If the visibleColumnCount is not specified or set to zero AND there have not been
            // any selections made then we don't show it
          let isRowActiveInit: boolean = j < visibleColumnCount && isColumnSelectedLen === 0
          isRowActiveInit = isRowActiveInit || (visibleColumnCount === 0 && isColumnSelectedLen === 0)
            // this is checking if the column is selected post load and interactions have taken place
          const isRowActiveSubsequent = isColumnSelectedLen !== 0 && this.state.isColumnSelected[j]
          if (isRowActiveInit || isRowActiveSubsequent) {
            return (
              <td className="SRC_noBorderTop" key={`(${i},${j})`}>
                  <p className={`${index === -1 ? '' : 'SRC-boldText'}`}> {value} </p>
              </td>
            )
          }
          return (<td key={`(${i},${j})`}/>)
        })

      const rowFormatted = (
        <tr key={expRow.rowId}>
          {rowContent}
        </tr>
      )
      rowsFormatted.push(rowFormatted)
    })
    return rowsFormatted
  }

  private createTableHeader(headers: SelectColumn[], facets: FacetColumnResult[]) {
    const { isColumnSelected, sortSelection, columnIconState } = this.state
    const { visibleColumnCount = 0 } = this.props

    return headers.map((column: SelectColumn, index: number) => {
      // two cases when rendering the column headers on init load
      // of the page we have to show only this.props.visibleColumnCount many
      // columns, afterwards we rely on the isColumnSelected to get choices
      let initRender: boolean = index < visibleColumnCount && isColumnSelected.length === 0
      initRender = initRender || (visibleColumnCount === 0 && isColumnSelected.length === 0)
      const subsequentRender = isColumnSelected[index] && isColumnSelected.length !== 0
      if (initRender || subsequentRender) {
        // for background color
        const isSelected: boolean = this.findSelectionIndex(sortSelection, column.name) !== -1
        // for icon state
        const columnIndex: number = columnIconState[index] === undefined ? 0 : this.state.columnIconState[index]
        // we have to figure out if the current column is a facet selection
        const facetIndex: number = facets.findIndex((value: FacetColumnResult) => {
          return value.columnName === column.name
        })
        const isFacetSelection: boolean = facetIndex !== -1
        const isSelectedSpanClass = (isSelected ? 'SRC-primary-background-color SRC-anchor-light' : '')
        const isSelectedIconClass = isSelected ? 'SRC-selected-table-icon' : 'SRC-primary-text-color'
        const sortSpanBackgoundClass = `SRC-tableHead SRC-hand-cursor SRC-sortPadding SRC-primary-background-color-hover ${isSelectedSpanClass}`
        return (
          <th key={column.name}>
            <div className="SRC-centerContent">
              {column.name}
              {isFacetSelection && this.configureFacetDropdown(index, facets, facetIndex)}
              <span
                tabIndex={0}
                className={sortSpanBackgoundClass}
                onKeyPress={this.handleColumnClick({ index, name: column.name })}
                onClick={this.handleColumnClick({ index, name: column.name })}
              >
                <FontAwesomeIcon
                  className={`SRC-primary-background-color-hover  ${isSelectedIconClass}`}
                  icon={ICON_STATE[columnIndex] as IconProp}
                />
              </span>
            </div>
          </th>
        )
      }
      return (<th key={column.name} />)
    })
  }

  /**
   * Utility to search through array of objects and find object with key "column"
   * equal to input parameter "name"
   *
   * @param {*} sortSelection
   * @param {*} name
   * @returns -1 if not present, otherwise the index of the object
   * @memberof SynapseTable
   */
  private findSelectionIndex(sortSelection: SortSelection [], name: string) {
    if (sortSelection.length !== 0) {
      // find if the current selection exists already and remove it
      return sortSelection.findIndex((el: SortSelection) => el.column === name)
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
  private toggleDropdown() {
    const { isOpen } = this.state
    const { isFilterSelected } = this.state

    if (!isOpen) {
      for (let i = 0; i < isFilterSelected.length; i += 1) {
        isFilterSelected[i] = false
      }
    }

    if (!isOpen) {
      // the dropdown was closed coming into this method, so now it will be opened
      // so we activate the menu wall.
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
  private toggleColumnSelection = (index: number) => (event: React.MouseEvent<HTMLLIElement>) => {
    event.preventDefault()
    // lazily update the component with this information
    // this only runs once
    let isColumnSelected: boolean []
    if (this.state.isColumnSelected.length === 0) {
      // unpack all the data
      const lengthOfPropsData = this.getLengthOfPropsData()
      let defaultSelection
      // fill visibleColumnCount with true and the rest as false
      if (this.props.visibleColumnCount === 0) {
        // if set to zero then its all true
        defaultSelection = Array(lengthOfPropsData).fill(true)
      } else {
        defaultSelection = Array(this.props.visibleColumnCount).fill(true)
        defaultSelection.push(...Array(lengthOfPropsData - this.props.visibleColumnCount!).fill(false))
      }
      isColumnSelected = defaultSelection
    } else {
      isColumnSelected = cloneDeep(this.state.isColumnSelected)
    }
    isColumnSelected[index] = !isColumnSelected[index]
    this.setState({ isColumnSelected })
  }

  /**
   *
   *
   * @param {number} index this is column index of the query table data
   * @param {string} columnName this is the name of the column
   * @param {FacetColumnResult[]} facetColumnResults
   * @param {number} facetIndex
   * @returns
   * @memberof SynapseTable
   */
  private configureFacetDropdown(index: number, facetColumnResults: FacetColumnResult[], facetIndex: number) {

    // this grabs the specific facet selection
    const facetColumnResult = facetColumnResults[facetIndex] as FacetColumnResultValues
    const columnName = facetColumnResult.columnName

    // this is related to whether we've selected this column or not
    const isCurFilterSelected = this.state.isFilterSelected[index]

    const toggleDropdown = (event?: any) => {

      //  make param any for code re-use
      const isFilterSelected = cloneDeep(this.state.isFilterSelected)
      const filterClassList = cloneDeep(this.state.filterClassList)
      isFilterSelected[index] = !isCurFilterSelected

      // close all the other filters
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

      this.setState(
        {
          filterClassList,
          isFilterSelected,
          isOpen: false, // close the toggle dropdown if its even open
          menuWallIsActive: !isCurFilterSelected
        }
      )

    }

    const ref: React.RefObject<HTMLSpanElement> = React.createRef()
    const refOuterDiv: React.RefObject<HTMLDivElement> = React.createRef()

    // handle column selection
    const handleSelector = (selector?: string) => (event: React.SyntheticEvent<HTMLElement>) => {
      // There is conflicting information about tslint suggestion to use for..of
      // We ignore the suggestion
      // tslint:disable-next-line
      for (let i = 0; i < ref.current!.children.length; i++) {
        const curElement = ref.current!.children[i] as HTMLLIElement
        const label = curElement.children[0] as HTMLLabelElement
        const checkbox = label.children[1] as HTMLInputElement
        checkbox.checked = selector === SELECT_ALL
      }
    }

    const applyChanges = (_: React.SyntheticEvent<HTMLElement>) => {
      const facetValues: string[] = []
      // tslint:disable-next-line
      for (let i = 0; i < ref.current!.children.length; i++) {
        const curElement = ref.current!.children[i] as HTMLLIElement
        const label = curElement.children[0] as HTMLLabelElement
        const checkbox = label.children[1] as HTMLInputElement
        const isSelected = checkbox.checked
        if (isSelected) {
          facetValues.push(checkbox.value)
        }
      }

      const queryRequest: QueryBundleRequest = cloneDeep(this.props.getLastQueryRequest!())
      const selectedFacets: FacetColumnRequest[] = queryRequest.query.selectedFacets!
      // the facet index of the result and the request are the same
      const currentFacetRequest: FacetColumnRequest = {
        columnName,
        facetValues,
        concreteType: 'org.sagebionetworks.repo.model.table.FacetColumnValuesRequest'
      }

      const indexOfFacetInRequest = selectedFacets!.findIndex(el => el.columnName === columnName)

      if (indexOfFacetInRequest === -1) {
        queryRequest.query!.selectedFacets!.push(currentFacetRequest)
      } else {
        queryRequest.query!.selectedFacets![indexOfFacetInRequest] = currentFacetRequest
      }

      this.props.executeQueryRequest!(queryRequest)
      toggleDropdown()
      const applyClickedArray = cloneDeep(this.state.applyClickedArray)
      applyClickedArray[index] = true
      this.setState({
        applyClickedArray,
        menuWallIsActive: false
      })
    }

    const applyPrimary = isCurFilterSelected ? 'SRC-primary-background-color' : 'SRC-primary-text-color'
    const numFacets: number = facetColumnResult.facetValues.length
    const classList = this.state.filterClassList[index]
    const style = { alignItems: 'center', marginLeft: '15px', marginRight: '5px', color: 'black', display: 'flex' }

    return (
      <div
        ref={refOuterDiv}
        style={style}
        className={`btn-group SRC-tableHead ${isCurFilterSelected ? 'open SRC-anchor-light' : ''}`}
      >
        <span
          tabIndex={0}
          className={`SRC-padding SRC-hand-cursor SRC-primary-background-color-hover ${applyPrimary}`}
          onKeyPress={toggleDropdown}
          onClick={toggleDropdown}
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
              <li>
                <div
                  className="SRC-flex SRC-table-dropdown-content"
                >
                  <p className="SRC-table-dropdown-text">
                    {columnName} ({numFacets})
                                    </p>
                  <button
                    className="SRC-table-dropdown-close btn pull-right"
                    onClick={toggleDropdown}
                  >
                    <img src={closeSvg} />
                  </button>
                </div>
              </li>
              <br />
              <span ref={ref}>
                {this.renderFacetSelection(facetColumnResult)}
              </span>
            </ul>

          </div>
          <div className="borderTopTable SRC-flex">
            <span className="tableTextColor">
              <button
                onClick={handleSelector(SELECT_ALL)}
                className="tableDropdownSelector tableAll"
              >
                All
              </button>
              <span> | </span>
              <button
                onClick={handleSelector(DESELECT_ALL)}
                className="tableDropdownSelector tableClear"
              >
                Clear
              </button>
            </span>
            <button onClick={applyChanges} className="tableApply"> APPLY </button>
          </div>
        </div>
      </div>
    )

  }

  private closeMenuClickHandler(_: React.SyntheticEvent) {
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

  private renderFacetSelection(facetColumnResult: FacetColumnResultValues): React.ReactNode {
    return facetColumnResult.facetValues.map((dataPoint: FacetColumnResultValueCount) => {
      const idText = `${dataPoint.value}(${dataPoint.count})`
      let displayValue = dataPoint.value
      if (displayValue === 'org.sagebionetworks.UNDEFINED_NULL_NOTSET') {
        displayValue = 'unannotated'
      }
      return (
        <React.Fragment key={idText}>
          <li>
            <label className="dropdownList SRC-base-font containerCheckbox">
              {displayValue}
              <span style={{ color: '#DDDDDF' }}> &nbsp;&nbsp;({dataPoint.count}) </span>
              <input defaultChecked={true} type="checkbox" value={dataPoint.value} />
              <span className="checkmark" />
            </label>
          </li>
        </React.Fragment>
      )
    })
  }
}
