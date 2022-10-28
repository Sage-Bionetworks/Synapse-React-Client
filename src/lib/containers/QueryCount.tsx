import React from 'react'
import { SynapseConstants } from '../utils/'
import { parseEntityIdFromSqlStatement } from '../utils/functions/sqlFunctions'
import useGetQueryResultBundle from '../utils/hooks/SynapseAPI/entity/useGetQueryResultBundle'
import { Query, QueryBundleRequest } from '../utils/synapseTypes/'

export type QueryCountProps = {
  query: Query
  parens?: boolean
}

/**
 * Shows the total count of results for a table query.
 */
function QueryCount(props: QueryCountProps) {
  const { query, parens } = props
  const entityId = parseEntityIdFromSqlStatement(query.sql)

  const request: QueryBundleRequest = {
    concreteType: 'org.sagebionetworks.repo.model.table.QueryBundleRequest',
    query: query,
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
