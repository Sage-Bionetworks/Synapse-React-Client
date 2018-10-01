import React from 'react';

var Section = function Section(_ref) {
    var children = _ref.children;

    return React.createElement(
        "div",
        { className: "row SRC-flex" },
        children
    );
};

export default Section;