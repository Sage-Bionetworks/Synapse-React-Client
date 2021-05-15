import {
  useInfiniteQuery,
  UseInfiniteQueryOptions,
  useQuery,
  UseQueryOptions,
} from 'react-query'
import { SynapseClient } from '../..'
import { SynapseClientError } from '../../SynapseClient'
import {
  EntityChildrenRequest,
  EntityChildrenResponse,
} from '../../synapseTypes'

export function useGetEntityChildren(
  accessToken: string,
  request: EntityChildrenRequest,
  options?: UseQueryOptions<
    EntityChildrenResponse,
    SynapseClientError,
    EntityChildrenResponse
  >,
) {
  return useQuery<EntityChildrenResponse, SynapseClientError>(
    ['entitychildren', accessToken, request],
    () => SynapseClient.getEntityChildren(request, accessToken),
    options,
  )
}

export function useGetEntityChildrenInfinite(
  accessToken: string,
  request: EntityChildrenRequest,
  options?: UseInfiniteQueryOptions<
    EntityChildrenResponse,
    SynapseClientError,
    EntityChildrenResponse
  >,
) {
  return useInfiniteQuery<EntityChildrenResponse, SynapseClientError>(
    ['entitychildren', request],
    async context => {
      return await SynapseClient.getEntityChildren(
        { ...request, nextPageToken: context.pageParam },
        accessToken,
      )
    },
    {
      ...options,
      getNextPageParam: page => page.nextPageToken,
    },
  )
}
