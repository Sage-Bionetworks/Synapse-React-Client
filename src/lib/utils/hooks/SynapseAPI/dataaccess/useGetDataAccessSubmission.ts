import { useQuery, UseQueryOptions } from 'react-query'
import { SynapseClient } from '../../..'
import {
  mockApprovedSubmission,
  mockSubmittedSubmission,
  mockRejectedSubmission,
  mockDemoSubmission,
} from '../../../../../mocks/dataaccess/MockSubmission'
import { delay, SynapseClientError } from '../../../SynapseClient'
import { useSynapseContext } from '../../../SynapseContext'
import { Submission } from '../../../synapseTypes/AccessRequirement/Submission'

const submissions: Submission[] = [
  mockSubmittedSubmission,
  mockApprovedSubmission,
  mockRejectedSubmission,
  mockDemoSubmission,
]

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
