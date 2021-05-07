import { SynapseConstants, SynapseClient } from '../utils/'
import React, { useEffect, useState } from 'react'
import {
  QueryBundleRequest,
  FacetColumnValuesRequest,
} from '../utils/synapseTypes/'
import { parseEntityIdFromSqlStatement } from '../utils/functions/sqlFunctions'

export type QueryCountProps = {
  sql: string
  selectedFacets?: FacetColumnValuesRequest[]
  parens?: boolean
  name: string
}

const QueryCount: React.FunctionComponent<QueryCountProps> = ({
  sql,
  selectedFacets,
  parens,
  name,
}) => {
  const [storedSqlQueryCount, setStoredSqlQueryCount] = useState<{}>({})
  // maps sql string to true/false, true if already made a request for this sql's query count
  // false or undefined if not
  const [
    isCalculatingQueryCountForSql,
    setIsCalculatingQueryCountForSql,
  ] = useState<{}>({})
  let mounted = true

  useEffect(() => {
    const calculateRowCount = () => {
      if (mounted) {
        const entityId = parseEntityIdFromSqlStatement(sql)
        if (
          isCalculatingQueryCountForSql[`${sql}`] ||
          storedSqlQueryCount[`${sql}`]
        ) {
          // its either in progress or its already been calculated
          return
        }
        const request: QueryBundleRequest = {
          concreteType:
            'org.sagebionetworks.repo.model.table.QueryBundleRequest',
          query: {
            sql,
            selectedFacets,
          },
          entityId,
          partMask: SynapseConstants.BUNDLE_MASK_QUERY_COUNT,
        }
        const newIsCalculatingQueryCountForSql = {
          ...isCalculatingQueryCountForSql,
        }
        newIsCalculatingQueryCountForSql[`${sql}`] = true
        setIsCalculatingQueryCountForSql(newIsCalculatingQueryCountForSql)
        SynapseClient.getQueryTableResults(request).then(data => {
          const newStoredSqlQueryCount = {
            ...storedSqlQueryCount,
          }
          newStoredSqlQueryCount[`${sql}`] = data!.queryCount
          setStoredSqlQueryCount(newStoredSqlQueryCount)
        })
      }
    }

    calculateRowCount()

    return () => {
      mounted = false
    }
  }, [sql, selectedFacets])

  const count = storedSqlQueryCount[`${sql}`]
  const localCount = count?.toLocaleString()
  /* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toLocaleString#Using_toLocaleString */
  return (
    <React.Fragment>
      {name} {count && (parens ? `(${localCount})` : localCount)}
    </React.Fragment>
  )
}
export default QueryCount
