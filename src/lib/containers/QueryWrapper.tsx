import PropTypes from "prop-types"
import * as React from "react"
import { FacetColumnResultValueCount, FacetColumnResultValues } from "../utils/jsonResponses/Table/FacetColumnResult"
import { QueryBundleRequest } from "../utils/jsonResponses/Table/QueryBundleRequest"
import { QueryResultBundle } from "../utils/jsonResponses/Table/QueryResultBundle"
import * as SynapseClient from "../utils/SynapseClient"

const cloneDeep = require("lodash.clonedeep")

type QueryWrapperProps = {
    initQueryRequest?: QueryBundleRequest
    rgbIndex?: number
    json?: object
    token?: string
    showMenu?: boolean
    facetName: string
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
    getNextPageOfData?: (queryRequest: any) => Promise<boolean>
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

    public static propTypes = {
        filter: PropTypes.string,
        initQueryRequest: PropTypes.shape({
            concreteType: PropTypes.string,
            partMask: PropTypes.number,
            query: PropTypes.shape({
                isConsistent: PropTypes.bool,
                limit: PropTypes.number,
                offset: PropTypes.number,
                selectedFacets: PropTypes.array,
                sort: PropTypes.array,
                sql: PropTypes.string
            })
        }),
        json: PropTypes.object,
        loadingScreen: PropTypes.element,
        rgbIndex: PropTypes.number,
        token: PropTypes.string
    }

    public static defaultProps = {
        json: null,
        token: ""
    }

    constructor(props: QueryWrapperProps) {
        super(props)
        this.executeInitialQueryRequest = this.executeInitialQueryRequest.bind(this)
        this.executeQueryRequest = this.executeQueryRequest.bind(this)
        this.getLastQueryRequest = this.getLastQueryRequest.bind(this)
        this.getNextPageOfData = this.getNextPageOfData.bind(this)
        this.resetFacetSelection = this.resetFacetSelection.bind(this)
        this.updateParentFilter = this.updateParentFilter.bind(this)
        this.updateParentState = this.updateParentState.bind(this)
        this.state = {
            currentFacet: "",
            data: undefined,
            isChecked: [],
            isLoading: true,
            isLoadingNewData: true,
            lastQueryRequest: {},
            showNothing: false
        }
    }

    /**
     * Compute default query request
     *
     * @memberof QueryWrapper
     */
    public componentDidMount() {
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
    public componentDidUpdate(prevProps: any) {
        // if token has updated
        if (this.props.token !== "" && prevProps.token === "" && !this.props.json) {
            this.executeInitialQueryRequest()
        }
        if (prevProps.initQueryRequest.query.sql !== this.props.initQueryRequest!.query.sql) {
            this.executeInitialQueryRequest()
        }
    }

    /**
     * Render the children without any formatting
     */
    public render() {
        // clean up variable names
        const childrenWithProps = (React.Children.map(this.props.children, (child: any) => {
            return React.cloneElement(child, {
                data: this.state.data,
                executeInitialQueryRequest: this.executeInitialQueryRequest,
                executeQueryRequest: this.executeQueryRequest,
                filter: this.state.currentFacet ? this.state.currentFacet : this.props.facetName,
                getLastQueryRequest: this.getLastQueryRequest,
                getNextPageOfData: this.getNextPageOfData,
                isChecked: this.state.isChecked,
                isLoading: this.state.isLoading,
                isLoadingNewData: this.state.isLoadingNewData,
                isQueryWrapperChild: true,
                rgbIndex: this.props.rgbIndex,
                showNothing: this.state.showNothing,
                unitDescription: this.props.unitDescription,
                updateParentFilter: this.updateParentFilter,
                updateParentState: this.updateParentState
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

    /**
     * Pass down a deep clone (so no side affects on the child's part) of the
     * last query request made
     *
     * @returns
     * @memberof QueryWrapper
     */
    private getLastQueryRequest() {
        return cloneDeep(this.state.lastQueryRequest)
    }

    /**
     * Execute the given query
     *
     * @param {*} queryRequest Query request as specified by
     *                         https://docs.synapse.org/rest/org/sagebionetworks/repo/model/table/Query.html
     * @memberof QueryWrapper
     */
    private executeQueryRequest(queryRequest: any) {
        this.setState({
            isLoading: true
        })
        SynapseClient.getQueryTableResults(queryRequest, this.props.token)
            .then(
                (data: QueryResultBundle) => {
                    const newState: any = {
                                            data,
                                            isLoading: false,
                                            lastQueryRequest: cloneDeep(queryRequest),
                                            showNothing: false
                                        }
                    this.setState(newState)
                }
            ).catch((err) => {
                console.log("Failed to get data ", err)
            })
    }

    /**
     * Execute the given query
     *
     * @param {*} queryRequest Query request as specified by
     *                         https://docs.synapse.org/rest/org/sagebionetworks/repo/model/table/Query.html
     * @memberof QueryWrapper
     */
    private getNextPageOfData(queryRequest: any) {
        this.setState({
            isLoading: true
        })
        return SynapseClient.getQueryTableResults(queryRequest, this.props.token)
            .then(
                (data: QueryResultBundle) => {
                    const oldData: QueryResultBundle = cloneDeep(this.state.data)
                    oldData.queryResult.queryResults.rows.push(...data.queryResult.queryResults.rows)
                    const newState: any = {
                                            data: oldData,
                                            isLoading: false,
                                            lastQueryRequest: cloneDeep(queryRequest),
                                            showNothing: false
                                        }
                    this.setState(newState)
                    return Promise.resolve(data.queryResult.queryResults.rows.length > 0)
                }
            ).catch((err) => {
                console.log("Failed to get data ", err)
            })
    }
    /**
     * Execute the given query
     *
     * @param {*} queryRequest Query request as specified by
     *                         https://docs.synapse.org/rest/org/sagebionetworks/repo/model/table/Query.html
     * @memberof QueryWrapper
     */
    private executeInitialQueryRequest() {
        this.setState({
            isChecked: [],
            isLoading: true,
            isLoadingNewData: true
        })
        SynapseClient
            .getQueryTableResults(this.props.initQueryRequest, this.props.token)
            .then(
                (data: QueryResultBundle) => {
                    const filter: string = this.state.currentFacet ? this.state.currentFacet : this.props.facetName
                    const lastQueryRequest: QueryBundleRequest = this.resetFacetSelection(data, filter)
                    const newState = {
                                        data,
                                        isLoading: false,
                                        isLoadingNewData: false,
                                        lastQueryRequest,
                                        showNothing: false
                                    }
                    this.setState(newState)
                }
                ).catch((err) => {
                    console.log("Failed to get data ", err)
                })
            }

    private resetFacetSelection(data: QueryResultBundle, filter: string) {
        // we have to reset the facet selections by getting the original
        // facet corresponding to the original filter
        const facetsForFilter = data.facets.filter((obj: FacetColumnResultValues) => {
            return obj.columnName === filter
        })[0] as FacetColumnResultValues

        // next we have to selectively choose those facets and their
        // corresponding counts, we have to get the full counts because of
        // the nature that we are clicking elements and turning them "off"
        const facetsMapped: string [] = facetsForFilter.facetValues.map((el: FacetColumnResultValueCount) => {
            return el.value
        })

        const lastQueryRequest: QueryBundleRequest = cloneDeep(this.props.initQueryRequest)
        lastQueryRequest.query.selectedFacets = [
            {
                columnName: filter,
                concreteType: "org.sagebionetworks.repo.model.table.FacetColumnValuesRequest",
                facetValues: [...facetsMapped]
            }
        ]
        return lastQueryRequest
    }

    private updateParentState(update: any) {
        this.setState(update)
    }

    private updateParentFilter(filter: string) {
        const lastQueryRequest: QueryBundleRequest = this.resetFacetSelection(this.state.data!, filter)
        this.setState({ lastQueryRequest, currentFacet: filter })
    }
}
