import React from 'react'

const cloneDeep = require("lodash.clonedeep")
// Hold constants for next and previous button actions
const NEXT = "NEXT"
const PREVIOUS = "PREVIOUS"

export default class SynapseTable extends React.Component {

    constructor(props) {
        super(props)
        this.handleColumnClick = this.handleColumnClick.bind(this)
        this.handlePaginationClick = this.handlePaginationClick.bind(this)
        this.findSelectionIndex = this.findSelectionIndex.bind(this)
        this.toggleColumnSelection = this.toggleColumnSelection.bind(this)
        this.toggleDropdown = this.toggleDropdown.bind(this)
        // store the offset and sorted selection that is currently held
        this.state = {
            sortSelection: [],
            offset: 0,
            isOpen: false,
            isColumnSelected: []
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
    handleColumnClick = (name) => (event) => {
        let element = null
        // weird onclick behavior that sometimes hits
        // the <i> tag
        if (event.target.tagName === "TH") {
            element = event.target.children[0].children[0]
        } else if (event.target.tagName === "A") {
            element = event.target.children[0]
        } else if (event.target.tagName === "I") {
            element = event.target
        }
        // check what the state of the current column name is
        let containsDown = element.className.indexOf("down") !== -1
        let containsUp = element.className.indexOf("up") !== -1
        let direction = "ASC"
        // if its unitialized
        if (!containsUp && !containsDown) {
            element.className = element.className.replace("fa-sort", "")
            element.className += "fa-sort-up"
        }
        // if ita's down then its DESC and needs to be replaced with up
        if (containsDown) {
            element.className = element.className.replace("fa-sort-down", "fa-sort")
        }
        // if it's up then its ASC and needs to be replaced with down
        if (containsUp) {
            element.className = element.className.replace("fa-sort-up","fa-sort-down")
            direction = "DESC"
        }
        // get currently sorted items and remove/insert this selection
        let sortSelection = cloneDeep(this.state.sortSelection)
        let index = this.findSelectionIndex(sortSelection, name);
        if (index !== -1 ) {
            sortSelection.splice(index, 1)
        }

        if (!containsDown) {
            sortSelection.unshift({
                column: name,
                direction
            })
        }

        let queryRequest = this.props.getLastQueryRequest()
        queryRequest.query.sort = sortSelection
        this.props.executeQueryRequest(queryRequest)
        this.setState({
            sortSelection
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

    // TODO: implement this method
    advancedSearch (event) {
        event.preventDefault()
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
            const {data} = this.props
            const {queryResult} = data
            const {queryResults} = queryResult
            const {headers} = queryResults
            let defaultSelection
            // fill defaultVisibleCount with true and the rest as false
            if (this.props.defaultVisibleCount === 0) {
                // if set to zero then its all true
                defaultSelection = Array(this.props.defaultVisibleCount).fill(true)
            } else {
                defaultSelection = Array(this.props.defaultVisibleCount).fill(true)
                defaultSelection.push(...(Array(headers.length - this.props.defaultVisibleCount).fill(false)))
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
            return (<div className="container"> loading table </div>)
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
                // of the page we have to show only this.props.defaultVisibleCount many
                // columns, afterwards we rely on the isColumnSelected to get choices
                let initRender = index < this.props.defaultVisibleCount && this.state.isColumnSelected.length === 0
                let subsequentRender = this.state.isColumnSelected[index] && this.state.isColumnSelected.length !== 0
                if (initRender || subsequentRender) {
                    let isSelected = this.findSelectionIndex(this.state.sortSelection, column.name) !== -1
                    return (<th onClick={this.handleColumnClick(column.name)}  key={column.name} className={isSelected ? "SRC-salmon-background" : ""}>
                            <a className={`padding-left-2 padding-right-2 ${isSelected ? "SRC-anchor-light": "" }`} > 
                                {column.name}
                                <i className="fa fa-sort"></i>
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
                            let isRowActiveInit = j <  this.props.defaultVisibleCount && this.state.isColumnSelected.length === 0
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

        return (
            <React.Fragment>
                <div className="container">
                    <div className="row">
                        <span>
                            {/* TODO: Actually use query count or some metric */}
                            <strong> Showing {this.props.data.queryResult.queryResults.rows.length} Files </strong>
                        </span>
                        {/* dropdown menu below */}
                        <div className={`dropdown ${this.state.isOpen ? "open" : ""}`}>
                            <button className="btn btn-default dropdown-toggle" onClick={this.toggleDropdown} type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                                <i className="fas fa-ellipsis-v"></i>
                            </button>
                            <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
                                {
                                    headers.map(
                                        (header, index) => {
                                            let isColumnSelected = this.state.isColumnSelected[index]
                                            if (isColumnSelected === undefined) {
                                                isColumnSelected = index < this.props.defaultVisibleCount
                                            }
                                            return (<li className={`${isColumnSelected ? "SRC-table-anchor-chosen" : ""}`} 
                                                        key={header.name}
                                                        onClick={this.toggleColumnSelection(index)}
                                                    >
                                                        <a className="SRC-no-focus" href="">{header.name}</a>
                                                    </li>)
                                        }
                                    )
                                }
                            </ul>
                        </div>
                        <a onClick={this.advancedSearch} href="" className="SRC-floatRight">
                            <u> Advanced Search </u>
                        </a>
                        <span className="SRC-floatRight">&nbsp;&nbsp;</span>
                        <a onClick={this.download} href="" className="SRC-floatRight">
                            <u>Download</u>
                        </a>
                    </div>
                </div>
                <div className="container SRC-overflowAuto">
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
                            <tbody>
                                {rowsFormatted.map(
                                    rowFormatted => {
                                        return rowFormatted
                                    }
                                )}
                            </tbody>
                        </table>
                        {pastZero && <button onClick={this.handlePaginationClick(PREVIOUS)} className="btn btn-default SRC-table-button"  type="button">
                            Previous
                        </button>}
                        <button onClick={this.handlePaginationClick(NEXT)} className="btn btn-default SRC-table-button"  type="button">
                            Next
                        </button>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}