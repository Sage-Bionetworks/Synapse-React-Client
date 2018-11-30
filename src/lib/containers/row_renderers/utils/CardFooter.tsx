import * as React from "react"
const uuidv4 = require("uuid/v4")

type CardFooterProps = {
    values: any [],
    extraWide? : boolean
}

const CardFooter: React.SFC<CardFooterProps> = ({ values, extraWide = false }) => {
    return (
        <div className="SRC-cardMetadata">
            {values.map(kv => {
                if (kv[0].toUpperCase() === "DOI") {
                    return (
                        <div key={uuidv4()} className="row">
                            <div className="SRC-row-label"> {kv[0]} </div>
                            <div className="SRC-row-data">
                                {" "}
                                <a target="_blank" href={`https://dx.doi.org/${kv[1]}`}>
                                    {kv[1]}
                                </a>
                            </div>
                        </div>
                    )
                }
                if(kv[0].toUpperCase() === "KEY CONTRIBUTORS") {
                    return (
                        <div key={uuidv4()} className={"row " + (extraWide ? "extraWide" : "")}>
                            <div className="SRC-verticalAlignTop SRC-row-label"> {kv[0]} </div>
                            <div className="SRC-row-data SRC-boldText SRC- SRC-limitMaxWidth"> {kv[1]} </div>
                        </div>
                    )
                }
                if (kv[0].toUpperCase() === "PUBLICATION") {
                    return false
                }
                return (
                    <div key={uuidv4()} className={"row " + (extraWide ? "extraWide" : "")}>
                        <div className="SRC-verticalAlignTop SRC-row-label"> {kv[0]} </div>
                        <div className="SRC-row-data SRC-limitMaxWidth"> {kv[1]} </div>
                    </div>
                )
            })}
        </div>
    )
}
export default CardFooter
