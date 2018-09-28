import React from 'react';

var Funder = function Funder(props) {
    return React.createElement(
        'div',
        null,
        'my data is ',
        props.data
    );
};

export default Funder;