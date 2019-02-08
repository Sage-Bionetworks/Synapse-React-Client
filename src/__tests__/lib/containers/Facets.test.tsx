import * as React from 'react'
import { shallow } from 'enzyme'
import { Facets, CheckboxGroup, SELECT_ALL, DESELECT_ALL } from '../../../lib/containers/Facets'
import { QueryWrapperChildProps } from '../../../lib/containers/QueryWrapper'
import { SynapseConstants } from '../../../lib'
import syn16787123Json from '../../../mocks/syn16787123.json'
// import { cloneDeep } from '../../../lib/utils/modules'
import { QueryResultBundle } from '../../../lib/utils/jsonResponses/Table/QueryResultBundle'
import { cloneDeep } from '../../../lib/utils/modules'

const createShallowComponent = (props: QueryWrapperChildProps) => {
  const wrapper = shallow(
      <Facets
        {...props}
      />
    )
  const instance = wrapper.instance() as Facets
  return { wrapper, instance }
}

describe('it performs basic functionality', () => {
  const SynapseClient = require('../../../lib/utils/SynapseClient')
  SynapseClient.executeQueryRequest = jest.fn()
  const filter = 'tumorType'
  const JMML = 'JMML'
  const JMMLFacetValuesIndex = 2
  const lastQueryRequest = {
    concreteType: 'org.sagebionetworks.repo.model.table.QueryBundleRequest',
    partMask:
      SynapseConstants.BUNDLE_MASK_QUERY_COLUMN_MODELS |
      SynapseConstants.BUNDLE_MASK_QUERY_FACETS |
      SynapseConstants.BUNDLE_MASK_QUERY_RESULTS
    ,
    query: {
      sql: 'SELECT * FROM syn16787123',
      isConsistent: false,
      limit: 25,
      offset: 0,
      selectedFacets: [
        {
          columnName: 'projectStatus',
          concreteType: 'org.sagebionetworks.repo.model.table.FacetColumnValuesRequest',
          facetValues: [
            'Active',
            'Completed',
          ],
        },
        {
          columnName: 'tumorType',
          concreteType: 'org.sagebionetworks.repo.model.table.FacetColumnValuesRequest',
          facetValues: [
            'org.sagebionetworks.UNDEFINED_NULL_NOTSET',
            'Cutaneous Neurofibroma',
            'JMML',
            'Low Grade Glioma',
            'MPNST',
            'Plexiform Neurofibroma',
            'Plexiform Neurofibroma | MPNST',
            'Plexiform Neurofibroma | MPNST | Cutaneous Neurofibroma',
            'Schwannoma',
            'Schwannoma | Meningioma',
            'SMN'
          ],
        }
      ]
    }
  }
  const castData = syn16787123Json as QueryResultBundle
  const updateParentState = jest.fn()
  const executeInitialQueryRequest = jest.fn()
  const executeQueryRequest = jest.fn()
  const getLastQueryRequest = jest.fn(() => cloneDeep(lastQueryRequest))

  const props = {
    updateParentState,
    executeInitialQueryRequest,
    executeQueryRequest,
    getLastQueryRequest,
    data: castData,
    filter: 'projectStatus',
    isChecked: []
  }

  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('renders without crashing', () => {
    const { wrapper } = createShallowComponent(props)
    expect(wrapper).toBeDefined()
    expect(wrapper.find(CheckboxGroup)).toHaveLength(1)
  })

  it('Show All is not present when < 5 facets ', () => {
    const { wrapper } = createShallowComponent(props)
    expect(wrapper.find('#showAllFacetsButton')).toHaveLength(0)
  })

  it('Show All is present when < 5 facets ', () => {
    const propsWithTumorFacet = {
      ...props,
      filter
    }
    const { wrapper } = createShallowComponent(propsWithTumorFacet)
    expect(wrapper.find('#showAllFacetsButton')).toHaveLength(1)
  })

  it('Select All works ', () => {
    const propsWithTumorFacet = {
      ...props,
      filter
    }
    const { instance } = createShallowComponent(propsWithTumorFacet)
    const mockedEvent = {
      preventDefault: jest.fn()
    } as any

    instance.updateSelection(SELECT_ALL)(mockedEvent)

    const lengthOfFacetSelection = syn16787123Json.facets.find(el => el.columnName === filter)!.facetValues.length
    // tslint:disable-next-line:prefer-array-literal
    const allTrueFacetSelection = new Array(lengthOfFacetSelection).fill(true)
    expect(updateParentState).toHaveBeenCalledWith({ isChecked: allTrueFacetSelection })
    expect(executeInitialQueryRequest).toHaveBeenCalled()
  })

  it('Deselect All works ', () => {
    const propsWithTumorFacet = {
      ...props,
      filter
    }
    const { instance } = createShallowComponent(propsWithTumorFacet)
    const mockedEvent = {
      preventDefault: jest.fn()
    } as any

    instance.updateSelection(DESELECT_ALL)(mockedEvent)

    const lengthOfFacetSelection = syn16787123Json.facets.find(el => el.columnName === filter)!.facetValues.length
    // below is unavoidabl
    // tslint:disable-next-line:prefer-array-literal
    const allFalseFacetSelection = new Array(lengthOfFacetSelection).fill(false)
    expect(updateParentState).toHaveBeenCalledWith({ isChecked: allFalseFacetSelection })
    const requestWithNoFacetsSelected = cloneDeep(lastQueryRequest)
    // zero out the faceted selection
    requestWithNoFacetsSelected.query.selectedFacets.find(el => el.columnName === filter)!.facetValues = []
    expect(executeQueryRequest).toHaveBeenCalledWith(requestWithNoFacetsSelected)
  })

  it('handle click with removing a facet value', async () => {
    const propsWithTumorFacet = {
      ...props,
      filter
    }
    const { wrapper, instance } = createShallowComponent(propsWithTumorFacet)
    const mockedEvent = {
      preventDefault: jest.fn()
    } as any
    const selection = {
      index: JMMLFacetValuesIndex,
      value: JMML
    }
    await instance.handleClick(selection)(mockedEvent)
    const queryRequestWithoutJMML = cloneDeep(lastQueryRequest)
    const facetValues = queryRequestWithoutJMML.query.selectedFacets[1].facetValues
    facetValues.splice(JMMLFacetValuesIndex, 1)  // remove JMML
    queryRequestWithoutJMML.query.selectedFacets[1].facetValues = facetValues

    expect(wrapper.state('showAllFacets')).toEqual(true)
    // verify it updates parent state correctly
    expect(updateParentState).toHaveBeenCalledWith({
      isChecked: [undefined, undefined, false]
    })
    // verify it calls executeQueryRequest with JMML selected
    expect(executeQueryRequest).toHaveBeenCalledWith(queryRequestWithoutJMML)
  })

  it.only('handle click works with adding a facet value', async () => {
    /* Overview:
        1. To mock adding a facet value we have to give a query request that's last selection
        did not contain the facet being selected. Additionally, isChecked, although only used for the sake of
        keeping StackedBarChart in sync, should also have its state indicating that the facet value is deselected.
        by equaling false at the index of the facet
        2. The resulting query that it builds will add that facet value to the facet values array
        at the END of it
    */

    // step 1. remove JMML from the facet selection
    const lastQueryRequestWithoutJMML = cloneDeep(lastQueryRequest)
    lastQueryRequestWithoutJMML.query.selectedFacets
        .find(el => el.columnName === filter)!.facetValues
        .splice(JMMLFacetValuesIndex, 1)

    // setup props to use the last query not having JMML
    const propsWithTumorFacet = {
      ...props,
      filter,
      getLastQueryRequest : jest.fn(() => cloneDeep(lastQueryRequestWithoutJMML)),
      isChecked: [true, true, false]
    }
    const { wrapper, instance } = createShallowComponent(propsWithTumorFacet)
    const mockedEvent = { preventDefault: jest.fn() } as any
    const selection = { index: 2, value: JMML }
    await instance.handleClick(selection)(mockedEvent)

    // step 2. The API should have been called with JMML at the end of the array, so we copy/delete/add the value
    // at the end of the array.
    const queryRequestWithJMMLAtEnd = cloneDeep(lastQueryRequest)
    queryRequestWithJMMLAtEnd.query.selectedFacets[1].facetValues.splice(JMMLFacetValuesIndex, 1)
    queryRequestWithJMMLAtEnd.query.selectedFacets[1].facetValues.push(JMML)

    expect(wrapper.state('showAllFacets')).toEqual(true)
    // verify it updates parent state correctly
    expect(updateParentState).toHaveBeenCalledWith({
      isChecked: [true, true, true]
    })
    // verify it calls executeQueryRequest with JMML selected
    expect(executeQueryRequest).toHaveBeenCalledWith(queryRequestWithJMMLAtEnd)
  })

})
