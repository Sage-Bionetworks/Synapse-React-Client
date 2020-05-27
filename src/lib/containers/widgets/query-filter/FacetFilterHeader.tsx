import * as React from 'react'
import { unCamelCase } from '../../../utils/functions/unCamelCase'
import iconPlus from '../../../assets/icons/icon_plus.svg'
import iconMinus from '../../../assets/icons/icon_minus.svg'
import '../../../style/components/query_filter/_facet-filter-header.scss'

export type FacetFilterHeaderProps = {
  label: string
  isCollapsed: boolean
  onClick: Function
  facetAliases: {} | undefined
}
export const FacetFilterHeader: React.FunctionComponent<FacetFilterHeaderProps> = ({
  label,
  isCollapsed,
  onClick,
  facetAliases,
}: FacetFilterHeaderProps) => {
  return (
    <div className="FacetFilterHeader">
      <label className="FacetFilterHeader__label">
        {unCamelCase(label, facetAliases)}
      </label>
      <button
        className="FacetFilterHeader__collapseToggleBtn"
        onClick={() => onClick(!isCollapsed)}
      >
        {isCollapsed ? <img src={iconPlus} alt="Expand Menu" className="icon-plus" /> : <img src={iconMinus} alt="Collapse Menu"  className="icon-minus" />}
      </button>
    </div>
  )
}
