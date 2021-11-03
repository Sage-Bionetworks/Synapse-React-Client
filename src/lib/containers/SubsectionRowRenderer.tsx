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
  columnNameIsSectionTitle?: boolean
  limit?: number
}

const LIST_COLUMN_TYPES = [EntityColumnType.BOOLEAN_LIST, EntityColumnType.DATE_LIST, EntityColumnType.ENTITYID_LIST, EntityColumnType.INTEGER_LIST, EntityColumnType.STRING_LIST]

const SubsectionRowRenderer: React.FunctionComponent<SubsectionRowRendererProps> = ({
  sql,
  searchParams,
  sqlOperator,
  isMarkdown = false,
  columnLink,
  friendlyValuesMap,
  columnNameIsSectionTitle = false,
  limit,
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
          limit,
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

  /**
   * If a "friendly values map" was provided, then use the friendly value if any of the raw values match.
   * Otherwise, just return the raw value.
   * @param rawValue
   * @returns 
   */
  const getFriendlyValue = (rawValue: string) => {
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
          // If a link column was provided (that contain URLs), do not create a page sub-section for that column.
          if (columnLink && selectColumn.name == columnLink.linkColumnName) {
            return <></>
          }
          return <div key={`${colIndex}`} className="SubsectionRowRenderer__item" role="table">
            {/* Is this a page subsection (default), or a page section? */}
            {!columnNameIsSectionTitle && <h4 className="SubsectionRowRenderer__item__subsection-title" role='heading'>{selectColumn.name}</h4>}
            {columnNameIsSectionTitle && <><h2 className="SubsectionRowRenderer__item__section-title" role='heading'>{selectColumn.name}</h2><hr /></>}
            <div role="rowgroup">
              {
                rowSet.rows.map((row, rowIndex) => {
                  const cellValue = row.values[colIndex]
                  // If the cell value is undefined, then go to the next row.
                  if (!cellValue) {
                    return <></>
                  }
                  let values
                  // If this cell value represents a multi-value (the select column type is a *_LIST column), then parse it and break it apart
                  if (LIST_COLUMN_TYPES.includes(selectColumn.columnType)) {
                    const jsonData: string[] = JSON.parse(cellValue)
                    values = jsonData.map((val: string, index: number) => {
                      return (
                        <div key={index} className="SubsectionRowRenderer__item__value" role="row">
                          {isMarkdown && <MarkdownSynapse markdown={getFriendlyValue(val)} />}
                          {!isMarkdown && <p>{getFriendlyValue(val)}</p>}
                        </div>
                      )
                    }
                    )
                  } else {
                    // If this cell value represents a single value
                    let renderedValue
                    const friendlyCellValue = getFriendlyValue(cellValue)
                    if (isMarkdown) {
                      renderedValue = <MarkdownSynapse markdown={friendlyCellValue} />
                    } else if (columnLink && columnLink.matchColumnName == selectColumn.name) {
                      // If a link column was provided, then we need to create links (the url is in this other column)
                      const urlColumnIndex = rowSet.headers.findIndex(col => col.name == columnLink.linkColumnName)
                      if (urlColumnIndex > -1) {
                        renderedValue = <a rel="noopener noreferrer" target="_blank" href={row.values[urlColumnIndex]}>{friendlyCellValue}</a>
                      } else {
                        renderedValue = <p>{friendlyCellValue}</p>
                      }
                    } else {
                      renderedValue = <p>{friendlyCellValue}</p>
                    }
                    values = <div key={rowIndex} className="SubsectionRowRenderer__item__value" role="row">
                      {renderedValue}
                    </div>
                  }
                  return values
                })
              }
            </div>
          </div>
        })
      )}
    </div>
  )
}

export default SubsectionRowRenderer
