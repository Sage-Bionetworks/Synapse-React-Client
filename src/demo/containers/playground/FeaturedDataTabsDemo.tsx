import * as React from 'react'
import FeaturedDataTabs from '../../../lib/containers/home_page/featured-data/FeaturedDataTabs'

export const FeaturedDataTabsDemo = () => {
  const selectDataSql = 'select * from syn11346063'
  const exploreDataPath = '/Explore/Data'
  return (
    <FeaturedDataTabs configs={
      [
        {
          title: 'Human Studies',
          icon: 'PERSON',
          exploreSql: selectDataSql,
          exploreFacetColumnName: 'species',
          exploreFacetColumnValue: 'Human',
          explorePagePath: exploreDataPath,
          plotsConfig: {
            configs: [{
              sql:selectDataSql,
              facetsToPlot:['dataType', 'assay'],
              selectFacetColumnName:'study',
              selectFacetColumnValue:'ROSMAP',
              rgbIndex:0,
              explorePagePath:exploreDataPath,
            },
            {
              sql:selectDataSql,
              facetsToPlot:['dataType', 'assay'],
              selectFacetColumnName:'study',
              selectFacetColumnValue:'MSBB',
              rgbIndex:0,
              explorePagePath:exploreDataPath,
            },
            {
              sql:selectDataSql,
              facetsToPlot:['dataType', 'assay'],
              selectFacetColumnName:'study',
              selectFacetColumnValue:'MCSA',
              rgbIndex:0,
              explorePagePath:exploreDataPath,
            }]
          }
        },
        {
          title: 'Mouse Studies',
          icon: 'MOUSE',
          exploreSql: selectDataSql,
          exploreFacetColumnName: 'species',
          exploreFacetColumnValue: 'Mouse',
          explorePagePath:exploreDataPath,
          plotsConfig: {
            configs: [{
              sql:selectDataSql,
              facetsToPlot:['dataType', 'assay'],
              selectFacetColumnName:'study',
              selectFacetColumnValue:'UCI_5XFAD',
              rgbIndex:0,
              explorePagePath:exploreDataPath,
            },
            {
              sql:selectDataSql,
              facetsToPlot:['dataType', 'assay'],
              selectFacetColumnName:'study',
              selectFacetColumnValue:'APOE-TR',
              rgbIndex:0,
              explorePagePath:exploreDataPath,
            },
            {
              sql:selectDataSql,
              facetsToPlot:['dataType', 'assay'],
              selectFacetColumnName:'study',
              selectFacetColumnValue:'TAUAPPms',
              rgbIndex:0,
              explorePagePath:exploreDataPath,
            }]
          }
        }
    ]
    }
    ></FeaturedDataTabs>
  )
}