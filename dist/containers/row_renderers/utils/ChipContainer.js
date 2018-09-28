import Chip from './Chip';
import React from 'react';

var ChipContainer = function ChipContainer(_ref) {
    var chips = _ref.chips;

    return chips.map(function (el) {
        return React.createElement(Chip, { key: el.text, type: el.type, text: el.text });
    });
};

export default ChipContainer;