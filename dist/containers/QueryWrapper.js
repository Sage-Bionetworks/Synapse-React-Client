var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React from 'react';
import * as SynapseClient from 'lib/utils/SynapseClient';
import * as SynapseConstants from 'lib/utils/SynapseConstants';

var cloneDeep = require('lodash.clonedeep');
var INIT_REQUEST = "init request";

// takes in a token and SQL string and initQueryRequest

var QueryWrapper = function (_React$Component) {
    _inherits(QueryWrapper, _React$Component);

    function QueryWrapper() {
        _classCallCheck(this, QueryWrapper);

        var _this = _possibleConstructorReturn(this, (QueryWrapper.__proto__ || Object.getPrototypeOf(QueryWrapper)).call(this));

        _this.state = {
            data: [],
            lastColumnSelection: [],
            lastSortSelection: []
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
        value: function makeQueryRequest(queryRequest, initiator) {
            var _this2 = this;

            if (queryRequest === INIT_REQUEST) {
                SynapseClient.getQueryTableResults(this.props.initQueryRequest, this.props.token).then(function (data) {
                    _this2.setState({
                        data: data
                    });
                });
            } else {
                var lastColumnSelection = cloneDeep(this.state.lastColumnSelection);
                var lastSortSelection = cloneDeep(this.state.lastSortSelection);

                if (initiator === "TABLE") {
                    lastSortSelection = queryRequest.query.sort;
                    queryRequest.query.selectedFacets = lastColumnSelection;
                } else if (initiator === "FACETS") {
                    lastColumnSelection = queryRequest.query.selectedFacets;
                    queryRequest.query.sort = lastSortSelection;
                }

                queryRequest.concreteType = "org.sagebionetworks.repo.model.table.QueryBundleRequest";
                queryRequest.partMask = SynapseConstants.BUNDLE_MASK_QUERY_COLUMN_MODELS | SynapseConstants.BUNDLE_MASK_QUERY_FACETS | SynapseConstants.BUNDLE_MASK_QUERY_RESULTS;

                SynapseClient.getQueryTableResults(queryRequest, this.props.token).then(function (data) {
                    _this2.setState({
                        data: data,
                        lastColumnSelection: lastColumnSelection,
                        lastSortSelection: lastSortSelection
                    });
                });
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var _this3 = this;

            return React.createElement(
                'div',
                null,
                React.Children.map(this.props.children, function (child) {
                    return React.cloneElement(child, { showBy: "Disease", updateQueryRequest: _this3.makeQueryRequest, data: _this3.state.data, sql: _this3.props.sql
                    });
                })
            );
        }
    }]);

    return QueryWrapper;
}(React.Component);

export default QueryWrapper;