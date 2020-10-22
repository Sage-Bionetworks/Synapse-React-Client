import { SynapseConstants, SynapseClient } from '../utils/'
import React, { useEffect, useState } from 'react'
import {
  QueryBundleRequest, QueryResult,
} from '../utils/synapseTypes/'
import { parseEntityIdFromSqlStatement } from '../utils/functions/sqlFunctions'

export type TableFeedCardsProps = {
  sql: string
  token?: string
}

const TableFeedCards: React.FunctionComponent<TableFeedCardsProps> = ({
  sql,
  token,
}) => {
  const [queryResults, setQueryResults] = useState<QueryResult>()
  
  let mounted = true
  useEffect(() => {
    const executeQuery = () => {
      if (mounted) {
        const entityId = parseEntityIdFromSqlStatement(sql)
        if (queryResults) {
          return
        }
        const request: QueryBundleRequest = {
          concreteType: 'org.sagebionetworks.repo.model.table.QueryBundleRequest',
          query: {
            sql,
          },
          entityId,
          partMask: SynapseConstants.BUNDLE_MASK_QUERY_RESULTS,
        }
        SynapseClient.getQueryTableResults(request, token).then(data => {
          setQueryResults(data.queryResult)
        })
      }
    }
    executeQuery()
    return () => {
      mounted = false
    }
  }, [sql, token])
  
  if (!queryResults) {
    return <></>
  }

  return (
    <>
    </>
  )
}
export default TableFeedCards