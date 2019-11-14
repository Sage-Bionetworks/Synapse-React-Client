import * as React from 'react'
// import { getColorPallette } from './ColorGradient'
import { QueryWrapperChildProps } from './QueryWrapper'
import { FacetColumnResultValueCount, FacetColumnResultValues } from '../utils/jsonResponses/Table/FacetColumnResult'
import { unCamelCase } from './table/SynapseTable'
import Plotly from 'plotly.js-basic-dist'
import createPlotlyComponent from 'react-plotly.js/factory'
import { QueryResultBundle } from 'lib/utils/jsonResponses/Table/QueryResultBundle'

const Plot = createPlotlyComponent(Plotly)


export type FacetsPlotNavState = {
  selectedFacets: {}
}

export type FacetsPlotNavProps = {
  loadingScreen: JSX.Element
  link?: string
  linkText?: string
}

type Info = {
  value: string
  count: number
  index: number
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
    this.handleHover = this.handleHover.bind(this)
    this.handleExit = this.handleExit.bind(this)
    this.handleClick = this.handleClick.bind(this)
    this.rgba2rgb = this.rgba2rgb.bind(this)
    // the text currently under the cursor
    this.state = {
      selectedFacets: {},
    }
    this.extractPropsData = this.extractPropsData.bind(this)
  }

  /**
   * Updates the hover text and update the view
   *
   * @memberof FacetsPlotNav
   */
  public handleHover(event: React.MouseEvent<SVGRectElement>) {
    // add box shadow
    event.currentTarget.style.boxShadow = '25px 20px'
  }

  /**
   * Update the hover text and the view
   *
   * @param {*} event
   * @memberof FacetsPlotNav
   */
  public handleExit(event: React.MouseEvent<SVGRectElement>) {
    // remove box shadow
    event.currentTarget.style.boxShadow = ''
  }

  /**
   * Handle column click event
   */
  public handleClick = (dict: Info) => (
    _event: React.MouseEvent<SVGElement>,
  ) => {
    // https://medium.freecodecamp.org/reactjs-pass-parameters-to-event-handlers-ca1f5c422b9
    this.props.updateParentState!({ chartSelectionIndex: dict.index })
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
    return (
      <>
        <div className="SRC-bar-border SRC-bar-marginTop SRC-bar-border-top">
            {
              plotData.map((singlePieChartData: any, index) => {
              // const textColor: string = textColors[index]
              // const rgbColor: string = colorPalette[index]
              const layout = {
                grid: {rows: Math.ceil(plotData.length/6), columns: 6},
                showlegend: false,
                annotations: []
              };
              return (
                <Plot layout={layout} data={plotData}></Plot>
              )
            })}
          </div>
        )}
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
    data.facets!.forEach((item: FacetColumnResultValues) => {
      if (item.facetType === 'enumeration') {
        const singlePieChartData: any = 
          {
            values: [],
            labels: [],
            name: item.columnName,
            hoverinfo: 'label+percent',
            type: 'pie',
            title: unCamelCase(item.columnName),
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
