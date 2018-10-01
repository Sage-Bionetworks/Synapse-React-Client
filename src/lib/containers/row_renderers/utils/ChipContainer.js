import Chip from './Chip'
import React from 'react'
const uuidv4 = require('uuid/v4')

const ChipContainer = ({chips}) => {
    return (
        <div className="SRC-marginBottomTen">
            {chips.map(
                el => {
                    return (<Chip key={uuidv4()} type={el.type} text={el.text}  ></Chip>)
                }
            )}
        </div>
    )
}

export default ChipContainer