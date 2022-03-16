import React, { useEffect, useState } from 'react'
import { useErrorHandler } from 'react-error-boundary'
import { toError } from '../../../../utils/ErrorUtils'
import { useGetEntityChildrenInfinite } from '../../../../utils/hooks/SynapseAPI/useGetEntityChildren'
import { Direction, SortBy } from '../../../../utils/synapseTypes'
import { EntityDetailsListSharedProps } from '../EntityDetailsList'
import { DetailsView } from '../view/DetailsView'
import useGetIsAllSelectedFromInfiniteList from '../../../../utils/hooks/useGetIsAllSelectedInfiniteList'

type EntityChildrenDetailsProps = EntityDetailsListSharedProps & {
  parentContainerId: string
}

export const EntityChildrenDetails: React.FunctionComponent<EntityChildrenDetailsProps> = ({
  parentContainerId,
  ...sharedProps
}) => {
  const [sortBy, setSortBy] = useState<SortBy>(SortBy.NAME)
  const [sortDirection, setSortDirection] = useState<Direction>(Direction.ASC)
  const handleError = useErrorHandler()

  const getChildrenInfiniteRequestObject = {    
    parentId: parentContainerId,
    includeTotalChildCount: true,
    includeTypes: sharedProps.visibleTypes,
    sortBy: sortBy,
    sortDirection: sortDirection,
  }
  const {
    data,
    isLoading,
    isFetchingNextPage,
    hasNextPage,
    fetchNextPage,
    isError,
    error,
  } = useGetEntityChildrenInfinite(getChildrenInfiniteRequestObject)
  const entities = data?.pages.flatMap(page => page.page) ?? []
  const totalProgress = data?.pages[0].totalChildCount

  const selectAllCheckboxState = useGetIsAllSelectedFromInfiniteList(
    entities,
    sharedProps.selected,
    sharedProps.selectableTypes,
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage,
  )

  useEffect(() => {
    if (isError && error) {
      handleError(toError(error))
    }
  }, [isError, error, handleError])

  return (
    <DetailsView
      entities={entities}
      isLoading={isLoading}
      hasNextPage={hasNextPage}
      fetchNextPage={fetchNextPage}
      isFetchingNextPage={isFetchingNextPage}
      sort={{ sortBy, sortDirection }}
      setSort={(newSortBy, newSortDirection) => {
        setSortBy(newSortBy)
        setSortDirection(newSortDirection)
      }}
      selectAllIsChecked={selectAllCheckboxState}
      getChildrenInfiniteRequestObject={getChildrenInfiniteRequestObject}
      totalProgress={totalProgress}
      {...sharedProps}
    />
  )
}
