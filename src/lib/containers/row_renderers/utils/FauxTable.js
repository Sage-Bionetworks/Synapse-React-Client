import React from 'react'
const uuidv4 = require("uuid/v4")

// Idea for the faux table is here:
// https://stackoverflow.com/questions/11021567/is-such-alignment-achievable-without-table
const FauxTable = ({values}) => {
    return (
        values.map(
            // pass in a tuple so we unpack it with the [a,b] syntax
            ([key, value]) => {
                return (<div key={uuidv4()} className="SRC-table-row">
                            <div>
                                {key}
                            </div>
                            <div>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{value}
                            </div>
                        </div>)
            }
        )
    )
}

export default FauxTable