import React, { useState } from 'react'
import { useGetEntityChildrenInfinite } from '../../../../utils/hooks/SynapseAPI/useGetEntityChildren'
import { Direction, EntityHeader, SortBy } from '../../../../utils/synapseTypes'
import { DetailsView } from '../view/DetailsView'
import { EntityDetailsListSharedProps } from '../EntityDetailsList'

type EntityChildrenDetailsProps = EntityDetailsListSharedProps & {
  parentContainerId: string
}

export const EntityChildrenDetails: React.FunctionComponent<EntityChildrenDetailsProps> = ({
  sessionToken,
  parentContainerId,
  includeTypes,
  showVersionSelection,
  selectColumnType,
  selected,
  selectableTypes,
  toggleSelection,
}) => {
  const [sortBy, setSortBy] = useState<SortBy>(SortBy.NAME)
  const [sortDirection, setSortDirection] = useState<Direction>(Direction.ASC)

  const {
    data,
    status,
    isFetching,
    hasNextPage,
    fetchNextPage,
  } = useGetEntityChildrenInfinite(sessionToken, {
    parentId: parentContainerId,
    includeTypes: includeTypes,
    sortBy: sortBy,
    sortDirection: sortDirection,
  })
  return (
    <DetailsView
      sessionToken={sessionToken}
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
      includeTypes={includeTypes}
      selectableTypes={selectableTypes}
      toggleSelection={toggleSelection}
    ></DetailsView>
  )
}
