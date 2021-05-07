import * as React from 'react'
import QueryWrapper from '../QueryWrapper'
import FacetNav, { FacetNavOwnProps } from '../widgets/facet-nav/FacetNav'
import { SynapseTableProps } from '../table/SynapseTable'
import {
  insertConditionsFromSearchParams,
  SQLOperator,
  parseEntityIdFromSqlStatement,
} from '../../utils/functions/sqlFunctions'
import { SynapseConstants } from '../../utils/'
import { QueryBundleRequest } from '../../utils/synapseTypes'
import { CardConfiguration } from '../CardContainerLogic'
import { ErrorBanner } from '../ErrorBanner'
import FilterAndView from './FilterAndView'
import { TopLevelControlsProps } from './TopLevelControls'
import TopLevelControls from './TopLevelControls'
import SearchV2, { SearchV2Props } from '../SearchV2'
import ModalDownload from '../ModalDownload'
import { DownloadConfirmation } from '../download_list'
import { QueryFilter } from '../widgets/query-filter/QueryFilter'
import QueryFilterToggleButton from './QueryFilterToggleButton'
import { DEFAULT_PAGE_SIZE } from '../../utils/SynapseConstants'

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
  facetAliases?: {}
  hideDownload?: boolean
  defaultColumn?: string
  defaultShowFacetVisualization?: boolean
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

const QueryWrapperPlotNav: React.FunctionComponent<QueryWrapperPlotNavProps> = props => {
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
    ...rest
  } = props
  let sqlUsed = sql
  if (searchParams) {
    sqlUsed = insertConditionsFromSearchParams(
      searchParams,
      sqlUsed,
      sqlOperator,
    )
  }

  const entityId = parseEntityIdFromSqlStatement(sqlUsed)
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
      <QueryWrapper {...rest} initQueryRequest={initQueryRequest}>
        <SearchV2 {...searchConfiguration} />
        <ErrorBanner />
        <DownloadConfirmation
          onExportTable={() => setShowExportMetadata(true)}
        />
        <TopLevelControls
          showColumnSelection={tableConfiguration !== undefined}
          name={name}
          entityId={entityId}
          sql={sqlUsed}
          hideDownload={hideDownload}
        />
        <QueryFilter {...rest} />
        <QueryFilterToggleButton />
        <FacetNav facetsToPlot={facetsToPlot} showNotch={false} />
        <FilterAndView
          facetsToFilter={facetsToFilter}
          tableConfiguration={tableConfiguration}
          hideDownload={hideDownload}
          cardConfiguration={cardConfiguration}
        />
        {showExportMetadata && (
          <ModalDownload onClose={() => setShowExportMetadata(false)} />
        )}
      </QueryWrapper>
    </div>
  )
}

export default QueryWrapperPlotNav
