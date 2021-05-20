import { useQuery, UseQueryOptions } from 'react-query'
import {
  getUserProfileWithProfilePic,
  UserProfileAndImg,
} from '../../functions/getUserData'
import { SynapseClientError } from '../../SynapseClient'
import { SynapseContext } from '../../SynapseContext'
import { useContext } from 'react'

export function useGetUserProfileWithProfilePic(
  principalId: string,
  options?: UseQueryOptions<
    UserProfileAndImg,
    SynapseClientError,
    UserProfileAndImg
  >,
) {
  const { accessToken } = useContext(SynapseContext)
  return useQuery<UserProfileAndImg, SynapseClientError>(
    ['userprofile', principalId, accessToken],
    () => getUserProfileWithProfilePic(principalId, accessToken),
    options,
  )
}
