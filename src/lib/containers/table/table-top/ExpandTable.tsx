import * as React from 'react'
import ReactTooltip from "react-tooltip"
import ExpandSvg from '../../../assets/icons/expand.svg'
import ShrinkSvg from '../../../assets/icons/shrink.svg'
import { TOOLTIP_DELAY_SHOW } from '../SynapseTable'

type ExpandTableProps = {
  onExpand: Function
  isExpanded: boolean
}

const tooltipExpandId = 'expand'
export const EXPAND_CLASS = 'SRC-expand-class'


export const ExpandTable: React.FunctionComponent<ExpandTableProps> = (props) => {
  const {
    onExpand,
    isExpanded
  } = props
  return (
    <React.Fragment>
      <span
        tabIndex={0}
        data-for={tooltipExpandId} 
        data-tip="Expand table in full screen"
        className={`SRC-primary-background-color-hover SRC-inlineFlex SRC-extraPadding SRC-hand-cursor ${EXPAND_CLASS}`}
        onKeyPress={() => onExpand()} 
        onClick={() => onExpand()}
      >
        {isExpanded ? <img src={ShrinkSvg} alt="shrink table" /> : <img src={ExpandSvg} alt="expand table" />}
      </span>
      <ReactTooltip
        delayShow={TOOLTIP_DELAY_SHOW}
        place="top"
        type="dark"
        effect="solid"
        id={tooltipExpandId} 
      />
    </React.Fragment>
  )
}
