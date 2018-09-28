import React from 'react';

var Authors = function Authors(_ref) {
    var authors = _ref.authors;


    return React.createElement(
        'div',
        null,
        React.createElement(
            'strong',
            null,
            React.createElement(
                'i',
                null,
                authors
            )
        )
    );
};

export default Authors;