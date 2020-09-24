import * as React from 'react'
import QueryWrapperFacetPlotsCard, { QueryWrapperFacetPlotsCardProps } from './QueryWrapperFacetPlotsCard'
import { useEffect, useState } from 'react'

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
  // listen to changes to the configs that we should use.
  const [currentConfigs, setCurrentConfigs] = useState<QueryWrapperFacetPlotsCardProps[]>(configs)
  useEffect(() => {
    setCurrentConfigs(configs)
  }, [configs])

  return (
  <div className="FeaturedDataPlots">
    {currentConfigs.map(config => {
      return <div className="FeaturedDataPlots__card">
        <QueryWrapperFacetPlotsCard {...config}
          rgbIndex={rgbIndex}
          exploreSql={exploreSql}
          explorePagePath={explorePagePath}
          token={token} />
      </div>
    })}
  </div>)
}

export default FeaturedDataPlots
