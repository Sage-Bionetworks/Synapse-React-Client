import * as React from 'react'
import QueryWrapperFacetPlotsCard, { QueryWrapperFacetPlotsCardProps } from './QueryWrapperFacetPlotsCard'
import QueryWrapperFacetPlotsCards, { QueryWrapperFacetPlotsCardsProps } from './QueryWrapperFacetPlotsCards'

export type QueryWrapperFacetPlotsCardConfigProps = QueryWrapperFacetPlotsCardProps | QueryWrapperFacetPlotsCardsProps

export type FeaturedDataPlotsProps = {
  token?: string
  configs: QueryWrapperFacetPlotsCardConfigProps[]
  rgbIndex?: number
  sql?: string,
  explorePagePath?: string,
}

const FeaturedDataPlots: React.FunctionComponent<FeaturedDataPlotsProps> = props => {
  const {
    configs,
    rgbIndex,
    sql,
    token,
  } = props
  // What mode are we in?  Either every card has a different selected facet (requiring a different query),
  // or we're showing the facet counts for a single query.  This controls the layout, and how the cards are populated.
  const isQueryPerCard = (configs[0] as any).selectFacetColumnName
  return (
    <div className={`FeaturedDataPlots${isQueryPerCard ? '__queryPerCard' : '__singleQuery'}`}>
      {configs.map((config:any) => {
        return <>
          {isQueryPerCard && 
            <QueryWrapperFacetPlotsCard
              {...config}
              rgbIndex={rgbIndex}
              sql={sql}
              token={token} />
          }
          {!isQueryPerCard && 
            <QueryWrapperFacetPlotsCards
              {...config}
              rgbIndex={rgbIndex}
              sql={sql}
              token={token} />
          }
        </>
      })}
    </div>)
}

export default FeaturedDataPlots
