function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import React from 'react';
var uuidv4 = require("uuid/v4");

var CardFooter = function CardFooter(_ref) {
    var rows = _ref.rows,
        rest = _objectWithoutProperties(_ref, ["rows"]);

    if (!rows) {
        return React.createElement("div", null);
    }
    return React.createElement(
        "div",
        { className: "row SRC-grayBackground" },
        React.createElement("div", { className: "col-xs-2" }),
        React.createElement(
            "div",
            { className: "table-responsive col-xs-10" },
            React.createElement(
                "table",
                { className: "table table-condensed" },
                React.createElement(
                    "tbody",
                    { className: "SRC-borderTopNone" },
                    rows.map(function (row) {
                        return React.createElement(
                            "tr",
                            { key: uuidv4() },
                            row.map(function (value) {
                                return React.createElement(
                                    "td",
                                    { key: uuidv4() },
                                    value
                                );
                            })
                        );
                    })
                )
            )
        )
    );
};

export default CardFooter;