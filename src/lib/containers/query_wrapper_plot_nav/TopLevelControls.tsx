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
import { cloneDeep } from 'lodash-es'
import { QueryResultBundle } from '../../utils/synapseTypes/'

library.add(faSearch)
library.add(faFilter)
library.add(faChartBar)
library.add(faDownload)

export type TopLevelControlsProps = {
  name: string
  entityId: string
  sql: string
  token?: string
  showColumnSelection?: boolean,
  customControls?: CustomControl[]
}

type Control = {
  key: keyof TopLevelControlsState
  icon: IconDefinition
  tooltipText: string
}

type CustomControlCallbackData = {
  data: QueryResultBundle | undefined,
  selectedRowIndices: number[] | undefined
  refresh: () => void
}

type CustomControl = {
  buttonText: string
  onClick: (event: CustomControlCallbackData) => void
  classNames?: string
  icon?: IconDefinition
}

const controls: Control[] = [
  {
    icon: faSearch,
    key: 'showSearchBar',
    tooltipText: 'Toggle Search',
  },
  {
    icon: faChartBar,
    key: 'showFacetVisualization',
    tooltipText: 'Toggle Visualization',
  },
  {
    icon: faFilter,
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
    showColumnSelection = false,
    isColumnSelected,
    selectedRowIndices,
    customControls,
    executeQueryRequest,
    getLastQueryRequest

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

  const refresh = () => { executeQueryRequest!(getLastQueryRequest!()) }
  /**
   * Handles the toggle of a column select, this will cause the table to
   * either show the column or hide depending on the prior state of the column
   *
   * @memberof SynapseTable
   */
  const toggleColumnSelection = (columnName: string) => {
    let isColumnSelectedCopy = cloneDeep(isColumnSelected!)
    if (isColumnSelectedCopy.includes(columnName)) {
      isColumnSelectedCopy = isColumnSelectedCopy.filter(
        el => el !== columnName,
      )
    } else {
      isColumnSelectedCopy.push(columnName)
    }
    updateParentState!({ isColumnSelected: isColumnSelectedCopy })
  }

  return (
    <h3 className="QueryWrapperPlotNav__title">
      <div className="QueryWrapperPlotNav__querycount">
        <QueryCount entityId={entityId} token={token} name={name} sql={sql} />
      </div>
      <div className="QueryWrapperPlotNav__actions">
        {customControls && customControls.map(customControl => {
            return (
              <button className={`btn SRC-roundBorder SRC-primary-background-color SRC-whiteText ${customControl.classNames}`}
                style={{marginRight: '5px'}}
                type='button'
                onClick={() => customControl.onClick({data, selectedRowIndices, refresh})}>
                {customControl.icon}&nbsp;
                {customControl.buttonText}
              </button>
            )
          })
        }
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
        {showColumnSelection && (
          <ColumnSelection
            headers={data?.selectColumns}
            isColumnSelected={isColumnSelected!}
            show={topLevelControlsState?.showColumnSelectDropdown ?? false}
            toggleColumnSelection={toggleColumnSelection}
            darkTheme={true}
          />
        )}
      </div>
    </h3>
  )
}

export default TopLevelControls
