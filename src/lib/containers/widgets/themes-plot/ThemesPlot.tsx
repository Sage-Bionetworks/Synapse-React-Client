import React, { FunctionComponent, useState, useEffect } from 'react' // importing FunctionComponent
import * as PlotlyTyped from 'plotly.js'

import { ElementWithTooltip, TooltipVisualProps } from '../ElementWithTooltip'
import { unCamelCase } from '../../../utils/functions/unCamelCase'

import { SynapseConstants } from '../../../utils'
import { getFullQueryTableResults } from '../../../utils/SynapseClient'
import {
  QueryResultBundle,
  QueryBundleRequest,
  RowSet,
} from '../../../utils/synapseTypes'
import { resultToJson } from '../../../utils/functions/sqlFunctions'
import { GraphItem } from './types'
import _ from 'lodash-es'
import DotPlot from './DotPlot'
import BarPlot from './BarPlot'

export type PlotProps = {
  entityId: string
  xField: string
  yField: string
  groupField: string
  whereClause?: string
}

export type ThemesPlotProps = {
  token?: string
  onPointClick: ({
    facetValue,
    type,
  }: {
    facetValue: any
    type: string
  }) => void
  dotPlot: PlotProps
  topBarPlot: PlotProps
  sideBarPlot: PlotProps
  tooltipProps?: TooltipVisualProps
}

type TotalsGroup = { y: string; count: number }

const optionsConfig: Partial<PlotlyTyped.Config> = {
  displayModeBar: false,
  responsive: true,
  scrollZoom: false,
  editable: false,
}

const tooltipVisualProps: TooltipVisualProps = {
  delayShow: 0,
  place: 'right',
  type: 'dark',
  effect: 'float',
}
const dotPlotLayoutConfig: Partial<PlotlyTyped.Layout> = {
  showlegend: true,
  dragmode: false,
  legend: {
    font: {
      size: 11,
    },

    y: 1.1,
    x: 0,

    orientation: 'h',
  },
  xaxis: {
    visible: true,
    fixedrange: true,
    zeroline: false,
    showgrid: false,
    showline: true,
    linecolor: '#ddd', //bottom line
    autotick: true,
    ticks: 'outside',
    tickcolor: '#ddd',
  },

  yaxis: {
    fixedrange: true,
    zeroline: false,
    gridcolor: '#ddd', //horizontal lines
    automargin: true,
  },

  margin: {
    pad: 20,
  },
  hovermode: 'closest',
}

var barLayoutConfig: Partial<PlotlyTyped.Layout> = {
  barmode: 'stack',
  showlegend: false,
  dragmode: false,
  hovermode: 'closest',
  xaxis: {
    visible: false,
    fixedrange: true,
  },
  legend: {
    font: {
      size: 11,
    },

    y: 2,
    x: 0.95,
    xanchor: 'right',

    orientation: 'h',
  },
  yaxis: { visible: false, fixedrange: true },
  height: 40,
  margin: {
    l: 0,
    r: 0,
    b: 0,
    t: 0,
    pad: 0,
  },
}

function fetchData(
  token: string,
  { xField, yField, groupField, entityId, whereClause }: PlotProps,
): Promise<RowSet> {
  const sql = `SELECT ${xField} as "x", ${yField} as "y", ${groupField} as "group" FROM ${entityId} ${
    whereClause ? ' WHERE ' + whereClause : ''
  }`

  const queryRequest: QueryBundleRequest = {
    concreteType: 'org.sagebionetworks.repo.model.table.QueryBundleRequest',
    partMask: SynapseConstants.BUNDLE_MASK_QUERY_RESULTS,
    entityId: entityId,
    query: {
      sql: sql,
    },
  }

  return getFullQueryTableResults(queryRequest, token).then(
    (data: QueryResultBundle) => {
      return data.queryResult.queryResults
    },
  )
}

function getTotalsByY(data: GraphItem[]): { y: string; count: number }[] {
  const resultObject = data.reduce((res, obj) => {
    res[obj.y] = (obj.y in res ? Number(res[obj.y]) : 0) + Number(obj.x)

    return res
  }, {})
  const result = []
  for (const property in resultObject) {
    result.push({ y: property, count: resultObject[property] as number })
  }
  return result
}

