//https://docs.synapse.org/rest/org/sagebionetworks/evaluation/model/EvaluationRoundLimit.html
export type EvaluationRoundLimit = {
  limitType: 'TOTAL' | 'DAILY' | 'WEEKLY' | 'MONTHLY'
  maximumSubmissions: number // integer
}
