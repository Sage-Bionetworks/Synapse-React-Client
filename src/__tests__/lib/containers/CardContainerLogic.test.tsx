import * as React from 'react'
import { shallow } from 'enzyme'
import syn16787123Json from '../../../mocks/query/syn16787123.json'
import CardContainerLogic, {
  CardContainerLogicProps,
} from '../../../lib/containers/CardContainerLogic'
import { SynapseConstants } from '../../../lib'
import CardContainer from '../../../lib/containers/CardContainer'
import {
  QueryResultBundle,
  QueryBundleRequest,
} from '../../../lib/utils/synapseTypes/'

const createShallowComponent = async (
  props: CardContainerLogicProps,
  disableLifecycleMethods: boolean = false,
) => {
  const wrapper = await shallow(<CardContainerLogic {...props} />, {
    disableLifecycleMethods,
  })
  const instance = wrapper.instance() as CardContainerLogic
  return { wrapper, instance }
}

describe('it performs basic functionality', () => {
  const sql = 'SELECT * FROM syn16787123'
  const SynapseClient = require('../../../lib/utils/SynapseClient')
  SynapseClient.getIntuitiveQueryTableResults = jest.fn(() =>
    Promise.resolve(syn16787123Json),
  )
  SynapseClient.getQueryTableResults = jest.fn(() =>
    Promise.resolve(syn16787123Json),
  )
  const props = {
    sql,
    unitDescription: 'files',
    type: SynapseConstants.STUDY,
  }

  it('renders without crashing', async () => {
    const { wrapper } = await createShallowComponent(props, true)
    expect(wrapper).toBeDefined()
    expect(wrapper.find(CardContainer)).toHaveLength(1)
  })

  it('mounts correctly', async () => {
    const { wrapper, instance } = await createShallowComponent(props, true)
    // test state was setup correctly
    expect(wrapper.state()).toEqual(CardContainerLogic.defaultState)

    // verify executeInitialQueryRequest was called
    const spy = jest.spyOn(instance, 'executeInitialQueryRequest')
    // await because there's async operations
    await instance.componentDidMount()
    expect(spy).toHaveBeenCalled()

    // verify state was updated correctly, this also tests that executeInitialQueryRequest functions correctly
    expect(wrapper.state()).toEqual({
      data: syn16787123Json,
      queryRequest: {
        concreteType: 'org.sagebionetworks.repo.model.table.QueryBundleRequest',
        entityId: 'syn16787123',
        partMask:
          SynapseConstants.BUNDLE_MASK_QUERY_COLUMN_MODELS |
          SynapseConstants.BUNDLE_MASK_QUERY_FACETS |
          SynapseConstants.BUNDLE_MASK_QUERY_RESULTS,
        // NOTE: queryCount has been removed from the partMask here
        query: {
          sql,
          limit: 25,
          offset: 0,
        },
      },
      isLoading: false,
      totalResultsNoFacet: syn16787123Json.queryCount,
      hasMoreData: true,
    })
  })

  it('grabs the next page of data', async () => {
    const { wrapper, instance } = await createShallowComponent(props)
    // test grabbing next page of data
    const getNextPageOfDataRequest: QueryBundleRequest = {
      concreteType: 'org.sagebionetworks.repo.model.table.QueryBundleRequest',
      partMask:
        SynapseConstants.BUNDLE_MASK_QUERY_COLUMN_MODELS |
        SynapseConstants.BUNDLE_MASK_QUERY_FACETS |
        SynapseConstants.BUNDLE_MASK_QUERY_RESULTS,
      entityId: 'syn16787123',
      query: {
        sql,
        limit: 25,
        offset: 25,
      },
    }

    // await because there's async operations
    await instance.getNextPageOfData(getNextPageOfDataRequest)

    /*
      verify not loading after call finishes
    */
    const isLoading: boolean = wrapper.state('isLoading')
    const lastQueryRequest = wrapper.state('queryRequest') as QueryResultBundle
    expect(isLoading).toEqual(false)
    expect(lastQueryRequest).toEqual(getNextPageOfDataRequest)
  })

  it('returns the last query request', async () => {
    const { instance } = await createShallowComponent(props)

    expect(instance.getLastQueryRequest()).toEqual({
      concreteType: 'org.sagebionetworks.repo.model.table.QueryBundleRequest',
      entityId: 'syn16787123',
      partMask:
        SynapseConstants.BUNDLE_MASK_QUERY_COLUMN_MODELS |
        SynapseConstants.BUNDLE_MASK_QUERY_FACETS |
        SynapseConstants.BUNDLE_MASK_QUERY_RESULTS,
      query: {
        sql,
        limit: 25,
        offset: 0,
      },
    })
  })

  it('componenetDidUpdate works', async () => {
    const { wrapper, instance } = await createShallowComponent(props)

    const newSql = 'SELECT * FROM OTHER_TABLE'
    const newToken = '123'
    const spy = jest.spyOn(instance, 'executeInitialQueryRequest')
    // if sql changes in props then we expect the component to have called executeInitialQueryRequest
    // since there's an entirely new sql statement
    await wrapper.setProps({
      sql: newSql,
      token: '',
    })

    spy.mockReset()
    // if token changes in props then we expect the component to have called executeInitialQueryRequest
    await wrapper.setProps({ sql: newSql, token: newToken })
    expect(spy).toHaveBeenCalled()

    spy.mockReset()
    // if token changes in props then we expect the component to have called executeInitialQueryRequest
    await wrapper.setProps({ sql: newSql, token: newToken })
    expect(spy).toHaveBeenCalledTimes(0)
  })
})
