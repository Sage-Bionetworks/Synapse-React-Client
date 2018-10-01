import React from 'react';
import { PUBLICATION, DATASET, FUNDER, TOOL, STUDY } from '../../../utils/SynapseConstants';

var CardIcon = function CardIcon(_ref) {
    var type = _ref.type;


    switch (type) {
        case PUBLICATION:
            return React.createElement(
                'div',
                { className: 'SRC-flex col-xs-2' },
                React.createElement('img', { alt: '', className: 'SRC-width-50-percent center-block img-responsive', src: require("../../../../assets/icons/Publication.svg") })
            );
        case DATASET:
            return React.createElement(
                'div',
                { className: 'SRC-flex col-xs-2' },
                React.createElement('img', { alt: '', className: 'SRC-width-50-percent center-block img-responsive', src: require("../../../../assets/icons/Data2.svg") })
            );
        case FUNDER:
            return React.createElement(
                'div',
                { className: 'SRC-flex col-xs-2' },
                React.createElement('img', { alt: '', className: 'SRC-width-50-percent center-block img-responsive', src: require("../../../../assets/icons/Data2.svg") })
            );
        case STUDY:
            return React.createElement(
                'div',
                { className: 'SRC-flex col-xs-2' },
                React.createElement('img', { alt: '', className: 'SRC-width-50-percent center-block img-responsive', src: require("../../../../assets/icons/Study.svg") })
            );
        case TOOL:
            return React.createElement(
                'div',
                { className: 'SRC-flex col-xs-2' },
                React.createElement('img', { alt: '', className: 'SRC-width-50-percent center-block img-responsive', src: require("../../../../assets/icons/DNA_Two.svg") })
            );
        default:
            return null;
    }
};

export default CardIcon;