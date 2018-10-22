import React from 'react'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons'
import { faSort } from '@fortawesome/free-solid-svg-icons'
import { faSortUp } from '@fortawesome/free-solid-svg-icons'
import { faSortDown } from '@fortawesome/free-solid-svg-icons'

// Add all icons to the library so you can use it in your page
library.add(faEllipsisV)
library.add(faSort)
library.add(faSortUp)
library.add(faSortDown)


const cloneDeep = require("lodash.clonedeep")
// Hold constants for next and previous button actions
const NEXT = "NEXT"
const PREVIOUS = "PREVIOUS"
const ICON_STATE = ["sort", "sort-up", "sort-down"]
let SORT_STATE = ["", "ASC","DESC"]

export default class SynapseTable extends React.Component {

    constructor(props) {
        super(props)
        this.handleColumnClick = this.handleColumnClick.bind(this)
        this.handlePaginationClick = this.handlePaginationClick.bind(this)
        this.findSelectionIndex = this.findSelectionIndex.bind(this)
        this.toggleColumnSelection = this.toggleColumnSelection.bind(this)
        this.toggleDropdown = this.toggleDropdown.bind(this)
        this.advancedSearch = this.advancedSearch.bind(this)
        this.download = this.download.bind(this)
        this.getLengthOfPropsData = this.getLengthOfPropsData.bind(this)
        // store the offset and sorted selection that is currently held
        this.state = {
            sortSelection: [],
            offset: 0,
            isOpen: false,
            isColumnSelected: [],
            columnIconState: []
        }
    }

    /**
     * Handle a click on next or previous
     *
     * @memberof SynapseTable
     */
    handlePaginationClick = (eventType) => (event) => {
        let queryRequest = this.props.getLastQueryRequest()
        let currentOffset = queryRequest.query.offset
        // if its a "previous" click subtract from the offset
        // otherwise its next and we paginate forward
        if (eventType === PREVIOUS)  {
            currentOffset -= 25
        }
        if (eventType === NEXT) {
            currentOffset += 25
        }
        queryRequest.query.offset = currentOffset
        this.props.executeQueryRequest(queryRequest)
    }

