import { Close } from '@material-ui/icons'
import React from 'react'
import { FunctionComponent } from 'react'
import { SynapseConstants } from '../../../utils'
import { unCamelCase } from '../../../utils/functions/unCamelCase'
import {
  FacetColumnResult,
  FacetColumnResultRange,
  FacetColumnResultValueCount,
} from '../../../utils/synapseTypes'
import { ElementWithTooltip } from '../ElementWithTooltip'

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

const SelectionCriteriaPill: FunctionComponent<SelectionCriteriaPillProps> =
  props => {
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
      tooltipText = `${unCamelCase(
        facetWithSelection.facet.columnName!,
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
        innerText = `"${filterValue}" in ${unCamelCase(filter?.columnName)}`
        tooltipText = `${unCamelCase(filter?.columnName)}: ${filterValue}`
      }
    } else {
      console.warn(
        'Expected either facetWithSelection or filter in SelectionCriteriaPill but got neither',
      )
    }
    return (
      <ElementWithTooltip
        idForToolTip={`selectionCriteria_${tooltipText}`}
        tooltipText={tooltipText}
        callbackFn={() => {}}
      >
        <label
          className="SelectionCriteriaPill"
          key={`SelectionCriteriaPill ${tooltipText}`}
        >
          <span>{innerText}</span>
          <button
            onClick={() => props.onRemove()}
            className="SelectionCriteriaPill__btnRemove"
            title="deselect"
          >
            <Close />
          </button>
        </label>
      </ElementWithTooltip>
    )
  }

export default SelectionCriteriaPill
