import * as React from 'react'
import { SynapseConstants } from '../../utils/'
import { isTableEntity } from '../../utils/functions/EntityTypeUtils'
import {
  insertConditionsFromSearchParams,
  parseEntityIdFromSqlStatement,
  SQLOperator,
} from '../../utils/functions/sqlFunctions'
import { useGetEntity } from '../../utils/hooks/SynapseAPI/entity/useEntity'
import { DEFAULT_PAGE_SIZE } from '../../utils/SynapseConstants'
import { Query, QueryBundleRequest } from '../../utils/synapseTypes'
import { CardConfiguration } from '../CardContainerLogic'
import { DownloadConfirmation } from '../download_list'
import FullTextSearch from '../FullTextSearch'
import ModalDownload from '../ModalDownload'
import {
  QueryVisualizationContextConsumer,
  QueryVisualizationWrapper,
} from '../QueryVisualizationWrapper'
import { QueryWrapper, QueryContextConsumer } from '../QueryWrapper'
import { QueryWrapperErrorBanner } from '../QueryWrapperErrorBanner'
import SearchV2, { SearchV2Props } from '../SearchV2'
import SqlEditor from '../SqlEditor'
import { SynapseTableProps } from '../table/SynapseTable'
import TopLevelControls, {
  TopLevelControlsProps,
} from '../table/TopLevelControls'
import FacetNav, { FacetNavProps } from '../widgets/facet-nav/FacetNav'
import { QueryFilter } from '../widgets/query-filter/QueryFilter'
import FilterAndView from './FilterAndView'
import QueryFilterToggleButton from './QueryFilterToggleButton'

const QUERY_FILTERS_EXPANDED_CSS = 'isShowingFacetFilters'
const QUERY_FILTERS_COLLAPSED_CSS = 'isHidingFacetFilters'

type OwnProps = {
  sql: string
  limit?: number
  shouldDeepLink?: boolean
  /** If onQueryChange is set, the callback will be invoked when the Query changes */
  onQueryChange?: (newQueryJson: string) => void
  /** If onQueryResultBundleChange is set, the callback will be invoked when the QueryResultBundle changes */
  onQueryResultBundleChange?: (newQueryResultBundleJson: string) => void
  /** If initQueryJson is set, it will be the Query used in the initial QueryBundleRequest */
  initQueryJson?: string
  tableConfiguration?: Omit<
    SynapseTableProps,
    'synapseContext' | 'queryContext' | 'queryVisualizationContext'
  >
  cardConfiguration?: CardConfiguration
  searchConfiguration?: Omit<
    SearchV2Props,
    'queryContext' | 'queryVisualizationContext'
  >
  rgbIndex?: number
  facetsToPlot?: string[]
  facetsToFilter?: string[]
  visibleColumnCount?: number
  facetAliases?: Record<string, string>
  hideDownload?: boolean
  hideQueryCount?: boolean
  hideSqlEditorControl?: boolean
  defaultColumn?: string
  defaultShowFacetVisualization?: boolean
  defaultShowSearchBox?: boolean
  downloadCartPageUrl?: string
  showLastUpdatedOn?: boolean
} & Omit<TopLevelControlsProps, 'entityId'>

type SearchParams = {
  searchParams?: {
    facetValue: string
  }
}
type Operator = {
  sqlOperator?: SQLOperator
}

export type QueryWrapperPlotNavProps = SearchParams &
  FacetNavProps &
  Operator &
  OwnProps

