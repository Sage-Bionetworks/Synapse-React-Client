import { getNextPageOfData } from '../../../lib/utils/functions'
import { SynapseConstants } from '../../../lib/utils'
import syn16787123Json from '../../../mocks/query/syn16787123.json'
import { QueryResultBundle } from 'src/lib/utils/synapseTypes/Table/QueryResultBundle.js'
import { cloneDeep } from 'lodash-es'
import { isFacetAvailableAndSupported } from '../../../lib/utils/functions/queryUtils'
import { FacetColumnResult } from '../../../lib/utils/synapseTypes'

describe('get next page of data', () => {
  const sql = 'SELECT * FROM syn16787123'
  const getNextPageOfDataRequest = {
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
  const data = syn16787123Json as QueryResultBundle
  const SynapseClient = require('../../../lib/utils/SynapseClient')
  SynapseClient.getQueryTableResults = jest.fn(() =>
    Promise.resolve(syn16787123Json),
  )

  it('works when there is PAGE_SIZE results coming back', () => {
    getNextPageOfData(getNextPageOfDataRequest, data, '').then(partialState => {
      const lengthOfNewData =
        partialState.data.queryResult.queryResults.rows.length
      const lengthOfOldData = data.queryResult.queryResults.rows.length
      expect(partialState.hasMoreData).toEqual(true)
      expect(lengthOfNewData).toEqual(lengthOfOldData * 2)
    })
  })

  it('works when there is less then PAGE_SIZE results coming back', () => {
    // setup test to return half the number of rows
    const emptyData = cloneDeep(syn16787123Json)
    emptyData.queryResult.queryResults.rows = []
    SynapseClient.getQueryTableResults = jest.fn(() =>
      Promise.resolve(emptyData),
    )

    getNextPageOfData(getNextPageOfDataRequest, data, '').then(partialState => {
      // hasMoreData should be false since there are less than PAGE_SIZE results
      expect(partialState.hasMoreData).toEqual(false)
    })
  })
})

describe('verify isFacetAvailableAndSupported', () => {
  const facetAvailable:FacetColumnResult[] = [{columnName:'study',facetType:'enumeration',concreteType:'org.sagebionetworks.repo.model.table.FacetColumnResultValues'}]
  
  it('facets are available and relevant to the resultset schema', () => {
    expect(isFacetAvailableAndSupported('select * from syn123', facetAvailable)).toEqual(true)
    expect(isFacetAvailableAndSupported('select * from syn123 where a=\'b\'', facetAvailable)).toEqual(true)
  })
  it('facets are unavailable, but would be relevant to the resultset schema', () => {
    expect(isFacetAvailableAndSupported('select * from syn123', [])).toEqual(false)
    expect(isFacetAvailableAndSupported('select * from syn123 where a=\'b\'', undefined)).toEqual(false)
  })
  it('facets are available, but not relevant to the resultset schema', () => {
    expect(isFacetAvailableAndSupported('select count(id) from syn123 group by study', facetAvailable)).toEqual(false)
  })
})
