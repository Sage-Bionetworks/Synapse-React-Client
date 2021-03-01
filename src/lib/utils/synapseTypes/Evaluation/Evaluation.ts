import { SubmissionQuota } from './SubmissionQuota'

/** @deprecated. No replacement. Not used for any logic in backend*/
export enum EvaluationStatus {
  PLANNED = 'PLANNED',
  OPEN = 'OPEN',
  CLOSED = 'CLOSED',
  COMPLETED = 'COMPLETED',
}

// https://docs.synapse.org/rest/org/sagebionetworks/evaluation/model/Evaluation.html
export type Evaluation = {
  id?: string
  etag?: string
  name?: string
  description?: string
  ownerId?: string
  createdOn?: string
  contentSource?: string
  submissionInstructionsMessage?: string
  submissionReceiptMessage?: string
  /** @deprecated. No replacement. Not used for any logic in backend*/
  status?: EvaluationStatus
  /** @deprecated use REST APIs for EvaluationRound instead */
  quota?: SubmissionQuota
}
