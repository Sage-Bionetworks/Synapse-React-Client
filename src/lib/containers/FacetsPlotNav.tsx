import * as React from 'react'
// import { getColorPallette } from './ColorGradient'
import { QueryWrapperChildProps, FacetSelection } from './QueryWrapper'
import { FacetColumnResultValueCount } from '../utils/jsonResponses/Table/FacetColumnResult'
import { unCamelCase } from './table/SynapseTable'
import Plotly from 'plotly.js-basic-dist'
import createPlotlyComponent from 'react-plotly.js/factory'
import { QueryResultBundle } from 'lib/utils/jsonResponses/Table/QueryResultBundle'
import {SELECT_SINGLE_FACET} from './Facets'
import { QueryBundleRequest } from 'lib/utils/jsonResponses/Table/QueryBundleRequest'
import { FacetColumnValuesRequest } from 'lib/utils/jsonResponses/Table/FacetColumnRequest'

const Plot = createPlotlyComponent(Plotly)

const CHARTS_PER_ROW: number = 5

export type FacetsPlotNavState = {
  selectedFacets: {}
}

export type FacetsPlotNavProps = {
  loadingScreen: JSX.Element
  link?: string
  linkText?: string
}

type InternalProps = FacetsPlotNavProps & QueryWrapperChildProps
/**
 * Make a chart for each facet
 *
 * @class FacetsPlotNav
 * @extends {React.Component}
 */
export default class FacetsPlotNav extends React.Component<
  InternalProps,
  FacetsPlotNavState
  > {
  constructor(props: InternalProps) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
    this.rgba2rgb = this.rgba2rgb.bind(this)
    // the text currently under the cursor
    this.state = {
      selectedFacets: {},
    }
    this.extractPropsData = this.extractPropsData.bind(this)
  }

  /**
   * Handle click event
   */
  public handleClick = (event: any) => {
    if (event.points && event.points[0]) {
      const plotPointData: any = event.points[0]
      const facetName = plotPointData.data.name
      const facetValueClicked = plotPointData.data.labels[plotPointData.pointNumber]
      // update the facet and selected index
      const chartSelectionIndex = plotPointData.pointNumber
      const { isAllFilterSelectedForFacet = {} } = this.props
      isAllFilterSelectedForFacet[facetName] = false
      const lastFacetSelection = {
        selector: SELECT_SINGLE_FACET,
        facetValue:facetValueClicked,
        columnName: facetName,
      } as FacetSelection
      this.props.updateParentState!({
        chartSelectionIndex,
        lastFacetSelection,
        isAllFilterSelectedForFacet,
      })

      // run the query with the selected facet value
      const queryRequest: QueryBundleRequest = this.props.getLastQueryRequest!()
      const { selectedFacets = [] } = queryRequest.query
      const specificFacet = selectedFacets!.find(el => el.columnName === facetName)!
      if (!specificFacet) {
        const facetColumnValuesRequest: FacetColumnValuesRequest = {
          facetValues: [facetValueClicked],
          concreteType:
            'org.sagebionetworks.repo.model.table.FacetColumnValuesRequest',
          columnName: facetName,
        }
        selectedFacets.push(facetColumnValuesRequest)
        // align the reference to selectedFacets
        queryRequest.query.selectedFacets = selectedFacets
      } else {
        specificFacet.facetValues = [facetValueClicked]
      }

      queryRequest.query.offset = 0
      this.props.executeQueryRequest!(queryRequest)
    }
  }

  public rgba2rgb(background: number[], color: number[]) {
    const alpha = color[3]
    return [
      Math.floor((1 - alpha) * background[0] + alpha * color[0] + 0.5),
      Math.floor((1 - alpha) * background[1] + alpha * color[1] + 0.5),
      Math.floor((1 - alpha) * background[2] + alpha * color[2] + 0.5),
    ]
  }

  public render() {
    const {
      data,
      isLoadingNewData,
      loadingScreen,
      // rgbIndex,
      asyncJobStatus,
    } = this.props
    // while loading
    if (isLoadingNewData) {
      return (
        <div className="SRC-loadingContainer SRC-centerContentColumn">
          {/*
            check loading screen is not undefined or null and show
            it if so
          */}
          {!!loadingScreen && loadingScreen}
          <div>{asyncJobStatus && asyncJobStatus.progressMessage}</div>
        </div>
      )
    }
    const plotData = this.extractPropsData(data!)
    // const { colorPalette, textColors } = getColorPallette(
    //   rgbIndex!,
    //   plotData.length,
    // )
    // const originalColor = colorPalette[0]

    // create a pie chart for each facet (values) result
    const rowCount: number = Math.ceil(plotData.length / 6)
    const layout = {
      grid: { rows: rowCount, columns: CHARTS_PER_ROW },
      showlegend: false,
      annotations: []
    }

    return (
      <>
        <div className="SRC-bar-border SRC-bar-marginTop SRC-bar-border-top">
          <Plot
            layout={layout}
            data={plotData}
            className='SRC-fullWidth'
            config={{ displayModeBar: false }}
            useResizeHandler={true}
            onClick={this.handleClick}
          ></Plot>
        </div>
        <div className="SRC-bar-border SRC-bar-border-bottom">
          {this.props.link && (
            <div className="SRC-chart-link">
              <a href={`#/${this.props.link}`}> {this.props.linkText} </a>
            </div>
          )}
        </div>
      </>
    )
  }
  public extractPropsData(data: QueryResultBundle) {
    const plotData: any[] = []
    // pull out the data corresponding to the filter in question
    const enumerationFacets = data.facets!.filter(item => item.facetType === 'enumeration')
    enumerationFacets.forEach((item: any, index: number) => {
      if (item.facetType === 'enumeration') {
        const singlePieChartData: any =
        {
          values: [],
          labels: [],
          name: item.columnName,
          hoverinfo: 'label+percent',
          type: 'pie',
          title: unCamelCase(item.columnName),
          domain: { row: Math.floor(index / CHARTS_PER_ROW), column: index % CHARTS_PER_ROW },
        }
        plotData.push(singlePieChartData)
        item.facetValues.forEach((facetValue: FacetColumnResultValueCount) => {
          singlePieChartData.values.push(facetValue.count)
          singlePieChartData.labels.push(facetValue.value)
        })
      }
    })

    return plotData
  }
}
