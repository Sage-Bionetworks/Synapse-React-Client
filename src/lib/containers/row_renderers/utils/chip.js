import React from 'react'
const uuidv4 = require("uuid/v4");

const Chip = ({type, text}) => {
    let dynamicClass = type === "gray" ? "SRC-grayBorder" : "SRC-blueBorder"
    if (!text) {
        return (false)
    }
    return (text.split(";").map(
            text => {
                return (
                    <span 
                        key={uuidv4()}
                        className={`SRC-roundBorder SRC-marginFive SRC-whiteText SRC-paddingChips ${dynamicClass}`}>
                        { text }
                    </span>
                )
            }
        )
    )
}   

export default Chip