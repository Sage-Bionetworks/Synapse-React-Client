// http://rest-docs.synapse.org/rest/org/sagebionetworks/repo/model/ChallengePagedResults.html
export type ChallengePagedResults = {
  results: Challenge[]
  totalNumberOfResults: number
}

// http://rest-docs.synapse.org/rest/org/sagebionetworks/repo/model/Challenge.html
export type Challenge = {
  id: string //The ID of this Challenge object
  projectId: string //The ID of the Project the challenge is used with.
  participantTeamId: string //The ID of the Team which users join to participate in the Challenge
  etag: string
  projectName: string //client-side addition to the object
}
