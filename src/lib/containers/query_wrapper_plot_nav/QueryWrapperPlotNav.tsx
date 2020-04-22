import * as React from 'react'
import QueryWrapper from '../QueryWrapper'
import FacetNav, { FacetNavOwnProps } from '../widgets/facet-nav/FacetNav'
import { SynapseTableProps } from '../table/SynapseTable'
import {
  insertConditionsFromSearchParams,
  SQLOperator,
} from '../../utils/functions/sqlFunctions'
import { SynapseConstants } from '../../utils/'
import QueryCount from '../QueryCount'
import { QueryBundleRequest } from '../../utils/synapseTypes'
import { CardConfiguration } from '../CardContainerLogic'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faSearch,
  faFilter,
  faChartBar,
  faDownload,
} from '@fortawesome/free-solid-svg-icons'
import FilterAndView from './FilterAndView'
// import { DownloadConfirmation } from '../download_list'

library.add(faSearch)
library.add(faFilter)
library.add(faChartBar)
library.add(faDownload)

type OwnProps = {
  name: string
  sql: string
  entityId: string
  shouldDeepLink?: boolean
  tableConfiguration?: SynapseTableProps
  cardConfiguration?: CardConfiguration
  token?: string
  rgbIndex?: number
}

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
  // const [showSearch, setShowSearch] = React.useState(true)
  const [showVisualization, setShowVisualization] = React.useState(true)
  const [showFilter, setShowFilter] = React.useState(true)
  // const [showDownload, setShowDownload] = React.useState(false)

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
      <h3 className="QueryWrapperPlotNav__title">
        <div className="QueryWrapperPlotNav__querycount">
          <QueryCount entityId={entityId} token={token} name={name} sql={sql} />
        </div>
        <div className="QueryWrapperPlotNav__actions">
          {/* <button  className="SRC-primary-action-color"onClick={() => setShowSearch(!showSearch)}>
            <FontAwesomeIcon icon="search" size="1x" />
          </button> */}
          <button
            className="SRC-primary-action-color"
            onClick={() => setShowVisualization(!showVisualization)}
          >
            <FontAwesomeIcon icon="chart-bar" size="1x" />
          </button>
          <button
            className="SRC-primary-action-color"
            onClick={() => setShowFilter(!showFilter)}
          >
            <FontAwesomeIcon icon="filter" size="1x" />
          </button>
          {/* <button  className="SRC-primary-action-color"onClick={() => setShowDownload(!showDownload)}>
            <FontAwesomeIcon icon="download" size="1x" />
          </button> */}
        </div>
      </h3>
      <QueryWrapper {...rest} initQueryRequest={initQueryRequest}>
        <FacetNav show={showVisualization} loadingScreen={loadingScreen} />
        <FilterAndView
          showFilter={showFilter}
          tableConfiguration={tableConfiguration}
          cardConfiguration={cardConfiguration}
        />
      </QueryWrapper>
    </div>
  )
}

export default QueryWrapperPlotNav
