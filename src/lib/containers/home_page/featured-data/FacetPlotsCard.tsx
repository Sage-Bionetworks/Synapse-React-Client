import * as React from 'react'
import Plotly from 'plotly.js-basic-dist'
import * as PlotlyTyped from 'plotly.js'
import createPlotlyComponent from 'react-plotly.js/factory'
import { SizeMe } from 'react-sizeme'

import { QueryWrapperChildProps } from '../../../containers/QueryWrapper'
import {
  FacetColumnResultValues,
  ColumnType,
  QueryBundleRequest,
} from '../../../utils/synapseTypes'
// import getColorPallette from '../../../containers/ColorGradient'

import { unCamelCase } from '../../../utils/functions/unCamelCase'
import { useEffect, useState } from 'react'
import loadingScreen from '../../LoadingScreen'
import { GraphData, extractPlotDataArray, getPlotStyle, renderLegend } from '../../widgets/facet-nav/FacetNavPanel'

const Plot = createPlotlyComponent(Plotly)

export type FacetPlotsCardOwnProps = {
  index: number
  facetToPlot: FacetColumnResultValues
  lastQueryRequest: QueryBundleRequest | undefined
}

type FacetPlotsCardProps = FacetPlotsCardOwnProps & QueryWrapperChildProps

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

const FacetPlotsCard: React.FunctionComponent<FacetPlotsCardProps> = ({
  isLoadingNewData,
  index,
  facetToPlot,
  data,
  isLoading,
  facetAliases,
  token,
  lastQueryRequest,
}: FacetPlotsCardProps): JSX.Element => {
  const [plotData, setPlotData] = useState<GraphData>()
  
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

  if (isLoadingNewData || !facetToPlot) {
    return (
      <div className="SRC-loadingContainer SRC-centerContentColumn">
        {loadingScreen}
      </div>
    )
  } else {
    return (
      <div className="FacetPlotsCard">
        <div className="FacetPlotsCard__title">
          <span className="FacetNavPanel__title__name">
            {unCamelCase(facetToPlot.columnName, facetAliases)}
          </span>
          {isLoading && (
            <span style={{ marginLeft: '2px' }} className={'spinner'} />
          )}
        </div>

        <div className="FacetPlotsCard__body">
          <SizeMe monitorHeight>
            {({ size }) => (
              <div className="FacetPlotsCard__body__plot">
                <Plot
                  key={`${facetToPlot.columnName}-${size.width}`}
                  layout={layout}
                  data={plotData?.data ?? []}
                  style={getPlotStyle(
                    size.width,
                    'BAR',
                    150,
                  )}
                  config={{ displayModeBar: false }}                  
                ></Plot>
              </div>
            )}
          </SizeMe>
          {renderLegend(plotData?.labels, plotData?.colors, false)}
        </div>
      </div>
    )
  }
}

export default FacetPlotsCard
