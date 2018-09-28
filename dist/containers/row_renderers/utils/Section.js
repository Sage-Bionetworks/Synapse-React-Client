import React from 'react';

var Section = function Section(_ref) {
    var children = _ref.children;

    return React.createElement(
        "div",
        { className: "row" },
        children
    );
};

export default Section;