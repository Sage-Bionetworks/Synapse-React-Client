import * as React from 'react'
import { useEffect, useMemo, useState } from 'react'
import useDeepCompareEffect from 'use-deep-compare-effect'
import {
  isFacetAvailable,
  isFiltered as isFilteredUtil,
  removeLockedFilterFromData,
} from '../utils/functions/queryUtils'
import { parseEntityIdAndVersionFromSqlStatement } from '../utils/functions/sqlFunctions'
import { useGetEntity } from '../utils/hooks/SynapseAPI/entity/useEntity'
import { useInfiniteQueryResultBundle } from '../utils/hooks/SynapseAPI/entity/useGetQueryResultBundle'
import {
  AsynchronousJobStatus,
  QueryBundleRequest,
  QueryResultBundle,
  Table,
} from '../utils/synapseTypes'
import {
  InfiniteQueryContextType,
  LockedFilter,
  QueryContextProvider,
} from './QueryContext'
import useImmutableTableQuery from './useImmutableTableQuery'

export const QUERY_FILTERS_EXPANDED_CSS: string = 'isShowingFacetFilters'
export const QUERY_FILTERS_COLLAPSED_CSS: string = 'isHidingFacetFilters'

export type InfiniteQueryWrapperProps = {
  children: React.ReactNode | React.ReactNode[]
  initQueryRequest: QueryBundleRequest
  componentIndex?: number //used for deep linking
  shouldDeepLink?: boolean
  onQueryChange?: (newQueryJson: string) => void
  onQueryResultBundleChange?: (newQueryResultBundleJson: string) => void
  lockedFilter?: LockedFilter
}

export type SearchQuery = {
  columnName: string
  searchText: string
}

/**
 * Component that manages the state of a Synapse table query. Data can be accessed via QueryContext using
 * either `useQueryContext` or `QueryContextConsumer`.
 */
