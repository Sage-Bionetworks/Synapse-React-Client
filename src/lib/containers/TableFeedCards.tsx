import { SynapseConstants, SynapseClient } from '../utils/'
import React, { useEffect, useState } from 'react'
import moment from 'moment'
import {
  QueryBundleRequest,
  RowSet,
  SelectColumn,
} from '../utils/synapseTypes/'
import MarkdownSynapse from './MarkdownSynapse'
import loadingScreen from './LoadingScreen'
import { Button } from 'react-bootstrap'

export type TableFeedCardsProps = {
  tableEntityId: string
  token?: string
}

const TableFeedCards: React.FunctionComponent<TableFeedCardsProps> = ({
  tableEntityId,
  token,
}) => {
  const [rowSet, setRowSet] = useState<RowSet>()
  const [itemCountShowing, setItemCountShowing] = useState<number>(3)

  let mounted = true
  useEffect(() => {
    const executeQuery = () => {
      if (mounted) {
        if (rowSet) {
          return
        }
        const request: QueryBundleRequest = {
          concreteType:
            'org.sagebionetworks.repo.model.table.QueryBundleRequest',
          query: {
            sql: `SELECT "categories", "date", "title", "mdDescription" FROM ${tableEntityId} ORDER BY "date" desc`,
          },
          entityId: tableEntityId,
          partMask: SynapseConstants.BUNDLE_MASK_QUERY_RESULTS,
        }
        SynapseClient.getQueryTableResults(request, token).then(data => {
          setRowSet(data.queryResult.queryResults)
        })
      }
    }
    executeQuery()
    return () => {
      mounted = false
    }
  }, [tableEntityId, token])

  if (!rowSet) {
    return loadingScreen
  }
  const headers: SelectColumn[] = rowSet.headers
  const categoriesColIndex = headers.findIndex(col => col.name === 'categories')
  const dateColIndex = headers.findIndex(col => col.name === 'date')
  const titleColIndex = headers.findIndex(col => col.name === 'title')
  const descriptionColIndex = headers.findIndex(
    col => col.name === 'mdDescription',
  )

  return (
    <div className="Feed bootstrap-4-backport">
      <div className="FeedItems">
        {rowSet.rows.map((row, index) => {
          if (index > itemCountShowing - 1) {
            return
          }
          const categoriesList = JSON.parse(row.values[categoriesColIndex])
          const dateStringTimestamp = row.values[dateColIndex]
          const title = row.values[titleColIndex]
          const description = row.values[descriptionColIndex]

          return (
            <div className="FeedItem" key={`row-${index}`}>
              <div>
                {categoriesList && (
                  <div className="FeedItemCategories">
                    {(categoriesList as string[]).map(
                      (categoryName: string, categoryIndex) => {
                        return (
                          <div
                            key={`row-${index},categoryIndex-${categoryIndex}`}
                            className="FeedItemCategory"
                          >
                            {categoryName}
                          </div>
                        )
                      },
                    )}
                  </div>
                )}
                <p className="FeedItemDate">
                  {moment(new Date(parseInt(dateStringTimestamp))).format(
                    'MMMM YYYY',
                  )}
                </p>
                <p className="FeedItemTitle">{title}</p>
                <div className="FeedItemDescription">
                  <MarkdownSynapse markdown={description} />
                </div>
              </div>
            </div>
          )
        })}
      </div>
      {rowSet.rows.length > itemCountShowing && (
        <div className="FeedViewAllNewsButtonContainer">
          <Button
            variant="primary"
            size="lg"
            className="pill"
            onClick={() => setItemCountShowing(itemCountShowing + 3)}
          >
            VIEW MORE NEWS
          </Button>
        </div>
      )}
    </div>
  )
}
export default TableFeedCards
