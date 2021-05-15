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
  accessToken?: string,
  options?: UseQueryOptions<
    PaginatedResults<EntityHeader>,
    SynapseClientError,
    PaginatedResults<EntityHeader>
  >,
) {
  return useQuery<PaginatedResults<EntityHeader>, SynapseClientError>(
    ['entityHeaders', accessToken, references],
    () => SynapseClient.getEntityHeaders(references, accessToken),
    options,
  )
}
