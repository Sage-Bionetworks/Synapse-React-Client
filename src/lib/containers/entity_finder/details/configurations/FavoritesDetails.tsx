import React, { useEffect } from 'react'
import { useErrorHandler } from 'react-error-boundary'
import { useGetFavorites } from '../../../../utils/hooks/SynapseAPI/useFavorites'
import { toError } from '../../../ErrorBanner'
import { EntityDetailsListSharedProps } from '../EntityDetailsList'
import { DetailsView } from '../view/DetailsView'

type FavoritesDetailsProps = EntityDetailsListSharedProps

export const FavoritesDetails: React.FunctionComponent<FavoritesDetailsProps> = ({
  accessToken,
  showVersionSelection,
  selectColumnType,
  selected,
  visibleTypes: includeTypes,
  selectableTypes,
  toggleSelection,
}) => {
  const { data, status, isFetching, isError, error } = useGetFavorites(
    accessToken,
  )
  const handleError = useErrorHandler()

  useEffect(() => {
    if (isError && error) {
      handleError(toError(error))
    }
  }, [isError, error, handleError])

  return (
    <DetailsView
      accessToken={accessToken}
      entities={data ? data.results : []}
      queryStatus={status}
      queryIsFetching={isFetching}
      hasNextPage={false}
      showVersionSelection={showVersionSelection}
      selectColumnType={selectColumnType}
      selected={selected}
      visibleTypes={includeTypes}
      selectableTypes={selectableTypes}
      toggleSelection={toggleSelection}
    ></DetailsView>
  )
}
