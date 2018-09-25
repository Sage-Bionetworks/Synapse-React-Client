var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React from 'react';
import Measure from 'react-measure';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';

library.add(faAngleLeft);
library.add(faAngleRight);

var uuidv4 = require('uuid/v4');
var PREVIOUS_ITEM_CLICK = "left click";
var NEXT_CLICK = "right click";

var colorsTissues = ["#F27277", "#EB8231", "#FAD591", "#B22D6B", "#F47E6C", "#FAD591", "#CC3F45", "#F89C55", "#FF9CA0", "#DE9A1F", "#BD422F", "#F7A6CC", "#9C141A", "#F683B9", "#FACFAF", "#FCA79A", "#C94281", "#C25D10", "#FFE2AD", "#B2242A", "#F7E2DF", "#D46D1E", "#CF8C15", "#FFC5BD", "#DA614F", "#F7C6DD", "#F5B33C", "#F5B584", "#E566A1", "#E0585D", "#FCCB6F"];

var colorsAssays = ["#94C9EB", "#93ABE8", "#5BB0B5", "#109488", "#05635B", "#C5EDF0", "#42C7BB", "#47337D", "#3C4A63", "#3F833F", "#B2A5D1", "#6279A1", "#6DB56D", "#407BA0", "#3F5EAB", "#C0EBC0", "#77AFD4", "#7692D9", "#5BB0B5", "#10847A", "#C7D6FF", "#A6DDE0", "#24AB9F", "#47337D", "#24334F", "#A9EBE5", "#907FBA", "#4A5E81", "#58A158", "#2B688F", "#ABBEE0", "#A7DBA7", "#5B95BA", "#5171C0", "#2F8E94", "#BCE0F7", "#B1C6FA", "#7EC8CC", "#109488", "#332069", "#E1F4F5", "#63DBD0", "#5A478F", "#3C4A63", "#58A158", "#D5CFE3", "#849BC4", "#87C987", "#407BA0", "#5171C0"];

/**
 * Make a simple stacked bar char
 *
 * @class StackedRowHomebrew
 * @extends {React.Component}
 */

