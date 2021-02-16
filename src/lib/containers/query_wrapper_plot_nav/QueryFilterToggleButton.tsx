import React from 'react'
import { QueryWrapperChildProps, TopLevelControlsState } from '../QueryWrapper'
import { Button } from 'react-bootstrap'
import IconSvg, { IconSvgOptions } from '../IconSvg'


const QueryFilterToggleButton = (
  props: QueryWrapperChildProps,
) => {
  const {
    updateParentState,
    topLevelControlsState,
  } = props
  const { showFacetFilter } = topLevelControlsState!
  const toggleFilterShowingState = () => {
    const updatedTopLevelControlsState: TopLevelControlsState = {
      ...topLevelControlsState!,
      'showFacetFilter': !topLevelControlsState!['showFacetFilter'],
    }
    updateParentState!({
      topLevelControlsState: updatedTopLevelControlsState,
    })
  }
  const iconOptions:IconSvgOptions = {
    icon: showFacetFilter ? 'arrowBack' : 'arrowForward',
    color: 'inherit'
  }
  return (
    <div className={`QueryFilterToggleButton bootstrap-4-backport ${showFacetFilter ? 'isShowingFacetFilters' : 'isHidingFacetFilters'}`}>
      <Button
        variant="outline-primary"
        onClick={toggleFilterShowingState}
        type="button"
        size="lg"
      >
        <IconSvg options={iconOptions}></IconSvg>
      </Button>
    </div>

  )
}

export default QueryFilterToggleButton
