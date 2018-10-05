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
            data: [],
            isChecked: {}
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
        if (!this.props.json) {
            this.executeQueryRequest(INIT_REQUEST)
        } else {
            this.setState({
                data: cloneDeep(this.props.json)
            })
        }
    }

    /**
     * @memberof QueryWrapper
     */
    componentDidUpdate(prevProps) {
        // The only reason that reason querry wrapper should take
        // action here is when incoming session token is now set
        // we carefully check that this is the case
        if (this.props.token !== "" && prevProps.token === "" && !this.props.json) {
            this.executeQueryRequest(INIT_REQUEST)
        }
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
    executeQueryRequest(queryRequest, isChecked = null) {
        let request = null

        if (queryRequest === INIT_REQUEST) {
            request = this.props.initQueryRequest
        } else {
            request = queryRequest
        }

        if (isChecked) {
            this.setState({isChecked})
        }

        if (queryRequest) {
            SynapseClient.getQueryTableResults(request, this.props.token).then(
                data => {
                    // line below is for when testing doesn't mock
                    // the entire object
                    console.log('retrieved data ', data)
                    let newState = {data, lastQueryRequest: cloneDeep(request)}
                    this.setState(newState)
                }
            ).catch(
                err => {
                    console.log('Failed to get data ', err)
                } 
            )   
        }
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
                                                    executeQueryRequest: this.executeQueryRequest,
                                                    getLastQueryRequest: this.getLastQueryRequest,
                                                    isChecked: this.state.isChecked === null ? {}: this.state.isChecked,
                                                    data: this.state.data}
                                            )
                })} 
            </div>
        )
    }
}

QueryWrapper.propTypes = {
    initQueryRequest: PropTypes.shape({
        concreteType: PropTypes.string,
        partMask: PropTypes.number,
        query: PropTypes.shape({
            isConsistent: PropTypes.bool,
            sql: PropTypes.string,
            limit: PropTypes.number,
            offset: PropTypes.number,
            selectedFacets: PropTypes.array,
            sort: PropTypes.array
        })
    }),
    json: PropTypes.object,
    token : PropTypes.string,
}

QueryWrapper.defaultProps = {
    token: "",
    json: null
}