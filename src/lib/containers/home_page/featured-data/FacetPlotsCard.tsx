import * as React from 'react'
import Plotly from 'plotly.js-basic-dist'
import * as PlotlyTyped from 'plotly.js'
import createPlotlyComponent from 'react-plotly.js/factory'
import { SizeMe } from 'react-sizeme'

import { QueryWrapperChildProps } from '../../../containers/QueryWrapper'
import {
  FacetColumnResultValues,
  ColumnType,
  FacetColumnResult,
  FacetColumnResultValueCount,
} from '../../../utils/synapseTypes'

import { getColorPallette } from '../../../containers/ColorGradient'
import { unCamelCase } from '../../../utils/functions/unCamelCase'
import { useEffect, useState } from 'react'
import loadingScreen from '../../LoadingScreen'
import { GraphData, extractPlotDataArray, getPlotStyle, renderLegend } from '../../widgets/facet-nav/FacetNavPanel'
import { getFacets } from '../../widgets/facet-nav/FacetNav'

const Plot = createPlotlyComponent(Plotly)

export type FacetPlotsCardOwnProps = {
  title?:string
  rgbIndex?: number
  facetsToPlot?: string[]
  detailsPagePath?: string
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
  title,
  isLoadingNewData,
  rgbIndex,
  facetsToPlot,
  detailsPagePath,
  data,
  isLoading,
  facetAliases,
}: FacetPlotsCardProps): JSX.Element => {
  const [facetPlotDataArray, setFacetPlotDataArray] = useState<GraphData[]>([])
  const [facetDataArray, setFacetDataArray] = useState<FacetColumnResult[]>([])
  const [selectedFacetValue, setSelectedFacetValue] = useState<string>('')
  const { colorPalette } = getColorPallette(rgbIndex ?? 0, 2)
  
  useEffect(() => {
    if (!facetsToPlot || !data) {
      return
    } else {
      const getColumnType = (facetToPlot:FacetColumnResult): ColumnType | undefined =>
        data?.columnModels?.find(
          columnModel => columnModel.name === facetToPlot.columnName,
        )?.columnType as ColumnType
  
      const facetsDataToPlot = getFacets(data, facetsToPlot)
      const newPlotData = facetsDataToPlot.map((item, index) => {
        const plotData = extractPlotDataArray(
          item as FacetColumnResultValues,
          getColumnType(item),
          index+1, //individual plot rgbIndex
          'PIE',
        )
        return plotData
      })
      setFacetPlotDataArray(newPlotData)
      setFacetDataArray(facetsDataToPlot)
      // ASSUMPTION: exactly one facet column value is selected (locked down).  For example, facet column "study" with value "ROSMAP"
      const selectedFacet:FacetColumnResultValueCount|undefined = data?.facets?.map(item => {
        return (item as FacetColumnResultValues).facetValues.filter(facetValue => {
          return facetValue.isSelected
        })[0]
      })[0]
      if (selectedFacet && selectedFacet.value) {
        setSelectedFacetValue(selectedFacet?.value)
      }
    }
  }, [facetsToPlot, data])

  if (isLoadingNewData || !facetPlotDataArray || !facetDataArray) {
    return (
      <div className="FacetPlotsCard__loading SRC-loadingContainer SRC-centerContentColumn">
        {loadingScreen}
      </div>
    )
  } else {
    let detailsPageLink = <></>
    if (detailsPagePath) {
      detailsPageLink = <div className="FacetPlotsCard__body__footer">
        <div className="FacetPlotsCard__body__footer__link">
          <a href={detailsPagePath}>
            View {selectedFacetValue}
          </a>
        </div>
      </div>
    }
    return (
      <div className="FacetPlotsCard cardContainer">
        <div className="FacetPlotsCard__titlebar" style={{backgroundColor: colorPalette[0].replace(')', ',.05)')}}>
          <span className="FacetPlotsCard__title">
            {title ?? selectedFacetValue}
          </span>
          {isLoading && (
            <span style={{ marginLeft: '2px' }} className={'spinner'} />
          )}
        </div>
        <div className="FacetPlotsCard__body">
          {/* create a plot for every facet to be plotted */}
          {facetPlotDataArray.map((plotData, index) => {
            return <div>
              {index !== 0 && <hr></hr>}
              <div className="FacetPlotsCard__body__facetname">
                <span>
                  {unCamelCase(facetDataArray[index].columnName, facetAliases)}
                </span>
              </div>
              <div className="FacetPlotsCard__body__row">
                <SizeMe monitorHeight>
                  {({ size }) => (
                    <div className="FacetPlotsCard__body__plot">
                      <Plot
                        key={`${facetsToPlot![index]}-${size.width}`}
                        layout={layout}                      
                        data={plotData?.data ?? []}
                        style={getPlotStyle(
                          size.width,
                          'PIE',
                          150,
                        )}
                        config={{ displayModeBar: false }}                  
                      />
                    </div>
                  )}
                </SizeMe>
                {renderLegend(plotData?.labels, plotData?.colors, false)}
                </div>
            </div>
          })}
          {detailsPageLink}
        </div>
      </div>
    )
  }
}

export default FacetPlotsCard
