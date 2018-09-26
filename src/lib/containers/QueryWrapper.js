import React from 'react'
import * as SynapseClient from '../utils/SynapseClient'
import PropTypes from 'prop-types'
const cloneDeep = require('lodash.clonedeep')
const INIT_REQUEST = "init request"

/**
 * Class wraps around any Synapse views that are dependent on a query bundle
 * Those classes then take in as props:
 * 
 *          data: This is the data of the current query bundle
 *          getLastQueryRequest: When the child needs to make a query selection
 *                               this is called so that it can then modify that query
 *                               with its own.
 *          executeQueryRequest: Once the step from above is completed the child calls 
 *                               this to make the query request.
 * 
 * @export
 * @class QueryWrapper
 * @extends {React.Component}
 */
export default class QueryWrapper extends React.Component {

    constructor(){
        super()
        this.state = {
            data: []
        }
        this.getLastQueryRequest = this.getLastQueryRequest.bind(this)
        this.executeQueryRequest = this.executeQueryRequest.bind(this)
    }

    /**
     * Compute default query request
     *
     * @memberof QueryWrapper
     */
    componentDidMount() {
        this.executeQueryRequest(INIT_REQUEST)
    }

    /**
     * Pass down a deep clone (so no side affects on the child's part) of the 
     * last query request made
     *
     * @returns
     * @memberof QueryWrapper
     */
    getLastQueryRequest() {
        return cloneDeep(this.state.lastQueryRequest)
    }

    /**
     * Exectue the given query
     *
     * @param {*} queryRequest Query request as specified by https://docs.synapse.org/rest/org/sagebionetworks/repo/model/table/Query.html
     * @memberof QueryWrapper
     */
    executeQueryRequest(queryRequest) {
        let request = null

        if (queryRequest === INIT_REQUEST) {
            request = this.props.initQueryRequest
        } else {
            request = queryRequest
        }

        SynapseClient.getQueryTableResults(request, this.props.token).then(
            data => {
                // line below is for when testing doesn't mock
                // the entire object
                let filteredData = data.facets && data.facets.filter(
                    (value) => {
                        return value.columnName === this.props.filter
                    }
                )
                data.facets = filteredData
                let newState = {data, lastQueryRequest: cloneDeep(request)}
                // avoid failed test case by checking obj below
                if (filteredData && filteredData[0]) {
                    newState.facetCount = filteredData[0].facetValues.length
                }
                this.setState(newState)
            }
        ).catch(
            err => {
                console.log('Failed to get data ', err)
            } 
        )   
    }
    
    /**
     * Render the children without any formatting
     */
    render () {
        return (
            <div> 
                {React.Children.map(this.props.children, child =>{
                    return React
                                .cloneElement(  child, 
                                                {
                                                    defaultVisibleCount: this.props.defaultVisibleCount,
                                                    synapseId: this.props.filter.synapseId,
                                                    facetCount: this.state.facetCount,
                                                    alias: this.props.alias === "" ? this.props.filter : this.props.alias,
                                                    executeQueryRequest: this.executeQueryRequest,
                                                    getLastQueryRequest: this.getLastQueryRequest,
                                                    data: this.state.data}
                                            )
                })} 
            </div>
        )
    }
}

QueryWrapper.propTypes = {
    initQueryRequest: PropTypes.shape({
        concreteType: PropTypes.string.isRequired,
        partMask: PropTypes.number.isRequired,
        query: PropTypes.shape({
            isConsistent: PropTypes.bool.isRequired,
            sql: PropTypes.string.isRequired,
            limit: PropTypes.number.isRequired,
            offset: PropTypes.number.isRequired,
            selectedFacets: PropTypes.array.isRequired,
            sort: PropTypes.array.isRequired
        })
    }).isRequired,
    alias: PropTypes.string,
    filter: PropTypes.string.isRequired,
    synapseId: PropTypes.string.isRequired,
    defaultVisibleCount: PropTypes.number,
    token : PropTypes.string,
}

QueryWrapper.defaultProps = {
    alias: "",
    defaultVisibleCount: 0,
    token: ""
}