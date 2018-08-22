import React from 'react'


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

export default Reference