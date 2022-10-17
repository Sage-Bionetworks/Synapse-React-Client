import { SynapseClient } from '..'
import { Direction } from '../synapseTypes'
import {
  SortByType,
  SubscriptionObjectType,
  SubscriptionRequest,
} from '../synapseTypes/Subscription'

export async function getSubscription(
  accessToken: string | undefined,
  objectId: string,
  objectType: SubscriptionObjectType,
) {
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
