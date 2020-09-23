import * as React from 'react'
import QueryWrapperFacetPlotsCard, { QueryWrapperFacetPlotsCardProps } from './QueryWrapperFacetPlotsCard'

export type FeaturedDataPlotsProps = {
  configs: QueryWrapperFacetPlotsCardProps[]
}

const FeaturedDataPlots: React.FunctionComponent<FeaturedDataPlotsProps> = props => {
  const {
    configs
  } = props
  return (
  <div className="FeaturedDataPlots">
    ({configs.map(config => {
      return <div className="FeaturedDataPlots__card">
        <QueryWrapperFacetPlotsCard {...config}></QueryWrapperFacetPlotsCard>
      </div>
    })})
  </div>)
}

export default FeaturedDataPlots
