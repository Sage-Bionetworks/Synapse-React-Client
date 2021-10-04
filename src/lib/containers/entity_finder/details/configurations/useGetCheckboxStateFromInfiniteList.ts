import { Map } from 'immutable'
import { useEffect, useState } from 'react'
import { FetchNextPageOptions, InfiniteQueryObserverResult } from 'react-query'
import { getEntityTypeFromHeader } from '../../../../utils/functions/EntityTypeUtils'
import { SynapseClientError } from '../../../../utils/SynapseClient'
import {
  EntityHeader,
  EntityType,
  ProjectHeader,
} from '../../../../utils/synapseTypes'
import { Hit } from '../../../../utils/synapseTypes/Search'

export function getIsAllSelectedFromInfiniteList<T>(
  entities: (EntityHeader | ProjectHeader | Hit)[],
  selected: Map<string, number>,
  selectableTypes: EntityType[],
  hasNextPage: boolean | undefined,
  fetchNextPage: (
    options?: FetchNextPageOptions | undefined,
  ) => Promise<InfiniteQueryObserverResult<T, SynapseClientError>>,
  isFetchingNextPage: boolean,
): boolean {
  if (entities.length === 0 || selected.size === 0) {
    return false
  } else {
    const allFetchedChildrenAreSelected = entities.every(
      e =>
        selected.has(e.id) ||
        !selectableTypes.includes(getEntityTypeFromHeader(e)),
    )
    if (allFetchedChildrenAreSelected && hasNextPage && !isFetchingNextPage) {
      fetchNextPage()
      return false
    } else if (allFetchedChildrenAreSelected && !hasNextPage) {
      return true
    } else {
      return false
    }
  }
}

export default function useGetIsAllSelectedFromInfiniteList<T>(
  entities: (EntityHeader | ProjectHeader | Hit)[],
  selected: Map<string, number>,
  selectableTypes: EntityType[],
  hasNextPage: boolean | undefined,
  fetchNextPage: (
    options?: FetchNextPageOptions | undefined,
  ) => Promise<InfiniteQueryObserverResult<T, SynapseClientError>>,
  isFetchingNextPage: boolean,
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
