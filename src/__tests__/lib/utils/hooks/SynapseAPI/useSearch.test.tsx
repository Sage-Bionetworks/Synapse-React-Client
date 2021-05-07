import { renderHook } from '@testing-library/react-hooks'
import React from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'
import {
  useSearch,
  useSearchInfinite,
} from '../../../../../lib/utils/hooks/SynapseAPI/useSearch'
import { EntityType } from '../../../../../lib/utils/synapseTypes'
import {
  SearchQuery,
  SearchResults,
} from '../../../../../lib/utils/synapseTypes/Search'

const wrapper = (props: { children: React.ReactChildren }) => (
  <QueryClientProvider client={new QueryClient()}>
    {props.children}
  </QueryClientProvider>
)

const request: SearchQuery = {
  queryTerm: ['search', 'terms'],
}

const page1: SearchResults = {
  hits: [
    {
      id: 'syn123',
      name: 'Result 1',
      modified_on: 2142424,
      modified_by: '100000',
      etag: '000',
      alias: 'result other name',
      path: { path: [] },
      description: '',
      node_type: EntityType.FILE,
      created_on: 2142424,
      created_by: 'me',
      diagnosis: 'none',
      tissue: '',
      consortium: 'tcga',
      organ: 'lung',
    },
  ],
  found: 2,
  start: 0,
  facets: [],
}

const page2: SearchResults = {
  hits: [
    {
      id: 'syn1234',
      name: 'Result 2',
      modified_on: 2142424,
      modified_by: '100000',
      etag: '000',
      alias: 'result 2 other name',
      path: { path: [] },
      description: '',
      node_type: EntityType.FILE,
      created_on: 2142424,
      created_by: 'me',
      diagnosis: 'none',
      tissue: '',
      consortium: 'tcga',
      organ: 'lung',
    },
  ],
  found: 2,
  start: 1,
  facets: [],
}

const SynapseClient = require('../../../../../lib/utils/SynapseClient')
SynapseClient.searchEntities = jest.fn()

describe('basic functionality', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('correctly calls SynapseClient', async () => {
    SynapseClient.searchEntities.mockResolvedValueOnce(page1)

    const { result, waitFor } = renderHook(() => useSearch(request), {
      wrapper,
    })

    await waitFor(() => {
      return result.current.isSuccess
    })

    expect(SynapseClient.searchEntities).toBeCalledWith(request)
    expect(result.current.data).toEqual(page1)
  })

  it('works with infinite query pagination', async () => {
    SynapseClient.searchEntities
      .mockResolvedValueOnce(page1)
      .mockResolvedValueOnce(page2)

    const { result, waitFor } = renderHook(() => useSearchInfinite(request), {
      wrapper,
    })
    await waitFor(() => result.current.isSuccess)

    expect(SynapseClient.searchEntities).toBeCalledWith(request)
    expect(result.current.data?.pages[0]).toEqual(page1)
    expect(result.current.hasNextPage).toBe(true)

    result.current.fetchNextPage()

    await waitFor(() => result.current.isFetching)
    await waitFor(() => !result.current.isFetching)

    expect(SynapseClient.searchEntities).toBeCalledWith({
      ...request,
      start: 1,
    })
    expect(result.current.data?.pages[1]).toEqual(page2)
    expect(result.current.hasNextPage).toBe(false)
  })
})
