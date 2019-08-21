import { FacetSelection } from '../../containers/QueryWrapper'
import { QueryBundleRequest } from '../jsonResponses/Table/QueryBundleRequest'
import { FacetColumnValuesRequest } from '../jsonResponses/Table/FacetColumnRequest'
import { SELECT_SINGLE_FACET } from '../../containers/Facets'
import { FacetColumnResultValueCount } from '../jsonResponses/Table/FacetColumnResult'

/**
 *  Calculates the state of a specific facet value given the current state
 *  of the application.
 *
 * @param
 *     isLoading: boolean | undefined,
 *     lastFacetSelection: FacetSelection | undefined,
 *     curFacetSelection: any,
 *     columnName: string
 * @returns boolean
 */

export const getIsValueSelected = ({
  isLoading,
  lastFacetSelection,
  curFacetSelection,
  columnName
} : {
  isLoading: boolean | undefined,
  lastFacetSelection: FacetSelection | undefined,
  curFacetSelection: FacetColumnResultValueCount,
  columnName: string
}) => {
  if (isLoading && columnName === lastFacetSelection!.columnName) {
    // indicates there is a selection made with this current facet value
    if (lastFacetSelection!.facetValue === curFacetSelection.value) {
      return !curFacetSelection.isSelected
    }
    if (lastFacetSelection!.selector === SELECT_SINGLE_FACET) {
      return false
    }
  }
  /*
    else, the information has come back from the server and we can
    rely on that
  */
  return curFacetSelection.isSelected

}

export type SyntheticHTMLInputElement = {
  value: string
  checked: boolean
}

/**
 * Function reads over a set of checkboxes and then returns a corresponding
 * queryRequest given the state of the prior queryRequest
 *   htmlCheckboxes: any,
 *   selector : string,
 *   queryRequest: QueryBundleRequest,
 *   facet: string,
 *   value?: string
 * }
 * @returns
 */
export const readFacetValues = ({
  htmlCheckboxes,
  selector,
  queryRequest,
  facet,
  value
}: {
  htmlCheckboxes: SyntheticHTMLInputElement [],
  selector : string,
  queryRequest: QueryBundleRequest,
  facet: string,
  value?: string
}) => {
  const facetValues: string[] = []

  if (!selector) {
    // no selector was clicked -- read over facet values as normal and see what was clicked
    for (let i = 0; i < htmlCheckboxes.length; i += 1) {
      const checkbox = htmlCheckboxes[i]
      const isSelected = checkbox.checked
      if (isSelected) {
        facetValues.push(checkbox.value)
      }
    }
  } else if (selector === SELECT_SINGLE_FACET) {
    // SELECT_SINGLE_FACET acts as a radio selection, thats the only selection
    facetValues.push(value!)
  } // else selector === SELECT_ALL, we don't add any values, empty is treated as SELECT_ALL
  const newQueryRequest: QueryBundleRequest = queryRequest
  const { selectedFacets = [] } = newQueryRequest.query

  const specificFacet = selectedFacets!.find(el => el.columnName === facet)!
  if (!specificFacet) {
    const facetColumnValuesRequest: FacetColumnValuesRequest =  {
      facetValues,
      concreteType: 'org.sagebionetworks.repo.model.table.FacetColumnValuesRequest',
      columnName: facet
    }
    selectedFacets.push(facetColumnValuesRequest)
    // align the reference to selectedFacets
    newQueryRequest.query.selectedFacets = selectedFacets
  } else {
    specificFacet.facetValues = facetValues
  }

  return { newQueryRequest }
}
