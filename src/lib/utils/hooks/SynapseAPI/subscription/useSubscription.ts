import {
  SubscriptionObjectType,
  Subscription,
  SortByType,
  SubscriptionRequest,
  Topic,
} from '../../../synapseTypes/Subscription'
import {
  useMutation,
  useQuery,
  UseMutationOptions,
  UseQueryOptions,
  useQueryClient,
} from 'react-query'
import { SynapseClientError } from '../../../SynapseClientError'
import { useSynapseContext } from '../../../SynapseContext'
import { Direction } from '../../../synapseTypes'
import { SynapseClient } from '../../..'

export function useGetSubscription(
  objectId: string,
  objectType: SubscriptionObjectType,
  options?: UseQueryOptions<Subscription, SynapseClientError>,
) {
  const { accessToken } = useSynapseContext()
  const queryFn = async () => {
    const subscriptionRequest: SubscriptionRequest = {
      objectType: objectType,
      idList: [objectId],
      sortByType: SortByType.OBJECT_ID,
      sortDirection: Direction.ASC,
    }
    const subscriptionList = await SynapseClient.postSubscriptionList(
      accessToken,
      subscriptionRequest,
    )
    return subscriptionList.results[0]
  }
  return useQuery<Subscription, SynapseClientError>(
    ['subscription', objectId, objectType],
    queryFn,
    {
      staleTime: Infinity,
      ...options,
    },
  )
}

export function usePostSubscription(
  options?: UseMutationOptions<Subscription, SynapseClientError, Topic>,
) {
  const queryClient = useQueryClient()
  const { accessToken } = useSynapseContext()

  return useMutation<Subscription, SynapseClientError, Topic>(
    (topic: Topic) => SynapseClient.postSubscription(accessToken, topic),
    {
      ...options,
      onSuccess: async (updatedSubscription, variables, ctx) => {
        await queryClient.invalidateQueries([
          'subscription',
          variables.objectId,
          variables.objectType,
        ])
        if (options?.onSuccess) {
          await options.onSuccess(updatedSubscription, variables, ctx)
        }
      },
    },
  )
}

export function useDeleteSubscription(
  options?: UseMutationOptions<void, SynapseClientError, string>,
) {
  const queryClient = useQueryClient()
  const { accessToken } = useSynapseContext()

  return useMutation<void, SynapseClientError, string>(
    (subscriptionId: string) =>
      SynapseClient.deleteSubscription(accessToken, subscriptionId),
    {
      ...options,
      onSuccess: async (updatedSubscription, variables, ctx) => {
        await queryClient.invalidateQueries(['subscription', variables])
        if (options?.onSuccess) {
          await options.onSuccess(updatedSubscription, variables, ctx)
        }
      },
    },
  )
}
