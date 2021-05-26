import React, { useEffect, useState } from 'react'
import { useErrorHandler } from 'react-error-boundary'
import { useGetEntityChildrenInfinite } from '../../../../utils/hooks/SynapseAPI/useGetEntityChildren'
import { Direction, EntityHeader, SortBy } from '../../../../utils/synapseTypes'
import { toError } from '../../../../utils/ErrorUtils'
import { EntityDetailsListSharedProps } from '../EntityDetailsList'
import { DetailsView } from '../view/DetailsView'

type EntityChildrenDetailsProps = EntityDetailsListSharedProps & {
  parentContainerId: string
}

export const EntityChildrenDetails: React.FunctionComponent<EntityChildrenDetailsProps> = ({
  accessToken,
  parentContainerId,
  visibleTypes: includeTypes,
  showVersionSelection,
  selectColumnType,
  selected,
  selectableTypes,
  toggleSelection,
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
  } = useGetEntityChildrenInfinite(accessToken, {
    parentId: parentContainerId,
    includeTypes: includeTypes,
    sortBy: sortBy,
    sortDirection: sortDirection,
  })

  useEffect(() => {
    if (isError && error) {
      handleError(toError(error))
    }
  }, [isError, error, handleError])

  return (
    <DetailsView
      accessToken={accessToken}
      entities={
        data
          ? ([] as EntityHeader[]).concat.apply(
              [],
              data.pages.map(page => page.page),
            )
          : []
      }
      queryStatus={status}
      queryIsFetching={isFetching}
      hasNextPage={hasNextPage}
      fetchNextPage={fetchNextPage}
      sort={{ sortBy, sortDirection }}
      setSort={(newSortBy, newSortDirection) => {
        setSortBy(newSortBy)
        setSortDirection(newSortDirection)
      }}
      showVersionSelection={showVersionSelection}
      selectColumnType={selectColumnType}
      selected={selected}
      visibleTypes={includeTypes}
      selectableTypes={selectableTypes}
      toggleSelection={toggleSelection}
    ></DetailsView>
  )
}
