import React, { useState } from 'react'
import {
  insertConditionsFromSearchParams,
  KeyValue,
  parseEntityIdFromSqlStatement,
  SQLOperator,
} from '../utils/functions/sqlFunctions'
import { SynapseClient, SynapseConstants } from '../utils'
import {
  ColumnType,
  QueryBundleRequest,
  RowSet,
} from '../utils/synapseTypes/Table'
import { useSynapseContext } from '../utils/SynapseContext'
import MarkdownSynapse from './MarkdownSynapse'
import { SkeletonTable } from '../assets/skeletons/SkeletonTable'
import { ColumnSpecifiedLink } from './CardContainerLogic'
import Typography from '../utils/typography/Typography'
import { useDeepCompareEffectNoCheck } from 'use-deep-compare-effect'

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

const LIST_COLUMN_TYPES = [
  ColumnType.BOOLEAN_LIST,
  ColumnType.DATE_LIST,
  ColumnType.ENTITYID_LIST,
  ColumnType.INTEGER_LIST,
  ColumnType.STRING_LIST,
]

const SubsectionRowRenderer: React.FunctionComponent<
  SubsectionRowRendererProps
> = ({
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
  useDeepCompareEffectNoCheck(() => {
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

      const queryResultBundle = await SynapseClient.getQueryTableResults(
        request,
        accessToken,
      )
      setIsLoading(false)
      const queryResults = queryResultBundle?.queryResult?.queryResults
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
      {!isLoading &&
        rowSet &&
        rowSet.rows.length > 0 &&
        rowSet.headers.map((selectColumn, colIndex) => {
          // If a link column was provided (that contain URLs), do not create a page sub-section for that column.
          if (columnLink && selectColumn.name == columnLink.linkColumnName) {
            return <></>
          }
          return (
            <div
              key={`${colIndex}`}
              className="SubsectionRowRenderer__item"
              role="table"
            >
              <Typography
                variant={
                  columnNameIsSectionTitle ? 'sectionTitle' : 'subsectionHeader'
                }
                role="heading"
              >
                {selectColumn.name}
              </Typography>
              {columnNameIsSectionTitle && <hr />}
              <div role="rowgroup">
                {rowSet.rows.map((row, rowIndex) => {
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
                        <div
                          key={index}
                          className="SubsectionRowRenderer__item__value"
                          role="row"
                        >
                          {isMarkdown && (
                            <MarkdownSynapse markdown={getFriendlyValue(val)} />
                          )}
                          {!isMarkdown && <p>{getFriendlyValue(val)}</p>}
                        </div>
                      )
                    })
                  } else {
                    // If this cell value represents a single value
                    let renderedValue
                    const friendlyCellValue = getFriendlyValue(cellValue)
                    if (isMarkdown) {
                      renderedValue = (
                        <MarkdownSynapse markdown={friendlyCellValue} />
                      )
                    } else if (
                      columnLink &&
                      columnLink.matchColumnName == selectColumn.name
                    ) {
                      // If a link column was provided, then we need to create links (the url is in this other column)
                      const urlColumnIndex = rowSet.headers.findIndex(
                        col => col.name == columnLink.linkColumnName,
                      )
                      const values = row.values as string[]
                      if (values.some(value => value === null)) {
                        console.warn(
                          'Row has null value(s) when no nulls expected',
                        )
                      }

                      if (urlColumnIndex > -1) {
                        renderedValue = (
                          <a
                            rel="noopener noreferrer"
                            target="_blank"
                            href={values[urlColumnIndex]}
                          >
                            {friendlyCellValue}
                          </a>
                        )
                      } else {
                        renderedValue = <p>{friendlyCellValue}</p>
                      }
                    } else {
                      renderedValue = <p>{friendlyCellValue}</p>
                    }
                    values = (
                      <div
                        key={rowIndex}
                        className="SubsectionRowRenderer__item__value"
                        role="row"
                      >
                        {renderedValue}
                      </div>
                    )
                  }
                  return values
                })}
              </div>
            </div>
          )
        })}
    </div>
  )
}

export default SubsectionRowRenderer
