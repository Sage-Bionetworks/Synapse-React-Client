import * as React from 'react'
import QueryWrapper from '../QueryWrapper'
import FacetNav, { FacetNavOwnProps } from '../widgets/facet-nav/FacetNav'
import { SynapseTableProps } from '../table/SynapseTable'
import {
  insertConditionsFromSearchParams,
  SQLOperator,
} from '../../utils/functions/sqlFunctions'
import { SynapseConstants } from '../../utils/'
import { QueryBundleRequest } from '../../utils/synapseTypes'
import { CardConfiguration } from '../CardContainerLogic'
import FilterAndView from './FilterAndView'
import { TopLevelControlsProps } from './TopLevelControls'
import TopLevelControls from './TopLevelControls'
import SearchV2 from '../SearchV2'

type OwnProps = {
  sql: string
  entityId: string
  shouldDeepLink?: boolean
  tableConfiguration?: SynapseTableProps
  cardConfiguration?: CardConfiguration
  token?: string
  rgbIndex?: number
  facetsToPlot?: string[]
} & TopLevelControlsProps

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
  const {
    searchParams,
    sql,
    sqlOperator,
    tableConfiguration,
    loadingScreen,
    entityId,
    name,
    token,
    cardConfiguration,
    facetsToPlot,
    ...rest
  } = props
  let sqlUsed = sql
  if (searchParams) {
    if (searchParams) {
      sqlUsed = insertConditionsFromSearchParams(
        searchParams,
        sqlUsed,
        sqlOperator,
      )
    }
  }
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
      limit: 25,
      offset: 0,
    },
  }
  return (
    <div className="QueryWrapperPlotNav">
      <QueryWrapper {...rest} initQueryRequest={initQueryRequest}>
        <TopLevelControls
          name={name}
          token={token}
          entityId={entityId}
          sql={sqlUsed}
        />
        <SearchV2 />
        <FacetNav facetsToPlot={facetsToPlot} loadingScreen={loadingScreen} />
        <FilterAndView
          tableConfiguration={tableConfiguration}
          cardConfiguration={cardConfiguration}
        />
      </QueryWrapper>
    </div>
  )
}

export default QueryWrapperPlotNav
