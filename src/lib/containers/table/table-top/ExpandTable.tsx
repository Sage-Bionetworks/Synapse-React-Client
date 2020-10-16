import * as React from 'react'
import { ElementWithTooltip } from '../../widgets/ElementWithTooltip'

type ExpandTableProps = {
  onExpand: Function
  isExpanded: boolean
}

export const ExpandTable: React.FunctionComponent<ExpandTableProps> = props => {
  const { onExpand, isExpanded } = props

  return (
    <ElementWithTooltip
      idForToolTip={'expand'}
      callbackFn={() => onExpand()}
      tooltipText={
        isExpanded ? 'Shrink table to fit' : 'Expand table in full screen'
      }
      size="lg"
      icon={isExpanded ? "collapse": "expand"}
    />
  )
}
