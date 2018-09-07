import React from 'react'
import Plot from 'react-plotly.js';
import PropTypes from 'prop-types'
import * as SynapseConstants from '../../utils/SynapseConstants'
import {getFullQueryTableResults} from '../../utils/SynapseClient'

class SynapsePlot extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            isLoaded: false
        }
        this.fetchPlotlyData = this.fetchPlotlyData.bind(this)
        this.showPlot = this.showPlot.bind(this)
    }

    componentDidMount() {
        this.fetchPlotlyData()
    }

    /**
     * Get data for plotly
     *
     * @returns data corresponding to plotly widget
     */
    async fetchPlotlyData() {

        const {token} = this.props
        const {query} = this.props.widgetparamsMapped
        let queryRequest = {
            concreteType: "org.sagebionetworks.repo.model.table.QueryBundleRequest",
            query: {
                isConsistent: true,
                partMask: SynapseConstants.BUNDLE_MASK_QUERY_RESULTS, // 9,  // get query results and max rows per page
                sql: query
            }
        };

        let data = await getFullQueryTableResults(queryRequest, token)
        this.setState({
            queryData: data,
            isLoaded: true
        })
    }

    showPlot() {

        if (!this.state.isLoaded) {
            return
        }

        const {title, xtitle, ytitle, type, xaxistype, showlegend} = this.props.widgetparamsMapped
        const queryData = this.state
        let isHorizontal = this.props.widgetparamsMapped.horizontal.toLowerCase();

        let layout = {
            title: title,
            showlegend: showlegend,
        };
        if (xtitle) {
            layout.xaxis = {
                title: xtitle
            };
        }
        if (xaxistype) {
            layout.xaxis = {
                ...layout.xaxis,
                xaxistype: xaxistype.toLowerCase()
            };
        }
        if (ytitle) {
            layout.yaxis = {
                title: ytitle
            };
        }

        // init plot_data
        let plot_data = [];
        let orientation = isHorizontal ? "v" : "h";
        let headers = queryData.queryData.queryResult.queryResults.headers;
        for (let i = 0; i < headers.length - 1; i++) {
            // make an entry for each set of data points
            plot_data[i] = {
                x: [],
                y: [],
                name: headers[i + 1].name,
                type: type.toLowerCase(),
                orientation: orientation
            };
        }
        // grab all the data
        for (let i = 0; i < queryData.queryData.queryResult.queryResults.rows.length; i++) {
            let row = queryData.queryData.queryResult.queryResults.rows[i];
            for (let j = 1; j < row.values.length; j++) {
                // create pairs of data
                let row_values = row.values;
                plot_data[j - 1].x.push(row_values[0]);
                plot_data[j - 1].y.push(row_values[j]);
            }
        }

        return (<Plot
                    data={plot_data}
                    layout={layout}>
                </Plot>)
    }               

    render () {
        if (!this.state.isLoaded) {
            return null
        } else {
            return (
                <React.Fragment>
                    {this.showPlot()}
                </React.Fragment>
            )
        }
    }

}

SynapsePlot.propTypes = {
    ownerId: PropTypes.string,
    wikiId: PropTypes.string,
    widgetparamsMapped: PropTypes.object
}

export default SynapsePlot