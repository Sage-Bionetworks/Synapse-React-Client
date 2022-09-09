import React, { Dispatch, SetStateAction, useEffect, useState } from 'react'
import { unCamelCase } from '../../../utils/functions/unCamelCase'
import { FacetColumnResult } from '../../../utils/synapseTypes'
import IconSvg from '../../IconSvg'
import { useQueryVisualizationContext } from '../../QueryVisualizationWrapper'

type FacetChipProps = {
  facet: FacetColumnResult
  facetFilter: string[]
  setFacetFilter: Dispatch<SetStateAction<string[]>>
}

export const FacetChip: React.FC<FacetChipProps> = ({
  facet,
  facetFilter,
  setFacetFilter,
}) => {
  const [isChecked, setIsChecked] = useState<boolean>()
  const { facetAliases } = useQueryVisualizationContext()
  useEffect(() => {
    if (facetFilter?.includes(facet.columnName)) {
      setIsChecked(true)
    }
  }, [])

  const handleClick = () => {
    let newFacetFilter = [...(facetFilter ?? ['']), facet.columnName]
    if (facetFilter?.includes(facet.columnName)) {
      newFacetFilter = newFacetFilter.filter(col => col !== facet.columnName)
    }
    setFacetFilter(newFacetFilter)
    setIsChecked(!isChecked)
  }

  return (
    <button
      className={`Chip ${isChecked ? 'Checked' : ''}`}
      onClick={e => handleClick()}
    >
      {unCamelCase(facet.columnName, facetAliases)}
      <IconSvg options={{ icon: isChecked ? 'check' : 'add' }}></IconSvg>
    </button>
  )
}
