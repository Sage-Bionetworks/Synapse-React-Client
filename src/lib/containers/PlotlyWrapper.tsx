import * as React from 'react'
import Plot from 'react-plotly.js'

export type PlotlyWrapperProps = {
  data: any,
  layout?: any,
  config?: any
  className?: string
  containerWidth?: number
}

const PlotlyWrapper: React.FC<PlotlyWrapperProps> = props => {
  const { data, layout, config, className, containerWidth } = props
  const hasData = !!(data && data.length)

  return (<div className={className}>
    {
      !hasData &&
      <>
        <div
          className={"chart-nodata"}
          style={{width: containerWidth}}>
          <span>Data Unavailable</span>
        </div>
        <Plot
          data={data}
          layout={layout}
          config={config}
          style={{opacity: "0.5"}}
        />
      </>
    }
    {
      hasData &&
      <Plot
        data={data}
        layout={layout}
        config={config}
      />
    }

  </div>)
}

export default PlotlyWrapper
