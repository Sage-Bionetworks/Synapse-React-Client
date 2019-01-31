import * as PropTypes from 'prop-types'
import * as React from 'react'
import SynapseTableCardView from './SynapseTableCardView'
import { QueryBundleRequest } from '../utils/jsonResponses/Table/QueryBundleRequest'
import { QueryResultBundle } from '../utils/jsonResponses/Table/QueryResultBundle'
import { SynapseClient, SynapseConstants } from '../utils/'
import { cloneDeep } from '../utils/modules'

type SynapseTableCardViewWrapperProps = {
  sql: string
  token?: string
  limit?: number
  unitDescription: string
  type: string
  filter?: string
}

type State = {
  data: QueryResultBundle | undefined
  isLoadingNewData: boolean
  isLoading: boolean
  queryRequest: QueryBundleRequest
  totalResultsNoFacet: number
}

/**
 * Class wraps around any Synapse views that are dependent on a query bundle
 * Those classes then take in as props:
 *
 * @class QueryWrapper
 * @extends {React.Component}
 */
export default class SynapseTableCardViewWrapper extends React.Component<SynapseTableCardViewWrapperProps, State> {

  public static propTypes = {
    queryRequest: PropTypes.shape({
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

  constructor(props: SynapseTableCardViewWrapperProps) {
    super(props)
    this.executeInitialQueryRequest = this.executeInitialQueryRequest.bind(this)
    this.getLastQueryRequest = this.getLastQueryRequest.bind(this)
    this.getNextPageOfData = this.getNextPageOfData.bind(this)
    this.state = {
      data: undefined,
      isLoading: true,
      isLoadingNewData: true,
      queryRequest: {} as QueryBundleRequest,
      totalResultsNoFacet: 0
    }
  }

  /**
   * Compute default query request
   *
   * @memberof QueryWrapper
   */
  public componentDidMount() {
    this.executeInitialQueryRequest()
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

    if (this.props.token !== '' && prevProps.token === '') {
      this.executeInitialQueryRequest()
    }
    if (prevProps.sql !== this.props.sql) {
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
    return cloneDeep(this.state.queryRequest)
  }

  /**
   * Grab the next page of data, pulling in 25 more rows.
   *
   * @param {*} queryRequest Query request as specified by
   *                         https://docs.synapse.org/rest/org/sagebionetworks/repo/model/table/Query.html
   * @memberof QueryWrapper
   */
  public getNextPageOfData(queryRequest: QueryBundleRequest) {
    this.setState({
      isLoading: true
    })
    return SynapseClient.getQueryTableResults(queryRequest, this.props.token)
      .then(
        (data: QueryResultBundle) => {
          const oldData: QueryResultBundle = cloneDeep(this.state.data)!
          // push on the new data retrieved from the API call
          oldData.queryResult.queryResults.rows.push(...data.queryResult.queryResults.rows)
          const newState: any = {
            data: oldData,
            isLoading: false,
            queryRequest: cloneDeep(queryRequest)
          }
          this.setState(newState)
          return Promise.resolve(data.queryResult.queryResults.rows.length > 0)
        }
      ).catch((err) => {
        console.log('Failed to get data ', err)
        return Promise.resolve(false)
      })
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
      isLoading: true,
      isLoadingNewData: true
    })

    // we don't set this in the state because it hardcodes the sql query, on componentDidUpdate
    // we need the sql to change
    const initQueryRequest = {
      concreteType: 'org.sagebionetworks.repo.model.table.QueryBundleRequest',
      partMask:
        SynapseConstants.BUNDLE_MASK_QUERY_COLUMN_MODELS |
        SynapseConstants.BUNDLE_MASK_QUERY_FACETS |
        SynapseConstants.BUNDLE_MASK_QUERY_RESULTS |
        SynapseConstants.BUNDLE_MASK_QUERY_COUNT
        ,
      query: {
        sql: this.props.sql,
        isConsistent: false,
        limit: 25,
        offset: 0,
      }
    }

    SynapseClient
      .getQueryTableResults(initQueryRequest, this.props.token)
      .then(
        (data: QueryResultBundle) => {
          const queryRequestWithoutCount = cloneDeep(initQueryRequest)
          queryRequestWithoutCount.partMask = (
                                                SynapseConstants.BUNDLE_MASK_QUERY_COLUMN_MODELS |
                                                SynapseConstants.BUNDLE_MASK_QUERY_FACETS |
                                                SynapseConstants.BUNDLE_MASK_QUERY_RESULTS
                                            )
          const newState = {
            data,
            queryRequest: queryRequestWithoutCount,
            isLoading: false,
            isLoadingNewData: false,
            totalResultsNoFacet: data.queryCount!
          }
          this.setState(newState)
        }
      ).catch((err) => {
        console.log('Failed to get data ', err)
      })
  }

  /**
   * Render the children without any formatting
   */
  public render() {
    return (
      <div className="container-fluid">
          <SynapseTableCardView
            data={this.state.data}
            limit={this.props.limit}
            type={this.props.type}
            totalResultsNoFacet={this.state.totalResultsNoFacet}
            unitDescription={this.props.unitDescription}
            getLastQueryRequest={this.getLastQueryRequest}
            getNextPageOfData={this.getNextPageOfData}
            filter={this.props.filter}
          />
      </div>
    )
  }

}
