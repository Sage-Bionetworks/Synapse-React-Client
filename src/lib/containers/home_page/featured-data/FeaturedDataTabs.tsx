import * as React from 'react'
import { useState } from 'react'
import FeaturedDataPlots, { FeaturedDataPlotsProps } from './FeaturedDataPlots'
import { Icon } from '../../../containers/row_renderers/utils'
import getColorPallette from '../../../containers/ColorGradient'

export type FeatureDataTabProps = {
  title: string, // type of data being shown, used for the tab title and explore all button
  icon?: string,
  plotsConfig: FeaturedDataPlotsProps,
}

export type FeaturedDataTabsProps = {
  token?: string
  configs: FeatureDataTabProps[],
  rgbIndex:number,
  sql: string,
  exploreObjectType: string,
  explorePagePath: string,
}

const FeaturedDataTabs: React.FunctionComponent<FeaturedDataTabsProps> = props => {
  const [selectedTabIndex, setSelectedTabIndex] = useState<number>(0)
  const {
    configs,
    rgbIndex,
    sql,
    exploreObjectType,
    explorePagePath,
    token
  } = props
  const { colorPalette } = getColorPallette(rgbIndex ?? 0, 1)
  // explore all data button
  const selectedTabProps:FeatureDataTabProps = configs[selectedTabIndex]
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
          <FeaturedDataPlots key={`${sql}-${selectedTabIndex}`}
            {...selectedTabProps.plotsConfig}
              rgbIndex={rgbIndex}
              sql={sql}
              explorePagePath={explorePagePath}
              token={token} /> 
          <div className="FeaturedDataTabs__explore-all">
            <a className="homepage-button-link" href={explorePagePath}>
                EXPLORE ALL {exploreObjectType.toUpperCase()}
            </a>
          </div>
        </>
      }
    </div>)
}

export default FeaturedDataTabs
