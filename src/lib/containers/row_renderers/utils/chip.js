import React from 'react'
const uuidv4 = require("uuid/v4");

const Chip = ({type, text}) => {
    let dynamicClass = type === "gray" ? "SRC-grayBorder" : "SRC-blueBorder"
    return (text.split(";").map(
            text => {
                return (
                    <span 
                        key={uuidv4()}
                        className={`SRC-roundBorder SRC-whiteText SRC-paddingChips ${dynamicClass}`}>
                        { text }
                    </span>
                )
            }
        )
    )
}   

export default Chip