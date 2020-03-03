import React, { FunctionComponent } from 'react'
import Plotly from 'plotly.js-basic-dist'
import * as PlotlyTyped from 'plotly.js'
import createPlotlyComponent from 'react-plotly.js/factory'
import { GraphItem } from './types'
import _ from 'lodash-es'

const Plot = createPlotlyComponent(Plotly)

export type BarPlotProps = {
  isTop: boolean
  isEvenColor: boolean
  style?: React.CSSProperties
  plotData: GraphItem[]
  layoutConfig: Partial<PlotlyTyped.Layout>
  optionsConfig: Partial<PlotlyTyped.Config>
  label: string
  xMax?: number
  onClick?: Function
}

function getBarPlotDataPoints(data: any[], isFade = false, filter?: string) {
  if (filter) {
    data = data.filter(item => item.y === filter)
  }
  var groups = _.uniq(data.map(item => item['group']))
  const result: any[] = []
  const opacity = isFade ? 0.4 : 1
  const color = [`(28,118,175, ${opacity})`, `rgba(91,176,181,${opacity})`]

  groups.forEach((group, i) => {
    const items = data.filter(item => item.group === group)
    result.push({
      x: items.map(item => item.x),
      y: items.map(item => item.y),
      name: group,
      orientation: 'h',
      marker: {
        color: color[i],
        width: 1,
      },
      type: 'bar',
    })
  })

  return result
}

function getSideBarLayout(
  layoutConfig: Partial<PlotlyTyped.Layout>,
  maxX: number,
) {
  const layout = _.cloneDeep(layoutConfig)
  layout.xaxis = {
    visible: false,
    range: [0, maxX],
  }
  layout.showlegend = false
  layout.height = 20
  return layout
}

const BarPlot: FunctionComponent<BarPlotProps> = ({
  plotData,
  optionsConfig,
  isTop,
  isEvenColor,
  layoutConfig,
  label,
  xMax,
  style = { width: '100%', height: '100%' },
}: BarPlotProps) => {
  return (
    <Plot
      style={style}
      layout={isTop ? layoutConfig : getSideBarLayout(layoutConfig, xMax!)}
      config={optionsConfig}
      data={getBarPlotDataPoints(plotData, isEvenColor, label)}
    />
  )
}

export default BarPlot
