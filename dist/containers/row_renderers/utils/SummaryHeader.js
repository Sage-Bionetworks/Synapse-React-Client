import React from 'react';

var SummaryHeader = function SummaryHeader(_ref) {
    var name = _ref.name,
        title = _ref.title;

    return React.createElement(
        "div",
        null,
        React.createElement(
            "p",
            null,
            name
        ),
        React.createElement(
            "div",
            null,
            React.createElement(
                "h5",
                null,
                React.createElement(
                    "a",
                    { className: "SRC-primary-text-color", href: "" },
                    title
                )
            )
        )
    );
};
export default SummaryHeader;