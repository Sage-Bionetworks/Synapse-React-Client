import React from 'react'
const uuidv4 = require('uuid/v4');

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
        // the text currently under the cursor
        this.state = {
            hoverText: ""
        }
    }

    /**
     * Updates the hover text and update the view
     *
     * @memberof StackedRowHomebrew
     */
    handleHover = (incomingText) => (event) => {
        // add box shadow
        event.target.style.boxShadow = "25px 20px"
         // careful to avoid an infinite loop
        if (this.state.hoverText !== incomingText) {
            this.setState({hoverText: incomingText})
        }
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
         // careful to avoid an infinite loop
        if (this.state.hoverText !== "") {
            this.setState({hoverText: ""})
        }
    }

    /**
     * Display view
     */
    render () {
        // while data hasn't queued up display loading
        if (this.props.data.length === 0) {
            return (<div className="container">loading</div>)
        }

        let {data} = this.props

        let x_data = []
        data.facets.forEach(
            item => {
                if (item.facetType === "enumeration") {
                    item.facetValues.forEach(
                        facetValue => {
                            if (item.columnName === "parentId") {
                                x_data.push(facetValue.count)
                            }
                        }
                    )
                }
            }
        )
        // sort the data so that the largest bars are at the front
        x_data.sort((a,b) => {return b - a})
        let total = x_data.reduce((a,b) => {return a + b})
        let colors = ['#dddddd','#bbbbbb','#989898','#787878','#595959','#3c3c3c','#222222'].reverse()
        return (<div style={{marginBottom:"50px"}} className="container">
            <p> <strong> {total} </strong> files shown by {this.props.showBy} </p>
             {x_data.map(
                (count, index) => {
                    let rectStyle = {
                        margin: '0px',
                        fill: `${colors[index]}`,
                        strokeWidth: '0px',
                        boxShadow: "20px 20px"
                    }
                    let height = 50
                    let width = (count / total) * 800
                    
                    return (
                            // each svg represents one of the bars
                            // will need to change this to be responsive
                            <svg height={height} width={width} key={uuidv4()}
                                onMouseEnter={this.handleHover(count)}
                                onMouseLeave={this.handleExit}
                                >
                                <rect 
                                height={height} width={width} style={rectStyle}>
                                </rect>
                                {/* display the count of this bar chart's frequency */}
                                <text font="bold sans-serif" fill="white" x={width / 2} y={height/2}> {count}
                                </text>
                            </svg>)
            }
        )}
        <p> {this.props.showBy} {this.state.hoverText} </p>
         </div>)
    }
}