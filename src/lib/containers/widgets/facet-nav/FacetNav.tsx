import * as React from 'react'
import FacetNavPanel, { PlotType } from './FacetNavPanel'
import {
  QueryWrapperChildProps,
  QUERY_FILTERS_COLLAPSED_CSS,
  QUERY_FILTERS_EXPANDED_CSS,
} from '../../QueryWrapper'
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
import { Button } from 'react-bootstrap'

export type FacetNavOwnProps = {
  facetsToPlot?: string[]
  showNotch?: boolean
}

type UiFacetState = {
  name: string
  isHidden: boolean
  isExpanded: boolean
  plotType: PlotType
  index?: number
}

const DEFAULT_VISIBLE_FACETS = 2

/*
TODO: This component has a few bugs when its props are updated with new data, this should be handled
at some point. As of the moment the portal doesn't have a case when the props will update,
it will always mount this component.
*/
export type FacetNavProps = FacetNavOwnProps & QueryWrapperChildProps

type ShowMoreState = 'MORE' | 'LESS' | 'NONE'

export function getFacets(
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
  const { showFacetVisualization, showFacetFilter } = topLevelControlsState!

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
          plotType: 'PIE',
        })),
      )
      setIsFirstTime(false)
    }
  }, [data, isFirstTime, facetsToPlot])

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

  // don't show hidden facets
  const isFacetHiddenInGrid = (columnName: string) => {
    const itemHidden = facetUiStateArray.find(
      item => item.name === columnName && item.isHidden === true,
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

  // hides facet graph
  const hideFacetInGrid = (columnName: string) => {
    setUiPropertyForFacet(columnName, 'isHidden', true)
  }

  const setPlotType = (columnName: string, plotType: PlotType) => {
    setUiPropertyForFacet(columnName, 'plotType', plotType)
  }

  const getPlotType = (columnName: string): PlotType => {
    const plotType = facetUiStateArray.find(item => item.name === columnName)
      ?.plotType
    return plotType ?? 'PIE'
  }

  const setUiPropertyForFacet = (
    columnName: string,
    propName: keyof UiFacetState,
    value: boolean | PlotType, // 'the possible values of the above type' (currently can't be specified in TS using symbols)
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

  const facets = getFacets(data, facetsToPlot)

  const colorTracker = getFacets(data, facetsToPlot).map((el, index) => {
    return {
      columnName: el.columnName,
      colorIndex: index,
    }
  })
  const showMoreButtonState = getShowMoreState()

  if (error) {
    return <></>
  } else if (isLoadingNewData) {
    return (
      <div className="SRC-loadingContainer SRC-centerContentColumn">
        {asyncJobStatus?.progressMessage && (
          <div>
            <span className="spinner" />
            {asyncJobStatus.progressMessage}
          </div>
        )}
      </div>
    )
  } else {
    return (
      <>
        <TotalQueryResults
          isLoading={isLoading!}
          executeQueryRequest={executeQueryRequest!}
          lastQueryRequest={getLastQueryRequest?.()!}
          getInitQueryRequest={getInitQueryRequest}
          token={token}
          unitDescription={
            hasSelectedFacets ? 'Results Filtered By' : 'Results'
          }
          frontText={''}
          showNotch={showNotch}
          topLevelControlsState={topLevelControlsState}
        />

        <div
          className={`FacetNav ${showFacetVisualization ? '' : 'hidden'} ${
            showFacetFilter
              ? QUERY_FILTERS_EXPANDED_CSS
              : QUERY_FILTERS_COLLAPSED_CSS
          } ${showMoreButtonState === 'LESS' ? 'less' : ''}`}
        >
          <div className="FacetNav__row">
            {facets.map(facet => (
              <div
                className="col-sm-12 col-md-4"
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
                  plotType={getPlotType(facet.columnName)}
                  onSetPlotType={(plotType: PlotType) =>
                    setPlotType(facet.columnName, plotType)
                  }
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
                  isExpanded={false}
                  facetAliases={facetAliases}
                  token={token}
                />
              </div>
            ))}
          </div>
          <div className="FacetNav__showMoreContainer bootstrap-4-backport">
            {showMoreButtonState !== 'NONE' && (
              <Button
                variant="secondary"
                className="pill-xl FacetNav__showMore"
                onClick={() => onShowMoreClick(showMoreButtonState === 'MORE')}
                style={{ zIndex: 500 }}
              >
                {showMoreButtonState === 'LESS'
                  ? 'Hide Charts'
                  : 'View All Charts'}
              </Button>
            )}
          </div>
        </div>
      </>
    )
  }
}

export default FacetNav
