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
  accessToken?: string,
  options?: UseQueryOptions<SearchResults, SynapseClientError, SearchResults>,
) {
  return useQuery<SearchResults, SynapseClientError>(
    ['search', accessToken, query],
    () => SynapseClient.searchEntities(query, accessToken),
    options,
  )
}

export function useSearchInfinite(
  query: Omit<SearchQuery, 'start'>,
  accessToken?: string,
  options?: UseInfiniteQueryOptions<
    SearchResults,
    SynapseClientError,
    SearchResults
  >,
) {
  return useInfiniteQuery<SearchResults, SynapseClientError>(
    ['search', accessToken, query],
    async (context: QueryFunctionContext) => {
      return SynapseClient.searchEntities(
        { ...query, start: context.pageParam },
        accessToken,
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
