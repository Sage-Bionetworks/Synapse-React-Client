import { useCallback } from 'react'
import {
  UseInfiniteQueryOptions,
  useInfiniteQuery,
  UseQueryOptions,
  useQuery,
  UseMutationOptions,
  useQueryClient,
  useMutation,
} from 'react-query'
import { SynapseClient } from '../../..'
import { getMessage } from '../../../../containers/DiscussionSearchResult'
import { SynapseClientError } from '../../../SynapseClientError'
import { useSynapseContext } from '../../../SynapseContext'
import { PaginatedResults } from '../../../synapseTypes'
import {
  CreateDiscussionReply,
  CreateDiscussionThread,
  DiscussionFilter,
  DiscussionReplyBundle,
  DiscussionReplyOrder,
  DiscussionThreadBundle,
  DiscussionThreadOrder,
  UpdateDiscussionReply,
  UpdateThreadMessageRequest,
  UpdateThreadTitleRequest,
} from '../../../synapseTypes/DiscussionBundle'
import { Match } from '../../../synapseTypes/DiscussionSearch'
import { PaginatedIds } from '../../../synapseTypes/PaginatedIds'

export function useGetModerators(
  forumId: string,
  options?: UseQueryOptions<PaginatedIds, SynapseClientError>,
) {
  const { accessToken } = useSynapseContext()
  return useQuery<PaginatedIds, SynapseClientError>(
    ['moderators', forumId],
    () => SynapseClient.getModerators(accessToken, forumId),
    options,
  )
}

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
    ['forumthread', forumId, 'infinite', limit, filter, sort, ascending],
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

export function useGetThread(threadId: string) {
  const { data: threadData, isLoading: isLoadingBundle } =
    useGetThreadBundle(threadId)
  const { data: threadBody, isLoading: isLoadingBody } = useGetThreadBody(
    threadData,
    { enabled: !!threadData },
  )
  const { mutate: pinThread } = usePinThread()
  const { mutate: unPinThread } = useUnPinThread()

  const togglePin = useCallback(() => {
    if (threadData) {
      if (threadData?.isPinned) {
        unPinThread(threadData)
      } else {
        pinThread(threadData)
      }
    }
  }, [unPinThread, pinThread, threadData])

  const isLoading = isLoadingBody || isLoadingBundle
  return { threadData, threadBody, togglePin, isLoading }
}

export function useGetThreadBundle(
  threadId: string,
  options?: UseQueryOptions<DiscussionThreadBundle, SynapseClientError>,
) {
  const { accessToken } = useSynapseContext()
  return useQuery<DiscussionThreadBundle, SynapseClientError>(
    ['thread', threadId, accessToken],
    () => SynapseClient.getThread(threadId, accessToken),
    options,
  )
}

export function useGetThreadBody(
  threadData?: DiscussionThreadBundle,
  options?: UseQueryOptions<string, SynapseClientError>,
) {
  const { accessToken } = useSynapseContext()
  const messageUrl = SynapseClient.getThreadMessageUrl(
    threadData?.messageKey ?? '',
    accessToken,
  )
  return useQuery<string, SynapseClientError>(
    ['thread', threadData?.id, threadData?.messageKey, accessToken],
    async () => getMessage((await messageUrl).messageUrl),
    options,
  )
}

export function useUpdateThreadTitle(
  options?: UseMutationOptions<
    DiscussionThreadBundle,
    SynapseClientError,
    UpdateThreadTitleRequest
  >,
) {
  const queryClient = useQueryClient()
  const { accessToken } = useSynapseContext()

  return useMutation<
    DiscussionThreadBundle,
    SynapseClientError,
    UpdateThreadTitleRequest
  >(
    (request: UpdateThreadTitleRequest) =>
      SynapseClient.putThreadTitle(accessToken, request),
    {
      ...options,
      onSuccess: async (newThread, variables, ctx) => {
        await queryClient.invalidateQueries(['forumthread', newThread.forumId])
        await queryClient.invalidateQueries(['thread', variables.threadId])
        if (options?.onSuccess) {
          await options.onSuccess(newThread, variables, ctx)
        }
      },
    },
  )
}

