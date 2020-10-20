import * as React from 'react'
import FacetNavPanel from './FacetNavPanel'
import { QueryWrapperChildProps } from '../../QueryWrapper'
import {
  FacetColumnResultValues,
  FacetColumnRequest,
  FacetColumnResult,
  QueryResultBundle,
  FacetColumnResultValueCount,
} from '../../../utils/synapseTypes'
import { useState, useEffect } from 'react'
import TotalQueryResults from '../../../containers/TotalQueryResults'
import { applyChangesToValuesColumn } from '../query-filter/QueryFilter'

export type FacetNavOwnProps = {
  facetsToPlot?: string[]
  showNotch?: boolean
}

type UiFacetState = {
  name: string
  isHidden: boolean
  isExpanded: boolean
  index?: number
}

const DEFAULT_VISIBLE_FACETS = 3

/*
TODO: This component has a few bugs when its props are updated with new data, this should be handled
at some point. As of the moment the portal doesn't have a case when the props will update,
it will always mount this component.
*/
export type FacetNavProps = FacetNavOwnProps & QueryWrapperChildProps

type ShowMoreState = 'MORE' | 'LESS' | 'NONE'

export function getFacets (
  data: QueryResultBundle | undefined,
  facetsToPlot?: string[],
): FacetColumnResult[] {
  const result =
    data?.facets?.filter(
      item =>
        item.facetType === 'enumeration' &&
        (!facetsToPlot?.length || facetsToPlot.indexOf(item.columnName) > -1),
    ) ?? []
  return result
}

