import * as React from 'react'
import { createContext, useContext } from 'react'
import { SynapseClientError } from '../utils/SynapseClientError'
import {
  AsynchronousJobStatus,
  ColumnModel,
  QueryBundleRequest,
  QueryResultBundle,
  Table,
} from '../utils/synapseTypes'
import { ImmutableTableQueryResult } from './useImmutableTableQuery'

export const QUERY_FILTERS_EXPANDED_CSS: string = 'isShowingFacetFilters'
export const QUERY_FILTERS_COLLAPSED_CSS: string = 'isHidingFacetFilters'

/*
  For details page: to lock a column (e.g. study, grant) so that the facet values and active filters
  will not appear on the details page. The facet name is given by the URL search param.
  The type is defined here so that other child components in SRC won't generate type errors.
 */
export type LockedColumn = {
  columnName?: string
  value?: string
}

export type QueryContextType = {
  /** The entity being queried. Will be undefined while initially fetching */
  entity: Table | undefined
  /** The query results, which will be undefined while initially fetching a new bundle, but will not be unloaded when fetching new pages */
  data: QueryResultBundle | undefined
  /** Returns a deep clone of the current query bundle request */
  getLastQueryRequest: () => QueryBundleRequest
  /** Returns a deep clone of the initial query bundle request */
  getInitQueryRequest: () => QueryBundleRequest
  /** Updates the current query with the passed request */
  executeQueryRequest: (param: QueryBundleRequest) => void
  /** Resets the query to its initial state, clearing all filters added by the user */
  resetQuery: ImmutableTableQueryResult['resetQuery']
  removeSelectedFacet: ImmutableTableQueryResult['removeSelectedFacet']
  removeValueFromSelectedFacet: ImmutableTableQueryResult['removeValueFromSelectedFacet']
  /** Removes a matching QueryFilter from the query */
  removeQueryFilter: ImmutableTableQueryResult['removeQueryFilter']
  /** Removes a value from a QueryFilter. If no more values remain in the filter, the filter is also removed */
  removeValueFromQueryFilter: ImmutableTableQueryResult['removeValueFromQueryFilter']
  /** Returns true when loading a brand-new query result bundle. Will not be true when just loading the next page of query results. */
  isLoadingNewBundle: boolean
  /** The error returned by the query request, if one is encountered */
  error: SynapseClientError | null
  /** The status of the asynchronous job. */
  asyncJobStatus?: AsynchronousJobStatus<QueryBundleRequest, QueryResultBundle>
  /** Whether facets are available to be filtered upon based on the current data */
  isFacetsAvailable: boolean
  /**
   * A column name may be "locked" so that it is both (1) not shown to the user that the filter is active, and (2) not modifiable by the user.
   * For example, we may show only the data matching a particular facet value on a Details Page without implying that the shown data is part of a larger table.
   * The presence of a locked filter will result in a client-side modification of the active query and result bundle data.
   */
  lockedColumn?: LockedColumn
  /** Returns true iff the current request has resettable filters applied via facet filters or additionalFilters. Excludes filters applied to a locked column */
  hasResettableFilters: boolean
  getColumnModel: (columnName: string) => ColumnModel | null
}

export type PaginatedQueryContextType = QueryContextType & {
  /** Navigates to a particular page, where the first page has value 1 */
  goToPage: (pageNum: number) => void
  /** The current page number, where page 1 is the first page. */
  currentPage: number
  /** Updates the page size */
  setPageSize: (pageSize: number) => void
  /** The current page size. */
  pageSize: number
}

export type InfiniteQueryContextType = QueryContextType & {
  /** Returns true when loading a new page of query results */
  isLoadingNewPage: boolean
  /** Whether the query result bundle has a next page */
  hasNextPage: boolean
  /** Invoke this method to fetch and append the next page of rows to the data  */
  appendNextPageToResults: () => Promise<void>
  /** Invoke to fetch and update the data with the next page of query results */
  goToNextPage: () => Promise<void>
  /** Whether the query result bundle has a previous page */
  hasPreviousPage: boolean
  /** Invoke to fetch and update the data with the previous page of query results */
  goToPreviousPage: () => Promise<void>
}
/**
 * This must be exported to use the context in class components.
 */
export const QueryContext = createContext<QueryContextType | undefined>(
  undefined,
)

export type QueryContextProviderProps = React.PropsWithChildren<{
  queryContext: QueryContextType
}>

/**
 * Provides data related to a Synapse table query, and functions for iterating through pages of the data.
 */
export const QueryContextProvider = ({
  children,
  queryContext,
}: QueryContextProviderProps) => {
  return (
    <QueryContext.Provider value={queryContext}>
      {children}
    </QueryContext.Provider>
  )
}

export function useQueryContext(): QueryContextType {
  const context = useContext(QueryContext)
  if (context === undefined) {
    throw new Error('useQueryContext must be used within a QueryWrapper')
  }
  return context
}

export function usePaginatedQueryContext(): PaginatedQueryContextType {
  const context = useContext(QueryContext)
  if (context === undefined) {
    throw new Error(
      'usePaginatedQueryContext must be used within a QueryWrapper',
    )
  }
  // TODO: Identify more type-safe alternative to casting
  return context as PaginatedQueryContextType
}

export function useInfiniteQueryContext(): InfiniteQueryContextType {
  const context = useContext(QueryContext)
  if (context === undefined) {
    throw new Error(
      'useInfiniteQueryContext must be used within a QueryWrapper',
    )
  }
  // TODO: Identify more type-safe alternative to casting
  return context as InfiniteQueryContextType
}

export const QueryContextConsumer = QueryContext.Consumer
