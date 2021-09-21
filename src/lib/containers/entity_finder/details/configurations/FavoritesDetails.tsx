import React, { useEffect } from 'react'
import { useErrorHandler } from 'react-error-boundary'
import { toError } from '../../../../utils/ErrorUtils'
import { useGetFavoritesInfinite } from '../../../../utils/hooks/SynapseAPI/useFavorites'
import { EntityDetailsListSharedProps } from '../EntityDetailsList'
import { DetailsView } from '../view/DetailsView'
import useGetCheckboxStateFromInfiniteList from './useGetCheckboxStateFromInfiniteList'

type FavoritesDetailsProps = EntityDetailsListSharedProps

export const FavoritesDetails: React.FunctionComponent<FavoritesDetailsProps> = ({
  ...sharedProps
}) => {
  const {
    data,
    status,
    isFetching,
    hasNextPage,
    fetchNextPage,
    isError,
    error,
  } = useGetFavoritesInfinite()
  const handleError = useErrorHandler()

  const entities = data?.pages.flatMap(page => page.results) ?? []

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
      selectAllCheckboxStatus={selectAllCheckboxState}
      {...sharedProps}
    />
  )
}
