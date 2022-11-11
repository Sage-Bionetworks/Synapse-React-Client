import { useCallback } from 'react'
import {
  UseQueryOptions,
  useQuery,
  UseMutationOptions,
  useQueryClient,
  useMutation,
} from 'react-query'
import {
  CreateDiscussionThread,
  DiscussionThreadBundle,
  UpdateThreadMessageRequest,
  UpdateThreadTitleRequest,
} from '../../../synapseTypes/DiscussionBundle'
import { SynapseClient } from '../../..'
import { SynapseClientError } from '../../../SynapseClientError'
import { useSynapseContext } from '../../../SynapseContext'

export function useGetThread(threadId: string) {
  const { data: threadData, isLoading: isLoadingBundle } =
    useGetThreadBundle(threadId)
  const { data: threadBody, isLoading: isLoadingBody } = useGetThreadBody(
    threadData!,
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
  threadData: DiscussionThreadBundle,
  options?: UseQueryOptions<string, SynapseClientError>,
) {
  const { accessToken } = useSynapseContext()

  const queryFn = async () => {
    const messageUrl = await SynapseClient.getThreadMessageUrl(
      threadData.messageKey,
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
    ['thread', threadData?.id, threadData?.messageKey, accessToken],
    queryFn,
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

export function useRestoreThread(
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
      SynapseClient.restoreThread(accessToken, threadBundle.id),
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
