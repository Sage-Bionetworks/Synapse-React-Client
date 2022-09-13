import React from 'react'
import { unCamelCase } from '../../../utils/functions/unCamelCase'
import { FacetColumnResult } from '../../../utils/synapseTypes'
import IconSvg from '../../IconSvg'
import { useQueryVisualizationContext } from '../../QueryVisualizationWrapper'

export type FacetChipProps = {
  facet: FacetColumnResult
  isChecked: boolean
  onClick: () => void
}

export const FacetChip: React.FC<FacetChipProps> = ({
  facet,
  isChecked,
  onClick,
}) => {
  const { facetAliases } = useQueryVisualizationContext()
  return (
    <button className={`Chip ${isChecked ? 'Checked' : ''}`} onClick={onClick}>
      {unCamelCase(facet.columnName, facetAliases)}
      <IconSvg
        options={{
          icon: isChecked ? 'check' : 'add',
          size: '14px',
          padding: 'left',
        }}
      ></IconSvg>
    </button>
  )
}
