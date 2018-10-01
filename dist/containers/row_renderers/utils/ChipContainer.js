import Chip from './Chip';
import React from 'react';
var uuidv4 = require('uuid/v4');

var ChipContainer = function ChipContainer(_ref) {
    var chips = _ref.chips;

    return React.createElement(
        'div',
        { className: 'SRC-marginBottomTen' },
        chips.map(function (el) {
            return React.createElement(Chip, { key: uuidv4(), type: el.type, text: el.text });
        })
    );
};

export default ChipContainer;