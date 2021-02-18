import { useInfiniteQuery, UseInfiniteQueryOptions } from 'react-query'
import { SynapseClient } from '../..'
import { SynapseClientError } from '../../SynapseClient'
import {
  EntityChildrenRequest,
  EntityChildrenResponse,
} from '../../synapseTypes'

export default function useGetEntityChildren(
  sessionToken: string,
  request: Omit<EntityChildrenRequest, 'nextPageToken'>,
  options?: UseInfiniteQueryOptions<
    EntityChildrenResponse,
    SynapseClientError,
    EntityChildrenResponse
  >,
) {
  return useInfiniteQuery<EntityChildrenResponse, SynapseClientError>(
    ['entitychildren', request],
    async context => {
      console.log(context.pageParam)
      return await SynapseClient.getEntityChildren(
        { ...request, nextPageToken: context.pageParam },
        sessionToken,
      )
    },
    {
      ...options,
      getNextPageParam: page => page.nextPageToken,
    },
  )
}
