import * as React from "react"
import * as SynapseClient from "../utils/SynapseClient"
import PropTypes from 'prop-types';

import Menu from "./Menu"
import { QueryResultBundle } from '../utils/jsonResponses/Table/QueryResultBundle';
import { FacetColumnResult, FacetColumnResultValueCount } from '../utils/jsonResponses/Table/FacetColumnResult';
import { QueryBundleRequest } from '../utils/jsonResponses/Table/QueryBundleRequest';

const cloneDeep = require("lodash.clonedeep")

type QueryWrapperProps = {
    initQueryRequest?: QueryBundleRequest,
    rgbIndex?: number
    json?: object,
    token?: string,
    RGB?: any[],
    filter: string,
    showMenu?: boolean,
    loadingScreen?: JSX.Element
}

type QueryWrapperState = {
    data: QueryResultBundle | undefined,
    isChecked: [],
    currentFacet: string,
    isLoadingNewData: boolean,
    isLoading: boolean,
    showNothing: boolean,
    lastQueryRequest: {}
}

export type QueryWrapperChildProps = {
    isLoading?: boolean,
    isLoadingNewData?: boolean,
    executeQueryRequest?: (param: any) => void,
    executeInitialQueryRequest?: () => void,
    getLastQueryRequest?: () => any,
    isChecked?: boolean [],
    data?: QueryResultBundle,
    filter?: string,
    updateParentState?: (param: any) => void,
    updateParentFilter?: (param: string) => void,
    rgbIndex?: number,
    showNothing?: boolean
}

/**
 * Class wraps around any Synapse views that are dependent on a query bundle
 * Those classes then take in as props:
 *
 * @class QueryWrapper
 * @extends {React.Component}
 */
export default class QueryWrapper extends React.Component<QueryWrapperProps, QueryWrapperState> {

    static propTypes = {
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
        rgbIndex: PropTypes.number,
        json: PropTypes.object,
        token: PropTypes.string,
        RGB: PropTypes.array,
        filter: PropTypes.string,
        showMenu: PropTypes.bool,
        loadingScreen: PropTypes.element,
    }

    static defaultProps = {
        token: "",
        json: null
    }

    constructor(props: QueryWrapperProps) {
        super(props)
        this.state = {
            data: undefined,
            isChecked: [],
            currentFacet: "",
            isLoadingNewData: true,
            isLoading: true,
            showNothing: false,
            lastQueryRequest: {}
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
        if (this.props.json === null) {
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
    componentDidUpdate(prevProps: any) {
        // if token has updated
        if (this.props.token !== "" && prevProps.token === "" && !this.props.json) {
            this.executeInitialQueryRequest()
        }
        if (prevProps.initQueryRequest.query.sql !== this.props.initQueryRequest!.query!.sql) {
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
    executeQueryRequest(queryRequest: any) {
        this.setState({
            isLoading: true
        })
        SynapseClient.getQueryTableResults(queryRequest, this.props.token)
            .then(
                (data: QueryResultBundle )=> {
                    let newState: any = { data, lastQueryRequest: cloneDeep(queryRequest), isLoading: false, showNothing: false }
                    this.setState(newState)
                }
            ).catch(err => {
                console.log("Failed to get data ", err)
            })
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
            isLoadingNewData: true,
            isChecked: []
        })
        SynapseClient
            .getQueryTableResults(this.props.initQueryRequest, this.props.token)
            .then(
                (data: QueryResultBundle) => {
                    const filter: string = this.state.currentFacet ? this.state.currentFacet : this.props.filter

                    // we have to reset the facet selections by getting the original
                    // facet corresponding to the original filter
                    let facetsForFilter: FacetColumnResult = data.facets.filter(
                        (obj: FacetColumnResult) => {
                            return obj.columnName === filter
                        })[0]
                    // next we have to selectively choose those facets and their
                    // corresponding counts, we have to get the full counts because of 
                    // the nature that we are clicking elements and turning them "off"
                    let facetsMapped = facetsForFilter.facetValues.map(
                        (el: FacetColumnResultValueCount) => {
                            return el.value
                        }
                    )
                    let lastQueryRequest: QueryBundleRequest = cloneDeep(this.props.initQueryRequest)
                    lastQueryRequest.query.selectedFacets = [
                        {
                            columnName: filter,
                            concreteType: "org.sagebionetworks.repo.model.table.FacetColumnValuesRequest",
                            facetValues: [...facetsMapped]
                        }
                    ]


                    let newState = { data, lastQueryRequest, isLoading: false, isLoadingNewData: false, showNothing: false }
                    this.setState(newState)
                }
            ).catch(err => {
                console.log("Failed to get data ", err)
            })
    }

    updateParentState(update: any) {
        this.setState(update)
    }

    updateParentFilter(filter: any) {
        let request = cloneDeep(this.props.initQueryRequest)
        let facetsForFilter = this.state.data!.facets.filter((obj: any) => {
            return obj.columnName === filter
        })[0]
        let facetsMapped = facetsForFilter.facetValues.map((el: any) => {
            return el.value
        })
        request.query.selectedFacets = [
            {
                columnName: filter,
                concreteType: "org.sagebionetworks.repo.model.table.FacetColumnValuesRequest",
                facetValues: [...facetsMapped]
            }
        ]
        this.setState({ lastQueryRequest: cloneDeep(request), currentFacet: filter })
    }
    /**
     * Render the children without any formatting
     */
    render() {
        let menu: JSX.Element | undefined
        if (this.props.showMenu) {
            menu = (
                <Menu
                    rgbIndex={this.props.rgbIndex!}
                    updateParentState={this.updateParentState}
                    executeQueryRequest={this.executeQueryRequest}
                    executeInitialQueryRequest={this.executeInitialQueryRequest}
                    getLastQueryRequest={this.getLastQueryRequest}
                    filter={this.props.filter!}
                    isChecked={this.state.isChecked}
                    data={this.state.data}
                    updateParentFilter={this.updateParentFilter}
                />
            )
        }
        return (
            <div className="container-fluid">
                {this.props.showMenu && <div className="col-xs-2">{menu}</div>}
                <div className={this.props.showMenu ? "col-xs-10" : "col-xs-12"}>
                    {React.Children.map(this.props.children, (child: any) => {
                        return React.cloneElement(child, {
                            isLoading: this.state.isLoading,
                            isLoadingNewData: this.state.isLoadingNewData,
                            executeQueryRequest: this.executeQueryRequest,
                            executeInitialQueryRequest: this.executeInitialQueryRequest,
                            getLastQueryRequest: this.getLastQueryRequest,
                            isChecked: this.state.isChecked,
                            data: this.state.data,
                            filter: this.state.currentFacet ? this.state.currentFacet : this.props.filter,
                            updateParentState: this.updateParentState,
                            updateParentFilter: this.updateParentFilter,
                            rgbIndex: this.props.rgbIndex,
                            showNothing: this.state.showNothing
                        })
                    })}
                </div>
            </div>
        )
    }
}