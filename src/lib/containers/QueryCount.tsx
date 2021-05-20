import { SynapseConstants, SynapseClient } from '../utils/'
import React, { useContext, useEffect, useState } from 'react'
import {
  QueryBundleRequest,
  FacetColumnValuesRequest,
} from '../utils/synapseTypes/'
import { parseEntityIdFromSqlStatement } from '../utils/functions/sqlFunctions'
import { SynapseContext } from '../utils/SynapseContext'

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
  const { accessToken } = useContext(SynapseContext)
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
          isCalculatingQueryCountForSql[`${sql}-${accessToken}`] ||
          storedSqlQueryCount[`${sql}-${accessToken}`]
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
        newIsCalculatingQueryCountForSql[`${sql}-${accessToken}`] = true
        setIsCalculatingQueryCountForSql(newIsCalculatingQueryCountForSql)
        SynapseClient.getQueryTableResults(request, accessToken).then(data => {
          const newStoredSqlQueryCount = {
            ...storedSqlQueryCount,
          }
          newStoredSqlQueryCount[`${sql}-${accessToken}`] = data!.queryCount
          setStoredSqlQueryCount(newStoredSqlQueryCount)
        })
      }
    }

    calculateRowCount()

    return () => {
      mounted = false
    }
  }, [sql, selectedFacets, accessToken])

  const count = storedSqlQueryCount[`${sql}-${accessToken}`]
  const localCount = count?.toLocaleString()
  /* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toLocaleString#Using_toLocaleString */
  return (
    <React.Fragment>
      {name} {count && (parens ? `(${localCount})` : localCount)}
    </React.Fragment>
  )
}
export default QueryCount
