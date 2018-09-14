var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React from 'react';
import PropTypes from 'prop-types';
var cloneDeep = require("lodash.clonedeep");

var CheckboxGroup = function (_React$Component) {
    _inherits(CheckboxGroup, _React$Component);

    function CheckboxGroup() {
        _classCallCheck(this, CheckboxGroup);

        return _possibleConstructorReturn(this, (CheckboxGroup.__proto__ || Object.getPrototypeOf(CheckboxGroup)).apply(this, arguments));
    }

    _createClass(CheckboxGroup, [{
        key: 'render',
        value: function render() {
            var _this2 = this;

            var element = this.props.element;

            var children = [];
            var selectedFacets = this.props.selectedFacets;
            element.facetValues.forEach(function (facetValue) {
                children.push(React.createElement(
                    'div',
                    { key: facetValue.value + " " + facetValue.count },
                    React.createElement('input', { defaultChecked: facetValue.isSelected, onClick: _this2.props.clickHandler({ selectedFacets: selectedFacets, value: facetValue.value, columnName: element.columnName }), id: element.columnName + " " + facetValue.value + " " + facetValue.count, type: 'checkbox' }),
                    React.createElement(
                        'label',
                        { htmlFor: facetValue.value + " " + facetValue.count },
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
            return React.createElement(
                'div',
                null,
                name,
                children.map(function (child) {
                    return child;
                })
            );
        }
    }]);

    return CheckboxGroup;
}(React.Component);

var Facets = function (_React$Component2) {
    _inherits(Facets, _React$Component2);

    function Facets(props) {
        _classCallCheck(this, Facets);

        var _this3 = _possibleConstructorReturn(this, (Facets.__proto__ || Object.getPrototypeOf(Facets)).call(this, props));

        _this3.handleClick = function (dict) {
            return function (event) {
                var selectedFacets = cloneDeep(_this3.state.selectedFacets);
                // if there is no entry for this column name into the selection of facets
                if (!selectedFacets.hasOwnProperty(dict.columnName)) {
                    var newEntry = {
                        columnName: dict.columnName,
                        concreteType: "org.sagebionetworks.repo.model.table.FacetColumnValuesRequest",
                        facetValues: []
                    };
                    selectedFacets[dict.columnName] = newEntry;
                }

                // grab the facet values assoicated for this column
                var specificFacet = selectedFacets[dict.columnName];
                // if its not selected then we add as having been chosen, otherwise we 
                // have to delete it
                if (specificFacet.facetValues.indexOf(dict.value) === -1) {
                    specificFacet.facetValues.push(dict.value);
                } else {
                    // remove value
                    specificFacet.facetValues.splice(specificFacet.facetValues.indexOf(dict.value), 1);
                }

                var sql = _this3.props.sql;


                var selectedFacetsFormatted = Object.keys(selectedFacets).map(function (key) {
                    return selectedFacets[key];
                });

                var queryRequest = {
                    query: {
                        isConsistent: true,
                        sql: sql,
                        limit: 25,
                        selectedFacets: selectedFacetsFormatted
                    }
                };
                _this3.setState({ selectedFacets: selectedFacets });
                _this3.props.updateQueryRequest(queryRequest, "FACETS");
            };
        };

        _this3.recordSelections = _this3.recordSelections.bind(_this3);
        _this3.handleClick = _this3.handleClick.bind(_this3);
        _this3.state = {
            selectedFacets: {}
        };
        return _this3;
    }

    _createClass(Facets, [{
        key: 'recordSelections',
        value: function recordSelections() {
            var selectedFacets = {};
            this.props.data.facets.forEach(function (element) {
                if (element.facetType === "enumeration") {
                    var selection = [];
                    element.facetValues.forEach(function (facetValue) {
                        if (facetValue.isSelected) {
                            selection.push(facetValue.value);
                        }
                    });
                    if (selection.length > 0) {
                        selectedFacets[element.columnName] = {
                            columnName: element.columnName,
                            facetValues: selection,
                            concreteType: "org.sagebionetworks.repo.model.table.FacetColumnValuesRequest"
                        };
                    }
                }
            });
            return selectedFacets;
        }
    }, {
        key: 'showFacetFilter',
        value: function showFacetFilter() {
            var _this4 = this;

            // iterate through the loaded data and write out the appropriate checkboxes,
            // filling in the state of the checkboxes according to the current selection
            if (this.props.data.length === 0) {
                return;
            }
            var structuredRender = [];
            var selectedFacets = this.recordSelections(); // deep copy

            this.props.data.facets.forEach(function (element) {
                if (element.facetType === "enumeration") {
                    var group = React.createElement(CheckboxGroup, { key: element.columnName, selectedFacets: selectedFacets, element: element, clickHandler: _this4.handleClick });
                    structuredRender.push(group);
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

        // https://medium.freecodecamp.org/reactjs-pass-parameters-to-event-handlers-ca1f5c422b9

    }, {
        key: 'render',
        value: function render() {
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