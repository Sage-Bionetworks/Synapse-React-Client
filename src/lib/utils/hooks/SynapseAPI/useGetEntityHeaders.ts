import { useQuery, UseQueryOptions } from 'react-query'
import { SynapseClient } from '../..'
import { SynapseClientError } from '../../SynapseClient'
import { useSynapseContext } from '../../SynapseContext'
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
  const { accessToken } = useSynapseContext()

  return useQuery<PaginatedResults<EntityHeader>, SynapseClientError>(
    ['entityHeaders', accessToken, references],
    () => SynapseClient.getEntityHeaders(references, accessToken),
    options,
  )
}
