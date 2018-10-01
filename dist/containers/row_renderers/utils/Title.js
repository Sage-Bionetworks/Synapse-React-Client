import React from 'react';

var Title = function Title(_ref) {
    var title = _ref.title;

    return React.createElement(
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
    );
};

export default Title;