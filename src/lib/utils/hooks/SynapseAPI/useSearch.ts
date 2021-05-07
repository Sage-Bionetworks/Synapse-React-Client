import {
  QueryFunctionContext,
  useInfiniteQuery,
  UseInfiniteQueryOptions,
  useQuery,
  UseQueryOptions,
} from 'react-query'
import { SynapseClient } from '../..'
import { SynapseClientError } from '../../SynapseClient'
import { SearchQuery, SearchResults } from '../../synapseTypes/Search'

export function useSearch(
  query: SearchQuery,
  options?: UseQueryOptions<SearchResults, SynapseClientError, SearchResults>,
) {
  return useQuery<SearchResults, SynapseClientError>(
    ['search', query],
    () => SynapseClient.searchEntities(query),
    options,
  )
}

export function useSearchInfinite(
  query: Omit<SearchQuery, 'start'>,
  options?: UseInfiniteQueryOptions<
    SearchResults,
    SynapseClientError,
    SearchResults
  >,
) {
  return useInfiniteQuery<SearchResults, SynapseClientError>(
    ['search', query],
    async (context: QueryFunctionContext) => {
      return SynapseClient.searchEntities({
        ...query,
        start: context.pageParam,
      })
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
