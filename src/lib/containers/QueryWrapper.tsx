import * as React from 'react'
import { useMemo, useState } from 'react'
import useDeepCompareEffect, {
  useDeepCompareEffectNoCheck,
} from 'use-deep-compare-effect'
import {
  isFacetAvailable,
  isFiltered as isFilteredUtil,
  removeLockedFilterFromData,
} from '../utils/functions/queryUtils'
import { parseEntityIdAndVersionFromSqlStatement } from '../utils/functions/sqlFunctions'
import { useGetEntity } from '../utils/hooks/SynapseAPI/entity/useEntity'
import { useGetQueryResultBundleWithAsyncStatus } from '../utils/hooks/SynapseAPI/entity/useGetQueryResultBundle'
import { DEFAULT_PAGE_SIZE } from '../utils/SynapseConstants'
import {
  AsynchronousJobStatus,
  QueryBundleRequest,
  QueryResultBundle,
  Table,
} from '../utils/synapseTypes'
import {
  LockedFilter,
  PaginatedQueryContextType,
  QueryContextProvider,
} from './QueryContext'
import useImmutableTableQuery from './useImmutableTableQuery'

export const QUERY_FILTERS_EXPANDED_CSS: string = 'isShowingFacetFilters'
export const QUERY_FILTERS_COLLAPSED_CSS: string = 'isHidingFacetFilters'

export type QueryWrapperProps = {
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
export function QueryWrapper(props: QueryWrapperProps) {
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
      shouldDeepLink,
      componentIndex,
    })

  const lastQueryRequest = useMemo(() => {
    return getLastQueryRequest()
  }, [getLastQueryRequest])

  const {
    data: asyncJobStatus,
    isLoading: queryIsLoading,
    error,
    isPreviousData: newQueryIsFetching,
    remove,
  } = useGetQueryResultBundleWithAsyncStatus(
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

  const data = asyncJobStatus?.responseBody

  // Indicate if we're fetching data for the first time (queryIsLoading) or if we're fetching data for a brand new query (newQueryIsFetching)
  const isLoadingNewBundle = queryIsLoading || newQueryIsFetching

  const { entityId, versionNumber } = parseEntityIdAndVersionFromSqlStatement(
    lastQueryRequest.query.sql,
  )!

  const { data: entity } = useGetEntity<Table>(entityId, versionNumber)

  const pageSize = lastQueryRequest.query.limit ?? DEFAULT_PAGE_SIZE
  const currentPage = Math.ceil(
    ((lastQueryRequest.query.offset ?? 0) + Number(pageSize)) / pageSize,
  )

  const setPageSize = (pageSize: number) => {
    const lastQueryRequestDeepClone = getLastQueryRequest()
    lastQueryRequestDeepClone.query.limit = pageSize
    executeQueryRequest(lastQueryRequestDeepClone)
  }

  const goToPage = (pageNum: number) => {
    const lastQueryRequestDeepClone = getLastQueryRequest()
    lastQueryRequestDeepClone.query.offset = (pageNum - 1) * pageSize
    executeQueryRequest(lastQueryRequestDeepClone)
  }

  useDeepCompareEffect(() => {
    if (onQueryChange) {
      onQueryChange(JSON.stringify(lastQueryRequest.query))
    }
  }, [onQueryChange, lastQueryRequest.query])

  // data is sometimes undefined, which useDeepCompareEffect doesn't like
  useDeepCompareEffectNoCheck(() => {
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

  const context: PaginatedQueryContextType = {
    data: dataWithLockedFilterRemoved,
    currentPage,
    pageSize,
    setPageSize,
    isLoadingNewBundle: isLoadingNewBundle,
    getLastQueryRequest,
    getInitQueryRequest,
    error: error,
    entity,
    executeQueryRequest,
    isFacetsAvailable,
    asyncJobStatus: currentAsyncStatus,
    goToPage,
    isFiltered,
  }
  /**
   * Render the children without any formatting
   */
  const { children } = props
  const loadingCursorClass = isLoadingNewBundle ? 'SRC-logo-cursor' : ''
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
