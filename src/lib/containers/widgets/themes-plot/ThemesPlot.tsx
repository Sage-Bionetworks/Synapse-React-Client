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
import { GraphItem, PlotProps, BarPlotColors, ClickCallbackParams  } from './types'
import _ from 'lodash-es'
import DotPlot from './DotPlot'
import BarPlot from './BarPlot'

export type ThemesPlotProps = {
  token?: string
  onPointClick: ({
    facetValue,
    type,
  }: ClickCallbackParams) => void
  onTopBarClick: ({
    facetValue,
    type,
  }: ClickCallbackParams) => void
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
  autosizable: true,
}

const tooltipVisualProps: TooltipVisualProps = {
  delayShow: 0,
  place: 'right',
  type: 'light',
  effect: 'solid',
  border: true,
}
const dotPlotLayoutConfig: Partial<PlotlyTyped.Layout> = {
  showlegend: true,
  dragmode: false,
  legend: {
    font: {
      size: 11,
    },

    y: 1.1,
    xanchor: 'right',
    x: 1,

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

const barLayoutConfig: Partial<PlotlyTyped.Layout> = {
  barmode: 'stack',
  showlegend: false,
  dragmode: false,
  hovermode: 'closest',
  yaxis: { visible: false, fixedrange: true },
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
  { xField, yField, groupField, entityId, whereClause, infoField }: PlotProps,
): Promise<RowSet> {
  //renderTopBarLegend
  const sql = `SELECT ${xField} as "x", ${yField} as "y", ${
    infoField ? infoField + ' as "info", ' : ''
  }   ${groupField} as "group" FROM ${entityId} ${
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

const getClickTargetData = (e: PlotlyTyped.PlotMouseEvent) => {
  const pointData = e.points[0].data
  return { facetValue: pointData.y[0], type: pointData.name }
}

const renderTopBarLegend = (
  colors: BarPlotColors | undefined,
  xLabels: string[],
): JSX.Element => (
  <div className="ThemesPlot__barPlotLegend">
    {xLabels.map((item, i) => (
      <div style={{ float: 'left' }} key={`topBar_${i}`}>
        <div
          className="ThemesPlot__barPlotLegend__label"
          key="topBar_label"
          style={{
            backgroundColor: `${colors ? colors[item] : 'transparent'}`,
          }}
        ></div>
        <div className="ThemesPlot__barPlotLegend__graph" key="topBar_graph">
          {item}
        </div>{' '}
      </div>
    ))}
  </div>
)

const fadeColors = (colors: { [key: string]: string }, opacity: string) => {
  for (let key in colors) {
    colors[key] = colors[key]
      .replace(',1)', `, ${opacity})`)
      .replace(',1.0)', `, ${opacity})`)
  }
  return colors
}

const getTooltip = (data: GraphItem[], filter: string) => {
  return _.first(data.filter(item => item.y === filter).map(item => item.info))
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
  const [topBarPlotData, setTopBarQueryData] = useState<GraphItem[]>([])
  const [sideBarPlotData, setSideBarQueryData] = useState<GraphItem[]>([])
  
  useEffect(() => {
    const dotPlotData = fetchData(token!, dotPlot)
    const topBarPlotData = fetchData(token!, topBarPlot)
    const sideBarPlotData = fetchData(token!, sideBarPlot)
    Promise.all([dotPlotData, topBarPlotData, sideBarPlotData])
      .then(result => {
        setDotPlotQueryData(resultToJson(result[0].headers, result[0].rows))
        setTopBarQueryData(resultToJson(result[1].headers, result[1].rows))
        setSideBarQueryData(resultToJson(result[2].headers, result[2].rows))
        setIsLoaded(true)
      })
      .catch(err => {
        throw err
      })
      return () => {
      };
  }, [token, dotPlot, topBarPlot, sideBarPlot])
  let yLabelsForDotPlot: string[] = []
  let xLabelsForTopBarPlot: string[] = []
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
    xLabelsForTopBarPlot = _.uniq(topBarPlotData.map(item => item.group))
  }

  return (
    <div className="ThemesPlot">
      {!isLoaded && <span className="spinner" />}
      {isLoaded && (
        <>
          <div className="ThemesPlot__dotPlotLegend">
            <DotPlot
              id="head"
              plotData={dotPlotQueryData}
              isLegend={true}
              markerSymbols={dotPlot.markerSymbols}
              style={{ width: '100%', height: '100%' }}
              layoutConfig={dotPlotLayoutConfig}
              optionsConfig={{
                ...optionsConfig,
                responsive: true,
                staticPlot: true,
              }}
              plotStyle={{
                ...dotPlot.plotStyle!,
                backgroundColor: 'transparent',
              }}
            ></DotPlot>
          </div>
          {topBarPlot.colors &&
            renderTopBarLegend(topBarPlot.colors, xLabelsForTopBarPlot)}
          {topBarPlotDataSorted.map((item, i) => (
            <div className="ThemesPlot__topBarPlot" key={`topBarDiv_${i}`}>
              <div className="ThemesPlot__topBarPlot__label">
                {item.count}&nbsp;{unCamelCase(item.y)}
              </div>
              <div className="ThemesPlot__topBarPlot__plot">
                <BarPlot
                  style={{ width: '100%', height: '100%' }}
                  layoutConfig={_.cloneDeep(barLayoutConfig)}
                  optionsConfig={{ ...optionsConfig }}
                  plotData={topBarPlotData}
                  isTop={true}
                  label={item.y}
                  xMax={item.count}
                  onClick={(e: any) => onPointClick(getClickTargetData(e))}
                  colors={
                    i % 2 === 0
                      ? topBarPlot.colors
                      : fadeColors({ ...topBarPlot.colors }, '0.4')
                  }
                />
              </div>
            </div>
          ))}

          <div className="ThemesPlot__dotPlot">
            {yLabelsForDotPlot.map((label, i) => (
              <div
                key={`plotDiv_${+i}`}
                className="ThemesPlot__dotPlot__row"
                style={{
                  backgroundColor: dotPlot.plotStyle?.backgroundColor,
                }}
              >
                <div className="ThemesPlot__dotPlot__barColumn">
                  <ElementWithTooltip
                    idForToolTip={`plotDiv1_${+i}`}
                    tooltipText={`${getTooltip(dotPlotQueryData, label)} `}
                    tooltipVisualProps={tooltipProps}
                    callbackFn={() => _.noop}
                  >
                    <div>
                      <span className="ThemesPlot__dotPlot__themeLabel">
                        {label}
                      </span>
                      <br />
                      <span className="ThemesPlot__dotPlot__countLabel">
                        {totalsByDotPlotY[i].count} {sideBarPlot.countLabel}
                      </span>
                      <br />
                      <BarPlot
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
                        colors={fadeColors({ ...topBarPlot.colors }, '0.4')}
                      />
                    </div>
                  </ElementWithTooltip>
                </div>
                <div className="ThemesPlot__dotPlot__dotPlotColumn">
                  <div
                    style={{
                      width: '100%',
                      backgroundColor: dotPlot.plotStyle?.backgroundColor,
                    }}
                  >
                    <DotPlot
                      id={i + ''}
                      onClick={(e: any) => onPointClick(getClickTargetData(e))}
                      plotData={dotPlotQueryData}
                      plotStyle={dotPlot.plotStyle}
                      markerSymbols={dotPlot.markerSymbols}
                      xMax={xMaxForDotPlot}
                      label={label}
                      layoutConfig={dotPlotLayoutConfig}
                      optionsConfig={{
                        ...optionsConfig,
                        responsive: false,
                      }}
                    ></DotPlot>
                  </div>
                </div>
              </div>
            ))}
            <div className="ThemesPlot__dotPlot__row">
              <div
                className="ThemesPlot__dotPlot__barColumn"
                style={{ textAlign: 'right' }}
              >
                VOLUME:
              </div>
              <div
                className="ThemesPlot__dotPlot__dotPlotColumn"
                style={{ marginTop: '0px' }}
              >
                <DotPlot
                  id={'footer'}
                  plotData={dotPlotQueryData}
                  isXAxis={true}
                  xMax={xMaxForDotPlot}
                  layoutConfig={dotPlotLayoutConfig}
                  optionsConfig={{ ...optionsConfig, responsive: false }}
                ></DotPlot>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  )
}

export default ThemesPlot
