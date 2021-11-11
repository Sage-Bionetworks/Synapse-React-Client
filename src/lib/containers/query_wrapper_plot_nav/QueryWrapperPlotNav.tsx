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
import { isTableEntity, QueryBundleRequest } from '../../utils/synapseTypes'
import { CardConfiguration } from '../CardContainerLogic'
import { DownloadConfirmation } from '../download_list'
import { ErrorBanner } from '../ErrorBanner'
import FullTextSearch from '../FullTextSearch'
import ModalDownload from '../ModalDownload'
import QueryWrapper from '../QueryWrapper'
import SearchV2, { SearchV2Props } from '../SearchV2'
import { SynapseTableProps } from '../table/SynapseTable'
import FacetNav, { FacetNavOwnProps } from '../widgets/facet-nav/FacetNav'
import { QueryFilter } from '../widgets/query-filter/QueryFilter'
import FilterAndView from './FilterAndView'
import QueryFilterToggleButton from './QueryFilterToggleButton'
import TopLevelControls, { TopLevelControlsProps } from '../table/TopLevelControls'

type OwnProps = {
  sql: string
  limit?: number
  shouldDeepLink?: boolean
  tableConfiguration?: SynapseTableProps
  cardConfiguration?: CardConfiguration
  searchConfiguration?: SearchV2Props
  rgbIndex?: number
  facetsToPlot?: string[]
  facetsToFilter?: string[]
  visibleColumnCount?: number
  facetAliases?: Record<string, string>
  hideDownload?: boolean
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
      searchConfiguration,
      limit = DEFAULT_PAGE_SIZE,
      downloadCartPageUrl,
    } = props
    const sqlUsed = insertConditionsFromSearchParams(
      sql,
      searchParams,
      sqlOperator,
    )

    const entityId = parseEntityIdFromSqlStatement(sqlUsed)
    const { data: entity } = useGetEntity(entityId)
    const initQueryRequest: QueryBundleRequest = {
      entityId,
      concreteType: 'org.sagebionetworks.repo.model.table.QueryBundleRequest',
      partMask:
        SynapseConstants.BUNDLE_MASK_QUERY_COLUMN_MODELS |
        SynapseConstants.BUNDLE_MASK_QUERY_FACETS |
        SynapseConstants.BUNDLE_MASK_QUERY_SELECT_COLUMNS |
        SynapseConstants.BUNDLE_MASK_QUERY_RESULTS,
      query: {
        sql: sqlUsed,
        limit: limit,
        offset: 0,
      },
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
                return (
                  <>
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
                    <ErrorBanner {...queryWrapperChildProps} />
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
                    />
                    <QueryFilter {...queryWrapperChildProps} {...props} />
                    <QueryFilterToggleButton {...queryWrapperChildProps} />
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
