import * as React from 'react'
import { shallow, mount } from 'enzyme'
import syn16787123Json from '../../../mocks/syn16787123.json'
import SynapseTableCardViewWrapper from '../../../lib/containers/SynapseTableCardViewWrapper'
import { SynapseConstants } from '../../../lib'
import SynapseTableCardView from '../../../lib/containers/SynapseTableCardView'
import { QueryResultBundle } from 'src/lib/utils/jsonResponses/Table/QueryResultBundle.js'

describe('it performs basic functionality', () => {
  let SynapseClient
  const sql = 'SELECT * FROM syn16787123'

  beforeAll(() => {
    SynapseClient = require('../../../lib/utils/SynapseClient')
    SynapseClient.getIntuitiveQueryTableResults = jest.fn(() => Promise.resolve(syn16787123Json))
    SynapseClient.getQueryTableResults = jest.fn(() => Promise.resolve(syn16787123Json))
  })

  it('renders without crashing', () => {
    const wrapper = shallow(
      <SynapseTableCardViewWrapper
        sql={sql}
        unitDescription="files"
        type={SynapseConstants.STUDY}
      />
    )
    expect(wrapper).toBeDefined()
  })

  it('renders a SynapseTableCardView', async () => {
    const wrapper = shallow(
      <SynapseTableCardViewWrapper
        sql={sql}
        unitDescription="files"
        type={SynapseConstants.STUDY}
      />
    )
    expect(wrapper).toBeDefined()
    expect(wrapper.find(SynapseTableCardView)).toHaveLength(1)
  })

  it('mounts correctly', async () => {
    const wrapper = shallow(
      <SynapseTableCardViewWrapper
        sql={sql}
        unitDescription="files"
        type={SynapseConstants.STUDY}
      />
    )
    // test state was setup correctly
    expect(wrapper.state()).toEqual(
      {
        data: undefined,
        isLoading: true,
        isLoadingNewData: true,
        queryRequest: {},
        totalResultsNoFacet: 0
      }
    )

    const instance = wrapper.instance() as SynapseTableCardViewWrapper
    // verify executeInitialQueryRequest was called
    const spy = jest.spyOn(instance, 'executeInitialQueryRequest')
    // await because there's async operations
    await instance.componentDidMount()
    expect(spy).toHaveBeenCalled()

    // verify state was updated correctly, this also tests that executeInitialQueryRequest functions correctly
    expect(wrapper.state()).toEqual(
      {
        data: syn16787123Json,
        queryRequest: {
          concreteType: 'org.sagebionetworks.repo.model.table.QueryBundleRequest',
          partMask:
            SynapseConstants.BUNDLE_MASK_QUERY_COLUMN_MODELS |
            SynapseConstants.BUNDLE_MASK_QUERY_FACETS |
            SynapseConstants.BUNDLE_MASK_QUERY_RESULTS
            // NOTE: queryCount has been removed from the partMask here
          ,
          query: {
            sql,
            isConsistent: false,
            limit: 25,
            offset: 0
          }
        },
        isLoading: false,
        isLoadingNewData: false,
        totalResultsNoFacet: syn16787123Json.queryCount
      }
    )
  })

  it('grabs the next page of data', async () => {
    const wrapper = await mount(
      <SynapseTableCardViewWrapper
        sql={sql}
        unitDescription="files"
        type={SynapseConstants.STUDY}
      />
    )

    const instance = wrapper.instance() as SynapseTableCardViewWrapper
    // test grabbing next page of data
    const getNextPageOfDataRequest = {
      concreteType: 'org.sagebionetworks.repo.model.table.QueryBundleRequest',
      partMask:
        SynapseConstants.BUNDLE_MASK_QUERY_COLUMN_MODELS |
        SynapseConstants.BUNDLE_MASK_QUERY_FACETS |
        SynapseConstants.BUNDLE_MASK_QUERY_RESULTS
      ,
      query: {
        sql,
        isConsistent: false,
        limit: 25,
        offset: 25
      }
    }

    // await because there's async operations
    await instance.getNextPageOfData(getNextPageOfDataRequest)

    // grab the data from the state
    const data: QueryResultBundle = wrapper.state('data')
    // Since the stubbed method for getQueryTableResults returns syn16787123Json again
    // we expect the results to be twice the length
    expect(data.queryResult.queryResults.rows.length)
    .toEqual(syn16787123Json.queryResult.queryResults.rows.length * 2)
  })

  it('returns the last query request', async () => {
    const wrapper = await mount(
      <SynapseTableCardViewWrapper
        sql={sql}
        unitDescription="files"
        type={SynapseConstants.STUDY}
      />
    )

    const instance = wrapper.instance() as SynapseTableCardViewWrapper
    expect(instance.getLastQueryRequest()).toEqual({
      concreteType: 'org.sagebionetworks.repo.model.table.QueryBundleRequest',
      partMask:
        SynapseConstants.BUNDLE_MASK_QUERY_COLUMN_MODELS |
        SynapseConstants.BUNDLE_MASK_QUERY_FACETS |
        SynapseConstants.BUNDLE_MASK_QUERY_RESULTS
      ,
      query: {
        sql,
        isConsistent: false,
        limit: 25,
        offset: 0
      }
    })
  })

  it('componenetDidUpdate works', async () => {
    const wrapper = await mount(
      <SynapseTableCardViewWrapper
        sql={sql}
        unitDescription="files"
        type={SynapseConstants.STUDY}
        token={''}
      />
    )

    const newSql = 'SELECT * FROM OTHER_TABLE'
    const newToken = '123'
    const instance = wrapper.instance() as SynapseTableCardViewWrapper
    const spy = jest.spyOn(instance, 'executeInitialQueryRequest')
    // if sql changes in props then we expect the component to have called executeInitialQueryRequest
    // since there's an entirely new sql statement
    await wrapper.setProps({
      sql: newSql,
      token: ''
    })

    spy.mockReset()
    // if token changes in props then we expect the component to have called executeInitialQueryRequest
    await wrapper.setProps({ sql: newSql, token: newToken, })
    expect(spy).toHaveBeenCalled()

    spy.mockReset()
    // if token changes in props then we expect the component to have called executeInitialQueryRequest
    await wrapper.setProps({ sql: newSql, token: newToken, })
    expect(spy).toHaveBeenCalledTimes(0)
  })

})
