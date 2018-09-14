import React from 'react'
import * as SynapseConstants from 'lib/utils/SynapseConstants';
const cloneDeep = require("lodash.clonedeep")

export default class SynapseTable extends React.Component {

    constructor() {
        super()
        this.handleClick = this.handleClick.bind(this)
        this.state = {
            sortSelection: []
        }
    }

    handleClick = (name) => (event) => {
        let arrow = null
        if (event.target.tagName === "A") {
            arrow = event.target.children[0]
        } else if (event.target.tagName === "I") {
            arrow = event.target
        }
        let containsDown = arrow.className.indexOf("down") !== -1
        let containsUp = arrow.className.indexOf("up") !== -1
        let direction = "ASC"
        if (!containsUp && !containsDown) {
            arrow.className += " fa-sort-up"
        }

        if (containsDown) {
            arrow.className = arrow.className.replace(" fa-sort-down", " fa-sort-up")
        }
        
        if (containsUp) {
            arrow.className = arrow.className.replace(" fa-sort-up"," fa-sort-down")
            direction = "DESC"
        }

        let sortSelection = cloneDeep(this.state.sortSelection)
        if (sortSelection.length !== 0) {
            let index = sortSelection.findIndex(
                (el) => {
                    return el.column === name
                }
            )
            if (index !== -1) {
                sortSelection.splice(index, 1)
            }
        }

        // whether it's contained or not we lazily delete it and add it
        // back without finding the value, changing it, etc
        sortSelection.push({
            column: name,
            direction
        })

        let {sql} = this.props
        // TODO: Grab the facet selection...
        let queryRequest = {
            concreteType: "org.sagebionetworks.repo.model.table.QueryBundleRequest",
            partMask: SynapseConstants.BUNDLE_MASK_QUERY_COLUMN_MODELS | SynapseConstants.BUNDLE_MASK_QUERY_FACETS | SynapseConstants.BUNDLE_MASK_QUERY_RESULTS,
            query: {
                isConsistent: true,
                sql,
                limit: 25,
                sort: sortSelection
            },
        };

        this.props.updateQueryRequest(queryRequest, "TABLE")
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

        return (
            <div className="container">
                <table className="table table-striped table-condensed">
                    <thead>
                        <tr>
                            <th></th>
                            {columnModels.map(
                                column => {
                                    return (<th key={column.name}>
                                                <a onClick={this.handleClick(column.name)} className="padding-left-2 padding-right-2" > {column.name}
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
                <button className="btn btn-default" style={{borderRadius: "8px", color: "#1e7098", background: "white"}} type="button">
                    Next
                </button>
            </div>
        )
    }

}