import React from 'react'
import * as SynapseClient from 'lib/utils/SynapseClient'
import * as SynapseConstants from 'lib/utils/SynapseConstants';

const cloneDeep = require('lodash.clonedeep')
let INIT_REQUEST = "init request"

// takes in a token and SQL string and initQueryRequest
export default class QueryWrapper extends React.Component {

    constructor(){
        super()
        this.state = {
            data: [],
            lastColumnSelection: [],
            lastSortSelection: []
        }
        this.makeQueryRequest = this.makeQueryRequest.bind(this)
    }

    componentDidMount() {
        this.makeQueryRequest(INIT_REQUEST)
    }

    makeQueryRequest(queryRequest, initiator) {
        if (queryRequest === INIT_REQUEST) {
            SynapseClient.getQueryTableResults(this.props.initQueryRequest, this.props.token).then(
                data => {
                    this.setState({
                        data
                    })
                }
            )   
        } else {
            let lastColumnSelection = cloneDeep(this.state.lastColumnSelection)
            let lastSortSelection = cloneDeep(this.state.lastSortSelection)

            if (initiator === "TABLE") {
                lastSortSelection = queryRequest.query.sort
                queryRequest.query.selectedFacets = lastColumnSelection
            } else if (initiator === "FACETS") {
                lastColumnSelection = queryRequest.query.selectedFacets
                queryRequest.query.sort = lastSortSelection
            }

            queryRequest.concreteType = "org.sagebionetworks.repo.model.table.QueryBundleRequest" 
            queryRequest.partMask = SynapseConstants.BUNDLE_MASK_QUERY_COLUMN_MODELS 
                            | SynapseConstants.BUNDLE_MASK_QUERY_FACETS 
                            | SynapseConstants.BUNDLE_MASK_QUERY_RESULTS

            SynapseClient.getQueryTableResults(queryRequest, this.props.token).then(
                data => {
                    this.setState({
                        data,
                        lastColumnSelection,
                        lastSortSelection
                    })
                }
            )
        }
    }

    render () {
        return (
            <div> 
                {React.Children.map(this.props.children, child =>{
                    return React.cloneElement(child, {showBy: "Disease", updateQueryRequest: this.makeQueryRequest, data: this.state.data, sql: this.props.sql,
                    })
                })} 
            </div>
        )
    }
}