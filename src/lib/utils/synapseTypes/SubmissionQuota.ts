// https://docs.synapse.org/rest/org/sagebionetworks/evaluation/model/SubmissionQuota.html

export type SubmissionQuota = {
  firstRoundStart: string
  roundDurationMillis: number
  numberOfRounds: number
  submissionLimit: number
}
