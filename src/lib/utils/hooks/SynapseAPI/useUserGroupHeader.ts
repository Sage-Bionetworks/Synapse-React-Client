import { useQuery, UseQueryOptions } from 'react-query'
import { SynapseClient } from '../..'
import { SynapseClientError } from '../../SynapseClient'
import { useSynapseContext } from '../../SynapseContext'
import { UserGroupHeader } from '../../synapseTypes'

export function useGetUserGroupHeader(
  principalId: string,
  options?: UseQueryOptions<UserGroupHeader, SynapseClientError>,
) {
  const { accessToken } = useSynapseContext()
  const queryKey = ['userGroupHeader', principalId]

  return useQuery<UserGroupHeader, SynapseClientError>(
    queryKey,
    async () => {
      const responsePage = await SynapseClient.getGroupHeadersBatch(
        [principalId],
        accessToken,
      )
      if (responsePage.children.length !== 1) {
        throw new Error(
          `Expected one response in useGetUserGroupHeader for id: ${principalId}, got ${responsePage.children.length}`,
        )
      }
      return responsePage.children[0]
    },
    options,
  )
}
