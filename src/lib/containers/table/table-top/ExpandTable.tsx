import * as React from 'react'
import { ElementWithTooltip } from '../../widgets/ElementWithTooltip'
import { ReactComponent as ExpandSvg } from '../../../assets/icons/icon_expand.svg'  // MUI has no similar icon, import svg from design
import { ReactComponent as CollapseSvg } from '../../../assets/icons/icon_collapse.svg' // MUI has no similar icon, import svg from design

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
      muiIcon={isExpanded ? <CollapseSvg /> : <ExpandSvg /> }
    />
  )
}
