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

export type FacetWithSelection = {
  facet: FacetColumnResult
  selectedValue?: FacetColumnResultValueCount
  displayValue?: string
}

export type SelectionCriteriaPillProps = {
  facet: FacetWithSelection
  index: number
  className?: string
  onRemove: Function
}

// This is a stateful component so that during load the component can hold onto the previous
// total instead of showing 0 results for the intermittent loading state.

const SelectionCriteriaPill: FunctionComponent<SelectionCriteriaPillProps> = ({
  facet,

  index,
  onRemove,
}) => {
  let innerText,
    tooltipText: string | null = ''
  if (facet.facet.facetType === 'enumeration') {
    innerText = facet.displayValue || ''
  } else {
    innerText =
      (facet.facet as FacetColumnResultRange).selectedMin +
      ' - ' +
      (facet.facet as FacetColumnResultRange).selectedMax
  }
  tooltipText = `${unCamelCase(facet.facet.columnName)}: ${innerText}`
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
          onClick={() => onRemove(facet)}
          className="SelectionCriteriaPill__btnRemove"
        >
          <FontAwesomeIcon icon={faTimes} title="deselect" />
        </button>
      </label>
    </ElementWithTooltip>
  )
}

export default SelectionCriteriaPill
