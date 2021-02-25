import * as React from 'react'
import { useEffect, useState } from 'react'
import {
  DATASET,
  FUNDER,
  GENERIC_CARD,
  MEDIUM_USER_CARD,
} from '../utils/SynapseConstants'
import {
  QueryBundleRequest,
  QueryResultBundle,
  EntityHeader,
} from '../utils/synapseTypes/'
import { CardConfiguration } from './CardContainerLogic'
import GenericCard from './GenericCard'
import { Dataset, Funder } from './row_renderers'
import TotalQueryResults from './TotalQueryResults'
import UserCardList from './UserCardList'
import useGetInfoFromIds from '../utils/hooks/useGetInfoFromIds'
import loadingScreen from './LoadingScreen'
import { Button } from 'react-bootstrap'
import { SynapseConstants } from '../index'

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

export const CardContainer = (props: CardContainerProps) => {

  const [pageCount, setPageCount] = useState<number>(1)
  const {
    data,
    limit = SynapseConstants.PAGE_SIZE,
    isHeader = false,
    facet,
    unitDescription,
    type,
    isLoading,
    secondaryLabelLimit = 3,
    showBarChart = true,
    title,
    token,
    getLastQueryRequest,
    executeQueryRequest,
    ...rest
  } = props

  let mounted = true

  useEffect(() => {
    if (mounted) {
      const queryOffset = getLastQueryRequest!().query.offset!
      if (queryOffset === 0) {
        setPageCount(1)
      }
    }
    return () => {
      mounted = false
    }
  }, [data])

  /**
   * Handle a click on next or previous
   *
   * @memberof SynapseTable
   */
  const handleViewMore = () => {
    const queryRequest = getLastQueryRequest!()
    let offset = queryRequest.query.offset!
    // paginate forward
    offset += SynapseConstants.PAGE_SIZE  // TODO: Query limit 25 is hardcoded in QueryWrapperPlotNav
    queryRequest.query.offset = offset
    props.getNextPageOfData!(queryRequest)
    setPageCount(pageCount + 1)
  }

  const renderCard = (props: any, type: string) => {
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

  const ids = data?.queryResult.queryResults.tableId
    ? [data?.queryResult.queryResults.tableId]
    : []
  const tableEntityConcreteType = useGetInfoFromIds<EntityHeader>({
    ids,
    type: 'ENTITY_HEADER',
    token: props.token,
  })

  // the cards only show the loading screen on initial load, this occurs when data is undefined
  if (!data) {
    return <div>{isLoading && loadingScreen}</div>
  } else if (data && data.queryResult.queryResults.rows.length === 0) {
    // data was retrieved from the backend but there is none to show.
    // show "no results" UI (see PORTALS-1497)
    return <>
      <p className="SRC-no-results-title">
        There is currently no content here.
      </p>
      <p className="SRC-no-results-description">
        Information is always being updated, so check back later to see if content has been added.
      </p>
    </>
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

  // Calculate how many cards to display per "view more" button click
  const visibleCardCount = pageCount === 1 ? limit : limit * pageCount
  let showViewMore: boolean = data.queryResult.queryResults.rows.length > visibleCardCount

  const showViewMoreButton = showViewMore && (
    <div className="SRC-viewMore bootstrap-4-backport">
      <Button variant="secondary" className="pill-xl" onClick={handleViewMore}>
        View More
      </Button>
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
    cards = <UserCardList data={data} list={listIds} size={MEDIUM_USER_CARD} />
  } else {
    // render the cards
    const cardsData = data.queryResult.queryResults.rows.slice(0, visibleCardCount)
    cards = cardsData.length ? cardsData.map((rowData: any, index) => {
      const key = `${type}-${index}`
      const propsForCard = {
        key,
        type,
        schema,
        isHeader,
        secondaryLabelLimit,
        data: rowData.values,
        selectColumns: data.selectColumns,
        columnModels: data.columnModels,
        tableEntityConcreteType:
          tableEntityConcreteType[0] && tableEntityConcreteType[0].type,
        tableId: props.data?.queryResult.queryResults.tableId,
        token,
        ...rest,
      }
      return renderCard(propsForCard, type)
    }) : <></>

    console.log("pageCount, cardData, allData", [pageCount, cardsData, data.queryResult.queryResults.rows])
  }

  return (
    <div>
      {title && <h2 className="SRC-card-overview-title">{title}</h2>}
      {!title && unitDescription && showBarChart && (
        <TotalQueryResults
          token={token}
          isLoading={isLoading!}
          unitDescription={unitDescription}
          executeQueryRequest={executeQueryRequest}
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

export default CardContainer
