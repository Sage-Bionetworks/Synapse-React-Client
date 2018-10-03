import React from 'react'
const uuidv4 = require("uuid/v4")

const CardFooter = ({rows, ...rest}) => {
    if (!rows) {
        return <div></div>
    }
    return (
        <div className="row SRC-grayBackground">
            <div className="col-md-2 hidden-xs">
            </div>
            <div className="table-responsive col-md-10">
                <table className="table table-condensed">
                    <tbody className="SRC-borderTopNone">
                        {
                            rows.map(
                                row => {
                                    return (
                                        <tr key={uuidv4()}>{row.map(
                                            value => {
                                                return (<td key={uuidv4()}>{value}</td>)
                                            }
                                        )}</tr>
                                    )
                                }
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default CardFooter