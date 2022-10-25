import React, { FunctionComponent } from 'react'
import { SkeletonInlineBlock } from '../assets/skeletons/SkeletonInlineBlock'
import { FacetColumnRequest } from '../utils/synapseTypes'
import { useQueryVisualizationContext } from './QueryVisualizationWrapper'
import {
  QUERY_FILTERS_COLLAPSED_CSS,
  QUERY_FILTERS_EXPANDED_CSS,
} from './QueryWrapper'
import { useQueryContext } from './QueryContext'
import IconSvg from './IconSvg'
import SelectionCriteriaPills from './widgets/facet-nav/SelectionCriteriaPills'

export type TotalQueryResultsProps = {
  style?: React.CSSProperties
  frontText: string
  endText?: string
  applyChanges?: (newFacets: FacetColumnRequest[]) => void
  hideIfUnfiltered?: boolean
}

const TotalQueryResults: FunctionComponent<TotalQueryResultsProps> = ({
  style,
  frontText,
  endText = '',
  hideIfUnfiltered = false,
}) => {
  const { data, isLoadingNewBundle, resetQuery, error, hasResettableFilters } =
    useQueryContext()

  // TODO: Filter out LockedColumn additionalFilters and facets
  // Have to do it here because we don't want to show the area for the filters if we have filters but should show none of them
  // Unless we can do something cool with CSS like only show if it "hasChildren" ???

  const { topLevelControlsState, unitDescription } =
    useQueryVisualizationContext()

  const total = data?.queryCount

  const showFacetFilter = topLevelControlsState?.showFacetFilter

  const showClearAll = hasResettableFilters
  if (error) {
    return <></>
  }
  return (
    <div
      className={`TotalQueryResults ${
        showFacetFilter
          ? QUERY_FILTERS_EXPANDED_CSS
          : QUERY_FILTERS_COLLAPSED_CSS
      } ${hasResettableFilters ? 'hasFilters' : ''}`}
      style={style}
    >
      {isLoadingNewBundle ? (
        <SkeletonInlineBlock width={100} />
      ) : (
        <>
          {(hasResettableFilters || !hideIfUnfiltered) && (
            <div className="TotalQueryResults__topbar">
              <span className="SRC-boldText">
                {frontText} {total?.toLocaleString()} {unitDescription}{' '}
                {endText}
              </span>
              {showClearAll && (
                <a
                  onClick={resetQuery}
                  className="TotalQueryResults__topbar__clearall"
                >
                  <IconSvg options={{ icon: 'deleteSweep' }} />
                  Clear all filters
                </a>
              )}
            </div>
          )}
          <div className="TotalQueryResults__selections">
            <SelectionCriteriaPills />
          </div>
        </>
      )}
    </div>
  )
}

export default TotalQueryResults
