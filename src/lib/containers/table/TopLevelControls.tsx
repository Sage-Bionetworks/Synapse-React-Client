import { cloneDeep } from 'lodash-es'
import React from 'react'
import { SQL_EDITOR } from '../../utils/SynapseConstants'
import { QueryResultBundle } from '../../utils/synapseTypes'
import MissingQueryResultsWarning from '../MissingQueryResultsWarning'
import {
  TopLevelControlsState,
  useQueryVisualizationContext,
} from '../QueryVisualizationWrapper'
import {
  QUERY_FILTERS_COLLAPSED_CSS,
  QUERY_FILTERS_EXPANDED_CSS,
} from '../QueryWrapper'
import { useQueryContext } from '../QueryContext'
import { ElementWithTooltip } from '../widgets/ElementWithTooltip'
import { DownloadOptions } from './table-top'
import { ColumnSelection } from './table-top/ColumnSelection'
import TotalQueryResults from '../TotalQueryResults'

export type TopLevelControlsProps = {
  name?: string
  hideDownload?: boolean
  hideVisualizationsControl?: boolean
  hideFacetFilterControl?: boolean
  hideQueryCount?: boolean
  hideSqlEditorControl?: boolean
  showColumnSelection?: boolean
  customControls?: CustomControl[]
  showNotch?: boolean
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
  icon?: string
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
    tooltipText: 'Show options for download',
  },
  {
    icon: SQL_EDITOR,
    key: 'showSqlEditor',
    tooltipText: 'Show / Hide the Advanced Query Editor',
  },
]

const TopLevelControls = (props: TopLevelControlsProps) => {
  const {
    name,
    showColumnSelection = false,
    hideDownload = false,
    hideVisualizationsControl = false,
    hideFacetFilterControl = false,
    hideQueryCount = false,
    hideSqlEditorControl = true,
    customControls,
    showNotch = false,
  } = props

  const { data, entity, executeQueryRequest, getLastQueryRequest } =
    useQueryContext()

  const {
    topLevelControlsState,
    setTopLevelControlsState,
    columnsToShowInTable,
    selectedRowIndices,
    facetAliases,
    setColumnsToShowInTable,
  } = useQueryVisualizationContext()

  const setControlState = (control: keyof TopLevelControlsState) => {
    const updatedTopLevelControlsState: Partial<TopLevelControlsState> = {
      [control]: !topLevelControlsState[control],
    }
    if (control === 'showSearchBar') {
      updatedTopLevelControlsState.showDownloadConfirmation = false
    }
    if (control === 'showDownloadConfirmation') {
      updatedTopLevelControlsState.showSearchBar = false
    }
    setTopLevelControlsState(state => ({
      ...state,
      ...updatedTopLevelControlsState,
    }))
  }

  const refresh = () => {
    executeQueryRequest(getLastQueryRequest())
  }
  /**
   * Handles the toggle of a column select, this will cause the table to
   * either show the column or hide depending on the prior state of the column
   *
   * @memberof SynapseTable
   */
  const toggleColumnSelection = (columnName: string) => {
    let columnsToShowInTableCopy = cloneDeep(columnsToShowInTable)
    if (columnsToShowInTableCopy.includes(columnName)) {
      columnsToShowInTableCopy = columnsToShowInTableCopy.filter(
        el => el !== columnName,
      )
    } else {
      columnsToShowInTableCopy.push(columnName)
    }
    setColumnsToShowInTable(columnsToShowInTableCopy)
  }
  const showFacetFilter = topLevelControlsState?.showFacetFilter
  const lastQueryRequest = getLastQueryRequest()
  const hasFacetsOrFilters =
    (lastQueryRequest?.query.selectedFacets !== undefined &&
      lastQueryRequest.query.selectedFacets.length > 0) ||
    (lastQueryRequest?.query.additionalFilters !== undefined &&
      lastQueryRequest?.query.additionalFilters.length > 0)
  return (
    <div
      className={`TopLevelControls ${
        showFacetFilter
          ? QUERY_FILTERS_EXPANDED_CSS
          : QUERY_FILTERS_COLLAPSED_CSS
      }`}
      data-testid="TopLevelControls"
    >
      <div>
        <div className="TopLevelControls__querycount">
          {name && (
            <>
              {!hideQueryCount && (
                <TotalQueryResults
                  frontText={''}
                  endText={hasFacetsOrFilters ? 'Filtered By' : ''}
                  showNotch={showNotch}
                />
              )}
              {!hideQueryCount && entity && (
                <MissingQueryResultsWarning entity={entity} />
              )}
            </>
          )}
        </div>
        <div className="TopLevelControls__actions">
          {customControls &&
            customControls.map(customControl => {
              return (
                <button
                  key={customControl.buttonText}
                  className={`btn SRC-roundBorder SRC-primary-background-color SRC-whiteText ${
                    customControl.classNames ?? ''
                  }`}
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
              (key === 'showDownloadConfirmation' && hideDownload) ||
              (key === 'showFacetVisualization' && hideVisualizationsControl) ||
              (key === 'showFacetFilter' && hideFacetFilterControl) ||
              (key === 'showSqlEditor' && hideSqlEditorControl)
            ) {
              // needs to be a file view in order for download to make sense
              return <React.Fragment key={key}></React.Fragment>
            } else if (key === 'showDownloadConfirmation') {
              return (
                <DownloadOptions
                  key={key}
                  darkTheme={true}
                  onDownloadFiles={() => setControlState(key)}
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
              isColumnSelected={columnsToShowInTable}
              toggleColumnSelection={toggleColumnSelection}
              darkTheme={true}
              facetAliases={facetAliases}
            />
          )}
        </div>
      </div>
    </div>
  )
}

export default TopLevelControls
