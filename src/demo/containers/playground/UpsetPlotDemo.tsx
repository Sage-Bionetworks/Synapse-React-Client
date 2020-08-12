import * as React from 'react'
import UpsetPlot from 'lib/containers/UpsetPlot'

export const UpsetPlotDemo = () => {
  return (
    <UpsetPlot
      sql={"SELECT distinct individualID, assay FROM syn20821313 where individualID is not null"}
      rgbIndex={3}
      maxBarCount={20}
      setName='Individuals (#) per Assay'
      combinationName='Individuals (#)'
      loadingScreen={<div>Custom loading screen for upset plot</div>}
    />
  )
}