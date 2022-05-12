import React from 'react'
import { Button } from 'react-bootstrap'
import IconSvg, { IconSvgOptions } from '../IconSvg'
import { useQueryVisualizationContext } from '../QueryVisualizationWrapper'
import {
  QUERY_FILTERS_COLLAPSED_CSS,
  QUERY_FILTERS_EXPANDED_CSS,
} from '../QueryWrapper'

const QueryFilterToggleButton = () => {
  const {
    topLevelControlsState: { showFacetFilter },
    setTopLevelControlsState,
  } = useQueryVisualizationContext()

  const toggleFilterShowingState = () => {
    setTopLevelControlsState(state => ({
      ...state,
      showFacetFilter: !state.showFacetFilter,
    }))
  }
  const icon = showFacetFilter ? 'arrowBack' : 'arrowForward'
  const iconOptions: IconSvgOptions = {
    color: 'inherit',
  }
  return (
    <div
      className={`QueryFilterToggleButton bootstrap-4-backport ${
        showFacetFilter
          ? QUERY_FILTERS_EXPANDED_CSS
          : QUERY_FILTERS_COLLAPSED_CSS
      }`}
    >
      <Button
        variant="outline-primary"
        onClick={toggleFilterShowingState}
        type="button"
        size="lg"
      >
        <IconSvg icon={icon} options={iconOptions}></IconSvg>
      </Button>
    </div>
  )
}

export default QueryFilterToggleButton
