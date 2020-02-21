import { library } from '@fortawesome/fontawesome-svg-core'
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as React from 'react'
import ReactMeasure from 'react-measure'
import ReactTooltip from 'react-tooltip'
import { getColorPallette } from './ColorGradient'
import { QueryWrapperChildProps } from './QueryWrapper'
import { FacetColumnResultValueCount } from '../utils/synapseTypes/'
import { getIsValueSelected } from '../utils/functions/facetUtils'
import { unCamelCase } from '../utils/functions/unCamelCase'
library.add(faAngleLeft)
library.add(faAngleRight)

export const PREVIOUS_ITEM_CLICK = 'left click'
export const NEXT_CLICK = 'right click'

type Rect = {
  height: number
  width: number
  top: number
  left: number
  right: number
  bottom: number
}

type MeasureRect = {
  bounds: Rect
}

export type StackedBarChartState = {
  selectedFacets: {}
  dimensions: MeasureRect
}

export type StackedBarChartProps = {
  loadingScreen: JSX.Element
  link?: string
  linkText?: string
}

type Info = {
  value: string
  count: number
  index: number
}

type InternalProps = StackedBarChartProps & QueryWrapperChildProps
/**
 * Make a simple stacked bar chart
 *
 * @class StackedBarChart
 * @extends {React.Component}
 */
export default class StackedBarChart extends React.Component<
  InternalProps,
  StackedBarChartState
