import React from 'react';

var CardBorder = function CardBorder(_ref) {
    var children = _ref.children;

    return React.createElement(
        "div",
        { className: "container SRC-syn-border SRC-noPaddingBottom  SRC-syn-border-spacing" },
        children
    );
};

export default CardBorder;