const FacetNav: React.FunctionComponent<FacetNavProps> = ({
  data,
  getLastQueryRequest,
  isLoadingNewData,
  isLoading,
  executeQueryRequest,
  token,
  asyncJobStatus,
  topLevelControlsState,
  facetsToPlot,
  getInitQueryRequest,
  updateParentState,
  facetAliases,
  showNotch = false,
  error,
}: FacetNavProps): JSX.Element => {
  const [facetUiStateArray, setFacetUiStateArray] = useState<UiFacetState[]>([])
  const [isFirstTime, setIsFirstTime] = useState(true)
  const { showFacetVisualization } = topLevelControlsState!

  const lastQueryRequest = getLastQueryRequest?.()

  useEffect(() => {
    const result = getFacets(data, facetsToPlot)
    if (result.length === 0) {
      return
    }
    if (isFirstTime) {
      setFacetUiStateArray(
        result.map((item, index) => ({
          name: item.columnName,
          isHidden: index >= DEFAULT_VISIBLE_FACETS,
          isExpanded: false,
        })),
      )
      setIsFirstTime(false)
    }
  }, [data, isFirstTime])

  // when 'show more/less' is clicked
  const onShowMoreClick = (shouldShowMore: boolean) => {
    setFacetUiStateArray(facetUiStateArray => {
      return facetUiStateArray.map((item, index) => {
        if (shouldShowMore) {
          // show everything
          return { ...item, isHidden: false }
        }
        // otherwise hide everything except the first three items
        return { ...item, isHidden: index >= DEFAULT_VISIBLE_FACETS }
      })
    })
  }

  // what needs to happen after the filters are adjusted from the plot
  const applyChangesFromQueryFilter = (facets: FacetColumnRequest[]) => {
    lastQueryRequest!.query.selectedFacets = facets
    lastQueryRequest!.query.offset = 0
    executeQueryRequest!(lastQueryRequest!)
  }

  // don't show expanded or hidden facets
  const isFacetHiddenInGrid = (columnName: string) => {
    const itemHidden = facetUiStateArray.find(
      item =>
        item.name === columnName &&
        (item.isHidden === true || item.isExpanded === true),
    )
    const result = itemHidden !== undefined
    return result
  }

  const getShowMoreState = (): ShowMoreState => {
    if (facetUiStateArray.length <= DEFAULT_VISIBLE_FACETS) {
      return 'NONE'
    }
    if (
      // if at least one item is hidden
      facetUiStateArray.find(item => item.isHidden === true)
    ) {
      return 'MORE'
    }
    return 'LESS'
  }

  // hides expanded facet under 'show more'
  const hideExpandedFacet = (facet: FacetColumnResult) => {
    setFacetUiStateArray(facetUiStateArray =>
      facetUiStateArray.map(item =>
        item.name === facet.columnName
          ? { ...item, isExpanded: false, isHidden: true }
          : item,
      ),
    )
  }

  //expands to collapses a facet
  const toggleExpandFacet = (facet: FacetColumnResult, doExpand: boolean) => {
    setUiPropertyForFacet(facet.columnName, 'isExpanded', doExpand)
  }

  // hides facet graph
  const hideFacetInGrid = (columnName: string) => {
    setUiPropertyForFacet(columnName, 'isHidden', true)
  }

  const setUiPropertyForFacet = (
    columnName: string,
    propName: 'isHidden' | 'isExpanded',
    value: boolean,
  ) => {
    setFacetUiStateArray(facetUiStateArray =>
      facetUiStateArray.map(item =>
        item.name === columnName ? { ...item, [propName]: value } : item,
      ),
    )
  }

  const hasSelectedFacets =
    lastQueryRequest?.query.selectedFacets !== undefined &&
    lastQueryRequest.query.selectedFacets.length > 0

  const expandedFacets = getFacets(data, facetsToPlot).filter(el => {
    return facetUiStateArray.find(uiState => {
      return uiState.name === el.columnName
    })?.isExpanded
  })
  const restOfFacets = getFacets(data, facetsToPlot).filter(el => {
    return !facetUiStateArray.find(uiState => uiState.name === el.columnName)
      ?.isExpanded
  })

  const colorTracker = getFacets(data, facetsToPlot).map((el, index) => {
    return {
      columnName: el.columnName,
      colorIndex: index,
    }
  })
  const showMoreState = getShowMoreState()

  if (error) {
    return <></>
  } else if (isLoadingNewData) {
    return (
      <div className="SRC-loadingContainer SRC-centerContentColumn">
        {asyncJobStatus?.progressMessage && (
          <div> <span className="spinner" /> {asyncJobStatus.progressMessage} </div>
        )}
      </div>
    )
  } else {
    return (
      <>
        <div className={`FacetNav ${showFacetVisualization ? '' : 'hidden'}`}>
          <div className="FacetNav__expanded">
            {expandedFacets.map((facet, index) => (
              <div key={facet.columnName}>
                <FacetNavPanel
                  data={data}
                  index={
                    colorTracker.find(el => el.columnName === facet.columnName)
                      ?.colorIndex!
                  }
                  onHide={() => hideExpandedFacet(facet)}
                  onCollapse={() => toggleExpandFacet(facet, false)}
                  facetToPlot={facet as FacetColumnResultValues}
                  applyChangesToFacetFilter={applyChangesFromQueryFilter}
                  applyChangesToGraphSlice={(
                    facet: FacetColumnResultValues,
                    value: FacetColumnResultValueCount | undefined,
                    isSelected: boolean,
                  ) =>
                    applyChangesToValuesColumn(
                      lastQueryRequest,
                      facet,
                      applyChangesFromQueryFilter,
                      value?.value,
                      isSelected,
                    )
                  }
                  facetAliases={facetAliases}
                  lastQueryRequest={lastQueryRequest}
                ></FacetNavPanel>
              </div>
            ))}
          </div>
          <div className="FacetNav__row clearfix">
            {restOfFacets.map((facet, index) => (
              <div
                style={{
                  display: isFacetHiddenInGrid(facet.columnName)
                    ? 'none'
                    : 'block',
                }}
                key={facet.columnName}
              >
                <FacetNavPanel
                  isLoading={isLoading}
                  index={
                    colorTracker.find(el => el.columnName === facet.columnName)
                      ?.colorIndex!
                  }
                  data={data}
                  onHide={() => hideFacetInGrid(facet.columnName)}
                  onExpand={() => toggleExpandFacet(facet, true)}
                  facetToPlot={facet as FacetColumnResultValues}
                  lastQueryRequest={lastQueryRequest}
                  /*
                    TODO: Simplify the nested functions below, all the logic should be contained
                    in the EnumFacetFilter component.
                  */
                  applyChangesToFacetFilter={applyChangesFromQueryFilter}
                  applyChangesToGraphSlice={(
                    facet: FacetColumnResultValues,
                    value: FacetColumnResultValueCount | undefined,
                    isSelected: boolean,
                  ) =>
                    applyChangesToValuesColumn(
                      lastQueryRequest,
                      facet,
                      applyChangesFromQueryFilter,
                      value?.value,
                      isSelected,
                    )
                  }
                  facetAliases={facetAliases}
                ></FacetNavPanel>
              </div>
            ))}
          </div>
          <div className="FacetNav__showMoreContainer">
            {showMoreState !== 'NONE' && (
              <button
                className="btn btn-default FacetNav__showMore"
                onClick={() => onShowMoreClick(showMoreState === 'MORE')}
              >
                {showMoreState === 'LESS'
                  ? 'Hide Optional Graphs'
                  : 'Show All Graphs'}
              </button>
            )}
          </div>
        </div>
        <TotalQueryResults
          isLoading={isLoading!}
          executeQueryRequest={executeQueryRequest!}
          lastQueryRequest={getLastQueryRequest?.()!}
          getInitQueryRequest={getInitQueryRequest}
          token={token}
          unitDescription={hasSelectedFacets ? 'results via:' : 'results'}
          frontText={'Showing'}
          showNotch={showNotch}
        />
      </>
    )
  }
}

export default FacetNav
