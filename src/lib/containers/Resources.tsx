import React, { useState } from 'react'
import { QueryBundleRequest } from '../utils/synapseTypes'
import { SynapseConstants } from '../utils'
import { Error } from './Error'
import MarkdownSynapse from './MarkdownSynapse'
import { getFieldIndex } from './Goals'
import useGetQueryResultBundle from 'lib/utils/hooks/useGetQueryResultBundle'

export type ResourcesProps = {
  entityId: string
  token?: string
}

enum ExpectedColumns {
  NAME = 'Name',
  WIKI = 'Wiki',
}

export default function Resources(props: ResourcesProps) {
  const { entityId, token } = props
  const [index, setIndex] = useState(0)

  const request: QueryBundleRequest = {
    concreteType: 'org.sagebionetworks.repo.model.table.QueryBundleRequest',
    entityId,
    partMask:
      SynapseConstants.BUNDLE_MASK_QUERY_SELECT_COLUMNS |
      SynapseConstants.BUNDLE_MASK_QUERY_RESULTS,
    query: {
      sql: `SELECT Name, Wiki FROM ${entityId} ORDER BY ItemOrder`,
    },
  }
  const { queryResultBundle: queryResult, error } = useGetQueryResultBundle({
    token,
    queryBundleRequest: request,
  })

  const nameIndex = getFieldIndex(ExpectedColumns.NAME, queryResult)
  const wikiIndex = getFieldIndex(ExpectedColumns.WIKI, queryResult)
  const data = queryResult?.queryResult.queryResults.rows.map(el => {
    const values = el.values
    const name = values[nameIndex]
    const wikiValue = values[wikiIndex] ?? ''
    return {
      name,
      wikiValue,
    }
  })

  return (
    <div className="Resources">
      <Error error={error} token={token} />
      <div className="control-container">
        <div className="button-container">
          {data?.map((el, curIndex) => {
            return (
              <button
                className={index === curIndex ? 'isSelected' : ''}
                onClick={() => setIndex(curIndex)}
                key={el.name}
              >
                {el.name}
              </button>
            )
          })}
          {/* 
            This button keeps the border line in the button container running from top to bottom,
            it doesn't have any functionality.
          */}
          <button className="gap-fill" />
        </div>
        <div className="content-container">
          {data?.map((el, curIndex) => {
            const { wikiValue } = el
            const split = wikiValue.split('/')
            const ownerId = split[0]
            const wikiId = split[2]
            return (
              <span key={ownerId} className={index === curIndex ? '' : 'hide'}>
                <MarkdownSynapse
                  token={token}
                  ownerId={ownerId}
                  wikiId={wikiId}
                />
              </span>
            )
          })}
        </div>
      </div>
    </div>
  )
}
