import _regeneratorRuntime from 'babel-runtime/regenerator';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React from 'react';
import Plot from 'react-plotly.js';
import PropTypes from 'prop-types';
import * as SynapseConstants from '../../utils/SynapseConstants';
import { getFullQueryTableResults } from '../../utils/SynapseClient';

var SynapsePlot = function (_React$Component) {
    _inherits(SynapsePlot, _React$Component);

    function SynapsePlot(props) {
        _classCallCheck(this, SynapsePlot);

        var _this = _possibleConstructorReturn(this, (SynapsePlot.__proto__ || Object.getPrototypeOf(SynapsePlot)).call(this, props));

        _this.state = {
            isLoaded: false
        };
        _this.fetchPlotlyData = _this.fetchPlotlyData.bind(_this);
        _this.showPlot = _this.showPlot.bind(_this);
        return _this;
    }

    _createClass(SynapsePlot, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.fetchPlotlyData();
        }

        /**
         * Get data for plotly
         *
         * @returns data corresponding to plotly widget
         */

    }, {
        key: 'fetchPlotlyData',
        value: function () {
            var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee() {
                var token, query, queryRequest, data;
                return _regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                token = this.props.token;
                                query = this.props.widgetparamsMapped.query;
                                queryRequest = {
                                    concreteType: "org.sagebionetworks.repo.model.table.QueryBundleRequest",
                                    query: {
                                        isConsistent: true,
                                        partMask: SynapseConstants.BUNDLE_MASK_QUERY_RESULTS, // 9,  // get query results and max rows per page
                                        sql: query
                                    }
                                };
                                _context.next = 5;
                                return getFullQueryTableResults(queryRequest, token);

                            case 5:
                                data = _context.sent;

                                this.setState({
                                    queryData: data,
                                    isLoaded: true
                                });

                            case 7:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function fetchPlotlyData() {
                return _ref.apply(this, arguments);
            }

            return fetchPlotlyData;
        }()
    }, {
        key: 'showPlot',
        value: function showPlot() {

            if (!this.state.isLoaded) {
                return;
            }

            var _props$widgetparamsMa = this.props.widgetparamsMapped,
                title = _props$widgetparamsMa.title,
                xtitle = _props$widgetparamsMa.xtitle,
                ytitle = _props$widgetparamsMa.ytitle,
                type = _props$widgetparamsMa.type,
                xaxistype = _props$widgetparamsMa.xaxistype,
                showlegend = _props$widgetparamsMa.showlegend;

            var queryData = this.state;
            var isHorizontal = this.props.widgetparamsMapped.horizontal.toLowerCase();

            var layout = {
                title: title,
                showlegend: showlegend
            };
            if (xtitle) {
                layout.xaxis = {
                    title: xtitle
                };
            }
            if (xaxistype) {
                layout.xaxis = Object.assign({}, layout.xaxis, {
                    xaxistype: xaxistype.toLowerCase()
                });
            }
            if (ytitle) {
                layout.yaxis = {
                    title: ytitle
                };
            }

            // init plot_data
            var plot_data = [];
            var orientation = isHorizontal ? "v" : "h";
            var headers = queryData.queryData.queryResult.queryResults.headers;
            for (var i = 0; i < headers.length - 1; i++) {
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
            for (var _i = 0; _i < queryData.queryData.queryResult.queryResults.rows.length; _i++) {
                var row = queryData.queryData.queryResult.queryResults.rows[_i];
                for (var j = 1; j < row.values.length; j++) {
                    // create pairs of data
                    var row_values = row.values;
                    plot_data[j - 1].x.push(row_values[0]);
                    plot_data[j - 1].y.push(row_values[j]);
                }
            }

            return React.createElement(Plot, {
                data: plot_data,
                layout: layout });
        }
    }, {
        key: 'render',
        value: function render() {
            if (!this.state.isLoaded) {
                return null;
            } else {
                return React.createElement(
                    React.Fragment,
                    null,
                    this.showPlot()
                );
            }
        }
    }]);

    return SynapsePlot;
}(React.Component);

SynapsePlot.propTypes = {
    ownerId: PropTypes.string,
    wikiId: PropTypes.string,
    widgetparamsMapped: PropTypes.object
};

export default SynapsePlot;