export function useUpdateThreadMessage(
  options?: UseMutationOptions<
    DiscussionThreadBundle,
    SynapseClientError,
    UpdateThreadMessageRequest
  >,
) {
  const queryClient = useQueryClient()
  const { accessToken } = useSynapseContext()

  return useMutation<
    DiscussionThreadBundle,
    SynapseClientError,
    UpdateThreadMessageRequest
  >(
    (request: UpdateThreadMessageRequest) =>
      SynapseClient.putThreadMessage(accessToken, request),
    {
      ...options,
      onSuccess: async (newThread, variables, ctx) => {
        await queryClient.invalidateQueries(['thread', variables.threadId])
        if (options?.onSuccess) {
          await options.onSuccess(newThread, variables, ctx)
        }
      },
    },
  )
}

export function useCreateThread(
  options?: UseMutationOptions<
    DiscussionThreadBundle,
    SynapseClientError,
    CreateDiscussionThread
  >,
) {
  const queryClient = useQueryClient()
  const { accessToken } = useSynapseContext()

  return useMutation<
    DiscussionThreadBundle,
    SynapseClientError,
    CreateDiscussionThread
  >(
    (newThread: CreateDiscussionThread) =>
      SynapseClient.postThread(accessToken, newThread),
    {
      ...options,
      onSuccess: async (threadBundle, newThreadRequest, ctx) => {
        await queryClient.invalidateQueries([
          'forumthread',
          threadBundle.forumId,
        ])
        if (options?.onSuccess) {
          await options.onSuccess(threadBundle, newThreadRequest, ctx)
        }
      },
    },
  )
}

export function useDeleteThread(
  options?: UseMutationOptions<
    void,
    SynapseClientError,
    DiscussionThreadBundle
  >,
) {
  const queryClient = useQueryClient()
  const { accessToken } = useSynapseContext()

  return useMutation<void, SynapseClientError, DiscussionThreadBundle>(
    (threadBundle: DiscussionThreadBundle) =>
      SynapseClient.deleteThread(accessToken, threadBundle.id),
    {
      ...options,
      onSuccess: async (updatedThread, threadBundle, ctx) => {
        await queryClient.invalidateQueries([
          'forumthread',
          threadBundle.forumId,
        ])
        await queryClient.invalidateQueries(['thread', threadBundle.id])
        if (options?.onSuccess) {
          await options.onSuccess(updatedThread, threadBundle, ctx)
        }
      },
    },
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
    ['thread', threadId, 'infinite', limit, filter, sort, ascending],
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
        await queryClient.invalidateQueries(['thread', newReply.threadId])
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
        await queryClient.invalidateQueries(['thread', newReply.threadId])
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
        await queryClient.invalidateQueries(['thread', variables.threadId])
        if (options?.onSuccess) {
          await options.onSuccess(updatedReply, variables, ctx)
        }
      },
    },
  )
}

export function usePinThread(
  options?: UseMutationOptions<
    void,
    SynapseClientError,
    DiscussionThreadBundle
  >,
) {
  const queryClient = useQueryClient()
  const { accessToken } = useSynapseContext()

  return useMutation<void, SynapseClientError, DiscussionThreadBundle>(
    (threadBundle: DiscussionThreadBundle) =>
      SynapseClient.pinThread(accessToken, threadBundle.id),
    {
      ...options,
      onSuccess: async (updatedThread, threadBundle, ctx) => {
        await queryClient.invalidateQueries(['thread', threadBundle.id])
        await queryClient.invalidateQueries([
          'forumthread',
          threadBundle.forumId,
        ])
        if (options?.onSuccess) {
          await options.onSuccess(updatedThread, threadBundle, ctx)
        }
      },
    },
  )
}

export function useUnPinThread(
  options?: UseMutationOptions<
    void,
    SynapseClientError,
    DiscussionThreadBundle
  >,
) {
  const queryClient = useQueryClient()
  const { accessToken } = useSynapseContext()

  return useMutation<void, SynapseClientError, DiscussionThreadBundle>(
    (threadBundle: DiscussionThreadBundle) =>
      SynapseClient.unPinThread(accessToken, threadBundle.id),
    {
      ...options,
      onSuccess: async (updatedThread, threadBundle, ctx) => {
        await queryClient.invalidateQueries(['thread', threadBundle.id])
        await queryClient.invalidateQueries([
          'forumthread',
          threadBundle.forumId,
        ])
        if (options?.onSuccess) {
          await options.onSuccess(updatedThread, threadBundle, ctx)
        }
      },
    },
  )
}
