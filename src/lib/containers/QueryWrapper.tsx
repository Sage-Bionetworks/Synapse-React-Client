import * as PropTypes from 'prop-types'
import * as React from 'react'
import { FacetColumnResultValueCount, FacetColumnResultValues } from '../utils/jsonResponses/Table/FacetColumnResult'
import { QueryBundleRequest } from '../utils/jsonResponses/Table/QueryBundleRequest'
import { QueryResultBundle } from '../utils/jsonResponses/Table/QueryResultBundle'
import { SynapseClient, SynapseConstants } from '../utils/'
import { cloneDeep } from '../utils/modules'
import { getNextPageOfData } from '../utils/modules/queryUtils'

type QueryWrapperProps = {
  initQueryRequest?: QueryBundleRequest
  rgbIndex?: number
  json?: QueryResultBundle
  token?: string
  showMenu?: boolean
  facetName: string
  loadingScreen?: JSX.Element
  unitDescription?: string
  facetAliases?: {}
}

type QueryWrapperState = {
  data: QueryResultBundle | undefined
  isChecked: {}  // keep Facets and BarChart colors in sync
  isLoadingNewData: boolean
  isLoading: boolean
  lastQueryRequest: QueryBundleRequest
  hasMoreData: boolean
  hasLoadedPastInitQuery: boolean
  lastFacetSelection?: FacetSelection
}

export type FacetSelection = {
  columnName: string
  facetValue: string
  selector: string
}

