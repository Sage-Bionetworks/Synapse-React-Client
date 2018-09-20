var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React from 'react';
var cloneDeep = require("lodash.clonedeep");
// Hold constants for next and previous button actions
var NEXT = "NEXT";
var PREVIOUS = "PREVIOUS";

var SynapseTable = function (_React$Component) {
    _inherits(SynapseTable, _React$Component);

    function SynapseTable() {
        _classCallCheck(this, SynapseTable);

        var _this = _possibleConstructorReturn(this, (SynapseTable.__proto__ || Object.getPrototypeOf(SynapseTable)).call(this));

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

        _this.handleColumnClick = function (name) {
            return function (event) {
                var element = null;
                // weird onclick behavior that sometimes hits
                // the <i> tag
                if (event.target.tagName === "A") {
                    element = event.target.children[0];
                } else if (event.target.tagName === "I") {
                    element = event.target;
                }
                // check what the state of the current column name is
                var containsDown = element.className.indexOf("down") !== -1;
                var containsUp = element.className.indexOf("up") !== -1;
                var direction = "ASC";
                // if its unitialized
                if (!containsUp && !containsDown) {
                    element.className += " fa-sort-up";
                }
                // if it's down then its DESC and needs to be replaced with up
                if (containsDown) {
                    element.className = element.className.replace(" fa-sort-down", " fa-sort-up");
                }
                // if it's up then its ASC and needs to be replaced with down
                if (containsUp) {
                    element.className = element.className.replace(" fa-sort-up", " fa-sort-down");
                    direction = "DESC";
                }
                // get currently sorted items and remove/insert this selection
                var sortSelection = cloneDeep(_this.state.sortSelection);
                if (sortSelection.length !== 0) {
                    // find if the current selection exists already and remove it
                    var index = sortSelection.findIndex(function (el) {
                        return el.column === name;
                    });
                    if (index !== -1) {
                        sortSelection.splice(index, 1);
                    }
                }

                sortSelection.unshift({
                    column: name,
                    direction: direction
                });

                var queryRequest = _this.props.getLastQueryRequest();
                queryRequest.query.sort = sortSelection;
                _this.props.executeQueryRequest(queryRequest);
                _this.setState({
                    sortSelection: sortSelection
                });
            };
        };

        _this.handleColumnClick = _this.handleColumnClick.bind(_this);
        _this.handlePaginationClick = _this.handlePaginationClick.bind(_this);
        // store the offset and sorted selection that is currently held
        _this.state = {
            sortSelection: [],
            offset: 0
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
        key: "render",


        /**
         * Display the view
         */
        value: function render() {
            var _this2 = this;

            if (this.props.data.length === 0) {
                return React.createElement(
                    "div",
                    { className: "container" },
                    " loading table "
                );
            }

            // unpack all the data
            var data = this.props.data;
            var columnModels = data.columnModels;
            var queryResult = data.queryResult;
            var queryResults = queryResult.queryResults;
            var rows = queryResults.rows;

            // grab the row data and format it 
            // e.g. <tr> <td> some value </td> </tr>

            var rowsFormatted = [];
            rows.forEach(function (expRow, i) {
                var rowFormatted = React.createElement(
                    "tr",
                    { key: "(" + expRow.rowId + ")" },
                    expRow.values.map(function (value, j) {
                        return React.createElement(
                            "td",
                            { key: "(" + i + "," + j + ")" },
                            React.createElement(
                                "p",
                                null,
                                " ",
                                value,
                                " "
                            )
                        );
                    })
                );
                rowsFormatted.push(rowFormatted);
            });

            // handle displaying the previous button -- if offset is zero then it
            // shouldn't be displayed
            var pastZero = this.props.getLastQueryRequest().query.offset > 0;

            return React.createElement(
                "div",
                { className: "container" },
                React.createElement(
                    "table",
                    { className: "table table-striped table-condensed" },
                    React.createElement(
                        "thead",
                        null,
                        React.createElement(
                            "tr",
                            null,
                            React.createElement("th", null),
                            columnModels.map(function (column) {
                                return React.createElement(
                                    "th",
                                    { key: column.name },
                                    React.createElement(
                                        "a",
                                        { onClick: _this2.handleColumnClick(column.name), className: "padding-left-2 padding-right-2" },
                                        " ",
                                        column.name,
                                        React.createElement("i", { className: "fa" })
                                    )
                                );
                            })
                        )
                    ),
                    React.createElement(
                        "tbody",
                        null,
                        rowsFormatted.map(function (rowFormatted) {
                            return rowFormatted;
                        })
                    )
                ),
                pastZero && React.createElement(
                    "button",
                    { onClick: this.handlePaginationClick(PREVIOUS), className: "btn btn-default", style: { borderRadius: "8px", color: "#1e7098", background: "white" }, type: "button" },
                    "Previous"
                ),
                React.createElement(
                    "button",
                    { onClick: this.handlePaginationClick(NEXT), className: "btn btn-default", style: { borderRadius: "8px", color: "#1e7098", background: "white" }, type: "button" },
                    "Next"
                )
            );
        }
    }]);

    return SynapseTable;
}(React.Component);

export default SynapseTable;