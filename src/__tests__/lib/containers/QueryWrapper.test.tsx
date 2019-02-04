import * as React from 'react'
import { shallow, mount } from 'enzyme'
import QueryWrapper from '../../../lib/containers/QueryWrapper'
import syn16787123Json from '../../../mocks/syn16787123.json'
import { SynapseConstants } from '../../../lib/utils/'
import { cloneDeep } from '../../../lib/utils/modules'
import { QueryResultBundle } from '../../../lib/utils/jsonResponses/Table/QueryResultBundle'
import { QueryBundleRequest } from '../../../lib/utils/jsonResponses/Table/QueryBundleRequest'

// utility function
const createMountedComponent = async (mockRequest: QueryBundleRequest) => {
  const wrapper = await mount(
    <QueryWrapper
      initQueryRequest={mockRequest}
      facetName={'projectStatus'}
    />
  )
  const instance = wrapper.instance() as QueryWrapper
  return { instance, wrapper }
}

// utility function
const createShallowComponent = (mockRequest: QueryBundleRequest) => {
  const wrapper = shallow(
    <QueryWrapper
      initQueryRequest={mockRequest}
      facetName={'projectStatus'}
    />
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
      // NOTE: queryCount has been removed from the partMask here
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
      // NOTE: queryCount has been removed from the partMask here
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

  it('renders without crashing', () => {
    const { wrapper } = createShallowComponent(request)
    expect(wrapper).toBeDefined()
  })

  it('componentDidMountWorks', async () => {
    const { instance, wrapper } = createShallowComponent(request)

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
        isLoadingNewData: false
      }
    )
  })

  it('componentDidUpdate works', async () => {
    const { instance, wrapper } = await createMountedComponent(request)

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
    const { instance } = await createMountedComponent(request)
    expect(instance.getLastQueryRequest()).toEqual(lastQueryRequest)
  })

  it('Adds the next page of data correctly to the data', async () => {
    const { instance, wrapper } = await createMountedComponent(request)
    await instance.getNextPageOfData(request)
    const data = wrapper.state('data') as QueryResultBundle
    expect(data.queryResult.queryResults.rows.length)
    .toEqual(syn16787123Json.queryResult.queryResults.rows.length * 2)
  })

  it('executeQueryRequest works', async () => {
    const { instance, wrapper } = await createMountedComponent(request)

    await instance.executeQueryRequest(request)
    expect(SynapseClient.getIntuitiveQueryTableResults).toHaveBeenCalled()
    expect(wrapper.state()).toEqual({
      isChecked: [],
      isLoadingNewData: false,
      data: syn16787123Json,
      isLoading: false,
      lastQueryRequest: request
    })
  })

  it('addAllFacetsToSelection works correctly', async () => {
    const { instance } = await createMountedComponent(request)

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
