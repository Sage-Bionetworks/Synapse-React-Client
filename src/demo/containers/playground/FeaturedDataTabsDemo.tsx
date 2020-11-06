import * as React from 'react'
import FeaturedDataTabs from '../../../lib/containers/home_page/featured-data/FeaturedDataTabs'

export const FeaturedDataTabsDemo = () => {
  return (
    <>
      <FeaturedDataTabs rgbIndex={0}
        sql='select * from syn11346063'
        explorePagePath='/Explore/Studies'
        exploreObjectType='Studies'
        configs={
          [
            {
              title: 'Human Studies',
              icon: 'PERSON',
              plotsConfig: {
                configs: [{
                  title:'The Religious Orders and Memory and Aging Project Study',
                  facetsToPlot:['dataType', 'assay'],
                  selectFacetColumnName:'study',
                  selectFacetColumnValue:'ROSMAP',
                  detailsPagePath:'/Explore/Studies/DetailsPage?Study=syn3219045'
                },
                {
                  title:'The Mount Sinai Brain Bank Study',
                  facetsToPlot:['dataType', 'assay'],
                  selectFacetColumnName:'study',
                  selectFacetColumnValue:'MSBB',
                  detailsPagePath:'/Explore/Studies/DetailsPage?Study=syn3159438'
                },
                {
                  title:'The RNAseq Harmonization Study',
                  facetsToPlot:['dataType', 'assay'],
                  selectFacetColumnName:'study',
                  selectFacetColumnValue:'rnaSeqReprocessing',
                  detailsPagePath:'/Explore/Studies/DetailsPage?Study=syn5550404'
                },]
              }
            },
            {
              title: 'Animal Model Studies',
              icon: 'MOUSE',
              plotsConfig: {
                configs: [{
                  title:'The UCI MODEL-AD 5XFAD Study',
                  facetsToPlot:['dataType', 'assay'],
                  selectFacetColumnName:'study',
                  selectFacetColumnValue:'UCI_5XFAD',
                  detailsPagePath:'/Explore/Studies/DetailsPage?Study=syn16798076'
                },
                {
                  title:'The IU/Jax/Pitt MODEL-AD Primary Screen Study',
                  facetsToPlot:['dataType', 'assay'],
                  selectFacetColumnName:'study',
                  selectFacetColumnValue:'Jax.IU.Pitt_PrimaryScreen',
                  detailsPagePath:'/Explore/Studies/DetailsPage?Study=syn21595258'
                },
                {
                  title:'The IU/Jax/Pit MODEL-AD APOE/TREM2 Study',
                  facetsToPlot:['dataType', 'assay'],
                  selectFacetColumnName:'study',
                  selectFacetColumnValue:'Jax.IU.Pitt_5XFAD',
                  detailsPagePath:'/Explore/Studies/DetailsPage?Study=syn17095980'
                }]
              }
            }
          ]
      }
      />
      <FeaturedDataTabs rgbIndex={0}
        sql='SELECT * FROM syn21994974'
        explorePagePath='/Explore/Studies'
        exploreObjectType='Studies'
        configs={
          [
            {
              title: 'Studies',
              icon: 'STUDIES',
              plotsConfig: {
                sql: 'SELECT * FROM syn21994974 WHERE ( ( "collectionType" = \'Validation Study\' OR "collectionType" = \'Interventional Study\' OR "collectionType" = \'Observational Study\' ) )',
                configs: [{
                  facetsToPlot:['dataCollectionMethod', 'deviceType','devicePlatform','diagnosis','reportedOutcome', 'digitalAssessmentCategory'],
                },]
              }
            },            
          ]
      }
      />  
    </>
    
  )
}