import * as React from 'react'
import { shallow } from 'enzyme'
import QueryWrapper from '../../../lib/containers/QueryWrapper'
import syn16787123Json from '../../../mocks/syn16787123.json'
import { SynapseConstants } from '../../../lib/utils/'
import { cloneDeep } from '../../../lib/utils/modules'
import { QueryResultBundle } from '../../../lib/utils/jsonResponses/Table/QueryResultBundle'
import { QueryBundleRequest } from '../../../lib/utils/jsonResponses/Table/QueryBundleRequest'

// utility function
const createShallowComponent = async (mockRequest: QueryBundleRequest, disableLifecycleMethods: boolean = false) => {
  const wrapper = await shallow(
    <QueryWrapper
      initQueryRequest={mockRequest}
      facetName={'projectStatus'}
    />,
    { disableLifecycleMethods }
  )
  const instance = wrapper.instance() as QueryWrapper
  return { instance, wrapper }
}

describe('basic functionality', () => {
  // Test setup
  const SynapseClient = require('../../../lib/utils/SynapseClient')
  SynapseClient.getQueryTableResults = jest.fn(() => Promise.resolve(syn16787123Json))
  SynapseClient.getIntuitiveQueryTableResults = jest.fn(() => Promise.resolve(syn16787123Json))

  const request = {
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
      offset: 0
    }
  }
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
        }
      ]
    }
  }

  it('renders without crashing', async () => {
    const { wrapper } = await createShallowComponent(request, true)
    expect(wrapper).toBeDefined()
  })

  it('componentDidMountWorks', async () => {
    const { instance, wrapper } = await createShallowComponent(request, true)

    expect(wrapper.state()).toEqual(QueryWrapper.initialState)

    const spyOnResetFacetSelection = jest.spyOn(instance, 'addAllFacetsToSelection')
    const spyOnExecute = jest.spyOn(instance, 'executeInitialQueryRequest')

    await instance.componentDidMount()

    expect(spyOnExecute).toHaveBeenCalled()
    expect(SynapseClient.getQueryTableResults).toHaveBeenCalled()
    expect(spyOnResetFacetSelection).toHaveBeenCalled()
    expect(wrapper.state()).toEqual(
      {
        lastQueryRequest,
        data: syn16787123Json,
        isChecked: [],
        isLoading: false,
        isLoadingNewData: false,
        hasMoreData: true
      }
    )
  })

  it('componentDidUpdate works', async () => {
    const { instance, wrapper } = await createShallowComponent(request)

    const newToken = '123'
    const newQueryRequest = cloneDeep(request)
    newQueryRequest.query.sql = 'SELECT * FROM NEW_TABLE'
    const spy = jest.spyOn(instance, 'executeInitialQueryRequest')

    // test login
    wrapper.setProps({
      token: newToken
    })
    expect(spy).toHaveBeenCalled()

    // test new query request
    spy.mockReset()
    wrapper.setProps({
      initQueryRequest: newQueryRequest
    })
    expect(spy).toHaveBeenCalled()
  })

  it('returns the last query request correctly ', async () => {
    const { instance } = await createShallowComponent(request)
    expect(instance.getLastQueryRequest()).toEqual(lastQueryRequest)
  })

  it('Adds the next page of data correctly to the data', async () => {
    const { instance, wrapper } = await createShallowComponent(request)
    await instance.getNextPageOfData(request)
    const isLoading = wrapper.state('isLoading') as boolean
    const lastQueryRequest = wrapper.state('lastQueryRequest') as QueryResultBundle
    expect(isLoading).toEqual(false)
    expect(lastQueryRequest).toEqual(request)
  })

  it('executeQueryRequest works', async () => {
    const { instance, wrapper } = await createShallowComponent(request)

    await instance.executeQueryRequest(request)
    expect(SynapseClient.getIntuitiveQueryTableResults).toHaveBeenCalled()
    expect(wrapper.state()).toEqual({
      isChecked: [],
      isLoadingNewData: false,
      data: syn16787123Json,
      isLoading: false,
      lastQueryRequest: request,
      hasMoreData: true
    })
  })

  it('addAllFacetsToSelection works correctly', async () => {
    const { instance } = await createShallowComponent(request)

    const castData = syn16787123Json as QueryResultBundle
    const output = instance.addAllFacetsToSelection(castData, 'projectStatus')
    expect(output.query.selectedFacets).toEqual(
      [
        {
          columnName: 'projectStatus',
          concreteType: 'org.sagebionetworks.repo.model.table.FacetColumnValuesRequest',
          facetValues: ['Active', 'Completed']
        }
      ]
    )
  })

})
