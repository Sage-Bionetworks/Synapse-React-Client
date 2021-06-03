import React, { useEffect } from 'react'
import { useErrorHandler } from 'react-error-boundary'
import { useSearchInfinite } from '../../../../utils/hooks/SynapseAPI/useSearch'
import { Hit, SearchQuery } from '../../../../utils/synapseTypes/Search'
import { toError } from '../../../../utils/ErrorUtils'
import { EntityDetailsListSharedProps } from '../EntityDetailsList'
import { DetailsView } from '../view/DetailsView'

type SearchDetailsProps = EntityDetailsListSharedProps & {
  searchQuery: SearchQuery
}

export const SearchDetails: React.FunctionComponent<SearchDetailsProps> = ({
  searchQuery,
  showVersionSelection,
  selectColumnType,
  selected,
  visibleTypes: includeTypes,
  selectableTypes,
  toggleSelection,
}) => {
  const {
    data,
    status,
    isFetching,
    hasNextPage,
    fetchNextPage,
    error,
    isError,
  } = useSearchInfinite(searchQuery, {
    enabled: !!searchQuery.queryTerm,
  })
  const handleError = useErrorHandler()

  useEffect(() => {
    if (isError && error) {
      handleError(toError(error))
    }
  }, [isError, error, handleError])

  if (searchQuery.queryTerm) {
    return (
      <DetailsView
        entities={
          data
            ? ([] as Hit[]).concat.apply(
                [],
                data.pages.map(page => page.hits),
              )
            : []
        }
        queryStatus={status}
        queryIsFetching={isFetching}
        hasNextPage={hasNextPage}
        fetchNextPage={fetchNextPage}
        showVersionSelection={showVersionSelection}
        selectColumnType={selectColumnType}
        selected={selected}
        visibleTypes={includeTypes}
        selectableTypes={selectableTypes}
        toggleSelection={toggleSelection}
        noResultsPlaceholder={
          <>
            <img
              className="SearchPlaceholderImage"
              alt="No results found"
              src="https://s3.amazonaws.com/static.synapse.org/images/search-sad.svg"
            />
            <p>
              No results for &ldquo;{searchQuery.queryTerm.join(' ')}&rdquo;
            </p>
          </>
        }
      />
    )
  } else {
    return (
      <DetailsView
        entities={[]}
        queryStatus={'success'}
        queryIsFetching={false}
        hasNextPage={false}
        showVersionSelection={showVersionSelection}
        selectColumnType={selectColumnType}
        selected={selected}
        visibleTypes={includeTypes}
        selectableTypes={selectableTypes}
        toggleSelection={toggleSelection}
        noResultsPlaceholder={
          <>
            <img
              className="SearchPlaceholderImage"
              alt="Begin searching"
              src="https://s3.amazonaws.com/static.synapse.org/images/search-happy.svg"
            />
            <p>Enter a term or Synapse ID to start searching</p>
          </>
        }
      />
    )
  }
}
