import {
  getIsValueSelected,
  readFacetValues,
  SyntheticHTMLInputElement,
} from '../../../lib/utils/functions/facetUtils'
import { FacetSelection } from '../../../lib/containers/QueryWrapper'
import { FacetColumnResultValueCount } from '../../../lib/utils/synapseTypes/'
import { SELECT_SINGLE_FACET } from '../../../lib/containers/Facets'
import { QueryBundleRequest } from '../../../lib/utils/synapseTypes/'
import { FacetColumnValuesRequest } from '../../../lib/utils/synapseTypes/'

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

describe('readFacetValues functions as a checkbox', () => {
  /*
    When we test this method we don't have to worry about stubbing actual
    data, its sufficient to stub only the parts we need.
  */
  const concreteTypeFacetsRequest =
    'org.sagebionetworks.repo.model.table.FacetColumnValuesRequest'

  const queryRequest: QueryBundleRequest = {
    concreteType: 'org.sagebionetworks.repo.model.table.QueryBundleRequest',
    partMask: 0x2,
    entityId: 'syn123456789',
    query: {
      sql: 'SELECT * FROM syn123456789',
    },
  }

  it('selects nothing without a selection made', () => {
    // Note - this also tests the ALL button on the SynapseTable dropdown in addition
    // to the checkbox state without any selections made
    const syntheticHTMLInputElement: SyntheticHTMLInputElement[] = [
      {
        checked: false,
        value: 'stub1',
      },
      {
        checked: false,
        value: 'stub2',
      },
      {
        checked: false,
        value: 'stub2',
      },
    ]

    const facet = 'FILTER_STUB'
    const { newQueryRequest } = readFacetValues({
      queryRequest,
      facet,
      htmlCheckboxes: syntheticHTMLInputElement,
      selector: '',
    })
    const expectedRequest = [
      {
        concreteType: concreteTypeFacetsRequest,
        columnName: facet,
        facetValues: [], // should be empty, isSelected is false for all values
      },
    ] as FacetColumnValuesRequest[]
    // sanity check
    expect(newQueryRequest.query.selectedFacets).toEqual(
      expect.arrayContaining(expectedRequest),
    )
  })

  it('contains a single facet with a single checkbox clicked', () => {
    const singleSelection = 'stub1'
    const syntheticHTMLInputElement: SyntheticHTMLInputElement[] = [
      {
        checked: true,
        value: singleSelection,
      },
      {
        checked: false,
        value: 'stub2',
      },
      {
        checked: false,
        value: 'stub2',
      },
    ]

    const facet = 'FILTER_STUB'
    const { newQueryRequest } = readFacetValues({
      queryRequest,
      facet,
      htmlCheckboxes: syntheticHTMLInputElement,
      selector: '',
    })
    const expectedRequest = [
      {
        concreteType: concreteTypeFacetsRequest,
        columnName: facet,
        facetValues: [singleSelection],
      },
    ] as FacetColumnValuesRequest[]
    expect(newQueryRequest.query.selectedFacets).toEqual(
      expect.arrayContaining(expectedRequest),
    )
  })

  it('contains multiple facet values with multiple checkboxes selected', () => {
    const stub1 = 'stub1'
    const stub2 = 'stub2'
    const stub3 = 'stub3'
    const syntheticHTMLInputElement: SyntheticHTMLInputElement[] = [
      {
        checked: true,
        value: stub1,
      },
      {
        checked: true,
        value: stub2,
      },
      {
        checked: true,
        value: stub3,
      },
    ]

    const facet = 'FILTER_STUB'
    const { newQueryRequest } = readFacetValues({
      queryRequest,
      facet,
      htmlCheckboxes: syntheticHTMLInputElement,
      selector: '',
    })
    const expectedRequest = [
      {
        concreteType: concreteTypeFacetsRequest,
        columnName: facet,
        facetValues: [stub1, stub2, stub3],
      },
    ] as FacetColumnValuesRequest[]
    expect(newQueryRequest.query.selectedFacets).toEqual(
      expect.arrayContaining(expectedRequest),
    )
  })
})

describe('readFacetValues functions as a radio checkbox', () => {
  /*
    When we test this method we don't have to worry about stubbing actual
    data, its sufficient to stub only the parts we need.

    This tests clicking on the pills under the barchart, where the selection
    as a radio

  */
  const concreteTypeFacetsRequest =
    'org.sagebionetworks.repo.model.table.FacetColumnValuesRequest'

  const queryRequest: QueryBundleRequest = {
    concreteType: 'org.sagebionetworks.repo.model.table.QueryBundleRequest',
    partMask: 0x2,
    entityId: 'syn123456789',
    query: {
      sql: 'SELECT * FROM syn123456789',
    },
  }
  it('contains a single facet value when SELECT_SINGLE_FACET and isChecked is true', () => {
    const stub1 = 'stub1'
    const stub2 = 'stub2'
    const stub3 = 'stub3'
    const syntheticHTMLInputElement: SyntheticHTMLInputElement[] = [
      {
        /*
           radios always have a default selection, so when this first value is clicked
           we check that it doesn't get clicked 'off'
        */
        checked: true,
        value: stub1,
      },
      {
        checked: false,
        value: stub2,
      },
      {
        checked: false,
        value: stub3,
      },
    ]

    const facet = 'FILTER_STUB'
    const { newQueryRequest } = readFacetValues({
      queryRequest,
      facet,
      htmlCheckboxes: syntheticHTMLInputElement,
      selector: SELECT_SINGLE_FACET,
      value: stub1,
    })
    const expectedRequest = [
      {
        concreteType: concreteTypeFacetsRequest,
        columnName: facet,
        facetValues: [stub1],
      },
    ] as FacetColumnValuesRequest[]
    expect(newQueryRequest.query.selectedFacets).toEqual(
      expect.arrayContaining(expectedRequest),
    )
  })

  it('contains a single facet value when SELECT_SINGLE_FACET is passed and isChecked is false', () => {
    const stub1 = 'stub1'
    const stub2 = 'stub2'
    const stub3 = 'stub3'
    const syntheticHTMLInputElement: SyntheticHTMLInputElement[] = [
      {
        checked: false,
        value: stub1,
      },
      {
        checked: false,
        value: stub2,
      },
      {
        checked: false,
        value: stub3,
      },
    ]

    const facet = 'FILTER_STUB'
    const { newQueryRequest } = readFacetValues({
      queryRequest,
      facet,
      htmlCheckboxes: syntheticHTMLInputElement,
      selector: SELECT_SINGLE_FACET,
      value: stub1,
    })
    const expectedRequest = [
      {
        concreteType: concreteTypeFacetsRequest,
        columnName: facet,
        facetValues: [stub1],
      },
    ] as FacetColumnValuesRequest[]
    expect(newQueryRequest.query.selectedFacets).toEqual(
      expect.arrayContaining(expectedRequest),
    )
  })
})
