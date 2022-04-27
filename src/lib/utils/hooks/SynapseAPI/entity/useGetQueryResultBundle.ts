import {
  QueryFunctionContext,
  QueryKey,
  useInfiniteQuery,
  UseInfiniteQueryOptions,
  useQuery,
  UseQueryOptions,
} from 'react-query'
import { SynapseClient } from '../../..'
import { SynapseClientError } from '../../../SynapseClient'
import {
  BUNDLE_MASK_QUERY_RESULTS,
  DEFAULT_PAGE_SIZE,
} from '../../../SynapseConstants'
import { useSynapseContext } from '../../../SynapseContext'
import {
  AsynchronousJobStatus,
  QueryBundleRequest,
  QueryResultBundle,
} from '../../../synapseTypes'
import { entityQueryKeys } from './queryKeys'

export default function useGetQueryResultBundle(
  queryBundleRequest: QueryBundleRequest,
  options?: UseQueryOptions<QueryResultBundle, SynapseClientError>,
) {
  const { accessToken } = useSynapseContext()

  return useQuery<QueryResultBundle, SynapseClientError>(
    entityQueryKeys.tableQueryResult(queryBundleRequest, false),
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
  setCurrentAsyncStatus?: (
    status: AsynchronousJobStatus<QueryBundleRequest, QueryResultBundle>,
  ) => void,
) {
  const { accessToken } = useSynapseContext()

  return useInfiniteQuery<
    AsynchronousJobStatus<QueryBundleRequest, QueryResultBundle>,
    SynapseClientError
  >(
    entityQueryKeys.tableQueryResult(queryBundleRequest, true),
    (context: QueryFunctionContext<QueryKey, string>) => {
      const offset = context.pageParam ? parseInt(context.pageParam) : 0
      return SynapseClient.getQueryTableAsyncJobResults(
        {
          ...queryBundleRequest,
          query: {
            ...queryBundleRequest.query,
            offset: offset,
          },
          /**
           * If we're on the first page, send the original partMask.
           * Otherwise, just ask for the queryResults (if they're in the original partMask), as it's the only part that changes between pages.
           *
           * We'll merge the "aggregation" parts and the pages of queryResults in the `select` function.
           */
          partMask:
            offset !== 0
              ? queryBundleRequest.partMask & BUNDLE_MASK_QUERY_RESULTS
              : queryBundleRequest.partMask,
        },
        accessToken,
        setCurrentAsyncStatus,
      )
    },
    {
      ...options,
      select: data => {
        /**
         * Since we we only fetch queryResults on 2nd and subsequent pages, we add to all pages the aggregate parts
         * that we only fetched on the first page.
         */
        const firstPage = data?.pages[0]
        if (firstPage.responseBody) {
          for (let i = 0; i < data.pages.length; i++) {
            const page = data.pages[i]
            if (page.responseBody != null) {
              data.pages[i].responseBody = {
                ...firstPage.responseBody,
                // queryResult changes on each page.
                queryResult: page.responseBody.queryResult,
              }
            }
          }
        }
        return data
      },
      getPreviousPageParam: firstPage => {
        if (firstPage.jobState !== 'COMPLETE') {
          return undefined
        }
        const request = firstPage.requestBody
        if (request.query.offset == null || request.query.offset === 0) {
          return undefined
        }
        const pageSize = request.query.limit ?? DEFAULT_PAGE_SIZE

        return Math.max(request.query.offset - pageSize, 0)
      },
      getNextPageParam: (page, allPages) => {
        if (page.jobState !== 'COMPLETE') {
          return undefined
        }
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