// Since the component is an HOC we export the props passed down
export type QueryWrapperChildProps = {
  isLoading?: boolean
  isLoadingNewData?: boolean
  executeQueryRequest?: (param: QueryBundleRequest) => void
  executeInitialQueryRequest?: () => void
  getNextPageOfData?: (queryRequest: QueryBundleRequest) => void
  getLastQueryRequest?: () => QueryBundleRequest
  isChecked?: {}
  data?: QueryResultBundle
  filter?: string
  updateParentState?: (param: any) => void
  rgbIndex?: number
  unitDescription?: string
  facetAliases?: {}
  hasLoadedPastInitQuery?: boolean
  lastFacetSelection?: FacetSelection
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
    token: ''
  }

  public static initialState = {
    data: undefined,
    isChecked: {},
    isLoading: true,
    isLoadingNewData: true,
    lastQueryRequest: {} as QueryBundleRequest,
    hasMoreData: true,
    hasLoadedPastInitQuery: false,
    lastFacetSelection: {
      columnName: '',
      facetValue: ''
    }
  } as QueryWrapperState

  constructor(props: QueryWrapperProps) {
    super(props)
    this.executeInitialQueryRequest = this.executeInitialQueryRequest.bind(this)
    this.executeQueryRequest = this.executeQueryRequest.bind(this)
    this.getLastQueryRequest = this.getLastQueryRequest.bind(this)
    this.getNextPageOfData = this.getNextPageOfData.bind(this)
    this.addAllFacetsToSelection = this.addAllFacetsToSelection.bind(this)
    this.updateParentState = this.updateParentState.bind(this)
    this.state = QueryWrapper.initialState
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
   *
   */
  public componentDidUpdate(prevProps: any) {
    /**
     *  If component updates and the token has changed (they signed in) then the data should be pulled in. Or if the
     *  sql query has changed of the component then perform an update.
     */

    if (this.props.token !== '' && prevProps.token === '' && !this.props.json) {
      this.executeInitialQueryRequest()
    } else if (prevProps.initQueryRequest.query.sql !== this.props.initQueryRequest!.query.sql) {
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
   * Execute the given query
   *
   * @param {*} queryRequest Query request as specified by
   *                         https://docs.synapse.org/rest/org/sagebionetworks/repo/model/table/Query.html
   * @memberof QueryWrapper
   */
  public executeQueryRequest(queryRequest: QueryBundleRequest) {
    this.setState({
      isLoading: true
    })
    SynapseClient.getIntuitiveQueryTableResults(
      queryRequest,
      this.props.token,
      this.props.facetName,
      this.state.data!
    )
    .then(
      (data: QueryResultBundle) => {
        const hasMoreData = data.queryResult.queryResults.rows.length === SynapseConstants.PAGE_SIZE
        hasMoreData
        const newState: any = {
          hasMoreData,
          data,
          isLoading: false,
          lastQueryRequest: cloneDeep(queryRequest),
          hasLoadedPastInitQuery: true
        }
        this.setState(newState)
      }
    ).catch((err: string) => {
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
      isLoading: true
    })

    await getNextPageOfData(queryRequest, this.state.data!, this.props.token)
    .then(
      (newState) => {
        this.setState({
          ...newState,
          isLoading: false,
          lastQueryRequest: cloneDeep(queryRequest)
        })
      }
    )
  }

  /**
   * Execute the initial query passed into the component
   *
   * @param {*} queryRequest Query request as specified by
   *                         https://docs.synapse.org/rest/org/sagebionetworks/repo/model/table/Query.html
   * @memberof QueryWrapper
   */
  public executeInitialQueryRequest() {
    this.setState({
      isChecked: {},
      isLoading: true,
      isLoadingNewData: true
    })
    SynapseClient
      .getQueryTableResults(this.props.initQueryRequest, this.props.token)
      .then(
        (data: QueryResultBundle) => {
          const lastQueryRequest: QueryBundleRequest = this.addAllFacetsToSelection(data)
          const hasMoreData = data.queryResult.queryResults.rows.length === SynapseConstants.PAGE_SIZE
          const facets = data.facets as FacetColumnResultValues []
          facets.forEach(
            (el) => {
              el.facetValues.forEach(
                (facetValue) => {
                  facetValue.isSelected = true
                }
              )
            }
          )
          const newState = {
            hasMoreData,
            data,
            lastQueryRequest,
            isLoading: false,
            isLoadingNewData: false
          }
          this.setState(newState)
        }
      ).catch((err) => {
        console.log('Failed to get data ', err)
      })
  }

  /**
   * Reset the initial set of facets for the lastQueryRequest object
   *
   * @public
   * @param {QueryResultBundle} data
   * @param {string} filter the facet used to filter the synapse table
   * @returns
   * @memberof QueryWrapper
   */
  public addAllFacetsToSelection(data: QueryResultBundle): QueryBundleRequest {
    // next we have to selectively choose those facets and their
    // corresponding counts, we have to get the full counts because of
    // the nature that we are clicking elements and turning them "off"
    // this is a peculiarity due to UX and the synapse backend having different behavior
    const selectedFacets = data.facets.map(
      (el) => {
        return {
          columnName: el.columnName,
          facetValues: el.facetValues.map((el: FacetColumnResultValueCount) => {
            return el.value
          }),
          concreteType: 'org.sagebionetworks.repo.model.table.FacetColumnValuesRequest'
        }
      }
    )
    const lastQueryRequest: QueryBundleRequest = cloneDeep(this.props.initQueryRequest)!
    lastQueryRequest.query.selectedFacets = selectedFacets
    return lastQueryRequest
  }

  public updateParentState(update: QueryWrapperState) {
    // This is a hack needed because the barchart and the facets have to stay insync
    // with each other (their colors), but they exist side by side in the component tree, so we
    // have to pass the isChecked array up through querywrapper
    this.setState(update)
  }

  /**
   * Render the children without any formatting
   */
  public render() {

    const { facetAliases = {} } = this.props
    // inject props in children of this component
    const childrenWithProps = (React.Children.map(this.props.children, (child: any) => {
      return React.cloneElement(child, {
        facetAliases,
        data: this.state.data,
        executeInitialQueryRequest: this.executeInitialQueryRequest,
        executeQueryRequest: this.executeQueryRequest,
        getLastQueryRequest: this.getLastQueryRequest,
        getNextPageOfData: this.getNextPageOfData,
        isChecked: this.state.isChecked,
        isLoading: this.state.isLoading,
        isLoadingNewData: this.state.isLoadingNewData,
        filter: this.props.facetName,
        rgbIndex: this.props.rgbIndex,
        unitDescription: this.props.unitDescription,
        updateParentState: this.updateParentState,
        isQueryWrapperChild: true,
        hasMoreData: this.state.hasMoreData,
        hasLoadedPastInitQuery: this.state.hasLoadedPastInitQuery,
        lastFacetSelection: this.state.lastFacetSelection
      })
    }))

    const loadingCusrorClass = this.state.isLoading ? 'SRC-logo-cursor' : ''

    if (this.props.showMenu) {
      // menu is to the left of the child components so we let that add its
      // own html
      return (
        <span className={`container-fluid ${loadingCusrorClass}`}>
          {childrenWithProps}
        </span>
      )
    }
    return (
      <div className={`container-fluid ${loadingCusrorClass}`}>
          <div className={'col-xs-12'}>
              {childrenWithProps}
          </div>
      </div>
    )
  }

}
