import React from 'react';

var SummaryHeader = function SummaryHeader(_ref) {
    var name = _ref.name,
        title = _ref.title,
        link = _ref.link;

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
                    { className: "SRC-magentaText", href: "" },
                    title
                )
            )
        )
    );
};
export default SummaryHeader;