var StackedRowHomebrew = function (_React$Component) {
    _inherits(StackedRowHomebrew, _React$Component);

    function StackedRowHomebrew() {
        _classCallCheck(this, StackedRowHomebrew);

        var _this = _possibleConstructorReturn(this, (StackedRowHomebrew.__proto__ || Object.getPrototypeOf(StackedRowHomebrew)).call(this));

        _this.handleClick = function (dict) {
            return function (event) {
                // https://medium.freecodecamp.org/reactjs-pass-parameters-to-event-handlers-ca1f5c422b9
                _this.setState({
                    hoverText: dict.value,
                    hoverTextCount: dict.count,
                    index: dict.index
                });
            };
        };

        _this.handleArrowClick = function (direction) {
            return function (event) {
                var index = _this.state.index;

                var dict = _this.extractPropsData(_this.props.data);
                var length = Object.keys(dict).length;

                if (direction === PREVIOUS_ITEM_CLICK) {
                    if (index === 0) {
                        // wrap around
                        index = length - 1;
                    } else {
                        index -= 1;
                    }
                } else {
                    if (index === length - 1) {
                        index = 0;
                    } else {
                        index += 1;
                    }
                }
                dict = dict[index];
                _this.setState({
                    hoverText: dict.value,
                    hoverTextCount: dict.count,
                    index: index
                });
            };
        };

        _this.resize = function () {
            _this.forceUpdate();
        };

        _this.handleHover = _this.handleHover.bind(_this);
        _this.handleExit = _this.handleExit.bind(_this);
        _this.handleClick = _this.handleClick.bind(_this);
        _this.handleArrowClick = _this.handleArrowClick.bind(_this);
        // the text currently under the cursor
        _this.state = {
            hoverText: "",
            hoverTextCount: 0,
            selectedFacets: {},
            dimensions: { height: 1, width: 1 },
            index: -1,
            isBarChart: false
        };
        _this.resize = _this.resize.bind(_this);
        _this.extractPropsData = _this.extractPropsData.bind(_this);
        return _this;
    }

    /**
     * Updates the hover text and update the view
     *
     * @memberof StackedRowHomebrew
     */


    _createClass(StackedRowHomebrew, [{
        key: 'handleHover',
        value: function handleHover(event) {
            // add box shadow
            event.target.style.boxShadow = "25px 20px";
        }

        /**
         * Update the hover text and the view
         *
         * @param {*} event
         * @memberof StackedRowHomebrew
         */

    }, {
        key: 'handleExit',
        value: function handleExit(event) {
            // remove box shadow
            event.target.style.boxShadow = "";
        }

        /**
         * Handle column click event
         */

    }, {
        key: 'updateStateAndMakeQuery',


        /**
         * Update the state with selected facets and call props to update data
         *
         * @param {*} selectedFacets
         * @memberof Facets
         */
        value: function updateStateAndMakeQuery(selectedFacets) {
            this.setState({ selectedFacets: selectedFacets });
            // have to reformat the selected facets to format for the api call
            var selectedFacetsFormatted = Object.keys(selectedFacets).map(function (key) {
                return selectedFacets[key];
            });
            var queryRequest = this.props.getLastQueryRequest();
            queryRequest.query.selectedFacets = selectedFacetsFormatted;
            this.props.executeQueryRequest(queryRequest);
        }

        // Handle user cycling through slices of the bar chart


        // handle resizing of browser to make graphic responsive

    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            window.addEventListener('resize', this.resize);
            window.myRef = this.myRef;
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            window.removeEventListener('resize', this.resize);
        }

        /**
         * Display view
         */

    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            // while data hasn't queued up display loading
            if (this.props.data.length === 0) {
                return React.createElement(
                    'div',
                    { className: 'container' },
                    'loading'
                );
            }

            var data = this.props.data;


            var x_data = this.extractPropsData(data);
            var total = 0;

            var width = this.state.dimensions.width;
            // sum up the counts of data

            for (var key in x_data) {
                if (x_data.hasOwnProperty(key)) {
                    total += x_data[key].count;
                }
            }
            return React.createElement(
                'div',
                { className: 'container SRC-margin-bottom-50px' },
                React.createElement(
                    'div',
                    { className: 'row' },
                    React.createElement(
                        'span',
                        null,
                        React.createElement(
                            'strong',
                            null,
                            ' ',
                            total,
                            ' '
                        ),
                        ' files shown by ',
                        this.props.alias
                    ),
                    React.createElement(
                        'button',
                        {
                            className: 'btn btn-default btn-sm SRC-floatRight',
                            onClick: this.handleArrowClick(NEXT_CLICK) },
                        React.createElement(FontAwesomeIcon, { icon: 'angle-right' })
                    ),
                    React.createElement(
                        'button',
                        {
                            className: 'btn btn-default btn-sm SRC-floatRight',
                            onClick: this.handleArrowClick(PREVIOUS_ITEM_CLICK) },
                        React.createElement(FontAwesomeIcon, { icon: 'angle-left' })
                    )
                ),
                React.createElement(
                    'div',
                    { className: 'row' },
                    React.createElement(
                        Measure,
                        {
                            bounds: true,
                            onResize: function onResize(contentRect) {
                                _this2.setState({ dimensions: contentRect.bounds });
                            }
                        },
                        function (_ref) {
                            var measureRef = _ref.measureRef;
                            return React.createElement(
                                'div',
                                { ref: measureRef },
                                x_data.map(function (obj, index) {

                                    var rectStyle = {
                                        fill: '' + colorsTissues[index]
                                    };

                                    var svgHeight = 50;
                                    // this doesn't work yet but is a better heuristic than above
                                    var svgWidth = obj.count / total * width;
                                    var isBarChart = _this2.state.isBarChart;


                                    if (isBarChart) {
                                        var _ref2 = [svgHeight, svgWidth];
                                        svgWidth = _ref2[0];
                                        svgHeight = _ref2[1];
                                    }

                                    return (
                                        // each svg represents one of the bars
                                        // will need to change this to be responsive
                                        React.createElement(
                                            'svg',
                                            { height: 65,
                                                width: svgWidth,
                                                key: uuidv4(),
                                                onClick: _this2.handleClick(Object.assign({}, obj, { index: index })) },
                                            React.createElement('rect', {
                                                onMouseEnter: _this2.handleHover,
                                                onMouseLeave: _this2.handleExit,
                                                height: svgHeight,
                                                width: svgWidth,
                                                className: 'SRC-chart-rect-style'
                                                // can't remove inline style due to dynamic fill
                                                , style: rectStyle }),
                                            React.createElement(
                                                'text',
                                                {
                                                    font: 'bold sans-serif',
                                                    fill: 'white',
                                                    x: svgWidth / 2,
                                                    y: svgHeight / 2 },
                                                index < 3 && obj.count
                                            ),
                                            _this2.state.index === index && React.createElement(
                                                'text',
                                                {
                                                    fill: 'black',
                                                    x: 0,
                                                    fontFamily: 'FontAwesome',
                                                    y: 60
                                                },
                                                '\u25BE'
                                            )
                                        )
                                    );
                                })
                            );
                        }
                    )
                ),
                React.createElement(
                    'div',
                    { className: 'row' },
                    this.state.hoverText && React.createElement(
                        'p',
                        { className: 'SRC-noMargin' },
                        ' ',
                        React.createElement(
                            'strong',
                            null,
                            ' ',
                            this.props.alias,
                            ': ',
                            this.state.hoverText,
                            ' '
                        ),
                        ' '
                    ),
                    this.state.hoverText && React.createElement(
                        'p',
                        { className: 'SRC-noMargin' },
                        ' ',
                        React.createElement(
                            'i',
                            null,
                            ' ',
                            this.state.hoverTextCount,
                            ' files '
                        ),
                        ' '
                    )
                )
            );
        }
    }, {
        key: 'extractPropsData',
        value: function extractPropsData(data) {
            var x_data = [];
            data.facets.forEach(function (item) {
                if (item.facetType === "enumeration") {
                    item.facetValues.forEach(function (facetValue) {
                        if (item.columnName === "parentId") {
                            x_data.push(Object.assign({ columnName: item.columnName }, facetValue));
                        }
                    });
                }
            });
            // sort the data so that the largest bars are at the front
            x_data.sort(function (a, b) {
                return b.count - a.count;
            });
            return x_data;
        }
    }]);

    return StackedRowHomebrew;
}(React.Component);

export default StackedRowHomebrew;