import React from 'react';
import PropTypes from 'prop-types';

function Reference(props) {
    return React.createElement(
        'span',
        null,
        React.createElement(
            'span',
            { className: 'ReferenceWidget' },
            React.createElement(
                'a',
                { href: '', onClick: props.onClick, className: 'margin-left-5' },
                '[',
                props.footnoteId,
                ']'
            )
        )
    );
}

Reference.propTypes = {
    footnoteId: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
};

export default Reference;