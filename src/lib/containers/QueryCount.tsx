import React from 'react'
import { SynapseConstants } from '../utils/'
import { parseEntityIdFromSqlStatement } from '../utils/functions/sqlFunctions'
import useGetQueryResultBundle from '../utils/hooks/SynapseAPI/entity/useGetQueryResultBundle'
import {
  FacetColumnValuesRequest,
  QueryBundleRequest,
} from '../utils/synapseTypes/'

export type QueryCountProps = {
  sql: string
  selectedFacets?: FacetColumnValuesRequest[]
  parens?: boolean
}

const QueryCount: React.FunctionComponent<QueryCountProps> = ({
  sql,
  selectedFacets,
  parens,
}) => {
  const entityId = parseEntityIdFromSqlStatement(sql)

  const request: QueryBundleRequest = {
    concreteType: 'org.sagebionetworks.repo.model.table.QueryBundleRequest',
    query: {
      sql,
      selectedFacets,
    },
    entityId,
    partMask: SynapseConstants.BUNDLE_MASK_QUERY_COUNT,
  }

  const { data: queryResult } = useGetQueryResultBundle(request)

  const localCount = queryResult?.queryCount?.toLocaleString()
  /* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toLocaleString#Using_toLocaleString */
  return (
    <React.Fragment>
      {localCount && (parens ? `(${localCount})` : localCount)}
    </React.Fragment>
  )
}
export default QueryCount
