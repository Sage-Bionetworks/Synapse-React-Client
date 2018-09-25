var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons';
import { faSort } from '@fortawesome/free-solid-svg-icons';
import { faSortUp } from '@fortawesome/free-solid-svg-icons';
import { faSortDown } from '@fortawesome/free-solid-svg-icons';

// Add all icons to the library so you can use it in your page
library.add(faEllipsisV);
library.add(faSort);
library.add(faSortUp);
library.add(faSortDown);

var cloneDeep = require("lodash.clonedeep");
// Hold constants for next and previous button actions
var NEXT = "NEXT";
var PREVIOUS = "PREVIOUS";
var ICON_STATE = ["sort", "sort-up", "sort-down"];
var SORT_STATE = ["", "ASC", "DESC"];

var SynapseTable = function (_React$Component) {
    _inherits(SynapseTable, _React$Component);

    function SynapseTable(props) {
        _classCallCheck(this, SynapseTable);

        var _this = _possibleConstructorReturn(this, (SynapseTable.__proto__ || Object.getPrototypeOf(SynapseTable)).call(this, props));

        _this.handlePaginationClick = function (eventType) {
            return function (event) {
                var queryRequest = _this.props.getLastQueryRequest();
                var currentOffset = queryRequest.query.offset;
                // if its a "previous" click subtract from the offset
                // otherwise its next and we paginate forward
                if (eventType === PREVIOUS) {
                    currentOffset -= 25;
                }
                if (eventType === NEXT) {
                    currentOffset += 25;
                }
                queryRequest.query.offset = currentOffset;
                _this.props.executeQueryRequest(queryRequest);
            };
        };

        _this.handleColumnClick = function (dict) {
            return function (event) {
                var columnIconState = cloneDeep(_this.state.columnIconState);
                if (columnIconState.length === 0) {
                    columnIconState = Array(_this.getLengthOfPropsData()).fill(0);
                }
                // get currently sorted items and remove/insert this selection
                var sortSelection = cloneDeep(_this.state.sortSelection);
                var index = _this.findSelectionIndex(sortSelection, dict.name);

                if (index !== -1) {
                    sortSelection.splice(index, 1);
                }

                columnIconState[dict.index] = (columnIconState[dict.index] + 1) % ICON_STATE.length;

                if (columnIconState[dict.index] > 0) {
                    sortSelection.unshift({
                        column: dict.name,
                        direction: SORT_STATE[columnIconState[dict.index]]
                    });
                }

                var queryRequest = _this.props.getLastQueryRequest();
                queryRequest.query.sort = sortSelection;
                _this.props.executeQueryRequest(queryRequest);
                _this.setState({
                    sortSelection: sortSelection,
                    columnIconState: columnIconState
                });
            };
        };

        _this.toggleColumnSelection = function (index) {
            return function (event) {
                event.preventDefault();
                // lazily update the component with this information
                // this only runs once
                var isColumnSelected = void 0;
                if (_this.state.isColumnSelected.length === 0) {
                    // unpack all the data
                    var lengthOfPropsData = _this.getLengthOfPropsData();
                    var defaultSelection = void 0;
                    // fill defaultVisibleCount with true and the rest as false
                    if (_this.props.defaultVisibleCount === 0) {
                        // if set to zero then its all true
                        defaultSelection = Array(lengthOfPropsData).fill(true);
                    } else {
                        var _defaultSelection;

                        defaultSelection = Array(_this.props.defaultVisibleCount).fill(true);
                        (_defaultSelection = defaultSelection).push.apply(_defaultSelection, _toConsumableArray(Array(lengthOfPropsData - _this.props.defaultVisibleCount).fill(false)));
                    }
                    isColumnSelected = defaultSelection;
                } else {
                    isColumnSelected = cloneDeep(_this.state.isColumnSelected);
                }
                isColumnSelected[index] = !isColumnSelected[index];
                _this.setState({ isColumnSelected: isColumnSelected });
            };
        };

        _this.handleColumnClick = _this.handleColumnClick.bind(_this);
        _this.handlePaginationClick = _this.handlePaginationClick.bind(_this);
        _this.findSelectionIndex = _this.findSelectionIndex.bind(_this);
        _this.toggleColumnSelection = _this.toggleColumnSelection.bind(_this);
        _this.toggleDropdown = _this.toggleDropdown.bind(_this);
        _this.advancedSearch = _this.advancedSearch.bind(_this);
        _this.download = _this.download.bind(_this);
        _this.getLengthOfPropsData = _this.getLengthOfPropsData.bind(_this);
        // store the offset and sorted selection that is currently held
        _this.state = {
            sortSelection: [],
            offset: 0,
            isOpen: false,
            isColumnSelected: [],
            columnIconState: []
        };
        return _this;
    }

    /**
     * Handle a click on next or previous
     *
     * @memberof SynapseTable
     */


    /**
     * Handle a column having been selected
     *
     * @memberof SynapseTable
     */


    _createClass(SynapseTable, [{
        key: 'findSelectionIndex',


        /**
         * Utility to search through array of objects and find object with key "column"
         * equal to input parameter "name"
         *
         * @param {*} sortSelection
         * @param {*} name
         * @returns -1 if not present, otherwise the index of the object
         * @memberof SynapseTable
         */
        value: function findSelectionIndex(sortSelection, name) {
            if (sortSelection.length !== 0) {
                // find if the current selection exists already and remove it
                return sortSelection.findIndex(function (el) {
                    return el.column === name;
                });
            }
            return -1;
        }

        // TODO: implement this method

    }, {
        key: 'download',
        value: function download(event) {
            event.preventDefault();
        }

        // Direct user to synapse corresponding synapse table

    }, {
        key: 'advancedSearch',
        value: function advancedSearch(event) {
            event.preventDefault();
            var lastQueryRequest = this.props.getLastQueryRequest();
            var query = lastQueryRequest.query;
            // base 64 encode the json of the query and go to url with the encoded object

            var encodedQuery = btoa(JSON.stringify(query));
            var synTable = this.props.synapseId;
            window.location = 'https://www.synapse.org/#!Synapse:' + synTable + '/tables/query/' + encodedQuery;
        }

        /**
         * Handles the opening and closing of the column select menu, this method
         * is only necessary because react overrides the behavior that bootstrap
         * embeds in its menus
         *
         * @memberof SynapseTable
         */

    }, {
        key: 'toggleDropdown',
        value: function toggleDropdown() {
            var isOpen = this.state.isOpen;

            this.setState({ isOpen: !isOpen });
        }
    }, {
        key: 'getLengthOfPropsData',
        value: function getLengthOfPropsData() {
            var data = this.props.data;
            var queryResult = data.queryResult;
            var queryResults = queryResult.queryResults;
            var headers = queryResults.headers;

            return headers.length;
        }

        /**
         * Handles the toggle of a column select, this will cause the table to
         * either show the column or hide depending on the prior state of the column
         *
         * @memberof SynapseTable
         */

    }, {
        key: 'render',


        /**
         * Display the view
         */
        value: function render() {
            var _this2 = this;

            if (this.props.data.length === 0) {
                return React.createElement(
                    'div',
                    { className: 'container' },
                    ' loading table '
                );
            }

            // unpack all the data
            var data = this.props.data;
            var queryResult = data.queryResult;
            var queryResults = queryResult.queryResults;
            var rows = queryResults.rows;
            var headers = queryResults.headers;

            // Step 1: Format the column headers, we have to track a few variables --
            // whether the column should be shown by default or if the state now mandates it 
            // be shown

            var headersFormatted = headers.map(function (column, index) {
                // two cases when rendering the column headers on init load
                // of the page we have to show only this.props.defaultVisibleCount many
                // columns, afterwards we rely on the isColumnSelected to get choices
                var initRender = index < _this2.props.defaultVisibleCount && _this2.state.isColumnSelected.length === 0;
                initRender |= _this2.props.defaultVisibleCount === 0 && _this2.state.isColumnSelected.length === 0;
                var subsequentRender = _this2.state.isColumnSelected[index] && _this2.state.isColumnSelected.length !== 0;
                if (initRender || subsequentRender) {
                    var isSelected = _this2.findSelectionIndex(_this2.state.sortSelection, column.name) !== -1;
                    return React.createElement(
                        'th',
                        { onClick: _this2.handleColumnClick({ name: column.name, index: index }), key: column.name, className: isSelected ? "SRC-salmon-background" : "" },
                        React.createElement(
                            'a',
                            { className: 'padding-left-2 padding-right-2 ' + (isSelected ? "SRC-anchor-light" : "") },
                            column.name,
                            React.createElement(FontAwesomeIcon, { icon: ICON_STATE[_this2.state.columnIconState[index] | 0] })
                        )
                    );
                }
                // avoid eslint complaint below by returning undefined
                return undefined;
            });

            // Step 2: Format the row values, tracking the same information that the columns have to.
            // grab the row data and format it 
            // e.g. <tr> <td> some value </td> </tr>
            var rowsFormatted = [];
            rows.forEach(function (expRow, i) {
                var rowFormatted = React.createElement(
                    'tr',
                    { key: '(' + expRow.rowId + ')' },
                    expRow.values.map(function (value, j) {
                        var columnName = headers[j].name;
                        var index = _this2.findSelectionIndex(_this2.state.sortSelection, columnName);
                        var isRowActiveInit = j < _this2.props.defaultVisibleCount && _this2.state.isColumnSelected.length === 0;
                        isRowActiveInit |= _this2.props.defaultVisibleCount === 0 && _this2.state.isColumnSelected.length === 0;
                        var isRowActiveSubsequent = _this2.state.isColumnSelected[j] && _this2.state.isColumnSelected.length !== 0;
                        if (isRowActiveInit || isRowActiveSubsequent) {
                            return React.createElement(
                                'td',
                                { className: 'SRC_noBorderTop', key: '(' + i + ',' + j + ')' },
                                React.createElement(
                                    'p',
                                    { className: '' + (index === -1 ? "" : "SRC-boldText") },
                                    ' ',
                                    value,
                                    ' '
                                )
                            );
                        }
                        // avoid eslint complaint below by returning undefined
                        return undefined;
                    })
                );
                rowsFormatted.push(rowFormatted);
            });

            // handle displaying the previous button -- if offset is zero then it
            // shouldn't be displayed
            var pastZero = this.props.getLastQueryRequest().query.offset > 0;

            return React.createElement(
                React.Fragment,
                null,
                React.createElement(
                    'div',
                    { className: 'container' },
                    React.createElement(
                        'div',
                        { className: 'row' },
                        React.createElement(
                            'span',
                            null,
                            React.createElement(
                                'strong',
                                null,
                                ' Showing ',
                                this.props.data.queryResult.queryResults.rows.length,
                                ' Files '
                            )
                        ),
                        React.createElement(
                            'span',
                            { className: 'SRC-floatRight' },
                            React.createElement(
                                'span',
                                { className: ' dropdown ' + (this.state.isOpen ? "open" : "") },
                                React.createElement(
                                    'button',
                                    { className: 'btn SRC-marginRightSevenPx btn-default dropdown-toggle', onClick: this.toggleDropdown, type: 'button', id: 'dropdownMenu1', 'data-toggle': 'dropdown', 'aria-haspopup': 'true', 'aria-expanded': 'true' },
                                    React.createElement(FontAwesomeIcon, { icon: 'ellipsis-v' })
                                ),
                                React.createElement(
                                    'ul',
                                    { className: 'dropdown-menu', 'aria-labelledby': 'dropdownMenu1' },
                                    headers.map(function (header, index) {
                                        var isColumnSelected = _this2.state.isColumnSelected[index];
                                        if (isColumnSelected === undefined) {
                                            isColumnSelected = index < _this2.props.defaultVisibleCount | _this2.props.defaultVisibleCount === 0;
                                        }
                                        return React.createElement(
                                            'li',
                                            { className: '' + (isColumnSelected ? "SRC-table-anchor-chosen" : ""),
                                                key: header.name,
                                                onClick: _this2.toggleColumnSelection(index) },
                                            React.createElement(
                                                'a',
                                                { className: 'SRC-no-focus', href: '' },
                                                header.name
                                            )
                                        );
                                    })
                                )
                            ),
                            React.createElement(
                                'a',
                                { onClick: this.advancedSearch, href: '' },
                                React.createElement(
                                    'u',
                                    null,
                                    ' Advanced Search '
                                )
                            ),
                            React.createElement(
                                'span',
                                null,
                                '\xA0\xA0'
                            ),
                            React.createElement(
                                'a',
                                { onClick: this.download, href: '' },
                                React.createElement(
                                    'u',
                                    null,
                                    'Download'
                                )
                            )
                        )
                    )
                ),
                React.createElement(
                    'div',
                    { className: 'container SRC-overflowAuto' },
                    React.createElement(
                        'div',
                        { className: 'row' },
                        React.createElement(
                            'table',
                            { className: 'table table-striped table-condensed' },
                            React.createElement(
                                'thead',
                                { className: 'SRC_borderTop' },
                                React.createElement(
                                    'tr',
                                    null,
                                    headersFormatted.map(function (headerFormatted) {
                                        return headerFormatted;
                                    })
                                )
                            ),
                            React.createElement(
                                'tbody',
                                null,
                                rowsFormatted.map(function (rowFormatted) {
                                    return rowFormatted;
                                })
                            )
                        ),
                        pastZero && React.createElement(
                            'button',
                            { onClick: this.handlePaginationClick(PREVIOUS), className: 'btn btn-default SRC-table-button', type: 'button' },
                            'Previous'
                        ),
                        React.createElement(
                            'button',
                            { onClick: this.handlePaginationClick(NEXT), className: 'btn btn-default SRC-table-button', type: 'button' },
                            'Next'
                        )
                    )
                )
            );
        }
    }]);

    return SynapseTable;
}(React.Component);

export default SynapseTable;


SynapseTable.defaultProps = {
    defaultVisibleCount: 0
};