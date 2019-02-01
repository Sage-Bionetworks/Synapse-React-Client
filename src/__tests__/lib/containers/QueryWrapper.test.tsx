import * as React from 'react'
import { shallow, mount } from 'enzyme'
import QueryWrapper from '../../../lib/containers/QueryWrapper'
import syn16787123Json from '../../../mocks/syn16787123.json'
import { SynapseConstants } from '../../../lib/utils/'
import { cloneDeep } from '../../..//lib/utils/modules'
import { QueryResultBundle } from 'src/lib/utils/jsonResponses/Table/QueryResultBundle'

describe('basic functionality', () => {
  let SynapseClient: any
  const mockRequest = {
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

  beforeAll(() => {
    SynapseClient = require('../../../lib/utils/SynapseClient')
    SynapseClient.getQueryTableResults = jest.fn(() => Promise.resolve(syn16787123Json))
    SynapseClient.getIntuitiveQueryTableResults = jest.fn(() => Promise.resolve(syn16787123Json))
  })

  it('renders without crashing', () => {
    const wrapper = shallow(
      <QueryWrapper
        initQueryRequest={mockRequest}
        token={''}
        facetName={'projectStatus'}
      />
    )
    expect(wrapper).toBeDefined()
  })

  it('componentDidMountWorks', async () => {
    const wrapper = shallow(
      <QueryWrapper
        initQueryRequest={mockRequest}
        facetName={'projectStatus'}
      />
    )

    expect(wrapper.state()).toEqual({
      data: undefined,
      isChecked: [],
      isLoading: true,
      isLoadingNewData: true,
      lastQueryRequest: {}
    })

    const instance = wrapper.instance() as QueryWrapper
    const spy = jest.spyOn(instance, 'resetFacetSelection')
    await instance.componentDidMount()
    expect(SynapseClient.getQueryTableResults).toHaveBeenCalled()
    expect(spy).toHaveBeenCalled()
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
    const wrapper = await mount(
      <QueryWrapper
        initQueryRequest={mockRequest}
        facetName={'projectStatus'}
      />
    )
    const newToken = '123'
    const newQueryRequest = cloneDeep(mockRequest)
    newQueryRequest.query.sql = 'SELECT * FROM NEW_TABLE'

    const instance = wrapper.instance() as QueryWrapper
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
    const wrapper = await mount(
      <QueryWrapper
        initQueryRequest={mockRequest}
        facetName={'projectStatus'}
      />
    )
    const instance = wrapper.instance() as QueryWrapper
    expect(instance.getLastQueryRequest()).toEqual(lastQueryRequest)
  })

  it('Adds the next page of data correctly to the data', async () => {
    const wrapper = await mount(
      <QueryWrapper
        initQueryRequest={mockRequest}
        facetName={'projectStatus'}
      />
    )
    const instance = wrapper.instance() as QueryWrapper
    await instance.getNextPageOfData(mockRequest)
    const data = wrapper.state('data') as QueryResultBundle
    expect(data.queryResult.queryResults.rows.length)
    .toEqual(syn16787123Json.queryResult.queryResults.rows.length * 2)
  })

  it('executeQueryRequest works', async () => {
    const wrapper = await mount(
      <QueryWrapper
        initQueryRequest={mockRequest}
        facetName={'projectStatus'}
      />
    )
    const instance = wrapper.instance() as QueryWrapper
    await instance.executeQueryRequest(mockRequest)
    expect(SynapseClient.getIntuitiveQueryTableResults).toHaveBeenCalled()
    expect(wrapper.state()).toEqual({
      isChecked: [],
      isLoadingNewData: false,
      data: syn16787123Json,
      isLoading: false,
      lastQueryRequest: mockRequest
    })
  })

  it('resets the facet selection correctly', async () => {
    const wrapper = await mount(
      <QueryWrapper
        initQueryRequest={mockRequest}
        facetName={'projectStatus'}
      />
    )
    const instance = wrapper.instance() as QueryWrapper
    const castData = syn16787123Json as QueryResultBundle
    const output = instance.resetFacetSelection(castData, 'dataStatus')
    expect(output.query.selectedFacets).toEqual(
      [
        {
          columnName: 'dataStatus',
          concreteType: 'org.sagebionetworks.repo.model.table.FacetColumnValuesRequest',
          facetValues: ['None', 'Partially Released', 'Published', 'Under Embargo']
        }
      ]
    )
  })

})
