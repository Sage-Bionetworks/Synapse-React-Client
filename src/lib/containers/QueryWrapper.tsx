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
export type QueryWrapperProps = {
  initQueryRequest: QueryBundleRequest
  rgbIndex?: number
  token?: string
  facet?: string
  loadingScreen?: JSX.Element
  unitDescription?: string
  facetAliases?: {}
  loadNow?: boolean
  showBarChart?: boolean
  componentIndex?: number
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
  lastFacetSelection: FacetSelection
  chartSelectionIndex: number
  asyncJobStatus?: AsynchronousJobStatus
  facetAliases?: {}
  loadNowStarted: boolean
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
  updateParentState?: (param: any) => void
  rgbIndex?: number
  unitDescription?: string
  facetAliases?: {}
  lastFacetSelection?: FacetSelection
  chartSelectionIndex?: number
  asyncJobStatus?: AsynchronousJobStatus
  showBarChart?: boolean
  hasMoreData?: boolean
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
  public static defaultProps = {
    token: '',
  }

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
    const query = DeepLinkingUtils.getQueryRequestFromLink('QueryWrapper', this.componentIndex)

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
    } else if (loadNow && this.props.token && !prevProps.token) {
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
    this.setState({
      isLoading: true,
      lastQueryRequest: cloneDeep(queryRequest),
    })

    if (queryRequest.query) {
      const stringifiedQuery = encodeURIComponent(
        JSON.stringify(queryRequest.query),
      )
      DeepLinkingUtils.updateUrlWithNewSearchParam(
        'QueryWrapper',
        this.componentIndex,
        stringifiedQuery,
      )
    }
    return SynapseClient.getQueryTableResults(
      queryRequest,
      this.props.token,
      this.updateParentState,
    )
      .then((data: QueryResultBundle) => {
        const hasMoreData =
          data.queryResult.queryResults.rows.length ===
          SynapseConstants.PAGE_SIZE
        const newState: any = {
          hasMoreData,
          data,
          isLoading: false,
          asyncJobStatus: undefined,
        }
        this.setState(newState)
      })
      .catch((err: string) => {
        console.log('Failed to get data ', err)
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
    initQueryRequest: QueryBundleRequest =  this.props.initQueryRequest
  ) {
    this.setState({
      isLoading: true,
      isLoadingNewData: true,
      chartSelectionIndex: 0,
      loadNowStarted: true,
    })
    SynapseClient.getQueryTableResults(
      initQueryRequest,
      this.props.token,
      this.updateParentState,
    )
      .then((data: QueryResultBundle) => {
        const lastQueryRequest: QueryBundleRequest = cloneDeep(
          initQueryRequest,
        )
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
          lastQueryRequest,
          isLoading: false,
          isLoadingNewData: false,
          asyncJobStatus: undefined,
        }
        this.setState(newState)
      })
      .catch(err => {
        console.log('Failed to get data ', err)
      })
  }

  public updateParentState(update: QueryWrapperState) {
    this.setState(update)
  }

  /**
   * Render the children without any formatting
   */
  public render() {
    const { isLoading } = this.state
    const { facetAliases = {} } = this.props
    // inject props in children of this component
    const childrenWithProps = React.Children.map(
      this.props.children,
      (child: any) => {
        const queryWrapperChildProps: QueryWrapperChildProps = {
          facetAliases,
          isAllFilterSelectedForFacet: this.state.isAllFilterSelectedForFacet,
          data: this.state.data,
          token: this.props.token,
          executeInitialQueryRequest: this.executeInitialQueryRequest,
          executeQueryRequest: this.executeQueryRequest,
          getLastQueryRequest: this.getLastQueryRequest,
          getNextPageOfData: this.getNextPageOfData,
          isLoading: this.state.isLoading,
          isLoadingNewData: this.state.isLoadingNewData,
          facet: this.props.facet,
          rgbIndex: this.props.rgbIndex,
          unitDescription: this.props.unitDescription,
          updateParentState: this.updateParentState,
          hasMoreData: this.state.hasMoreData,
          lastFacetSelection: this.state.lastFacetSelection,
          chartSelectionIndex: this.state.chartSelectionIndex,
          getInitQueryRequest: this.getInitQueryRequest,
          asyncJobStatus: this.state.asyncJobStatus,
          showBarChart: this.props.showBarChart,
        }
        return React.cloneElement(child, queryWrapperChildProps)
      },
    )

    const loadingCusrorClass = isLoading ? 'SRC-logo-cursor' : ''
    return (
      <div className={`SRC-wrapper ${loadingCusrorClass}`}>
        {childrenWithProps}
      </div>
    )
  }
}
