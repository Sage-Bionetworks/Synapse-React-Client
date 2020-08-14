import React, { useEffect, useState } from 'react'
import { QueryBundleRequest, QueryResultBundle } from '../utils/synapseTypes'
import { SynapseClientError } from '../utils/SynapseClient'
import { SynapseClient, SynapseConstants } from '../utils'
import { Error } from './Error'
import MarkdownSynapse from './MarkdownSynapse'
import { getFieldIndex } from './Goals'

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
  const [error, setError] = useState<string | SynapseClientError | undefined>()
  const [queryResult, setQueryResult] = useState<
    QueryResultBundle | undefined
  >()

  useEffect(() => {
    const getData = async () => {
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

      try {
        const data = await SynapseClient.getQueryTableResults(request, token)
        setQueryResult(data)
        setError(undefined)
      } catch (e) {
        console.error('Error on get data', e)
        setError(e)
      }
    }
    getData()
  }, [entityId, token])

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
      {error && <Error error={error} token={token} />}
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
