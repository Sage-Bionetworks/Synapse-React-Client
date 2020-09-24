import * as React from 'react'
import { useState } from 'react'
import FeaturedDataPlots, { FeaturedDataPlotsProps } from './FeaturedDataPlots'
import { getQueryRequest } from './QueryWrapperFacetPlotsCard'
import { Icon } from '../../../containers/row_renderers/utils'
import getColorPallette from '../../../containers/ColorGradient'

export type FeatureDataTabProps = {
  title: string, // type of data being shown, used for the tab title and explore all button
  icon?: string,
  plotsConfig: FeaturedDataPlotsProps,
  exploreFacetColumnName: string,
  exploreFacetColumnValue: string,
}

export type FeaturedDataTabsProps = {
  token?: string
  configs: FeatureDataTabProps[],
  rgbIndex:number,
  exploreSql: string,
  explorePagePath: string,
}

const FeaturedDataTabs: React.FunctionComponent<FeaturedDataTabsProps> = props => {
  const [selectedTabIndex, setSelectedTabIndex] = useState<number>(0)
  const {
    configs,
    rgbIndex,
    exploreSql,
    explorePagePath,
    token
  } = props
  const { colorPalette } = getColorPallette(rgbIndex ?? 0, 1)
  // explore all data button
  const selectedTabProps:FeatureDataTabProps = configs[selectedTabIndex]
  let stringifiedQuery = ''
  if (selectedTabProps) {
    const queryRequest = getQueryRequest(
      exploreSql,
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
          const isSelectedTabIndex:boolean = index === selectedTabIndex
          return <div className={`FeaturedDataTabs__tabs__tab ${isSelectedTabIndex ? 'FeaturedDataTabs__tabs__tab__selected' : ''}`}
            style={{borderBottomColor:isSelectedTabIndex ? colorPalette[0]:''}}>
            <button onClick={() => setSelectedTabIndex(index)}>
              {config.icon && <Icon type={config.icon}></Icon>}&nbsp;
              {config.title}
            </button>
          </div>
        })}
      </div>
      {/* tab content */}
      {
        selectedTabProps && <>
          <FeaturedDataPlots key={`${exploreSql}-${selectedTabProps.exploreFacetColumnName}-${selectedTabProps.exploreFacetColumnValue}`}
            {...selectedTabProps.plotsConfig}
              rgbIndex={rgbIndex}
              exploreSql={exploreSql}
              explorePagePath={explorePagePath}
              token={token} />              
          <div className="FeaturedDataTabs__explore-all">
            <a href={`${explorePagePath}?QueryWrapper0=${stringifiedQuery}`}>
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
