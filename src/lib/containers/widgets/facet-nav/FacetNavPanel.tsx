import { InfoOutlined } from '@material-ui/icons'
import * as PlotlyTyped from 'plotly.js'
import Plotly from 'plotly.js-basic-dist'
import React, { useCallback, useEffect, useState } from 'react'
import { Button, Dropdown, Modal } from 'react-bootstrap'
import createPlotlyComponent from 'react-plotly.js/factory'
import { SizeMe } from 'react-sizeme'
import ReactTooltip from 'react-tooltip'
import getColorPalette from '../../../containers/ColorGradient'
import { QueryWrapperChildProps } from '../../../containers/QueryWrapper'
import { ElementWithTooltip } from '../../../containers/widgets/ElementWithTooltip'
import { SynapseClient, SynapseConstants } from '../../../utils'
import { unCamelCase } from '../../../utils/functions/unCamelCase'
import {
  ColumnType,
  FacetColumnResultValueCount,
  FacetColumnResultValues,
  QueryBundleRequest,
} from '../../../utils/synapseTypes'
import loadingScreen from '../../LoadingScreen'
import { EnumFacetFilter } from '../query-filter/EnumFacetFilter'
import {
  applyChangesToValuesColumn,
  applyMultipleChangesToValuesColumn,
} from '../query-filter/QueryFilter'

const Plot = createPlotlyComponent(Plotly)

export type FacetNavPanelOwnProps = {
  applyChangesToGraphSlice: Function
  applyChangesToFacetFilter: Function
  index: number
  facetToPlot: FacetColumnResultValues
  plotType: PlotType
  onSetPlotType: (plotType: PlotType) => void
  onHide: () => void
  isModalView: boolean
  onCloseModal?: () => void
  lastQueryRequest: QueryBundleRequest | undefined
}

const maxLabelLength: number = 19
const maxLegendLength: number = 30

type FacetNavPanelProps = FacetNavPanelOwnProps & QueryWrapperChildProps

export type PlotType = 'PIE' | 'BAR'

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

// https://github.com/plotly/plotly.js/blob/fa51e33d3e1f8ca0c029b3029f3d006a5205c8f3/src/lib/index.js#L1173
const formatPercent = (ratio: number, n: number) => {
  n = n || 0
  let str =
    (Math.round(100 * ratio * Math.pow(10, n)) * Math.pow(0.1, n)).toFixed(n) +
    '%'
  for (let i = 0; i < n; i++) {
    if (str.indexOf('.') !== -1) {
      str = str.replace('0%', '%')
      str = str.replace('.%', '%')
    }
  }
  return str
}

export type GraphData = {
  data: PlotlyTyped.Data[]
  labels: FacetWithLabel[]
  colors: string[]
}

export function truncate(str: string | undefined, n: number) {
  if (!str) {
    return str
  }
  const trimmedStr: string = str.trim()
  return trimmedStr.length > n ? trimmedStr.substr(0, n - 1) + '…' : str
}

