import { QueryOptions, useQuery } from 'react-query'
import { SynapseClient } from '../..'
import { SynapseClientError } from '../../SynapseClient'
import {
  EntityHeader,
  PaginatedResults,
  ReferenceList,
} from '../../synapseTypes'

export function useGetEntityHeaders(
  references: ReferenceList,
  sessionToken?: string,
  options?: QueryOptions<
    PaginatedResults<EntityHeader>,
    SynapseClientError,
    PaginatedResults<EntityHeader>
  >,
) {
  return useQuery<PaginatedResults<EntityHeader>, SynapseClientError>(
    ['entityHeaders', sessionToken, references],
    () => SynapseClient.getEntityHeaders(references, sessionToken),
    options,
  )
}
