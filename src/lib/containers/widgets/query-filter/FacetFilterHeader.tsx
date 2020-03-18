import * as React from 'react'
import { unCamelCase } from '../../../utils/functions/unCamelCase'

export type FacetFilterHeaderProps = {
  label: string
  isCollapsed: boolean
  onClick: Function
}
export const FacetFilterHeader: React.FunctionComponent<FacetFilterHeaderProps> = ({
  label,
  isCollapsed,
  onClick,
}: FacetFilterHeaderProps) => {
  return (
    <div className="FacetFilterHeader">
      <label className="FacetFilterHeader__label">{unCamelCase(label)}</label>
      <button
        className="FacetFilterHeader__collapseToggleBtn"
        onClick={() => onClick(!isCollapsed)}
      >
        {isCollapsed ? '+' : '-'}
      </button>
    </div>
  )
}
