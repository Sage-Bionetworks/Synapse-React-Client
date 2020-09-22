import * as React from 'react'

import { SynapseClient, SynapseConstants } from '../utils/'
import { getNextPageOfData } from '../utils/functions/queryUtils'
import * as DeepLinkingUtils from '../utils/functions/deepLinkingUtils'
import {
  AsynchronousJobStatus,
  FacetColumnResultValues,
  QueryBundleRequest,
  QueryResultBundle,
} from '../utils/synapseTypes/'
import { cloneDeep } from 'lodash-es'
import { SynapseClientError } from '../utils/SynapseClient'
export type QueryWrapperProps = {
  visibleColumnCount?: number
  initQueryRequest: QueryBundleRequest
  rgbIndex?: number
  token?: string
  facet?: string
  unitDescription?: string
  facetAliases?: {}
  loadNow?: boolean
  showBarChart?: boolean
  componentIndex?: number //used for deep linking
  shouldDeepLink?: boolean
  hiddenColumns?: string[]
  lockedFacet?: LockedFacet
}

export type TopLevelControlsState = {
  showFacetVisualization: boolean
  showFacetFilter: boolean
  showColumnFilter: boolean
  showSearchBar: boolean
  showDownloadConfirmation: boolean
  showColumnSelectDropdown: boolean
}

export type SearchQuery = {
  columnName: string
  searchText: string
}

export type QueryWrapperState = {
  /*
    isAllFilterSelectedForFacet tracks whether for a particular
     facet if the 'All' button has been selected, this tracks the
     click event and syncs Facets.tsx and SynapseTable.tsx
  */
  isAllFilterSelectedForFacet: {}
  data: QueryResultBundle | undefined
  isLoadingNewData: boolean // occurs when props change
  isLoading: boolean // occurs when state changes
  lastQueryRequest: QueryBundleRequest
  hasMoreData: boolean
  // TODO: Delete lastFacetSelection once StackedBarChart.tsx/Facets.tsx are deleted
  lastFacetSelection: FacetSelection
  chartSelectionIndex: number
  asyncJobStatus?: AsynchronousJobStatus
  facetAliases?: {}
  loadNowStarted: boolean
  topLevelControlsState?: TopLevelControlsState
  isColumnSelected: string[]
  selectedRowIndices?: number[]
  error: SynapseClientError | undefined
}

export type LockedFacet = {
  facet: string,
  value: string
}

export type FacetSelection = {
  columnName: string
  facetValue: string
  selector: string
}

// Since the component is an HOC we export the props passed down
export type QueryWrapperChildProps = {
  isAllFilterSelectedForFacet?: {}
  isLoading?: boolean
  token?: string
  entityId?: string
  isLoadingNewData?: boolean
  executeQueryRequest?: (param: QueryBundleRequest) => void
  executeInitialQueryRequest?: () => void
  getNextPageOfData?: (queryRequest: QueryBundleRequest) => void
  getLastQueryRequest?: () => QueryBundleRequest
  getInitQueryRequest?: () => QueryBundleRequest
  data?: QueryResultBundle
  facet?: string
  updateParentState?: <K extends keyof QueryWrapperState>(
    param: Pick<QueryWrapperState, K>,
  ) => void
  rgbIndex?: number
  unitDescription?: string
  facetAliases?: {}
  lastFacetSelection?: FacetSelection
  chartSelectionIndex?: number
  asyncJobStatus?: AsynchronousJobStatus
  showBarChart?: boolean
  hasMoreData?: boolean
  topLevelControlsState?: TopLevelControlsState
  isColumnSelected?: string[]
  selectedRowIndices?: number[]
  error?: SynapseClientError | undefined,
  lockedFacet?: LockedFacet
}

/**
 * Class wraps around any Synapse views that are dependent on a query bundle
 * Those classes then take in as props:
 *
 * @class QueryWrapper
 * @extends {React.Component}
 */
export default class QueryWrapper extends React.Component<
  QueryWrapperProps,
  QueryWrapperState
