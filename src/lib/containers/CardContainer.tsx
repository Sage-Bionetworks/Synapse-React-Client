import * as React from 'react'
import { QueryBundleRequest } from '../utils/jsonResponses/Table/QueryBundleRequest'
import { QueryResultBundle } from '../utils/jsonResponses/Table/QueryResultBundle'
import {
  AMP_CONSORTIUM,
  AMP_PROJECT,
  AMP_STUDY,
  DATASET,
  FUNDER,
  PUBLICATION,
  STUDY,
  TOOL,
  CSBC_PROJECT,
  CSBC_PUBLICATION,
  CSBC_STUDY,
  CSBC_DATASET,
  GENERIC_CARD,
  MEDIUM_USER_CARD
} from '../utils/SynapseConstants'
import { Dataset, Funder, Publication, Study, Tool } from './row_renderers'
import { AMPStudy, Consortium, Project } from './row_renderers/AMPAD'
import CSBCProject from './row_renderers/CSBC/CSBCProject'
import CSBCPublication from './row_renderers/CSBC/CSBCPublication'
import CSBCStudy from './row_renderers/CSBC/CSBCStudy'
import CSBCDataset from './row_renderers/CSBC/CSBCDataset'
import GenericCard from './GenericCard'
import UserCardList from './UserCardList'
import { TotalQueryResults } from './TotalQueryResults'
import { CommonCardProps } from './CardContainerLogic'

const PAGE_SIZE: number = 25

export type CardContainerProps = {
  data?: QueryResultBundle,
  limit?: number,
  isHeader?: boolean
  getLastQueryRequest?: () => QueryBundleRequest
  getNextPageOfData?: (queryRequest: QueryBundleRequest) => void
  isLoading?: boolean
  filter?: string
  unitDescription?: string
  totalResultsNoFacet?: number
  hasMoreData?: boolean
  loadingScreen?: JSX.Element
  backgroundColor?: string
  showBarChart?: boolean
} & CommonCardProps

type CardContainerState = {
  cardLimit: number
}

export class CardContainer extends React.Component<CardContainerProps, CardContainerState> {

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
      case STUDY:
        return <Study {...props} />
      case DATASET:
        return <Dataset {...props} />
      case FUNDER:
        return <Funder {...props} />
      case PUBLICATION:
        return <Publication {...props} />
      case TOOL:
        return <Tool {...props} />
      case AMP_PROJECT:
        return <Project {...props} />
      case AMP_CONSORTIUM:
        return <Consortium {...props} />
      case AMP_STUDY:
        return <AMPStudy {...props} />
      case CSBC_PROJECT:
        return <CSBCProject {...props} />
      case CSBC_PUBLICATION:
        return <CSBCPublication {...props} />
      case CSBC_STUDY:
        return <CSBCStudy {...props} />
      case CSBC_DATASET:
        return <CSBCDataset {...props} />
      case GENERIC_CARD:
        return <GenericCard {...props} />
      default:
        return (<div />) // this should never happen
    }
  }
  public render() {
    const {
      data,
      limit = Infinity,
      isHeader = false,
      filter,
      unitDescription,
      type,
      isLoading,
      loadingScreen,
      secondaryLabelLimit = 3,
      genericCardSchema,
      backgroundColor,
      iconOptions,
      internalLinkConfiguration,
      showBarChart = true
    } = this.props
    // the cards only show the loading screen on initial load, this occurs when data is undefined
    if (!data) {
      return (
        <div>
         {isLoading && loadingScreen}
        </div>
      )
    }
    const schema = {}
    data.queryResult.queryResults.headers.forEach(
      (element, index) => {
        schema[element.name] = index
      })

    // We want to hide the view more button if:
    //     1. The data fed in has !== PAGE_SIZE number of results
    //     2. The hasMoreData prop is false
    //     3. The limit is set to less than PAGE_SIZE
    // below we show the view more button by following the opposite logic from above.
    let showViewMore: boolean = limit >= PAGE_SIZE && data.queryResult.queryResults.rows.length >= PAGE_SIZE
    showViewMore = showViewMore && this.props.hasMoreData!

    const showViewMoreButton = (
      showViewMore
      &&
      (
        <div>
          <button
            onClick={this.handleViewMore}
            className="pull-right SRC-primary-background-color-hover SRC-next-color SRC-viewMoreButton"
          >
            View More
          </button>
        </div>
      )
    )
    let cards
    if (type === MEDIUM_USER_CARD) {
      // Hard coding ownerId as a column name containing the user profile ownerId
      // for each row, grab the column with the ownerId
      const userIdColumnIndex = data.queryResult.queryResults.headers.findIndex(
        el => el.columnType === 'USERID'
      )
      if (userIdColumnIndex === -1) {
        throw Error('Type MEDIUM_USER_CARD specified but no columnType USERID found')
      }
      const listIds = data.queryResult.queryResults.rows.map(el => el.values[userIdColumnIndex])
      cards = <UserCardList data={data} list={listIds} size={MEDIUM_USER_CARD}/>
    } else {
      // render the cards
      cards = data.queryResult.queryResults.rows.map(
        (rowData: any, index) => {
          if (index < limit) {
            const key = JSON.stringify(rowData.values)
            const propsForCard = {
              key,
              type,
              internalLinkConfiguration,
              schema,
              isHeader,
              genericCardSchema,
              secondaryLabelLimit,
              backgroundColor,
              iconOptions,
              data: rowData.values,
            }
            return this.renderCard(propsForCard, type)
          }
          return false
        }
      )
    }

    return (
      <div>
        {(unitDescription && showBarChart) &&
          <TotalQueryResults
            data={data}
            filter={filter}
            unitDescription={unitDescription!}
            isLoading={isLoading!}
          />
        }
        {/* ReactCSSTransitionGroup adds css fade in property for cards that come into view */}
        {cards}
        {showViewMoreButton}
      </div>
    )
  }
}

export default CardContainer
