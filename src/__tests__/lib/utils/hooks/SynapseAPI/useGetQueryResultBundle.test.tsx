import { renderHook } from '@testing-library/react-hooks'
import React from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'
import useGetQueryResultBundle from '../../../../../lib/utils/hooks/SynapseAPI/useGetQueryResultBundle'
import {
  QueryBundleRequest,
  QueryResultBundle,
} from '../../../../../lib/utils/synapseTypes'

const wrapper = (props: { children: React.ReactChildren }) => (
  <QueryClientProvider client={new QueryClient()}>
    {props.children}
  </QueryClientProvider>
)

const request: QueryBundleRequest = {
  concreteType: 'org.sagebionetworks.repo.model.table.QueryBundleRequest',
  entityId: 'syn123',
  query: { sql: 'select * from syn123' },
  partMask: 3,
}

const expected: QueryResultBundle = {
  concreteType: 'org.sagebionetworks.repo.model.table.QueryResultBundle',
  queryResult: {
    concreteType: 'org.sagebionetworks.repo.model.table.QueryResult',
    queryResults: {
      tableId: '1234',
      concreteType: 'result',
      etag: '000-111-222',
      headers: [],
      rows: [],
    },
  },
}

const SynapseClient = require('../../../../../lib/utils/SynapseClient')
SynapseClient.getQueryTableResults = jest.fn().mockResolvedValue(expected)

describe('basic functionality', () => {
  it('correctly calls SynapseClient', async () => {
    const sessionToken = 'abcdef'

    const { result, waitFor } = renderHook(
      () => useGetQueryResultBundle(request, sessionToken),
      { wrapper },
    )

    await waitFor(() => result.current.isSuccess)

    expect(SynapseClient.getQueryTableResults).toBeCalledWith(
      request,
      sessionToken,
    )
    expect(result.current.data).toEqual(expected)
  })
})
