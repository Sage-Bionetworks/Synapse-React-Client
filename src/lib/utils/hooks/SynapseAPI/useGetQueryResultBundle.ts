import {
  QueryFunctionContext,
  QueryKey,
  useInfiniteQuery,
  UseInfiniteQueryOptions,
  useQuery,
  UseQueryOptions,
} from 'react-query'
import { SynapseClient } from '../..'
import { SynapseClientError } from '../../SynapseClient'
import {
  BUNDLE_MASK_QUERY_RESULTS,
  DEFAULT_PAGE_SIZE,
} from '../../SynapseConstants'
import { useSynapseContext } from '../../SynapseContext'
import {
  AsynchronousJobStatus,
  QueryBundleRequest,
  QueryResultBundle,
} from '../../synapseTypes'

export default function useGetQueryResultBundle(
  queryBundleRequest: QueryBundleRequest,
  options?: UseQueryOptions<QueryResultBundle, SynapseClientError>,
) {
  const { accessToken } = useSynapseContext()

  return useQuery<QueryResultBundle, SynapseClientError>(
    ['queryResultBundle', queryBundleRequest],
    () => SynapseClient.getQueryTableResults(queryBundleRequest, accessToken),
    options,
  )
}

export function useInfiniteQueryResultBundle(
  queryBundleRequest: QueryBundleRequest,
  options?: UseInfiniteQueryOptions<
    AsynchronousJobStatus<QueryBundleRequest, QueryResultBundle>,
    SynapseClientError
  >,
) {
  const { accessToken } = useSynapseContext()

  return useInfiniteQuery<
    AsynchronousJobStatus<QueryBundleRequest, QueryResultBundle>,
    SynapseClientError
  >(
    ['queryResultBundle', queryBundleRequest, 'infinite'],
    (context: QueryFunctionContext<QueryKey, string>) => {
      const offset = context.pageParam ? parseInt(context.pageParam) : 0
      return SynapseClient.getQueryTableAsyncJobResults(
        {
          ...queryBundleRequest,
          query: {
            ...queryBundleRequest.query,
            offset: offset,
          },
          // if we're on the first page, send the original partMask
          // otherwise, just ask for the query results (if they're in the original partMask)
          // as it's the only part that changes between pages
          partMask:
            offset !== 0
              ? queryBundleRequest.partMask & BUNDLE_MASK_QUERY_RESULTS
              : queryBundleRequest.partMask,
        },
        accessToken,
      )
    },
    {
      ...options,
      getPreviousPageParam: firstPage => {
        const request = firstPage.requestBody
        if (request.query.offset == null || request.query.offset === 0) {
          return undefined
        }
        const pageSize = request.query.limit ?? DEFAULT_PAGE_SIZE

        return request.query.offset - pageSize
      },
      getNextPageParam: (page, allPages) => {
        const request = page.requestBody
        const pageSize = request.query.limit ?? DEFAULT_PAGE_SIZE
        const totalQueryResultCount = allPages[0].responseBody?.queryCount
        if (totalQueryResultCount != null) {
          // We know the total number of results. See if our offset + pageSize is >= the total
          if ((request.query.offset ?? 0) + pageSize >= totalQueryResultCount) {
            return undefined
          }
        }
        return page.responseBody!.queryResult.queryResults.rows.length ===
          pageSize
          ? (request.query.offset ?? 0) + pageSize
          : undefined
      },
    },
  )
}
