import React from 'react'

const Section = ({children}) => {
    return (<div style={{display: "flex"}} className="row">
            {children}
    </div>)
}

export default Section