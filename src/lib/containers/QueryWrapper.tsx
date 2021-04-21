import { cloneDeep } from 'lodash-es'
import React, { useEffect, useState } from 'react'
import { QueryClient } from 'react-query'
import { SynapseConstants } from '../utils/'
import * as DeepLinkingUtils from '../utils/functions/deepLinkingUtils'
import { withQueryClientProvider } from '../utils/hooks/SynapseAPI/QueryClientProviderWrapper'
import useGetQueryResultBundle from '../utils/hooks/SynapseAPI/useGetQueryResultBundle'
import { SynapseClientError } from '../utils/SynapseClient'
import {
  FacetColumnResultValues,
  QueryBundleRequest,
  QueryResultBundle,
} from '../utils/synapseTypes/'

export type QueryWrapperProps = {
  visibleColumnCount?: number
  initQueryRequest: QueryBundleRequest
  rgbIndex?: number
  token?: string
  facet?: string
  unitDescription?: string
  facetAliases?: {}
  showBarChart?: boolean
  componentIndex?: number //used for deep linking
  shouldDeepLink?: boolean
  hiddenColumns?: string[]
  lockedFacet?: LockedFacet
  defaultShowFacetVisualization?: boolean
}

export type TopLevelControlsState = {
  showFacetVisualization: boolean
  showFacetFilter: boolean
  showColumnFilter: boolean
  showSearchBar: boolean
  showDownloadConfirmation: boolean
  showColumnSelectDropdown: boolean
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

// Since the component is an HOC we export the props passed down
export type QueryWrapperChildProps = {
  isAllFilterSelectedForFacet?: {}
  isLoading?: boolean
  token?: string
  entityId?: string
  isLoadingNewData?: boolean
  executeQueryRequest?: (param: QueryBundleRequest) => void
  getNextPageOfData?: (queryRequest: QueryBundleRequest) => void
  getLastQueryRequest?: () => QueryBundleRequest
  getInitQueryRequest?: () => QueryBundleRequest
  data?: QueryResultBundle
  facet?: string
  setTopLevelControlsState?: (
    topLevelControlsState: TopLevelControlsState,
  ) => void
  setSelectedRowIndices?: (selectedRowIndices: number[]) => void
  setLastFacetSelection?: (lastFacetSelection: FacetSelection) => void
  setIsAllFilterSelectedForFacet?: (isAllFilterSelectedForFacet: any) => void
  setChartSelectionIndex?: (chartSelectionIndex: number) => void
  setIsColumnSelected?: (isColumnSelected: string[]) => void
  rgbIndex?: number
  unitDescription?: string
  facetAliases?: {}
  lastFacetSelection?: FacetSelection
  chartSelectionIndex?: number
  showBarChart?: boolean
  hasMoreData?: boolean
  topLevelControlsState?: TopLevelControlsState
  isColumnSelected?: string[]
  selectedRowIndices?: number[]
  error?: SynapseClientError | null
  lockedFacet?: LockedFacet
}
export const QUERY_FILTERS_EXPANDED_CSS: string = 'isShowingFacetFilters'
export const QUERY_FILTERS_COLLAPSED_CSS: string = 'isHidingFacetFilters'

/**
 * remove a particular facet name (e.g. study) and its all possible values based on the parameter specified in the url
 * this is to remove the facet from the charts, search and filter.
 * @return data: QueryResultBundle
 */
function removeLockedFacetData(
  lockedFacet?: LockedFacet,
  data?: QueryResultBundle,
) {
  const facet = lockedFacet?.facet
  if (facet && data) {
    // for details page, return data without the "locked" facet
    const dataClone: QueryResultBundle = cloneDeep(data)
    const facets = dataClone.facets?.filter(
      item => item.columnName.toLowerCase() !== facet.toLowerCase(),
    )
    dataClone.facets = facets
    return dataClone
  } else {
    // for other pages, just return the data
    return data
  }
}

// Create a client
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000 * 5, // 5 minutes
      retry: false, // SynapseClient knows which queries to retry
      refetchOnWindowFocus: false,
    },
  },
})

/**
 * Component wraps around any Synapse views that are dependent on a query bundle
 * Those classes then take in as props:
 *
 * @class QueryWrapper
 * @extends {React.Component}
 */
