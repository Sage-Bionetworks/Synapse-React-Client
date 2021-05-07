import { useQuery, UseQueryOptions } from 'react-query'
import { SynapseClient } from '../..'
import { SynapseClientError } from '../../SynapseClient'
import { EntityHeader, PaginatedResults } from '../../synapseTypes'

export function useGetFavorites(
  options?: UseQueryOptions<
    PaginatedResults<EntityHeader>,
    SynapseClientError,
    PaginatedResults<EntityHeader>
  >,
) {
  return useQuery<PaginatedResults<EntityHeader>, SynapseClientError>(
    ['favorites'],
    () => SynapseClient.getUserFavorites(),
    options,
  )
}