> {
  private componentIndex: number
  constructor(props: QueryWrapperProps) {
    super(props)
    this.executeInitialQueryRequest = this.executeInitialQueryRequest.bind(this)
    this.executeQueryRequest = this.executeQueryRequest.bind(this)
    this.getLastQueryRequest = this.getLastQueryRequest.bind(this)
    this.getNextPageOfData = this.getNextPageOfData.bind(this)
    this.updateParentState = this.updateParentState.bind(this)
    this.getInitQueryRequest = this.getInitQueryRequest.bind(this)
    this.state = {
      data: undefined,
      isLoading: true,
      isLoadingNewData: true,
      hasMoreData: true,
      lastFacetSelection: {
        columnName: '',
        facetValue: '',
        selector: '',
      },
      chartSelectionIndex: 0,
      isAllFilterSelectedForFacet: {},
      loadNowStarted: false,
      lastQueryRequest: cloneDeep(this.props.initQueryRequest!),
      topLevelControlsState: {
        showColumnFilter: true,
        showFacetFilter: true,
        showFacetVisualization: true,
        showSearchBar: false,
        showDownloadConfirmation: false,
        showColumnSelectDropdown: false,
      },
      isColumnSelected: [],
      selectedRowIndices: [],
      error: undefined,
    }
    this.componentIndex = props.componentIndex || 0
  }

  /**
   * Compute default query request
   *
   * @memberof QueryWrapper
   */
  public componentDidMount() {
    const { loadNow = true } = this.props
    const query = DeepLinkingUtils.getQueryRequestFromLink(
      'QueryWrapper',
      this.componentIndex,
    )

    if (loadNow) {
      this.executeInitialQueryRequest(query)
    }
  }

  /**
   * @memberof QueryWrapper
   */
  public componentDidUpdate(prevProps: QueryWrapperProps) {
    /**
     *  If component updates and the token has changed (they signed in) then the data should be pulled in. Or if the
     *  sql query has changed of the component then perform an update.
     */

    const { loadNow = true } = this.props
    if (loadNow && !this.state.loadNowStarted) {
      this.executeInitialQueryRequest()
    } else if (loadNow && this.props.token !== prevProps.token) {
      // if loadNow is true and they've logged in with a token that is not undefined, null, or an empty string when it was before
      this.executeQueryRequest(this.getLastQueryRequest())
    } else if (
      prevProps.initQueryRequest.query.sql !==
      this.props.initQueryRequest!.query.sql
    ) {
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
  public getLastQueryRequest(): QueryBundleRequest {
    return cloneDeep(this.state.lastQueryRequest)
  }

  /**
   * Pass down a deep clone (so no side affects on the child's part) of the
   * first query request made
   *
   * @returns
   * @memberof QueryWrapper
   */
  public getInitQueryRequest(): QueryBundleRequest {
    return cloneDeep(this.props.initQueryRequest)
  }
  /**
   * Execute the given query
   *
   * @param {*} queryRequest Query request as specified by
   *                         https://docs.synapse.org/rest/org/sagebionetworks/repo/model/table/Query.html
   * @memberof QueryWrapper
   */
  public executeQueryRequest(queryRequest: QueryBundleRequest) {
    const clonedQueryRequest = cloneDeep(queryRequest)
    this.setState({
      isLoading: true,
      lastQueryRequest: clonedQueryRequest,
      selectedRowIndices: [], // reset selected row indices any time the query is re-run
    })

    if (clonedQueryRequest.query) {
      const stringifiedQuery = encodeURIComponent(
        JSON.stringify(clonedQueryRequest.query),
      )
      if (this.props.shouldDeepLink) {
        DeepLinkingUtils.updateUrlWithNewSearchParam(
          'QueryWrapper',
          this.componentIndex,
          stringifiedQuery,
        )
      }
    }
    return SynapseClient.getQueryTableResults(
      clonedQueryRequest,
      this.props.token,
      this.updateParentState,
    )
      .then((data: QueryResultBundle) => {
        const hasMoreData =
          data.queryResult.queryResults.rows.length ===
          SynapseConstants.PAGE_SIZE
        const newState = {
          hasMoreData,
          data,
          asyncJobStatus: undefined,
        }
        this.setState(newState)
      })
      .catch(error => {
        console.error('Failed to get data ', error)
        this.setState(error)
      })
      .finally(() => {
        this.setState({ isLoading: false, isLoadingNewData: false })
      })
  }

  /**
   * Grab the next page of data, pulling in 25 more rows.
   *
   * @param {*} queryRequest Query request as specified by
   *                         https://docs.synapse.org/rest/org/sagebionetworks/repo/model/table/Query.html
   * @memberof QueryWrapper
   */
  public async getNextPageOfData(queryRequest: QueryBundleRequest) {
    this.setState({
      isLoading: true,
    })

    await getNextPageOfData(
      queryRequest,
      this.state.data!,
      this.props.token,
    ).then(newState => {
      this.setState({
        ...newState,
        isLoading: false,
        lastQueryRequest: cloneDeep(queryRequest),
      })
    })
  }

  /**
   * Execute the initial query passed into the component
   *
   * @param {*} queryRequest Query request as specified by
   *                         https://docs.synapse.org/rest/org/sagebionetworks/repo/model/table/Query.html
   * @memberof QueryWrapper
   */
  public executeInitialQueryRequest(
    initQueryRequest: QueryBundleRequest = this.props.initQueryRequest,
  ) {
    const lastQueryRequest: QueryBundleRequest = cloneDeep(initQueryRequest)
    this.setState({
      isLoading: true,
      chartSelectionIndex: 0,
      loadNowStarted: true,
      lastQueryRequest,
    })
    SynapseClient.getQueryTableResults(
      initQueryRequest,
      this.props.token,
      this.updateParentState,
    )
      .then((data: QueryResultBundle) => {
        const hasMoreData =
          data.queryResult.queryResults.rows.length ===
          SynapseConstants.PAGE_SIZE
        const isAllFilterSelectedForFacet = cloneDeep(
          this.state.isAllFilterSelectedForFacet,
        )
        let { chartSelectionIndex } = this.state
        if (this.props.facet) {
          if (!data.facets) {
            throw Error(
              'Error on query request, must include facets in partmask to show facets',
            )
          }
          const enumFacets = data.facets.filter(
            el => el.facetType === 'enumeration',
          ) as FacetColumnResultValues[]
          enumFacets.forEach(el => {
            // isAll is only true iff there are no facets selected or all elements are selected
            const { facetValues } = el
            const isAllFalse = facetValues.every(facet => !facet.isSelected)
            const isAllTrue = facetValues.every(facet => facet.isSelected)
            const isByDefaultSelected = isAllFalse || isAllTrue
            isAllFilterSelectedForFacet[el.columnName] = isByDefaultSelected
            if (el.columnName === this.props.facet && !isAllFalse) {
              // Note - this picks the first selected facet
              chartSelectionIndex = facetValues
                .sort((a, b) => b.count - a.count)
                .findIndex(facet => facet.isSelected)
            }
          })
        }
        const newState = {
          isAllFilterSelectedForFacet,
          hasMoreData,
          data,
          chartSelectionIndex,
          asyncJobStatus: undefined,
          isColumnSelected:
            data?.selectColumns
              ?.slice(0, this.props.visibleColumnCount ?? Infinity)
              .map(el => el.name) ?? [],
        }
        this.setState(newState)
      })
      .catch(error => {
        console.error('Failed to get data ', error)
        this.setState({
          error,
        })
      })
      .finally(() => {
        this.setState({
          isLoading: false,
          isLoadingNewData: false,
        })
      })
  }

  public updateParentState<K extends keyof QueryWrapperState>(
    update: Pick<QueryWrapperState, K>,
  ) {
    this.setState(update)
  }

  /**
   * remove a particular facet name (e.g. study) and its all possible values based on the parameter specified in the url
   * this is to remove the facet from the charts, search and filter.
   * @return data: QueryResultBundle
   * TODO: fix search dropdown
   */
  removeLockedFacetData (){
    const lockedFacet = this.props.lockedFacet?.facet
    if (lockedFacet && this.state.data) {  // return data without the "locked" facet
      const data = cloneDeep(this.state.data)
      const facets = data.facets?.filter( item => item.columnName !== lockedFacet)
      data.facets = facets
      return data
    } else {
      return this.state.data
    }
  }

  /**
   * Render the children without any formatting
   */
  public render() {
    const { isLoading } = this.state
    const { children, ...rest } = this.props
    // inject props in children of this component
    const childrenWithProps = React.Children.map(children, (child: any) => {
      if (!child) {
        return child
      }
      const queryWrapperChildProps: QueryWrapperChildProps = {
        isAllFilterSelectedForFacet: this.state.isAllFilterSelectedForFacet,
        data: this.removeLockedFacetData(),
        // data: this.state.data,
        hasMoreData: this.state.hasMoreData,
        lastFacetSelection: this.state.lastFacetSelection,
        chartSelectionIndex: this.state.chartSelectionIndex,
        isLoading: this.state.isLoading,
        isLoadingNewData: this.state.isLoadingNewData,
        asyncJobStatus: this.state.asyncJobStatus,
        topLevelControlsState: this.state.topLevelControlsState,
        isColumnSelected: this.state.isColumnSelected,
        selectedRowIndices: this.state.selectedRowIndices,
        error: this.state.error,
        executeInitialQueryRequest: this.executeInitialQueryRequest,
        executeQueryRequest: this.executeQueryRequest,
        getLastQueryRequest: this.getLastQueryRequest,
        getNextPageOfData: this.getNextPageOfData,
        updateParentState: this.updateParentState,
        getInitQueryRequest: this.getInitQueryRequest,
        ...rest,
      }
      return React.cloneElement(child, queryWrapperChildProps)
    })

    const loadingCusrorClass = isLoading ? 'SRC-logo-cursor' : ''
    return (
      <div className={`SRC-wrapper ${loadingCusrorClass}`}>
        {childrenWithProps}
      </div>
    )
  }
}
