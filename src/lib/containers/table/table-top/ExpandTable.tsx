import * as React from 'react'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faExpandAlt, faCompressAlt } from '@fortawesome/free-solid-svg-icons'
import { ElementWithTooltip } from '../../widgets/ElementWithTooltip'

type ExpandTableProps = {
  onExpand: Function
  isExpanded: boolean
}

library.add(faExpandAlt)
library.add(faCompressAlt)

export const ExpandTable: React.FunctionComponent<ExpandTableProps> = props => {
  const { onExpand, isExpanded } = props

  return (
    <ElementWithTooltip
      idForToolTip={'expand'}
      callbackFn={() => onExpand()}
      tooltipText={
        isExpanded ? 'Shrink table to fit' : 'Expand table in full screen'
      }
      image={isExpanded ? faCompressAlt : faExpandAlt}
      size="lg"
    />
  )
}