> {
  constructor(props: InternalProps) {
    super(props)
    this.handleHover = this.handleHover.bind(this)
    this.handleExit = this.handleExit.bind(this)
    this.handleClick = this.handleClick.bind(this)
    this.handleArrowClick = this.handleArrowClick.bind(this)
    this.getTextForChartSelection = this.getTextForChartSelection.bind(this)
    this.onMeasureResize = this.onMeasureResize.bind(this)
    // the text currently under the cursor
    this.state = {
      // the dimensions of the bar chart itself
      dimensions: {
        bounds: { height: 1, width: 1, top: 0, left: 0, right: 0, bottom: 0 },
      },
      // the text of the current slice
      // the count of this facet value occurence
      selectedFacets: {},
    }
    this.extractPropsData = this.extractPropsData.bind(this)
  }

  /**
   * Updates the hover text and update the view
   *
   * @memberof StackedBarChart
   */
  public handleHover(event: React.MouseEvent<SVGRectElement>) {
    // add box shadow
    event.currentTarget.style.boxShadow = '25px 20px'
  }

  /**
   * Update the hover text and the view
   *
   * @param {*} event
   * @memberof StackedBarChart
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

  public handleArrowClick = (direction: string) => (
    _event: React.MouseEvent,
  ) => {
    let { chartSelectionIndex = 0 } = this.props
    let dict: any = this.extractPropsData(this.props.data)
    const length = Object.keys(dict).length
    if (direction === PREVIOUS_ITEM_CLICK) {
      chartSelectionIndex -= 1
      // if its at zero then we want to wrap around to the end
      chartSelectionIndex =
        chartSelectionIndex < 0 ? length - 1 : chartSelectionIndex
    } else {
      chartSelectionIndex += 1
    }
    chartSelectionIndex = chartSelectionIndex % length

    dict = dict[chartSelectionIndex]
    this.props.updateParentState!({ chartSelectionIndex })
    // return is only for testing purposes
    return chartSelectionIndex
  }

  public getTextForChartSelection(xData: any) {
    const { chartSelectionIndex = 0 } = this.props
    const { facetAliases = {}, facet } = this.props
    const facetValueDisplay =
      xData[chartSelectionIndex] && xData[chartSelectionIndex].value
    const filterDisplay = facetAliases[facet!] || unCamelCase(facet)
    return (
      <span>
        <span className="SRC-text-title SRC-filter-display">
          {filterDisplay}
        </span>
        :
        <span className="SRC-facet-view SRC-text-title">
          {facetValueDisplay === 'org.sagebionetworks.UNDEFINED_NULL_NOTSET'
            ? 'unannotated'
            : facetValueDisplay}
        </span>
      </span>
    )
  }

  public getFileCount(xData: any) {
    const { chartSelectionIndex = 1 } = this.props
    return xData[chartSelectionIndex] && xData[chartSelectionIndex].count
  }

  public render() {
    const {
      data,
      isLoadingNewData,
      loadingScreen,
      rgbIndex,
      facet = '',
      unitDescription,
      isLoading,
      lastFacetSelection,
      isAllFilterSelectedForFacet,
      chartSelectionIndex,
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
    const xData = this.extractPropsData(data)
    let total: number = 0
    const width: number = this.state.dimensions.bounds!.width
    // sum up the counts of data
    for (const key in xData) {
      if (xData.hasOwnProperty(key)) {
        total += xData[key].count
      }
    }
    const { colorPalette, textColors } = getColorPallette(
      rgbIndex!,
      xData.length,
    )
    const originalColor = colorPalette[0]

    return (
      <React.Fragment>
        {/* TODO: Refactor the chart into its own component */}
        <div className="SRC-bar-border SRC-bar-marginTop SRC-bar-border-top">
          <ReactMeasure
            bounds={true}
            onResize={(contentRect: any) => {
              this.setState({ dimensions: contentRect })
            }}
          >
            {({ measureRef }) => (
              <div className="SRC-flex" ref={measureRef}>
                {xData.map((obj: FacetColumnResultValueCount, index) => {
                  const textColor: string = textColors[index]
                  const rgbColor: string = colorPalette[index]
                  let rectStyle: any
                  const isValueSelected = isAllFilterSelectedForFacet![facet]
                    ? true
                    : getIsValueSelected({
                        isLoading,
                        lastFacetSelection,
                        columnName: facet,
                        curFacetSelection: obj,
                      })
                  if (isValueSelected) {
                    rectStyle = {
                      fill: rgbColor,
                    }
                  } else {
                    rectStyle = {
                      fill: '#C4C4C4',
                    }
                  }
                  const svgHeight = 80
                  const svgWidth = (obj.count / total) * width
                  const style: any = {}
                  if (chartSelectionIndex === index) {
                    style.filter = 'drop-shadow(5px 5px 5px rgba(0,0,0,0.5))'
                  }
                  const label: string = `${facet}: ${obj.value}  - ${obj.count} ${unitDescription}`
                  // there was one bug where a new line character was in the obj.value, making data-for
                  // break because its a special character, below we remove that
                  const tooltipId = obj.value.replace(/(\r\n|\n|\r)/gm, '')
                  // basic heuristic to calculate the number of pixels needed to show the value on the bar chart
                  const value = obj.count as number
                  const numCharsInValue = value.toString().length * 4.5 // represents width of a character

                  return (
                    // each svg represents one of the bars
                    // will need to change this to be responsive
                    <React.Fragment key={label}>
                      <span data-for={tooltipId} data-tip={label}>
                        <svg
                          className="SRC-hoverBox"
                          height={svgHeight + 15}
                          width={svgWidth}
                          style={style}
                          onClick={this.handleClick({ ...obj, index })}
                        >
                          <rect
                            onMouseEnter={this.handleHover}
                            onMouseLeave={this.handleExit}
                            height={svgHeight}
                            width={svgWidth}
                            className="SRC-chart-rect-style"
                            // can't remove inline style due to dynamic fill
                            style={rectStyle}
                          />
                          {index < 3 && svgWidth > numCharsInValue && (
                            <text
                              textAnchor="middle"
                              className="SRC-text-title"
                              fontFamily={'bold sans-serif'}
                              fill={textColor}
                              x={'50%'}
                              y={'50%'}
                            >
                              {obj.count}
                            </text>
                          )}
                          {chartSelectionIndex === index && (
                            <text
                              fill={originalColor}
                              x={0}
                              y={svgHeight + 15}
                              className="SRC-text-shadow SRC-text-large"
                            >
                              {'\u25CF'}
                            </text>
                          )}
                        </svg>
                      </span>
                      <ReactTooltip delayShow={1000} id={tooltipId} />
                    </React.Fragment>
                  )
                })}
              </div>
            )}
          </ReactMeasure>
        </div>
        <div className="SRC-bar-border SRC-bar-border-bottom">
          <p className="SRC-noMargin SRC-padding-chart SRC-text-title">
            <strong>{this.getTextForChartSelection(xData)}</strong>
          </p>
          <p
            id="fileCount"
            className="SRC-noMargin SRC-padding-chart SRC-text-chart"
          >
            {this.getFileCount(xData)} {unitDescription}
          </p>
          {this.props.link && (
            <div className="SRC-chart-link">
              <a href={`/${this.props.link}`}> {this.props.linkText} </a>
            </div>
          )}
        </div>
        <div className="SRC-chart-nav SRC-center-text">
          <button
            className="SRC-chart-btn SRC-floatRight"
            type="button"
            onClick={this.handleArrowClick(NEXT_CLICK)}
          >
            <FontAwesomeIcon
              style={{ fontSize: '11px' }}
              className="SRC-primary-text-color"
              icon="angle-right"
            />
          </button>
          <button
            className="SRC-chart-btn SRC-floatRight"
            type="button"
            onClick={this.handleArrowClick(PREVIOUS_ITEM_CLICK)}
          >
            <FontAwesomeIcon
              style={{ fontSize: '11px' }}
              className="SRC-primary-text-color"
              icon="angle-left"
            />
          </button>
        </div>
      </React.Fragment>
    )
  }
  public extractPropsData(data: any) {
    const xData: any[] = []
    const { facet } = this.props
    // pull out the data corresponding to the filter in question
    data.facets.forEach((item: any) => {
      if (item.facetType === 'enumeration' && item.columnName === facet) {
        item.facetValues.forEach((facetValue: any) => {
          if (item.columnName) {
            xData.push({ columnName: item.columnName, ...facetValue })
          }
        })
      }
    })
    // sort the data so that the largest bars are at the front
    xData.sort((a, b) => {
      return b.count - a.count
    })
    return xData
  }

  public onMeasureResize(contentRect: any) {
    this.setState({ dimensions: contentRect })
  }
}
