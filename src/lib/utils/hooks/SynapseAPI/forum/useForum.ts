import {
  UseInfiniteQueryOptions,
  useInfiniteQuery,
  UseQueryOptions,
  useQuery,
} from 'react-query'
import { SynapseClient } from '../../..'
import { SynapseClientError } from '../../../SynapseClientError'
import { useSynapseContext } from '../../../SynapseContext'
import { PaginatedResults } from '../../../synapseTypes'
import {
  DiscussionFilter,
  DiscussionReplyBundle,
  DiscussionReplyOrder,
  DiscussionThreadBundle,
  DiscussionThreadOrder,
} from '../../../synapseTypes/DiscussionBundle'

export function useGetForumInfinite(
  forumId: string,
  limit: number,
  sort: DiscussionThreadOrder,
  ascending: boolean,
  filter?: DiscussionFilter,
  options?: UseInfiniteQueryOptions<
    PaginatedResults<DiscussionThreadBundle>,
    SynapseClientError
  >,
) {
  const { accessToken } = useSynapseContext()
  return useInfiniteQuery<
    PaginatedResults<DiscussionThreadBundle>,
    SynapseClientError
  >(
    ['forumthread', 'infinite', forumId, limit, filter, sort, ascending],
    async context => {
      return SynapseClient.getForumThread(
        accessToken,
        forumId,
        context.pageParam,
        limit,
        sort,
        ascending,
        filter,
      )
    },
    {
      ...options,
      getNextPageParam: (lastPage, pages) => {
        if (lastPage.results.length > 0) return pages.length * limit
        else return undefined
      },
    },
  )
}

export function useGetThread(
  threadId: string,
  options?: UseQueryOptions<DiscussionThreadBundle, SynapseClientError>,
) {
  const { accessToken } = useSynapseContext()
  return useQuery<DiscussionThreadBundle, SynapseClientError>(
    ['thread', threadId],
    () => SynapseClient.getThread(threadId, accessToken),
    options,
  )
}

export function useGetRepliesInfinite(
  threadId: string,
  ascending: boolean,
  limit: number,
  sort?: DiscussionReplyOrder,
  filter?: DiscussionFilter,
  options?: UseInfiniteQueryOptions<
    PaginatedResults<DiscussionReplyBundle>,
    SynapseClientError
  >,
) {
  const { accessToken } = useSynapseContext()
  return useInfiniteQuery<
    PaginatedResults<DiscussionReplyBundle>,
    SynapseClientError
  >(
    ['forumthread', 'infinite', threadId, limit, filter, sort, ascending],
    async context => {
      return SynapseClient.getReplies(
        accessToken,
        threadId,
        limit,
        context.pageParam,
        sort,
        ascending,
        filter,
      )
    },
    {
      ...options,
      getNextPageParam: (lastPage, pages) => {
        if (lastPage.results.length > 0) return pages.length * limit
        else return undefined
      },
    },
  )
}
