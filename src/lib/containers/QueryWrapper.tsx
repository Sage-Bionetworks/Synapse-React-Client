import * as PropTypes from 'prop-types'
import * as React from 'react'
import { FacetColumnResultValueCount, FacetColumnResultValues } from '../utils/jsonResponses/Table/FacetColumnResult'
import { QueryBundleRequest } from '../utils/jsonResponses/Table/QueryBundleRequest'
import { QueryResultBundle } from '../utils/jsonResponses/Table/QueryResultBundle'
import { SynapseClient } from '../utils/'

const cloneDeep = require('lodash.clonedeep')

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
  isChecked: []  // keep Facets and BarChart colors in sync
  isLoadingNewData: boolean
  isLoading: boolean
  lastQueryRequest: {}
}

// Since the component is an HOC we export the props passed down
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
  rgbIndex?: number
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
    token: ''
  }

  constructor(props: QueryWrapperProps) {
    super(props)
    this.executeInitialQueryRequest = this.executeInitialQueryRequest.bind(this)
    this.executeQueryRequest = this.executeQueryRequest.bind(this)
    this.getLastQueryRequest = this.getLastQueryRequest.bind(this)
    this.getNextPageOfData = this.getNextPageOfData.bind(this)
    this.resetFacetSelection = this.resetFacetSelection.bind(this)
    this.updateParentState = this.updateParentState.bind(this)
    this.state = {
      data: undefined,
      isChecked: [],
      isLoading: true,
      isLoadingNewData: true,
      lastQueryRequest: {},
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
   *
   */
  public componentDidUpdate(prevProps: any) {
    /**
     *  If component updates and the token has changed (they signed in) then the data should be pulled in. Or if the
     *  sql query has changed of the component then perform an update.
     */

    if (this.props.token !== '' && prevProps.token === '' && !this.props.json) {
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
  private getLastQueryRequest(): QueryBundleRequest {
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
    SynapseClient.getIntuitiveQueryTableResults(
      queryRequest,
      this.props.token,
      this.props.facetName,
      this.state.data!
    )
      .then(
        (data: QueryResultBundle) => {
          const newState: any = {
            data,
            isLoading: false,
            lastQueryRequest: cloneDeep(queryRequest)
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
  private getNextPageOfData(queryRequest: any) {
    this.setState({
      isLoading: true
    })
    return SynapseClient.getQueryTableResults(queryRequest, this.props.token)
      .then(
        (data: QueryResultBundle) => {
          const oldData: QueryResultBundle = cloneDeep(this.state.data)
          // push on the new data retrieved from the API call
          oldData.queryResult.queryResults.rows.push(...data.queryResult.queryResults.rows)
          const newState: any = {
            data: oldData,
            isLoading: false,
            lastQueryRequest: cloneDeep(queryRequest)
          }
          this.setState(newState)
          return Promise.resolve(data.queryResult.queryResults.rows.length > 0)
        }
      ).catch((err) => {
        console.log('Failed to get data ', err)
      })
  }

  /**
   * Execute the initial query passed into the component
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
          const filter: string = this.props.facetName
          const lastQueryRequest: QueryBundleRequest = this.resetFacetSelection(data, filter)
          const newState = {
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
   * @private
   * @param {QueryResultBundle} data
   * @param {string} filter the facet used to filter the synapse table
   * @returns
   * @memberof QueryWrapper
   */
  private resetFacetSelection(data: QueryResultBundle, filter: string): QueryBundleRequest {
    // we have to reset the facet selections by getting the original
    // facet corresponding to the original filter
    const facetsForFilter = data.facets.filter((obj: FacetColumnResultValues) => {
      return obj.columnName === filter
    })[0] as FacetColumnResultValues

    // next we have to selectively choose those facets and their
    // corresponding counts, we have to get the full counts because of
    // the nature that we are clicking elements and turning them "off"
    // this is a peculiarity due to UX and the synapse backend having different behavior
    const facetsMapped: string[] = facetsForFilter.facetValues.map((el: FacetColumnResultValueCount) => {
      return el.value
    })

    const lastQueryRequest: QueryBundleRequest = cloneDeep(this.props.initQueryRequest)
    lastQueryRequest.query.selectedFacets = [
      {
        columnName: filter,
        concreteType: 'org.sagebionetworks.repo.model.table.FacetColumnValuesRequest',
        facetValues: facetsMapped
      }
    ]
    return lastQueryRequest
  }

  private updateParentState(update: any) {
    // This is a hack needed because the barchart and the facets have to stay insync
    // with each other (their colors), but they exist side by side in the component tree, so we
    // have to pass the isChecked array up through querywrapper
    this.setState(update)
  }

  /**
   * Render the children without any formatting
   */
  public render() {

    // inject props in children of this component
    const childrenWithProps = (React.Children.map(this.props.children, (child: any) => {
      return React.cloneElement(child, {
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
        isQueryWrapperChild: true
      })
    }))

    if (this.props.showMenu) {
      // menu is to the left of the child components so we let that add its
      // own html
      return (
        childrenWithProps
      )
    }
    return (
      <div className="container-fluid">
          <div className={'col-xs-12'}>
              {childrenWithProps}
          </div>
      </div>
    )
  }

}
