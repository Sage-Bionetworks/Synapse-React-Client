// ALINA WIP TODO:
// - bar chart
// - filter
// - show 9 labels on expanded facet
import * as React from 'react'
import Plotly from 'plotly.js-basic-dist'
import * as PlotlyTyped from 'plotly.js'
import createPlotlyComponent from 'react-plotly.js/factory'
import { SizeMe } from 'react-sizeme'
import {
  faFilter,
  faExpandAlt,
  faCompressAlt,
  faTimes,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { QueryWrapperChildProps } from 'lib/containers/QueryWrapper'
import {
  FacetColumnResultValues,
  FacetColumnResultValueCount,
} from 'lib/utils/synapseTypes'
import getColorPallette from 'lib/containers/ColorGradient'

import { unCamelCase } from 'lib/utils/functions/unCamelCase'
import { useEffect, useState } from 'react'
const Plot = createPlotlyComponent(Plotly)

export type FacetNavPanelOwnProps = {
  applyChanges: Function
  index: number
  loadingScreen?: React.FunctionComponent | JSX.Element
  facetToPlot: FacetColumnResultValues
  onHide: Function
  onExpand?: Function
  onCollapse?: Function
}

type FacetNavPanelProps = FacetNavPanelOwnProps & QueryWrapperChildProps

const layout: Partial<PlotlyTyped.Layout> = {
  showlegend: false,
  annotations: [],
  margin: { l: 0, r: 0, b: 0, t: 0, pad: 0 },
  yaxis: {
    visible: false,
    showgrid: false,
  },
  xaxis: {
    visible: false,
    showgrid: false,
  },
}

export type GraphData = {
  data: PlotlyTyped.Data[]
  labels: string[]
  colors: string[]
}
/* THIS IS WIP. WILL uncomment once is gets fleshed out better
function extractPlotDataArrayBar(
  facetToPlot: FacetColumnResultValues,
  index: number,
) {
  //console.log(facetToPlot.columnName, 'getting data1')

  const { colorPalette } = getColorPallette(
    index,
    facetToPlot.facetValues.length,
  )
  const singlePieChartData: PlotlyTyped.Data = {
    x: facetToPlot.facetValues.map(facet => facet.value),
    y: facetToPlot.facetValues.map(facet => facet.count),
    labels: [],
    // @ts-ignore
    facetEnumerationValues: [],
    name: facetToPlot.columnName,
    // The only thing supported in hoverlabel today is bordercolor, but this also effects the hoverlabel text color!
    // https://github.com/plotly/plotly.js/issues/2342
    // hoverlabel: {
    //   bordercolor: 'rgb(216, 216, 218)',
    //   opacity: 0.7
    // },
    hovertemplate:
      '<b>%{label}</b><br>' + '%{value} (%{percent})<br>' + '<extra></extra>',
    textposition: 'inside',
    textinfo: 'none',
    type: 'bar',
    // @ts-ignore

    marker: {
      color: colorPalette,
     
    }
  }

  facetToPlot.facetValues.forEach((facetValue: FacetColumnResultValueCount) => {

    const displayValue =
      facetValue.value === 'org.sagebionetworks.UNDEFINED_NULL_NOTSET'
        ? 'unannotated'
        : facetValue.value //(facetValue.value.length <=30 ? facetValue.value: facetValue.value.substr(0, 30) + '...')

    singlePieChartData.labels?.push(displayValue)
    // @ts-ignore
    singlePieChartData.facetEnumerationValues.push(facetValue.value)
    if (singlePieChartData.marker?.line?.width) {
      ;(singlePieChartData.marker.line.width as number[]).push(
        facetValue.isSelected ? 1 : 0,
      )
    }
    // @ts-ignore
    //singlePieChartData.pull.push(facetValue.isSelected ? 0.04 : 0)
  })

  const result = {
    data: [singlePieChartData],
    labels: singlePieChartData.labels as string[],
    colors: singlePieChartData.marker?.color as string[],
  }
  return result
}
*/

function extractPlotDataArray(
  facetToPlot: FacetColumnResultValues,
  index: number,
) {
  const { colorPalette } = getColorPallette(
    index,
    facetToPlot.facetValues.length,
  )
  const singlePieChartData: PlotlyTyped.Data = {
    values: [],
    labels: [],
    // @ts-ignore
    facetEnumerationValues: [],
    name: facetToPlot.columnName,
    hovertemplate:
      '<b>%{label}</b><br>' + '%{value} (%{percent})<br>' + '<extra></extra>',
    textposition: 'inside',
    textinfo: 'none',
    type: 'pie',
    // @ts-ignore
    marker: {
      colors: colorPalette,
      line: {
        width: [],
      },
    },
    pull: [],
  }

  facetToPlot.facetValues.forEach((facetValue: FacetColumnResultValueCount) => {
    singlePieChartData.values?.push(facetValue.count)
    const displayValue =
      facetValue.value === 'org.sagebionetworks.UNDEFINED_NULL_NOTSET'
        ? 'Unannotated'
        : facetValue.value 
    singlePieChartData.labels?.push(displayValue)
    // @ts-ignore
    singlePieChartData.facetEnumerationValues.push(facetValue.value)
    if (singlePieChartData.marker?.line?.width) {
      ;(singlePieChartData.marker.line.width as number[]).push(
        facetValue.isSelected ? 1 : 0,
      )
    }
    // @ts-ignore
    singlePieChartData.pull.push(facetValue.isSelected ? 0.04 : 0)
  })

  const result = {
    data: [singlePieChartData],
    labels: singlePieChartData.labels as string[],
    colors: singlePieChartData.marker?.colors as string[],
  }
  return result
}


const applyFacetFilter = (event: PlotlyTyped.PlotMouseEvent, allFacetValues: FacetColumnResultValues, callbackApplyFn: Function) => {
  if (event.points && event.points[0]) {
    const plotPointData: any = event.points[0]
    const facetValueClickedValue =
      plotPointData.data.facetEnumerationValues[plotPointData.pointNumber]
    const facetValueClicked = allFacetValues.facetValues.find(
      facet => facet.value === facetValueClickedValue,
    )
    callbackApplyFn(allFacetValues, facetValueClicked)
  }
}

const getGraphSize = (width: number | null): string => {
  return width ? `${width * 0.6}px` : `200px`
}

const FacetNavPanel: React.FunctionComponent<FacetNavPanelProps> = ({
  onHide,
  onExpand,
  onCollapse,
  applyChanges,
  isLoadingNewData,
  loadingScreen,
  index,
  asyncJobStatus,
  facetToPlot,
  data,
}: FacetNavPanelProps): JSX.Element => {
  const [plotData, setPlotData] = useState<GraphData>()

  useEffect(() => {
    if (!facetToPlot) {
      return
    } else {
      const plotData = extractPlotDataArray(facetToPlot, index)
      setPlotData(plotData)
    }
  }, [facetToPlot, data])


  if (isLoadingNewData || !facetToPlot) {
    return (
      <div className="SRC-loadingContainer SRC-centerContentColumn">
        {!!loadingScreen && loadingScreen}
        <div>{asyncJobStatus && asyncJobStatus.progressMessage}</div>
      </div>
    )
  } else {
    return (
      <div className="FacetNavPanel">
        <div className="FacetNavPanel__title">
          <span>{unCamelCase(facetToPlot.columnName)}</span>
          <div className="FacetNavPanel__title__tools">
          <FontAwesomeIcon icon={faFilter} title="filter" />
           
            {onExpand && (
              <button onClick={() => onExpand(index)}>
                <FontAwesomeIcon icon={faExpandAlt} title="expand" />
              </button>
            )}
            {onCollapse && (
              <button onClick={() => onCollapse(index)}>
                <FontAwesomeIcon icon={faCompressAlt} title="contract" />
              </button>
            )}
            <button onClick={() => onHide(index)}>
              <FontAwesomeIcon icon={faTimes} title="collapse" />
            </button>
            
          </div>
        </div>
        <div className={`FacetNavPanel__body${onCollapse ? '--expanded' : ''}`}>
          <SizeMe monitorHeight>
            {({ size }) => (
              <div
                className={`FacetNavPanel__body__plot${
                  onCollapse ? '--expanded' : ''
                }`}
              >
                <Plot
                  layout={layout}
                  data={plotData?.data || []}
                  style={{
                    height: getGraphSize(size.width),
                    width: getGraphSize(size.width),
                  }}
                  config={{ displayModeBar: false, responsive: true }}
                  useResizeHandler={true}
                  onClick={evt => applyFacetFilter(evt, facetToPlot, applyChanges)}
                ></Plot>
              </div>
            )}
          </SizeMe>
          <div
            className={`FacetNavPanel__body__legend${
              onCollapse ? '--expanded' : ''
            }`}
          >
            {plotData?.labels.slice(0, 3).map((label, index) => (
              <div className="FacetNavPanel__body__legend__row" key={`legendLabel_${index}`}>
                <div style={{ backgroundColor: plotData?.colors[index] }}></div>
                <label>{label}</label>
              </div>
            ))}{' '}
          </div>
        </div>
      </div>
    )
  }
}

export default FacetNavPanel
