import { cloneDeep } from 'lodash-es'
import * as React from 'react'
import { useContext } from 'react'
import * as DeepLinkingUtils from '../utils/functions/deepLinkingUtils'
import { isFacetAvailable } from '../utils/functions/queryUtils'
import { parseEntityIdFromSqlStatement } from '../utils/functions/sqlFunctions'
import { useGetEntity } from '../utils/hooks/SynapseAPI/useEntity'
import { useInfiniteQueryResultBundle } from '../utils/hooks/SynapseAPI/useGetQueryResultBundle'
import { SynapseClientError } from '../utils/SynapseClient'
import {
  AsynchronousJobStatus,
  Entity,
  FacetColumnResultValues,
  QueryBundleRequest,
  QueryResultBundle,
} from '../utils/synapseTypes'

export const QUERY_FILTERS_EXPANDED_CSS: string = 'isShowingFacetFilters'
export const QUERY_FILTERS_COLLAPSED_CSS: string = 'isHidingFacetFilters'

export type QueryWrapperContextType = {
  // Query related:
  entity: Entity | undefined
  data: QueryResultBundle | undefined
  getLastQueryRequest: () => QueryBundleRequest
  getInitQueryRequest: () => QueryBundleRequest
  executeQueryRequest: (param: QueryBundleRequest) => void
  isLoadingNewPage: boolean
  isLoadingNewBundle: boolean
  // TODO: should topLevelControls be in a QueryVisualizationWrapper?
  topLevelControlsState: TopLevelControlsState
  setTopLevelControlsState: React.Dispatch<
    React.SetStateAction<TopLevelControlsState>
  >
  columnsToShowInTable: string[]
  setColumnsToShowInTable: (newState: string[]) => void
  selectedRowIndices: number[]
  setSelectedRowIndices: (newState: number[]) => void
  lastFacetSelection: FacetSelection
  setLastFacetSelection: (newState: FacetSelection) => void
  isAllFilterSelectedForFacet: Record<string, boolean>
  setIsAllFilterSelectedForFacet: (newState: Record<string, boolean>) => void
  error: SynapseClientError | null
  asyncJobStatus: AsynchronousJobStatus<unknown, unknown>
  isFacetsAvailable: boolean
  setCurrentPage: React.Dispatch<React.SetStateAction<number | 'ALL'>>
  hasNextPage: boolean
  appendNextPageToResults: () => Promise<void>
  goToNextPage: () => Promise<void>
  hasPreviousPage: boolean
  goToPreviousPage: () => Promise<void>
  // General UI related:
  facetAliases?: Record<string, string>

  // PlotNav related:
  chartSelectionIndex: number
  setChartSelectionIndex: (newState: number) => void
}

/**
 * This must be exported to use the context in class components.
 */
export const QueryWrapperContext = React.createContext<
  QueryWrapperContextType | undefined
>(undefined)

export type QueryWrapperContextProviderProps = {
  queryWrapperContext: QueryWrapperContextType
}

/**
 * Provides context necessary for most components in SRC
 * @param param0
 * @returns
 */
export const QueryWrapperContextProvider: React.FunctionComponent<QueryWrapperContextProviderProps> =
  ({ children, queryWrapperContext }) => {
    return (
      <QueryWrapperContext.Provider value={queryWrapperContext}>
        {children}
      </QueryWrapperContext.Provider>
    )
  }

export function useQueryWrapperContext(): QueryWrapperContextType {
  const context = useContext(QueryWrapperContext)
  if (context === undefined) {
    throw new Error('useQueryWrapperContext must be used within a QueryWrapper')
  }
  return context
}

export const QueryWrapperContextConsumer = QueryWrapperContext.Consumer

// TODO -- Query Wrapper should only be concerned with managing the query data.
// Viz logic should go into its own wrapper. It could consume the QueryWrapperContext, if needed.
export type QueryWrapperPropsThatShouldBelongToAnotherWrapper = {
  // Visualization related:
  // maybe should have a QueryVisualizationContext?
  rgbIndex?: number
  unitDescription?: string
  showBarChart?: boolean
  facetAliases?: Record<string, string>
}

export type QueryWrapperProps = {
  initQueryRequest: QueryBundleRequest
  visibleColumnCount?: number
  // TODO: document what this is doing
  facet?: string
  componentIndex?: number //used for deep linking
  shouldDeepLink?: boolean
  onQueryChange?: (newQueryJson: string) => void
  onQueryResultBundleChange?: (newQueryResultBundleJson: string) => void
  hiddenColumns?: string[]
  lockedFacet?: LockedFacet
  defaultShowFacetVisualization?: boolean
  children: React.ReactNode | React.ReactNode[]
} & QueryWrapperPropsThatShouldBelongToAnotherWrapper

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

