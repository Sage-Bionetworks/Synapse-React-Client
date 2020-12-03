import { SubmissionQuota } from './SubmissionQuota'

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
  status?: EvaluationStatus
  submissionInstructionsMessage?: string
  submissionReceiptMessage?: string
  /** @deprecated use REST APIs for EvaluationRound instead */
  quota?: SubmissionQuota
}
