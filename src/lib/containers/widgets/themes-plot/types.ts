export type GraphItem = {
    x: number
    y: string
    group: string
  }

  export type MarkerStyle = {
      fill: string
      line: string
      size: number
  }

  export type BarPlotColors = { [key: string]: string }

  export type PlotProps = {
    entityId: string
    xField: string
    yField: string
    groupField: string
    whereClause?: string
    colors?: BarPlotColors
    markerStyle?:  MarkerStyle
  }

