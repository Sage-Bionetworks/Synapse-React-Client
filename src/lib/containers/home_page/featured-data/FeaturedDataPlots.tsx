import * as React from 'react'
import QueryWrapperFacetPlotsCard, { QueryWrapperFacetPlotsCardProps } from './QueryWrapperFacetPlotsCard'

export type FeaturedDataPlotsProps = {
  token?: string
  configs: QueryWrapperFacetPlotsCardProps[]
  rgbIndex?: number
  exploreSql?: string,
  explorePagePath?: string,
}

const FeaturedDataPlots: React.FunctionComponent<FeaturedDataPlotsProps> = props => {
  const {
    configs,
    rgbIndex,
    exploreSql,
    explorePagePath,
    token,
  } = props
  return (
  <div className="FeaturedDataPlots">
    {configs.map(config => {
      return <div className="FeaturedDataPlots__card">
        <QueryWrapperFacetPlotsCard 
          {...config}
          rgbIndex={rgbIndex}
          exploreSql={exploreSql}
          explorePagePath={explorePagePath}
          token={token} />
      </div>
    })}
  </div>)
}

export default FeaturedDataPlots
