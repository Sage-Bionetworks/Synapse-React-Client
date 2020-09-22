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
          />
          <QueryWrapperFacetPlotsCard
            sql={"SELECT * FROM syn11346063"}
            facetsToPlot={['dataType', 'assay']}
            selectFacetColumnName='study'
            selectFacetColumnValue='MSBB'
          />
        </div>
      </div>
    </div>
  )
}