import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import QueryCount from '../QueryCount'
import { library, IconProp } from '@fortawesome/fontawesome-svg-core'
import {
  faSearch,
  faFilter,
  faChartBar,
} from '@fortawesome/free-solid-svg-icons'
import { QueryWrapperChildProps, TopLevelControlsState } from '../QueryWrapper'
import { TOOLTIP_DELAY_SHOW } from '../table/SynapseTableConstants'
import ReactTooltip from 'react-tooltip'
import { SynapseClient } from '../../utils'

library.add(faSearch)
library.add(faFilter)
library.add(faChartBar)

export type TopLevelControlsProps = {
  name: string
  entityId: string
  sql: string
  token?: string
}

type Control = {
  key: keyof TopLevelControlsState
  icon: IconProp
  tooltipText: string
}

const controls: Control[] = [
  {
    icon: 'search',
    key: 'showSearchBar',
    tooltipText: 'Toggle Search',
  },
  {
    icon: 'chart-bar',
    key: 'showFacetVisualization',
    tooltipText: 'Toggle Visualization',
  },
  {
    icon: 'filter',
    key: 'showFacetFilter',
    tooltipText: 'Toggle Facet Filter',
  },
  {
    icon: 'download',
    key: 'showDownloadConfirmation',
    tooltipText: 'Toggle Download',
  },
]

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
  const [isFileView, setIsFileView] = useState(false)

  const setControlState = (control: keyof TopLevelControlsState) => {
    const updatedTopLevelControlsState: TopLevelControlsState = {
      ...topLevelControlsState!,
      [control]: !topLevelControlsState![control],
    }
    if (control === 'showSearchBar') {
      updatedTopLevelControlsState.showDownloadConfirmation = false
    }
    if (control === 'showDownloadConfirmation') {
      updatedTopLevelControlsState.showSearchBar = false
    }
    updateParentState!({
      topLevelControlsState: updatedTopLevelControlsState,
    })
  }

  useEffect(() => {
    const getIsFileView = async () => {
      const entityData = await SynapseClient.getEntity(token, entityId)
      setIsFileView(entityData.concreteType.includes('EntityView'))
    }
    getIsFileView()
  }, [entityId, token])

  return (
    <h3 className="QueryWrapperPlotNav__title">
      <div className="QueryWrapperPlotNav__querycount">
        <QueryCount entityId={entityId} token={token} name={name} sql={sql} />
      </div>
      <div className="QueryWrapperPlotNav__actions">
        {controls.map(control => {
          const { key, icon, tooltipText } = control
          if (key === 'showDownloadConfirmation' && !isFileView) {
            // needs to be a file view in order for download to make sense
            return <></>
          }
          return (
            <React.Fragment key={key}>
              <button
                className="SRC-primary-action-color"
                onClick={() => setControlState(key)}
                data-for={key}
                data-tip={tooltipText}
              >
                <FontAwesomeIcon icon={icon} size="1x" />
              </button>
              <ReactTooltip
                place="top"
                type="dark"
                effect="solid"
                delayShow={TOOLTIP_DELAY_SHOW}
                id={key}
              />
            </React.Fragment>
          )
        })}
      </div>
    </h3>
  )
}

export default TopLevelControls
