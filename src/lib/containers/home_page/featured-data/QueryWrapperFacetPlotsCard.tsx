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
import { Error } from '../Error'
import FilterAndView from './FilterAndView'
import { TopLevelControlsProps } from './TopLevelControls'
import TopLevelControls from './TopLevelControls'
import SearchV2, { SearchV2Props } from '../SearchV2'
import { DownloadConfirmation } from '../download_list'
import FacetPlotsCard from './FacetPlotsCard'

export type QueryWrapperFacetPlotsCardProps = {
  sql: string
  token?: string
  rgbIndex?: number
  facetsToPlot?: string[]
  facetAliases?: {}
}

const QueryWrapperFacetPlotsCard: React.FunctionComponent<QueryWrapperFacetPlotsCardProps> = props => {
  const {
    sql,
    facetsToPlot,    
    ...rest
  } = props
  let sqlUsed = sql
  const entityId = parseEntityIdFromSqlStatement(sqlUsed)
  const initQueryRequest: QueryBundleRequest = {
    entityId,
    concreteType: 'org.sagebionetworks.repo.model.table.QueryBundleRequest',
    partMask:
      SynapseConstants.BUNDLE_MASK_QUERY_COLUMN_MODELS |
      SynapseConstants.BUNDLE_MASK_QUERY_FACETS |
      SynapseConstants.BUNDLE_MASK_QUERY_SELECT_COLUMNS,
    query: {
      sql: sqlUsed,
      limit: 25,
      offset: 0,
    },
  }
  return (
    <div className="QueryWrapperFacetPlotsCard">
      <QueryWrapper {...rest} initQueryRequest={initQueryRequest}>
        <Error />
        <FacetPlotsCard
          facetsToPlot={facetsToPlot}
          showNotch={true}          
        />
      </QueryWrapper>
    </div>
  )
}

export default QueryWrapperFacetPlotsCard
