import React from 'react'
import { useSearchInfinite } from '../../../../utils/hooks/SynapseAPI/search/useSearch'
import { SearchQuery } from '../../../../utils/synapseTypes/Search'
import { EntityDetailsListSharedProps } from '../EntityDetailsList'
import { DetailsView } from '../view/DetailsView'

type SearchDetailsProps = EntityDetailsListSharedProps & {
  searchQuery: SearchQuery
}

export const SearchDetails: React.FunctionComponent<SearchDetailsProps> = ({
  searchQuery,
  ...sharedProps
}) => {
  const { data, isLoading, hasNextPage, fetchNextPage, isFetchingNextPage } =
    useSearchInfinite(searchQuery, {
      enabled: !!searchQuery.queryTerm,
      useErrorBoundary: true,
    })

  if (searchQuery.queryTerm) {
    return (
      <DetailsView
        entities={data?.pages.flatMap(page => page.hits) ?? []}
        isLoading={isLoading}
        hasNextPage={hasNextPage}
        fetchNextPage={fetchNextPage}
        isFetchingNextPage={isFetchingNextPage}
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
        isLoading={false}
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
