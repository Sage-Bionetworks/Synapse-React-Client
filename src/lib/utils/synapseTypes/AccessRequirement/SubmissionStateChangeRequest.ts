import { SUBMISSION_STATE } from './ManagedACTAccessRequirementStatus'

export type SubmissionStateChangeRequest = {
  /** The ID of the requested Submission. */
  submissionId: string
  /** The state of a Submission. */
  newState: SUBMISSION_STATE
  /** The reason that the Submission is rejected if newState is REJECTED. */
  rejectedReason: string
}
