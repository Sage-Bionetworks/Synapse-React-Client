var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React from 'react';
var uuidv4 = require('uuid/v4');

var StackedRowHomebrew = function (_React$Component) {
    _inherits(StackedRowHomebrew, _React$Component);

    function StackedRowHomebrew() {
        _classCallCheck(this, StackedRowHomebrew);

        var _this = _possibleConstructorReturn(this, (StackedRowHomebrew.__proto__ || Object.getPrototypeOf(StackedRowHomebrew)).call(this));

        _this.handleHover = function (info) {
            return function (event) {
                event.target.style.boxShadow = "25px 20px";
            };
        };

        _this.handleExit = function (info) {
            return function (event) {
                event.target.style.boxShadow = "";
            };
        };

        _this.handleHover = _this.handleHover.bind(_this);
        _this.handleExit = _this.handleExit.bind(_this);
        return _this;
    }

    _createClass(StackedRowHomebrew, [{
        key: 'render',
        value: function render() {
            var _this2 = this;

            if (this.props.data.length === 0) {
                return React.createElement(
                    'div',
                    { className: 'container' },
                    'loading'
                );
            }

            var data = this.props.data;


            var x_data = [];
            data.facets.forEach(function (item) {
                if (item.facetType === "enumeration") {
                    item.facetValues.forEach(function (facetValue) {
                        if (item.columnName === "parentId") {
                            x_data.push(facetValue.count);
                        }
                    });
                }
            });
            x_data.sort(function (a, b) {
                return b - a;
            });
            var total = x_data.reduce(function (a, b) {
                return a + b;
            });
            var colors = ['#dddddd', '#bbbbbb', '#989898', '#787878', '#595959', '#3c3c3c', '#222222'].reverse();
            return React.createElement(
                'div',
                { style: { marginBottom: "50px" }, className: 'container' },
                React.createElement(
                    'p',
                    null,
                    ' ',
                    React.createElement(
                        'strong',
                        null,
                        ' ',
                        total,
                        ' '
                    ),
                    ' files shown by ',
                    this.props.showBy,
                    ' '
                ),
                x_data.map(function (count, index) {
                    var rectStyle = {
                        margin: '0px',
                        fill: '' + colors[index],
                        strokeWidth: '0px',
                        boxShadow: "20px 20px"
                    };
                    var height = 50;
                    var width = count / total * 800;

                    return React.createElement(
                        'svg',
                        { height: height, width: width, key: uuidv4(),
                            onMouseEnter: _this2.handleHover(count),
                            onMouseLeave: _this2.handleExit(count)
                        },
                        React.createElement('rect', {
                            height: height, width: width, style: rectStyle }),
                        React.createElement(
                            'text',
                            { font: 'bold sans-serif', fill: 'white', x: width / 2, y: height / 2 },
                            ' ',
                            count
                        )
                    );
                }),
                React.createElement(
                    'p',
                    null,
                    ' ',
                    this.props.showBy,
                    '  '
                )
            );
        }
    }]);

    return StackedRowHomebrew;
}(React.Component);

export default StackedRowHomebrew;