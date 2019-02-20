import * as React from 'react'
import { shallow } from 'enzyme'
import { Facets, CheckboxGroup } from '../../../lib/containers/Facets'
// import { SELECT_ALL, DESELECT_ALL  } from '../../../lib/containers/SynapseTable'
import { QueryWrapperChildProps } from '../../../lib/containers/QueryWrapper'
import { SynapseConstants } from '../../../lib'
import syn16787123Json from '../../../mocks/syn16787123.json'
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
  // Test setup
  const SynapseClient = require('../../../lib/utils/SynapseClient')
  SynapseClient.executeQueryRequest = jest.fn()
  // column name that will get filtered on
  const filter = 'tumorType'
  // facet 'value' that will get filtered on
  // const JMML = 'JMML'
  // location of JMML in isChecked
  // const JMMLFacetValuesIndex = 2
  // const facetValuesWithoutJMML = [
  //   'org.sagebionetworks.UNDEFINED_NULL_NOTSET',
  //   'Cutaneous Neurofibroma',
  //   'Low Grade Glioma',
  //   'MPNST',
  //   'Plexiform Neurofibroma',
  //   'Plexiform Neurofibroma | MPNST',
  //   'Plexiform Neurofibroma | MPNST | Cutaneous Neurofibroma',
  //   'Schwannoma',
  //   'Schwannoma | Meningioma',
  //   'SMN'
  // ]
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
    /*
       This isn't 'necessary' to use below (unsure of why its not),
       all the tests will pass without the statement, however, it
       does give a sanity check that no state is bleeding over from
       one test to another.
    */
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

  it('Show All is present when >= 5 facets ', () => {
    const propsWithTumorFacet = {
      ...props,
      filter
    }
    const { wrapper } = createShallowComponent(propsWithTumorFacet)
    expect(wrapper.find('#showAllFacetsButton')).toHaveLength(1)
  })

  it('Select All works ', () => {
    /* TODO:
        Refactor to test query update in its own method
    */
    // const propsWithTumorFacet = {
    //   ...props,
    //   filter
    // }
    // const { instance } = createShallowComponent(propsWithTumorFacet)
    // const mockedEvent = {
    //   preventDefault: jest.fn()
    // } as any

    // instance.handleClick(SELECT_ALL)(mockedEvent)

    // const lengthOfFacetSelection = syn16787123Json.facets.find(el => el.columnName === filter)!.facetValues.length
    // // tslint:disable-next-line:prefer-array-literal
    // const allTrueFacetSelection = new Array(lengthOfFacetSelection).fill(true)
    // expect(updateParentState).toHaveBeenCalledWith({ isChecked: allTrueFacetSelection })
    // expect(executeInitialQueryRequest).toHaveBeenCalled()
  })

  it('Deselect All works ', () => {
    /* TODO:
        Refactor to test query update in its own method
    */
    // const propsWithTumorFacet = {
    //   ...props,
    //   filter
    // }
    // const { instance } = createShallowComponent(propsWithTumorFacet)
    // const mockedEvent = {
    //   preventDefault: jest.fn()
    // } as any

    // // the function updateSelection is curried so we have to call it this way
    // instance.handleClick(DESELECT_ALL)(mockedEvent)
    // // asserts on arguments used from calling updateSelection method above
    // const lengthOfFacetSelection = syn16787123Json.facets.find(el => el.columnName === filter)!.facetValues.length
    // // below is unavoidable
    // // tslint:disable-next-line:prefer-array-literal
    // const allFalseFacetSelection = new Array(lengthOfFacetSelection).fill(false)
    // expect(updateParentState).toHaveBeenCalledWith({ isChecked: allFalseFacetSelection })

    // // expect for the facet in use that all facet values are empty
    // expect(executeQueryRequest).toHaveBeenCalledWith(
    //   expect.objectContaining({
    //     query: expect.objectContaining({
    //       selectedFacets: expect.arrayContaining([
    //         expect.objectContaining({
    //           columnName: filter,
    //           facetValues: []
    //         })
    //       ])
    //     })
    //   })
    // )

  })

  it('handle click with removing a facet value', async () => {
    /* TODO:
        Refactor to test different logic
    */
    // const propsWithTumorFacet = {
    //   ...props,
    //   filter
    // }
    // const { wrapper, instance } = createShallowComponent(propsWithTumorFacet)
    // const mockedEvent = {
    //   preventDefault: jest.fn()
    // } as any
    // const selection = {
    //   columnName: filter,
    //   index: JMMLFacetValuesIndex,
    //   value: JMML,
    //   lastFacetValueSelected: ''
    // }
    // await instance.handleClick(selection)(mockedEvent)

    // // verifications on arguments passed into functions stemming from handle click
    // const queryRequestWithoutJMML = cloneDeep(lastQueryRequest)
    // const facetValues = queryRequestWithoutJMML.query.selectedFacets[1].facetValues
    // facetValues.splice(JMMLFacetValuesIndex, 1)  // remove JMML
    // queryRequestWithoutJMML.query.selectedFacets[1].facetValues = facetValues

    // expect(wrapper.state('showAllFacets')).toEqual(true)
    // // verify it updates parent state correctly
    // expect(updateParentState).toHaveBeenCalledWith({
    //   isChecked: [undefined, undefined, false]
    // })
    // // verify it calls executeQueryRequest without JMML selected
    // // NOTE: the .not after the expect(...) call ensures that we are
    // // NOT getting the following object.
    // expect(executeQueryRequest).not.toHaveBeenCalledWith(
    //   expect.objectContaining({
    //     query: expect.objectContaining({
    //       selectedFacets: expect.arrayContaining([
    //         expect.objectContaining({
    //           columnName: filter,
    //           // expect it to have been called without jmml for
    //           // filter entry in selectedFacets array
    //           facetValues: expect.arrayContaining([
    //             JMML
    //           ])
    //         })
    //       ])
    //     })
    //   })
    // )
  })

  it('handle click works with adding a facet value', async () => {
    /* TODO:
        Refactor to test query update in its own method
    */

  //   // step 1: Remove JMML from facet selection, since the above test verifies that removing a facet
  //   // works we use this as a starting point
  //   const propsWithTumorFacet = {
  //     ...props,
  //     filter
  //   }
  //   const { wrapper, instance } = createShallowComponent(propsWithTumorFacet)
  //   const mockedEvent = {
  //     preventDefault: jest.fn()
  //   } as any
  //   const selection = {
  //     columnName: filter,
  //     index: JMMLFacetValuesIndex,
  //     value: JMML,
  //     lastFacetValueSelected: ''
  //   }
  //   // click JMML 'off'
  //   await instance.handleClick(selection)(mockedEvent)

  //   // Since Facets is usually a child of QueryWrapper, we have to manually mock what QueryWrapper
  //   // would normally do

  //   // verify it updates parent state correctly
  //   expect(updateParentState.mock.calls[0]).toEqual([{ isChecked: [undefined, undefined, false] }])
  //   // setup getLastQueryRequestWithoutJMML
  //   const lastQueryRequestWithoutJMML = cloneDeep(lastQueryRequest)
  //   lastQueryRequestWithoutJMML.query.selectedFacets[1].facetValues = facetValuesWithoutJMML
  //   const getLastQueryRequestWithoutJMML = jest.fn(() => {
  //     return lastQueryRequestWithoutJMML
  //   })

  //   updateParentState.mockReset()
  //   executeQueryRequest.mockReset()

  //   await wrapper.setProps({
  //     isChecked: [undefined, undefined, false],
  //     getLastQueryRequest: getLastQueryRequestWithoutJMML
  //   })

  //   // beginning of the actual test
  //   // Click JMML back 'on'
  //   await instance.handleClick(selection)(mockedEvent)

  //   // verify it updates parent state correctly
  //   expect(updateParentState.mock.calls[0]).toEqual([{ isChecked: [undefined, undefined, true] }])
  //   // verify it calls executeQueryRequest with JMML selected
  //   expect(executeQueryRequest).toHaveBeenLastCalledWith(expect.objectContaining(
  //     {
  //       query: expect.objectContaining({
  //         selectedFacets: expect.arrayContaining([
  //           expect.objectContaining({
  //             columnName: filter,
  //             facetValues: expect.arrayContaining([
  //               JMML
  //             ])
  //           })
  //         ])
  //       })
  //     }
  //   ))
  })

})
