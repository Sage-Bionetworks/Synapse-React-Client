import React, { createContext, useContext, useEffect, useState } from 'react'
import { useQueryContext } from './QueryWrapper'

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
}

/**
 * This must be exported to use the context in class components.
 */
export const QueryVisualizationContext = createContext<
  QueryVisualizationContextType | undefined
>(undefined)

export type QueryVisualizationContextProviderProps = {
  queryVisualizationContext: QueryVisualizationContextType
}

/**
 * Provides fields and functions related to visualizing a Synapse table query. For actual query data, see QueryContextProvider.
 */
export const QueryVisualizationContextProvider: React.FunctionComponent<QueryVisualizationContextProviderProps> =
  ({ children, queryVisualizationContext }) => {
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

export type SearchQuery = {
  columnName: string
  searchText: string
}

/*
  For details page: to lock a facet name (e.g. study, grant) so that the facet name
  and its all possible values will not appear on the details page. The facet name is
  given by the url's search param. The type is defined here so that other child components
  in SRC won't generate type errors.
 */
export type LockedFacet = {
  facet?: string
  value?: string
}

/**
 * QueryVisualizationWrapper manages UI state for components that query tables in Synapse. That state can be accessed
 * or updated using QueryVisualizationContext. A QueryVisualizationWrapper must be used within a QueryWrapper.
 */
export function QueryVisualizationWrapper(
  props: QueryVisualizationWrapperProps,
) {
  const { data, getLastQueryRequest, isFacetsAvailable, isLoadingNewBundle } =
    useQueryContext()

  const [topLevelControlsState, setTopLevelControlsState] =
    useState<TopLevelControlsState>({
      showColumnFilter: true,
      showFacetFilter: true,
      showFacetVisualization: props.defaultShowFacetVisualization ?? true,
      showSearchBar: false,
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

  const [isColumnSelected, setIsColumnSelected] = useState<string[]>([])
  const [selectedRowIndices, setSelectedRowIndices] = useState<number[]>([])

  const lastQueryRequest = getLastQueryRequest()
  const selectColumns = data?.selectColumns

  useEffect(() => {
    // SWC-6030: If sql changes, reset what columns are visible
    setIsColumnSelected(
      selectColumns
        ?.slice(0, props.visibleColumnCount ?? Infinity)
        .map(el => el.name) ?? [],
    )
  }, [selectColumns, lastQueryRequest.query.sql, props.visibleColumnCount])

  const context: QueryVisualizationContextType = {
    topLevelControlsState,
    setTopLevelControlsState,
    columnsToShowInTable: isColumnSelected,
    setColumnsToShowInTable: setIsColumnSelected,
    selectedRowIndices,
    setSelectedRowIndices,

    facetAliases: props.facetAliases,
    rgbIndex: props.rgbIndex,
    unitDescription: props.unitDescription,
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
