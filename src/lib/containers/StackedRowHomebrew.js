import React from 'react'
import Measure from 'react-measure'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'

library.add(faAngleLeft)
library.add(faAngleRight)

const cloneDeep = require('lodash.clonedeep')
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
        // the text currently under the cursor
        this.state = {
            hoverText: "",
            hoverTextCount: 0,
            selectedFacets: {},
            dimensions: {height: 1, width: 1},
            index: -1,
            isBarChart: false
        }
        this.extractPropsData = this.extractPropsData.bind(this)
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
        let {isChecked} = cloneDeep(this.props)
        isChecked[dict.index] = !isChecked[dict.index]
        this.props.executeQueryRequest(null, isChecked);

        // https://medium.freecodecamp.org/reactjs-pass-parameters-to-event-handlers-ca1f5c422b9
        this.setState(
            {
                hoverText: dict.value,
                hoverTextCount: dict.count,
                index: dict.index
            }
        )
    }

    /**
    //  * Update the state with selected facets and call props to update data
    //  *
    //  * @param {*} selectedFacets
    //  * @memberof Facets
    //  */
    // updateStateAndMakeQuery(selectedFacets) {
    //     this.setState({ selectedFacets });
    //     // have to reformat the selected facets to format for the api call
    //     let selectedFacetsFormatted = Object.keys(selectedFacets).map(
    //         key => {
    //             return selectedFacets[key]
    //         }
    //     )
    //     let queryRequest = this.props.getLastQueryRequest();
    //     queryRequest.query.selectedFacets = selectedFacetsFormatted;
    //     this.props.executeQueryRequest(queryRequest);
    // }

    // Handle user cycling through slices of the bar chart
    handleArrowClick = (direction) => (event) => {
        let {index} = this.state
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

    /**
     * Display view
     */
    render () {
        let {data} = this.props
        // while data hasn't queued up display loading
        if (data.length === 0) {
            return (<div className="container">loading</div>)
        }


        let x_data = this.extractPropsData(data);
        let total = 0

        let {width} = this.state.dimensions
        // sum up the counts of data
        for (let key in x_data) { if (x_data.hasOwnProperty(key)) { total += x_data[key].count } }
        return (
            <div className="container-fluid SRC-margin-bottom-50px">
                <div className="row">
                    <span>
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
                <div className="row">
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
                                        // simple heuristics for color
                                        // let newR = this.props.R + (255 - this.props.R) * (1 / index)
                                        // let newG = this.props.G + (255 - this.props.G) * (1 / index)
                                        // let newB = this.props.B + (255 - this.props.B) * (1 / index)

                                        let newR = this.props.R * (1.3 - (1.0 / index))
                                        let newG = this.props.G * (1.3 - (1.0 / index))
                                        let newB = this.props.B * (1.3 - (1.0 / index))
                                        let rectStyle

                                        if (this.props.isChecked[index] === false) {
                                            rectStyle = {
                                                fill: `#C4C4C4`
                                            }
                                        } else {
                                            rectStyle = {
                                                fill: `rgb(${newR},${newG},${newB})`
                                            }
                                        }
                                        
                                        let svgHeight = 50
                                        // this doesn't work yet but is a better heuristic than above
                                        let svgWidth = (obj.count / total) * width
                                        let {isBarChart} = this.state
                                        
                                        if (isBarChart) {
                                            [svgWidth,svgHeight] = [svgHeight,svgWidth]
                                        }

                                        return (
                                            // each svg represents one of the bars
                                            // will need to change this to be responsive
                                            <svg height={65}
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
                                                    font="bold sans-serif"
                                                    fill={this.props.isChecked[index] ?  "black": "white"}
                                                    x={svgWidth / 2}
                                                    y={svgHeight/2}>
                                                    {/* only display the top three results */}
                                                    {index < 3 && obj.count}
                                                </text>
                                                {this.state.index === index && <text 
                                                    fill="black"
                                                    x={0}
                                                    fontFamily="FontAwesome"
                                                    y={60}
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
                <div className="row">
                    {this.state.hoverText && <p className="SRC-noMargin" > <strong> {this.props.filter}: {this.state.hoverText} </strong> </p>}
                    {this.state.hoverText && <p className="SRC-noMargin" > <i> {this.state.hoverTextCount} files </i> </p>}
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