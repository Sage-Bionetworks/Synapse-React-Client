import { useQuery, UseQueryOptions } from 'react-query'
import { SynapseClient } from '../..'
import { getProfilePic, UserProfileAndImg } from '../../functions/getUserData'
import { SynapseClientError } from '../../SynapseClient'
import { useSynapseContext } from '../../SynapseContext'
import { NotificationEmail, UserProfile } from '../../synapseTypes'

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
  const queryKey = [accessToken, 'user', 'current', 'profile']

  return useQuery<UserProfile, SynapseClientError>(
    queryKey,
    () => SynapseClient.getUserProfile(accessToken),
    options,
  )
}

export function useGetUserProfile(
  principalId: string,
  options?: UseQueryOptions<UserProfile, SynapseClientError>,
) {
  const { accessToken } = useSynapseContext()
  const queryKey = [accessToken, 'user', principalId, 'profile']
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

export function useGetUserProfileWithProfilePic(
  principalId: string,
  options?: UseQueryOptions<UserProfileAndImg, SynapseClientError>,
) {
  const { accessToken } = useSynapseContext()
  const queryKey = [accessToken, 'user', principalId, 'profile', 'withPic']

  const { data: userProfile } = useGetUserProfile(principalId, {
    enabled: options?.enabled ?? true,
  })

  // TODO: create useGetFile hook with careful configuration to prevent serving expired pre-signed URLs
  return useQuery<UserProfileAndImg, SynapseClientError>(
    queryKey,
    () => getProfilePic(userProfile!),
    {
      ...options,
      enabled: !!userProfile,
    },
  )
}
