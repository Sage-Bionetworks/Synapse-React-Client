import React from 'react'
import { useGetFavorites } from '../../../../utils/hooks/SynapseAPI/useFavorites'
import { DetailsView } from '../view/DetailsView'
import { EntityFinderDetailsSharedProps } from './../EntityFinderDetails'

type FavoritesDetailsProps = EntityFinderDetailsSharedProps

export const FavoritesDetails: React.FunctionComponent<FavoritesDetailsProps> = ({
  sessionToken,
  showVersionSelection,
  selectColumnType,
  selected,
  includeTypes,
  selectableTypes,
  toggleSelection,
}) => {
  const { data, status, isFetching } = useGetFavorites(sessionToken)
  return (
    <DetailsView
      sessionToken={sessionToken}
      entities={data ? data.results : []}
      queryStatus={status}
      queryIsFetching={isFetching}
      hasNextPage={false}
      showVersionSelection={showVersionSelection}
      selectColumnType={selectColumnType}
      selected={selected}
      showTypes={includeTypes}
      selectableTypes={selectableTypes}
      toggleSelection={toggleSelection}
    ></DetailsView>
  )
}
