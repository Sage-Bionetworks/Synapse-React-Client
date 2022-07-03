import { cloneDeep } from 'lodash-es'
import * as React from 'react'
import { useEffect, useMemo, useState } from 'react'
import useDeepCompareEffect from 'use-deep-compare-effect'
import * as DeepLinkingUtils from '../utils/functions/deepLinkingUtils'
import { isFacetAvailable } from '../utils/functions/queryUtils'
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
  LockedFacet,
  QueryContextProvider,
} from './QueryContext'

export const QUERY_FILTERS_EXPANDED_CSS: string = 'isShowingFacetFilters'
export const QUERY_FILTERS_COLLAPSED_CSS: string = 'isHidingFacetFilters'

export type InfiniteQueryWrapperProps = {
  children: React.ReactNode | React.ReactNode[]
  initQueryRequest: QueryBundleRequest
  componentIndex?: number //used for deep linking
  shouldDeepLink?: boolean
  onQueryChange?: (newQueryJson: string) => void
  onQueryResultBundleChange?: (newQueryResultBundleJson: string) => void
  lockedFacet?: LockedFacet
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
  const { initQueryRequest, onQueryChange, onQueryResultBundleChange } = props
  const [lastQueryRequest, setLastQueryRequest] =
    useState<QueryBundleRequest>(initQueryRequest)
  const [currentAsyncStatus, setCurrentAsyncStatus] = useState<
    AsynchronousJobStatus<QueryBundleRequest, QueryResultBundle> | undefined
  >(undefined)
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
                page => page.responseBody!.queryResult.queryResults.rows,
              ) ?? [],
          },
        },
      }
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

  const componentIndex = props.componentIndex ?? 0

  const isFacetsAvailable = data
    ? isFacetAvailable(data.facets, data.selectColumns)
    : true

  /**
   * Inspect the URL to see if we have a particular query request that we must show.
   */
  useEffect(() => {
    const query = DeepLinkingUtils.getQueryRequestFromLink(
      'QueryWrapper',
      componentIndex,
    )
    if (query) {
      setLastQueryRequest(query)
    }
  }, [])

  /**
   * Pass down a deep clone (so no side affects on the child's part) of the
   * last query request made
   *
   * @returns
   * @memberof QueryWrapper
   */
  const getLastQueryRequest = React.useCallback(() => {
    return cloneDeep(lastQueryRequest)
  }, [lastQueryRequest])

  /**
   * Pass down a deep clone (so no side affects on the child's part) of the
   * first query request made
   *
   * @returns
   * @memberof QueryWrapper
   */
  function getInitQueryRequest(): QueryBundleRequest {
    return cloneDeep(props.initQueryRequest)
  }

  /**
   * Execute the given query request, updating all of the data in the QueryContext to match the new query
   * @param {*} queryRequest Query request as specified by
   *                         https://rest-docs.synapse.org/rest/org/sagebionetworks/repo/model/table/Query.html
   */
  function executeQueryRequest(queryRequest: QueryBundleRequest) {
    const clonedQueryRequest = cloneDeep(queryRequest)

    setLastQueryRequest(clonedQueryRequest)
    setCurrentPage(0)

    if (clonedQueryRequest.query) {
      const clonedQueryRequestJson = JSON.stringify(clonedQueryRequest.query)
      const stringifiedQuery = encodeURIComponent(clonedQueryRequestJson)
      if (props.shouldDeepLink) {
        if (props.onQueryChange) {
          props.onQueryChange(clonedQueryRequestJson)
        } else {
          DeepLinkingUtils.updateUrlWithNewSearchParam(
            'QueryWrapper',
            componentIndex,
            stringifiedQuery,
          )
        }
      }
    }
    /**
     * TODO: We remove the cached data because it can interfere with user controls, such as the QueryFilter.
     * For example, if you filter on a facet with value ["a"], then value ["a", "b"], then value ["a"] again,
     * we'll have a cache hit on the last query, so we won't get a loading state, but the controls haven't been updated
     * to handle cache hits. Forcing a cache miss here fixes this, but ideally the controls should handle this case.
     */
    remove()
    // end TODO
  }

  /**
   * remove a particular facet name (e.g. study) and its all possible values based on the parameter specified in the url
   * this is to remove the facet from the charts, search and filter.
   * @return data: QueryResultBundle
   */
  const dataWithLockedFacetRemoved = useMemo(() => {
    const lockedFacet = props.lockedFacet?.facet
    if (lockedFacet && data) {
      // for details page, return data without the "locked" facet
      const dataCopy: QueryResultBundle = cloneDeep(data)
      const facets = dataCopy.facets?.filter(
        item => item.columnName.toLowerCase() !== lockedFacet.toLowerCase(),
      )
      dataCopy.facets = facets
      return dataCopy
    } else {
      // for other pages, just return the data
      return data
    }
  }, [data, props.lockedFacet?.facet])

  const context: InfiniteQueryContextType = {
    data: dataWithLockedFacetRemoved,
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
