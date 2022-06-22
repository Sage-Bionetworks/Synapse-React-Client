import { useQuery, UseQueryOptions } from 'react-query'
import { SynapseClient } from '../..'
import { SynapseClientError } from '../../SynapseClient'
import { useSynapseContext } from '../../SynapseContext'
import { NotificationEmail, UserBundle, UserProfile } from '../../synapseTypes'
import {
  USER_BUNDLE_MASK_USER_PROFILE,
  USER_BUNDLE_MASK_ORCID,
  USER_BUNDLE_MASK_VERIFICATION_SUBMISSION,
  USER_BUNDLE_MASK_IS_CERTIFIED,
  USER_BUNDLE_MASK_IS_VERIFIED,
  USER_BUNDLE_MASK_IS_ACT_MEMBER,
  USER_BUNDLE_MASK_IS_AR_REVIEWER,
} from '../../SynapseConstants'

export function useGetNotificationEmail(
  options?: UseQueryOptions<NotificationEmail, SynapseClientError>,
) {
  const { accessToken } = useSynapseContext()
  return useQuery<NotificationEmail, SynapseClientError>(
    ['notificationEmail'],
    () => SynapseClient.getNotificationEmail(accessToken),
    options,
  )
}

export function useGetCurrentUserProfile(
  options?: UseQueryOptions<UserProfile, SynapseClientError>,
) {
  const { accessToken } = useSynapseContext()
  const queryKey = ['user', 'current', 'profile', accessToken]

  return useQuery<UserProfile, SynapseClientError>(
    queryKey,
    () => SynapseClient.getUserProfile(accessToken),
    options,
  )
}

export function useGetUserBundle(
  userId: string,
  mask?: number,
  options?: UseQueryOptions<UserBundle, SynapseClientError>,
) {
  const ALL_USER_BUNDLE_FIELDS =
    USER_BUNDLE_MASK_USER_PROFILE |
    USER_BUNDLE_MASK_ORCID |
    USER_BUNDLE_MASK_VERIFICATION_SUBMISSION |
    USER_BUNDLE_MASK_IS_CERTIFIED |
    USER_BUNDLE_MASK_IS_VERIFIED |
    USER_BUNDLE_MASK_IS_ACT_MEMBER |
    USER_BUNDLE_MASK_IS_AR_REVIEWER

  const requestMask = mask ?? ALL_USER_BUNDLE_FIELDS

  const { accessToken } = useSynapseContext()
  const queryKey = ['user', userId, 'bundle', requestMask, accessToken]

  return useQuery<UserBundle, SynapseClientError>(
    queryKey,
    () => SynapseClient.getUserBundle(userId, requestMask, accessToken),
    options,
  )
}

export function useGetCurrentUserBundle(
  mask?: number,
  options?: UseQueryOptions<UserBundle, SynapseClientError>,
) {
  const ALL_USER_BUNDLE_FIELDS =
    USER_BUNDLE_MASK_USER_PROFILE |
    USER_BUNDLE_MASK_ORCID |
    USER_BUNDLE_MASK_VERIFICATION_SUBMISSION |
    USER_BUNDLE_MASK_IS_CERTIFIED |
    USER_BUNDLE_MASK_IS_VERIFIED |
    USER_BUNDLE_MASK_IS_ACT_MEMBER |
    USER_BUNDLE_MASK_IS_AR_REVIEWER

  const requestMask = mask ?? ALL_USER_BUNDLE_FIELDS

  const { accessToken } = useSynapseContext()
  const queryKey = ['user', 'current', 'bundle', requestMask, accessToken]

  return useQuery<UserBundle, SynapseClientError>(
    queryKey,
    () => SynapseClient.getMyUserBundle(requestMask, accessToken),
    options,
  )
}

export function useGetUserProfile(
  principalId: string,
  options?: UseQueryOptions<UserProfile, SynapseClientError>,
) {
  const { accessToken } = useSynapseContext()
  const queryKey = ['user', principalId, 'profile']
  // We store the profile in a session storage cache used by SWC
  const sessionStorageCacheKey = `${principalId}_USER_PROFILE`
  const cachedValue = sessionStorage.getItem(sessionStorageCacheKey)

  return useQuery<UserProfile, SynapseClientError>(
    queryKey,
    () => SynapseClient.getUserProfileById(accessToken, principalId),
    {
      ...options,

      // Use the sessionStorage cache to pre-populate profile data.
      initialData: cachedValue
        ? (JSON.parse(cachedValue) as UserProfile)
        : undefined,

      // If the profile is re-fetched, save it to sessionStorage
      onSuccess: profile => {
        sessionStorage.setItem(sessionStorageCacheKey, JSON.stringify(profile))
      },
    },
  )
}
