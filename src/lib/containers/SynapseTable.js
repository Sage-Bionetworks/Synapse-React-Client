import React from 'react'
const cloneDeep = require("lodash.clonedeep")
const NEXT = "NEXT"
const PREVIOUS = "PREVIOUS"

export default class SynapseTable extends React.Component {

    constructor() {
        super()
        this.handleColumnClick = this.handleColumnClick.bind(this)
        this.handlePaginationClick = this.handlePaginationClick.bind(this)
        this.state = {
            sortSelection: [],
            offset: 0
        }
    }

    handlePaginationClick = (eventType) => (event) => {
        let queryRequest = this.props.getLastQueryRequest()
        let currentOffset = queryRequest.query.offset
        if (eventType === PREVIOUS)  {
            if (currentOffset === 0) {
                return
            } else {
                currentOffset -= 25
            }
        }
        if (eventType === NEXT) {
            currentOffset += 25
        }
        queryRequest.query.offset = currentOffset
        this.props.executeQueryRequest(queryRequest)
    }

    handleColumnClick = (name) => (event) => {
        let element = null
        // weird onclick behavior that sometimes hits
        // the <i> tag
        if (event.target.tagName === "A") {
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
            element.className += " fa-sort-up"
        }
        // if it's down then its DESC and needs to be replaced with up
        if (containsDown) {
            element.className = element.className.replace(" fa-sort-down", " fa-sort-up")
        }
        // if it's up then its ASC and needs to be replaced with down
        if (containsUp) {
            element.className = element.className.replace(" fa-sort-up"," fa-sort-down")
            direction = "DESC"
        }
        // get currently sorted items and remove/insert this selection
        let sortSelection = cloneDeep(this.state.sortSelection)
        if (sortSelection.length !== 0) {
            // find if the current selection exists already and remove it
            let index = sortSelection.findIndex(
                (el) => {
                    return el.column === name
                }
            )
            if (index !== -1) {
                sortSelection.splice(index, 1)
            }
        }

        sortSelection.push({
            column: name,
            direction
        })

        let queryRequest = this.props.getLastQueryRequest()
        queryRequest.query.sort = sortSelection
        this.props.executeQueryRequest(queryRequest)
        this.setState({
            sortSelection
        })
    }

    render() {
        if (this.props.data.length === 0) {
            return (<div className="container"> loading table </div>)
        }

        const {data} = this.props
        const {columnModels} = data
        const {queryResult} = data
        const {queryResults} = queryResult
        const {rows} = queryResults
        
        // grab the row data and format it 
        // e.g. <tr> <td> some value </td> </tr>
        let rowsFormatted = []
        rows.forEach((expRow,i) => {
            let rowFormatted = (<tr key={`(${expRow.rowId})`} >
                {expRow.values.map(
                    (value, j) => {
                        return <td key={`(${i},${j})`}><p> {value} </p></td>
                    }
                )}
            </tr>)
            rowsFormatted.push(rowFormatted)
        });

        let pastZero = this.props.getLastQueryRequest().query.offset > 0

        return (
            <div className="container">
                <table className="table table-striped table-condensed">
                    <thead>
                        <tr>
                            <th></th>
                            {columnModels.map(
                                column => {
                                    return (<th key={column.name}>
                                                <a onClick={this.handleColumnClick(column.name)} className="padding-left-2 padding-right-2" > {column.name}
                                                    <i className="fa"></i>
                                                </a>
                                            </th>)
                                }
                            )}
                        </tr>
                    </thead>

                    <tbody>
                        {rowsFormatted.map(
                            rowFormatted => {
                                return rowFormatted
                            }
                        )}
                    </tbody>
                </table>
                {pastZero && <button onClick={this.handlePaginationClick(PREVIOUS)} className="btn btn-default" style={{borderRadius: "8px", color: "#1e7098", background: "white"}} type="button">
                    Previous
                </button>}
                <button onClick={this.handlePaginationClick(NEXT)} className="btn btn-default" style={{borderRadius: "8px", color: "#1e7098", background: "white"}} type="button">
                    Next
                </button>
            </div>
        )
    }

}