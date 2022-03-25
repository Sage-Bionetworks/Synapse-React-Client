import * as React from 'react'
import Plotly from 'plotly.js-basic-dist'
import * as PlotlyTyped from 'plotly.js'
import createPlotlyComponent from 'react-plotly.js/factory'
import { SizeMe } from 'react-sizeme'

import {
  FacetColumnResultValues,
  ColumnType,
  FacetColumnResult,
  FacetColumnResultValueCount,
} from '../../../utils/synapseTypes'

import { getColorPalette } from '../../../containers/ColorGradient'
import { unCamelCase } from '../../../utils/functions/unCamelCase'
import { useEffect, useState } from 'react'
import loadingScreen from '../../LoadingScreen'
import {
  GraphData,
  extractPlotDataArray,
  getPlotStyle,
  FacetPlotLegend,
} from '../../widgets/facet-nav/FacetNavPanel'
import { getFacets } from '../../widgets/facet-nav/FacetNav'
import { useSynapseContext } from '../../../utils/SynapseContext'
import { useQueryWrapperContext } from '../../QueryWrapper'

const Plot = createPlotlyComponent(Plotly)

export type FacetPlotsCardProps = {
  title?: string
  description?: string
  rgbIndex?: number
  facetsToPlot?: string[]
  detailsPagePath?: string
}

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
  description,
  rgbIndex,
  facetsToPlot,
  detailsPagePath,
}: FacetPlotsCardProps): JSX.Element => {
  const { accessToken } = useSynapseContext()
  const { data, isLoadingNewBundle, facetAliases } = useQueryWrapperContext()
  const [facetPlotDataArray, setFacetPlotDataArray] = useState<GraphData[]>([])
  const [facetDataArray, setFacetDataArray] = useState<FacetColumnResult[]>([])
  const [selectedFacetValue, setSelectedFacetValue] = useState<string>('')
  const { colorPalette } = getColorPalette(rgbIndex ?? 0, 2)

  useEffect(() => {
    if (!facetsToPlot || !data) {
      return
    } else {
      const getColumnType = (
        facetToPlot: FacetColumnResult,
      ): ColumnType | undefined =>
        data?.columnModels?.find(
          columnModel => columnModel.name === facetToPlot.columnName,
        )?.columnType as ColumnType

      const facetsDataToPlot = getFacets(data, facetsToPlot)
      setFacetDataArray(facetsDataToPlot)
      Promise.all(
        facetsDataToPlot.map(async (item, index) => {
          const plotData = await extractPlotDataArray(
            item as FacetColumnResultValues,
            getColumnType(item),
            index + 1, //individual plot rgbIndex
            'PIE',
            accessToken,
          )
          return plotData
        }),
      ).then(newPlotData => setFacetPlotDataArray(newPlotData))
      // If we are showing a facet selection based card, then set the selectedFacetValue.  For example, facet column "study" with value "ROSMAP"
      const selectedFacet: FacetColumnResultValueCount | undefined =
        data?.facets?.map(item => {
          const facetValues: FacetColumnResultValueCount[] = (
            item as FacetColumnResultValues
          ).facetValues
          if (facetValues) {
            const filteredFacetValues: FacetColumnResultValueCount[] =
              facetValues.filter(facetValue => {
                return facetValue.isSelected
              })
            return filteredFacetValues.length > 0
              ? filteredFacetValues[0]
              : undefined
          } else {
            return undefined
          }
        })[0]
      if (selectedFacet && selectedFacet.value) {
        setSelectedFacetValue(selectedFacet?.value)
      }
    }
  }, [facetsToPlot, data])

  if (
    isLoadingNewBundle ||
    !facetPlotDataArray ||
    !facetDataArray ||
    facetDataArray.length === 0
  ) {
    return (
      <div className="FacetPlotsCard FacetPlotsCard__loading SRC-centerContentColumn">
        {loadingScreen}
      </div>
    )
  } else {
    let detailsPageLink = <></>
    if (detailsPagePath && selectedFacetValue) {
      detailsPageLink = (
        <div className="FacetPlotsCard__link">
          <a href={detailsPagePath}>View {selectedFacetValue}</a>
        </div>
      )
    }
    const isShowingMultiplePlots = facetPlotDataArray.length > 1
    const cardTitle =
      title ??
      (isShowingMultiplePlots
        ? selectedFacetValue
        : unCamelCase(facetDataArray[0].columnName, facetAliases))
    return (
      <div className="FacetPlotsCard cardContainer">
        <div
          className="FacetPlotsCard__titlebar"
          style={{ backgroundColor: colorPalette[0].replace(')', ',.05)') }}
        >
          <span className="FacetPlotsCard__title">{cardTitle}</span>
          {description && (
            <span className="FacetPlotsCard__description">{description}</span>
          )}
          {detailsPageLink}
          {isLoadingNewBundle && (
            <span style={{ marginLeft: '2px' }} className={'spinner'} />
          )}
        </div>
        <div className="FacetPlotsCard__body">
          {/* create a plot for every facet to be plotted */}
          {facetPlotDataArray.map((plotData, index) => {
            return (
              <div key={index}>
                {index !== 0 && <hr></hr>}
                {isShowingMultiplePlots && (
                  <div className="FacetPlotsCard__body__facetname">
                    <span>
                      {unCamelCase(
                        facetDataArray[index].columnName,
                        facetAliases,
                      )}
                    </span>
                  </div>
                )}
                <div className="FacetPlotsCard__body__row">
                  <SizeMe monitorHeight>
                    {({ size }) => (
                      <div className="FacetPlotsCard__body__plot">
                        <Plot
                          key={`${facetsToPlot![index]}-${size.width}`}
                          layout={layout}
                          data={plotData?.data ?? []}
                          style={getPlotStyle(size.width, 'PIE', 150)}
                          config={{ displayModeBar: false }}
                        />
                      </div>
                    )}
                  </SizeMe>
                  <FacetPlotLegend
                    labels={plotData?.labels}
                    colors={plotData?.colors}
                    isExpanded={false}
                  />
                </div>
              </div>
            )
          })}
        </div>
      </div>
    )
  }
}

export default FacetPlotsCard
