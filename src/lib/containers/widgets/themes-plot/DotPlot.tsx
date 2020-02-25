import React, { FunctionComponent/*, useState , useEffect */ } from 'react' // importing FunctionComponent
import Plotly from 'plotly.js-basic-dist'
import * as PlotlyTyped from 'plotly.js'
import createPlotlyComponent from 'react-plotly.js/factory'
import { GraphItem} from './types'
import _ from 'lodash-es'
const Plot = createPlotlyComponent(Plotly)

export type DotPlotProps = {
  plotData: GraphItem[]
  layoutConfig: Partial<PlotlyTyped.Layout>
  optionsConfig: Partial<PlotlyTyped.Config>
  label?: string, 
  id: string,
  isHeader?: boolean,
  isFooter?: boolean,
  xMax?: number,
  onClick?: Function
}


type LayoutOptions = {
  isHeader: boolean
  isFooter: boolean
  maxValue?: number
}

function getLayout(
  dotPlotLayoutConfig: Partial<PlotlyTyped.Layout>,
  layoutOptions?: LayoutOptions,
) {
  const result = _.cloneDeep(dotPlotLayoutConfig)
  if (!layoutOptions) {
    return result
  }
  result.yaxis!.showticklabels = false
  result.xaxis!.range = [-5, layoutOptions.maxValue! + 30]
  result.xaxis!.visible = layoutOptions.isFooter
  result.showlegend = layoutOptions.isHeader
  result.margin = {
    t: 0,
    b: layoutOptions.isFooter ? 50 : 0,
    l: 0,
    r: 0,
    pad: 15,
  }
  let height = 30
  if (layoutOptions.isHeader) {
    height = 35
    result.margin.pad = 0
    result.xaxis = {
      visible: false,
      zeroline: false,
      showgrid: false,
      showline: false,
      range: [0, 1],
    }

    result.yaxis = {
      visible: false,
      showline: false,
    }
  }
  if (layoutOptions.isFooter) {
    result.yaxis = {
      visible: false,
      showgrid: false,
      showline: false,
    }
    height = 50
  }

  result.height = height

  return result
}

function createArrayOfGroupValues(
  headers: string[],
  items: GraphItem[],
): any[] {
  const result = new Array(headers.length)
  items.forEach(item => {
    const index = headers.indexOf(item.y)
    result[index] = item.x
  })
  return result
}

function getPlotDataPoints(
  graphItems: GraphItem[],
  ySorted?: string[],
): any[] {
  const isFakeData = ySorted === undefined
  var groups = _.uniq(graphItems.map(item => item.group))
  let data: any = []
  let symbols = [
    'circle',
    'triangle-up',
    'cross-thin-open',
    'triangle-up-open-dot',
    'star-square-open',
    'diamond-x',
  ]

  groups.forEach((group, i) => {
    data.push({
      type: 'scatter',

      x: isFakeData
        ? [-10]
        : createArrayOfGroupValues(
            ySorted!,
            graphItems.filter(row => row.group === group),
          ),
      y: ySorted,
      text: [group],
      hovertemplate: `%{x} %{text}<extra></extra>`,
      mode: 'markers',
      name: group,
      marker: {
        color: 'rgba(70, 50, 158, 0.95)',
        line: {
          color: 'rgba(0, 0, 0, 1.0)',
          width: 1,
        },
        symbol: symbols[i],
        size: 8,
      },
    })
  })
  return data
}

const DotPlot: FunctionComponent<DotPlotProps> = ({
  plotData,
  optionsConfig,
  layoutConfig,
  label,
  id,
  xMax,
  onClick, isHeader= false, isFooter = false
}: DotPlotProps) => {
  const pointsTypes = label? [label]: undefined

  return (
    <Plot
      key={`dotPlot_${id}`}
      layout={getLayout(layoutConfig, {
        isHeader: isHeader,
        isFooter: isFooter,
        maxValue: xMax,
      })}
      style={{ width: '100%', height: '100%' }}
      data={getPlotDataPoints(plotData, pointsTypes)}
      config={optionsConfig}
      onClick={(e: any) => onClick? onClick(e): _.noop}
    />
  )
}

export default DotPlot
