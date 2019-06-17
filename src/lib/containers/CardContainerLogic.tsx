import * as React from 'react'
import CardContainer from './CardContainer'
import { QueryBundleRequest } from '../utils/jsonResponses/Table/QueryBundleRequest'
import { QueryResultBundle } from '../utils/jsonResponses/Table/QueryResultBundle'
import { SynapseClient, SynapseConstants } from '../utils'
import { cloneDeep } from '../utils/modules'
import { getNextPageOfData } from '../utils/modules/queryUtils'
import { GenericCardSchema, IconOptions } from './GenericCard'

export type CardContainerLogicProps = {
  sql: string
  token?: string
  limit?: number
  secondaryLabelLimit?: number
  unitDescription?: string
  type: string
  filter?: string
  loadingScreen?: JSX.Element
  genericCardSchema?: GenericCardSchema
  backgroundColor?:string
  isHeader?:boolean
  iconOptions?: IconOptions
  hasInternalLink?: boolean
}

type State = {
  data: QueryResultBundle | undefined
  isLoading: boolean
  queryRequest: QueryBundleRequest
  totalResultsNoFacet: number,
  hasMoreData: boolean
}

/**
 * Class wraps around CardContainer and serves as a standalone logic container for rendering cards.
 * This same logic exists in QueryWrapper, but the two serve two distinct purposes, making this component
 * sufficiently distinct.
 *
 * @class CardContainerLogic
 * @extends {React.Component}
 */
export default class CardContainerLogic extends React.Component<CardContainerLogicProps, State> {

  public static defaultProps = {
    token: ''
  }

  public static defaultState = {
    data: undefined,
    isLoading: true,
    queryRequest: {} as QueryBundleRequest,
    totalResultsNoFacet: 0,
    hasMoreData: true
  }

  constructor(props: CardContainerLogicProps) {
    super(props)
    this.executeInitialQueryRequest = this.executeInitialQueryRequest.bind(this)
    this.getLastQueryRequest = this.getLastQueryRequest.bind(this)
    this.getNextPageOfData = this.getNextPageOfData.bind(this)
    this.state = CardContainerLogic.defaultState
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
          queryRequest: cloneDeep(queryRequest)
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
      isLoading: true,
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

          const hasMoreData = data.queryResult.queryResults.rows.length === SynapseConstants.PAGE_SIZE
          const newState = {
            hasMoreData,
            data,
            queryRequest: queryRequestWithoutCount,
            isLoading: false,
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
      <CardContainer
        hasInternalLink={this.props.hasInternalLink}
        data={this.state.data}
        limit={this.props.limit}
        type={this.props.type}
        totalResultsNoFacet={this.state.totalResultsNoFacet}
        unitDescription={this.props.unitDescription}
        getLastQueryRequest={this.getLastQueryRequest}
        getNextPageOfData={this.getNextPageOfData}
        filter={this.props.filter}
        genericCardSchema={this.props.genericCardSchema}
        hasMoreData={this.state.hasMoreData}
        loadingScreen={this.props.loadingScreen}
        isLoading={this.state.isLoading}
        secondaryLabelLimit={this.props.secondaryLabelLimit}
        backgroundColor={this.props.backgroundColor}
        isHeader={this.props.isHeader}
        iconOptions={this.props.iconOptions}
      />
    )
  }

}
