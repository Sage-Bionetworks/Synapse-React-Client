import React from 'react'

const CardFooter = ({values}) => {
    return (
        <div className="SRC-cardMetadata">
            {
                values.map(
                    kv => {
                        return(<div className="SRC-row">
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