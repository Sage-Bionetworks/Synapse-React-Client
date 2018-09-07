import _regeneratorRuntime from 'babel-runtime/regenerator';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React from 'react';
import * as SynapseClient from 'lib/utils/SynapseClient';
import PropTypes from 'prop-types';
var uuidv4 = require('uuid/v4');
var cloneDeep = require('lodash.clonedeep');

var Facets = function (_React$Component) {
    _inherits(Facets, _React$Component);

    function Facets() {
        _classCallCheck(this, Facets);

        var _this = _possibleConstructorReturn(this, (Facets.__proto__ || Object.getPrototypeOf(Facets)).call(this));

        _this.handleClick = function (dict) {
            return function (event) {
                var selectedFacets = cloneDeep(_this.state.selectedFacets); // deep copy

                // if there is no entry for this column name into the selection of facets
                if (!selectedFacets.hasOwnProperty(dict.name)) {
                    var newEntry = {
                        name: dict.name,
                        facetValues: new Set()
                    };
                    selectedFacets[dict.name] = newEntry;
                }

                // grab the facet values assoicated for this column
                var specificFacet = selectedFacets[dict.name];
                // if its not selected then we add as having been chosen, otherwise we 
                // have to delete it
                if (!dict.isSelected) {
                    specificFacet.facetValues.add(dict.value);
                } else {
                    specificFacet.facetValues.delete(dict.value);
                }

                selectedFacets[dict.name] = specificFacet;
                _this.setState({
                    selectedFacets: selectedFacets
                });
            };
        };

        _this.makeBundleQueryRequest = _this.makeBundleQueryRequest.bind(_this);
        _this.handleClick = _this.handleClick.bind(_this);
        _this.state = {
            selectedFacets: {},
            isLoaded: false
        };
        return _this;
    }

    _createClass(Facets, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.makeBundleQueryRequest();
        }
    }, {
        key: 'makeBundleQueryRequest',
        value: function () {
            var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee() {
                var _props, token, sql, queryRequest, data, selectedFacets;

                return _regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                _props = this.props, token = _props.token, sql = _props.sql;

                                // step 1: get init query with maxRowsPerPage calculated

                                queryRequest = {
                                    concreteType: "org.sagebionetworks.repo.model.table.FacetColumnValuesRequest",
                                    query: {
                                        isConsistent: true,
                                        offset: 0,
                                        sql: sql,
                                        limit: 1
                                    }
                                };
                                _context.next = 4;
                                return SynapseClient.getFullQueryTableResults(queryRequest, token, true);

                            case 4:
                                data = _context.sent;
                                selectedFacets = {};

                                data.facets.forEach(function (element) {
                                    if (element.facetType === "enumeration") {
                                        var selection = new Set();
                                        element.facetValues.forEach(function (facetValue) {
                                            if (facetValue.isSelected) {
                                                selection.add(facetValue.value);
                                            }
                                        });
                                        if (selection.length > 0) {
                                            selectedFacets[element.columnName] = {
                                                columnName: element.columnName,
                                                facetValues: selection,
                                                concreteType: "org.sagebionetworks.repo.model.table.QueryBundleRequest"
                                            };
                                        }
                                    }
                                });
                                this.setState({
                                    isLoaded: true,
                                    data: data,
                                    selectedFacets: selectedFacets
                                });

                            case 8:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function makeBundleQueryRequest() {
                return _ref.apply(this, arguments);
            }

            return makeBundleQueryRequest;
        }()
    }, {
        key: 'showFacetFilter',
        value: function showFacetFilter() {
            var _this2 = this;

            // iterate through the loaded data and write out the appropriate checkboxes,
            // filling in the state of the checkboxes according to the current selection
            if (this.state && this.state.isLoaded) {
                var structuredRender = [];
                this.state.data.facets.forEach(function (element) {
                    if (element.facetType === "enumeration") {
                        var children = [];
                        element.facetValues.forEach(function (facetValue) {
                            var key = uuidv4();
                            var checked = false;
                            var chosen = _this2.state.selectedFacets[element.columnName];
                            if (chosen && chosen.facetValues.has(facetValue.value)) {
                                checked = true;
                            }
                            children.push(React.createElement(
                                'div',
                                { key: key },
                                React.createElement('input', { checked: checked, onChange: _this2.handleClick({ name: element.columnName, value: facetValue.value, isSelected: checked }), id: key, type: 'checkbox' }),
                                React.createElement(
                                    'label',
                                    { htmlFor: key },
                                    facetValue.value + (' (' + facetValue.count + ')')
                                )
                            ));
                        });
                        var name = React.createElement(
                            'strong',
                            null,
                            ' ',
                            element.columnName,
                            ' '
                        );
                        var formatted = React.createElement(
                            'div',
                            { key: uuidv4() },
                            name,
                            children.map(function (child) {
                                return child;
                            })
                        );
                        structuredRender.push(formatted);
                    }
                });
                return React.createElement(
                    'div',
                    null,
                    structuredRender.map(function (element) {
                        return element;
                    })
                );
            }
        }

        // https://medium.freecodecamp.org/reactjs-pass-parameters-to-event-handlers-ca1f5c422b9

    }, {
        key: 'render',
        value: function render() {
            var _this3 = this;

            return React.createElement(
                'div',
                { className: 'container' },
                React.createElement(
                    'div',
                    { className: 'row' },
                    React.createElement(
                        'div',
                        { className: 'col-xs-6' },
                        React.createElement(
                            'form',
                            null,
                            React.createElement(
                                'div',
                                { className: 'form-group' },
                                this.showFacetFilter()
                            )
                        )
                    ),
                    React.createElement(
                        'div',
                        { className: 'col-xs-6' },
                        this.state.selectedFacets && Object.keys(this.state.selectedFacets).map(function (key) {
                            var string = Array.from(_this3.state.selectedFacets[key].facetValues).join(", ");
                            return React.createElement(
                                'p',
                                { key: uuidv4() },
                                ' ',
                                key,
                                ' : ',
                                string,
                                ' '
                            );
                        })
                    )
                )
            );
        }
    }]);

    return Facets;
}(React.Component);

export default Facets;


Facets.propTypes = {
    makeQueryRequest: PropTypes.bool
};

Facets.defaultProps = {
    makeQueryRequest: true
};