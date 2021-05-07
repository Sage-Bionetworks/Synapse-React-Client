import { useQuery, UseQueryOptions } from 'react-query'
import {
  getUserProfileWithProfilePic,
  UserProfileAndImg,
} from '../../functions/getUserData'
import { SynapseClientError } from '../../SynapseClient'

export function useGetUserProfileWithProfilePic(
  principalId: string,
  options?: UseQueryOptions<
    UserProfileAndImg,
    SynapseClientError,
    UserProfileAndImg
  >,
) {
  return useQuery<UserProfileAndImg, SynapseClientError>(
    ['userprofile', principalId],
    () => getUserProfileWithProfilePic(principalId),
    options,
  )
}
