import { FacetSelection } from '../../containers/QueryWrapper'
import { FacetColumnResultValueCount } from '../synapseTypes/'

/*
  TODO: This code is deprecated, delete once stackedbarchart.tsx is no longer used
*/
export const SELECT_SINGLE_FACET = 'SELECT_SINGLE_FACET'

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
  columnName,
}: {
  isLoading: boolean | undefined
  lastFacetSelection: FacetSelection | undefined
  curFacetSelection: FacetColumnResultValueCount
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
