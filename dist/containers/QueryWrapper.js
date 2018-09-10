var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React from 'react';
import * as SynapseClient from 'lib/utils/SynapseClient';

var INIT_REQUEST = "init request";

// takes in a token and SQL string and initQueryRequest

var QueryWrapper = function (_React$Component) {
    _inherits(QueryWrapper, _React$Component);

    function QueryWrapper() {
        _classCallCheck(this, QueryWrapper);

        var _this = _possibleConstructorReturn(this, (QueryWrapper.__proto__ || Object.getPrototypeOf(QueryWrapper)).call(this));

        _this.state = {
            data: [],
            isLoading: true
        };
        _this.makeQueryRequest = _this.makeQueryRequest.bind(_this);
        return _this;
    }

    _createClass(QueryWrapper, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.makeQueryRequest(INIT_REQUEST);
        }
    }, {
        key: 'makeQueryRequest',
        value: function makeQueryRequest(queryRequest) {
            var _this2 = this;

            this.setState({ isLoading: true });
            if (queryRequest === INIT_REQUEST) {
                SynapseClient.getQueryTableResults(this.props.initQueryRequest, this.props.token).then(function (data) {
                    _this2.setState({
                        data: data,
                        isLoading: false
                    });
                });
            } else {
                SynapseClient.getQueryTableResults(queryRequest, this.props.token).then(function (data) {
                    _this2.setState({
                        data: data,
                        isLoading: false
                    });
                });
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var _this3 = this;

            if (this.state.isLoading) {
                return React.createElement(
                    'div',
                    null,
                    'loading....'
                );
            } else {
                return React.createElement(
                    'div',
                    null,
                    React.Children.map(this.props.children, function (child) {
                        return React.cloneElement(child, { updateQueryRequest: _this3.makeQueryRequest, data: _this3.state.data, sql: _this3.props.sql });
                    }),
                    ' '
                );
            }
        }
    }]);

    return QueryWrapper;
}(React.Component);

export default QueryWrapper;