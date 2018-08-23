import React from 'react'
import Plot from 'react-plotly.js';
import * as SynapseConstants from '../../utils/SynapseConstants'
import {getQueryTableResults} from '../../utils/SynapseClient'



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
    fetchPlotlyData() {

        const {ownerId, token } = this.props
        const {query} = this.props.widgetparamsMapped

        let raw_plot_data = {}
        let maxPageSize = 150

        // step 1: get init query with maxRowsPerPage calculated
        let queryRequest = {
            concreteType: "org.sagebionetworks.repo.model.table.QueryBundleRequest",
            entityId: ownerId,
            query: {
                isConsistent: false,
                limit: maxPageSize,
                partMask: SynapseConstants.BUNDLE_MASK_QUERY_RESULTS | SynapseConstants.BUNDLE_MASK_QUERY_FACETS, // 9,  // get query results and max rows per page
                offset: 0,
                sql: query
            }
        };

        // Have to make two "sets" of calls for query, the first one tells us the maximum size per page of data
        // we can get, the following uses that maximum and offsets to the appropriate location to get the data
        // afterwards, the process repeats
        getQueryTableResults(queryRequest, token).then(initData => {
            let queryCount = initData.queryResult.queryResults.rows.length
            let totalQueryResults = queryCount
            raw_plot_data = initData;
            // Get the subsequent data, note- although the function calls itself, it runs
            // iteratively due to the await
            const getData = async () => {
                if (queryCount === maxPageSize) {
                    maxPageSize = initData.maxRowsPerPage
                    let queryRequestWithMaxPageSize = {
                        concreteType: "org.sagebionetworks.repo.model.table.QueryBundleRequest",
                        entityId: ownerId,
                        partMask: SynapseConstants.BUNDLE_MASK_QUERY_RESULTS,
                        query: {
                            isConsistent: false,
                            limit: maxPageSize,
                            offset: totalQueryResults,
                            sql: query
                        }
                    };
                    await getQueryTableResults(queryRequestWithMaxPageSize, token)
                        .then(post_data => {
                            queryCount += post_data.queryResult.queryResults.rows.length
                            if (queryCount > 0) {
                                totalQueryResults += queryCount
                                raw_plot_data.queryResult.queryResults.rows.push(
                                    ...post_data.queryResult.queryResults.rows  // ... spread operator to push all elements on
                                )
                            }
                            return getData()
                        })
                        .catch(err => 
                            {
                                console.log("Error on getting table results ", err)
                            }
                        );
                } else {
                    // set data to this plots sql in the query data
                    this.setState({
                        queryData: raw_plot_data,
                        isLoaded: true
                    });
                }
            }
            getData()
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

export default SynapsePlot