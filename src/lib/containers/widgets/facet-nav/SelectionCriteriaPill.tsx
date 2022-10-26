import { Close } from '@material-ui/icons'
import React from 'react'
import { FunctionComponent } from 'react'
import { SynapseConstants } from '../../../utils'
import {
  FacetColumnResult,
  FacetColumnResultRange,
  FacetColumnResultValueCount,
} from '../../../utils/synapseTypes'
import { ElementWithTooltip } from '../ElementWithTooltip'
import { useQueryVisualizationContext } from '../../QueryVisualizationWrapper'

export type FacetWithSelection = {
  facet: FacetColumnResult
  selectedValue?: FacetColumnResultValueCount
  displayValue?: string
}

export type SelectionCriteriaPillProps = (
  | { readonly facetWithSelection: FacetWithSelection }
  | {
      filter: {
        columnName?: string
        value: string
      }
    }
) & {
  onRemove: () => void
}

const SelectionCriteriaPill: FunctionComponent<
  SelectionCriteriaPillProps
> = props => {
  const { getColumnDisplayName } = useQueryVisualizationContext()
  let innerText,
    tooltipText: string | null = ''
  if ('facetWithSelection' in props) {
    const { facetWithSelection } = props
    if (facetWithSelection.facet.facetType === 'enumeration') {
      innerText =
        facetWithSelection.displayValue === SynapseConstants.VALUE_NOT_SET
          ? SynapseConstants.FRIENDLY_VALUE_NOT_SET
          : facetWithSelection.displayValue
    } else {
      innerText = `${(facetWithSelection.facet as FacetColumnResultRange)
        .selectedMin!} 
        - ${(facetWithSelection.facet as FacetColumnResultRange).selectedMax!}`
    }
    tooltipText = `${getColumnDisplayName(
      facetWithSelection.facet.columnName,
    )}: ${innerText}`
  } else if ('filter' in props) {
    const { filter } = props
    let filterValue = filter.value
    if (filterValue?.startsWith('%') && filterValue?.endsWith('%')) {
      // strip '%' wildcard character when using a LIKE condition
      filterValue = filterValue.substring(1, filterValue.length - 1)
    }

    // For full-text search, set the pill text and tooltip text
    innerText = filterValue
    tooltipText = `Text matches: "${filterValue}"`

    // If searching in a specific column, use different inner/tooltip text
    if (filter.columnName) {
      innerText = `"${filterValue}" in ${getColumnDisplayName(
        filter?.columnName,
      )}`
      tooltipText = `${getColumnDisplayName(
        filter?.columnName,
      )}: ${filterValue}`
    }
  } else {
    console.warn(
      'Expected either facetWithSelection or filter in SelectionCriteriaPill but got neither',
    )
  }
  const key = encodeURIComponent(tooltipText)
  return (
    <ElementWithTooltip
      idForToolTip={`selectionCriteria_${key}`}
      tooltipText={tooltipText}
      callbackFn={() => {}}
    >
      <div
        className="SelectionCriteriaPill"
        key={`SelectionCriteriaPill ${key}`}
      >
        <span>{innerText}</span>
        <button
          onClick={() => props.onRemove()}
          className="SelectionCriteriaPill__btnRemove"
          title="deselect"
        >
          <Close />
        </button>
      </div>
    </ElementWithTooltip>
  )
}

export default SelectionCriteriaPill
