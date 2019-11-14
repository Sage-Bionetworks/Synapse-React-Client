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
import getColorPallette from './ColorGradient'

const Plot = createPlotlyComponent(Plotly)

const CHARTS_PER_ROW: number = 5

export type FacetsPlotNavState = {
  showMore: boolean
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
      showMore: false,
    }
    this.extractPropsData = this.extractPropsData.bind(this)
    this.toggleShowMore = this.toggleShowMore.bind(this)
  }

  public toggleShowMore(event: React.MouseEvent<HTMLAnchorElement>) {
    event.preventDefault()
    this.setState({
      showMore: true,
    })
  }

  /**
   * Handle click event
   */
  public handleClick = (event: any) => {
    if (event.points && event.points[0]) {
      const plotPointData: any = event.points[0]
      const facetName = plotPointData.data.name
      const facetValueClicked = plotPointData.data.facetEnumerationValues[plotPointData.pointNumber]
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
    const showMoreButton = data!.facets!.length > CHARTS_PER_ROW && (
      <a
        style={{ fontSize: '14px', cursor: 'pointer', marginLeft: '5px', marginBottom: '10px' }}
        className="SRC-primary-text-color"
        onClick={this.toggleShowMore}
      >
        Show All
      </a>
    )
    const plotData = this.extractPropsData(data!)
    // create a pie chart for each facet (values) result
    const rowCount: number = Math.ceil(plotData.length / 6)
    const layout = {
      grid: { rows: rowCount, columns: CHARTS_PER_ROW },
      showlegend: false,
      annotations: [],
      margin: { l: 20, r: 20, b: 50, t: 10, pad: 25}
    }

    return (
      <>
        <div className="SRC-bar-border SRC-bar-marginTop SRC-bar-border-top" >
          <div>
            <Plot
              layout={layout}
              data={plotData}
              className='SRC-fullWidth'
              config={{ displayModeBar: false }}
              useResizeHandler={true}
              onClick={this.handleClick}
            ></Plot>
          </div>
          <div>
            {!this.state.showMore && showMoreButton}
          </div>
        </div>
        <div className="SRC-bar-border SRC-bar-border-bottom" style={{ marginBottom: '15px' }}>
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
    let enumerationFacets = data.facets!.filter(item => item.facetType === 'enumeration')
    if (!this.state.showMore) {
      enumerationFacets = enumerationFacets.slice(0, CHARTS_PER_ROW)
    }
    
    enumerationFacets.forEach((item: any, index: number) => {
      if (item.facetType === 'enumeration') {
        const { colorPalette } = getColorPallette(
          index,
          item.facetValues.length,
        )
        const singlePieChartData: any =
        {
          values: [],
          labels: [],
          facetEnumerationValues: [],
          name: item.columnName,
          // hoverinfo: 'label+percent',
          hoverinfo: 'label',
          textposition: "inside",
          textinfo: "label",
          type: 'pie',
          title: unCamelCase(item.columnName),
          marker: {
            colors: colorPalette
          },
          domain: { row: Math.floor(index / CHARTS_PER_ROW), column: index % CHARTS_PER_ROW },
        }
        plotData.push(singlePieChartData)
        item.facetValues.forEach((facetValue: FacetColumnResultValueCount) => {
          singlePieChartData.values.push(facetValue.count)
          const displayValue =
            facetValue.value === 'org.sagebionetworks.UNDEFINED_NULL_NOTSET'
              ? 'unannotated'
              : facetValue.value
  
          singlePieChartData.labels.push(displayValue)
          singlePieChartData.facetEnumerationValues.push(facetValue.value)
        })
      }
    })

    return plotData
  }
}
