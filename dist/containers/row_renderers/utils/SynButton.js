import React from 'react';

var SynButton = function SynButton(_ref) {
    var text = _ref.text,
        link = _ref.link,
        onClick = _ref.onClick;


    return React.createElement(
        "button",
        { onClick: onClick(link), type: "button", className: "btn SRC-whiteText SRC-roundBorder SRC-primary-background-color" },
        text
    );
};

export default SynButton;