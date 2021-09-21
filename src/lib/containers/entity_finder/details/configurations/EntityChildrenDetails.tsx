import React, { useEffect, useState } from 'react'
import { useErrorHandler } from 'react-error-boundary'
import { toError } from '../../../../utils/ErrorUtils'
import { useGetEntityChildrenInfinite } from '../../../../utils/hooks/SynapseAPI/useGetEntityChildren'
import {
  Direction, SortBy
} from '../../../../utils/synapseTypes'
import { EntityDetailsListSharedProps } from '../EntityDetailsList'
import { DetailsView } from '../view/DetailsView'
import useGetCheckboxStateFromInfiniteList from './useGetCheckboxStateFromInfiniteList'

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

  const {
    data,
    status,
    isFetching,
    hasNextPage,
    fetchNextPage,
    isError,
    error,
  } = useGetEntityChildrenInfinite({
    parentId: parentContainerId,
    includeTypes: sharedProps.visibleTypes,
    sortBy: sortBy,
    sortDirection: sortDirection,
  })

  const entities = data?.pages.flatMap(page => page.page) ?? []

  const selectAllCheckboxState = useGetCheckboxStateFromInfiniteList(
    entities,
    sharedProps.selected,
    hasNextPage,
    fetchNextPage,
    sharedProps.selectableTypes,
  )

  useEffect(() => {
    if (isError && error) {
      handleError(toError(error))
    }
  }, [isError, error, handleError])

  return (
    <DetailsView
      entities={entities}
      queryStatus={status}
      queryIsFetching={isFetching}
      hasNextPage={hasNextPage}
      fetchNextPage={fetchNextPage}
      sort={{ sortBy, sortDirection }}
      setSort={(newSortBy, newSortDirection) => {
        setSortBy(newSortBy)
        setSortDirection(newSortDirection)
      }}
      selectAllCheckboxStatus={selectAllCheckboxState}
      {...sharedProps}
    />
  )
}
