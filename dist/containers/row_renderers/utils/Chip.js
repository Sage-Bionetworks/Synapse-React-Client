import React from 'react';
var uuidv4 = require("uuid/v4");

var Chip = function Chip(_ref) {
    var type = _ref.type,
        text = _ref.text;

    var dynamicClass = type === "gray" ? "SRC-grayBorder" : "SRC-blueBorder";
    if (!text) {
        return false;
    }
    return text.split(";").map(function (text) {
        return React.createElement(
            "span",
            {
                key: uuidv4(),
                className: "SRC-roundBorder SRC-whiteText SRC-paddingChips " + dynamicClass },
            text
        );
    });
};

export default Chip;