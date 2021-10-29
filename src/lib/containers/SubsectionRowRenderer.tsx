import React, { useEffect, useState } from 'react'
import { insertConditionsFromSearchParams, KeyValue, parseEntityIdFromSqlStatement, SQLOperator } from '../utils/functions/sqlFunctions'
import { SynapseClient, SynapseConstants } from '../utils'
import {
  QueryBundleRequest,
  RowSet,
} from '../utils/synapseTypes/Table'
import { useSynapseContext } from '../utils/SynapseContext'
import MarkdownSynapse from './MarkdownSynapse'
import { SkeletonTable } from '../assets/skeletons/SkeletonTable'

export type SubsectionRowRendererProps = {
  sql: string
  isMarkdown?: boolean
  sqlOperator?: SQLOperator
  searchParams?: KeyValue
}

const SubsectionRowRenderer: React.FunctionComponent<SubsectionRowRendererProps> = ({
  sql,
  searchParams,
  sqlOperator,
  isMarkdown = false
}) => {
  const { accessToken } = useSynapseContext()
  const [rowSet, setRowSet] = useState<RowSet>()
  const [isLoading, setIsLoading] = useState<boolean>()
  let mounted = true
  useEffect(() => {
    const fetchData = async function () {
      setIsLoading(true)
      const sqlUsed = insertConditionsFromSearchParams(
        sql,
        searchParams,
        sqlOperator,
      )
      const entityId = parseEntityIdFromSqlStatement(sql)
      const partMask = SynapseConstants.BUNDLE_MASK_QUERY_RESULTS
      const request: QueryBundleRequest = {
        partMask,
        concreteType: 'org.sagebionetworks.repo.model.table.QueryBundleRequest',
        entityId,
        query: {
          sql: sqlUsed,
        },
      }

      const queryResultBundle = await SynapseClient.getFullQueryTableResults(
        request,
        accessToken,
      )
      setIsLoading(false)
      const { queryResult } = queryResultBundle
      const { queryResults } = queryResult
      if (queryResults) {
        if (mounted) {
          setRowSet(queryResults)
        }
      } else {
        console.log('SubsectionRowRenderer: Error getting data')
      }
    }
    fetchData()

    return () => {
      mounted = false
    }
  }, [sql, accessToken, searchParams, sqlOperator])

  return (
    <div className="SubsectionRowRenderer bootstrap-4-backport">
      {isLoading && <SkeletonTable numRows={2} numCols={1} /> }
      {!isLoading && rowSet && rowSet.rows.length > 0 && (
        rowSet.rows.map( (row, rowIndex ) => {
          return rowSet.headers.map( ( selectColumn, colIndex ) => {
            const cellValue = row.values[colIndex]
            return <div key={`${rowIndex}-${colIndex}`} className="SubsectionRowRenderer__item">
                <h4 className="SubsectionRowRenderer__item__label">{selectColumn.name}</h4>
                <div className="SubsectionRowRenderer__item__value">
                  { isMarkdown && <MarkdownSynapse markdown={cellValue} />}
                  { !isMarkdown && <p>{cellValue}</p>}
                </div>
              </div>
          })
        })
      )}
    </div>
  )
}

export default SubsectionRowRenderer
