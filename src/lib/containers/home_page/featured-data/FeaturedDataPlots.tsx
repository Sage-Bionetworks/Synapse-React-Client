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
  return (
    <div className="FeaturedDataPlots">
      {configs.map((config:any) => {
        const isQueryPerCard = config.selectFacetColumnName
        return <div className="FeaturedDataPlots__card">
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
        </div>
      })}
    </div>)
}

export default FeaturedDataPlots
