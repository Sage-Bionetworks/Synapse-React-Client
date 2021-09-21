import {
  UseInfiniteQueryOptions,
  useQuery,
  UseQueryOptions,
  useInfiniteQuery,
} from 'react-query'
import { SynapseClient } from '../..'
import { SynapseClientError } from '../../SynapseClient'
import { useSynapseContext } from '../../SynapseContext'
import { EntityHeader, PaginatedResults } from '../../synapseTypes'

export function useGetFavorites(
  options?: UseQueryOptions<
    PaginatedResults<EntityHeader>,
    SynapseClientError,
    PaginatedResults<EntityHeader>
  >,
) {
  const { accessToken } = useSynapseContext()
  return useQuery<PaginatedResults<EntityHeader>, SynapseClientError>(
    ['favorites'],
    () => SynapseClient.getUserFavorites(accessToken),
    options,
  )
}

export function useGetFavoritesInfinite(
  options?: UseInfiniteQueryOptions<
    PaginatedResults<EntityHeader>,
    SynapseClientError
  >,
) {
  const LIMIT = 10

  const { accessToken } = useSynapseContext()

  return useInfiniteQuery<PaginatedResults<EntityHeader>, SynapseClientError>(
    ['favorites', 'infinite'],
    async context => {
      return SynapseClient.getUserFavorites(
        accessToken,
        context.pageParam, // pass the context.pageParam for the new offset
        LIMIT,
      )
    },
    {
      ...options,
      getNextPageParam: (lastPage, pages) => {
        if (lastPage.results.length > 0) return pages.length * LIMIT
        //set the new offset to (page * limit)
        else return undefined
      },
    },
  )
}
