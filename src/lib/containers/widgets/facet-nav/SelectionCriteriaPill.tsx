import * as React from 'react'
import { FunctionComponent } from 'react'

import {
  FacetColumnResult,
  FacetColumnResultRange,
  FacetColumnResultValueCount,
} from '../../../utils/synapseTypes'
import { unCamelCase } from '../../../utils/functions/unCamelCase'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { ElementWithTooltip } from '../ElementWithTooltip'
import _ from 'lodash'
import { SynapseConstants } from '../../../utils'

export type FacetWithSelection = {
  facet: FacetColumnResult
  selectedValue?: FacetColumnResultValueCount
  displayValue?: string
}

export type SelectionCriteriaPillProps = {
  facetWithSelection?: FacetWithSelection
  index: number
  className?: string
  onRemove: Function
  filter?: {
    columnName: string
    value: string
  }
}

const SelectionCriteriaPill: FunctionComponent<SelectionCriteriaPillProps> = ({
  facetWithSelection,
  index,
  onRemove,
  filter,
}) => {
  let innerText,
    tooltipText: string | null = ''
  if (facetWithSelection) {    
    if (facetWithSelection.facet.facetType === 'enumeration') {
      innerText =
        facetWithSelection.displayValue === SynapseConstants.VALUE_NOT_SET
          ? SynapseConstants.FRIENDLY_VALUE_NOT_SET
          : facetWithSelection.displayValue
    } else {
      innerText =
        (facetWithSelection.facet as FacetColumnResultRange).selectedMin +
        ' - ' +
        (facetWithSelection.facet as FacetColumnResultRange).selectedMax
    }
    tooltipText = `${unCamelCase(
      facetWithSelection.facet.columnName,
    )}: ${innerText}`
  } else {
    let filterValue = filter?.value
    if (filterValue?.startsWith('%') && filterValue?.endsWith('%')) {
      // strip '%' wildcard character when using a LIKE condition
      filterValue = filterValue.substring(1, filterValue.length-1)
    }
    innerText = `"${filterValue}" in ${unCamelCase(filter?.columnName)}`
    tooltipText = `${unCamelCase(filter?.columnName)}: ${filterValue}`
  }
  return (
    <ElementWithTooltip
      idForToolTip={`selectionCriteria_${+index}`}
      tooltipText={tooltipText}
      callbackFn={() => _.noop}
    >
      <label
        className="SelectionCriteriaPill"
        key={index + '__SelectionCriteriaPill'}
      >
        <span>{innerText}</span>
        <button
          onClick={() => onRemove(facetWithSelection)}
          className="SelectionCriteriaPill__btnRemove"
        >
          <FontAwesomeIcon icon={faTimes} title="deselect" />
        </button>
      </label>
    </ElementWithTooltip>
  )
}

export default SelectionCriteriaPill
