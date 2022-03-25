import { IconDefinition } from '@fortawesome/fontawesome-svg-core'
import { cloneDeep } from 'lodash-es'
import React from 'react'
import { SQL_EDITOR } from '../../utils/SynapseConstants'
import { EntityView, QueryResultBundle } from '../../utils/synapseTypes'
import Typography from '../../utils/typography/Typography'
import QueryCount from '../QueryCount'
import {
  QUERY_FILTERS_COLLAPSED_CSS,
  QUERY_FILTERS_EXPANDED_CSS,
  TopLevelControlsState,
} from '../QueryWrapper'
import { useQueryWrapperContext } from '../QueryWrapper'
import { ElementWithTooltip } from '../widgets/ElementWithTooltip'
import { DownloadOptions } from './table-top'
import { ColumnSelection } from './table-top/ColumnSelection'

export type TopLevelControlsProps = {
  name?: string
  entityId: string
  sql: string
  hideDownload?: boolean
  hideVisualizationsControl?: boolean
  hideFacetFilterControl?: boolean
  hideQueryCount?: boolean
  hideSqlEditorControl?: boolean
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
    sql,
    showColumnSelection = false,
    hideDownload = false,
    hideVisualizationsControl = false,
    hideFacetFilterControl = false,
    hideQueryCount = false,
    hideSqlEditorControl = true,
    customControls,
  } = props

  const {
    entity,
    topLevelControlsState,
    setTopLevelControlsState,
    data,
    columnsToShowInTable: isColumnSelected,
    selectedRowIndices,
    executeQueryRequest,
    getLastQueryRequest,
    facetAliases,
    setColumnsToShowInTable: setIsColumnSelected,
  } = useQueryWrapperContext()

  const isFileView =
    entity?.concreteType ===
      'org.sagebionetworks.repo.model.table.EntityView' &&
    (entity as EntityView | undefined)?.viewTypeMask === 1
  const isDataset =
    entity?.concreteType === 'org.sagebionetworks.repo.model.table.Dataset'

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
    let isColumnSelectedCopy = cloneDeep(isColumnSelected)
    if (isColumnSelectedCopy.includes(columnName)) {
      isColumnSelectedCopy = isColumnSelectedCopy.filter(
        el => el !== columnName,
      )
    } else {
      isColumnSelectedCopy.push(columnName)
    }
    setIsColumnSelected(isColumnSelectedCopy)
  }
  const showFacetFilter = topLevelControlsState?.showFacetFilter

  return (
    <div
      className={`TopLevelControls ${
        showFacetFilter
          ? QUERY_FILTERS_EXPANDED_CSS
          : QUERY_FILTERS_COLLAPSED_CSS
      }`}
      data-testid="TopLevelControls"
    >
      <h3>
        <div className="TopLevelControls__querycount">
          {name && (
            <Typography variant="sectionTitle" role="heading">
              {name} {!hideQueryCount && <QueryCount sql={sql} parens={true} />}
            </Typography>
          )}
          {isDataset && (
            <div className="TopLevelControls__hiddenFilesWarning">
              {name && (
                <Typography variant="smallText1">
                  {name}{' '}
                  {!hideQueryCount && <QueryCount sql={sql} parens={true} />}
                </Typography>
              )}
            </div>
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
              return <></>
            } else if (key === 'showDownloadConfirmation') {
              return (
                <DownloadOptions
                  darkTheme={true}
                  onDownloadFiles={() => setControlState(key)}
                  queryResultBundle={data}
                  queryBundleRequest={getLastQueryRequest()}
                  isFileView={isFileView || isDataset}
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
              isColumnSelected={isColumnSelected}
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
