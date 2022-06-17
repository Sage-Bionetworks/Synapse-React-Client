import { chunk, uniq, without } from 'lodash-es'
import { useState } from 'react'
import useDeepCompareEffect from 'use-deep-compare-effect'
import { SynapseConstants } from '..'
import { getEntityHeaders, getGroupHeadersBatch } from '../SynapseClient'
import { useSynapseContext } from '../SynapseContext'
import {
  EntityHeader,
  Reference,
  ReferenceList,
  UserGroupHeader,
} from '../synapseTypes'

export type HookType = 'ENTITY_HEADER' | 'USER_PROFILE'
export type UseGetInfoFromIdsProps = {
  ids: string[]
  type: HookType
}

type LookupRequestType = string | Reference

const UserGroupHeaderTemplate: UserGroupHeader = {
  ownerId: '', // A foreign key to the ID of the 'principal' object for the user
  firstName: 'Unknown', // This person's given name (forename)
  lastName: 'Unknown', // This person's family name (surname)
  userName: 'Unknown', // A name chosen by the user that uniquely identifies them
  isIndividual: false,
}

const entityHeaderTemplate: EntityHeader = {
  name: 'Unknown', //	The name of the entity
  id: 'unknown', //	The id of the entity
  type: 'org.sagebionetworks.repo.model.FileEntity', //	The type of the entity
  versionNumber: 0, //	The version number of the entity
  versionLabel: 'placeholder', //	The user defined version label of the entity
  benefactorId: 0, //	The ID of the entity that this Entity's ACL is inherited from.
  createdOn: 'null', //	The date this entity was created.
  modifiedOn: 'null', //	The date this entity was last modified.
  createdBy: 'null', //	The ID of the user that created this entity.
  modifiedBy: 'null', //	The ID of the user that last modified this entity.
}

const getEntityHeaderItems = async (
  lookupList: ReferenceList,
  token: string | undefined,
): Promise<EntityHeader[]> => {
  const newData = await getEntityHeaders(lookupList, token)
  const notFound = lookupList.filter(
    item => newData.results.map(item => item.id).indexOf(item.targetId) === -1,
  )
  const notFoundPlaceholders = notFound.map(item => ({
    ...entityHeaderTemplate,
    id: item.targetId,
    name: `${item.targetId}`,
  }))

  return [...newData.results, ...notFoundPlaceholders]
}

const getUserGroupHeaderItems = async (
  lookupList: string[],
): Promise<UserGroupHeader[]> => {
  const newData = (await getGroupHeadersBatch(lookupList)).children
  const notFound = lookupList.filter(
    item => newData.map(item => item.ownerId).indexOf(item) === -1,
  )
  const notFoundPlaceholders = notFound.map(item => ({
    ...UserGroupHeaderTemplate,
    ownerId: item,
    name: `Unknown User (${item})`,
  }))

  return [...newData, ...notFoundPlaceholders]
}

/**
 * React hook to get user profiles or entities. Utilizes a custom cache in sessionStorage.
 *
 * For fetching just one entity or usergroup, see useGetEntity/useGetUserGroupHeader hooks powered by react-query
 * @returns
 */
export default function useGetInfoFromIds<
  T extends EntityHeader | UserGroupHeader,
>(props: UseGetInfoFromIdsProps): T[] {
  const { ids, type } = props
  const { accessToken } = useSynapseContext()

  const [data, setData] = useState<Array<T>>([])

  const idProp = (type: HookType) =>
    type === 'USER_PROFILE' ? 'ownerId' : 'id'

  const storageKey = (type: HookType) =>
    type === 'USER_PROFILE'
      ? SynapseConstants.USER_PROFILE_STORAGE_KEY
      : SynapseConstants.ENTITY_HEADER_STORAGE_KEY

  // look at current list of data, see if incoming ids has new data,
  // if so grab those ids
  const curList = data.map(el => el[idProp(type)])
  const incomingList = ids.filter(el => el !== SynapseConstants.VALUE_NOT_SET)
  const newValues = uniq(without(incomingList, ...curList))

  const saveToSessionStorage = (data: T[], type: HookType) => {
    if (!data.length) {
      return
    }
    //get what's there
    const dataInStorage = sessionStorage.getItem(storageKey(type))
    try {
      const dataInStorageAsObjectArr: T[] = dataInStorage
        ? JSON.parse(dataInStorage)
        : []
      //get an array of ids for items already in storage
      const ids = dataInStorageAsObjectArr.map(item => item[idProp(type)])
      //push all the new data if ids are new
      for (const dataObject of data) {
        if (!ids.includes(dataObject[idProp(type)])) {
          dataInStorageAsObjectArr.push(dataObject)
        }
      }
      sessionStorage.setItem(
        storageKey(type),
        JSON.stringify(dataInStorageAsObjectArr),
      )
    } catch (e) {
      sessionStorage.setItem(storageKey(type), JSON.stringify(data))
    }
  }

  // Alina TODO: check if the items are already in Local Storage before making server call.

  // Michael TODO: There's a bug where the data held in useGetInfoFromIds will be stale if the user token changes,
  // this can be solved by using the useCompare hook on the token to track when it changes
  useDeepCompareEffect(() => {
    let isCancelled = false
    const getData = async () => {
      if (newValues.length > 0) {
        try {
          const newIds = Array.from<string>(newValues)
          const newReferences: LookupRequestType[] =
            type === 'USER_PROFILE'
              ? newIds
              : newIds.map(el => ({ targetId: el }))
          const newReferencesChunks = chunk(newReferences, 45)
          const totalData: T[] = []
          for (const newReferences of newReferencesChunks) {
            const newData =
              type === 'USER_PROFILE'
                ? await getUserGroupHeaderItems(newReferences as string[])
                : await getEntityHeaderItems(
                    newReferences as ReferenceList,
                    accessToken,
                  )
            totalData.push(...(newData as T[]))
          }
          if (!isCancelled) {
            setData(oldData => oldData.concat(...(totalData as T[])))
          }
        } catch (error) {
          console.error('Error on data retrieval', error)
        }
      }
      saveToSessionStorage(data, type)
    }
    getData()
    return () => {
      isCancelled = true
    }
  }, [accessToken, type, newValues])
  return data
}
