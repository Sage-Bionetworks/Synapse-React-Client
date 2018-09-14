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
        let arrow = event.target.children[0]
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
                    return el.name === name
                }
            )
            if (index !== -1) {
                sortSelection.splice(index, 1)
            }
        }

        // whether it's contained or not we lazily delete it and add it
        // back without finding the value, changing it, etc
        sortSelection.push({
            name,
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
                limit: 1,
            },
            sort: sortSelection
        };

        this.props.updateQueryRequest(queryRequest)
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
        console.log("data ", data)
        const {queryResult} = data
        const {queryResults} = queryResult
        const {rows} = queryResults

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
                        <tr>
                        {
                            rows.map(
                                (row, i) => {
                                    return (
                                        row.values.map(
                                            (value, j) => {
                                                return <td key={`(${i},${j})`}><p> {value} </p></td>
                                            }
                                        )
                                    )
                                }
                            )
                        }
                        </tr>
                    </tbody>

                </table>
            </div>
        )
    }

}