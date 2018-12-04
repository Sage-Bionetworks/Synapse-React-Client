import * as React from "react"
import * as SynapseClient from "../utils/SynapseClient"
import PropTypes from 'prop-types';

import { QueryResultBundle } from '../utils/jsonResponses/Table/QueryResultBundle';
import {FacetColumnResultValueCount, FacetColumnResultValues } from '../utils/jsonResponses/Table/FacetColumnResult';
import { QueryBundleRequest } from '../utils/jsonResponses/Table/QueryBundleRequest';

const cloneDeep = require("lodash.clonedeep")

type QueryWrapperProps = {
    initQueryRequest?: QueryBundleRequest
    rgbIndex?: number
    json?: object
    token?: string
    showMenu?: boolean
    facetName:string
    loadingScreen?: JSX.Element
    unitDescription?: string
}

type QueryWrapperState = {
    data: QueryResultBundle | undefined
    isChecked: []
    currentFacet: string
    isLoadingNewData: boolean
    isLoading: boolean
    showNothing: boolean
    lastQueryRequest: {}
}

export type QueryWrapperChildProps = {
    isLoading?: boolean
    isLoadingNewData?: boolean
    executeQueryRequest?: (param: QueryBundleRequest) => void
    executeInitialQueryRequest?: () => void
    getNextPageOfData?: (queryRequest: any) => void 
    getLastQueryRequest?: () => QueryBundleRequest
    isChecked?: boolean []
    data?: QueryResultBundle
    filter?: string
    updateParentState?: (param: any) => void
    updateParentFilter?: (param: string) => void
    rgbIndex?: number
    showNothing?: boolean
    unitDescription?: string
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
        filter: PropTypes.string,
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
        this.resetFacetSelection = this.resetFacetSelection.bind(this)
        this.getNextPageOfData = this.getNextPageOfData.bind(this)
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
        if (prevProps.initQueryRequest.query.sql !== this.props.initQueryRequest!.query.sql) {
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
    getNextPageOfData(queryRequest: any) {
        this.setState({
            isLoading: true
        })
        SynapseClient.getQueryTableResults(queryRequest, this.props.token)
            .then(
                (data: QueryResultBundle )=> {
                    let oldData: QueryResultBundle = cloneDeep(this.state.data)
                    oldData.queryResult.queryResults.rows.push(...data.queryResult.queryResults.rows)
                    let newState: any = { data: oldData, lastQueryRequest: cloneDeep(queryRequest), isLoading: false, showNothing: false }
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
                    const filter: string = this.state.currentFacet ? this.state.currentFacet : this.props.facetName
                    let lastQueryRequest: QueryBundleRequest = this.resetFacetSelection(data, filter);
                    let newState = { data, lastQueryRequest, isLoading: false, isLoadingNewData: false, showNothing: false }
                    this.setState(newState)
                }
                ).catch(err => {
                    console.log("Failed to get data ", err)
                })
            }
            
    private resetFacetSelection(data: QueryResultBundle, filter: string) {
        // we have to reset the facet selections by getting the original
        // facet corresponding to the original filter
        let facetsForFilter = data.facets.filter((obj: FacetColumnResultValues) => {
            return obj.columnName === filter;
        })[0] as FacetColumnResultValues;
        
        // next we have to selectively choose those facets and their
        // corresponding counts, we have to get the full counts because of 
        // the nature that we are clicking elements and turning them "off"
        let facetsMapped: string [] = facetsForFilter.facetValues.map((el: FacetColumnResultValueCount) => {
            return el.value;
        });

        let lastQueryRequest: QueryBundleRequest = cloneDeep(this.props.initQueryRequest);
        lastQueryRequest.query.selectedFacets = [
            {
                columnName: filter,
                concreteType: "org.sagebionetworks.repo.model.table.FacetColumnValuesRequest",
                facetValues: [...facetsMapped]
            }
        ];
        return lastQueryRequest;
    }

    updateParentState(update: any) {
        this.setState(update)
    }

    updateParentFilter(filter: string) {
        let lastQueryRequest: QueryBundleRequest = this.resetFacetSelection(this.state.data!, filter)
        this.setState({ lastQueryRequest, currentFacet: filter })
    }
    /**
     * Render the children without any formatting
     */
    render() {
        // clean up variable names
        let childrenWithProps = (React.Children.map(this.props.children, (child: any) => {
            return React.cloneElement(child, {
                isLoading: this.state.isLoading,
                isLoadingNewData: this.state.isLoadingNewData,
                executeQueryRequest: this.executeQueryRequest,
                executeInitialQueryRequest: this.executeInitialQueryRequest,
                getLastQueryRequest: this.getLastQueryRequest,
                isChecked: this.state.isChecked,
                data: this.state.data,
                filter: this.state.currentFacet ? this.state.currentFacet : this.props.facetName,
                updateParentState: this.updateParentState,
                updateParentFilter: this.updateParentFilter,
                rgbIndex: this.props.rgbIndex,
                showNothing: this.state.showNothing,
                isQueryWrapperChild: true,
                getNextPageOfData: this.getNextPageOfData,
                unitDescription: this.props.unitDescription
            })
        }))

        if (this.props.showMenu) {
            return (
                childrenWithProps
            )
        } else {
            return (
                <div className="container-fluid">
                    <div className={"col-xs-12"}>
                        {childrenWithProps}
                    </div>
                </div>
            )
        }
    }
}