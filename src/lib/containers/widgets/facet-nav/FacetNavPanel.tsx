// ALINA WIP TODO:
// - bar chart
// - filter
// - show 9 labels on expanded facet
import * as React from 'react'
import Plotly from 'plotly.js-basic-dist'
import * as PlotlyTyped from 'plotly.js'
import createPlotlyComponent from 'react-plotly.js/factory'
import { SizeMe } from 'react-sizeme'
import { Dropdown } from 'react-bootstrap'
import {
  faChartBar,
  faExpandAlt,
  faCompressAlt,
  faTimes,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import FacetFilter from '../../table/table-top/FacetFilter'

import { QueryWrapperChildProps } from '../../../containers/QueryWrapper'
import {
  FacetColumnResultValues,
  FacetColumnResultValueCount,
  ColumnType,
} from '../../../utils/synapseTypes'
import getColorPallette from '../../../containers/ColorGradient'

import { unCamelCase } from '../../../utils/functions/unCamelCase'
import {
  getStoredEntityHeaders,
  getStoredUserProfiles,
} from '../../../utils/functions/getDataFromFromStorage'
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

type PlotType = 'PIE' | 'BAR'

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

function extractPlotDataArray(
  facetToPlot: FacetColumnResultValues,
  columnType: ColumnType | undefined,
  index: number,
  plotType: PlotType,
) {
  console.log(columnType)
  const { colorPalette } = getColorPallette(
    index,
    facetToPlot.facetValues.length,
  )

  const getLabels = (
    facetValues: FacetColumnResultValueCount[],
    columnType?: ColumnType,
  ): string[] => {
    return facetValues.map(facetValue => getLabel(facetValue, columnType))
  }

  const getLabel = (
    facetValue: FacetColumnResultValueCount,
    columnType?: ColumnType,
  ): string => {
    if (facetValue.value === 'org.sagebionetworks.UNDEFINED_NULL_NOTSET') {
      return 'Unannotated'
    }

    if (columnType === 'ENTITYID') {
      const lookup = getStoredEntityHeaders()

      return (
        lookup.find(item => item.id === facetValue.value)?.name ||
        facetValue.value
      )
    }

    if (columnType === 'USERID') {
      const lookup = getStoredUserProfiles()
      return (
        lookup.find(item => item.ownerId === facetValue.value)?.userName ||
        facetValue.value
      )
    }

    return unCamelCase(facetValue.value)!
  }
  const singleChartData: PlotlyTyped.Data = {
    values:
      plotType === 'PIE'
        ? facetToPlot.facetValues.map(facet => facet.count)
        : undefined,
    labels: getLabels(facetToPlot.facetValues, columnType),
    x:
      plotType === 'BAR'
        ? facetToPlot.facetValues.map(facet => getLabel(facet, columnType))
        : undefined,
    y:
      plotType === 'BAR'
        ? facetToPlot.facetValues.map(facet => facet.count)
        : undefined,
    // @ts-ignore
    facetEnumerationValues: facetToPlot.facetValues.map(
      facetValue => facetValue.value,
    ),
    name: facetToPlot.columnName,
    hovertemplate:
      plotType === 'PIE'
        ? '<b>%{label}</b><br>' +
          '%{value} (%{percent})<br>' +
          '<extra></extra>'
        : '<b>%{label}: </b><br>' + '%{value} <br>' + '<extra></extra>',
    textposition: 'inside',
    textinfo: 'none',
    type: plotType === 'PIE' ? 'pie' : 'bar',
    // @ts-ignore
    marker: {
      colors: plotType === 'PIE' ? colorPalette : undefined,
      color: plotType === 'BAR' ? colorPalette : undefined,
      line: {
        width: facetToPlot.facetValues.map(facetValue =>
          facetValue.isSelected ? 1 : 0,
        ),
      },
    },
    pull:
      plotType === 'PIE'
        ? facetToPlot.facetValues.map(facetValue =>
            facetValue.isSelected ? 0.04 : 0,
          )
        : undefined,
  }

  const result = {
    data: [singleChartData],
    labels: singleChartData.labels as string[],
    colors:
      plotType === 'PIE'
        ? (singleChartData.marker?.colors as string[])
        : (singleChartData.marker?.color as string[]),
  }
  console.log(result)
  return result
}

const applyFacetFilter = (
  event: PlotlyTyped.PlotMouseEvent,
  allFacetValues: FacetColumnResultValues,
  callbackApplyFn: Function,
) => {
  if (event.points && event.points[0]) {
    const plotPointData: any = event.points[0]
    const facetValueClickedValue =
      plotPointData.data.facetEnumerationValues[plotPointData.pointNumber]
    const facetValueClicked = allFacetValues.facetValues.find(
      facet => facet.value === facetValueClickedValue,
    )
    callbackApplyFn(
      allFacetValues,
      facetValueClicked,
      !facetValueClicked!.isSelected,
    )
  }
}

const applyDropdownFilter = (
  evt: React.ChangeEvent<HTMLInputElement>,
  allFacetValues: FacetColumnResultValues,
  callbackApplyFn: Function,
) => {
  if (evt.target.value) {
    const facetValueClicked = allFacetValues.facetValues.find(
      facet => facet.value === evt.target.value,
    )
    callbackApplyFn(allFacetValues, facetValueClicked, evt.target.checked)
  }
}

const getPlotStyle = (
  parentWidth: number | null,
  plotType: PlotType,
): { width: string; height: string } => {
  const quotient = plotType === 'BAR' ? 0.8 : 0.6
  const width = parentWidth ? parentWidth * quotient : 200
  const height = plotType === 'PIE' ? width : width / 3

  return {
    width: `${width}px`,
    height: `${height}px`,
  }
}
const renderLegend = (
  labels: string[] = [],
  colors: string[] = [],
  isExpanded: boolean,
): JSX.Element => {
  const numLegendItems = isExpanded
    ? Math.min(labels.length, 9)
    : Math.min(labels.length, 3)
  if (numLegendItems === 0) {
    return <></>
  }
  return (
    <div
      className={`FacetNavPanel__body__legend${isExpanded ? '--expanded' : ''}`}
    >
      {labels.slice(0, numLegendItems).map((label, index) => (
        <div
          className="FacetNavPanel__body__legend__row"
          key={`legendLabel_${index}`}
        >
          <div style={{ backgroundColor: colors[index] }}></div>
          <label>{label}</label>
        </div>
      ))}
    </div>
  )
}

const getClassNameForPlotDiv = (isExpanded: boolean, plotType: PlotType) => {
  if (!isExpanded) {
    return 'FacetNavPanel__body__plot'
  }
  return `FacetNavPanel__body__plot--expanded${
    plotType === 'BAR' ? 'Bar' : 'Pie'
  }`
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
  isLoading,
}: FacetNavPanelProps): JSX.Element => {
  const [plotData, setPlotData] = useState<GraphData>()
  const [isExpanded, setIsExpanded] = useState(false)
  const [plotType, setPlotType] = useState<PlotType>('PIE')

  const getColumnType = (): ColumnType | undefined =>
    data?.columnModels?.find(
      columnModel => columnModel.name === facetToPlot.columnName,
    )?.columnType as ColumnType

  useEffect(() => {
    if (!facetToPlot) {
      return
    } else {
      const plotData = extractPlotDataArray(
        facetToPlot,
        getColumnType(),
        index,
        'PIE',
      )
      setPlotData(plotData)
    }
  }, [facetToPlot, data])

  useEffect(() => {
    setIsExpanded(onCollapse !== undefined)
  }, [onCollapse])

  const changePlotType = (plotType: PlotType) => {
    if (plotType === 'BAR') {
      setPlotData(
        extractPlotDataArray(facetToPlot, getColumnType(), index, 'BAR'),
      )
    } else {
      setPlotData(
        extractPlotDataArray(facetToPlot, getColumnType(), index, 'PIE'),
      )
    }
    setPlotType(plotType)
  }

  /* rendering functions */
  const renderChartSelectionToggle = (): JSX.Element => (
    <Dropdown>
      <Dropdown.Toggle variant="light" id="plot-selector">
        <FontAwesomeIcon icon={faChartBar} title="expand" />
      </Dropdown.Toggle>
      <Dropdown.Menu>
        <Dropdown.Item as="button" onClick={() => changePlotType('BAR')}>
          Bar Chart
        </Dropdown.Item>
        <Dropdown.Item as="button" onClick={() => changePlotType('PIE')}>
          Pie Chart
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  )

  if (isLoadingNewData || !facetToPlot) {
    return (
      <div className="SRC-loadingContainer SRC-centerContentColumn">
        {loadingScreen}
      </div>
    )
  } else {
    return (
      <div className={`FacetNavPanel${isExpanded ? '--expanded' : ''}`}>
        <div className="FacetNavPanel__title">
          <span>{unCamelCase(facetToPlot.columnName)}</span>
          {isLoading && (
            <span style={{ marginLeft: '2px' }} className={'spinner'} />
          )}
          <div className="FacetNavPanel__title__tools">
            {isExpanded && renderChartSelectionToggle()}
            <FacetFilter
              lastFacetSelection={{
                columnName: '',
                facetValue: '',
                selector: '',
              }}
              isLoading={!!isLoading}
              className=""
              colorOnExpanded="#000"
              applyChanges={(_: any) => (
                evt: React.ChangeEvent<HTMLInputElement>,
              ) => applyDropdownFilter(evt, facetToPlot, applyChanges)}
              isAllFilterSelectedForFacet={
                facetToPlot.facetValues.filter(item => item.isSelected)
                  .length === 0
              }
              facetColumnResult={facetToPlot}
            />

            {!isExpanded && (
              <button onClick={() => onExpand!(index)}>
                <FontAwesomeIcon icon={faExpandAlt} title="expand" />
              </button>
            )}
            {isExpanded && (
              <button onClick={() => onCollapse!(index)}>
                <FontAwesomeIcon icon={faCompressAlt} title="contract" />
              </button>
            )}
            <button onClick={() => onHide(index)}>
              <FontAwesomeIcon icon={faTimes} title="collapse" />
            </button>
          </div>
        </div>

        <div className={`FacetNavPanel__body${isExpanded ? '--expanded' : ''}`}>
          <SizeMe monitorHeight>
            {({ size }) => (
              <div className={getClassNameForPlotDiv(isExpanded, plotType)}>
                <Plot
                  layout={layout}
                  data={plotData?.data || []}
                  style={getPlotStyle(size.width, plotType)}
                  config={{ displayModeBar: false, responsive: true }}
                  useResizeHandler={true}
                  onClick={evt =>
                    applyFacetFilter(evt, facetToPlot, applyChanges)
                  }
                ></Plot>
              </div>
            )}
          </SizeMe>
          {renderLegend(plotData?.labels, plotData?.colors, isExpanded)}
        </div>
      </div>
    )
  }
}

export default FacetNavPanel
