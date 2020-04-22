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
  facetWithSelection: FacetWithSelection
  index: number
  className?: string
  onRemove: Function
}

const SelectionCriteriaPill: FunctionComponent<SelectionCriteriaPillProps> = ({
  facetWithSelection,
  index,
  onRemove,
}) => {
  let innerText,
    tooltipText: string | null = ''
  if (facetWithSelection.facet.facetType === 'enumeration') {
    innerText = facetWithSelection.displayValue || ''
  } else {
    innerText =
      (facetWithSelection.facet as FacetColumnResultRange).selectedMin +
      ' - ' +
      (facetWithSelection.facet as FacetColumnResultRange).selectedMax
  }
  tooltipText = `${unCamelCase(
    facetWithSelection.facet.columnName,
  )}: ${innerText}`
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
