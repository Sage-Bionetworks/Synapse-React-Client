import {
  QueryFunctionContext,
  QueryKey,
  useInfiniteQuery,
  UseInfiniteQueryOptions,
  useQuery,
  UseQueryOptions,
  UseQueryResult,
} from 'react-query'
import { SynapseClient } from '../../..'
import { SynapseClientError } from '../../../SynapseClientError'
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

const sharedQueryDefaults = {
  refetchOnWindowFocus: false,
}

/**
 *
 * @param queryBundleRequest
 * @param options
 * @returns
 *
 * @deprecated - use useGetQueryResultBundleWithAsyncStatus. That hook can be renamed and this can be removed
 *  when all cases are using useGetQueryResultBundleWithAsyncStatus
 */
export default function useGetQueryResultBundle(
  queryBundleRequest: QueryBundleRequest,
  options?: UseQueryOptions<QueryResultBundle, SynapseClientError>,
) {
  const { accessToken } = useSynapseContext()

  return useQuery<QueryResultBundle, SynapseClientError>(
    entityQueryKeys.tableQueryResult(queryBundleRequest, false),
    () => SynapseClient.getQueryTableResults(queryBundleRequest, accessToken),
    {
      ...sharedQueryDefaults,
      ...options,
    },
  )
}

function _useGetQueryResultBundleWithAsyncStatus(
  queryBundleRequest: QueryBundleRequest,
  options?: UseQueryOptions<
    AsynchronousJobStatus<QueryBundleRequest, QueryResultBundle>,
    SynapseClientError
  >,
  setCurrentAsyncStatus?: (
    status: AsynchronousJobStatus<QueryBundleRequest, QueryResultBundle>,
  ) => void,
) {
  const { accessToken } = useSynapseContext()

  return useQuery<
    AsynchronousJobStatus<QueryBundleRequest, QueryResultBundle>,
    SynapseClientError
  >(
    entityQueryKeys.tableQueryResultWithAsyncStatus(queryBundleRequest, false),
    () =>
      SynapseClient.getQueryTableAsyncJobResults(
        queryBundleRequest,
        accessToken,
        setCurrentAsyncStatus,
      ),
    {
      ...sharedQueryDefaults,
      ...options,
    },
  )
}

function useGetQueryRows(
  queryBundleRequest: QueryBundleRequest,
  options?: UseQueryOptions<
    AsynchronousJobStatus<QueryBundleRequest, QueryResultBundle>,
    SynapseClientError
  >,
  setCurrentAsyncStatus?: (
    status: AsynchronousJobStatus<QueryBundleRequest, QueryResultBundle>,
  ) => void,
) {
  // Get the request for just the rows
  const queryRowsBundleRequestMask =
    queryBundleRequest.partMask & BUNDLE_MASK_QUERY_RESULTS
  const rowsOnlyQueryBundleRequest: QueryBundleRequest = {
    ...queryBundleRequest,
    partMask: queryRowsBundleRequestMask,
  }

  const enableQuery = queryRowsBundleRequestMask > 0 ? options?.enabled : false

  return _useGetQueryResultBundleWithAsyncStatus(
    rowsOnlyQueryBundleRequest,
    {
      ...options,
      enabled: enableQuery,
    },
    setCurrentAsyncStatus,
  )
}

function useGetQueryStats(
  queryBundleRequest: QueryBundleRequest,
  options?: UseQueryOptions<
    AsynchronousJobStatus<QueryBundleRequest, QueryResultBundle>,
    SynapseClientError
  >,
  setCurrentAsyncStatus?: (
    status: AsynchronousJobStatus<QueryBundleRequest, QueryResultBundle>,
  ) => void,
) {
  // Bitwise remove the query result flag from the mask
  const queryStatsMask =
    queryBundleRequest.partMask & ~BUNDLE_MASK_QUERY_RESULTS
  const queryStatsRequest: QueryBundleRequest = {
    ...queryBundleRequest,
    query: {
      ...queryBundleRequest.query,
      // Remove query fields that don't affect the results.
      offset: undefined,
      limit: undefined,
      sort: undefined,
    },
    partMask: queryStatsMask,
  }

  const enableQuery = queryStatsMask > 0 ? options?.enabled : false

  return _useGetQueryResultBundleWithAsyncStatus(
    queryStatsRequest,
    {
      ...options,
      enabled: enableQuery,
    },
    setCurrentAsyncStatus,
  )
}

export function useGetQueryResultBundleWithAsyncStatus(
  queryBundleRequest: QueryBundleRequest,
  options?: UseQueryOptions<
    AsynchronousJobStatus<QueryBundleRequest, QueryResultBundle>,
    SynapseClientError
  >,
  setCurrentAsyncStatus?: (
    status: AsynchronousJobStatus<QueryBundleRequest, QueryResultBundle>,
  ) => void,
) {
  /**
   * Separate the query into two parts
   *  - Query result rows, which will change each page
   *  - Everything else, which does not change each page
   */
  const rowResult = useGetQueryRows(
    queryBundleRequest,
    options,
    setCurrentAsyncStatus,
  )
  const statsResult = useGetQueryStats(
    queryBundleRequest,
    options,
    setCurrentAsyncStatus,
  )

  // construct a result object using the two results
  const resultObject = {
    // For the query status, use the rowResult data since it may be changing/updated more often
    ...rowResult,
    data:
      // Don't return a result until we have both rows and stats
      rowResult.data && statsResult.data
        ? ({
            ...rowResult.data,
            responseBody: rowResult.data.responseBody
              ? {
                  ...statsResult.data?.responseBody,
                  // Append the rows to the stats result.
                  queryResult: rowResult.data.responseBody.queryResult,
                }
              : undefined,
          } as AsynchronousJobStatus<QueryBundleRequest, QueryResultBundle>)
        : undefined,
  } as UseQueryResult<
    AsynchronousJobStatus<QueryBundleRequest, QueryResultBundle>,
    SynapseClientError
  >
  return resultObject
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
      ...sharedQueryDefaults,
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
