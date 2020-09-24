import * as React from 'react'
import QueryWrapperFacetPlotsCard, { QueryWrapperFacetPlotsCardProps } from './QueryWrapperFacetPlotsCard'
import { useEffect, useState } from 'react'

export type FeaturedDataPlotsProps = {
  configs: QueryWrapperFacetPlotsCardProps[]
}

const FeaturedDataPlots: React.FunctionComponent<FeaturedDataPlotsProps> = props => {
  const {
    configs
  } = props
  // listen to changes to the configs that we should use.
  const [currentConfigs, setCurrentConfigs] = useState<QueryWrapperFacetPlotsCardProps[]>(configs)
  useEffect(() => {
    setCurrentConfigs(configs)
  }, [configs])

  return (
  <div className="FeaturedDataPlots">
    {currentConfigs.map(config => {
      return <div className="FeaturedDataPlots__card">
        <QueryWrapperFacetPlotsCard {...config}></QueryWrapperFacetPlotsCard>
      </div>
    })}
  </div>)
}

export default FeaturedDataPlots
