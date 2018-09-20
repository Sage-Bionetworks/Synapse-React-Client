import React from 'react'
const uuidv4 = require('uuid/v4');
const PREVIOUS_ITEM_CLICK = "left click"
const NEXT_CLICK = "right click"

const colorsTissues = [
    "#F27277",
    "#EB8231",
    "#FAD591",
    "#B22D6B",
    "#F47E6C",
    "#FAD591",
    "#CC3F45",
    "#F89C55",
    "#FF9CA0",
    "#DE9A1F",
    "#BD422F",
    "#F7A6CC",
    "#9C141A",
    "#F683B9",
    "#FACFAF",
    "#FCA79A",
    "#C94281",
    "#C25D10",
    "#FFE2AD",
    "#B2242A",
    "#F7E2DF",
    "#D46D1E",
    "#CF8C15",
    "#FFC5BD",
    "#DA614F",
    "#F7C6DD",
    "#F5B33C",
    "#F5B584",
    "#E566A1",
    "#E0585D",
    "#FCCB6F",
  ]

  const colorsAssays = [
    "#94C9EB",
    "#93ABE8",
    "#5BB0B5",
    "#109488",
    "#05635B",
    "#C5EDF0",
    "#42C7BB",
    "#47337D",
    "#3C4A63",
    "#3F833F",
    "#B2A5D1",
    "#6279A1",
    "#6DB56D",
    "#407BA0",
    "#3F5EAB",
    "#C0EBC0",
    "#77AFD4",
    "#7692D9",
    "#5BB0B5",
    "#10847A",
    "#C7D6FF",
    "#A6DDE0",
    "#24AB9F",
    "#47337D",
    "#24334F",
    "#A9EBE5",
    "#907FBA",
    "#4A5E81",
    "#58A158",
    "#2B688F",
    "#ABBEE0",
    "#A7DBA7",
    "#5B95BA",
    "#5171C0",
    "#2F8E94",
    "#BCE0F7",
    "#B1C6FA",
    "#7EC8CC",
    "#109488",
    "#332069",
    "#E1F4F5",
    "#63DBD0",
    "#5A478F",
    "#3C4A63",
    "#58A158",
    "#D5CFE3",
    "#849BC4",
    "#87C987",
    "#407BA0",
    "#5171C0",
  ]

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
            width: 0,
            index: 0
        }
        this.chartRef = React.createRef()
        this.resize = this.resize.bind(this)
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

    // handle resizing of browser to make graphic responsive
    resize = () => {
        this.forceUpdate()
    }

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

        let x_data = this.extractPropsData(data);
        let total = 0

        // sum up the counts of data
        for (let key in x_data) { if (x_data.hasOwnProperty(key)) { total += x_data[key].count } }

        return (
            <div style={{marginBottom:"50px"}} className="container">
                <div> 
                    <span>
                        <strong> {total} </strong> files shown by {this.props.alias}
                    </span>
                    <button 
                        className="btn btn-default"
                        type="button" 
                        onClick={this.handleArrowClick(NEXT_CLICK)} 
                        style={{float:"right"}}>
                        <i className="fas fa-angle-right"></i>
                    </button>
                    <button 
                        className="btn btn-default"
                        type="button"
                        onClick={this.handleArrowClick(PREVIOUS_ITEM_CLICK)} 
                        style={{float:"right"}}> 
                        <i className="fas fa-angle-left"></i> 
                    </button>
                </div>

                <div className="container" ref={this.chartRef}>
                    {x_data.map(
                        (obj, index) => {
                            let rectStyle = {
                                margin: '0px',
                                fill: `${colorsTissues[index]}`,
                                strokeWidth: '0px',
                                boxShadow: "20px 20px"
                            }
                            let height = 50
                            let width
                            if (this.state.width === 0) {
                                width = (obj.count / total) * (window.innerWidth/2)
                            } else {
                                // this doesn't work yet but is a better heuristic than above
                                width = (obj.count / total) * (this.state.width/1.5)
                            }
                            return (
                                // each svg represents one of the bars
                                // will need to change this to be responsive
                                <svg height={height} width={width} key={uuidv4()}
                                    onMouseEnter={this.handleHover}
                                    onClick={this.handleClick({...obj, index})}
                                    onMouseLeave={this.handleExit}>
                                    <rect 
                                        height={height}
                                        width={width}
                                        style={rectStyle}>
                                    </rect>
                                    {/* display the count of this bar chart's frequency */}
                                    <text 
                                        font="bold sans-serif"
                                        fill="white"
                                        x={width / 2}
                                        y={height/2}>
                                        {/* only display the top three results */}
                                        {index < 3 && obj.count}
                                    </text>
                                </svg>
                            )
                        }
                    )}
                </div>
                {this.state.hoverText && <div> <i className="fas fa-caret-down"></i>  </div>}
                {this.state.hoverText && <p> {this.props.alias}: {this.state.hoverText} </p>}
                {this.state.hoverText && <p> <i> {this.state.hoverTextCount} files </i> </p>}
            </div>
        )
    }

    extractPropsData(data) {
        let x_data = [];
        data.facets.forEach(item => {
            if (item.facetType === "enumeration") {
                item.facetValues.forEach(facetValue => {
                    if (item.columnName === "parentId") {
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