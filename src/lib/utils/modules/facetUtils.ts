import { FacetSelection } from '../../containers/QueryWrapper'
import { SELECT_ALL } from '../../containers/SynapseTable'
import { QueryBundleRequest } from '../jsonResponses/Table/QueryBundleRequest'
import { FaceFacetColumnValuesRequest } from '../jsonResponses/Table/FacetColumnRequest'
import { SELECT_SINGLE_FACET } from '../../containers/Facets'

/**
 *  Calculates the state of a specific facet value given the current state
 *  of the application.
 *
 * @param
 *     isLoading: boolean | undefined,
 *     lastFacetSelection: FacetSelection | undefined,
 *     curFacetSelection: any,
 *     columnName: string
 * @returns
 */

export const getIsValueSelected =
({
  isLoading,
  lastFacetSelection,
  curFacetSelection,
  columnName
} : {
  isLoading: boolean | undefined,
  lastFacetSelection: FacetSelection | undefined,
  curFacetSelection: any,
  columnName: string
}) => {
  if (isLoading && columnName === lastFacetSelection!.columnName) {
    // indicates theres a selection made with this current facet value
    if (lastFacetSelection!.facetValue === curFacetSelection.facetValue) {
      return !curFacetSelection.isSelected
    // tslint:disable-next-line:no-else-after-return
    } else if (lastFacetSelection!.selector === SELECT_ALL) {
      // select all was hit
      return true
    } else if (lastFacetSelection!.selector === SELECT_SINGLE_FACET) {
      return false
    }
  }
  return curFacetSelection.isSelected
}

export const readFacetValues = ({
  htmlCheckboxes,
  selector,
  queryRequest,
  filter,
  value
}: {
  htmlCheckboxes: any,
  selector : string,
  queryRequest: QueryBundleRequest,
  filter: string,
  value?: string
}) => {
  const facetValues: string[] = []
  // read over the checkboxes for this facet selection and see what was selected.
  for (let i = 0; i < htmlCheckboxes.length; i += 1) {
    const checkbox = htmlCheckboxes[i] as HTMLInputElement
    /* two differet cases when looking at checkbox values
        1. the click came from the facets -- these act as radio
        buttons and only one will get turned on and the others
        turned off
        2. the click came from the table dropdown, that will
        act as a traditional check  box
    */
    if (selector === SELECT_SINGLE_FACET) {
      if (checkbox.value === value) {
        // only the one value click is selected
        facetValues.push(value)
      } else {
        // all others are false
        checkbox.checked = false
      }
    } else {
      if (selector === SELECT_ALL) {
        // In the case of the checkboxes the values are
        // all clicked 'off'
        checkbox.checked = false
      }
      const isSelected = checkbox.checked
      if (isSelected) {
        facetValues.push(checkbox.value)
      }
    }
  }
  // https://medium.freecodecamp.org/reactjs-pass-parameters-to-event-handlers-ca1f5c422b9
  const newQueryRequest: QueryBundleRequest = queryRequest
  const { selectedFacets = [] } = newQueryRequest.query

  const specificFacet = selectedFacets!.find(el => el.columnName === filter)!
  if (!specificFacet) {
    const faceFacetColumnValuesRequest: FaceFacetColumnValuesRequest =  {
      facetValues,
      concreteType: 'org.sagebionetworks.repo.model.table.FacetColumnValuesRequest',
      columnName: filter
    }
    selectedFacets.push(faceFacetColumnValuesRequest)
    // align the reference to selectedFacets
    newQueryRequest.query.selectedFacets = selectedFacets
  } else {
    specificFacet.facetValues = facetValues
  }

  return { newQueryRequest }
}
