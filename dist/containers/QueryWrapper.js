var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React from 'react';
import * as SynapseClient from 'lib/utils/SynapseClient';
var cloneDeep = require('lodash.clonedeep');
var INIT_REQUEST = "init request";

/**
 * Class wraps around any Synapse views that are dependent on a query bundle
 * Those classes then take in as props:
 * 
 *          data: This is the data of the current query bundle
 *          getLastQueryRequest: When the child needs to make a query selection
 *                               this is called so that it can then modify that query
 *                               with its own.
 *          executeQueryRequest: Once the step from above is completed the child calls 
 *                               this to make the query request.
 * 
 * @export
 * @class QueryWrapper
 * @extends {React.Component}
 */

var QueryWrapper = function (_React$Component) {
    _inherits(QueryWrapper, _React$Component);

    function QueryWrapper() {
        _classCallCheck(this, QueryWrapper);

        var _this = _possibleConstructorReturn(this, (QueryWrapper.__proto__ || Object.getPrototypeOf(QueryWrapper)).call(this));

        _this.state = {
            data: []
        };
        _this.getLastQueryRequest = _this.getLastQueryRequest.bind(_this);
        _this.executeQueryRequest = _this.executeQueryRequest.bind(_this);
        return _this;
    }

    /**
     * Compute default query request
     *
     * @memberof QueryWrapper
     */


    _createClass(QueryWrapper, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.executeQueryRequest(INIT_REQUEST);
        }

        /**
         * Pass down a deep clone (so no side affects on the child's part) of the 
         * last query request made
         *
         * @returns
         * @memberof QueryWrapper
         */

    }, {
        key: 'getLastQueryRequest',
        value: function getLastQueryRequest() {
            return cloneDeep(this.state.lastQueryRequest);
        }

        /**
         * Exectue the given query
         *
         * @param {*} queryRequest Query request as specified by https://docs.synapse.org/rest/org/sagebionetworks/repo/model/table/Query.html
         * @memberof QueryWrapper
         */

    }, {
        key: 'executeQueryRequest',
        value: function executeQueryRequest(queryRequest) {
            var _this2 = this;

            var request = null;

            if (queryRequest === INIT_REQUEST) {
                request = this.props.initQueryRequest;
            } else {
                request = queryRequest;
            }

            SynapseClient.getQueryTableResults(request, this.props.token).then(function (data) {
                // line below is for when testing doesn't mock
                // the entire object
                var filteredData = data.facets && data.facets.filter(function (value) {
                    return value.columnName === _this2.props.filter;
                });
                data.facets = filteredData;
                _this2.setState({
                    data: data,
                    lastQueryRequest: cloneDeep(request)
                });
            }).catch(function (err) {
                console.log('Failed to get data ', err);
            });
        }

        /**
         * Render the children without any formatting
         */

    }, {
        key: 'render',
        value: function render() {
            var _this3 = this;

            return React.createElement(
                'div',
                null,
                React.Children.map(this.props.children, function (child) {
                    return React.cloneElement(child, { filter: _this3.props.filter, alias: _this3.props.alias, executeQueryRequest: _this3.executeQueryRequest, getLastQueryRequest: _this3.getLastQueryRequest, data: _this3.state.data });
                })
            );
        }
    }]);

    return QueryWrapper;
}(React.Component);

export default QueryWrapper;