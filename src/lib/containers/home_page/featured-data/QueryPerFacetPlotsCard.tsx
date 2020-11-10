import * as React from 'react'
import QueryWrapper from '../../QueryWrapper'
import {
  parseEntityIdFromSqlStatement,
} from '../../../utils/functions/sqlFunctions'
import { SynapseConstants } from '../../../utils'
import { QueryBundleRequest } from '../../../utils/synapseTypes'
import { Error } from '../../Error'
import FacetPlotsCard from './FacetPlotsCard'

export type QueryPerFacetPlotsCardProps = {
  token?: string
  title?:string
  rgbIndex?: number
  facetsToPlot?: string[]
  facetAliases?: {}
  selectFacetColumnName: string
  selectFacetColumnValue: string
  sql?: string
  detailsPagePath: string
}
export function getQueryRequest(sql: string, selectFacetColumnName: string, selectFacetColumnValue: string):QueryBundleRequest {
  const entityId = parseEntityIdFromSqlStatement(sql)
  return {
    entityId,
    concreteType: 'org.sagebionetworks.repo.model.table.QueryBundleRequest',
    partMask:
      SynapseConstants.BUNDLE_MASK_QUERY_COLUMN_MODELS |
      SynapseConstants.BUNDLE_MASK_QUERY_FACETS |
      SynapseConstants.BUNDLE_MASK_QUERY_SELECT_COLUMNS |
      SynapseConstants.BUNDLE_MASK_QUERY_RESULTS,
    query: {      
      sql,
      offset: 0,
      limit: 25,
      selectedFacets: [{
        columnName: selectFacetColumnName,
        facetValues: [selectFacetColumnValue],
        concreteType: 'org.sagebionetworks.repo.model.table.FacetColumnValuesRequest'        
      }],
    }, 
  }
}
const QueryPerFacetPlotsCard: React.FunctionComponent<QueryPerFacetPlotsCardProps> = props => {
  const {
    title,
    sql,
    facetsToPlot,
    rgbIndex,  
    selectFacetColumnName,
    selectFacetColumnValue,
    detailsPagePath,
    token,
    ...rest
  } = props
  const initQueryRequest: QueryBundleRequest = getQueryRequest(sql!, selectFacetColumnName, selectFacetColumnValue)
  return (
    <div className="QueryPerFacetPlotsCard">
      <QueryWrapper {...rest} token={token} initQueryRequest={initQueryRequest}>
        <Error />
        <FacetPlotsCard
          title={title}
          facetsToPlot={facetsToPlot}
          rgbIndex={rgbIndex}
          detailsPagePath={detailsPagePath}
        />
      </QueryWrapper>
    </div>
  )
}

export default QueryPerFacetPlotsCard
