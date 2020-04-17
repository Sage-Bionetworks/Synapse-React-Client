import * as React from 'react'
import { FunctionComponent } from 'react'
import {
  FacetColumnResult,
  //FacetColumnResultValues,
  FacetColumnResultRange,
  FacetColumnResultValueCount,

 // EntityHeader,
 // UserProfile,
} from '../../../utils/synapseTypes'

import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

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
  let innerText: string | null = ''
  //const getInnerText = ({facet, selectedValue}: FacetWithSelection) => {
  if (facet.facet.facetType === 'enumeration') {
   /* if (facet.columnType === 'ENTITYID') {
      const x = JSON.parse(
        localStorage.getItem('INFO_FROM_IDS_ENTITY_HEADER') || '',
      )
      const entity = x.find(
        (item: EntityHeader) => item.id === facet.selectedValue?.value,
      ) as EntityHeader
      innerText = entity.name
    } else if (facet.columnType === 'USERID') {
      const x = JSON.parse(
        localStorage.getItem('INFO_FROM_IDS_USER_PROFILE') || '',
      )
      console.log(x)
      const user = x.find(
        (item: UserProfile) => item.ownerId === facet.selectedValue?.value,
      ) as UserProfile
      innerText = user?.userName
    } else {*/
      innerText = facet.displayValue || ''
   // }
  } else {
    innerText =
      (facet.facet as FacetColumnResultRange).selectedMin +
      ' - ' +
      (facet.facet as FacetColumnResultRange).selectedMax
  }
  //}
  return (
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
  )
}

export default SelectionCriteriaPill
