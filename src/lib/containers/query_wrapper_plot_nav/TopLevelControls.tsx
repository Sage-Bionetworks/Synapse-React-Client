import * as React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import QueryCount from '../QueryCount'
import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faSearch,
  faFilter,
  faChartBar,
} from '@fortawesome/free-solid-svg-icons'
import { QueryWrapperChildProps, TopLevelControlsState } from '../QueryWrapper'

library.add(faSearch)
library.add(faFilter)
library.add(faChartBar)

export type TopLevelControlsProps = {
  name: string
  entityId: string
  sql: string
  token?: string
}

const TopLevelControls = (
  props: QueryWrapperChildProps & TopLevelControlsProps,
) => {
  const {
    entityId,
    token,
    name,
    sql,
    updateParentState,
    topLevelControlsState,
  } = props

  const setControlState = (control: keyof TopLevelControlsState) => {
    const updatedTopLevelControlsState: TopLevelControlsState = {
      ...topLevelControlsState!,
      [control]: !topLevelControlsState![control],
    }
    updateParentState!({
      topLevelControlsState: updatedTopLevelControlsState,
    })
  }

  return (
    <h3 className="QueryWrapperPlotNav__title">
      <div className="QueryWrapperPlotNav__querycount">
        <QueryCount entityId={entityId} token={token} name={name} sql={sql} />
      </div>
      <div className="QueryWrapperPlotNav__actions">
        {/* <button  className="SRC-primary-action-color"onClick={() => setShowSearch(!showSearch)}>
            <FontAwesomeIcon icon="search" size="1x" />
          </button> */}
        <button
          className="SRC-primary-action-color"
          onClick={() => setControlState('showFacetVisualization')}
        >
          <FontAwesomeIcon icon="chart-bar" size="1x" />
        </button>
        <button
          className="SRC-primary-action-color"
          onClick={() => setControlState('showFacetFilter')}
        >
          <FontAwesomeIcon icon="filter" size="1x" />
        </button>
        <button
          className="SRC-primary-action-color"
          onClick={() => setControlState('showSearchBar')}
        >
          <FontAwesomeIcon icon="search" size="1x" />
        </button>
        {/* <button
          className="SRC-primary-action-color"
          onClick={() => setControlState('showColumnFilter')}
        >
          <FontAwesomeIcon icon="download" size="1x" />
        </button> */}
      </div>
    </h3>
  )
}

export default TopLevelControls
