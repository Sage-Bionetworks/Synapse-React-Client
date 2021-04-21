import React, { useEffect, useState } from 'react'
import QueryCount from '../QueryCount'
import { IconDefinition } from '@fortawesome/fontawesome-svg-core'
import {
  QueryWrapperChildProps,
  QUERY_FILTERS_COLLAPSED_CSS,
  QUERY_FILTERS_EXPANDED_CSS,
  TopLevelControlsState,
} from '../QueryWrapper'
import { ColumnSelection } from '../table/table-top/ColumnSelection'
import { SynapseClient } from '../../utils'
import { ElementWithTooltip } from '../widgets/ElementWithTooltip'
import { cloneDeep } from 'lodash-es'
import { QueryResultBundle } from '../../utils/synapseTypes/'
import { DownloadOptions } from '../table/table-top'
import { parseEntityIdFromSqlStatement } from '../../utils/functions/sqlFunctions'

export type TopLevelControlsProps = {
  name: string
  entityId: string
  sql: string
  token?: string
  hideDownload?: boolean
  showColumnSelection?: boolean
  customControls?: CustomControl[]
}

type Control = {
  key: keyof TopLevelControlsState
  icon: string
  tooltipText: string
}

type CustomControlCallbackData = {
  data: QueryResultBundle | undefined
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
    icon: 'search',
    key: 'showSearchBar',
    tooltipText: 'Show / Hide Search Bar',
  },
  {
    icon: 'chart',
    key: 'showFacetVisualization',
    tooltipText: 'Show / Hide Visualizations',
  },
  {
    icon: 'filter',
    key: 'showFacetFilter',
    tooltipText: 'Show / Hide Filters',
  },
  {
    icon: 'download',
    key: 'showDownloadConfirmation',
    tooltipText: 'Add files in table to Download List',
  },
]

const TopLevelControls = (
  props: QueryWrapperChildProps & TopLevelControlsProps,
) => {
  const {
    token,
    name,
    sql,
    setTopLevelControlsState,
    setIsColumnSelected,
    topLevelControlsState,
    data,
    showColumnSelection = false,
    isColumnSelected,
    hideDownload = false,
    selectedRowIndices,
    customControls,
    executeQueryRequest,
    getLastQueryRequest,
    facetAliases,
  } = props
  const entityId = parseEntityIdFromSqlStatement(sql)
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

    setTopLevelControlsState!(updatedTopLevelControlsState)
  }

  useEffect(() => {
    const getIsFileView = async () => {
      const entityData = await SynapseClient.getEntity(token, entityId)
      setIsFileView(entityData.concreteType.includes('EntityView'))
    }
    getIsFileView()
  }, [entityId, token])

  const refresh = () => {
    executeQueryRequest!(getLastQueryRequest!())
  }
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
    setIsColumnSelected!(isColumnSelectedCopy)
  }
  const showFacetFilter = topLevelControlsState?.showFacetFilter
  return (
    <div
      className={`TopLevelControls ${
        showFacetFilter
          ? QUERY_FILTERS_EXPANDED_CSS
          : QUERY_FILTERS_COLLAPSED_CSS
      }`}
    >
      <h3>
        <div className="QueryWrapperPlotNav__querycount">
          <QueryCount token={token} name={name} sql={sql} parens={true} />
        </div>
        <div className="QueryWrapperPlotNav__actions">
          {customControls &&
            customControls.map(customControl => {
              return (
                <button
                  key={customControl.buttonText}
                  className={`btn SRC-roundBorder SRC-primary-background-color SRC-whiteText ${customControl.classNames}`}
                  style={{ marginRight: '5px' }}
                  type="button"
                  onClick={() =>
                    customControl.onClick({ data, selectedRowIndices, refresh })
                  }
                >
                  {customControl.icon}&nbsp;
                  {customControl.buttonText}
                </button>
              )
            })}
          {controls.map(control => {
            const { key, icon, tooltipText } = control
            if (
              key === 'showDownloadConfirmation' &&
              (!isFileView || hideDownload)
            ) {
              // needs to be a file view in order for download to make sense
              return <></>
            } else if (key === 'showDownloadConfirmation') {
              return (
                <DownloadOptions
                  darkTheme={true}
                  onDownloadFiles={() => {
                    setTopLevelControlsState!({
                      ...topLevelControlsState!,
                      showDownloadConfirmation: true,
                    })
                  }}
                  token={token}
                  queryResultBundle={data}
                  queryBundleRequest={getLastQueryRequest!()}
                  isFileView={isFileView && !hideDownload}
                />
              )
            }
            return (
              <ElementWithTooltip
                idForToolTip={key}
                tooltipText={tooltipText}
                key={key}
                callbackFn={() => setControlState(key)}
                darkTheme={true}
                icon={icon}
              />
            )
          })}
          {showColumnSelection && (
            <ColumnSelection
              headers={data?.selectColumns}
              isColumnSelected={isColumnSelected!}
              toggleColumnSelection={toggleColumnSelection}
              darkTheme={true}
              facetAliases={facetAliases}
            />
          )}
        </div>
      </h3>
    </div>
  )
}

export default TopLevelControls
