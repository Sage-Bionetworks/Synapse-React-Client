import Chip from './Chip'
import React from 'react'


const ChipContainer = ({chips}) => {
    return (
        chips.map(
            el => {
                return (<Chip key={el.text} type={el.type} text={el.text}  ></Chip>)
            }
        )
    )
}

export default ChipContainer