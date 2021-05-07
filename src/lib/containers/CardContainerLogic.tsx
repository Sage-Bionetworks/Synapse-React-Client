import * as React from 'react'
import { SynapseClient, SynapseConstants } from '../utils'
import { getNextPageOfData } from '../utils/functions/queryUtils'
import {
  insertConditionsFromSearchParams,
  KeyValue,
  SQLOperator,
  parseEntityIdFromSqlStatement,
} from '../utils/functions/sqlFunctions'
import { QueryBundleRequest, QueryResultBundle } from '../utils/synapseTypes/'
import CardContainer from './CardContainer'
import { GenericCardSchema, IconOptions } from './GenericCard'
// TODO: this import nearly doubles the package size of SRC as a UMD build by ~400KB
// will have to find a way to use individual lodash packages instead of the entire thing
import { cloneDeep, isEqual } from 'lodash-es'
import { IconSvgOptions } from './IconSvg'
import { DEFAULT_PAGE_SIZE } from '../utils/SynapseConstants'
export interface CardLink {
  baseURL: string
  // the key that will go into the url
  URLColumnName: string
  // the column name who's value will be used
  matchColumnName: string
  isMarkdown: false
  // the value that will go into the url link should be surrounded with parenthesis, making the search
  // param study=(ROSMAP) instead of study=ROSMAP
  wrapValueWithParens?: boolean
}

export type MarkdownLink = {
  isMarkdown: true
  // the columns whos value will be used for the markdown
  matchColumnName: string
}

export type CTACardLink = {
  // link text
  text: string
  // column name to use for href
  link: string
}

export type DescriptionConfig = {
  isMarkdown?: boolean
  showFullDescriptionByDefault?: boolean
}

// Specify the indices in the values [] that should be rendered specially
export type LabelLinkConfig = (MarkdownLink | CardLink)[]

export type ColumnIconConfigs = {
  columns: {
    [index: string]: {
      [index: string]: IconSvgOptions
    }
  }
}

export type CommonCardProps = {
  genericCardSchema?: GenericCardSchema
  secondaryLabelLimit?: number
  titleLinkConfig?: CardLink
  ctaLinkConfig?: CTACardLink
  labelLinkConfig?: LabelLinkConfig
  descriptionConfig?: DescriptionConfig
  rgbIndex?: number
  columnIconOptions?: ColumnIconConfigs
}
export type CardConfiguration = {
  type: string
  hasInternalLink?: boolean
  iconOptions?: IconOptions
} & CommonCardProps

export type CardContainerLogicProps = {
  limit?: number
  title?: string
  unitDescription?: string
  sqlOperator?: SQLOperator
  searchParams?: KeyValue
  facet?: string
  facetAliases?: {}
  rgbIndex?: number
  isHeader?: boolean
  isAlignToLeftNav?: boolean
  sql: string
} & CardConfiguration

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
     *  If sql query has changed or search params have updated then perform an update.
     */
    const { searchParams: prevSearchParams = {} } = prevProps
    const { searchParams: currentSearchParams = {} } = this.props
    const hasSearchParamsChanged = !isEqual(
      prevSearchParams,
      currentSearchParams,
    )
    const hasSqlChanged = this.props.sql !== prevProps.sql
    if (hasSqlChanged || hasSearchParamsChanged) {
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

    await getNextPageOfData(queryRequest, this.state.data!).then(newState => {
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
    const entityId = parseEntityIdFromSqlStatement(sqlUsed)
    const limit = this.props.limit ?? DEFAULT_PAGE_SIZE
    // we don't set this in the state because it hardcodes the sql query, on componentDidUpdate
    // we need the sql to change
    const initQueryRequest: QueryBundleRequest = {
      concreteType: 'org.sagebionetworks.repo.model.table.QueryBundleRequest',
      partMask:
        SynapseConstants.BUNDLE_MASK_QUERY_COLUMN_MODELS |
        SynapseConstants.BUNDLE_MASK_QUERY_FACETS |
        SynapseConstants.BUNDLE_MASK_QUERY_RESULTS |
        SynapseConstants.BUNDLE_MASK_QUERY_COUNT,
      entityId,
      query: {
        sql: sqlUsed,
        limit: limit,
        offset: 0,
      },
    }

    SynapseClient.getQueryTableResults(initQueryRequest)
      .then((data: QueryResultBundle) => {
        const queryRequestWithoutCount = cloneDeep(initQueryRequest)
        queryRequestWithoutCount.partMask =
          SynapseConstants.BUNDLE_MASK_QUERY_COLUMN_MODELS |
          SynapseConstants.BUNDLE_MASK_QUERY_FACETS |
          SynapseConstants.BUNDLE_MASK_QUERY_RESULTS
        const hasMoreData = data.queryResult.queryResults.rows.length === limit
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
    const { sql, searchParams, ...rest } = this.props
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
