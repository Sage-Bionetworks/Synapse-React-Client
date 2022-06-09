import { useQuery, UseQueryOptions } from 'react-query'
import { SynapseClient } from '../../..'
import { SynapseClientError } from '../../../SynapseClient'
import { useSynapseContext } from '../../../SynapseContext'
import { Submission } from '../../../synapseTypes/AccessRequirement/Submission'

export default function useGetDataAccessSubmission(
  submissionId: string | number,
  options?: UseQueryOptions<Submission, SynapseClientError>,
) {
  const { accessToken } = useSynapseContext()

  return useQuery<Submission, SynapseClientError>(
    ['dataAccessSubmission', submissionId],
    () => SynapseClient.getSubmissionById(submissionId, accessToken),
    options,
  )
}
