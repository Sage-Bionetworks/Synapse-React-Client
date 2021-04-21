import { useQuery, useQueryClient, UseQueryOptions } from 'react-query'
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
  options?: UseQueryOptions<
    PaginatedResults<EntityHeader>,
    SynapseClientError,
    PaginatedResults<EntityHeader>
  >,
) {
  const queryClient = useQueryClient()
  return useQuery<PaginatedResults<EntityHeader>, SynapseClientError>(
    [sessionToken, 'entityHeaders', references],
    () => SynapseClient.getEntityHeaders(references, sessionToken),
    {
      ...options,
      onSuccess: results => {
        for (const header of results.results) {
          queryClient.setQueryData(
            [sessionToken, 'entity', header.id, 'header'],
            header,
          )
        }
      },
    },
  )
}

export function useGetEntityHeader(
  entityId: string,
  sessionToken?: string,
  options?: UseQueryOptions<EntityHeader, SynapseClientError, EntityHeader>,
) {
  return useQuery<EntityHeader, SynapseClientError>(
    [sessionToken, 'entity', entityId, 'header'],
    () => SynapseClient.getEntityHeader(entityId, sessionToken),
    options,
  )
}
