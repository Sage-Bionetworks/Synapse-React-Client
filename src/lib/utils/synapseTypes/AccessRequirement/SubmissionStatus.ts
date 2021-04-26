/**
 * http://rest-docs.synapse.org/rest/org/sagebionetworks/repo/model/dataaccess/SubmissionStatus.html
 * The status of a Submission. Note this is a different type from SubmissionStatus in
 * src/lib/utils/synapseTypes/Forms.ts
 */

import { SUBMISSION_STATE } from './ManagedACTAccessRequirementStatus'

export type SubmissionStatus = {
  submissionId?: string
  submittedBy?: string
  rejectedReason?: string
  state?: SUBMISSION_STATE
  modifiedOn?: string
}