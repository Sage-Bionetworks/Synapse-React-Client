import * as React from 'react'
const uuidv4 = require('uuid/v4')

type ChipContainerProps = {
    chips: any []
}

const ChipContainer: React.SFC<ChipContainerProps> = ({ chips }) => {
    return (
        <React.Fragment>
            {chips.map(el => {
                if (!el) {
                    return false
                }
                return <span key={uuidv4()}> {el}</span>
            })}
        </React.Fragment>
    )
}
export default ChipContainer
