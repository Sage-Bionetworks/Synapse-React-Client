import * as React from 'react'
import { useEffect, useState } from 'react'
import FeaturedDataPlots, { FeaturedDataPlotsProps } from './FeaturedDataPlots'
import { getQueryRequest } from './QueryWrapperFacetPlotsCard'
import { Icon } from 'lib/containers/row_renderers/utils'

export type FeatureDataTabProps = {
  title: string, // type of data being shown, used for the tab title and explore all button
  icon?: string,
  plotsConfig: FeaturedDataPlotsProps,
  exploreSql: string,
  exploreFacetColumnName: string,
  exploreFacetColumnValue: string,
  explorePagePath: string,
}

export type FeaturedDataTabsProps = {
  configs: FeatureDataTabProps[]
}

const FeaturedDataTabs: React.FunctionComponent<FeaturedDataTabsProps> = props => {
  const [selectedTabIndex, setSelectedTabIndex] = useState<number>(0)
  const [selectedTabProps, setSelectedTabProps] = useState<FeatureDataTabProps>()
  const {
    configs
  } = props
  useEffect(() => {
    setSelectedTabProps(configs[selectedTabIndex])
  }, [selectedTabIndex])
  // explore all data button
  let stringifiedQuery = ''
  if (selectedTabProps) {
    const queryRequest = getQueryRequest(
      selectedTabProps.exploreSql,
      selectedTabProps.exploreFacetColumnName,
      selectedTabProps.exploreFacetColumnValue)
    stringifiedQuery = encodeURIComponent(
      JSON.stringify(queryRequest.query),
    )
  }
  return (
    <div className="FeaturedDataTabs">
      {/* tabs */}
      <div className="FeaturedDataTabs__tabs">
        {configs.map((config, index) => {
          return <div className={`FeaturedDataTabs__tabs__tab ${index == selectedTabIndex ? 'FeaturedDataTabs__tabs__tab__selected' : ''}`}>
            <a onClick={() => setSelectedTabIndex(index)}>
              {config.icon && <Icon type={config.icon}></Icon>}
              {config.title}
            </a>
          </div>
        })}
      </div>
      {/* tab content */}
      {
        selectedTabProps && <>
          <FeaturedDataPlots key={`${selectedTabProps.exploreSql}-${selectedTabProps.exploreFacetColumnName}-${selectedTabProps.exploreFacetColumnValue}`}
            {...selectedTabProps.plotsConfig}></FeaturedDataPlots>
          <div className="FeaturedDataTabs__explore-all">
            <a href={`${selectedTabProps.explorePagePath}?QueryWrapper0=${stringifiedQuery}`}>
              <button
                className="btn homepage-button"
              >
                EXPLORE ALL {selectedTabProps.title}
              </button>
            </a>
          </div>
        </>
      }
    </div>)
}

export default FeaturedDataTabs
