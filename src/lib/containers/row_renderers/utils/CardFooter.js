import React from 'react'
const uuidv4 = require("uuid/v4")

const CardFooter = ({values}) => {
    return (
        <div className="SRC-cardMetadata">
            {
                values.map(
                    kv => {
                        return(<div key={uuidv4()} className="SRC-row">
                                    <div className="SRC-row-label"> {kv[0]} </div>
                                    <div className="SRC-row-data">  {kv[1]}  </div>
                                </div>)
                    }
                )
            }
        </div>
    )
}

export default CardFooter