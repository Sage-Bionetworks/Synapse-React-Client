import { useQuery, UseQueryOptions } from 'react-query'
import {
  getUserProfileWithProfilePic,
  UserProfileAndImg,
} from '../../functions/getUserData'
import { SynapseClientError } from '../../SynapseClient'
import { useSynapseContext } from '../../SynapseContext'

export function useGetUserProfileWithProfilePic(
  principalId: string,
  options?: UseQueryOptions<
    UserProfileAndImg,
    SynapseClientError,
    UserProfileAndImg
  >,
) {
  const { accessToken } = useSynapseContext()
  return useQuery<UserProfileAndImg, SynapseClientError>(
    ['userprofile', principalId, accessToken],
    () => getUserProfileWithProfilePic(principalId, accessToken),
    options,
  )
}
