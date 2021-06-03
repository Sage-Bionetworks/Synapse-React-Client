import { useQuery, UseQueryOptions } from 'react-query'
import { SynapseClient } from '../..'
import { SynapseClientError } from '../../SynapseClient'
import { useSynapseContext } from '../../SynapseContext'
import { EntityHeader, PaginatedResults } from '../../synapseTypes'

export function useGetFavorites(
  options?: UseQueryOptions<
    PaginatedResults<EntityHeader>,
    SynapseClientError,
    PaginatedResults<EntityHeader>
  >,
) {
  const { accessToken } = useSynapseContext()
  return useQuery<PaginatedResults<EntityHeader>, SynapseClientError>(
    ['favorites', accessToken],
    () => SynapseClient.getUserFavorites(accessToken),
    options,
  )
}
