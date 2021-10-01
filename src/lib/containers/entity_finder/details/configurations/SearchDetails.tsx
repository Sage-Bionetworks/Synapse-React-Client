import React, { useEffect } from 'react'
import { useErrorHandler } from 'react-error-boundary'
import { useSearchInfinite } from '../../../../utils/hooks/SynapseAPI/useSearch'
import { SearchQuery } from '../../../../utils/synapseTypes/Search'
import { toError } from '../../../../utils/ErrorUtils'
import { EntityDetailsListSharedProps } from '../EntityDetailsList'
import { DetailsView } from '../view/DetailsView'

type SearchDetailsProps = EntityDetailsListSharedProps & {
  searchQuery: SearchQuery
}

export const SearchDetails: React.FunctionComponent<SearchDetailsProps> = ({
  searchQuery,
  ...sharedProps
}) => {
  const {
    data,
    status,
    isLoading,
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
        entities={data?.pages.flatMap(page => page.hits) ?? []}
        queryStatus={status}
        queryIsFetching={isLoading}
        hasNextPage={hasNextPage}
        fetchNextPage={fetchNextPage}
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
        {...sharedProps}
        enableSelectAll={false} // Disable select all for search
      />
    )
  } else {
    return (
      <DetailsView
        entities={[]}
        queryStatus={'success'}
        queryIsFetching={false}
        hasNextPage={false}
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
        {...sharedProps}
        enableSelectAll={false} // Disable select all for search
      />
    )
  }
}
