import * as React from 'react'
import { unCamelCase } from '../../../utils/functions/unCamelCase'
import IconPlus from '../../../assets/icons/IconPlus'
import IconMinus from '../../../assets/icons/IconMinus'
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
        {isCollapsed ? (
          <IconPlus className="icon-plus" title="Expand Menu" />
        ) : (
          <IconMinus className="icon-minus" title="Collapse Menu" />
        )}
      </button>
    </div>
  )
}
