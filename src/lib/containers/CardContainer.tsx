import * as PropTypes from 'prop-types'
import * as React from 'react'
import { FacetColumnResultValues } from '../utils/jsonResponses/Table/FacetColumnResult'
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
  TOOL
} from '../utils/SynapseConstants'
import { Dataset, Funder, Publication, Study, Tool } from './row_renderers'
import { AMP_Study, Consortium, Project } from './row_renderers/AMPAD'

const PAGE_SIZE: number = 25

type RowContainerProps = {
  data: any
  limit: number
  schema: any
  token?: string
  isHeader: boolean
  type: string
}

// Instead of giving each of the Study/Tool/etc components the same
// props we make a simple container that does
export const RowContainer: React.SFC<RowContainerProps> = (props) => {
  const { type, ...rest } = props
  switch (type) {
    case STUDY:
      return <Study {...rest} />
    case DATASET:
      return <Dataset {...rest} />
    case FUNDER:
      return <Funder {...rest} />
    case PUBLICATION:
      return <Publication {...rest} />
    case TOOL:
      return <Tool {...rest} />
    case AMP_PROJECT:
      return <Project {...rest} />
    case AMP_CONSORTIUM:
      return <Consortium {...rest} />
    case AMP_STUDY:
      return <AMP_Study {...rest} />
    default:
      return (<div />) // this should never happen
  }
}

export type CardContainerProps = {
  type: string,
  data?: QueryResultBundle,
  limit?: number,
  hideOrganizationLink?: boolean
  token?: string
  ownerId?: string
  isHeader?: boolean
  isQueryWrapperChild?: boolean
  getLastQueryRequest?: () => QueryBundleRequest
  getNextPageOfData?: (queryRequest: QueryBundleRequest) => Promise<boolean>
  isLoading?: boolean
  filter?: string
  unitDescription?: string
  totalResultsNoFacet?: number
}

type CardContainerState = {
  hasMoreData: boolean
  cardLimit: number
  hasLoadedBufferData: boolean
}

export class CardContainer extends React.Component<CardContainerProps, CardContainerState> {

  public static propTypes = {
    hideOrganizationLink: PropTypes.bool,
    limit: PropTypes.number,
    type: PropTypes.oneOf([STUDY, DATASET, FUNDER, PUBLICATION, TOOL, AMP_PROJECT, AMP_CONSORTIUM, AMP_STUDY])
  }

  constructor(props: CardContainerProps) {
    super(props)
    this.handleViewMore = this.handleViewMore.bind(this)
    this.getBufferData = this.getBufferData.bind(this)
    this.gatherData = this.gatherData.bind(this)
    this.state = {
      cardLimit: PAGE_SIZE,
      hasLoadedBufferData: false,
      hasMoreData: true
    }
  }

  public componentDidMount() {
    // we try to load one page of data ahead of cards, this allows the "view more" behavior
    // to be instant
    this.getBufferData()
  }

  public getBufferData() {
    // Load data ahead of the currently displayed data, do this recursively in case it needs more time
    if (!this.state.hasLoadedBufferData) {
      // the code is written this way to allow testing of gatherData
      setTimeout(this.gatherData, 1500)
    }
  }

  public gatherData() {
    if (!this.props.getLastQueryRequest) {
      // parent component still setting up
      this.getBufferData()
      return
    }
    const queryRequest = this.props.getLastQueryRequest!()
    if (!queryRequest.query) {
      // parent component still setting up
      this.getBufferData()
      return
    }
    let offset = queryRequest.query.offset!
    // if its a "previous" click subtract from the offset
    // otherwise its next and we paginate forward
    offset += PAGE_SIZE
    queryRequest.query.offset = offset
    this.props.getNextPageOfData!(queryRequest).then((hasMoreData) => {
      this.setState({ hasMoreData, hasLoadedBufferData: true })
    })
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
    const { cardLimit } = this.state
    this.setState({ cardLimit: cardLimit + PAGE_SIZE })

    this.props.getNextPageOfData!(queryRequest).then(
      (hasMoreData) => {
        if (!hasMoreData) {
          this.setState({ hasMoreData: false })
        }
      }
    )
  }

  public render() {
    const {
      data,
      limit = Infinity,
      token = '',
      isHeader = false,
      filter,
      unitDescription,
      type
    } = this.props
    if (data === undefined || Object.keys(data).length === 0) {
      return <div className="container" />
    }
    const schema = {}
    data.queryResult.queryResults.headers.forEach(
      (element: any, index: any) => {
        schema[element.name] = index
      })

    const cardLimit = this.state.cardLimit

    // We want to hide the view more button if:
    //     1. On page load we get the initial results and find there are < PAGE_SIZE rows
    //        or the limit was set to less than PAGE_SIZE
    //     2. We have done a subsequent query request from init render and have found
    //        that there were no rows returned.
    //     3. If it's loading then we want it to remove from the screen so the browser doesn't
    //        keep the button in focus (its a UX issue).
    //     4. The limit is set to less than PAGE_SIZE
    let showViewMore: boolean = limit >= PAGE_SIZE && data.queryResult.queryResults.rows.length >= PAGE_SIZE
    showViewMore = showViewMore && this.state.hasMoreData
    showViewMore = showViewMore && !this.props.isLoading

    const { facets = [] } = data
    let total = 0
    if (filter) {
      const curFacetsIndex = facets.findIndex(el => el.facetType === 'enumeration' && el.columnName === filter)
      // calculate the values chosen
      const curFacets = data.facets[curFacetsIndex] as FacetColumnResultValues
      // edge case -- if they are all false then they are considered all true..
      // sum up the counts of data
      let anyTrue = false
      let totalAllFalseCase = 0
      let totalStandardCase = 0

      if (curFacets) {
        for (const key of curFacets.facetValues) {
          anyTrue = anyTrue || key.isSelected
          totalAllFalseCase += key.count
          totalStandardCase += key.isSelected ? key.count : 0
        }
      }
      total = anyTrue ? totalStandardCase : totalAllFalseCase

      if (data.queryResult.queryResults.rows.length === 0) {
        // we override the statements above if there are zero results because the current UI
        // would be showing zero cards
        total = 0
      }

    } else {
      // If the user isn't drilling down with a facet then we look at the total
      // count passed into the view
      total = this.props.totalResultsNoFacet!
    }
    const showViewMoreButton = (
      showViewMore
      &&
      (
        <div>
          <button
            onClick={this.handleViewMore}
            className="pull-right SRC-primary-background-color-hover SRC-viewMoreButton"
          >
            View More
          </button>
        </div>
      )
    )

    return (
      <div>
        <p className="SRC-boldText SRC-text-title">Displaying {total} {unitDescription}</p>
        {/*
          Below we loop through the rows of the table and we render a specific row, we can
          use the key={index} because the underlying table *shouldn't* be changing beneath
          us and does in fact act as a unique identifier
          */}
        {data.queryResult.queryResults.rows.map(
          (rowData: any, index: number) => {
            if (index < cardLimit) {
              return (
                <React.Fragment key={index}>
                  <RowContainer
                    type={type}
                    limit={cardLimit}
                    data={rowData.values}
                    schema={schema}
                    token={token}
                    isHeader={isHeader}
                  />
                </React.Fragment>
              )
            }
            return false
          })}
        {showViewMoreButton}
      </div>
    )
  }
}

export default CardContainer
