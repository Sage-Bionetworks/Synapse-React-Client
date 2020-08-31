import Plotly from 'plotly.js-basic-dist'
import * as React from 'react'
import createPlotlyComponent from 'react-plotly.js/factory'
import { unCamelCase } from '../utils/functions/unCamelCase'
import {
  FacetColumnResultValueCount,
  FacetColumnResultValues,
  FacetColumnValuesRequest,
  QueryBundleRequest,
  QueryResultBundle,
} from '../utils/synapseTypes/'
import getColorPallette from './ColorGradient'
import { SELECT_SINGLE_FACET } from './Facets'
import { FacetSelection, QueryWrapperChildProps } from './QueryWrapper'

export const Plot = createPlotlyComponent(Plotly)
const ROW_HEIGHT: number = 160
const CHARTS_PER_ROW: number = 5

export type FacetsPlotNavState = {
  isShowingMore: boolean
  isResetPossible: boolean
}

export type FacetsPlotNavProps = {
  loadingScreen?: React.FunctionComponent | JSX.Element
  facetsToPlot?: string[]
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
    // the text currently under the cursor
    this.state = {
      isShowingMore: false,
      isResetPossible: false,
    }
    this.extractPlotDataArray = this.extractPlotDataArray.bind(this)
    this.toggleShowMore = this.toggleShowMore.bind(this)
    this.onReset = this.onReset.bind(this)
    // this.onHover = this.onHover.bind(this)
    // this.onUnhover = this.onUnhover.bind(this)
  }

  public toggleShowMore(event: React.MouseEvent<HTMLAnchorElement>) {
    event.preventDefault()
    this.setState({
      isShowingMore: !this.state.isShowingMore,
    })
  }

  public onReset(event: React.MouseEvent<HTMLAnchorElement>) {
    event.preventDefault()
    const { executeInitialQueryRequest } = this.props
    if (executeInitialQueryRequest) {
      executeInitialQueryRequest()
    }
    this.setState({
      isResetPossible: false,
    })
  }

  // public onHover = (event: any) => {
  //   this.updateHover(true, event)
  // }

  // NOTE: There's an issue where onUnhover() is not called after the first onHover().
  // Moving the plotData to state requires some consideration.  The plot must be updated by the table filter selection.
  // Also, the Plot will not update if it points to the same (shallow compare) data object.  One way to force a Plot update is to
  // update the layout.datarevision.
  // public onUnhover = (event: any) => {
  //   this.updateHover(false, event)
  // }

  // public updateHover = (isHover:boolean, event: any) => {
  //   if (event.points && event.points[0] && this.state.plotData) {
  //     const plotPointData: any = event.points[0]
  //     const domain = plotPointData.data.domain
  //     const newMarkerLineWidth: number = isHover ? 1 : 0
  //     this.state.plotData[(domain.row * CHARTS_PER_ROW) + domain.column].marker.line.width[plotPointData.pointNumber] = newMarkerLineWidth
  //     this.setState({datarevision: this.state.datarevision + 1})
  //   }
  // }

  /**
   * Handle click event
   */
  public handleClick = (event: any) => {
    if (event.points && event.points[0]) {
      const plotPointData: any = event.points[0]
      const facetName = plotPointData.data.name
      const facetValueClicked =
        plotPointData.data.facetEnumerationValues[plotPointData.pointNumber]
      // update the facet
      const { isAllFilterSelectedForFacet = {} } = this.props
      isAllFilterSelectedForFacet[facetName] = false
      const lastFacetSelection = {
        selector: SELECT_SINGLE_FACET,
        facetValue: facetValueClicked,
        columnName: facetName,
      } as FacetSelection
      this.props.updateParentState!({
        lastFacetSelection,
        isAllFilterSelectedForFacet,
      })

      // run the query with the selected facet value
      const queryRequest: QueryBundleRequest = this.props.getLastQueryRequest!()
      const { selectedFacets = [] } = queryRequest.query
      const specificFacet = selectedFacets!.find(
        el => el.columnName === facetName,
      )!
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
    this.setState({
      isResetPossible: true,
    })
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
    if (isLoadingNewData || !data) {
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
    const plotData = this.extractPlotDataArray(data!)
    const showMoreButton = plotData.length > CHARTS_PER_ROW && (
      <a
        style={{
          fontSize: '14px',
          cursor: 'pointer',
          marginLeft: '5px',
          marginBottom: '10px',
        }}
        className="SRC-primary-text-color"
        onClick={this.toggleShowMore}
      >
        {this.state.isShowingMore ? 'Show Less' : 'Show More'}
      </a>
    )
    const resetButton = (
      <a
        style={{
          fontSize: '14px',
          cursor: 'pointer',
          marginLeft: '5px',
          marginRight: '5px',
          marginBottom: '10px',
          float: 'right',
        }}
        className="SRC-primary-text-color"
        onClick={this.onReset}
      >
        Reset
      </a>
    )

    // create a pie chart for each facet (values) result
    const plotDataToShow: any[] = this.state.isShowingMore
      ? plotData
      : plotData.slice(0, CHARTS_PER_ROW)

    const rowCount: number = Math.ceil(plotDataToShow.length / CHARTS_PER_ROW)
    const layout = {
      grid: { rows: rowCount, columns: CHARTS_PER_ROW },
      showlegend: false,
      annotations: [],
      margin: { l: 20, r: 20, b: 10, t: 10, pad: 40 },
      height: ROW_HEIGHT * rowCount,
      // datarevision: this.state.datarevision
    }

    return (
      <>
        <div className="SRC-bar-border SRC-bar-marginTop SRC-bar-border-top">
          <div>
            <Plot
              layout={layout}
              data={plotDataToShow}
              className="SRC-fullWidth"
              config={{ displayModeBar: false }}
              useResizeHandler={true}
              onClick={this.handleClick}
              // onHover={this.onHover}
              // onUnhover={this.onUnhover}
            ></Plot>
          </div>
        </div>
        <div
          className="SRC-bar-border SRC-bar-border-bottom"
          style={{ marginBottom: '15px' }}
        >
          {showMoreButton}
          {this.state.isResetPossible && resetButton}
        </div>
      </>
    )
  }
  public extractPlotDataArray(data: QueryResultBundle) {
    const { facetsToPlot } = this.props
    const plotData: any[] = []

    // pull out the data corresponding to the filter in question
    let enumerationFacets = data.facets!.filter(
      item => item.facetType === 'enumeration',
    ) as FacetColumnResultValues[]
    if (facetsToPlot) {
      // filter to show plots for the chosen facets
      enumerationFacets = enumerationFacets.filter(item =>
        facetsToPlot.includes(item.columnName),
      )
    }

    enumerationFacets.forEach(
      (item: FacetColumnResultValues, index: number) => {
        const { colorPalette } = getColorPallette(
          index,
          item.facetValues.length,
        )
        const singlePieChartData: any = {
          values: [],
          labels: [],
          facetEnumerationValues: [],
          name: item.columnName,
          // The only thing supported in hoverlabel today is bordercolor, but this also effects the hoverlabel text color!
          // https://github.com/plotly/plotly.js/issues/2342
          // hoverlabel: {
          //   bordercolor: 'rgb(216, 216, 218)',
          //   opacity: 0.7
          // },
          hovertemplate:
            '<b>%{label}</b><br>' +
            '%{value} (%{percent})<br>' +
            '<extra></extra>',
          textposition: 'inside',
          textinfo: 'none',
          type: 'pie',
          title: {
            text: unCamelCase(item.columnName),
            font: {
              size: 14,
            },
            position: 'top center',
          },
          marker: {
            colors: colorPalette,
            line: {
              width: [],
            },
          },
          pull: [],
          domain: {
            row: Math.floor(index / CHARTS_PER_ROW),
            column: index % CHARTS_PER_ROW,
          },
        }
        plotData.push(singlePieChartData)
        item.facetValues.forEach((facetValue: FacetColumnResultValueCount) => {
          singlePieChartData.values.push(facetValue.count)
          const displayValue =
            facetValue.value === 'org.sagebionetworks.UNDEFINED_NULL_NOTSET'
              ? 'Unannotated'
              : facetValue.value

          singlePieChartData.labels.push(displayValue)
          singlePieChartData.facetEnumerationValues.push(facetValue.value)
          singlePieChartData.marker.line.width.push(
            facetValue.isSelected ? 1 : 0,
          )
          singlePieChartData.pull.push(facetValue.isSelected ? 0.09 : 0)
        })
      },
    )

    return plotData
  }
}
