import { UseQueryOptions, useQuery, useQueryClient } from 'react-query'
import { SynapseClient } from '../..'
import { SynapseClientError, UserProfileList } from '../../SynapseClient'
import { UserProfile } from '../../synapseTypes'

export function useGetUserProfiles(
  userIds: string[],
  sessionToken?: string,
  options?: UseQueryOptions<
    UserProfileList,
    SynapseClientError,
    UserProfileList
  >,
) {
  const queryClient = useQueryClient()
  return useQuery<UserProfileList, SynapseClientError>(
    [sessionToken, 'user', 'batch', userIds],
    () => SynapseClient.getUserProfiles(userIds, sessionToken),
    {
      ...options,
      onSuccess: results => {
        for (const profile of results.list) {
          queryClient.setQueryData(
            [sessionToken, 'user', profile.ownerId, 'userProfile'],
            profile,
          )
        }
      },
    },
  )
}

export function useGetUserProfile(
  userId: string,
  sessionToken?: string,
  options?: UseQueryOptions<UserProfile, SynapseClientError, UserProfile>,
) {
  return useQuery<UserProfile, SynapseClientError>(
    [sessionToken, 'user', userId, 'userProfile'],
    () => SynapseClient.getUserProfileById(sessionToken, userId),
    options,
  )
}
