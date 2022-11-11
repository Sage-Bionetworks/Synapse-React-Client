import {
  UseInfiniteQueryOptions,
  useInfiniteQuery,
  UseMutationOptions,
  useQueryClient,
  useMutation,
  UseQueryOptions,
  useQuery,
} from 'react-query'
import { SynapseClient } from '../../..'
import { SynapseClientError } from '../../../SynapseClientError'
import { useSynapseContext } from '../../../SynapseContext'
import {
  CreateDiscussionReply,
  DiscussionFilter,
  DiscussionReplyBundle,
  DiscussionReplyOrder,
  UpdateDiscussionReply,
} from '../../../synapseTypes/DiscussionBundle'
import { PaginatedResults } from '../../../synapseTypes'
import { Match } from '../../../synapseTypes/DiscussionSearch'

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
    ['reply', threadId, limit, filter, sort, ascending],
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
        const numberOfFetchedResults = pages.flatMap(
          page => page.results,
        ).length
        if (lastPage.totalNumberOfResults! > numberOfFetchedResults) {
          return numberOfFetchedResults
        } else {
          return undefined
        }
      },
    },
  )
}

export function useGetReply(
  reply: DiscussionReplyBundle,
  options?: UseQueryOptions<string, SynapseClientError>,
) {
  const { accessToken } = useSynapseContext()
  const queryFn = async () => {
    const messageUrl = await SynapseClient.getReplyMessageUrl(
      reply.messageKey,
      accessToken,
    )
    const data = await fetch(messageUrl.messageUrl, {
      method: 'GET',
      headers: {
        Accept: '*/*',
        'Access-Control-Request-Headers': 'authorization',
        'Content-Type': 'text/plain; charset=utf-8',
      },
    })
    return data.text()
  }
  return useQuery<string, SynapseClientError>(
    ['reply', reply.threadId, reply.id, reply.messageKey],
    queryFn,
    options,
  )
}

export function usePostReply(
  options?: UseMutationOptions<
    DiscussionReplyBundle,
    SynapseClientError,
    CreateDiscussionReply
  >,
) {
  const queryClient = useQueryClient()
  const { accessToken } = useSynapseContext()

  return useMutation<
    DiscussionReplyBundle,
    SynapseClientError,
    CreateDiscussionReply
  >(
    (request: CreateDiscussionReply) =>
      SynapseClient.postReply(request, accessToken),
    {
      ...options,
      onSuccess: async (newReply, variables, ctx) => {
        await queryClient.invalidateQueries(['reply', newReply.threadId])
        if (options?.onSuccess) {
          await options.onSuccess(newReply, variables, ctx)
        }
      },
    },
  )
}

export function usePutReply(
  options?: UseMutationOptions<
    DiscussionReplyBundle,
    SynapseClientError,
    UpdateDiscussionReply
  >,
) {
  const queryClient = useQueryClient()
  const { accessToken } = useSynapseContext()

  return useMutation<
    DiscussionReplyBundle,
    SynapseClientError,
    UpdateDiscussionReply
  >(
    (request: UpdateDiscussionReply) =>
      SynapseClient.putReply(request, accessToken),
    {
      ...options,
      onSuccess: async (newReply, variables, ctx) => {
        queryClient.invalidateQueries(['reply', newReply.threadId])

        if (options?.onSuccess) {
          await options.onSuccess(newReply, variables, ctx)
        }
      },
    },
  )
}

export function useDeleteReply(
  options?: UseMutationOptions<void, SynapseClientError, Match>,
) {
  const queryClient = useQueryClient()
  const { accessToken } = useSynapseContext()

  return useMutation<void, SynapseClientError, Match>(
    (match: Match) => SynapseClient.deleteReply(accessToken, match.replyId),
    {
      ...options,
      onSuccess: async (updatedReply, variables, ctx) => {
        await queryClient.invalidateQueries(['reply', variables.threadId])

        if (options?.onSuccess) {
          await options.onSuccess(updatedReply, variables, ctx)
        }
      },
    },
  )
}
