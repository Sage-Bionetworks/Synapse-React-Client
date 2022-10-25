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
 * Shows the count of the query results if all selected facets and query filters are removed, except on locked columns.
 */
function QueryCount(props: QueryCountProps) {
  const { query, parens } = props
  const entityId = parseEntityIdFromSqlStatement(query.sql)

  // Create a new request to get the total results. Modify the selectedFacets and additionalFilters to remove all unlocked columns.
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
