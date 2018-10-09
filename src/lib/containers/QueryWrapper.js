import React from 'react'
import * as SynapseClient from '../utils/SynapseClient'
import PropTypes from 'prop-types'
import Menu from './Menu'
const cloneDeep = require('lodash.clonedeep')

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
            isChecked: {},
            currentFacet: ""
        }
        this.getLastQueryRequest = this.getLastQueryRequest.bind(this)
        this.executeQueryRequest = this.executeQueryRequest.bind(this)
        this.updateParentState = this.updateParentState.bind(this)
    }

    /**
     * Compute default query request
     *
     * @memberof QueryWrapper
     */
    componentDidMount() {
        if (!this.props.json) {
            this.executeQueryRequest(null,true)
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
        // if token has updated
        if (this.props.token !== "" && prevProps.token === "" && !this.props.json) {
            this.executeQueryRequest(null,true)
        }

        if (prevProps.initQueryRequest.query.sql !== this.props.initQueryRequest.query.sql) {
            this.setState({isChecked: []})
            this.executeQueryRequest(this.props.initQueryRequest, false)
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
    executeQueryRequest(queryRequest = null, isInitRequest=false) {
        let request = null
        if (isInitRequest) {
            request = this.props.initQueryRequest
            this.setState({isChecked: []})
        } else {
            request = queryRequest
        }

        if (queryRequest || isInitRequest) {
            SynapseClient.getQueryTableResults(request, this.props.token).then(
                data => {
                    // this is from the normal yet peculiar behavior that when no values
                    // are selected from the init query we expect that they are ALL selected
                    // hence we have to 
                    const filter = this.state.currentFacet ? this.state.currentFacet : this.props.filter
                    if (isInitRequest) {
                        let facetsForFilter = data.facets.filter(
                            obj => {
                                return obj.columnName === filter
                            }
                         )[0]
                         let facetsMapped = facetsForFilter.facetValues.map(
                             el => {
                                 return el.value
                             }
                         )
                        request.query.selectedFacets = [
                            {
                                columnName: filter,
                                concreteType: "org.sagebionetworks.repo.model.table.FacetColumnValuesRequest",
                                facetValues: [
                                    ...facetsMapped
                                ]
                            }
                        ]
                    }
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

    updateParentState(update) {
        this.setState(update)
    }

    /**
     * Render the children without any formatting
     */
    render () {
        let menu = false
        if (this.props.showMenu) {
            menu = <Menu
                    RGB={this.props.RGB}
                    updateParentState={this.updateParentState} 
                    executeQueryRequest={this.executeQueryRequest}
                    getLastQueryRequest={this.getLastQueryRequest}
                    filter={this.props.filter}
                    data={this.state.data}/>
        }

        return (
            <div className="container-fluid"> 
                <div className="col-xs-2">
                    {menu}
                </div>
                <div className="col-xs-10">
                    {React.Children.map(this.props.children, child =>{
                        return React
                                    .cloneElement(  child, 
                                                    {
                                                        executeQueryRequest: this.executeQueryRequest,
                                                        getLastQueryRequest: this.getLastQueryRequest,
                                                        isChecked: this.state.isChecked === null ? {}: this.state.isChecked,
                                                        data: this.state.data,
                                                        filter: this.state.currentFacet ? this.state.currentFacet: this.props.filter,
                                                        updateParentState: this.updateParentState,
                                                        RGB: this.props.RGB
                                                    }
                                                )
                    })} 
                </div>
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