export const QueryWrapper: React.FunctionComponent<QueryWrapperProps> = withQueryClientProvider(
  props => {
    // These will probably be replaced by React Query
    const [queryRequest, setQueryRequest] = useState(props.initQueryRequest)

    const {
      data,
      isLoading: isLoadingNewData,
      isFetching: isLoading,
      error,
    } = useGetQueryResultBundle(queryRequest, props.token, {
      keepPreviousData: true,
    })
    const hasMoreData =
      data?.queryResult.queryResults.rows.length === SynapseConstants.PAGE_SIZE

    const [
      topLevelControlsState,
      setTopLevelControlsState,
    ] = useState<TopLevelControlsState>({
      showColumnFilter: true,
      showFacetFilter: true,
      showFacetVisualization: props.defaultShowFacetVisualization ?? true,
      showSearchBar: false,
      showDownloadConfirmation: false,
      showColumnSelectDropdown: false,
    })
    const [isColumnSelected, setIsColumnSelected] = useState<string[]>([])
    const [selectedRowIndices, setSelectedRowIndices] = useState<number[]>([])

    const componentIndex = props.componentIndex ?? 0
    const [
      lastFacetSelection,
      setLastFacetSelection,
    ] = useState<FacetSelection>({
      columnName: '',
      facetValue: '',
      selector: '',
    })

    const [chartSelectionIndex, setChartSelectionIndex] = useState(0)

    const [
      isAllFilterSelectedForFacet,
      setIsAllFilterSelectedForFacet,
    ] = useState({})

    const [
      dataWithLockedFacetRemoved,
      setDataWithLockedFacetRemoved,
    ] = useState(data)

    useEffect(() => {
      setIsColumnSelected(
        data?.selectColumns
          ?.slice(0, props.visibleColumnCount ?? Infinity)
          .map(el => el.name) ?? [],
      )
    }, [data])

    useEffect(() => {
      // TODO: verify linking still works as expected
      const linkedQuery = DeepLinkingUtils.getQueryRequestFromLink(
        'QueryWrapper',
        componentIndex,
      )
      if (linkedQuery) {
        setQueryRequest(linkedQuery)
      }

      if (props.facet) {
        if (!data?.facets) {
          throw Error(
            'Error on query request, must include facets in partmask to show facets',
          )
        }
        const enumFacets = data.facets.filter(
          el => el.facetType === 'enumeration',
        ) as FacetColumnResultValues[]
        enumFacets.forEach(el => {
          // isAll is only true iff there are no facets selected or all elements are selected
          const { facetValues } = el
          const isAllFalse = facetValues.every(facet => !facet.isSelected)
          const isAllTrue = facetValues.every(facet => facet.isSelected)
          const isByDefaultSelected = isAllFalse || isAllTrue
          isAllFilterSelectedForFacet[el.columnName] = isByDefaultSelected
          if (el.columnName === props.facet && !isAllFalse) {
            // Note - this picks the first selected facet
            setChartSelectionIndex(
              facetValues
                .sort((a, b) => b.count - a.count)
                .findIndex(facet => facet.isSelected),
            )
          }
        })
      }
      setIsAllFilterSelectedForFacet(isAllFilterSelectedForFacet)
    }, [])

    useEffect(() => {
      if (queryRequest !== props.initQueryRequest) {
        setSelectedRowIndices([])

        const clonedQueryRequest = cloneDeep(queryRequest)
        if (clonedQueryRequest.query) {
          const stringifiedQuery = encodeURIComponent(
            JSON.stringify(clonedQueryRequest.query),
          )
          if (props.shouldDeepLink) {
            DeepLinkingUtils.updateUrlWithNewSearchParam(
              'QueryWrapper',
              componentIndex,
              stringifiedQuery,
            )
          }
        }
      }
    }, [queryRequest])

    useEffect(() => {
      if (data) {
        setDataWithLockedFacetRemoved(
          removeLockedFacetData(props.lockedFacet, data),
        )
      }
    }, [props.lockedFacet, data])

    const { children, ...rest } = props
    // inject props in children of this component
    const childrenWithProps = React.Children.map(
      props.children,
      (child: any) => {
        if (!child) {
          return child
        }
        const queryWrapperChildProps: QueryWrapperChildProps = {
          isAllFilterSelectedForFacet,
          data: dataWithLockedFacetRemoved,
          hasMoreData: hasMoreData,
          lastFacetSelection: lastFacetSelection,
          chartSelectionIndex: chartSelectionIndex,
          isLoading: isLoading,
          isLoadingNewData: isLoadingNewData,
          topLevelControlsState: topLevelControlsState,
          isColumnSelected: isColumnSelected,
          selectedRowIndices: selectedRowIndices,
          error: error,
          executeQueryRequest: param => {
            console.log('calling execute query request with ', param)
            setQueryRequest(cloneDeep(param))
          },
          getNextPageOfData: setQueryRequest,
          getLastQueryRequest: () => queryRequest,
          getInitQueryRequest: () => props.initQueryRequest,
          setTopLevelControlsState: setTopLevelControlsState,
          setSelectedRowIndices: setSelectedRowIndices,
          setLastFacetSelection: setLastFacetSelection,
          setIsAllFilterSelectedForFacet: setIsAllFilterSelectedForFacet,
          setChartSelectionIndex: setChartSelectionIndex,
          setIsColumnSelected: setIsColumnSelected,
          ...rest,
        }
        return React.cloneElement(child, queryWrapperChildProps)
      },
    )

    const loadingCusrorClass = isLoading ? 'SRC-logo-cursor' : ''
    return (
      <div className={`SRC-wrapper ${loadingCusrorClass}`}>
        {childrenWithProps}
      </div>
    )
  },
  queryClient,
)

export default QueryWrapper
