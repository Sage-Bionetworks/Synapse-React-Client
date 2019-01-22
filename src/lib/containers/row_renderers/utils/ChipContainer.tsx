import * as React from 'react'
import { uuidv4 } from '../../../utils/modules'

type ChipContainerProps = {
  chips: any []
}

const ChipContainer: React.SFC<ChipContainerProps> = ({ chips }) => {
  const chipsFormatted = chips.map((el) => {
    if (!el) {
      return false
    }
    return <span key={uuidv4()}> {el}</span>
  })
  return (
        <React.Fragment>
            {chipsFormatted}
        </React.Fragment>
  )
}
export default ChipContainer
