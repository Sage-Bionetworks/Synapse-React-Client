import { SynapseClient } from '../../..'
import { SynapseClientError } from '../../../SynapseClientError'
import { useSynapseContext } from '../../../SynapseContext'
import { useQuery, UseQueryOptions } from 'react-query'
import { PaginatedResults, Reference } from '../../../synapseTypes'

export function useGetEntitiesGeneratedByActivity(
  activityId: string,
  options?: UseQueryOptions<
    PaginatedResults<Reference>,
    SynapseClientError,
    PaginatedResults<Reference>
  >,
) {
  const { accessToken } = useSynapseContext()
  return useQuery<PaginatedResults<Reference>, SynapseClientError>(
    ['entitiesGeneratedByActivity', accessToken],
    () =>
      // SWC implementation has always asked for Integer.MAX_VALUE!
      SynapseClient.getEntitiesGeneratedByActivity(
        activityId,
        Number.MAX_SAFE_INTEGER,
        0,
        accessToken,
      ),
    options,
  )
}
