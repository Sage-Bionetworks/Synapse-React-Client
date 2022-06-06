import { useQuery, UseQueryOptions } from 'react-query'
import {
  mockApprovedSubmission,
  mockSubmittedSubmission,
  mockRejectedSubmission,
  mockDemoSubmission,
} from '../../../../../mocks/dataaccess/MockSubmission'
import { delay, SynapseClientError } from '../../../SynapseClient'
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
  //   const { accessToken } = useSynapseContext()

  return useQuery<Submission, SynapseClientError>(
    ['dataAccessSubmission', submissionId],
    async () => {
      // TODO: Replace with SynapseClient, PLFM-7314

      const match = submissions.find(s => s.id === submissionId.toString())
      if (match) {
        await delay(200)
        return match
      } else {
        throw new SynapseClientError(
          404,
          'Submission not found',
          'dataAccessSubmissionUrl',
        )
      }
    },
    options,
  )
}
