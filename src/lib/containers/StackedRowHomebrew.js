import React from 'react'
const uuidv4 = require('uuid/v4');
const LEFT_CLICK = "left click"
const RIGHT_CLICK = "right click"

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
            selectedFacets: {}
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
        // if (this.state.hoverText !== incomingText) {
        //     this.setState({hoverText: incomingText})
        // }
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
        this.setState({hoverText: dict.value + " " + dict.count})
    }

    /**
     * Update the state with selected facets and call props to update data
     *
     * @param {*} selectedFacets
     * @memberof Facets
     */
    updateStateAndMakeQuery(selectedFacets) {
        this.setState({ selectedFacets });
        // have to reformat the selected facets to format for the api call
        let selectedFacetsFormatted = Object.keys(selectedFacets).map(
            key => {
                return selectedFacets[key]
            }
        )
        let queryRequest = this.props.getLastQueryRequest();
        queryRequest.query.selectedFacets = selectedFacetsFormatted;
        this.props.executeQueryRequest(queryRequest);
    }

    handleArrowClick = (direction) => (event) => {
        console.log("clicked ", direction)
    }

    resize = () => this.forceUpdate()

    componentDidMount() {
      window.addEventListener('resize', this.resize)
    }
    
    componentWillUnmount() {
      window.removeEventListener('resize', this.resize)
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
                                x_data.push({columnName: item.columnName , ...facetValue})
                            }
                        }
                    )
                }
            }
        )
        // sort the data so that the largest bars are at the front
        x_data.sort((a,b) => {return b.count - a.count})
        let total = 0
        // sum up the counts of data
        for (let key in x_data) { if (x_data.hasOwnProperty(key)) { total += x_data[key].count } }
        let colors = ['#dddddd','#bbbbbb','#989898','#787878','#595959','#3c3c3c','#222222'].reverse()
        return (<div style={{marginBottom:"50px"}} className="container">
            <div> <span><strong> {total} </strong> files shown by {this.props.showBy}</span>
            <button className="btn btn-default" type="button" onClick={this.handleArrowClick(RIGHT_CLICK)} style={{float:"right"}}> <i className="fas fa-angle-right"></i> </button>
            <button className="btn btn-default" type="button" onClick={this.handleArrowClick(LEFT_CLICK)} style={{float:"right"}}> <i className="fas fa-angle-left"></i> </button>
            </div>
            <div className="container">
             {x_data.map(
                (obj, index) => {
                    let rectStyle = {
                        margin: '0px',
                        fill: `${colors[index]}`,
                        strokeWidth: '0px',
                        boxShadow: "20px 20px"
                    }
                    let height = 50
                    let width = (obj.count / total) * (window.innerWidth/1.5)
                    console.log("inner width ", width)
                    return (
                            // each svg represents one of the bars
                            // will need to change this to be responsive
                            <svg height={height} width={width} key={uuidv4()}
                                onMouseEnter={this.handleHover(obj.count)}
                                onClick={this.handleClick(obj)}
                                onMouseLeave={this.handleExit}
                                >
                                <rect 
                                height={height} width={width} style={rectStyle}>
                                </rect>
                                {/* display the count of this bar chart's frequency */}
                                <text font="bold sans-serif" fill="white" x={width / 2} y={height/2}> {obj.count}
                                </text>
                            </svg>)
                }
            )}
        </div>
        <div> <i className="fas fa-caret-down"></i>  </div>
        <p> {this.props.showBy} {this.state.hoverText} </p>
         </div>)
    }
}