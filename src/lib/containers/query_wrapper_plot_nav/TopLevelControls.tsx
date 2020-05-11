import React, { useEffect, useState } from 'react'
import QueryCount from '../QueryCount'
import { library, IconDefinition } from '@fortawesome/fontawesome-svg-core'
import {
  faSearch,
  faFilter,
  faChartBar,
  faDownload,
} from '@fortawesome/free-solid-svg-icons'
import { QueryWrapperChildProps, TopLevelControlsState } from '../QueryWrapper'
import { ColumnSelection } from '../table/table-top/ColumnSelection'
import { SynapseClient } from '../../utils'
import { ElementWithTooltip } from '../widgets/ElementWithTooltip'

library.add(faSearch)
library.add(faFilter)
library.add(faChartBar)
library.add(faDownload)

export type TopLevelControlsProps = {
  name: string
  entityId: string
  sql: string
  token?: string
}

type Control = {
  key: keyof TopLevelControlsState
  icon: IconDefinition
  tooltipText: string
}

const controls: Control[] = [
  {
    icon: faSearch,
    key: 'showSearchBar',
    tooltipText: 'Toggle Search',
  },
  {
    icon: faFilter,
    key: 'showFacetVisualization',
    tooltipText: 'Toggle Visualization',
  },
  {
    icon: faChartBar,
    key: 'showFacetFilter',
    tooltipText: 'Toggle Facet Filter',
  },
  {
    icon: faDownload,
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
    data,
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
            <ElementWithTooltip
              idForToolTip={key}
              tooltipText={tooltipText}
              key={key}
              image={icon}
              callbackFn={() => setControlState(key)}
              className="SRC-primary-color"
              darkTheme={true}
            />
          )
        })}
        <ColumnSelection
          headers={data?.selectColumns}
          isColumnSelected={[]}
          show={topLevelControlsState?.showColumnSelectDropdown ?? false}
          // @ts-ignore
          toggleColumnSelection={() => undefined}
          darkTheme={true}
        />
      </div>
    </h3>
  )
}

export default TopLevelControls
