import React from 'react';

function Reference(props) {
    return React.createElement(
        "span",
        null,
        React.createElement(
            "span",
            null,
            React.createElement(
                "div",
                { className: "ReferenceWidget" },
                React.createElement(
                    "a",
                    { href: "", onClick: props.onClick, className: "margin-left-5" },
                    "[",
                    props.footnoteId,
                    "]"
                )
            )
        )
    );
}

export default Reference;