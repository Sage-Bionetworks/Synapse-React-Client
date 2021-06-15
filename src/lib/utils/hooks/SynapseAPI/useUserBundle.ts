import {
  QueryObserverOptions,
  useQuery,
  useQueryClient,
  UseQueryOptions,
} from 'react-query'
import {
  getUserProfileWithProfilePic,
  UserProfileAndImg,
} from '../../functions/getUserData'
import { SynapseClientError } from '../../SynapseClient'
import { useSynapseContext } from '../../SynapseContext'
import { UserProfile } from '../../synapseTypes'

export function useGetUserProfileWithProfilePic(
  principalId: string,
  options?: UseQueryOptions<UserProfileAndImg, SynapseClientError>,
) {
  const { accessToken } = useSynapseContext()
  const queryClient = useQueryClient()
  const queryKey = [accessToken, 'user', principalId, 'profile', 'withPic']

  // We store the profile in a session storage cache used by SWC
  const sessionStorageCacheKey = `${principalId}_USER_PROFILE`
  const cachedValue = sessionStorage.getItem(sessionStorageCacheKey)

  const defaultOptions: QueryObserverOptions<
    UserProfileAndImg,
    SynapseClientError
  > = {
    // Use the sessionStorage cache to pre-populate profile data before the request succeeds.
    placeholderData: cachedValue
      ? { userProfile: JSON.parse(cachedValue) as UserProfile }
      : undefined,
    // When the request succeeds, put the profile in the sessionStorage cache
    onSuccess: profileAndImage => {
      sessionStorage.setItem(
        sessionStorageCacheKey,
        JSON.stringify(profileAndImage.userProfile),
      )
    },
  }
  queryClient.setQueryDefaults(queryKey, defaultOptions)
  return useQuery<UserProfileAndImg, SynapseClientError>(
    queryKey,
    () => getUserProfileWithProfilePic(principalId, accessToken),
    options,
  )
}
