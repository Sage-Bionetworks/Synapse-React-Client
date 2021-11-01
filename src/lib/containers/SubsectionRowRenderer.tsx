import React, { useEffect, useState } from 'react'
import { insertConditionsFromSearchParams, KeyValue, parseEntityIdFromSqlStatement, SQLOperator } from '../utils/functions/sqlFunctions'
import { SynapseClient, SynapseConstants } from '../utils'
import {
  EntityColumnType,
  QueryBundleRequest,
  RowSet,
} from '../utils/synapseTypes/Table'
import { useSynapseContext } from '../utils/SynapseContext'
import MarkdownSynapse from './MarkdownSynapse'
import { SkeletonTable } from '../assets/skeletons/SkeletonTable'
import { ColumnSpecifiedLink } from './CardContainerLogic'

export type SubsectionRowRendererProps = {
  sql: string
  isMarkdown?: boolean
  sqlOperator?: SQLOperator
  searchParams?: KeyValue
  columnLink?: ColumnSpecifiedLink
}

const LIST_COLUMN_TYPES = [EntityColumnType.BOOLEAN_LIST, EntityColumnType.DATE_LIST, EntityColumnType.ENTITYID_LIST, EntityColumnType.INTEGER_LIST, EntityColumnType.STRING_LIST]

const SubsectionRowRenderer: React.FunctionComponent<SubsectionRowRendererProps> = ({
  sql,
  searchParams,
  sqlOperator,
  isMarkdown = false,
  columnLink
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
      {isLoading && <SkeletonTable numRows={2} numCols={1} />}
      {!isLoading && rowSet && rowSet.rows.length > 0 && (
        rowSet.rows.map((row, rowIndex) => {
          return rowSet.headers.map((selectColumn, colIndex) => {
            const cellValue = row.values[colIndex]
            if (!cellValue || (columnLink && selectColumn.name == columnLink.linkColumnName)) {
              return <></>
            }
            let values
            if (LIST_COLUMN_TYPES.includes(selectColumn.columnType)) {
              const jsonData: string[] = JSON.parse(cellValue)
              values = jsonData.map((val: string, index: number) => {
                  return (
                    <div key={index} className="SubsectionRowRenderer__item__value">
                      {isMarkdown && <MarkdownSynapse markdown={val} />}
                      {!isMarkdown && <p>{val}</p>}
                    </div>
                  )
                }
              )
            } else {
              let renderedValue
              if (isMarkdown) {
                renderedValue = <MarkdownSynapse markdown={cellValue} />
              } else if (columnLink && columnLink.matchColumnName == selectColumn.name) {
                // we need to link, where the url is in another column
                const urlColumnIndex = rowSet.headers.findIndex(col => col.name == columnLink.linkColumnName)
                if (urlColumnIndex > -1) {
                  renderedValue = <a rel="noopener noreferrer" target="_blank" href={row.values[urlColumnIndex]}>{cellValue}</a>
                } else {
                  renderedValue = <p>{cellValue}</p>
                }
              } else {
                renderedValue = <p>{cellValue}</p>
              }
              values = <div className="SubsectionRowRenderer__item__value">
                  {renderedValue}
                </div>
            }
            return <div key={`${rowIndex}-${colIndex}`} className="SubsectionRowRenderer__item">
                <h4 className="SubsectionRowRenderer__item__label">{selectColumn.name}</h4>
                {values}
              </div>
          })
        })
      )}
    </div>
  )
}

export default SubsectionRowRenderer
