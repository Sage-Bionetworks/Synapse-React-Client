import * as React from 'react'
import {
  DATASET,
  FUNDER,
  GENERIC_CARD,
  MEDIUM_USER_CARD,
} from '../utils/SynapseConstants'
import { QueryBundleRequest, QueryResultBundle } from '../utils/synapseTypes/'
import { CardConfiguration } from './CardContainerLogic'
import GenericCard from './GenericCard'
import { Dataset, Funder } from './row_renderers'
import TotalQueryResults from './TotalQueryResults'
import UserCardList from './UserCardList'

const PAGE_SIZE: number = 25

export type CardContainerProps = {
  data?: QueryResultBundle
  limit?: number
  isHeader?: boolean
  isAlignToLeftNav?: boolean
  title?: string
  executeQueryRequest?: (param: QueryBundleRequest) => void
  facetAliases?: {}
  getLastQueryRequest?: () => QueryBundleRequest
  getNextPageOfData?: (queryRequest: QueryBundleRequest) => void
  isLoading?: boolean
  facet?: string
  unitDescription?: string
  hasMoreData?: boolean
  showBarChart?: boolean
  token?: string
} & CardConfiguration

type CardContainerState = {
  cardLimit: number
}

export class CardContainer extends React.Component<
  CardContainerProps,
  CardContainerState
> {
  constructor(props: CardContainerProps) {
    super(props)
    this.handleViewMore = this.handleViewMore.bind(this)
  }

  /**
   * Handle a click on next or previous
   *
   * @memberof SynapseTable
   */
  public handleViewMore() {
    const queryRequest = this.props.getLastQueryRequest!()
    let offset = queryRequest.query.offset!
    // paginate forward
    offset += PAGE_SIZE
    queryRequest.query.offset = offset
    this.props.getNextPageOfData!(queryRequest)
  }

  public renderCard = (props: any, type: string) => {
    switch (type) {
      case DATASET:
        return <Dataset {...props} />
      case FUNDER:
        return <Funder {...props} />
      case GENERIC_CARD:
        return <GenericCard {...props} />
      default:
        return <div /> // this should never happen
    }
  }
  public render() {
    const {
      data,
      limit = Infinity,
      isHeader = false,
      facet,
      unitDescription,
      type,
      isLoading,
      loadingScreen,
      secondaryLabelLimit = 3,
      showBarChart = true,
      title,
      token,
      getLastQueryRequest,
      ...rest
    } = this.props
    // the cards only show the loading screen on initial load, this occurs when data is undefined
    if (!data) {
      return <div>{isLoading && loadingScreen}</div>
    } else if (data && data.queryResult.queryResults.rows.length === 0) {
      // data was retrieved from the backend but there is none to show, we return a empty fragment
      // there could be a more informed UX decision here but the current use case right now
      // should display nothing
      return <React.Fragment />
    }
    const schema = {}
    data.queryResult.queryResults.headers.forEach((element, index) => {
      schema[element.name] = index
    })

    // We want to hide the view more button if:
    //   1. The data fed in has !== PAGE_SIZE number of results
    //   2. The hasMoreData prop is false
    //   3. The limit is set to less than PAGE_SIZE
    // below we show the view more button by following the opposite logic from above.
    let showViewMore: boolean =
      limit >= PAGE_SIZE &&
      data.queryResult.queryResults.rows.length >= PAGE_SIZE
    showViewMore = showViewMore && this.props.hasMoreData!

    const showViewMoreButton = showViewMore && (
      <div>
        <button
          onClick={this.handleViewMore}
          className="pull-right SRC-standard-button-shape SRC-light-button"
        >
          View More
        </button>
      </div>
    )
    let cards
    if (type === MEDIUM_USER_CARD) {
      // Hard coding ownerId as a column name containing the user profile ownerId
      // for each row, grab the column with the ownerId
      const userIdColumnIndex = data.queryResult.queryResults.headers.findIndex(
        el => el.columnType === 'USERID',
      )
      if (userIdColumnIndex === -1) {
        throw Error(
          'Type MEDIUM_USER_CARD specified but no columnType USERID found',
        )
      }
      const listIds = data.queryResult.queryResults.rows.map(
        el => el.values[userIdColumnIndex],
      )
      cards = (
        <UserCardList data={data} list={listIds} size={MEDIUM_USER_CARD} />
      )
    } else {
      // render the cards
      cards = data.queryResult.queryResults.rows.map((rowData: any, index) => {
        if (index < limit) {
          const key = JSON.stringify(rowData.values)
          const propsForCard = {
            key,
            type,
            schema,
            isHeader,
            secondaryLabelLimit,
            data: rowData.values,
            selectColumns: data.selectColumns,
            columnModels: data.columnModels,
            token,
            ...rest,
          }
          return this.renderCard(propsForCard, type)
        }
        return false
      })
    }

    return (
      <div>
        {title && <h2 className="SRC-card-overview-title">{title}</h2>}
        {!title && unitDescription && showBarChart && (
          <TotalQueryResults
            token={token}
            isLoading={isLoading!}
            unitDescription={unitDescription}
            executeQueryRequest={this.props.executeQueryRequest}
            lastQueryRequest={getLastQueryRequest!()}
            frontText={'Displaying'}
          />
        )}
        {/* ReactCSSTransitionGroup adds css fade in property for cards that come into view */}
        {cards}
        {showViewMoreButton}
      </div>
    )
  }
}

export default CardContainer
