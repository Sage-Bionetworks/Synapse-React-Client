import * as React from 'react'
// tslint:disable-next-line
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
  TOOL,
  CSBC_PROJECT,
  CSBC_PUBLICATION,
  CSBC_STUDY,
  CSBC_DATASET,
  GENERIC_CARD
} from '../utils/SynapseConstants'
import { Dataset, Funder, Publication, Study, Tool } from './row_renderers'
import { AMP_Study, Consortium, Project } from './row_renderers/AMPAD'
import CSBCProject from './row_renderers/CSBC/CSBCProject'
import CSBCPublication from './row_renderers/CSBC/CSBCPublication'
import CSBCStudy from './row_renderers/CSBC/CSBCStudy'
import CSBCDataset from './row_renderers/CSBC/CSBCDataset'
import GenericCard, { GenericCardSchema, IconOptions } from './GenericCard'

const PAGE_SIZE: number = 25

type RowContainerProps = {
  data: any
  limit: number
  schema: any
  isHeader: boolean
  type: string
  genericCardSchema?: GenericCardSchema
  secondaryLabelLimit?: number
  backgroundColor?: string
  iconOptions?: IconOptions
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
    case CSBC_PROJECT:
      return <CSBCProject {...rest} />
    case CSBC_PUBLICATION:
      return <CSBCPublication {...rest} />
    case CSBC_STUDY:
      return <CSBCStudy {...rest} />
    case CSBC_DATASET:
      return <CSBCDataset {...rest} />
    case GENERIC_CARD:
      return <GenericCard {...{ ...rest, genericCardSchema: rest.genericCardSchema! }} />
    default:
      return (<div />) // this should never happen
  }
}

export type CardContainerProps = {
  type: string,
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
  genericCardSchema?: GenericCardSchema
  secondaryLabelLimit?: number
  backgroundColor?: string
  iconOptions?: IconOptions
}

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
      secondaryLabelLimit,
      genericCardSchema,
      backgroundColor,
      iconOptions,
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
      (element: any, index: any) => {
        schema[element.name] = index
      })

    // We want to hide the view more button if:
    //     1. The data fed in has !== PAGE_SIZE number of results
    //     2. The hasMoreData prop is false
    //     3. The limit is set to less than PAGE_SIZE
    // below we show the view more button by following the opposite logic from above.
    let showViewMore: boolean = limit >= PAGE_SIZE && data.queryResult.queryResults.rows.length >= PAGE_SIZE
    showViewMore = showViewMore && this.props.hasMoreData!

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
            className="pull-right SRC-primary-background-color-hover SRC-next-color SRC-viewMoreButton"
          >
            View More
          </button>
        </div>
      )
    )

    // render the cards
    const cards = data.queryResult.queryResults.rows.map(
      (rowData: any, index) => {
        if (index < limit) {
          const key = JSON.stringify(rowData.values)
          return (
            <RowContainer
              key={key}
              type={type}
              limit={limit}
              data={rowData.values}
              schema={schema}
              isHeader={isHeader}
              genericCardSchema={genericCardSchema}
              secondaryLabelLimit={secondaryLabelLimit}
              backgroundColor={backgroundColor}
              iconOptions={iconOptions}
            />
          )
        }
        return false
      })

    return (
      <div>
        {unitDescription &&
          <p className="SRC-boldText SRC-text-title SRC-centerContent">Displaying {total} {unitDescription}
            {/*
              add loading spinner to the right of the display information to show content is loading on view more click
            */}
            {isLoading &&
              <React.Fragment>
                <span style={{ marginLeft: '2px' }} className={'spinner'}/>
              </React.Fragment>
            }
          </p>
        }
        {/* ReactCSSTransitionGroup adds css fade in property for cards that come into view */}
        {cards}
        {showViewMoreButton}
      </div>
    )
  }
}

export default CardContainer