    /**
     * Handle a column having been selected
     *
     * @memberof SynapseTable
     */
    handleColumnClick = (dict) => (event) => {
        let columnIconState = cloneDeep(this.state.columnIconState)
        if (columnIconState.length === 0) {
            columnIconState = Array(this.getLengthOfPropsData()).fill(0)
        }
        // get currently sorted items and remove/insert this selection
        let sortSelection = cloneDeep(this.state.sortSelection)
        let index = this.findSelectionIndex(sortSelection, dict.name);
        
        if (index !== -1 ) {
            sortSelection.splice(index, 1)
        }

        columnIconState[dict.index] = (columnIconState[dict.index] + 1) % ICON_STATE.length

        if (columnIconState[dict.index] > 0) {
            sortSelection.unshift({
                column: dict.name,
                direction: SORT_STATE[columnIconState[dict.index]]
            })
        }

        let queryRequest = this.props.getLastQueryRequest()
        queryRequest.query.sort = sortSelection
        this.props.executeQueryRequest(queryRequest)
        this.setState({
            sortSelection,
            columnIconState
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
    findSelectionIndex(sortSelection, name) {
        if (sortSelection.length !== 0) {
            // find if the current selection exists already and remove it
            return sortSelection.findIndex((el) => {
                return el.column === name;
            });
        }
        return -1
    }

    // TODO: implement this method
    download(event) {
        event.preventDefault()
    }

    // Direct user to synapse corresponding synapse table
    advancedSearch (event) {
        event.preventDefault()
        let lastQueryRequest = this.props.getLastQueryRequest()
        let {query} = lastQueryRequest
        // base 64 encode the json of the query and go to url with the encoded object
        let encodedQuery = btoa(JSON.stringify(query))
        let synTable = this.props.synapseId
        window.location = `https://www.synapse.org/#!Synapse:${synTable}/tables/query/${encodedQuery}`
    }

    /**
     * Handles the opening and closing of the column select menu, this method
     * is only necessary because react overrides the behavior that bootstrap
     * embeds in its menus
     *
     * @memberof SynapseTable
     */
    toggleDropdown() {
        const {isOpen} = this.state
        this.setState({isOpen: !isOpen})
    }

    getLengthOfPropsData() {
        const {data} = this.props
        const {queryResult} = data
        const {queryResults} = queryResult
        const {headers} = queryResults
        return headers.length
    }

    /**
     * Handles the toggle of a column select, this will cause the table to
     * either show the column or hide depending on the prior state of the column
     *
     * @memberof SynapseTable
     */
    toggleColumnSelection = (index) => (event) => {
        event.preventDefault()
        // lazily update the component with this information
        // this only runs once
        let isColumnSelected
        if (this.state.isColumnSelected.length === 0) {
            // unpack all the data
            let lengthOfPropsData = this.getLengthOfPropsData()
            let defaultSelection
            // fill visibleColumnCount with true and the rest as false
            if (this.props.visibleColumnCount === 0) {
                // if set to zero then its all true
                defaultSelection = Array(lengthOfPropsData).fill(true)
            } else {
                defaultSelection = Array(this.props.visibleColumnCount).fill(true)
                defaultSelection.push(...(Array(lengthOfPropsData - this.props.visibleColumnCount).fill(false)))
            }
            isColumnSelected = defaultSelection
        } else {
            isColumnSelected = cloneDeep(this.state.isColumnSelected)
        }
        isColumnSelected[index] = !isColumnSelected[index]
        this.setState({isColumnSelected})
    }

    /**
     * Display the view
     */
    render() {
        if (this.props.data.length === 0) {
            return (<div className="container"> </div>)
        }

        // unpack all the data
        const {data} = this.props
        const {queryResult} = data
        const {queryResults} = queryResult
        const {rows} = queryResults
        const {headers} = queryResults
        
        // Step 1: Format the column headers, we have to track a few variables --
        // whether the column should be shown by default or if the state now mandates it 
        // be shown
        let headersFormatted = headers.map(
            (column, index) => {
                // two cases when rendering the column headers on init load
                // of the page we have to show only this.props.visibleColumnCount many
                // columns, afterwards we rely on the isColumnSelected to get choices
                let initRender = (index < this.props.visibleColumnCount) && this.state.isColumnSelected.length === 0
                initRender |= (this.props.visibleColumnCount === 0 && this.state.isColumnSelected.length === 0)
                let subsequentRender = this.state.isColumnSelected[index] && this.state.isColumnSelected.length !== 0
                if (initRender || subsequentRender) {
                    let isSelected = this.findSelectionIndex(this.state.sortSelection, column.name) !== -1
                    return (<th onClick={this.handleColumnClick({name: column.name, index})}  key={column.name} className={"SRC-hand-cursor " + (isSelected ? "SRC-salmon-background" : "")}>
                                <a style={{color: "black"}} className={`padding-left-2 padding-right-2 ${isSelected ? "SRC-anchor-light": "" }`} > 
                                    {column.name}
                                    <FontAwesomeIcon className={`${isSelected ? 'SRC-selected-table-icon': 'SRC-primary-text-color' } pull-right`} icon={ICON_STATE[this.state.columnIconState[index] | 0] } />
                                </a>
                            </th>)
                }
                // avoid eslint complaint below by returning undefined
                return undefined
            }
        )

        // Step 2: Format the row values, tracking the same information that the columns have to.
        // grab the row data and format it 
        // e.g. <tr> <td> some value </td> </tr>
        let rowsFormatted = []
        rows.forEach((expRow,i) => {
            let rowFormatted = (<tr key={`(${expRow.rowId})`} >
                    {expRow.values.map(
                        (value, j) => {
                            let columnName = headers[j].name
                            let index = this.findSelectionIndex(this.state.sortSelection, columnName)
                            let isRowActiveInit = j <  this.props.visibleColumnCount && this.state.isColumnSelected.length === 0
                            isRowActiveInit |= (this.props.visibleColumnCount === 0 && this.state.isColumnSelected.length === 0)
                            let isRowActiveSubsequent = this.state.isColumnSelected[j] && this.state.isColumnSelected.length !== 0
                            if (isRowActiveInit || isRowActiveSubsequent) {
                                return (<td className="SRC_noBorderTop" key={`(${i},${j})`}>
                                            <p className={`${index === -1 ? "": "SRC-boldText"}`}> {value} </p>
                                        </td>)
                            }
                            // avoid eslint complaint below by returning undefined
                            return undefined
                        }
                    )}
                </tr>)
            rowsFormatted.push(rowFormatted)
        });

        // handle displaying the previous button -- if offset is zero then it
        // shouldn't be displayed
        let pastZero = this.props.getLastQueryRequest().query.offset > 0

        let x_data = [];
        data.facets.forEach(item => {
            if (item.facetType === "enumeration" && item.columnName === this.props.filter) {
                item.facetValues.forEach(facetValue => {
                    if (item.columnName) {
                        x_data.push({ columnName: item.columnName, ...facetValue });
                    }
                });
            }
        });
        
        // edge case -- if they are all false then they are considered all true..
        // sum up the counts of data
        let allFalse = false
        let totalAllFalseCase = 0
        let totalStandardCase = 0
        for (let key in x_data) {
             if (x_data.hasOwnProperty(key)) { 
                 allFalse = allFalse || x_data[key].isSelected
                 totalAllFalseCase += x_data[key].count 
                 totalStandardCase += x_data[key].isSelected ?  x_data[key].count : 0
            } 
        }
        let total = allFalse === false ? totalAllFalseCase: totalStandardCase

        return (
            <React.Fragment>
                <div className="container-fluid">
                    <div className="row">
                        <span>
                            {
                                this.props.isLoading ? (<div> updating </div>): ""
                            }
                            <strong> Showing {this.props.showNothing ? 0 : total} Files </strong>
                        </span>
                        <span className="SRC-floatRight">
                            {/* dropdown menu below */}
                            <span className={` dropdown ${this.state.isOpen ? "open" : ""}`}>
                                <button className="btn SRC-marginRightFivePx SRC-paddingSevenPx btn-default dropdown-toggle" onClick={this.toggleDropdown} type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                                    <FontAwesomeIcon icon="ellipsis-v"></FontAwesomeIcon>
                                </button>
                                <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
                                    {
                                        headers.map(
                                            (header, index) => {
                                                let isColumnSelected = this.state.isColumnSelected[index]
                                                if (isColumnSelected === undefined) {
                                                    isColumnSelected = index < this.props.visibleColumnCount | this.props.visibleColumnCount === 0
                                                }
                                                return (<li className={`${isColumnSelected ? "SRC-table-anchor-chosen" : ""}`} 
                                                            key={header.name}
                                                            onClick={this.toggleColumnSelection(index)}>
                                                            <a className="SRC-no-focus" href="">{header.name}</a>
                                                        </li>)
                                            }
                                        )
                                    }
                                </ul>
                            </span>
                            <a onClick={this.advancedSearch} href="">
                                <u> Advanced Search </u>
                            </a>
                            {/* <span >&nbsp;&nbsp;</span>
                            <a onClick={this.download} href="">
                                <u>Download</u>
                            </a> */}
                        </span>
                    </div>
                </div>
                <div className="container-fluid SRC-overflowAuto">
                    <div className="row">
                        <table className="table table-striped table-condensed">
                            {/* show the column headers */}
                            <thead className="SRC_borderTop">
                                <tr>
                                    {headersFormatted.map(
                                        headerFormatted => {
                                            return headerFormatted
                                        }
                                    )}
                                </tr>
                            </thead>
                            {/* show the actual table body */}
                           {!this.props.showNothing && <tbody>
                                {rowsFormatted.map(
                                    rowFormatted => {
                                        return rowFormatted
                                    }
                                )}
                            </tbody>}
                        </table>
                        {!this.props.showNothing && pastZero && <button onClick={this.handlePaginationClick(PREVIOUS)} className="btn btn-default SRC-table-button"  type="button">
                            Previous
                        </button>}
                        {!this.props.showNothing && <button onClick={this.handlePaginationClick(NEXT)} className="btn btn-default SRC-table-button"  type="button">
                            Next
                        </button>}
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

SynapseTable.defaultProps = {
    visibleColumnCount : 0
}