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
