import * as React from 'react'
import QueryWrapper from '../../QueryWrapper'
import {
  parseEntityIdFromSqlStatement,
} from '../../../utils/functions/sqlFunctions'
import { SynapseConstants } from '../../../utils/'
import { QueryBundleRequest } from '../../../utils/synapseTypes'
import { Error } from '../../Error'
import FacetPlotsCard from './FacetPlotsCard'

export type QueryWrapperFacetPlotsCardProps = {
  sql: string
  token?: string
  rgbIndex?: number
  facetsToPlot?: string[]
  facetAliases?: {}
  selectFacetColumnName: string
  selectFacetColumnValue: string
}

const QueryWrapperFacetPlotsCard: React.FunctionComponent<QueryWrapperFacetPlotsCardProps> = props => {
  const {
    sql,
    facetsToPlot,
    rgbIndex,  
    selectFacetColumnName,
    selectFacetColumnValue,
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
      SynapseConstants.BUNDLE_MASK_QUERY_SELECT_COLUMNS |
      SynapseConstants.BUNDLE_MASK_QUERY_RESULTS, // like to remove, but query wrapper assumes queryResult is in the response, so include for now (with limit 0)
    query: {      
      sql: sqlUsed,
      offset: 0,
      limit: 0,
      selectedFacets: [{
        columnName: selectFacetColumnName,
        facetValues: [selectFacetColumnValue],
        concreteType: 'org.sagebionetworks.repo.model.table.FacetColumnValuesRequest'        
      }],
    },    
  }
  return (
    <div className="QueryWrapperFacetPlotsCard">
      <QueryWrapper {...rest} initQueryRequest={initQueryRequest}>
        <Error />
        <FacetPlotsCard
          facetsToPlot={facetsToPlot}
          rgbIndex={rgbIndex}
        />
      </QueryWrapper>
    </div>
  )
}

export default QueryWrapperFacetPlotsCard
