import React, { useEffect, useState } from 'react'
import { parseEntityIdFromSqlStatement } from '../utils/functions/sqlFunctions'
import { SynapseClient, SynapseConstants } from '../utils'
import { QueryBundleRequest } from '../utils/synapseTypes/Table'
import { LARGE_USER_CARD } from '../utils/SynapseConstants'
import UserCardList from './UserCardList'

export type UserCardListRotateProps = {
  sql: string
  count: number
  token?: string
}

const STORED_UID_KEY = 'sage_rotate_uids'

const UserCardListRotate: React.FunctionComponent<UserCardListRotateProps> = ({sql, count, token}) => {

  // const [isLoading, setIsLoading] = useState<boolean>()
  const [userIds, setUserIds] = useState<string []>([])
  let mounted = true

  const getDisplayIds = (ids: string[] = []) => {
    let storedIds: string[] = []
    let newIds: string[] = []
    const storedIdsStr = localStorage.getItem(STORED_UID_KEY)
    if (storedIdsStr != null) {
      storedIds = JSON.parse(storedIdsStr)
    }

    if (!storedIds.length) {  // no stuff in storage
      newIds = ids.slice(0, count)
      localStorage.setItem(STORED_UID_KEY, JSON.stringify(newIds))
      return newIds
    } else {  // has stuff in storage
      const filtered = ids.filter(item => !storedIds.includes(item))
      if (filtered.length >= count) {
        newIds = filtered.slice(0, count)
        localStorage.setItem(STORED_UID_KEY, JSON.stringify(storedIds.concat(newIds)))
        return newIds
      } else {
        localStorage.removeItem(STORED_UID_KEY)
        const part = (filtered.length === 0) ? ids.slice(0, count) : ids.slice(0, filtered.length)
        localStorage.setItem(STORED_UID_KEY, JSON.stringify(part))
        return (filtered.length === 0) ? ids.slice(0, count) : filtered.concat(part)  // TODO Bugs here
      }

    }
  }

  useEffect(() => {

    const fetchData = async function() {
      const entityId = parseEntityIdFromSqlStatement(sql)
      const partMask = SynapseConstants.BUNDLE_MASK_QUERY_RESULTS
      const request: QueryBundleRequest = {
        partMask,
        concreteType: 'org.sagebionetworks.repo.model.table.QueryBundleRequest',
        entityId,
        query: {
          sql,
        }
      }

      const {
        queryResult
      } = await SynapseClient.getFullQueryTableResults(
        request,
        token
      )

      if (queryResult.queryResults.rows) {
        const ids: string[] = queryResult.queryResults.rows.map( d => d.values[0] )
        if (mounted) {
          const newIds = getDisplayIds(ids)
          setUserIds(newIds)
        }
      }
    }

    fetchData()

    return () => {
      mounted = false
    }

  }, [sql, count, token])

  return (
    <div className="UserCardListRotate">
      <UserCardList list={userIds} size={LARGE_USER_CARD} />
    </div>
  )

}

export default UserCardListRotate