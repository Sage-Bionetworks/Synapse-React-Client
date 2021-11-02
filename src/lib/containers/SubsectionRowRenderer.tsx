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

export type FriendlyValuesMap = {
  [index: string]: string
}

export type SubsectionRowRendererProps = {
  sql: string
  isMarkdown?: boolean
  sqlOperator?: SQLOperator
  searchParams?: KeyValue
  columnLink?: ColumnSpecifiedLink
  friendlyValuesMap?: FriendlyValuesMap
}

const LIST_COLUMN_TYPES = [EntityColumnType.BOOLEAN_LIST, EntityColumnType.DATE_LIST, EntityColumnType.ENTITYID_LIST, EntityColumnType.INTEGER_LIST, EntityColumnType.STRING_LIST]

const SubsectionRowRenderer: React.FunctionComponent<SubsectionRowRendererProps> = ({
  sql,
  searchParams,
  sqlOperator,
  isMarkdown = false,
  columnLink,
  friendlyValuesMap
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

  const getFriendlyValue = (rawValue:string) => {
    if (!friendlyValuesMap) {
      return rawValue
    }
    const friendlyValue = friendlyValuesMap[rawValue]
    return friendlyValue ? friendlyValue : rawValue
  }

  return (
    <div className="SubsectionRowRenderer bootstrap-4-backport">
      {isLoading && <SkeletonTable numRows={2} numCols={1} />}
      {!isLoading && rowSet && rowSet.rows.length > 0 && (
        rowSet.headers.map((selectColumn, colIndex) => {
          if (columnLink && selectColumn.name == columnLink.linkColumnName) {
            return <></>
          }
          return <div key={`${colIndex}`} className="SubsectionRowRenderer__item">
            <h4 className="SubsectionRowRenderer__item__label">{selectColumn.name}</h4>
            {
              rowSet.rows.map((row, rowIndex) => {
                const cellValue = row.values[colIndex]
                if (!cellValue) {
                  return <></>
                }
                let values
                if (LIST_COLUMN_TYPES.includes(selectColumn.columnType)) {
                  const jsonData: string[] = JSON.parse(cellValue)
                  values = jsonData.map((val: string, index: number) => {
                      return (
                        <div key={index} className="SubsectionRowRenderer__item__value">
                          {isMarkdown && <MarkdownSynapse markdown={getFriendlyValue(val)} />}
                          {!isMarkdown && <p>{getFriendlyValue(val)}</p>}
                        </div>
                      )
                    }
                  )
                } else {
                  let renderedValue
                  const friendlyCellValue = getFriendlyValue(cellValue)
                  if (isMarkdown) {
                    renderedValue = <MarkdownSynapse markdown={friendlyCellValue} />
                  } else if (columnLink && columnLink.matchColumnName == selectColumn.name) {
                    // we need to link, where the url is in another column
                    const urlColumnIndex = rowSet.headers.findIndex(col => col.name == columnLink.linkColumnName)
                    if (urlColumnIndex > -1) {
                      renderedValue = <a rel="noopener noreferrer" target="_blank" href={row.values[urlColumnIndex]}>{friendlyCellValue}</a>
                    } else {
                      renderedValue = <p>{friendlyCellValue}</p>
                    }
                  } else {
                    renderedValue = <p>{friendlyCellValue}</p>
                  }
                  values = <div key={rowIndex} className="SubsectionRowRenderer__item__value">
                      {renderedValue}
                    </div>
                }
                return values
              })
            }
          </div>
        })
      )}
    </div>
  )
}

export default SubsectionRowRenderer
