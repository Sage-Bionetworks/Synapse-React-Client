import {
  UseInfiniteQueryOptions,
  useQuery,
  UseQueryOptions,
  useInfiniteQuery,
} from 'react-query'
import { SynapseClient } from '../../..'
import { SynapseClientError } from '../../../SynapseClientError'
import { useSynapseContext } from '../../../SynapseContext'
import { EntityHeader, PaginatedResults } from '../../../synapseTypes'
import {
  FavoriteSortBy,
  FavoriteSortDirection,
} from '../../../synapseTypes/FavoriteSortBy'

export function useGetFavorites(
  sort: FavoriteSortBy = 'FAVORITED_ON',
  sortDirection: FavoriteSortDirection = 'DESC',
  options?: UseQueryOptions<
    PaginatedResults<EntityHeader>,
    SynapseClientError,
    PaginatedResults<EntityHeader>
  >,
) {
  const { accessToken } = useSynapseContext()
  return useQuery<PaginatedResults<EntityHeader>, SynapseClientError>(
    ['favorites', sort, sortDirection],
    () =>
      SynapseClient.getUserFavorites(
        accessToken,
        undefined,
        undefined,
        sort,
        sortDirection,
      ),
    options,
  )
}

export function useGetFavoritesInfinite(
  sort: FavoriteSortBy = 'FAVORITED_ON',
  sortDirection: FavoriteSortDirection = 'DESC',
  options?: UseInfiniteQueryOptions<
    PaginatedResults<EntityHeader>,
    SynapseClientError
  >,
) {
  const LIMIT = 10

  const { accessToken } = useSynapseContext()

  return useInfiniteQuery<PaginatedResults<EntityHeader>, SynapseClientError>(
    ['favorites', 'infinite', sort, sortDirection],
    async context => {
      return SynapseClient.getUserFavorites(
        accessToken,
        // pass the context.pageParam for the new offset
        context.pageParam,
        LIMIT,
        sort,
        sortDirection,
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
