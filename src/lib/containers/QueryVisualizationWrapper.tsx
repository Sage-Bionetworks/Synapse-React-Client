import React, { createContext, useContext, useEffect, useState } from 'react'
import { useDeepCompareMemoize } from 'use-deep-compare-effect'
import { useQueryContext } from './QueryContext'
import NoContentAvailable from './table/NoContentAvailable'
import { NoContentPlaceholderType } from './table/NoContentPlaceholderType'
import SearchResultsNotFound from './table/SearchResultsNotFound'
import ThisTableIsEmpty from './table/TableIsEmpty'

export type QueryVisualizationContextType = {
  topLevelControlsState: TopLevelControlsState
  setTopLevelControlsState: React.Dispatch<
    React.SetStateAction<TopLevelControlsState>
  >
  columnsToShowInTable: string[]
  setColumnsToShowInTable: (newState: string[]) => void
  selectedRowIndices: number[]
  setSelectedRowIndices: (newState: number[]) => void
  // General UI related:
  facetAliases?: Record<string, string>
  rgbIndex?: number
  unitDescription?: string
  /** Whether to show when the table or view was last updated. */
  showLastUpdatedOn?: boolean
  /** React node to display in place of cards/table when there are no results. */
  noContentPlaceholder: React.ReactNode
}

/**
 * This must be exported to use the context in class components.
 */
export const QueryVisualizationContext = createContext<
  QueryVisualizationContextType | undefined
>(undefined)

export type QueryVisualizationContextProviderProps = React.PropsWithChildren<{
  queryVisualizationContext: QueryVisualizationContextType
}>

/**
 * Provides fields and functions related to visualizing a Synapse table query. For actual query data, see QueryContextProvider.
 */
export const QueryVisualizationContextProvider = ({
  children,
  queryVisualizationContext,
}: QueryVisualizationContextProviderProps) => {
  return (
    <QueryVisualizationContext.Provider value={queryVisualizationContext}>
      {children}
    </QueryVisualizationContext.Provider>
  )
}

export function useQueryVisualizationContext(): QueryVisualizationContextType {
  const context = useContext(QueryVisualizationContext)
  if (context === undefined) {
    throw new Error(
      'useQueryVisualizationContext must be used within a QueryWrapper',
    )
  }
  return context
}

export const QueryVisualizationContextConsumer =
  QueryVisualizationContext.Consumer

export type QueryVisualizationWrapperProps = {
  children: React.ReactNode | React.ReactNode[]
  rgbIndex?: number
  unitDescription?: string
  facetAliases?: Record<string, string>
  visibleColumnCount?: number
  hiddenColumns?: string[]
  defaultShowFacetVisualization?: boolean
  defaultShowSearchBar?: boolean
  showLastUpdatedOn?: boolean
  /** Default is INTERACTIVE */
  noContentPlaceholderType?: NoContentPlaceholderType
}

export type TopLevelControlsState = {
  showFacetVisualization: boolean
  showFacetFilter?: boolean
  showColumnFilter: boolean
  showSearchBar: boolean
  showDownloadConfirmation: boolean
  showColumnSelectDropdown: boolean
  showSqlEditor: boolean
}

/**
 * QueryVisualizationWrapper manages UI state for components that query tables in Synapse. That state can be accessed
 * or updated using QueryVisualizationContext. A QueryVisualizationWrapper must be used within a QueryWrapper.
 */
export function QueryVisualizationWrapper(
  props: QueryVisualizationWrapperProps,
) {
  const { noContentPlaceholderType = NoContentPlaceholderType.INTERACTIVE } =
    props

  const {
    data,
    getLastQueryRequest,
    isFacetsAvailable,
    isLoadingNewBundle,
    isFiltered,
  } = useQueryContext()

  const [topLevelControlsState, setTopLevelControlsState] =
    useState<TopLevelControlsState>({
      showColumnFilter: true,
      showFacetFilter: true,
      showFacetVisualization: props.defaultShowFacetVisualization ?? true,
      showSearchBar: props.defaultShowSearchBar ?? false,
      showDownloadConfirmation: false,
      showColumnSelectDropdown: false,
      showSqlEditor: false,
    })

  useEffect(() => {
    if (!isFacetsAvailable) {
      setTopLevelControlsState(state => ({
        ...state,
        showFacetFilter: false,
        showFacetVisualization: false,
      }))
    }
  }, [isFacetsAvailable])

  useEffect(() => {
    if (isLoadingNewBundle) {
      setSelectedRowIndices([])
    }
  }, [isLoadingNewBundle])

  const [visibleColumns, setVisibleColumns] = useState<string[]>([])
  const [selectedRowIndices, setSelectedRowIndices] = useState<number[]>([])

  const lastQueryRequest = getLastQueryRequest()

  // We deep-compare-memoize the selectColumns so we don't reset visible columns when the reference changes, but not the contents (e.g. on page change)
  const selectColumns = useDeepCompareMemoize(data?.selectColumns)

  useEffect(() => {
    // SWC-6030: If sql changes, reset what columns are visible
    setVisibleColumns(
      selectColumns
        ?.slice(0, props.visibleColumnCount ?? Infinity)
        .map(el => el.name) ?? [],
    )
  }, [selectColumns, lastQueryRequest.query.sql, props.visibleColumnCount])

  let noContentPlaceholder
  if (noContentPlaceholderType === NoContentPlaceholderType.INTERACTIVE) {
    if (isFiltered) {
      // If the query has filters, show a message that the user should update their filter
      noContentPlaceholder = <SearchResultsNotFound />
    } else {
      // Else tell the user that the table is empty
      noContentPlaceholder = <ThisTableIsEmpty />
    }
  } else {
    // The user cannot modify the query, so show a message that there is no content available
    noContentPlaceholder = <NoContentAvailable />
  }

  const context: QueryVisualizationContextType = {
    topLevelControlsState,
    setTopLevelControlsState,
    columnsToShowInTable: visibleColumns,
    setColumnsToShowInTable: setVisibleColumns,
    selectedRowIndices,
    setSelectedRowIndices,

    facetAliases: props.facetAliases,
    rgbIndex: props.rgbIndex,
    unitDescription: props.unitDescription,
    showLastUpdatedOn: props.showLastUpdatedOn,
    noContentPlaceholder: noContentPlaceholder,
  }
  /**
   * Render the children without any formatting
   */
  const { children } = props
  return (
    <QueryVisualizationContextProvider queryVisualizationContext={context}>
      {children}
    </QueryVisualizationContextProvider>
  )
}
