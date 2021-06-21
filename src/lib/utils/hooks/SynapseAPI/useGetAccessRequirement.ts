import { useQuery, UseQueryOptions } from 'react-query'
import { SynapseClient } from '../..'
import { SynapseClientError } from '../../SynapseClient'
import { useSynapseContext } from '../../SynapseContext'
import { AccessRequirement } from '../../synapseTypes'

export default function useGetAccessRequirement(
  accessRequirementId: number,
  options?: UseQueryOptions<
    AccessRequirement,
    SynapseClientError,
    AccessRequirement
  >,
) {
  const { accessToken } = useSynapseContext()

  return useQuery<AccessRequirement, SynapseClientError, AccessRequirement>(
    ['accessRequirementById', accessToken, accessRequirementId],
    () => SynapseClient.getAccessRequirementById(accessToken, accessRequirementId),
    options,
  )
}
