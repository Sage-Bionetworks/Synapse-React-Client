import {
  useInfiniteQuery,
  UseInfiniteQueryOptions,
} from 'react-query'
import { SynapseClient } from '../..'
import { SynapseClientError } from '../../SynapseClient'
import { useSynapseContext } from '../../SynapseContext'
import { ChallengePagedResults } from '../../synapseTypes/ChallengePagedResults'

export function useGetUserChallengesInfinite(
  userId: string,
  options?: UseInfiniteQueryOptions<
    ChallengePagedResults,
    SynapseClientError,
    ChallengePagedResults
  >,
) {
  const { accessToken } = useSynapseContext()

  return useInfiniteQuery<ChallengePagedResults, SynapseClientError>(
    ['getuserchallenges', userId],
    async context => {
      const challenges = await SynapseClient.getUserChallenges(accessToken,
        userId,
        context.pageParam, // pass the context.pageParam for the new offset
        10 // limit
      )
      // also look up the challenge project names (if there are challenges)
      if (challenges.results.length > 0) {
        const challengeProjectIds = Array.from(challenges.results, challenge => challenge.projectId)
        const challengeProjects = await SynapseClient.getEntityHeadersByIds(challengeProjectIds)
        challengeProjects.results.forEach((entityHeader, index) => { challenges.results[index].projectName = entityHeader.name} )
      }
      return challenges
    },
    {
      ...options,
      getNextPageParam: (lastPage, pages) => {
        if (lastPage.results.length > 0)
          return pages.length * 10  //set the new offset to (page * limit)
        else return undefined
      },
    },
  )
}