import React from 'react'
import PropTypes from 'prop-types'

function Reference (props) {
    return (
        <span> 
            <span>
                <div className="ReferenceWidget">
                <a href="" onClick={props.onClick} className="margin-left-5">[{props.footnoteId}]</a>
                </div>
            </span>
        </span>
    )
}

Reference.propTypes = {
    footnoteId: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string
    ])
}

export default Reference