const ThemesPlot: FunctionComponent<ThemesPlotProps> = ({
  token,
  dotPlot,
  topBarPlot,
  sideBarPlot,
  tooltipProps = tooltipVisualProps,
  onPointClick,
}: ThemesPlotProps) => {
  const [isLoaded, setIsLoaded] = useState(false)
  const [dotPlotQueryData, setDotPlotQueryData] = useState<GraphItem[]>([])
  const [topBarPlotData, setBarQueryData] = useState<GraphItem[]>([])
  const [sideBarPlotData, setBarQueryData2] = useState<GraphItem[]>([])
  useEffect(() => {
    const dotPlotData = fetchData(token!, dotPlot)
    const topBarPlotData = fetchData(token!, topBarPlot)
    const sideBarPlotData = fetchData(token!, sideBarPlot)
    Promise.all([dotPlotData, topBarPlotData, sideBarPlotData])
      .then(result => {
        setDotPlotQueryData(resultToJson(result[0].headers, result[0].rows))
        setBarQueryData(resultToJson(result[1].headers, result[1].rows))
        setBarQueryData2(resultToJson(result[2].headers, result[2].rows))
        setIsLoaded(true)
      })
      .catch(err => {
        throw err
      })
  }, [token, dotPlot, topBarPlot, sideBarPlot])
  let yLabelsForDotPlot: string[] = []
  let xMaxForDotPlot = 0
  let xMaxForSideBarPlot = 0
  let topBarPlotDataSorted: TotalsGroup[] = []
  let totalsByDotPlotY: TotalsGroup[] = []
  if (isLoaded) {
    totalsByDotPlotY = getTotalsByY(sideBarPlotData)
    yLabelsForDotPlot = totalsByDotPlotY
      .sort((a, b) => b.count - a.count)
      .map(item => item.y)
    xMaxForSideBarPlot = Math.max(...totalsByDotPlotY.map(item => item.count))
    xMaxForDotPlot = Math.max(...dotPlotQueryData.map(item => Number(item.x)))
    topBarPlotDataSorted = _.orderBy(getTotalsByY(topBarPlotData), ['y'])
  }

  const TableCellStyle: React.CSSProperties = {
    boxSizing: 'border-box',
    flex: 1,
    height: '40px',
    lineHeight: '40px',
    padding: '0',
    overflow: 'hidden',
  }

  const getClickTargetData = (e: PlotlyTyped.PlotMouseEvent) => {
    const pointData = e.points[0].data
    return { facetValue: pointData.y[0], type: pointData.name }
  }

  return (
    <>
      <div style={{ width: '100%' }}>
        {!isLoaded && <span> loading </span>}
        {isLoaded && (
          <>
            {topBarPlotDataSorted.map((item, i) => (
              <div
                style={{ width: '100%', display: 'flex' }}
                key={`topBarDiv_${i}`}
              >
                <div style={{ ...TableCellStyle, flex: '0 0 100px' }}>
                  {item.count}&nbsp;{unCamelCase(item.y)}
                </div>
                <div style={{ ...TableCellStyle }}>
                  <BarPlot
                    isEvenColor={i % 2 !== 0 ? true : false}
                    style={{ width: '100%', height: '100%' }}
                    layoutConfig={barLayoutConfig}
                    optionsConfig={{ ...optionsConfig, staticPlot: true }}
                    plotData={topBarPlotData}
                    isTop={true}
                    label={item.y}
                  />
                </div>
              </div>
            ))}

            <table style={{ width: '100%' }}>
              <thead>
                <tr>
                  <th style={{ width: '20%' }}>&nbsp;</th>
                  <th>
                    <DotPlot
                      id="head"
                      plotData={dotPlotQueryData}
                      isHeader={true}
                      layoutConfig={dotPlotLayoutConfig}
                      optionsConfig={{ ...optionsConfig, responsive: false }}
                    ></DotPlot>
                  </th>
                </tr>
              </thead>
              <tbody>
                {yLabelsForDotPlot.map((label, i) => (
                  <tr key={`plotDiv_${+i}`}>
                    <td style={{ height: '60px', padding: '10px' }}>
                      <ElementWithTooltip
                        idForToolTip={`plotDiv1_${+i}`}
                        tooltipText={`${label} `}
                        tooltipVisualProps={tooltipProps}
                        callbackFn={() => _.noop}
                      >
                        <div>
                          <span>{label}</span>
                          <br />
                          {totalsByDotPlotY[i].count} {sideBarPlot.xField}
                          <br />
                          <BarPlot
                            isEvenColor={true}
                            style={{ width: '100%' }}
                            layoutConfig={barLayoutConfig}
                            optionsConfig={{
                              ...optionsConfig,
                              staticPlot: true,
                            }}
                            plotData={sideBarPlotData}
                            isTop={false}
                            xMax={xMaxForSideBarPlot}
                            label={label}
                          />
                        </div>
                      </ElementWithTooltip>
                    </td>
                    <td>
                      <div style={{ width: '100%' }}>
                        <DotPlot
                          id={i + ''}
                          onClick={(e: any) =>
                            onPointClick(getClickTargetData(e))
                          }
                          plotData={dotPlotQueryData}
                          xMax={xMaxForDotPlot}
                          label={label}
                          layoutConfig={dotPlotLayoutConfig}
                          optionsConfig={{
                            ...optionsConfig,
                            responsive: false,
                          }}
                        ></DotPlot>
                      </div>
                    </td>
                  </tr>
                ))}
                <tr>
                  <td
                    style={{
                      textAlign: 'right',
                      paddingBottom: '18px',
                      paddingRight: '10px',
                    }}
                  >
                    VOLUME:
                  </td>
                  <td>
                    {' '}
                    <DotPlot
                      id={'footer'}
                      plotData={dotPlotQueryData}
                      isFooter={true}
                      xMax={xMaxForDotPlot}
                      layoutConfig={dotPlotLayoutConfig}
                      optionsConfig={{ ...optionsConfig, responsive: false }}
                    ></DotPlot>
                  </td>
                </tr>
              </tbody>
            </table>
          </>
        )}
      </div>
    </>
  )
}

export default ThemesPlot
