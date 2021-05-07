import { useQuery, UseQueryOptions } from 'react-query'
import { SynapseClient } from '../..'
import { SynapseClientError } from '../../SynapseClient'
import {
  EntityHeader,
  PaginatedResults,
  ReferenceList,
} from '../../synapseTypes'

export function useGetEntityHeaders(
  references: ReferenceList,
  options?: UseQueryOptions<
    PaginatedResults<EntityHeader>,
    SynapseClientError,
    PaginatedResults<EntityHeader>
  >,
) {
  return useQuery<PaginatedResults<EntityHeader>, SynapseClientError>(
    ['entityHeaders', references],
    () => SynapseClient.getEntityHeaders(references),
    options,
  )
}
