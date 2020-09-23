import * as React from 'react'
import FeaturedDataPlots from '../../../lib/containers/home_page/featured-data/FeaturedDataPlots'

export const FeaturedDataPlotsDemo = () => {
  return (
    <FeaturedDataPlots configs={
      [
        {
          sql:"SELECT * FROM syn11346063",
          facetsToPlot:['dataType', 'assay'],
          selectFacetColumnName:'study',
          selectFacetColumnValue:'ROSMAP',
          rgbIndex:0,
          explorePagePath:'/Explore/Data',
        },
        {
          sql:"SELECT * FROM syn11346063",
          facetsToPlot:['dataType', 'assay'],
          selectFacetColumnName:'study',
          selectFacetColumnValue:'MSBB',
          rgbIndex:0,
          explorePagePath:'/Explore/Data',
        },
        {
          sql:"SELECT * FROM syn11346063",
          facetsToPlot:['dataType', 'assay'],
          selectFacetColumnName:'study',
          selectFacetColumnValue:'MCSA',
          rgbIndex:0,
          explorePagePath:'/Explore/Data',
        },

      ]
    }
    ></FeaturedDataPlots>
  )
}