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
import { useSynapseContext } from '../../SynapseContext'
import {
  EntityChildrenRequest,
  EntityChildrenResponse,
} from '../../synapseTypes'

export function useGetEntityChildren(
  request: EntityChildrenRequest,
  options?: UseQueryOptions<
    EntityChildrenResponse,
    SynapseClientError,
    EntityChildrenResponse
  >,
) {
  const { accessToken } = useSynapseContext()
  return useQuery<EntityChildrenResponse, SynapseClientError>(
    ['entitychildren', request],
    () => SynapseClient.getEntityChildren(request, accessToken),
    options,
  )
}

export function useGetEntityChildrenInfinite(
  request: EntityChildrenRequest,
  options?: UseInfiniteQueryOptions<
    EntityChildrenResponse,
    SynapseClientError,
    EntityChildrenResponse
  >,
) {
  const { accessToken } = useSynapseContext()
  return useInfiniteQuery<EntityChildrenResponse, SynapseClientError>(
    ['entitychildren', request],
    (context: QueryFunctionContext<QueryKey, string>) => {
      return SynapseClient.getEntityChildren(
        {
          ...request,
          includeTotalChildCount: context.pageParam
            ? false
            : request.includeTotalChildCount, // only ask for the count when requesting the first page
          nextPageToken: context.pageParam,
        },
        accessToken,
        context.signal,
      )
    },
    {
      ...options,
      getNextPageParam: page => page.nextPageToken,
    },
  )
}
