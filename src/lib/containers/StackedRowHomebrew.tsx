import { library } from '@fortawesome/fontawesome-svg-core'
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as PropTypes from 'prop-types'
import * as React from 'react'
// tslint:disable-next-line
import Measure, { ContentRect } from "react-measure"
// tslint:disable-next-line
import ReactTooltip from "react-tooltip"
import { getColorPallette } from './ColorGradient'
import { QueryWrapperChildProps } from './QueryWrapper'

library.add(faAngleLeft)
library.add(faAngleRight)

const uuidv4 = require('uuid/v4')
const PREVIOUS_ITEM_CLICK = 'left click'
const NEXT_CLICK = 'right click'

type StackedRowHomebrewState = {
  hoverTextCount: number
  hoverText: string
  selectedFacets: {}
  dimensions: ContentRect
  index: number
}

type StackedRowHomebrewProps = {
  loadingScreen: any
  synapseId: string
  unitDescription: string
}

type Info = {
  value: string
  count: number
  index: number
}

/**
 * Make a simple stacked bar char
 *
 * @class StackedRowHomebrew
 * @extends {React.Component}
 */
export default class StackedRowHomebrew extends
    React.Component<StackedRowHomebrewProps & QueryWrapperChildProps, StackedRowHomebrewState> {

  public static propTypes = {
    loadingScreen: PropTypes.element
  }

  constructor(props: StackedRowHomebrewProps & QueryWrapperChildProps) {
    super(props)
    this.handleHover = this.handleHover.bind(this)
    this.handleExit = this.handleExit.bind(this)
    this.handleClick = this.handleClick.bind(this)
    this.handleArrowClick = this.handleArrowClick.bind(this)
    this.getHoverText = this.getHoverText.bind(this)
    this.onMeasureResize = this.onMeasureResize.bind(this)
    this.rgba2rgb = this.rgba2rgb.bind(this)
    // the text currently under the cursor
    this.state = {
      dimensions: { bounds: { height: 1, width: 1, top: 0, left: 0, right: 0, bottom: 0 } },
      hoverText: '',
      hoverTextCount: 0,
      index: -1,
      selectedFacets: {}
    }
    this.extractPropsData = this.extractPropsData.bind(this)
  }

  public componentDidUpdate(prevProps: any) {
    if (prevProps.filter !== this.props.filter || prevProps.isLoadingNewData !== this.props.isLoadingNewData) {
      this.setState({
        hoverText: '',
        hoverTextCount: 0,
        index: -1
      })
    }
  }
    /**
     * Updates the hover text and update the view
     *
     * @memberof StackedRowHomebrew
     */
  public handleHover(event: React.MouseEvent<SVGRectElement>) {
        // add box shadow
    event.currentTarget.style.boxShadow = '25px 20px'
  }
    /**
     * Update the hover text and the view
     *
     * @param {*} event
     * @memberof StackedRowHomebrew
     */
  public handleExit(event: React.MouseEvent<SVGRectElement>) {
        // remove box shadow
    event.currentTarget.style.boxShadow = ''
  }
    /**
     * Handle column click event
     */
  public handleClick = (dict: Info) => (event: React.MouseEvent<SVGElement>) => {
        // https://medium.freecodecamp.org/reactjs-pass-parameters-to-event-handlers-ca1f5c422b9
    this.setState({
      hoverText: dict.value,
      hoverTextCount: dict.count,
      index: dict.index
    })
  }

  public handleArrowClick = (direction: string) => (_: React.MouseEvent) => {
    let { index } = this.state
    if (index === -1) {
      index = 0
    }
    let dict: any = this.extractPropsData(this.props.data)
    const length = Object.keys(dict).length
    if (direction === PREVIOUS_ITEM_CLICK) {
      if (index === 0) {
                // wrap around
        index = length - 1
      } else {
        index -= 1
      }
    } else {
      if (index === length - 1) {
        index = 0
      } else {
        index += 1
      }
    }
    dict = dict[index]
    this.setState({
      index,
      hoverText: dict.value,
      hoverTextCount: dict.count
    })
  }

  public getHoverText(xData: any) {
    const { index, hoverText } = this.state
    const hoverTextDisplay = index === -1 ? xData[0] && xData[0].value : hoverText
    return (
      <React.Fragment>
        <span className="SRC-text-cap">
          {this.props.filter}
        </span> :
        <span>
          {hoverTextDisplay === 'org.sagebionetworks.UNDEFINED_NULL_NOTSET' ? 'unannotated' : hoverText}
        </span>
      </React.Fragment>
    )
  }

  public getFileCount(xData: any) {
    if (this.state.index === -1) {
      const hoverTextCount = xData[0] && xData[0].count
      return hoverTextCount
    }
    return this.state.hoverTextCount
  }

  public rgba2rgb(background: number[], color: number[]) {
    const alpha = color[3]
    return [
      Math.floor((1 - alpha) * background[0] + alpha * color[0] + 0.5),
      Math.floor((1 - alpha) * background[1] + alpha * color[1] + 0.5),
      Math.floor((1 - alpha) * background[2] + alpha * color[2] + 0.5)
    ]
  }

  public advancedSearch(xData: any) {

    const { index, hoverText } = this.state
    const { filter, synapseId = '' } = this.props

    const hoverTextDisplay = index === -1 ? xData[0] && xData[0].value : hoverText

    // base 64 encode the json of the query and go to url with the encoded object
    const lastQueryRequest = this.props.getLastQueryRequest!()
    const { query } = lastQueryRequest
    query.selectedFacets = [
      {
        columnName: filter,
        concreteType: 'org.sagebionetworks.repo.model.table.FacetColumnValuesRequest',
        facetValues: [hoverTextDisplay]
      }
    ]
    const encodedQuery = btoa(JSON.stringify(query))
    const link = `https://www.synapse.org/#!Synapse:${synapseId}/tables/query/${encodedQuery}`
    return link
  }

  public render() {
    const {
      data,
      isLoadingNewData,
      loadingScreen,
      rgbIndex,
      isChecked,
      filter,
      unitDescription
    } = this.props
    // while loading
    if (isLoadingNewData) {
      return loadingScreen || <div/>
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
    const { colorPalette, textColors } = getColorPallette(rgbIndex!, xData.length)
    const originalColor = colorPalette[0]
    return (
      <div className="container-fluid">
        <div className="row SRC-center-text">
          <button
            className="btn btn-default btn-sm SRC-floatRight"
            onClick={this.handleArrowClick(NEXT_CLICK)}
          >
            <FontAwesomeIcon
              style={{ fontSize: '11px' }}
              className="SRC-primary-text-color"
              icon="angle-right"
            />
          </button>
          <button
            className="btn btn-default btn-sm SRC-floatRight"
            onClick={this.handleArrowClick(PREVIOUS_ITEM_CLICK)}
          >
            <FontAwesomeIcon
              style={{ fontSize: '11px' }}
              className="SRC-primary-text-color"
              icon="angle-left"
            />
          </button>
        </div>
        {/* TODO: Refactor the chart into its own component */}
        <div className="row SRC-bar-border SRC-bar-marginTop SRC-bar-border-top">
          <Measure
            bounds={true}
            // tslint:disable-next-line
            onResize={(contentRect: ContentRect) => {
              this.setState({ dimensions: contentRect })
            }}
          >
            {({ measureRef }) => (
              <div className="SRC-flex" ref={measureRef}>
                {/* tslint:disable-next-line */}
                {xData.map((obj, index) => {
                  const initRender: boolean = this.state.index === -1 && index === 0
                  const textColor: string = textColors[index]
                  const rgbColor: string = colorPalette[index]
                  let rectStyle: any
                  const check = isChecked![index] === undefined || isChecked![index]
                  if (check) {
                    rectStyle = {
                      fill: rgbColor
                    }
                  } else {
                    rectStyle = {
                      fill: '#C4C4C4'
                    }
                  }
                  const svgHeight = 80
                  const svgWidth = obj.count / total * width
                  const style: any = {}
                  if (this.state.index === index || initRender) {
                    style.filter = 'drop-shadow(5px 5px 5px rgba(0,0,0,0.5))'
                  }
                  const label: string = `${filter}: ${obj.value}  - ${obj.count} ${unitDescription}`
                  const tooltipId = uuidv4()
                  // basic heuristic to calculate the number of pixels needed to show the value on the bar chart
                  const value = obj.value as number
                  const numCharsInValue = value.toString().length * 4.5 // represents width of a character
                  return (
                    // each svg represents one of the bars
                    // will need to change this to be responsive
                    <React.Fragment key={uuidv4()}>
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
                          {/* tslint:disable-next-line */}
                          {index < 3 && svgWidth > numCharsInValue &&
                            <text
                              textAnchor="middle"
                              className="SRC-text-title"
                              fontFamily={'bold sans-serif'}
                              fill={textColor}
                              x={'50%'}
                              y={'50%'}
                            >
                              {obj.count}
                            </text>}
                          {
                            // tslint:disable-next-line:jsx-no-multiline-js
                            (this.state.index === index || initRender) &&
                            (
                              <text
                                fill={originalColor}
                                x={0}
                                y={svgHeight + 15}
                                className="SRC-text-shadow SRC-text-large"
                              >
                                {'\u25BE'}
                              </text>
                            )
                          }
                        </svg>
                      </span>
                      <ReactTooltip delayShow={1000} id={tooltipId} />
                    </React.Fragment>)
                })}
              </div>)}
          </Measure>
        </div>
        <div className="row SRC-bar-border SRC-bar-border-bottom">
          <p className="SRC-noMargin SRC-padding-chart SRC-text-title">
            <strong>{this.getHoverText(xData)}</strong>
          </p>
          <p
            className="SRC-noMargin SRC-padding-chart SRC-text-chart"
          >
            {this.getFileCount(xData)} {unitDescription}
          </p>
        </div>
      </div>
    )
  }
  public extractPropsData(data: any) {
    const xData: any[] = []
    const { filter } = this.props
    data.facets.forEach(
      (item: any) => {
        if (item.facetType === 'enumeration' && item.columnName === filter) {
          item.facetValues.forEach(
            (facetValue: any) => {
              if (item.columnName) {
                xData.push({ columnName: item.columnName, ...facetValue })
              }
            })
        }
      }
    )
    // sort the data so that the largest bars are at the front
    xData.sort((a, b) => {
      return b.count - a.count
    })
    return xData
  }

  public onMeasureResize(contentRect: ContentRect) {
    this.setState({ dimensions: contentRect })
  }
}
