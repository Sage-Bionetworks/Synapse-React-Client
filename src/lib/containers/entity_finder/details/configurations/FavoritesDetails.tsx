import React, { useEffect } from 'react'
import { useErrorHandler } from 'react-error-boundary'
import { toError } from '../../../../utils/ErrorUtils'
import { useGetFavoritesInfinite } from '../../../../utils/hooks/SynapseAPI/useFavorites'
import { EntityDetailsListSharedProps } from '../EntityDetailsList'
import { DetailsView } from '../view/DetailsView'
import useGetIsAllSelectedFromInfiniteList from './useGetIsAllSelectedInfiniteList'

type FavoritesDetailsProps = EntityDetailsListSharedProps

export const FavoritesDetails: React.FunctionComponent<FavoritesDetailsProps> = ({
  ...sharedProps
}) => {
  const {
    data,
    isLoading,
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage,
    isError,
    error,
  } = useGetFavoritesInfinite()
  const handleError = useErrorHandler()

  const entities = data?.pages.flatMap(page => page.results) ?? []

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
      selectAllIsChecked={selectAllCheckboxState}
      {...sharedProps}
    />
  )
}
