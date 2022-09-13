import { useCallback, useEffect, useState } from 'react'
import { QueryBundleRequest } from '../utils/synapseTypes/Table/QueryBundleRequest'
import { cloneDeep } from 'lodash-es'
import * as DeepLinkingUtils from '../utils/functions/deepLinkingUtils'
import { DEFAULT_PAGE_SIZE } from '../utils/SynapseConstants'
import { parseEntityIdAndVersionFromSqlStatement } from '../utils/functions/sqlFunctions'

export type ImmutableTableQueryResult = {
  /** The ID of the table parsed from the SQL query */
  entityId: string
  /** The version number of the table parsed from the SQL query */
  versionNumber?: number
  getInitQueryRequest: () => QueryBundleRequest
  getLastQueryRequest: () => QueryBundleRequest
  setQuery: (
    queryRequest:
      | QueryBundleRequest
      | ((lastQueryRequest: QueryBundleRequest) => QueryBundleRequest),
  ) => void
  pageSize: number
  /** The current page of results. The first page is `1` */
  currentPage: number
  setPageSize: (pageSize: number) => void
  /** pageNumber is 1-indexed */
  goToPage: (pageNumber: number) => void

  /**
   * TODO: This hook could handle all potential query transformations, such as
   *    - addFacetFilter, removeFacetFilter, clearFacetFilters
   *    - addAdditionalFilter, remove..., clear...
   *
   * This could be preferable to allowing any QueryContext subscriber to arbitrarily update the query with `setQuery`
   *  because we could uniformly handle all complex stateful logic in this hook
   */
}

export type UseImmutableTableQueryOptions = {
  /** The initial table query request object */
  initQueryRequest: QueryBundleRequest
  /** Whether the URL should update when the query is modified. */
  shouldDeepLink?: boolean
  /** Unique index for the component on the page so URL updates do not conflict between table query components */
  componentIndex?: number
  /** Callback invoked when the query is modified */
  onQueryChange?: (newQueryJson: string) => void
}

/**
 * Custom hook that maintains and manages the state of a Synapse Table query.
 * @param options
 * @returns
 */
export default function useImmutableTableQuery(
  options: UseImmutableTableQueryOptions,
): ImmutableTableQueryResult {
  const {
    initQueryRequest,
    componentIndex = 0,
    shouldDeepLink = false,
    onQueryChange,
  } = options

  const [lastQueryRequest, setLastQueryRequest] =
    useState<QueryBundleRequest>(initQueryRequest)

  /**
   * Inspect the URL on mount to see if we have a particular query request that we must show.
   */
  useEffect(() => {
    const query = DeepLinkingUtils.getQueryRequestFromLink(
      'QueryWrapper',
      componentIndex,
    )
    if (query) {
      setLastQueryRequest(query)
    }
  }, [componentIndex])

  /**
   * Pass down a deep clone (so no side effects on the child's part) of the
   * last query request made
   *
   * @returns
   * @memberof QueryWrapper
   */
  const getLastQueryRequest = useCallback(() => {
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
    return cloneDeep(initQueryRequest)
  }

  /**
   * Execute the given query request, updating all of the data in the QueryContext to match the new query
   * @param {*} queryRequest Query request as specified by
   *                         https://rest-docs.synapse.org/rest/org/sagebionetworks/repo/model/table/Query.html
   */
  function setQuery(
    queryRequest:
      | QueryBundleRequest
      | ((lastQueryRequest: QueryBundleRequest) => QueryBundleRequest),
  ): void {
    let newQueryRequest: QueryBundleRequest
    if (typeof queryRequest === 'function') {
      newQueryRequest = queryRequest(getLastQueryRequest())
    } else {
      newQueryRequest = queryRequest
    }

    // Clone the query request before storing it in state, in case the original is mutated
    const clonedQueryRequest = cloneDeep(newQueryRequest)
    setLastQueryRequest(clonedQueryRequest)

    if (clonedQueryRequest.query) {
      const clonedQueryRequestJson = JSON.stringify(clonedQueryRequest.query)
      const stringifiedQuery = encodeURIComponent(clonedQueryRequestJson)
      if (shouldDeepLink) {
        DeepLinkingUtils.updateUrlWithNewSearchParam(
          'QueryWrapper',
          componentIndex,
          stringifiedQuery,
        )
      }
      if (onQueryChange) {
        onQueryChange(JSON.stringify(clonedQueryRequest))
      }
    }
  }

  const { entityId, versionNumber } = parseEntityIdAndVersionFromSqlStatement(
    lastQueryRequest.query.sql,
  )!

  const pageSize = lastQueryRequest.query.limit ?? DEFAULT_PAGE_SIZE
  const currentPage = Math.ceil(
    ((lastQueryRequest.query.offset ?? 0) + Number(pageSize)) / pageSize,
  )
  function setPageSize(pageSize: number) {
    setQuery(currentQuery => {
      currentQuery.query.limit = pageSize
      return currentQuery
    })
  }

  function goToPage(pageNumber: number) {
    setQuery(currentQuery => {
      currentQuery.query.offset = (pageNumber - 1) * pageSize
      return currentQuery
    })
  }

  return {
    entityId,
    versionNumber,
    getInitQueryRequest,
    getLastQueryRequest,
    setQuery,
    pageSize,
    currentPage,
    setPageSize,
    goToPage,
  }
}
