import React from 'react'
const uuidv4 = require('uuid/v4');


export default class StackedRowHomebrew extends React.Component {

    constructor() {
        super()
        this.handleHover = this.handleHover.bind(this)
        this.handleExit = this.handleExit.bind(this)
    }

    handleHover = (info) => (event) => {
        event.target.style.boxShadow = "25px 20px"
    }

    handleExit = (info) => (event) => {
        event.target.style.boxShadow = ""
    }

    render () {
        if (this.props.isLoading) {
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
                            <svg height={height} width={width} key={uuidv4()}
                                onMouseEnter={this.handleHover(count)}
                                onMouseLeave={this.handleExit(count)}
                                >
                                <rect 
                                height={height} width={width} style={rectStyle}>
                                </rect>
                                <text font="bold sans-serif" fill="white" x={width / 2} y={height/2}> {count}
                                </text>
                            </svg>)
            }
        )}
        <p> {this.props.showBy}  </p>
         </div>)
    }
}