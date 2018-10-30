import React from 'react'
import Measure from 'react-measure'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'
import ColorGradient from './ColorGradient'

library.add(faAngleLeft)
library.add(faAngleRight)

const uuidv4 = require('uuid/v4');
const PREVIOUS_ITEM_CLICK = "left click"
const NEXT_CLICK = "right click"

/**
 * Make a simple stacked bar char
 *
 * @class StackedRowHomebrew
 * @extends {React.Component}
 */
export default class StackedRowHomebrew extends React.Component {

    constructor() {
        super()
        this.handleHover = this.handleHover.bind(this)
        this.handleExit = this.handleExit.bind(this)
        this.handleClick = this.handleClick.bind(this)
        this.handleArrowClick = this.handleArrowClick.bind(this)
        this.getHoverText = this.getHoverText.bind(this)
        this.rgba2rgb = this.rgba2rgb.bind(this)
        // the text currently under the cursor
        this.state = {
            hoverText: "",
            hoverTextCount: 0,
            selectedFacets: {},
            dimensions: {height: 1, width: 1},
            index: -1
        }
        this.extractPropsData = this.extractPropsData.bind(this)
    }

    componentDidUpdate(prevProps) {
        if (prevProps.filter !== this.props.filter) {
            this.setState({
                hoverText: "",
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
    handleHover (event) {
        // add box shadow
        event.target.style.boxShadow = "25px 20px"
    }

    /**
     * Update the hover text and the view
     *
     * @param {*} event
     * @memberof StackedRowHomebrew
     */
    handleExit (event) {
        // remove box shadow
        event.target.style.boxShadow = ""
    }

    /**
     * Handle column click event
     */
    handleClick = (dict) => (event) => {
        // https://medium.freecodecamp.org/reactjs-pass-parameters-to-event-handlers-ca1f5c422b9
        this.setState(
            {
                hoverText: dict.value,
                hoverTextCount: dict.count,
                index: dict.index
            }
        )
    }

    getHoverText(x_data) {
        let hoverText
        if (this.state.index === -1) {
            hoverText = x_data[0] && x_data[0].value
        } else {
            hoverText = this.state.hoverText
        }

        return  (<React.Fragment>
                    <span className="SRC-text-cap">  {this.props.filter} </span> : <span> {hoverText === 'org.sagebionetworks.UNDEFINED_NULL_NOTSET' ? "unannotated": hoverText } </span>
                </React.Fragment>) 
    }

    getFileCount(x_data) {
        if (this.state.index === -1) {
            let hoverTextCount = x_data[0] && x_data[0].count
            return hoverTextCount
        } else {
            return this.state.hoverTextCount
        }
    }

    // Handle user cycling through slices of the bar chart
    handleArrowClick = (direction) => (event) => {
        let {index} = this.state
        if (index === -1) {
            index = 0
        }
        let dict = this.extractPropsData(this.props.data)
        let length = Object.keys(dict).length

        if (direction === PREVIOUS_ITEM_CLICK) {
            if (index === 0) {
                // wrap around
                index = length - 1
            } else {
                index -=1
            }
        } else {
            if (index === length - 1) {
                index = 0
            } else {
                index += 1
            }            
        }
        dict = dict[index]
        this.setState(
            {
                hoverText: dict.value,
                hoverTextCount: dict.count,
                index
            }
        )
    }

    rgba2rgb(background, color) {
        const alpha = color[3]
        return [Math.floor((1 - alpha) * background[0] + alpha * color[0] + 0.5),
                Math.floor((1 - alpha) * background[1] + alpha * color[1] + 0.5),
                Math.floor((1 - alpha) * background[2] + alpha * color[2] + 0.5)]
    }

    /**
     * Display view
     */
    render () {
        let {data} = this.props
        // while loading
        if (this.props.isLoadingNewData) {
            return (this.props.loadingScreen)
        }

        let x_data = this.extractPropsData(data);
        let total = 0
        let colorGradient = new ColorGradient(this.props.rgbIndex)
        let originalColor = colorGradient.getOriginalColor()
        let {width} = this.state.dimensions
        // sum up the counts of data
        for (let key in x_data) { if (x_data.hasOwnProperty(key)) { total += x_data[key].count } }
        return (
            <div className="container-fluid">
                <div className="row SRC-center-text">
                    <span className="SRC-text-title">
                        <strong> {total} </strong> files shown by {this.props.filter}
                    </span>
                    <button
                        className="btn btn-default btn-sm SRC-floatRight" 
                        onClick={this.handleArrowClick(NEXT_CLICK)}>
                        <FontAwesomeIcon icon="angle-right"/>
                    </button>
                    <button
                        className="btn btn-default btn-sm SRC-floatRight" 
                        onClick={this.handleArrowClick(PREVIOUS_ITEM_CLICK)}> 
                        <FontAwesomeIcon icon="angle-left"/>
                    </button>
                </div>
                <div className="row SRC-bar-border SRC-bar-marginTop">
                    <Measure 
                        bounds
                        onResize={(contentRect) => {
                            this.setState({ dimensions: contentRect.bounds })
                        }}
                        > 
                        {({ measureRef }) =>
                            <div ref={measureRef}>
                                {x_data.map(
                                    (obj, index) => {

                                        let initRender = this.state.index === -1 && index === 0
                                        let textColor = colorGradient.getTextColor()
                                        let curColor = colorGradient.getColor()
                                        let curColorSplit = curColor.substring(5).split(",")

                                        curColorSplit[3] = curColorSplit[3].replace(")","")
                                        curColorSplit = curColorSplit.map(el => {return Number(el)})
                                        // we do this to convert the rgba => rgb so hover will work
                                        let rgbColor = this.rgba2rgb([255, 255, 255],curColorSplit)
                                        rgbColor = `rgb(${rgbColor})`
                                        let rectStyle
                                        
                                        // TODO: find a way to calculate text color with opacity factored in
                                        // https://stackoverflow.com/questions/3942878/how-to-decide-font-color-in-white-or-black-depending-on-background-color
                                        // let textColor = calculateTextColor(newR,newG,newB)

                                        const check = this.props.isChecked[index] === undefined || this.props.isChecked[index]

                                        if (check) {
                                            rectStyle = {
                                                fill: rgbColor
                                            }
                                        } else {
                                            rectStyle = {
                                                fill: `#C4C4C4`
                                            }
                                        }
                                        
                                        let svgHeight = 80
                                        let svgWidth = (obj.count / total) * width

                                        return (
                                            // each svg represents one of the bars
                                            // will need to change this to be responsive
                                            <svg height={svgHeight + 15}
                                                width={svgWidth} 
                                                key={uuidv4()}
                                                onClick={this.handleClick({...obj, index})}>
                                                <rect 
                                                    onMouseEnter={this.handleHover}
                                                    onMouseLeave={this.handleExit}
                                                    height={svgHeight}
                                                    width={svgWidth}
                                                    className="SRC-chart-rect-style"
                                                    // can't remove inline style due to dynamic fill
                                                    style={rectStyle}>
                                                </rect>
                                                {/* display the count of this bar chart's frequency */}
                                                <text 
                                                    className="SRC-text-chart"
                                                    font="bold sans-serif"
                                                    fill={textColor}
                                                    x={(svgWidth / 2) }
                                                    y={(svgHeight/2) + 3}>
                                                    {/* only display the top three results */}
                                                    {index < 3 && obj.count}
                                                </text>
                                                {(this.state.index === index || (initRender)) && <text 
                                                    fill={originalColor}
                                                    x={0}
                                                    y={svgHeight + 15}
                                                    className="SRC-text-shadow SRC-text-large"
                                                    >
                                                    {/* unicode below corresponds to downward carret, this is an alternative
                                                    to FontAwesome which wasn't displaying correctly when used inside a <text>
                                                    element  */}
                                                    {'\u25BE'}  
                                                </text>}
                                            </svg>
                                        )
                                    }
                                )}
                            </div>
                        }
                    </Measure>
                </div>
                <div className="row SRC-bar-border">
                    <p className="SRC-noMargin SRC-text-title" >
                        <strong> 
                            {this.getHoverText(x_data)}
                        </strong> 
                    </p>
                    <p className="SRC-noMargin SRC-text-chart" > {this.getFileCount(x_data)} files </p>
                </div>
            </div>
        )
    }

    extractPropsData(data) {
        let x_data = [];
        data.facets.forEach(item => {
            if (item.facetType === "enumeration" && item.columnName === this.props.filter) {
                item.facetValues.forEach(facetValue => {
                    if (item.columnName) {
                        x_data.push({ columnName: item.columnName, ...facetValue });
                    }
                });
            }
        });
        // sort the data so that the largest bars are at the front
        x_data.sort((a, b) => { return b.count - a.count; });
        return x_data;
    }
}