export async function extractPlotDataArray(
  facetToPlot: FacetColumnResultValues,
  columnType: ColumnType | undefined,
  index: number,
  plotType: PlotType,
  sessionToken?: string,
  facetAliases?: {},
) {
  const { colorPalette } = getColorPalette(
    index,
    facetToPlot.facetValues.length,
  )

  const getLabels = async (
    facetValues: FacetColumnResultValueCount[],
    columnType?: ColumnType,
    sessionToken?: string,
  ) => {
    const map = new Map<string, string>()
    map.set(
      SynapseConstants.VALUE_NOT_SET,
      SynapseConstants.FRIENDLY_VALUE_NOT_SET,
    )
    // Filter out empties
    const filteredValues = facetValues
      .map(value => value.value)
      .filter(val => val !== SynapseConstants.VALUE_NOT_SET)
    if (columnType === ColumnType.ENTITYID) {
      // TODO: Pagination
      const response = await SynapseClient.getEntityHeadersByIds(
        filteredValues,
        sessionToken,
      )
      for (const header of response.results) {
        map.set(header.id, header.name)
      }
    } else if (columnType === ColumnType.USERID) {
      const response = await SynapseClient.getGroupHeadersBatch(
        filteredValues,
        sessionToken,
      )
      for (const header of response.children) {
        map.set(header.ownerId, header.userName)
      }
    }

    return facetValues.map(facetValue => ({
      facet: facetValue,
      label: getLabel(facetValue, false, map),
      truncatedLabel: getLabel(facetValue, true, map),
      count: facetValue.count,
    }))
  }

  const getLabel = (
    facetValue: FacetColumnResultValueCount,
    truncateFlag: boolean,
    labelMap: Map<string, string>,
  ): string => {
    let label = labelMap.get(facetValue.value) ?? facetValue.value
    if (truncateFlag) {
      label = truncate(label, maxLabelLength)!
    }
    return label
  }

  const labels = await getLabels(
    facetToPlot.facetValues,
    columnType,
    sessionToken,
  )
  const text = labels.map(el => el.truncatedLabel)

  const anyFacetsSelected = facetToPlot.facetValues.some(
    value => value.isSelected,
  )

  const selectionAwareColorPalette = anyFacetsSelected
    ? facetToPlot.facetValues.map((facetValue, index) =>
        facetValue.isSelected
          ? colorPalette[index]
          : colorPalette[index]
              .replace('rgb(', 'rgba(')
              .replace(')', ', 0.25)'),
      )
    : colorPalette
  const singleChartData: PlotlyTyped.Data = {
    values:
      plotType === 'PIE'
        ? facetToPlot.facetValues.map(facet => facet.count)
        : undefined,
    labels: labels.map(el => el.label),
    text,
    x:
      plotType === 'BAR'
        ? facetToPlot.facetValues.map(
            facet =>
              labels.find(label => label.facet === facet)?.label ?? facet.value,
          )
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
        ? '<b>%{text}</b><br>%{value} (%{percent})<br><extra></extra>'
        : '<b>%{text}: </b><br>%{value} <br><extra></extra>',
    textinfo: 'none',
    type: plotType === 'PIE' ? 'pie' : 'bar',
    pull:
      plotType === 'PIE'
        ? facetToPlot.facetValues.map(facetValue =>
            facetValue.isSelected ? 0.1 : 0,
          )
        : undefined,
    marker: {
      colors: plotType === 'PIE' ? selectionAwareColorPalette : undefined,
      color: plotType === 'BAR' ? selectionAwareColorPalette : undefined,
    },
  }

  const result = {
    data: [singleChartData],
    labels,
    colors:
      plotType === 'PIE'
        ? ((singleChartData as any).marker?.colors as string[])
        : ((singleChartData as any).marker?.color as string[]),
  }
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

export function getPlotStyle(
  parentWidth: number | null,
  plotType: PlotType,
  maxHeight: number,
): { width: string; height: string } {
  const quotient = plotType === 'BAR' ? 0.8 : 0.6
  const width = parentWidth ? parentWidth * quotient : 200
  let height = plotType === 'PIE' ? width : width / 3
  // max height of .FacetNav row col* is 200px, so the effective plot height max is around 150 unless it's expanded
  if (height > maxHeight) {
    height = maxHeight
  }

  return {
    width: `${width}px`,
    height: `${height}px`,
  }
}

export type FacetWithLabel = {
  label: string
  count: number
}

type FacetPlotLegendProps = {
  labels?: FacetWithLabel[]
  colors?: string[]
  isExpanded: boolean
}

export function FacetPlotLegend(props: FacetPlotLegendProps) {
  const { labels, colors = [], isExpanded } = props
  if (!labels) {
    return <></>
  }
  const numLegendItems = isExpanded
    ? Math.min(labels.length, 9)
    : Math.min(labels.length, 3)
  if (numLegendItems === 0) {
    return <></>
  }
  const totalCount = labels.reduce(
    (curValue, curFacet) => curValue + curFacet.count,
    0,
  )
  return (
    <div
      className={`FacetNavPanel__body__legend${isExpanded ? '--expanded' : ''}`}
    >
      {labels.slice(0, numLegendItems).map((facetValue, index) => {
        const percent = formatPercent(facetValue.count / totalCount, 1)
        const label = `(${percent}) ${facetValue.label}`
        const labelDisplay = truncate(label, maxLegendLength)
        return (
          <ElementWithTooltip
            idForToolTip={facetValue.label}
            tooltipText={facetValue.label}
            key={facetValue.label}
          >
            <div
              className="FacetNavPanel__body__legend__row"
              key={`legendLabel_${index}`}
              style={{ cursor: 'default' }}
            >
              <div style={{ backgroundColor: colors[index] }}></div>
              <label>{labelDisplay}</label>
            </div>
          </ElementWithTooltip>
        )
      })}
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

const FacetNavPanel: React.FunctionComponent<FacetNavPanelProps> = (
  props: FacetNavPanelProps,
): JSX.Element => {
  const {
    onHide,
    isModalView,
    applyChangesToFacetFilter,
    applyChangesToGraphSlice,
    isLoadingNewData,
    index,
    facetToPlot,
    data,
    isLoading,
    facetAliases,
    token,
    lastQueryRequest,
    plotType,
    onSetPlotType,
  } = props
  const [plotData, setPlotData] = useState<GraphData>()
  const [showModal, setShowModal] = useState(false)

  const plotTitle = unCamelCase(facetToPlot.columnName, facetAliases)

  const TOOLTIP_ID = 'facet-nav-panel-tooltip'

  const getColumnType = useCallback(
    (): ColumnType | undefined =>
      data?.columnModels?.find(
        columnModel => columnModel.name === facetToPlot.columnName,
      )?.columnType as ColumnType,
    [data, facetToPlot.columnName],
  )

  useEffect(() => {
    if (!facetToPlot) {
      return
    } else {
      extractPlotDataArray(
        facetToPlot,
        getColumnType(),
        index,
        plotType,
        token,
      ).then(plotData => setPlotData(plotData))
    }
  }, [facetToPlot, data, index, plotType, token, getColumnType])

  /* rendering functions */
  const ChartSelectionToggle = (): JSX.Element => (
    <div className="bootstrap-4-backport SRC-labeled-dropdown">
      <span className="SRC-labeled-dropdown__label">Chart Type</span>
      <Dropdown>
        <Dropdown.Toggle className="secondary-caret" variant="gray-select">
          {plotType === 'PIE' ? 'Pie Chart' : 'Bar Chart'}
        </Dropdown.Toggle>
        <Dropdown.Menu className="chart-tools">
          <Dropdown.Item as="button" onClick={() => onSetPlotType('BAR')}>
            Bar Chart
          </Dropdown.Item>
          <Dropdown.Item as="button" onClick={() => onSetPlotType('PIE')}>
            Pie Chart
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  )

  if (isLoadingNewData || !facetToPlot) {
    return (
      <div className="SRC-loadingContainer SRC-centerContentColumn">
        {loadingScreen}
      </div>
    )
  } else {
    return (
      <>
        <Modal
          animation={false}
          show={showModal}
          onHide={() => setShowModal(false)}
        >
          <Modal.Header closeButton={true}>
            <Modal.Title>{plotTitle ?? ''}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <FacetNavPanel {...props} isModalView={true} />
            <div className="bootstrap-4-backport SaveFiltersButtonContainer">
              <Button
                variant="secondary"
                className="pill-xl SaveFiltersButton"
                size="sm"
                onClick={() => setShowModal(false)}
              >
                Save Filters
              </Button>
            </div>
          </Modal.Body>
        </Modal>
        <div className={`FacetNavPanel${isModalView ? '--expanded' : ''}`}>
          {!isModalView && (
            <div className="FacetNavPanel__title">
              <span className="FacetNavPanel__title__name">{plotTitle}</span>
              {isLoading && (
                <span style={{ marginLeft: '2px' }} className={'spinner'} />
              )}
              <div className="FacetNavPanel__title__tools">
                <EnumFacetFilter
                  facetValues={facetToPlot.facetValues}
                  columnModel={
                    data?.columnModels!.find(
                      el => el.name === facetToPlot.columnName,
                    )!
                  }
                  token={token}
                  facetAliases={facetAliases}
                  onChange={(facetNamesMap: {}) => {
                    applyMultipleChangesToValuesColumn(
                      lastQueryRequest,
                      facetToPlot,
                      applyChangesToFacetFilter,
                      facetNamesMap,
                    )
                  }}
                  onClear={() => {
                    applyChangesToValuesColumn(
                      lastQueryRequest,
                      facetToPlot,
                      applyChangesToFacetFilter,
                    )
                  }}
                  containerAs="Dropdown"
                />
                <ElementWithTooltip
                  idForToolTip="expandGraph"
                  tooltipText="Expand to large graph"
                  key="expandGraph"
                  callbackFn={() => setShowModal(true)}
                  className="SRC-primary-color"
                  darkTheme={false}
                  icon={'expand'}
                />
                <ElementWithTooltip
                  idForToolTip="hideGraph"
                  tooltipText="Hide graph under Show More"
                  key="hideGraph"
                  callbackFn={() => onHide()}
                  className="SRC-primary-color"
                  darkTheme={false}
                  icon={'close'}
                />
              </div>
            </div>
          )}
          {isModalView && (
            <>
              <div className={'bootstrap-4-backport SRC-labeled-dropdown'}>
                <span className="SRC-labeled-dropdown__label">
                  Filter All Data By
                </span>
                <EnumFacetFilter
                  facetValues={facetToPlot.facetValues}
                  columnModel={
                    data?.columnModels!.find(
                      el => el.name === facetToPlot.columnName,
                    )!
                  }
                  token={token}
                  facetAliases={facetAliases}
                  onChange={(facetNamesMap: {}) => {
                    applyMultipleChangesToValuesColumn(
                      lastQueryRequest,
                      facetToPlot,
                      applyChangesToFacetFilter,
                      facetNamesMap,
                    )
                  }}
                  onClear={() => {
                    applyChangesToValuesColumn(
                      lastQueryRequest,
                      facetToPlot,
                      applyChangesToFacetFilter,
                    )
                  }}
                  containerAs="Dropdown"
                  dropdownType="SelectBox"
                />
                <ReactTooltip id={TOOLTIP_ID} effect="solid" event="click" />
                <InfoOutlined
                  data-for={TOOLTIP_ID}
                  data-tip={
                    'Selecting items in this dropdown will affect all facets on the Explore page.'
                  }
                  className="SRC-hand-cursor SRC-secondary-text-color"
                />
              </div>
              <ChartSelectionToggle />
            </>
          )}
          <div
            className={`FacetNavPanel__body${isModalView ? '--expanded' : ''}`}
          >
            <SizeMe monitorHeight>
              {({ size }) => (
                <div className={getClassNameForPlotDiv(isModalView, plotType)}>
                  <Plot
                    key={`${facetToPlot.columnName}-${plotType}-${size.width}`}
                    layout={layout}
                    data={plotData?.data ?? []}
                    style={getPlotStyle(
                      size.width,
                      plotType,
                      isModalView ? 300 : 150,
                    )}
                    config={{ displayModeBar: false }}
                    onClick={evt =>
                      applyFacetFilter(
                        evt,
                        facetToPlot,
                        applyChangesToGraphSlice,
                      )
                    }
                  ></Plot>
                </div>
              )}
            </SizeMe>
            <FacetPlotLegend
              labels={plotData?.labels}
              colors={plotData?.colors}
              isExpanded={isModalView}
            />
          </div>
        </div>
      </>
    )
  }
}

export default FacetNavPanel