const QueryWrapperPlotNav: React.FunctionComponent<QueryWrapperPlotNavProps> = (
  props: QueryWrapperPlotNavProps,
) => {
  const [showExportMetadata, setShowExportMetadata] = React.useState(false)
  const {
    searchParams,
    sql,
    sqlOperator,
    tableConfiguration,
    name,
    cardConfiguration,
    facetsToPlot,
    facetsToFilter,
    hideDownload,
    hideQueryCount,
    hideSqlEditorControl,
    searchConfiguration,
    limit = DEFAULT_PAGE_SIZE,
    downloadCartPageUrl,
    initQueryJson,
    showLastUpdatedOn,
  } = props
  const sqlUsed = insertConditionsFromSearchParams(
    sql,
    searchParams,
    sqlOperator,
  )

  // use initQuery if set, otherwise use sql
  const query: Query = initQueryJson
    ? (JSON.parse(initQueryJson) as Query)
    : {
        sql: sqlUsed,
        limit: limit,
        offset: 0,
      }
  const entityId = parseEntityIdFromSqlStatement(query.sql)
  const { data: entity } = useGetEntity(entityId)
  const isFullTextSearchEnabled =
    entity && isTableEntity(entity) && entity.isSearchEnabled
  const initQueryRequest: QueryBundleRequest = {
    entityId,
    concreteType: 'org.sagebionetworks.repo.model.table.QueryBundleRequest',
    partMask:
      SynapseConstants.BUNDLE_MASK_QUERY_RESULTS |
      SynapseConstants.BUNDLE_MASK_QUERY_COUNT |
      SynapseConstants.BUNDLE_MASK_QUERY_SELECT_COLUMNS |
      SynapseConstants.BUNDLE_MASK_QUERY_MAX_ROWS_PER_PAGE |
      SynapseConstants.BUNDLE_MASK_QUERY_COLUMN_MODELS |
      SynapseConstants.BUNDLE_MASK_QUERY_FACETS |
      SynapseConstants.BUNDLE_MASK_SUM_FILES_SIZE_BYTES |
      SynapseConstants.BUNDLE_MASK_LAST_UPDATED_ON,
    query,
  }
  return (
    <div className="QueryWrapperPlotNav">
      <QueryWrapper {...props} initQueryRequest={initQueryRequest}>
        <QueryVisualizationWrapper
          unitDescription={'Results'}
          rgbIndex={props.rgbIndex}
          facetAliases={props.facetAliases}
          visibleColumnCount={props.visibleColumnCount}
          defaultShowFacetVisualization={props.defaultShowFacetVisualization}
          defaultShowSearchBar={
            props.defaultShowSearchBox || isFullTextSearchEnabled
          }
          showLastUpdatedOn={showLastUpdatedOn}
        >
          <QueryContextConsumer>
            {queryContext => {
              if (queryContext === undefined) {
                throw new Error(
                  'No queryContext found when using QueryContextConsumer',
                )
              }

              const isFaceted = queryContext?.isFacetsAvailable

              return (
                <QueryVisualizationContextConsumer>
                  {queryVisualizationContext => {
                    if (queryVisualizationContext === undefined) {
                      throw new Error(
                        'No queryVisualizationContext found when using QueryVisualizationContextConsumer',
                      )
                    }

                    const showFacetFilter =
                      queryVisualizationContext?.topLevelControlsState
                        .showFacetFilter ||
                      queryVisualizationContext?.topLevelControlsState
                        .showFacetFilter === undefined

                    return (
                      <>
                        <div
                          className={`ErrorBannerWrapper ${
                            showFacetFilter
                              ? QUERY_FILTERS_EXPANDED_CSS
                              : QUERY_FILTERS_COLLAPSED_CSS
                          }`}
                        >
                          <QueryWrapperErrorBanner />
                        </div>
                        {isFullTextSearchEnabled ? (
                          <FullTextSearch
                            helpUrl={searchConfiguration?.fullTextSearchHelpURL}
                          />
                        ) : (
                          <SearchV2
                            {...searchConfiguration}
                            queryContext={queryContext}
                            queryVisualizationContext={
                              queryVisualizationContext
                            }
                          />
                        )}
                        <SqlEditor />
                        <DownloadConfirmation
                          getLastQueryRequest={queryContext.getLastQueryRequest}
                          topLevelControlsState={
                            queryVisualizationContext.topLevelControlsState
                          }
                          setTopLevelControlsState={
                            queryVisualizationContext.setTopLevelControlsState
                          }
                          downloadCartPageUrl={downloadCartPageUrl}
                        />
                        <TopLevelControls
                          showColumnSelection={tableConfiguration !== undefined}
                          name={name}
                          hideDownload={hideDownload}
                          hideQueryCount={hideQueryCount}
                          hideFacetFilterControl={!isFaceted}
                          hideVisualizationsControl={!isFaceted}
                          hideSqlEditorControl={hideSqlEditorControl}
                        />
                        {isFaceted && (
                          <>
                            <QueryFilter facetsToFilter={facetsToFilter} />
                            <QueryFilterToggleButton />
                          </>
                        )}
                        <FacetNav
                          facetsToPlot={facetsToPlot}
                          showNotch={false}
                        />
                        <FilterAndView
                          tableConfiguration={tableConfiguration}
                          hideDownload={hideDownload}
                          cardConfiguration={cardConfiguration}
                        />
                        {showExportMetadata && (
                          <ModalDownload
                            getLastQueryRequest={
                              queryContext.getLastQueryRequest
                            }
                            onClose={() => setShowExportMetadata(false)}
                          />
                        )}
                      </>
                    )
                  }}
                </QueryVisualizationContextConsumer>
              )
            }}
          </QueryContextConsumer>
        </QueryVisualizationWrapper>
      </QueryWrapper>
    </div>
  )
}

export default QueryWrapperPlotNav
