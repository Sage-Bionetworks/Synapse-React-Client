import * as React from 'react'
import FeaturedDataTabs from '../../../lib/containers/home_page/featured-data/FeaturedDataTabs'

export const FeaturedDataTabsDemo = () => {
  return (
    <FeaturedDataTabs rgbIndex={0}
      exploreSql='select * from syn11346063'
      explorePagePath='/Explore/Data'
      configs={
        [
          {
            title: 'Human Studies',
            icon: 'PERSON',
            exploreFacetColumnName: 'species',
            exploreFacetColumnValue: 'Human',
            plotsConfig: {
              configs: [{
                facetsToPlot:['dataType', 'assay'],
                selectFacetColumnName:'study',
                selectFacetColumnValue:'ROSMAP',                            
              },
              {
                facetsToPlot:['dataType', 'assay'],
                selectFacetColumnName:'study',
                selectFacetColumnValue:'MSBB',
              },
              {
                facetsToPlot:['dataType', 'assay'],
                selectFacetColumnName:'study',
                selectFacetColumnValue:'MayoRNAseq',
              },]
            }
          },
          {
            title: 'Animal Model Studies',
            icon: 'MOUSE',
            exploreFacetColumnName: 'species',
            exploreFacetColumnValue: 'Mouse',
            plotsConfig: {
              configs: [{
                facetsToPlot:['dataType', 'assay'],
                selectFacetColumnName:'study',
                selectFacetColumnValue:'UCI_5XFAD',              
              },
              {
                facetsToPlot:['dataType', 'assay'],
                selectFacetColumnName:'study',
                selectFacetColumnValue:'Jax.IU.Pitt_PrimaryScreen',                            
              },
              {
                facetsToPlot:['dataType', 'assay'],
                selectFacetColumnName:'study',
                selectFacetColumnValue:'Jax.IU.Pitt_5XFAD',
              }]
            }
          }
        ]
    }
    />
  )
}