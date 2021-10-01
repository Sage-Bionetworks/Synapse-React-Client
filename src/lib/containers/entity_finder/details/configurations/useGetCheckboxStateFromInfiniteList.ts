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
  hasNextPage: boolean | undefined,
  fetchNextPage: (
    options?: FetchNextPageOptions | undefined,
  ) => Promise<InfiniteQueryObserverResult<T, SynapseClientError>>,
  selectableTypes: EntityType[],
): boolean {
  if (entities.length === 0 || selected.size === 0) {
    return false
  } else {
    const allFetchedChildrenAreSelected = entities.every(
      e =>
        selected.has(e.id) ||
        !selectableTypes.includes(getEntityTypeFromHeader(e)),
    )
    if (allFetchedChildrenAreSelected && hasNextPage) {
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
  hasNextPage: boolean | undefined,
  fetchNextPage: (
    options?: FetchNextPageOptions | undefined,
  ) => Promise<InfiniteQueryObserverResult<T, SynapseClientError>>,
  selectableTypes: EntityType[],
) {
  const [isSelectAll, setIsSelectAll] = useState(false)
  useEffect(() => {
    setIsSelectAll(
      getIsAllSelectedFromInfiniteList(
        entities,
        selected,
        hasNextPage,
        fetchNextPage,
        selectableTypes,
      ),
    )
  }, [entities, fetchNextPage, hasNextPage, selected, selectableTypes])

  return isSelectAll
}
