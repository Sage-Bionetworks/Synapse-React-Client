import { useQuery, UseQueryOptions } from 'react-query'
import { SynapseClient } from '../..'
import { SynapseClientError } from '../../SynapseClient'
import { SynapseContext } from '../../SynapseContext'
import {
  EntityHeader,
  PaginatedResults,
  ReferenceList,
} from '../../synapseTypes'
import { useContext } from 'react'

export function useGetEntityHeaders(
  references: ReferenceList,
  options?: UseQueryOptions<
    PaginatedResults<EntityHeader>,
    SynapseClientError,
    PaginatedResults<EntityHeader>
  >,
) {
  const { accessToken } = useContext(SynapseContext)

  return useQuery<PaginatedResults<EntityHeader>, SynapseClientError>(
    ['entityHeaders', accessToken, references],
    () => SynapseClient.getEntityHeaders(references, accessToken),
    options,
  )
}
