var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React from 'react';
import Plot from 'react-plotly.js';

var StackedRow = function (_React$Component) {
    _inherits(StackedRow, _React$Component);

    function StackedRow() {
        _classCallCheck(this, StackedRow);

        var _this = _possibleConstructorReturn(this, (StackedRow.__proto__ || Object.getPrototypeOf(StackedRow)).call(this));

        _this.handleClick = _this.handleClick.bind(_this);
        _this.handleHover = _this.handleHover.bind(_this);
        return _this;
    }

    _createClass(StackedRow, [{
        key: 'handleClick',
        value: function handleClick(event) {
            console.log("clicked ", event);
        }
    }, {
        key: 'handleHover',
        value: function handleHover(event) {
            console.log("hover event ", event);
        }
    }, {
        key: 'render',
        value: function render() {
            if (this.props.data.length === 0) {
                return React.createElement(
                    'div',
                    null,
                    'loading'
                );
            }

            // let x_data = [[2076, 203, 201, 24, 29]]
            var x_data = [[]];
            this.props.data.facets.forEach(function (item) {
                if (item.facetType === "enumeration") {
                    item.facetValues.forEach(function (facetValue) {
                        if (item.columnName === "parentId") {
                            x_data[0].push(facetValue.count);
                        }
                    });
                }
            });
            x_data[0].sort(function (a, b) {
                return b - a;
            });
            var top_labels = ['', '', '', '', ''];

            var colors = ['rgba(38, 24, 74, 0.8)', 'rgba(71, 58, 131, 0.8)', 'rgba(122, 120, 168, 0.8)', 'rgba(220, 163, 204, 0.85)', 'rgba(220, 163, 204, 0.85)'];

            // x_data[0] = x_data[0].map(e => {return Math.log(e)})

            var y_data = [' '];

            var traces = [];

            for (var i = 0; i < x_data[0].length; i++) {
                // i < 5
                for (var j = 0; j < x_data.length; j++) {
                    // j < 1
                    var xd = x_data[j]; // 0,0 1,0 2,0 3,0 4,0
                    var yd = y_data[j];
                    traces.push({
                        x: [xd[i]],
                        y: [yd],
                        orientation: 'h',
                        type: "bar",
                        marker: {
                            color: colors[i],
                            line: {
                                color: 'rgb(248, 248, 249)',
                                width: 0.5
                            }
                        }
                    });
                }
            }

            var layout = {
                xaxis: {
                    showgrid: false,
                    showline: false,
                    showticklabels: false,
                    zeroline: false,
                    domain: [0, 1]
                },
                yaxis: {
                    showgrid: false,
                    showline: false,
                    showticklabels: false,
                    zeroline: false
                },
                barmode: 'stack',
                paper_bgcolor: 'rgb(248, 248, 255)',
                plot_bgcolor: 'rgb(248, 248, 255)',
                height: 100,
                width: 600,
                margin: {
                    l: 0,
                    r: 0,
                    t: 0,
                    b: 0,
                    pad: 0
                },
                showlegend: false
            };

            var annotations = [];

            for (var _i = 0; _i < x_data.length; _i++) {
                // labeling the y-axis
                var _yd = y_data[_i],
                    _xd = x_data[_i];
                annotations.push({
                    xref: 'paper',
                    yref: 'y',
                    x: 0.14,
                    y: _yd,
                    xanchor: 'right',
                    text: String(_yd),
                    font: {
                        family: 'Arial',
                        size: 14,
                        color: 'rgb(67, 67, 67)'
                    },
                    showarrow: false,
                    align: 'right'
                });
                // labeling the first percentage of each bar (x_axis)
                annotations.push({
                    xref: 'x',
                    yref: 'y',
                    x: _xd[0] / 2,
                    y: _yd,
                    text: String(Math.round(_xd[0])),
                    font: {
                        family: 'Arial',
                        size: 14,
                        color: 'rgb(248, 248, 255)'
                    },
                    showarrow: false
                });
                // labeling the first Likert scale (on the top)
                if (_yd === y_data[y_data.length - 1]) {
                    annotations.push({
                        xref: 'x',
                        yref: 'paper',
                        x: _xd[0] / 2,
                        y: 1.1,
                        text: top_labels[0],
                        font: {
                            family: 'Arial',
                            size: 14,
                            color: 'rgb(67, 67, 67)'
                        },
                        showarrow: false
                    });
                }
                var space = _xd[0];
                for (var _i2 = 1; _i2 < _xd.length; _i2++) {
                    // labeling the rest of percentages for each bar (x_axis)
                    annotations.push({
                        xref: 'x',
                        yref: 'y',
                        x: space + _xd[_i2] / 2,
                        y: _yd,
                        text: String(Math.round(_xd[_i2])),
                        font: {
                            family: 'Arial',
                            size: 14,
                            color: 'rgb(248, 248, 255)'
                        },
                        showarrow: false
                    });
                    // labeling the Likert scale
                    if (_yd === y_data[y_data.length - 1]) {
                        annotations.push({
                            xref: 'x',
                            yref: 'paper',
                            x: space + _xd[_i2] / 2,
                            y: 1.1,
                            text: top_labels[_i2],
                            font: {
                                family: 'Arial',
                                size: 14,
                                color: 'rgb(67, 67, 67)'
                            },
                            showarrow: false
                        });
                    }
                    space += _xd[_i2];
                }
            }

            layout.annotations = annotations;

            return React.createElement(
                'div',
                { className: 'container' },
                React.createElement(Plot, { onClick: this.handleClick, onHover: this.handleHover, layout: layout, data: traces, config: { displayModeBar: false } })
            );
        }
    }]);

    return StackedRow;
}(React.Component);

export default StackedRow;