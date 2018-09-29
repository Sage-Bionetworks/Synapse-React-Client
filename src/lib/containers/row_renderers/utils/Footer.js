import React from 'react'
const uuidv4 = require("uuid/v4")

const Footer = ({rows, ...rest}) => {
    console.log('rows coming in ', rows)
    return (
        <div className="row SRC-grayBackground">
            <div className="col-xs-2">
            </div>
            <div className="table-responsive col-xs-10">
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

export default Footer