import * as React from 'react'
import QueryWrapperFacetPlotsCard from '../../../lib/containers/home_page/featured-data/QueryWrapperFacetPlotsCard'

export const QueryWrapperFacetPlotsCardDemo = () => {
  return (
    <div className="homepage-color-background">
      <div className="container-fluid">
        <div className="row">
          <QueryWrapperFacetPlotsCard
            sql={"SELECT * FROM syn11346063"}
            facetsToPlot={['dataType', 'assay']}
            selectFacetColumnName='study'
            selectFacetColumnValue='ROSMAP'
            rgbIndex={0}
          />
          <QueryWrapperFacetPlotsCard
            sql={"SELECT * FROM syn11346063"}
            facetsToPlot={['dataType', 'assay']}
            selectFacetColumnName='study'
            selectFacetColumnValue='MSBB'
            rgbIndex={0}
          />
        </div>
      </div>
    </div>
  )
}