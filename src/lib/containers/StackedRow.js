
import React from 'react'
import Plot from 'react-plotly.js';

export default class StackedRow extends React.Component {

    constructor() {
        super()
        this.handleClick = this.handleClick.bind(this)
        this.handleHover = this.handleHover.bind(this)
    }

    handleClick(event) {
        console.log("clicked ", event)
    }

    handleHover(event) {
        console.log("hover event ", event)
    }

    render () {
        if (this.props.data.length === 0) {
            return (<div>loading</div>)
        }

        // let x_data = [[2076, 203, 201, 24, 29]]
        let x_data = [[]]
        this.props.data.facets.forEach(
            item => {
                if (item.facetType === "enumeration") {
                    item.facetValues.forEach(
                        facetValue => {
                            if (item.columnName === "parentId") {
                                x_data[0].push(facetValue.count)
                            }
                        }
                    )
                }
            }
        )
        x_data[0].sort((a,b) => {return b - a})
        let top_labels = ['', '', '', '',
        '']

        let colors = ['rgba(38, 24, 74, 0.8)', 'rgba(71, 58, 131, 0.8)',
            'rgba(122, 120, 168, 0.8)', 'rgba(164, 163, 204, 0.85)',
            'rgba(190, 192, 213, 1)']
        x_data[0] = x_data[0].map(e => {return Math.log(e)})

        let y_data = [' ']

        let traces = []

        for (let i = 0; i < x_data[0].length; i++) {  // i < 5
            for (let j = 0; j < x_data.length; j++) {  // j < 1
                let xd = x_data[j]  // 0,0 1,0 2,0 3,0 4,0
                let yd = y_data[j]
                traces.push(
                    {
                        x:[xd[i]],
                        y:[yd],
                        orientation:'h',
                        type: "bar",
                        hoverinfo: "all",
                        hovertext: "all",
                        text: "all",
                        marker : {
                                    color : colors[i],
                                    line : {
                                        color :'rgb(248, 248, 249)',
                                        width : 0.5
                                    }
                                }
                    }
                )
            }
        }

        let layout = {
            xaxis : {
                showgrid : false,
                showline : false,
                showticklabels : false,
                zeroline : false,
                domain : [0, 1]
            },
            yaxis: {
                showgrid: false,
                showline: false,
                showticklabels: false,
                zeroline: false,
            },
            barmode: 'stack',
            paper_bgcolor: 'rgb(248, 248, 255)',
            plot_bgcolor: 'rgb(248, 248, 255)',
            height: 200,
            width: 500,
            margin: {
                l: 0,
                r: 0,
                t: 0,
                b: 0,
                pad:0
            },
            showlegend: false,
        }

        let annotations = []

        for (let i = 0; i < x_data.length; i++) {
            // labeling the y-axis
            let yd = y_data[i], xd = x_data[i]
            annotations.push(
                {
                    xref:'paper', 
                    yref:'y',
                    x:0.14,
                    y:yd,
                    xanchor:'right',
                    text: String(yd),
                    font: {
                        family:'Arial',
                        size:14,
                        color:'rgb(67, 67, 67)'
                    },
                    showarrow:false,
                    align:'right'
                }
            )
            // labeling the first percentage of each bar (x_axis)
            annotations.push(
                        {
                            xref: 'x',
                            yref: 'y',
                            x: xd[0] / 2,
                            y: yd,
                            text: String(Math.round(Math.exp(xd[0]))),
                            font: {
                                family: 'Arial',
                                size: 14,
                                color: 'rgb(248, 248, 255)'
                            },
                            showarrow: false
                        }
                        )
            // labeling the first Likert scale (on the top)
            if (yd === y_data[y_data.length -1]) {
                annotations.push(
                    {
                        xref:'x',
                        yref:'paper',
                        x:xd[0] / 2,
                        y:1.1,
                        text:top_labels[0],
                        font:{
                            family:'Arial', 
                            size:14,
                            color:'rgb(67, 67, 67)'
                        },
                        showarrow:false
                    }
                )
            }
            let space = xd[0]
            for (let i = 1; i < xd.length; i++) {
                // labeling the rest of percentages for each bar (x_axis)
                annotations.push(
                    {
                        xref:'x',
                        yref:'y',
                        x:space+ (xd[i] / 2),
                        y:yd, 
                        text:String(Math.round(Math.exp(xd[i]))),
                        font:{
                            family:'Arial',
                            size:14,
                            color:'rgb(248, 248, 255)'
                        },
                        showarrow:false
                    }
                )
                // labeling the Likert scale
                if (yd === y_data[y_data.length - 1]) {
                    annotations.push(
                        {
                            xref:'x',
                            yref:'paper',
                            x:space + (xd[i] / 2),
                            y:1.1,
                            text:top_labels[i],
                            font:{
                                    family:'Arial', 
                                    size:14,
                                    color:'rgb(67, 67, 67)'
                                },
                            showarrow:false
                        }
                    )
                }
                space += xd[i]
            }
        }

        layout.annotations = annotations

        return (<div className="container">
                    <Plot onClick={this.handleClick} onHover={this.handleHover} layout={layout} data={traces} config={{displayModeBar: false}}></Plot>
                </div>
            )
    }

}