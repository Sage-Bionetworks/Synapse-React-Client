import { SynapseClient } from '../../..'
import { SynapseClientError } from '../../../SynapseClientError'
import { useSynapseContext } from '../../../SynapseContext'
import { useInfiniteQuery, UseInfiniteQueryOptions } from 'react-query'
import { PaginatedResults, Reference } from '../../../synapseTypes'

export function useGetEntitiesGeneratedByActivityInfinite(
  activityId: string,
  options?: UseInfiniteQueryOptions<
    PaginatedResults<Reference>,
    SynapseClientError,
    PaginatedResults<Reference>
  >,
) {
  const { accessToken } = useSynapseContext()

  return useInfiniteQuery<PaginatedResults<Reference>, SynapseClientError>(
    ['entitiesGeneratedByActivity', activityId],
    async context => {
      return SynapseClient.getEntitiesGeneratedByActivity(
        activityId,
        50, // limit
        context.pageParam, // pass the context.pageParam for the new offset
        accessToken,
      )
    },
    {
      ...options,
      getNextPageParam: (lastPage, pages) => {
        if (lastPage.results.length > 0)
          return pages.length * 50 //set the new offset to (page * limit)
        else return undefined
      },
    },
  )
}
