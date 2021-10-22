import { SynapseConstants } from '../../../utils'
import { getFieldIndex } from '../../../utils/functions/queryUtils'
import useGetQueryResultBundle from '../../../utils/hooks/SynapseAPI/useGetQueryResultBundle'
import { QueryBundleRequest } from '../../../utils/synapseTypes'
import React, { useState, useEffect } from 'react'
import { FeaturedToolCard } from './FeaturedToolCard'
import { ErrorBanner } from '../../ErrorBanner'
import { useSynapseContext } from '../../../utils/SynapseContext'

export type FeaturedToolsListProps = {
  entityId: string
  toolDetailPageURL: string
}

type ToolData = {
  id: string
  name: string,
  description: string
  type: string
}

enum ExpectedColumns {
  ID = 'Resource_id',
  NAME = 'Resource Name',
  TYPE = 'Resource Type',
  DESCRIPTION = 'Description',
}

/**
 * Display a set of FeaturedToolCards (driven by a Table/View). Driven by the following annotations/column names:
 * 'Resource_id', 'Resource Name', 'Resource Type', and 'Description'. 
 */
export const FeaturedToolsList: React.FunctionComponent<FeaturedToolsListProps> = ({
  entityId,
  toolDetailPageURL
}) => {
  const queryBundleRequest: QueryBundleRequest = {
    concreteType: 'org.sagebionetworks.repo.model.table.QueryBundleRequest',
    entityId,
    partMask:
      SynapseConstants.BUNDLE_MASK_QUERY_SELECT_COLUMNS |
      SynapseConstants.BUNDLE_MASK_QUERY_RESULTS,
    query: {
      sql: `select * from ${entityId} order by ROW_ID desc limit 3`,
    },
  }

  const { accessToken } = useSynapseContext()
  const [tools, setTools] = useState<ToolData[]>([])
  const [error, setError] = useState<Error>()
  const {
    data: queryResultBundle,
    error: queryError,
  } = useGetQueryResultBundle(queryBundleRequest)

  useEffect(() => {
    const getData = () => {
      try {
        const idIndex = getFieldIndex(
          ExpectedColumns.ID,
          queryResultBundle,
        )
        const nameColumnIndex = getFieldIndex(
          ExpectedColumns.NAME,
          queryResultBundle,
        )
        const typeColumnIndex = getFieldIndex(
          ExpectedColumns.TYPE,
          queryResultBundle,
        )
        const descriptionColumnIndex = getFieldIndex(
          ExpectedColumns.DESCRIPTION,
          queryResultBundle,
        )

        const tools: ToolData[] =
          queryResultBundle?.queryResult.queryResults.rows.map(row => {
            return {
              name: row.values[nameColumnIndex],
              description: row.values[descriptionColumnIndex],
              type: row.values[typeColumnIndex],
              id: row.values[idIndex],
            }
          }) ?? []
        if (queryError) {
          throw queryError
        }
        if (tools.length === 0) {
          // wait for data to load
          return
        }

        setTools(tools)
      } catch (error) {
        console.error(error)
        setError(error)
      }
    }
    getData()
  }, [entityId, accessToken, queryResultBundle, queryError])

  return error ? (
    <ErrorBanner error={error}></ErrorBanner>
  ) : (
    <div className="FeaturedToolList">
      {tools.map(tool => {
        return (
          <FeaturedToolCard
            key={tool.id}
            name={tool.name}
            type={tool.type}
            description={tool.description}
            id={tool.id}
            toolDetailPageURL={toolDetailPageURL}
          />
        )
      })}
    </div>
  )
}

export default FeaturedToolsList
