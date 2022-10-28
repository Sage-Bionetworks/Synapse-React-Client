import React, { useCallback } from 'react'
import { useMemo, useState } from 'react'
import { useDeepCompareEffectNoCheck } from 'use-deep-compare-effect'
import {
  isFacetAvailable,
  hasResettableFilters as hasResettableFiltersUtil,
  removeLockedColumnFromFacetData,
} from '../utils/functions/queryUtils'
import {
  useGetEntity,
  useGetQueryResultBundleWithAsyncStatus,
} from '../utils/hooks/SynapseAPI'
import {
  AsynchronousJobStatus,
  QueryBundleRequest,
  QueryResultBundle,
  Table,
} from '../utils/synapseTypes'
import {
  LockedColumn,
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
  lockedColumn?: LockedColumn
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
    lockedColumn,
    componentIndex,
    shouldDeepLink,
  } = props

  const [currentAsyncStatus, setCurrentAsyncStatus] = useState<
    AsynchronousJobStatus<QueryBundleRequest, QueryResultBundle> | undefined
  >(undefined)

  const {
    entityId,
    versionNumber,
    getInitQueryRequest,
    getLastQueryRequest,
    setQuery,
    currentPage,
    pageSize,
    goToPage,
    setPageSize,
    resetQuery,
    removeSelectedFacet,
    removeValueFromSelectedFacet,
    removeQueryFilter,
    removeValueFromQueryFilter,
  } = useImmutableTableQuery({
    initQueryRequest,
    shouldDeepLink,
    componentIndex,
    onQueryChange,
  })

  const lastQueryRequest = useMemo(() => {
    return getLastQueryRequest()
  }, [getLastQueryRequest])

  const {
    data: asyncJobStatus,
    isLoading: queryIsLoading,
    error,
    isPreviousData: newQueryIsFetching,
  } = useGetQueryResultBundleWithAsyncStatus(
    lastQueryRequest,
    {
      // We use `keepPreviousData` because we don't want to clear out the current data when the query is modified via the UI
      keepPreviousData: true,
    },
    setCurrentAsyncStatus,
  )

  const data = asyncJobStatus?.responseBody

  // Indicate if we're fetching data for the first time (queryIsLoading) or if we're fetching data for a brand-new query (newQueryIsFetching)
  const isLoadingNewBundle = queryIsLoading || newQueryIsFetching

  const { data: entity } = useGetEntity<Table>(entityId, versionNumber)

  // data is sometimes undefined, which useDeepCompareEffect doesn't like, so use useDeepCompareEffectNoCheck instead
  useDeepCompareEffectNoCheck(() => {
    if (data && onQueryResultBundleChange) {
      onQueryResultBundleChange(JSON.stringify(data))
    }
  }, [data, onQueryResultBundleChange])

  const isFacetsAvailable = data
    ? isFacetAvailable(data.facets, data.selectColumns)
    : true

  /**
   * Remove a particular facet name (e.g. study) and all possible values based on the parameter specified in the url
   * this is to remove the facet from the charts, search and filter.
   * @return data: QueryResultBundle
   */
  const dataWithLockedColumnFacetRemoved = useMemo(() => {
    return removeLockedColumnFromFacetData(data, lockedColumn)
  }, [data, lockedColumn])

  const hasResettableFilters = useMemo(() => {
    const request = getLastQueryRequest()
    return hasResettableFiltersUtil(request.query, lockedColumn)
  }, [getLastQueryRequest, lockedColumn])

  const getColumnModel = useCallback(
    (columnName: string) => {
      return data?.columnModels?.find(cm => cm.name === columnName) ?? null
    },
    [data?.columnModels],
  )

  const context: PaginatedQueryContextType = {
    data: dataWithLockedColumnFacetRemoved,
    currentPage,
    pageSize,
    setPageSize,
    isLoadingNewBundle: isLoadingNewBundle,
    getLastQueryRequest,
    getInitQueryRequest,
    error: error,
    entity,
    executeQueryRequest: setQuery,
    isFacetsAvailable,
    asyncJobStatus: currentAsyncStatus,
    goToPage,
    hasResettableFilters,
    removeSelectedFacet,
    removeValueFromSelectedFacet,
    resetQuery,
    removeQueryFilter,
    removeValueFromQueryFilter,
    lockedColumn,
    getColumnModel,
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
