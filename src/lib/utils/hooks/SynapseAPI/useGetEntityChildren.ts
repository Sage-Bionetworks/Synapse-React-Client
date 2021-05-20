import {
  useInfiniteQuery,
  UseInfiniteQueryOptions,
  useQuery,
  UseQueryOptions,
} from 'react-query'
import { SynapseClient } from '../..'
import { SynapseClientError } from '../../SynapseClient'
import { SynapseContext } from '../../SynapseContext'
import {
  EntityChildrenRequest,
  EntityChildrenResponse,
} from '../../synapseTypes'
import { useContext } from 'react'

export function useGetEntityChildren(
  request: EntityChildrenRequest,
  options?: UseQueryOptions<
    EntityChildrenResponse,
    SynapseClientError,
    EntityChildrenResponse
  >,
) {
  const { accessToken } = useContext(SynapseContext)
  return useQuery<EntityChildrenResponse, SynapseClientError>(
    ['entitychildren', accessToken, request],
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
  const { accessToken } = useContext(SynapseContext)
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
