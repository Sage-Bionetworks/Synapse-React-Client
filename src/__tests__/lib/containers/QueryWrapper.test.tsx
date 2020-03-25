import * as React from 'react'
import { shallow } from 'enzyme'
import QueryWrapper, {
  QueryWrapperState,
} from '../../../lib/containers/QueryWrapper'
import syn16787123Json from '../../../mocks/syn16787123.json'
import { SynapseConstants } from '../../../lib/utils/'
import { QueryBundleRequest } from 'lib/utils/synapseTypes/'
import { cloneDeep } from 'lodash-es'

// utility function
const createShallowComponent = async (
  mockRequest: QueryBundleRequest,
  disableLifecycleMethods: boolean = false,
) => {
  const wrapper = await shallow(
    <QueryWrapper initQueryRequest={mockRequest} facet={'projectStatus'} />,
    { disableLifecycleMethods },
  )
  const instance = wrapper.instance() as QueryWrapper
  return { instance, wrapper }
}

// Test setup
const SynapseClient = require('../../../lib/utils/SynapseClient')
SynapseClient.getQueryTableResults = jest.fn(() =>
  Promise.resolve(syn16787123Json),
)
SynapseClient.getIntuitiveQueryTableResults = jest.fn(() =>
  Promise.resolve(syn16787123Json),
)

const lastQueryRequest: QueryBundleRequest = {
  concreteType: 'org.sagebionetworks.repo.model.table.QueryBundleRequest',
  partMask:
    SynapseConstants.BUNDLE_MASK_QUERY_COLUMN_MODELS |
    SynapseConstants.BUNDLE_MASK_QUERY_FACETS |
    SynapseConstants.BUNDLE_MASK_QUERY_RESULTS,
  entityId: 'syn16787123',
  query: {
    sql: 'SELECT * FROM syn16787123',
    isConsistent: false,
    limit: 25,
    offset: 0,
  },
}

describe('basic functionality', () => {
  it('renders without crashing', async () => {
    const { wrapper } = await createShallowComponent(lastQueryRequest, true)
    expect(wrapper).toBeDefined()
  })

  it('componentDidMountWorks', async () => {
    const { instance, wrapper } = await createShallowComponent(
      lastQueryRequest,
      true,
    )

    const spyOnExecute = jest.spyOn(instance, 'executeInitialQueryRequest')
    await instance.componentDidMount()
    expect(spyOnExecute).toHaveBeenCalled()
    expect(SynapseClient.getQueryTableResults).toHaveBeenCalled()
    const state = wrapper.state() as QueryWrapperState
    expect(state.isAllFilterSelectedForFacet).toEqual({
      dataStatus: true,
      diseaseFocus: true,
      fundingAgency: true,
      projectStatus: true,
      tumorType: true,
    })
  })

  it('componentDidUpdate works', async () => {
    const { instance, wrapper } = await createShallowComponent(lastQueryRequest)

    const newToken = '123'
    const spyOnExecuteQueryRequest = jest.spyOn(instance, 'executeQueryRequest')

    // test login
    wrapper.setProps({
      token: newToken,
    })
    expect(spyOnExecuteQueryRequest).toHaveBeenCalled()

    const spyOnExecuteInitQueryRequest = jest.spyOn(
      instance,
      'executeInitialQueryRequest',
    )
    const newQueryRequest = cloneDeep(lastQueryRequest)
    newQueryRequest.query.sql = 'SELECT * FROM NEW_TABLE'
    // test new query lastQueryRequest
    wrapper.setProps({
      initQueryRequest: newQueryRequest,
    })
    expect(spyOnExecuteInitQueryRequest).toHaveBeenCalled()
  })

  it('returns the last query lastQueryRequest correctly ', async () => {
    const { instance } = await createShallowComponent(lastQueryRequest)
    expect(instance.getLastQueryRequest()).toEqual(lastQueryRequest)
  })

  it('executeQueryRequest works', async () => {
    const { instance, wrapper } = await createShallowComponent(lastQueryRequest)
    const state = wrapper.state() as QueryWrapperState
    await instance.executeQueryRequest(lastQueryRequest)
    const location = window.location
    expect(location.search).toContain('QueryWrapper0')
    const query = JSON.parse(
      decodeURIComponent(location.search.split('QueryWrapper0=')[1]),
    )
    expect(query.sql).toEqual(lastQueryRequest.query.sql)
    expect(SynapseClient.getQueryTableResults).toHaveBeenCalled()
    expect(state.hasMoreData).toEqual(true)
  })
})

describe('deep linking', () => {
  it('when there are no searchParams', async () => {
    window.history.pushState({}, 'Page Title', '/any/url/you/like')
    const { instance } = await createShallowComponent(lastQueryRequest)
    expect(instance.getLastQueryRequest()).toEqual(lastQueryRequest)
  })
  it('when there are no applicable search params', async () => {
    window.history.pushState(
      {},
      'Page Title',
      '/any/url/you/like?someparam=someValue',
    )
    const { instance } = await createShallowComponent(lastQueryRequest)
    expect(instance.getLastQueryRequest()).toEqual(lastQueryRequest)
  })

  it('when there is a single param in the url', async () => {
    const lqr = cloneDeep(lastQueryRequest)
    lqr.query.sql = 'SELECT * FROM syn12345'
    window.history.pushState(
      {},
      'Page Title',
      '/any/url/you/like?QueryWrapper0=' +
        encodeURIComponent(JSON.stringify(lqr.query)),
    )
    const { instance } = await createShallowComponent(lastQueryRequest)
    const lastQuery = instance.getLastQueryRequest()
    // expect(lastQuery).not.toEqual(lastQueryRequest)
    expect(lastQuery.entityId).toBe('syn12345')
    expect(lastQuery.query.sql).toBe(lqr.query.sql)
  })
  it('when there are multiple params in the url', async () => {
    const lqr = cloneDeep(lastQueryRequest)
    lqr.query.sql = 'SELECT * FROM syn12345'
    window.history.pushState(
      {},
      'Page Title',
      '/any/url/you/like?someotherParam=param&QueryWrapper0=' +
        encodeURIComponent(JSON.stringify(lqr.query)),
    ) + '&anotherPram=somethingElse'
    const { instance } = await createShallowComponent(lastQueryRequest)
    const lastQuery = instance.getLastQueryRequest()
    expect(lastQuery).not.toEqual(lastQueryRequest)
    expect(lastQuery.entityId).toBe('syn12345')
    expect(lastQuery.query.sql).toBe(lqr.query.sql)
  })
})
