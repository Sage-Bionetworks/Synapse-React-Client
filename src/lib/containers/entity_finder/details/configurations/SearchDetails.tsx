import React from 'react'
import { useSearchInfinite } from '../../../../utils/hooks/SynapseAPI/useSearch'
import { Hit, SearchQuery } from '../../../../utils/synapseTypes/Search'
import { DetailsView } from '../view/DetailsView'
import { EntityFinderDetailsSharedProps } from './../EntityFinderDetails'

type SearchDetailsProps = EntityFinderDetailsSharedProps & {
  searchQuery: SearchQuery
}

export const SearchDetails: React.FunctionComponent<SearchDetailsProps> = ({
  sessionToken,
  searchQuery,
  showVersionSelection,
  selectColumnType,
  selected,
  includeTypes,
  selectableTypes,
  toggleSelection,
}) => {
  const {
    data,
    status,
    isFetching,
    hasNextPage,
    fetchNextPage,
  } = useSearchInfinite(searchQuery, sessionToken, {
    enabled: !!searchQuery.queryTerm,
  })
  if (searchQuery.queryTerm) {
    return (
      <DetailsView
        sessionToken={sessionToken}
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
        showTypes={includeTypes}
        selectableTypes={selectableTypes}
        toggleSelection={toggleSelection}
      ></DetailsView>
    )
  } else {
    return (
      <DetailsView
        sessionToken={sessionToken}
        entities={[]}
        queryStatus={'success'}
        queryIsFetching={false}
        hasNextPage={false}
        showVersionSelection={showVersionSelection}
        selectColumnType={selectColumnType}
        selected={selected}
        showTypes={includeTypes}
        selectableTypes={selectableTypes}
        toggleSelection={toggleSelection}
        noResultsPlaceholder={
          <div>Enter a term or Synapse ID to start searching</div>
        }
      ></DetailsView>
    )
  }
}