export type FacetSelection = {
  columnName: string
  facetValue: string
  selector: string
}

/**
 * Class wraps around any Synapse views that are dependent on a query bundle
 * Those classes then take in as props:
 *
 * @class QueryWrapper
 * @extends {React.Component}
 */
export function QueryWrapper(props: QueryWrapperProps) {
  const { initQueryRequest, onQueryChange, onQueryResultBundleChange } = props
  const [lastQueryRequest, setLastQueryRequest] =
    React.useState<QueryBundleRequest>(initQueryRequest)
  const {
    data: infiniteData,
    hasNextPage,
    fetchPreviousPage,
    fetchNextPage,
    isFetchingNextPage,
    isLoading: queryIsLoading,
    refetch,
    error,
    isPreviousData,
  } = useInfiniteQueryResultBundle(lastQueryRequest, {
    // We use `keepPreviousData` because we don't want to clear out the current data when the query is modified via the UI
    keepPreviousData: true,
  })

  // Indicate if we're fetching data for the first time (queryIsLoading) or if we're fetching data for a brand new query (isPreviousData)
  const isLoadingNewBundle = queryIsLoading || isPreviousData

  const entityId = parseEntityIdFromSqlStatement(lastQueryRequest.query.sql)

  const { data: entity } = useGetEntity(entityId)

  const [currentPage, setCurrentPage] = React.useState<number | 'ALL'>(0)

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

  // Use page 0 because it has all of the bundle objects that we only fetch once, such as queryCount
  const responseBody = infiniteData?.pages[0].responseBody
  const data: QueryResultBundle | undefined = responseBody
    ? {
        ...responseBody,
        queryResult: {
          ...responseBody.queryResult,
          queryResults: {
            ...responseBody.queryResult.queryResults,
            rows:
              // if currentPage is "ALL", the rows can be concatenated into one object
              currentPage === 'ALL'
                ? infiniteData.pages.flatMap(
                    page => page.responseBody!.queryResult.queryResults.rows,
                  ) ?? []
                : // otherwise, use the currentPage index to get the rows
                  infiniteData.pages[currentPage].responseBody!.queryResult
                    .queryResults.rows,
          },
        },
      }
    : undefined

  React.useEffect(() => {
    if (onQueryChange) {
      onQueryChange(lastQueryRequest.query.sql)
    }
  }, [onQueryChange, lastQueryRequest.query.sql])

  React.useEffect(() => {
    if (data && onQueryResultBundleChange) {
      onQueryResultBundleChange(JSON.stringify(data))
    }
  }, [data, onQueryResultBundleChange])

  const selectColumns = data?.selectColumns
  /**
   * Effects to run when the SQL changes
   */
  React.useEffect(() => {
    // Reset the selected columns
    setIsColumnSelected(
      selectColumns
        ?.slice(0, props.visibleColumnCount ?? Infinity)
        .map(el => el.name) ?? [],
    )
  }, [selectColumns, lastQueryRequest.query.sql, props.visibleColumnCount])

  const isFacetsAvailable = data
    ? isFacetAvailable(data.facets, data.selectColumns)
    : true

  React.useEffect(() => {
    if (!isFacetsAvailable) {
      setTopLevelControlsState(state => ({
        ...state,
        showFacetFilter: false,
        showFacetVisualization: false,
      }))
    }
  }, [isFacetsAvailable])

  React.useEffect(() => {
    const enumFacets = data?.facets?.filter(
      el => el.facetType === 'enumeration',
    ) as FacetColumnResultValues[] | undefined
    if (enumFacets) {
      const isAllFilterSelectedForFacetClone = cloneDeep(
        isAllFilterSelectedForFacet,
      )

      enumFacets.forEach(el => {
        // isAll is only true iff there are no facets selected or all elements are selected
        const { facetValues } = el
        const isAllFalse = facetValues.every(facet => !facet.isSelected)
        const isAllTrue = facetValues.every(facet => facet.isSelected)
        const isByDefaultSelected = isAllFalse || isAllTrue
        isAllFilterSelectedForFacetClone[el.columnName] = isByDefaultSelected
        if (el.columnName === props.facet && !isAllFalse) {
          // Note - this picks the first selected facet
          setChartSelectionIndex(
            facetValues
              .sort((a, b) => b.count - a.count)
              .findIndex(facet => facet.isSelected),
          )
        }
      })
      setIsAllFilterSelectedForFacet(isAllFilterSelectedForFacetClone)
    }
  }, [])

  // TODO: Delete lastFacetSelection once StackedBarChart.tsx/Facets.tsx are deleted
  const [lastFacetSelection, setLastFacetSelection] =
    React.useState<FacetSelection>({
      columnName: '',
      facetValue: '',
      selector: '',
    })

  const componentIndex = props.componentIndex ?? 0

  const [topLevelControlsState, setTopLevelControlsState] =
    React.useState<TopLevelControlsState>({
      showColumnFilter: true,
      showFacetFilter: true,
      showFacetVisualization: props.defaultShowFacetVisualization ?? true,
      showSearchBar: false,
      showDownloadConfirmation: false,
      showColumnSelectDropdown: false,
      showSqlEditor: false,
    })

  const [chartSelectionIndex, setChartSelectionIndex] = React.useState(0)

  const [isAllFilterSelectedForFacet, setIsAllFilterSelectedForFacet] =
    React.useState<Record<string, boolean>>({})
  const [isColumnSelected, setIsColumnSelected] = React.useState<string[]>([])
  const [selectedRowIndices, setSelectedRowIndices] = React.useState<number[]>(
    [],
  )

  /**
   * Inspect the URL to see if we have a particular query request that we must show.
   */
  React.useEffect(() => {
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
  function getLastQueryRequest(): QueryBundleRequest {
    return cloneDeep(lastQueryRequest)
  }

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
   * Execute the given query request, updating all of the data in the queryWrapper to match the new query
   * @param {*} queryRequest Query request as specified by
   *                         https://rest-docs.synapse.org/rest/org/sagebionetworks/repo/model/table/Query.html
   */
  function executeQueryRequest(queryRequest: QueryBundleRequest) {
    const clonedQueryRequest = cloneDeep(queryRequest)
    // SWC-6030: If sql changes, reset what columns are visible

    setLastQueryRequest(clonedQueryRequest)
    setSelectedRowIndices([])
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
    refetch()
  }

  /**
   * remove a particular facet name (e.g. study) and its all possible values based on the parameter specified in the url
   * this is to remove the facet from the charts, search and filter.
   * @return data: QueryResultBundle
   */
  function removeLockedFacetData() {
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
  }

  const context: QueryWrapperContextType = {
    data: removeLockedFacetData(),
    isLoadingNewPage: isFetchingNextPage,
    hasNextPage: !!hasNextPage,
    hasPreviousPage: !!hasPreviousPage,
    isLoadingNewBundle: isLoadingNewBundle,
    getLastQueryRequest,
    getInitQueryRequest,
    topLevelControlsState,
    setTopLevelControlsState,
    columnsToShowInTable: isColumnSelected,
    setColumnsToShowInTable: setIsColumnSelected,
    selectedRowIndices,
    setSelectedRowIndices,
    lastFacetSelection,
    setLastFacetSelection,
    isAllFilterSelectedForFacet,
    setIsAllFilterSelectedForFacet,
    chartSelectionIndex,
    setChartSelectionIndex,
    error: error,
    facetAliases: props.facetAliases,
    isFacetsAvailable,
    entity,
    executeQueryRequest,
    setCurrentPage,
    asyncJobStatus: {
      jobState: 'PROCESSING',
      jobCanceling: false,
      requestBody: undefined,
      responseBody: undefined,
      etag: '',
      jobId: '',
      startedByUserId: 0,
      startedOn: '',
      changedOn: '',
      progressMessage: '',
      progressCurrent: 0,
      progressTotal: 0,
      exception: '',
      errorMessage: '',
      errorDetails: '',
      runtimeMS: 0,
    },
    appendNextPageToResults,
    goToNextPage,
    goToPreviousPage,
  }
  /**
   * Render the children without any formatting
   */
  const { children } = props
  const loadingCursorClass = isLoadingNewBundle ? 'SRC-logo-cursor' : ''
  return (
    <QueryWrapperContextProvider queryWrapperContext={context}>
      <div
        className={`SRC-wrapper ${loadingCursorClass} ${
          isFacetsAvailable ? 'has-facets' : ''
        }`}
      >
        {children}
      </div>
    </QueryWrapperContextProvider>
  )
}
