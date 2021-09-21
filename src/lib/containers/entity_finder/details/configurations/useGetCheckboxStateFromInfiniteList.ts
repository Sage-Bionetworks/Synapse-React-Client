import { useEffect, useState } from 'react'
import { FetchNextPageOptions, InfiniteQueryObserverResult } from 'react-query'
import { convertToEntityType } from '../../../../utils/functions/EntityTypeUtils'
import { SynapseClientError } from '../../../../utils/SynapseClient'
import { EntityHeader, EntityType } from '../../../../utils/synapseTypes'

function getCheckboxStateFromInfiniteList<T>(
  entities: EntityHeader[],
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
        !selectableTypes.includes(convertToEntityType(e.type)),
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

export default function useGetCheckboxStateFromInfiniteList(
  entities: EntityHeader[],
  selected: Map<string, number>,
  hasNextPage: boolean | undefined,
  fetchNextPage: (
    options?: FetchNextPageOptions | undefined,
  ) => Promise<InfiniteQueryObserverResult<T, SynapseClientError>>,
  selectableTypes: EntityType[],
) {
  const [checkboxState, setCheckboxState] = useState(false)
  useEffect(() => {
    setCheckboxState(
      getCheckboxStateFromInfiniteList(
        entities,
        selected,
        hasNextPage,
        fetchNextPage,
        selectableTypes,
      ),
    )
  }, [entities, fetchNextPage, hasNextPage, selected, selectableTypes])

  return checkboxState
}
