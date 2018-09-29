import Chip from './Chip'
import React from 'react'


const ChipContainer = ({chips}) => {
    return (
        <div className="SRC-marginBottomTen">
            {chips.map(
                el => {
                    return (<Chip key={el.text} type={el.type} text={el.text}  ></Chip>)
                }
            )}
        </div>
    )
}

export default ChipContainer