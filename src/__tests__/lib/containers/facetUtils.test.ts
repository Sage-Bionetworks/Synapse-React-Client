import {
  getIsValueSelected,
  readFacetValues,
  SyntheticHTMLInputElement
} from '../../../lib/utils/modules/facetUtils'
import { FacetSelection } from '../../../lib/containers/QueryWrapper'
import { FacetColumnResultValueCount } from '../../../lib/utils/jsonResponses/Table/FacetColumnResult'
import { SELECT_SINGLE_FACET } from '../../../lib/containers/Facets'
import { QueryBundleRequest } from 'src/lib/utils/jsonResponses/Table/QueryBundleRequest'
import { FacetColumnValuesRequest } from 'src/lib/utils/jsonResponses/Table/FacetColumnRequest'

describe('getIsValueSelected works', () => {
  const columnName = 'projectStatus'
  const facetValue = 'Active'
  const lastFacetSelectionNoSelector: FacetSelection = {
    columnName,
    facetValue,
    selector: ''
  }
  const FALSE_BOOL = false
  const TRUE_BOOL = true

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
      isSelected: false
    }
    expect(getIsValueSelected({
      curFacetSelection,
      columnName,
      isLoading:FALSE_BOOL,
      lastFacetSelection: lastFacetSelectionNoSelector
    })).toEqual(curFacetSelection.isSelected)
  })
  it('returns true when its not loading and true was passed in', () => {
    const curFacetSelection: FacetColumnResultValueCount = {
      value: 'Active',
      count: 20,
      isSelected: true
    }
    expect(getIsValueSelected({
      curFacetSelection,
      columnName,
      isLoading:FALSE_BOOL,
      lastFacetSelection: lastFacetSelectionNoSelector
    })).toEqual(curFacetSelection.isSelected)
  })
  it('returns false when its loading and the value passed in was true', () => {
    const curFacetSelection: FacetColumnResultValueCount = {
      value: facetValue,
      count: 20,
      isSelected: true
    }
    expect(getIsValueSelected({
      columnName,
      curFacetSelection,
      isLoading: TRUE_BOOL,
      lastFacetSelection: lastFacetSelectionNoSelector
    })).toEqual(!curFacetSelection.isSelected)
  })
  it('returns true when its loading and the value passed in was false', () => {
    const curFacetSelection: FacetColumnResultValueCount = {
      value: facetValue,
      count: 20,
      isSelected: false
    }
    expect(getIsValueSelected({
      columnName,
      curFacetSelection,
      isLoading: TRUE_BOOL,
      lastFacetSelection: lastFacetSelectionNoSelector
    })).toEqual(!curFacetSelection.isSelected)
  })
  it("returns false when its loading and the value passed in wasn't the last selection", () => {
    // this checks that it behaves like a radiobox essentially
    const curFacetSelection: FacetColumnResultValueCount = {
      value: 'Completed',
      count: 20,
      isSelected: true
    }
    expect(getIsValueSelected({
      columnName,
      curFacetSelection,
      isLoading: TRUE_BOOL,
      lastFacetSelection: {
        ...lastFacetSelectionNoSelector,
        selector: SELECT_SINGLE_FACET
      }
    })).toEqual(FALSE_BOOL)
  })
})

describe('readFacetValues works', () => {
  /*
    When we test this method we don't have to worry about stubbing actual
    data, its sufficient to stub only the parts we need.
  */
  const queryRequest: QueryBundleRequest = {
    concreteType: 'org.sagebionetworks.repo.model.table.QueryBundleRequest',
    partMask: 0x2,
    query: {
      sql: 'SELECT * FROM syn123456789'
    }
  }

  it('selects nothing without a selection made', () => {
    const syntheticHTMLInputElement: SyntheticHTMLInputElement [] = [
      {
        checked: false,
        value: 'stub1'
      },
      {
        checked: false,
        value: 'stub2'
      },
      {
        checked: false,
        value: 'stub2'
      },
    ]

    const filter = 'FILTER_STUB'
    const { newQueryRequest } = readFacetValues({
      queryRequest,
      filter,
      htmlCheckboxes: syntheticHTMLInputElement,
      selector: ''
    })
    const expectedRequest = [{
      columnName: filter,
      facetValues: []  // should be empty, isSelected is false for all values
    }] as FacetColumnValuesRequest[]
    // sanity check
    expect(newQueryRequest).toBeDefined()
    expect(newQueryRequest).toMatchObject(
      {
        query: expect.objectContaining(
          {
            selectedFacets: expect.arrayContaining(expectedRequest)
          }
        )
      }
    )
  })

  it('contains a single facet with a single checkbox clicked', () => {
    const singleSelection = 'stub1'
    const syntheticHTMLInputElement: SyntheticHTMLInputElement [] = [
      {
        checked: true,
        value: singleSelection
      },
      {
        checked: false,
        value: 'stub2'
      },
      {
        checked: false,
        value: 'stub2'
      },
    ]

    const filter = 'FILTER_STUB'
    const { newQueryRequest } = readFacetValues({
      queryRequest,
      filter,
      htmlCheckboxes: syntheticHTMLInputElement,
      selector: ''
    })
    const expectedRequest = [{
      columnName: filter,
      facetValues: [singleSelection]
    }] as FacetColumnValuesRequest[]
    expect(newQueryRequest).toMatchObject(
      {
        query: expect.objectContaining(
          {
            selectedFacets: expect.arrayContaining(expectedRequest)
          }
        )
      }
    )
  })

  it('contains multiple facet values with multiple checkboxes selected', () => {
    const stub1 = 'stub1'
    const stub2 = 'stub2'
    const stub3 = 'stub3'
    const syntheticHTMLInputElement: SyntheticHTMLInputElement [] = [
      {
        checked: true,
        value: stub1
      },
      {
        checked: false,
        value: stub2
      },
      {
        checked: false,
        value: stub3
      },
    ]

    const filter = 'FILTER_STUB'
    const { newQueryRequest } = readFacetValues({
      queryRequest,
      filter,
      htmlCheckboxes: syntheticHTMLInputElement,
      selector: ''
    })
    const expectedRequest = [{
      columnName: filter,
      facetValues: [stub1, stub2, stub3]
    }] as FacetColumnValuesRequest[]
    expect(newQueryRequest).toMatchObject(
      {
        query: expect.objectContaining(
          {
            selectedFacets: expect.arrayContaining(expectedRequest)
          }
        )
      }
    )
  })

  it('contains a single facet value when SELECT_SINGLE_FACET is passed', () => {
    const stub1 = 'stub1'
    const stub2 = 'stub2'
    const stub3 = 'stub3'
    const syntheticHTMLInputElement: SyntheticHTMLInputElement [] = [
      {
        checked: true,
        value: stub1
      },
      {
        checked: true,
        value: stub2
      },
      {
        checked: true,
        value: stub3
      },
    ]

    const filter = 'FILTER_STUB'
    const { newQueryRequest } = readFacetValues({
      queryRequest,
      filter,
      htmlCheckboxes: syntheticHTMLInputElement,
      selector: SELECT_SINGLE_FACET,
      value: stub1
    })
    const expectedRequest = [{
      columnName: filter,
      facetValues: [stub1]
    }] as FacetColumnValuesRequest[]
    expect(newQueryRequest).toMatchObject(
      {
        query: expect.objectContaining(
          {
            selectedFacets: expect.arrayContaining(expectedRequest)
          }
        )
      }
    )
  })
})
