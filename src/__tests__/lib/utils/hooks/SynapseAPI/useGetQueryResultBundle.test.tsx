import { renderHook } from '@testing-library/react-hooks'
import React from 'react'
import useGetQueryResultBundle from '../../../../../lib/utils/hooks/SynapseAPI/useGetQueryResultBundle'
import {
  QueryBundleRequest,
  QueryResultBundle,
} from '../../../../../lib/utils/synapseTypes'
import { MOCK_CONTEXT_VALUE } from '../../../../../mocks/MockSynapseContext'
import { QueryClient } from 'react-query'
import { SynapseContextProvider } from '../../../../../lib/utils/SynapseContext'

const queryClient = new QueryClient()

const wrapper = (props: { children: React.ReactChildren }) => (
  <SynapseContextProvider
    synapseContext={MOCK_CONTEXT_VALUE}
    queryClient={queryClient}
  >
    {props.children}
  </SynapseContextProvider>
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
  beforeEach(() => {
    queryClient.clear()
  })
  it('correctly calls SynapseClient', async () => {
    const { result, waitFor } = renderHook(
      () => useGetQueryResultBundle(request),
      { wrapper },
    )

    await waitFor(() => result.current.isSuccess)

    expect(SynapseClient.getQueryTableResults).toBeCalledWith(
      request,
      MOCK_CONTEXT_VALUE.accessToken,
    )
    expect(result.current.data).toEqual(expected)
  })
})
