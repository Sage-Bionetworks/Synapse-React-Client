export interface Topic {
  objectId: string
  objectType: SubscriptionObjectType
}

export enum SubscriptionObjectType {
  FORUM = 'FORUM',
  THREAD = 'THREAD',
  DATA_ACCESS_SUBMISSION = 'DATA_ACCESS_SUBMISSION',
  DATA_ACCESS_SUBMISSION_STATUS = 'DATA_ACCESS_SUBMISSION_STATUS',
}

export interface Subscription {
  subscriptionId: string
  subscriberId: string
  objectId: string
  objectType: SubscriptionObjectType
  createdOn: string
}
