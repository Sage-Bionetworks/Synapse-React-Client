import * as React from 'react'
import { unCamelCase } from '../../../utils/functions/unCamelCase'

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
        {isCollapsed ? '+' : '-'}
      </button>
    </div>
  )
}
