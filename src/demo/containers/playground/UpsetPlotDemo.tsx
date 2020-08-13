import * as React from 'react'
import UpsetPlot from 'lib/containers/UpsetPlot'

type UpsetPlotDemoProps = {
  token: string
}

export const UpsetPlotDemo: React.FunctionComponent<UpsetPlotDemoProps> = ({token}) => {
  return (
    <UpsetPlot
      token={token}
      sql={"SELECT distinct individualID, assay FROM syn20821313 where individualID is not null"}
      rgbIndex={0}
      maxBarCount={20}
      setName='Individuals (#) per Assay'
      combinationName='Individuals (#)'
      loadingScreen={<div>Custom loading screen for upset plot</div>}
    />
  )
}