export function InfiniteQueryWrapper(props: InfiniteQueryWrapperProps) {
  const {
    initQueryRequest,
    onQueryChange,
    onQueryResultBundleChange,
    lockedFilter,
    componentIndex = 0,
    shouldDeepLink = false,
  } = props
  const [currentAsyncStatus, setCurrentAsyncStatus] = useState<
    AsynchronousJobStatus<QueryBundleRequest, QueryResultBundle> | undefined
  >(undefined)

  const { getInitQueryRequest, getLastQueryRequest, setQuery } =
    useImmutableTableQuery({
      initQueryRequest,
      lockedFilter,
      componentIndex,
      shouldDeepLink,
    })

  const lastQueryRequest = useMemo(() => {
    return getLastQueryRequest()
  }, [getLastQueryRequest])

  const {
    data: infiniteData,
    hasNextPage,
    fetchPreviousPage,
    fetchNextPage,
    isFetchingNextPage,
    isLoading: queryIsLoading,
    error,
    isPreviousData: newQueryIsFetching,
    remove,
  } = useInfiniteQueryResultBundle(
    lastQueryRequest,
    {
      // We use `keepPreviousData` because we don't want to clear out the current data when the query is modified via the UI
      keepPreviousData: true,
    },
    setCurrentAsyncStatus,
  )

  function executeQueryRequest(queryRequest: QueryBundleRequest) {
    setQuery(queryRequest)
    /**
     * TODO: We remove the cached data because it can interfere with user controls, such as the QueryFilter.
     * For example, if you filter on a facet with value ["a"], then value ["a", "b"], then value ["a"] again,
     * we'll have a cache hit on the last query, so we won't get a loading state, but the controls haven't been updated
     * to handle cache hits. Forcing a cache miss here fixes this, but ideally the controls should handle this case.
     */
    remove()
  }

  // Indicate if we're fetching data for the first time (queryIsLoading) or if we're fetching data for a brand new query (newQueryIsFetching)
  const isLoadingNewBundle = queryIsLoading || newQueryIsFetching

  const { entityId, versionNumber } = parseEntityIdAndVersionFromSqlStatement(
    lastQueryRequest.query.sql,
  )!

  const { data: entity } = useGetEntity<Table>(entityId, versionNumber)

  const [currentPage, setCurrentPage] = useState<number | 'ALL'>(0)

  async function appendNextPageToResults(): Promise<void> {
    if (!hasNextPage) {
      throw new Error(
        'Called appendNextPageToResults when there is no next page',
      )
    }
    await fetchNextPage()
    setCurrentPage('ALL')
  }

  async function goToNextPage(): Promise<void> {
    if (!hasNextPage) {
      throw new Error('Called goToNextPage when there is no next page')
    }
    if (currentPage === 'ALL') {
      throw new Error('Cannot go to next page when all pages are displayed')
    }
    await fetchNextPage()
    setCurrentPage(currentPage + 1)
  }

  const hasPreviousPage = currentPage !== 'ALL' && currentPage > 0

  async function goToPreviousPage(): Promise<void> {
    if (currentPage === 'ALL') {
      throw new Error('Cannot go to previous page when all pages are displayed')
    }
    if (!hasPreviousPage) {
      throw new Error('Called goToNextPage when there is no next page')
    }

    await fetchPreviousPage()
    setCurrentPage(currentPage - 1)
  }

  const data: QueryResultBundle | undefined = useMemo(() => {
    if (
      infiniteData == null ||
      infiniteData.pages.length === 0 ||
      infiniteData.pages[0].responseBody == null
    ) {
      return undefined
    }

    if (currentPage === 'ALL') {
      // Modify the first page so the result is the concatenation of all of the fetched rows.
      return {
        ...infiniteData?.pages[0].responseBody,
        queryResult: {
          ...infiniteData?.pages[0].responseBody?.queryResult,
          queryResults: {
            ...infiniteData?.pages[0].responseBody?.queryResult?.queryResults,
            rows:
              infiniteData.pages.flatMap(
                page => page.responseBody!.queryResult?.queryResults.rows,
              ) ?? [],
          },
        },
      } as QueryResultBundle
    }

    return infiniteData?.pages[currentPage].responseBody
  }, [currentPage, infiniteData])

  useDeepCompareEffect(() => {
    if (onQueryChange) {
      onQueryChange(JSON.stringify(lastQueryRequest.query))
    }
  }, [onQueryChange, lastQueryRequest.query])

  useEffect(() => {
    if (data && onQueryResultBundleChange) {
      onQueryResultBundleChange(JSON.stringify(data))
    }
  }, [data, onQueryResultBundleChange])

  const isFacetsAvailable = data
    ? isFacetAvailable(data.facets, data.selectColumns)
    : true

  /**
   * remove a particular facet name (e.g. study) and its all possible values based on the parameter specified in the url
   * this is to remove the facet from the charts, search and filter.
   * @return data: QueryResultBundle
   */
  const dataWithLockedFilterRemoved = useMemo(() => {
    return removeLockedFilterFromData(data, lockedFilter)
  }, [data, lockedFilter])

  const isFiltered = useMemo(() => {
    const request = getLastQueryRequest()
    return isFilteredUtil(request.query)
  }, [getLastQueryRequest])

  const context: InfiniteQueryContextType = {
    data: dataWithLockedFilterRemoved,
    isLoadingNewPage: isFetchingNextPage,
    hasNextPage: !!hasNextPage,
    hasPreviousPage: !!hasPreviousPage,
    isLoadingNewBundle: isLoadingNewBundle,
    getLastQueryRequest,
    getInitQueryRequest,
    error: error,
    entity,
    executeQueryRequest,
    isFacetsAvailable,
    asyncJobStatus: currentAsyncStatus,
    appendNextPageToResults: appendNextPageToResults,
    goToNextPage,
    goToPreviousPage,
    isFiltered,
  }
  /**
   * Render the children without any formatting
   */
  const { children } = props
  const loadingCursorClass =
    isLoadingNewBundle || isFetchingNextPage ? 'SRC-logo-cursor' : ''
  return (
    <QueryContextProvider queryContext={context}>
      <div
        className={`SRC-wrapper ${loadingCursorClass} ${
          isFacetsAvailable ? 'has-facets' : ''
        }`}
      >
        {children}
      </div>
    </QueryContextProvider>
  )
}
