import { Map } from 'immutable'
import { useEffect, useState } from 'react'
import { FetchNextPageOptions, InfiniteQueryObserverResult } from 'react-query'
import { getEntityTypeFromHeader } from '../functions/EntityTypeUtils'
import { SynapseClientError } from '../SynapseClient'
import { EntityHeader, EntityType, ProjectHeader } from '../synapseTypes'
import { Hit } from '../synapseTypes/Search'

/**
 * Given a list of entities and a map of which are selected, return a boolean indicating if all of the entities that can be selected
 * are selected.
 *
 * This function is compatible with react-query's useInfiniteQuery pagination, in which case it's recommended to use the hook version
 * of this function to get updates as pages are fetched and updated.
 *
 * We don't currently support an indeterminate checkbox state because that would require always fetching all pages of a given query, which does not scale.
 * @param entities An arbitrary list of entities that are displayed
 * @param selected A map where keys are selected entity IDs
 * @param selectableTypes A list of entity types which can be selected. Will be used to filter the list of entities
 * @param hasNextPage Whether or not there are additional pages of entities (typically supplied by useInfiniteQuery)
 * @param fetchNextPage A function to be invoked to fetch an additional page of entities (typically supplied by useInfiniteQuery)
 * @param isFetchingNextPage Indicates if the next page of entities is being fetched (typically supplied by useInfiniteQuery)
 * @returns  true iff all selectable entities have been selected, and there are no additional pages to fetch (because an unfetched page may include an unselected entity)
 */
export function getIsAllSelectedFromInfiniteList<T>(
  entities: (EntityHeader | ProjectHeader | Hit)[],
  selected: Map<string, number>,
  selectableTypes: EntityType[],
  hasNextPage?: boolean | undefined,
  fetchNextPage?: (
    options?: FetchNextPageOptions | undefined,
  ) => Promise<InfiniteQueryObserverResult<T, SynapseClientError>>,
  isFetchingNextPage?: boolean,
): boolean {
  if (entities.length === 0 || selected.size === 0) {
    return false
  } else {
    const allSelectableFetchedChildrenAreSelected = entities.every(
      e =>
        selected.has(e.id) ||
        !selectableTypes.includes(getEntityTypeFromHeader(e)),
    )
    if (
      allSelectableFetchedChildrenAreSelected &&
      hasNextPage &&
      fetchNextPage &&
      !isFetchingNextPage
    ) {
      // We don't yet know if the checkbox should be true or false, so get the next page
      fetchNextPage()
      return false
    } else {
      if (hasNextPage || isFetchingNextPage) {
        // We are waiting on the next page to be retrieved
        return false
      }

      // At this point, we've fetched all of the pages or encountered an unselected entity
      // The checkbox should be true if there are no unselected entities, and there's at least one selectable entity
      const selectableEntitiesArePresent = entities.some(e =>
        selectableTypes.includes(getEntityTypeFromHeader(e)),
      )
      return (
        allSelectableFetchedChildrenAreSelected && selectableEntitiesArePresent
      )
    }
  }
}

/**
/**
 * Given a list of entities and a map of which are selected, return a boolean indicating if all of the entities that can be selected
 * are selected.
 * 
 * This function is compatible with react-query's useInfiniteQuery pagination.
 * 
 * There is also a non-hook version of this function that can be called in contexts where hooks cannot be used.
 * @param entities An arbitrary list of entities that are displayed
 * @param selected A map where keys are selected entity IDs
 * @param selectableTypes A list of entity types which can be selected. Will be used to filter the list of entities
 * @param hasNextPage Whether or not there are additional pages of entities (typically supplied by useInfiniteQuery)
 * @param fetchNextPage A function to be invoked to fetch an additional page of entities (typically supplied by useInfiniteQuery)
 * @param isFetchingNextPage Indicates if the next page of entities is being fetched (typically supplied by useInfiniteQuery)
 * @returns  true iff all selectable entities have been selected, and there are no additional pages to fetch (because an unfetched page may include an unselected entity)
 */
export default function useGetIsAllSelectedFromInfiniteList<T>(
  entities: (EntityHeader | ProjectHeader | Hit)[],
  selected: Map<string, number>,
  selectableTypes: EntityType[],
  hasNextPage?: boolean | undefined,
  fetchNextPage?: (
    options?: FetchNextPageOptions | undefined,
  ) => Promise<InfiniteQueryObserverResult<T, SynapseClientError>>,
  isFetchingNextPage?: boolean,
) {
  const [isSelectAll, setIsSelectAll] = useState(false)
  useEffect(() => {
    setIsSelectAll(
      getIsAllSelectedFromInfiniteList(
        entities,
        selected,
        selectableTypes,
        hasNextPage,
        fetchNextPage,
        isFetchingNextPage,
      ),
    )
  }, [
    entities,
    fetchNextPage,
    hasNextPage,
    selected,
    selectableTypes,
    isFetchingNextPage,
  ])

  return isSelectAll
}
