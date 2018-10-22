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
            currentFacet: "",
            isLoading: true,
            showNothing: false
        }
        this.getLastQueryRequest = this.getLastQueryRequest.bind(this)
        this.executeQueryRequest = this.executeQueryRequest.bind(this)
        this.executeInitialQueryRequest = this.executeInitialQueryRequest.bind(this)
        this.updateParentState = this.updateParentState.bind(this)
        this.updateParentFilter = this.updateParentFilter.bind(this)
    }

    /**
     * Compute default query request
     *
     * @memberof QueryWrapper
     */
    componentDidMount() {
        if (!this.props.json) {
            this.executeInitialQueryRequest()
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
            this.executeInitialQueryRequest()
        }

        if (prevProps.initQueryRequest.query.sql !== this.props.initQueryRequest.query.sql) {
            this.setState({isChecked: []})
            this.executeInitialQueryRequest()
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
    executeQueryRequest(queryRequest) {
        this.setState({
            isLoading: true
        })
        SynapseClient.getQueryTableResults(queryRequest, this.props.token).then(
            data => {
                let newState = {data, lastQueryRequest: cloneDeep(queryRequest), isLoading: false, showNothing: false}
                this.setState(newState)
            }
        ).catch(
            err => {
                console.log('Failed to get data ', err)
            } 
        )   
    }

    /**
     * Exectue the given query
     *
     * @param {*} queryRequest Query request as specified by https://docs.synapse.org/rest/org/sagebionetworks/repo/model/table/Query.html
     * @memberof QueryWrapper
     */
    executeInitialQueryRequest() {
        this.setState({
            isLoading: true,
            isChecked: []
        })

        SynapseClient.getQueryTableResults(this.props.initQueryRequest, this.props.token).then(
            data => {
                const filter = this.state.currentFacet ? this.state.currentFacet : this.props.filter
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
                let lastQueryRequest = cloneDeep(this.props.initQueryRequest)
                lastQueryRequest.query.selectedFacets = [
                    {
                        columnName: filter,
                        concreteType: "org.sagebionetworks.repo.model.table.FacetColumnValuesRequest",
                        facetValues: [
                            ...facetsMapped
                        ]
                    }
                ]
                let newState = {data, lastQueryRequest, isLoading: false, showNothing: false}
                this.setState(newState)
            }
        ).catch(
            err => {
                console.log('Failed to get data ', err)
            } 
        )   
    }

    updateParentState(update) {
        this.setState(update)
    }

    updateParentFilter(filter) {
        let request = cloneDeep(this.props.initQueryRequest)
        let facetsForFilter = this.state.data.facets.filter(
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
        this.setState({lastQueryRequest: cloneDeep(request), currentFacet: filter})
    }

    /**
     * Render the children without any formatting
     */
    render () {
        let menu = false
        if (this.props.showMenu) {
            menu = <Menu
                    rgbIndex={this.props.rgbIndex}
                    updateParentState={this.updateParentState} 
                    executeQueryRequest={this.executeQueryRequest}
                    executeInitialQueryRequest={this.executeInitialQueryRequest}
                    getLastQueryRequest={this.getLastQueryRequest}
                    filter={this.props.filter}
                    isChecked={this.state.isChecked}
                    data={this.state.data}
                    updateParentFilter={this.updateParentFilter}
                    />
        }

        return (
            <div className="container-fluid"> 
                {this.props.showMenu && <div className="col-xs-2">
                    {menu}
                </div>
                }
                <div className={this.props.showMenu ? "col-xs-10": "col-xs-12" }>
                    {React.Children.map(this.props.children, child =>{
                        return React
                                    .cloneElement(  child, 
                                                    {
                                                        isLoading: this.state.isLoading,
                                                        executeQueryRequest: this.executeQueryRequest,
                                                        executeInitialQueryRequest: this.executeInitialQueryRequest,
                                                        getLastQueryRequest: this.getLastQueryRequest,
                                                        isChecked: this.state.isChecked === null ? {}: this.state.isChecked,
                                                        data: this.state.data,
                                                        filter: this.state.currentFacet ? this.state.currentFacet: this.props.filter,
                                                        updateParentState: this.updateParentState,
                                                        updateParentFilter: this.updateParentFilter,
                                                        rgbIndex: this.props.rgbIndex,
                                                        showNothing: this.state.showNothing
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
    RGB: PropTypes.array,
    filter: PropTypes.string,
    showMenu: PropTypes.bool,
    loadingScreen: PropTypes.element
}

QueryWrapper.defaultProps = {
    token: "",
    json: null
}