import { FacetSelection } from '../../containers/QueryWrapper'
import { SELECT_ALL, DESELECT_ALL } from '../../containers/SynapseTable'
import { QueryBundleRequest } from '../jsonResponses/Table/QueryBundleRequest'

/**
 *  Calculates the state of a specific facet value given the current state
 *  of the application.
 *
 * @param
 *     hasLoadedPastInitQuery: boolean | undefined,
 *     isLoading: boolean | undefined,
 *     lastFacetSelection: FacetSelection | undefined,
 *     curFacetSelection: any,
 *     columnName: string
 * @returns
 */

export const getIsValueSelected =
({
  hasLoadedPastInitQuery,
  isLoading,
  lastFacetSelection,
  curFacetSelection,
  columnName
} : {
  hasLoadedPastInitQuery: boolean | undefined,
  isLoading: boolean | undefined,
  lastFacetSelection: FacetSelection | undefined,
  curFacetSelection: any,
  columnName: string
}) => {

  if (isLoading && columnName === lastFacetSelection!.columnName) {
    // indicates theres a selection made with this current facet value
    if (lastFacetSelection!.facetValue === curFacetSelection.facetValue) {
      if (!hasLoadedPastInitQuery) {
        return false
      }
      return !curFacetSelection.isSelected
    // tslint:disable-next-line:no-else-after-return
    } else if (lastFacetSelection!.selector === SELECT_ALL) {
      // select all was hit
      return true
    } else if (lastFacetSelection!.selector === DESELECT_ALL) {
      // deselect all was hit
      return false
    }
  }
  // this should never happen
  return curFacetSelection.isSelected
}

/**
 *  isChecked is used to keep the barchart and the current facet selection
 *  in sync. This lets the two views sync without requiring an API call
 *  to update the barchart.
 *
 *  Note: isChecked is ONLY applicable to the facet that is being drilled down
 *  on in the view.
 *
 * @param
 *   isChecked: any
 *   facetValue: string
 *   selector: string
 * @returns
 */
export const getIsCheckedArray = ({
  isChecked,
  facetValue,
  selector
} : {
  isChecked: any,
  facetValue: string,
  selector: string
}) => {
  // we pass in a deep clone so we don't need to worry about any reference
  // issues, below we call it a copy but its really to avoid linter complaints
  const isCheckedCopy = isChecked

  // update isChecked to keep the barchart in sync
  // we need to know if this was a single facet value click or if it was with all/clear
  if (facetValue) {
    // it came from a single click, only update this facet value
    const isCheckedValue = isCheckedCopy![facetValue]
    // if its un  defined then it hasn't been seen before, in which case its considered 'true'
    // so we set the value to false
    isCheckedCopy![facetValue] = isCheckedValue === undefined ? false : !isCheckedCopy![facetValue]
  } else {
    // need to deselect all on isChecked
    // if its undefined then it hasn't been seen before, in which case its considered 'true'
    // so we set the value to false
    for (const key in isCheckedCopy) {
      isCheckedCopy[key] = selector === SELECT_ALL
    }
  }
  console.log('returning ischeckedcopy = ', isCheckedCopy)
  return isCheckedCopy
}

export const readFacetValues = ({
  htmlCheckboxes,
  selector,
  queryRequest,
  filter
}: {
  htmlCheckboxes: any,
  selector : string,
  queryRequest: QueryBundleRequest,
  filter: string
}) => {
  const facetValues: string[] = []
  console.log('checkboxes = ', htmlCheckboxes)
  // read over the checkboxes for this facet selection and see what was selected.
  for (let i = 0; i < htmlCheckboxes.length; i += 1) {
    const checkbox = htmlCheckboxes[i] as HTMLInputElement
    if (selector) {
      checkbox.checked = selector === SELECT_ALL
    }
    const isSelected = checkbox.checked
    if (isSelected) {
      facetValues.push(checkbox.value)
    }
  }
  // https://medium.freecodecamp.org/reactjs-pass-parameters-to-event-handlers-ca1f5c422b9
  const newQueryRequest: QueryBundleRequest = queryRequest
  const { selectedFacets } = newQueryRequest.query
  // grab the facet values associated for this column
  const specificFacet = selectedFacets!.find(el => el.columnName === filter)!
  specificFacet.facetValues = facetValues

  return { newQueryRequest }
}
