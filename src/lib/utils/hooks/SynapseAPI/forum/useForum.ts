import { UseInfiniteQueryOptions, useInfiniteQuery } from 'react-query'
import { SynapseClient } from '../../..'
import { SynapseClientError } from '../../../SynapseClientError'
import { useSynapseContext } from '../../../SynapseContext'
import { PaginatedResults } from '../../../synapseTypes'
import {
  DiscussionFilter,
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
