import * as React from 'react'
import { SynapseConstants } from '../../utils/'
import {
  insertConditionsFromSearchParams,
  parseEntityIdFromSqlStatement,
  SQLOperator,
} from '../../utils/functions/sqlFunctions'
import { useGetEntity } from '../../utils/hooks/SynapseAPI/useEntity'
import { DEFAULT_PAGE_SIZE } from '../../utils/SynapseConstants'
import { SynapseContextConsumer } from '../../utils/SynapseContext'
import { isTableEntity, Query, QueryBundleRequest } from '../../utils/synapseTypes'
import { CardConfiguration } from '../CardContainerLogic'
import { DownloadConfirmation } from '../download_list'
import { ErrorBanner } from '../ErrorBanner'
import FullTextSearch from '../FullTextSearch'
import ModalDownload from '../ModalDownload'
import QueryWrapper, { QUERY_FILTERS_EXPANDED_CSS, QUERY_FILTERS_COLLAPSED_CSS } from '../QueryWrapper'
import SearchV2, { SearchV2Props } from '../SearchV2'
import { SynapseTableProps } from '../table/SynapseTable'
import FacetNav, { FacetNavOwnProps } from '../widgets/facet-nav/FacetNav'
import { QueryFilter } from '../widgets/query-filter/QueryFilter'
import FilterAndView from './FilterAndView'
import QueryFilterToggleButton from './QueryFilterToggleButton'
import TopLevelControls, { TopLevelControlsProps } from '../table/TopLevelControls'
import SqlEditor from '../SqlEditor'

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
  tableConfiguration?: SynapseTableProps
  cardConfiguration?: CardConfiguration
  searchConfiguration?: SearchV2Props
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
  downloadCartPageUrl?: string
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
  Partial<FacetNavOwnProps> &
  Operator &
  OwnProps

const QueryWrapperPlotNav: React.FunctionComponent<QueryWrapperPlotNavProps> =
  props => {
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
    } = props
    const sqlUsed = insertConditionsFromSearchParams(
      sql,
      searchParams,
      sqlOperator,
    )

    // use initQuery if set, otherwise use sql
    const query:Query = initQueryJson ? JSON.parse(initQueryJson) as Query : {
      sql: sqlUsed,
      limit: limit,
      offset: 0,
    }
    const entityId = parseEntityIdFromSqlStatement(query.sql)
    const { data: entity } = useGetEntity(entityId)
    const initQueryRequest: QueryBundleRequest = {
      entityId,
      concreteType: 'org.sagebionetworks.repo.model.table.QueryBundleRequest',
      partMask:
        SynapseConstants.BUNDLE_MASK_QUERY_COLUMN_MODELS |
        SynapseConstants.BUNDLE_MASK_QUERY_FACETS |
        SynapseConstants.BUNDLE_MASK_QUERY_SELECT_COLUMNS |
        SynapseConstants.BUNDLE_MASK_QUERY_RESULTS,
      query,
    }
    return (
      <div className="QueryWrapperPlotNav">
        <SynapseContextConsumer>
          {context => (
            <QueryWrapper
              {...props}
              token={context?.accessToken}
              initQueryRequest={initQueryRequest}
            >
              {queryWrapperChildProps => {
                const isFaceted = queryWrapperChildProps.isFacetsAvailable
                const showFacetFilter = queryWrapperChildProps.topLevelControlsState?.showFacetFilter
                return (
                  <>
                    <div
                      className={`ErrorBannerWrapper ${
                        showFacetFilter
                          ? QUERY_FILTERS_EXPANDED_CSS
                          : QUERY_FILTERS_COLLAPSED_CSS
                      }`}
                    >
                      <ErrorBanner {...queryWrapperChildProps} />
                    </div>
                    {entity &&
                    isTableEntity(entity) &&
                    entity.isSearchEnabled ? (
                      <FullTextSearch {...queryWrapperChildProps} />
                    ) : (
                      <SearchV2
                        {...queryWrapperChildProps}
                        {...searchConfiguration}
                      />
                    )}
                    <SqlEditor {...queryWrapperChildProps} />
                    <DownloadConfirmation
                      {...queryWrapperChildProps}
                      downloadCartPageUrl={downloadCartPageUrl}
                    />
                    <TopLevelControls
                      {...queryWrapperChildProps}
                      showColumnSelection={tableConfiguration !== undefined}
                      name={name}
                      entityId={entityId}
                      sql={sqlUsed}
                      hideDownload={hideDownload}
                      hideQueryCount={hideQueryCount}
                      hideFacetFilterControl={!isFaceted}
                      hideVisualizationsControl={!isFaceted}
                      hideSqlEditorControl={hideSqlEditorControl}
                    />
                    {isFaceted && <>
                      <QueryFilter {...queryWrapperChildProps} {...props} />
                      <QueryFilterToggleButton {...queryWrapperChildProps} />
                      </>}
                    <FacetNav
                      {...queryWrapperChildProps}
                      facetsToPlot={facetsToPlot}
                      showNotch={false}
                    />

                    <FilterAndView
                      {...queryWrapperChildProps}
                      facetsToFilter={facetsToFilter}
                      tableConfiguration={tableConfiguration}
                      hideDownload={hideDownload}
                      cardConfiguration={cardConfiguration}
                    />
                    {showExportMetadata && (
                      <ModalDownload
                        {...queryWrapperChildProps}
                        onClose={() => setShowExportMetadata(false)}
                      />
                    )}
                  </>
                )
              }}
            </QueryWrapper>
          )}
        </SynapseContextConsumer>
      </div>
    )
  }

export default QueryWrapperPlotNav
