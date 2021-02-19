import {
  QueryOptions,
  useInfiniteQuery,
  UseInfiniteQueryOptions,
  useQuery,
} from 'react-query'
import { SynapseClient } from '../..'
import { SynapseClientError } from '../../SynapseClient'
import { SearchQuery, SearchResults } from '../../synapseTypes/Search'

const DEFAULT_SEARCH_RESULTS_SIZE = 30

export function useSearch(
  query: SearchQuery,
  sessionToken?: string,
  options?: QueryOptions<SearchResults, SynapseClientError, SearchResults>,
) {
  return useQuery<SearchResults, SynapseClientError>(
    ['search', sessionToken, query],
    () => SynapseClient.searchEntities(query, sessionToken),
    options,
  )
}

export function useSearchInfinite(
  query: Omit<SearchQuery, 'start'>,
  sessionToken?: string,
  options?: UseInfiniteQueryOptions<
    SearchResults,
    SynapseClientError,
    SearchResults
  >,
) {
  return useInfiniteQuery<SearchResults, SynapseClientError>(
    ['search', sessionToken, query],
    async context => {
      query.size = query.size ?? DEFAULT_SEARCH_RESULTS_SIZE
      return await SynapseClient.searchEntities(
        { ...query, start: context.pageParam },
        sessionToken,
      )
    },
    {
      ...options,
      getNextPageParam: page => {
        query.size = query.size ?? DEFAULT_SEARCH_RESULTS_SIZE
        if (page.start + query.size < page.found) {
          return page.start + (query.size ?? DEFAULT_SEARCH_RESULTS_SIZE)
        } else {
          return null
        }
      },
    },
  )
}
