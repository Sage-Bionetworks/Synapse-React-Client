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
  // if select all was clicked then we send nothing back (e.g. - empty facet values)
  // there is no filter getting applied
  if (selector !== SELECT_ALL) {
    // read over the checkboxes for this facet selection and see what was selected.
    for (let i = 0; i < htmlCheckboxes.length; i += 1) {
      const checkbox = htmlCheckboxes[i] as HTMLInputElement
      /* Two different behaviors we have to expect of the checkboxes coming-
          1. The checkboxes behave as normal checkboxes
          2. The checkboxes behave as radios, despite their name, the reason a checkbox is
          being used passed in is because it allows for state to be held without us tracking it,
          its just a placeholder inside Facets.tsx
      */
      if (selector === SELECT_SINGLE_FACET && checkbox.value === value) {
        // this is the single value selection for the checkbox
        facetValues.push(value)
      } else {
        const isSelected = checkbox.checked
        if (isSelected) {
          facetValues.push(checkbox.value)
        }
      }
    }
  }
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
