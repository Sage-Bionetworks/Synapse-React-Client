// TODO: custom hook to reuse and improve managing and updating query state between QueryWrapper and PaginatedQueryWrapper
import { useCallback, useEffect, useState } from 'react'
import { QueryBundleRequest } from '../utils/synapseTypes/Table/QueryBundleRequest'
import { cloneDeep } from 'lodash-es'
import { LockedFilter } from './QueryContext'
import * as DeepLinkingUtils from '../utils/functions/deepLinkingUtils'

type ImmutableTableQuery = {
  getInitQueryRequest: () => QueryBundleRequest
  getLastQueryRequest: () => QueryBundleRequest
  setQuery: (queryRequest: QueryBundleRequest) => void
  /**
   * TODO: This hook could handle all potential query transformations, such as
   *    - addFacetFilter, removeFacetFilter, clearFacetFilters
   *    - addAdditionalFilter, remove..., clear...
   *
   * This would be preferable to allowing any QueryContext subscriber to arbitrarily update the query with `setQuery`
   *  because we could properly handle all complex stateful logic in this hook, such as maintaining a locked filter
   */
}

type UseImmutableTableQueryOptions = {
  initQueryRequest: QueryBundleRequest
  lockedFilter?: LockedFilter
  componentIndex: number
  shouldDeepLink: boolean
  onQueryChange?: (newQueryJson: string) => void
}

export default function useImmutableTableQuery(
  options: UseImmutableTableQueryOptions,
): ImmutableTableQuery {
  const { initQueryRequest, componentIndex, shouldDeepLink, onQueryChange } =
    options

  const [lastQueryRequest, setLastQueryRequest] =
    useState<QueryBundleRequest>(initQueryRequest)

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
  function setQuery(queryRequest: QueryBundleRequest) {
    const clonedQueryRequest = cloneDeep(queryRequest)

    setLastQueryRequest(clonedQueryRequest)

    if (clonedQueryRequest.query) {
      const clonedQueryRequestJson = JSON.stringify(clonedQueryRequest.query)
      const stringifiedQuery = encodeURIComponent(clonedQueryRequestJson)
      if (shouldDeepLink) {
        if (onQueryChange) {
          onQueryChange(clonedQueryRequestJson)
        } else {
          DeepLinkingUtils.updateUrlWithNewSearchParam(
            'QueryWrapper',
            componentIndex,
            stringifiedQuery,
          )
        }
      }
    }
  }

  return {
    getInitQueryRequest,
    getLastQueryRequest,
    setQuery,
  }
}
