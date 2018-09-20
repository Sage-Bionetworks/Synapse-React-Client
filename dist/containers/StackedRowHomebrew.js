var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React from 'react';
var uuidv4 = require('uuid/v4');
var LEFT_CLICK = "left click";
var RIGHT_CLICK = "right click";

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

                if (direction === LEFT_CLICK) {
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
            width: 0,
            index: 0,
            colors: ["#222222", "#3c3c3c", "#595959", "#787878", "#989898", "#bbbbbb", "#dddddd"]
        };
        _this.chartRef = React.createRef();
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

            // sum up the counts of data
            for (var key in x_data) {
                if (x_data.hasOwnProperty(key)) {
                    total += x_data[key].count;
                }
            }
            var colors = this.state.colors;


            return React.createElement(
                'div',
                { style: { marginBottom: "50px" }, className: 'container' },
                React.createElement(
                    'div',
                    null,
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
                            className: 'btn btn-default',
                            type: 'button',
                            onClick: this.handleArrowClick(RIGHT_CLICK),
                            style: { float: "right" } },
                        React.createElement('i', { className: 'fas fa-angle-right' })
                    ),
                    React.createElement(
                        'button',
                        {
                            className: 'btn btn-default',
                            type: 'button',
                            onClick: this.handleArrowClick(LEFT_CLICK),
                            style: { float: "right" } },
                        React.createElement('i', { className: 'fas fa-angle-left' })
                    )
                ),
                React.createElement(
                    'div',
                    { className: 'container', ref: this.chartRef },
                    x_data.map(function (obj, index) {
                        var rectStyle = {
                            margin: '0px',
                            fill: '' + colors[index],
                            strokeWidth: '0px',
                            boxShadow: "20px 20px"
                        };
                        var height = 50;
                        var width = void 0;
                        if (_this2.state.width === 0) {
                            width = obj.count / total * (window.innerWidth / 2);
                        } else {
                            // this doesn't work yet but is a better heuristic than above
                            width = obj.count / total * (_this2.state.width / 1.5);
                        }
                        return (
                            // each svg represents one of the bars
                            // will need to change this to be responsive
                            React.createElement(
                                'svg',
                                { height: height, width: width, key: uuidv4(),
                                    onMouseEnter: _this2.handleHover,
                                    onClick: _this2.handleClick(Object.assign({}, obj, { index: index })),
                                    onMouseLeave: _this2.handleExit },
                                React.createElement('rect', {
                                    height: height,
                                    width: width,
                                    style: rectStyle }),
                                React.createElement(
                                    'text',
                                    {
                                        font: 'bold sans-serif',
                                        fill: 'white',
                                        x: width / 2,
                                        y: height / 2 },
                                    index < 3 && obj.count
                                )
                            )
                        );
                    })
                ),
                this.state.hoverText && React.createElement(
                    'div',
                    null,
                    ' ',
                    React.createElement('i', { className: 'fas fa-caret-down' }),
                    '  '
                ),
                this.state.hoverText && React.createElement(
                    'p',
                    null,
                    ' ',
                    this.props.alias,
                    ': ',
                    this.state.hoverText,
                    ' '
                ),
                this.state.hoverText && React.createElement(
                    'p',
                    null,
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