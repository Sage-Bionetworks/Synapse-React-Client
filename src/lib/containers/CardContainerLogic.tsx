import * as React from 'react'
import CardContainer from './CardContainer'
import { QueryBundleRequest } from '../utils/jsonResponses/Table/QueryBundleRequest'
import { QueryResultBundle } from '../utils/jsonResponses/Table/QueryResultBundle'
import { SynapseClient, SynapseConstants } from '../utils'
import { cloneDeep } from '../utils/modules'
import { getNextPageOfData } from '../utils/modules/queryUtils'
import { GenericCardSchema, IconOptions } from './GenericCard'
import {
  insertConditionsFromSearchParams,
  KeyValue,
  SQLOperator,
} from '../utils/modules/sqlFunctions'

export interface CardLink {
  baseURL: string
  // the keys that will go into the url
  URLColumnNames: string[]
  isMarkdown: false
}

export interface LabelLink extends CardLink {
  // the columns whos value will be paired with the columns URLColumnNames
  matchColumnName: string
}

export interface LabelMarkdown {
  isMarkdown: true
  // the columns whos value will be paired with the columns URLColumnNames
  matchColumnName: string
}
// Specify the indices in the values [] that should be rendered specially
export type LabelConfig = (LabelLink | LabelMarkdown)[]

export type CommonCardProps = {
  type: string
  genericCardSchema?: GenericCardSchema
  hasInternalLink?: boolean
  iconOptions?: IconOptions
  secondaryLabelLimit?: number
  titleLinkConfig?: CardLink
  LabelConfig?: LabelConfig
  loadingScreen?: React.FunctionComponent | JSX.Element
}

export type CardContainerLogicProps = {
  token?: string
  limit?: number
  title?: string
  unitDescription?: string
  sqlOperator?: SQLOperator
  searchParams?: KeyValue
  facet?: string
  loadingScreen?: JSX.Element
  genericCardSchema?: GenericCardSchema
  backgroundColor?: string
  isHeader?: boolean
  sql: string
} & CommonCardProps

type State = {
  data: QueryResultBundle | undefined
  isLoading: boolean
  queryRequest: QueryBundleRequest
  totalResultsNoFacet: number
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
export default class CardContainerLogic extends React.Component<
  CardContainerLogicProps,
  State
> {
  public static defaultProps = {
    token: '',
  }

  public static defaultState = {
    data: undefined,
    isLoading: true,
    queryRequest: {} as QueryBundleRequest,
    totalResultsNoFacet: 0,
    hasMoreData: true,
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
  public componentDidUpdate(prevProps: CardContainerLogicProps) {
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
        queryRequest: cloneDeep(queryRequest),
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
  public executeInitialQueryRequest() {
    this.setState({
      isLoading: true,
    })

    let sqlUsed = this.props.sql
    if (this.props.searchParams) {
      sqlUsed = insertConditionsFromSearchParams(
        this.props.searchParams,
        this.props.sql,
        this.props.sqlOperator,
      )
    }

    // we don't set this in the state because it hardcodes the sql query, on componentDidUpdate
    // we need the sql to change
    const initQueryRequest: QueryBundleRequest = {
      concreteType: 'org.sagebionetworks.repo.model.table.QueryBundleRequest',
      partMask:
        SynapseConstants.BUNDLE_MASK_QUERY_COLUMN_MODELS |
        SynapseConstants.BUNDLE_MASK_QUERY_FACETS |
        SynapseConstants.BUNDLE_MASK_QUERY_RESULTS |
        SynapseConstants.BUNDLE_MASK_QUERY_COUNT,
      query: {
        sql: sqlUsed,
        isConsistent: false,
        limit: 25,
        offset: 0,
      },
    }

    SynapseClient.getQueryTableResults(initQueryRequest, this.props.token)
      .then((data: QueryResultBundle) => {
        const queryRequestWithoutCount = cloneDeep(initQueryRequest)
        queryRequestWithoutCount.partMask =
          SynapseConstants.BUNDLE_MASK_QUERY_COLUMN_MODELS |
          SynapseConstants.BUNDLE_MASK_QUERY_FACETS |
          SynapseConstants.BUNDLE_MASK_QUERY_RESULTS

        const hasMoreData =
          data.queryResult.queryResults.rows.length ===
          SynapseConstants.PAGE_SIZE
        const newState = {
          hasMoreData,
          data,
          queryRequest: queryRequestWithoutCount,
          isLoading: false,
          totalResultsNoFacet: data.queryCount!,
        }
        this.setState(newState)
      })
      .catch(err => {
        console.log('Failed to get data ', err)
      })
  }

  /**
   * Render the children without any formatting
   */
  public render() {
    // only forward the necessary props
    const { sql, searchParams, token, ...rest } = this.props
    return (
      <CardContainer
        {...rest}
        data={this.state.data}
        getLastQueryRequest={this.getLastQueryRequest}
        getNextPageOfData={this.getNextPageOfData}
        hasMoreData={this.state.hasMoreData}
        isLoading={this.state.isLoading}
      />
    )
  }
}
