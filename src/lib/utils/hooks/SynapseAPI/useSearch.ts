import {
  QueryFunctionContext,
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
    async (context: QueryFunctionContext) => {
      return SynapseClient.searchEntities(
        { ...query, start: context.pageParam },
        sessionToken,
      )
    },
    {
      ...options,
      getNextPageParam: prevPage => {
        if (prevPage.start + prevPage.hits.length === prevPage.found) {
          return null
        } else {
          return prevPage.start + prevPage.hits.length
        }
      },
    },
  )
}
