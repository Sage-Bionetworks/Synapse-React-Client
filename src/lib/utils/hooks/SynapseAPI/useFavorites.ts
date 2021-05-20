import { useContext } from 'react'
import { useQuery, UseQueryOptions } from 'react-query'
import { SynapseClient } from '../..'
import { SynapseClientError } from '../../SynapseClient'
import { SynapseContext } from '../../SynapseContext'
import { EntityHeader, PaginatedResults } from '../../synapseTypes'

export function useGetFavorites(
  options?: UseQueryOptions<
    PaginatedResults<EntityHeader>,
    SynapseClientError,
    PaginatedResults<EntityHeader>
  >,
) {
  const { accessToken } = useContext(SynapseContext)
  return useQuery<PaginatedResults<EntityHeader>, SynapseClientError>(
    ['favorites', accessToken],
    () => SynapseClient.getUserFavorites(accessToken),
    options,
  )
}
