import { FacetSelection } from '../../../lib/containers/QueryWrapper'
import {
  getIsValueSelected,
  SELECT_SINGLE_FACET,
} from '../../../lib/utils/functions/facetUtils'
import { FacetColumnResultValueCount } from '../../../lib/utils/synapseTypes/'

describe('getIsValueSelected works', () => {
  const columnName = 'projectStatus'
  const facetValue = 'Active'
  const lastFacetSelectionNoSelector: FacetSelection = {
    columnName,
    facetValue,
    selector: '',
  }

  /*
    We test the following cases:
      1. The app is not loading and the facet value was
      just passed in. In which case it should reflect the original
      value because it wasn't changed
      2. The app is loading and it returns the opposite of the value
      passed in for the selection
      3. Their was a select all event in which case the value should be
      false because synapse treats zero facet selections as though they
      all facets were selected.
  */
  it('returns false when its not loading and false was passed in', () => {
    const curFacetSelection: FacetColumnResultValueCount = {
      value: 'Active',
      count: 20,
      isSelected: false,
    }
    expect(
      getIsValueSelected({
        curFacetSelection,
        columnName,
        isLoading: false,
        lastFacetSelection: lastFacetSelectionNoSelector,
      }),
    ).toEqual(curFacetSelection.isSelected)
  })
  it('returns true when its not loading and true was passed in', () => {
    const curFacetSelection: FacetColumnResultValueCount = {
      value: 'Active',
      count: 20,
      isSelected: true,
    }
    expect(
      getIsValueSelected({
        curFacetSelection,
        columnName,
        isLoading: false,
        lastFacetSelection: lastFacetSelectionNoSelector,
      }),
    ).toEqual(curFacetSelection.isSelected)
  })
  it('returns false when its loading and the value passed in was true', () => {
    const curFacetSelection: FacetColumnResultValueCount = {
      value: facetValue,
      count: 20,
      isSelected: true,
    }
    expect(
      getIsValueSelected({
        columnName,
        curFacetSelection,
        isLoading: true,
        lastFacetSelection: lastFacetSelectionNoSelector,
      }),
    ).toEqual(!curFacetSelection.isSelected)
  })
  it('returns true when its loading and the value passed in was false', () => {
    const curFacetSelection: FacetColumnResultValueCount = {
      value: facetValue,
      count: 20,
      isSelected: false,
    }
    expect(
      getIsValueSelected({
        columnName,
        curFacetSelection,
        isLoading: true,
        lastFacetSelection: lastFacetSelectionNoSelector,
      }),
    ).toEqual(!curFacetSelection.isSelected)
  })
  it("returns false when its loading and the value passed in wasn't the last selection", () => {
    // this checks that it behaves like a radiobox essentially
    const curFacetSelection: FacetColumnResultValueCount = {
      value: 'Completed',
      count: 20,
      isSelected: true,
    }
    expect(
      getIsValueSelected({
        columnName,
        curFacetSelection,
        isLoading: true,
        lastFacetSelection: {
          ...lastFacetSelectionNoSelector,
          selector: SELECT_SINGLE_FACET,
        },
      }),
    ).toEqual(false)
  })
})
