var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React from 'react';
import PropTypes from 'prop-types';
var cloneDeep = require("lodash.clonedeep");
var uuidv4 = require("uuid/v4");
var SELECT_ALL = "select all";
var DESELECT_ALL = "deselect all";

/**
 * Checkbox group represents one column's set of checkbox filters
 *
 * @class CheckboxGroup
 * @extends {React.Component}
 */

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
                var uniqueId = element.columnName + " " + facetValue.value + " " + facetValue.count;
                // caution when using uuId's to not cause extra re-renders from this always changing
                var uuId = uuidv4();
                children.push(React.createElement(
                    'span',
                    { style: { padding: "2px", borderStyle: "solid", borderWidth: "1px", margin: "2px" }, key: uniqueId },
                    React.createElement('input', { defaultChecked: facetValue.isSelected, onClick: _this2.props.clickHandler({ selectedFacets: selectedFacets, value: facetValue.value, columnName: element.columnName }), id: uuId, type: 'checkbox' }),
                    React.createElement(
                        'label',
                        { htmlFor: uuId },
                        ' ',
                        React.createElement(
                            'strong',
                            null,
                            ' ',
                            facetValue.value,
                            ' '
                        ),
                        '  ',
                        facetValue.count
                    )
                ));
            });
            var name = React.createElement(
                'strong',
                null,
                ' Filter by ',
                this.props.alias,
                ' type '
            );
            return React.createElement(
                'div',
                null,
                React.createElement(
                    'p',
                    null,
                    ' ',
                    name,
                    ' '
                ),
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
                // https://medium.freecodecamp.org/reactjs-pass-parameters-to-event-handlers-ca1f5c422b9

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

                var boxCount = _this3.state.boxCount;

                // grab the facet values assoicated for this column

                var specificFacet = selectedFacets[dict.columnName];
                // if its not selected then we add as having been chosen, otherwise we 
                // have to delete it
                if (specificFacet.facetValues.indexOf(dict.value) === -1) {
                    specificFacet.facetValues.push(dict.value);
                    boxCount++;
                } else {
                    // remove value
                    specificFacet.facetValues.splice(specificFacet.facetValues.indexOf(dict.value), 1);
                    boxCount--;
                }

                _this3.setState({
                    boxCount: boxCount
                });

                _this3.updateStateAndMakeQuery(selectedFacets);
            };
        };

        _this3.updateSelection = function (selectionGroup) {
            return function (event) {
                event.preventDefault();
                var selectedFacets = _this3.recordSelections(selectionGroup);
                _this3.updateStateAndMakeQuery(selectedFacets);
            };
        };

        _this3.recordSelections = _this3.recordSelections.bind(_this3);
        _this3.handleClick = _this3.handleClick.bind(_this3);
        // we store the selected facets by column name for ease of use,
        // this has to be later converted when making the api call
        _this3.state = {
            selectedFacets: {},
            boxCount: 0
        };
        _this3.updateStateAndMakeQuery = _this3.updateStateAndMakeQuery.bind(_this3);
        _this3.updateSelection = _this3.updateSelection.bind(_this3);
        return _this3;
    }

    /**
     * Record's selection choice
     *
     * @param {*} options either SELECT_ALL or DESELECT_ALL, specifies if either of those options
     * were selected
     * @returns
     * @memberof Facets
     */


    _createClass(Facets, [{
        key: 'recordSelections',
        value: function recordSelections(options) {
            // this code must change-- currently isn't being updated correctly
            var facets = {};
            this.props.data.facets.forEach(function (element) {
                if (element.facetType === "enumeration") {
                    var selection = [];
                    element.facetValues.forEach(function (facetValue) {
                        if ((facetValue.isSelected || options === SELECT_ALL) && options !== DESELECT_ALL) {
                            selection.push(facetValue.value);
                        }
                    });
                    if (selection.length > 0) {
                        facets[element.columnName] = {
                            columnName: element.columnName,
                            facetValues: selection,
                            concreteType: "org.sagebionetworks.repo.model.table.FacetColumnValuesRequest"
                        };
                    }
                }
            });
            return facets;
        }

        /**
         * Display the view of the facets
         *
         * @returns
         * @memberof Facets
         */

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
            // read in the most up to date data
            var selectedFacets = this.recordSelections();
            // display the data -- currently we only support enumerations
            this.props.data.facets.forEach(function (element) {
                if (element.facetType === "enumeration") {
                    var group = React.createElement(CheckboxGroup, { alias: _this4.props.alias, key: element.columnName, selectedFacets: selectedFacets, element: element, clickHandler: _this4.handleClick });
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

        /**
         * Handle checkbox click event
         */


        /**
         * Handle select all or deselect all event, selection group specifies which
         * option was chosen
         *
         * @memberof Facets
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
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                { className: 'container syn-lightbackground syn-border-spacing ' },
                React.createElement(
                    'div',
                    { className: 'col-xs' },
                    React.createElement(
                        'form',
                        null,
                        React.createElement(
                            'div',
                            { className: 'form-group' },
                            this.showFacetFilter()
                        ),
                        React.createElement(
                            'div',
                            { className: 'form-group' },
                            React.createElement(
                                'p',
                                null,
                                React.createElement(
                                    'strong',
                                    null,
                                    ' ',
                                    this.state.boxCount,
                                    ' ',
                                    this.props.alias,
                                    's selected  '
                                ),
                                React.createElement(
                                    'a',
                                    { href: "", onClick: this.updateSelection(SELECT_ALL) },
                                    '   ',
                                    React.createElement(
                                        'u',
                                        null,
                                        '  Select All '
                                    ),
                                    ' '
                                ),
                                '|',
                                React.createElement(
                                    'a',
                                    { href: "", onClick: this.updateSelection(DESELECT_ALL) },
                                    ' ',
                                    React.createElement(
                                        'u',
                                        null,
                                        '  Unselect All '
                                    ),
                                    ' '
                                )
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