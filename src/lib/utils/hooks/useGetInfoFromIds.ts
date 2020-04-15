import { useState } from 'react'
import { EntityHeader, Reference, ReferenceList } from '../synapseTypes'
import { getEntityHeader } from '../SynapseClient'
import { getUserProfileWithProfilePicAttached } from '../functions/getUserData'
import { UserProfile } from '../synapseTypes'
import { SynapseConstants } from '..'
import { without, chunk, uniq } from 'lodash-es'
import useDeepCompareEffect from 'use-deep-compare-effect'
// import useDeepCompareEffect from 'use-deep-compare-effect'

export type HookType = 'ENTITY_HEADER' | 'USER_PROFILE'
export type UseGetInfoFromIdsProps = {
  ids: string[]
  token?: string
  type: HookType
}

type LookupRequestType = string | Reference

const UserProfileTemplate: UserProfile = {
  ownerId: '', // A foreign key to the ID of the 'principal' object for the user
  firstName: 'Unknown', // This person's given name (forename)
  lastName: 'Unknown', // This person's family name (surname)
  userName: 'Unknown', // A name chosen by the user that uniquely identifies them
}

const entityHeaderTemplate: EntityHeader = {
  name: 'Unknown', //	The name of the entity
  id: 'unknown', //	The id of the entity
  type: 'unknown', //	The type of the entity
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
  const newData = await getEntityHeader(lookupList, token)
  const notFound = lookupList.filter(
    (item) =>
      newData.results.map((item) => item.id).indexOf(item.targetId) === -1,
  )
  const notFoundPlaceholders = notFound.map((item) => ({
    ...entityHeaderTemplate,
    id: item.targetId,
    name: `${item.targetId}`,
  }))

  return [...newData.results, ...notFoundPlaceholders]
}

const getUserProfileItems = async (
  lookupList: string[],
  token: string | undefined,
): Promise<UserProfile[]> => {
  const newData = await getUserProfileWithProfilePicAttached(lookupList, token)
  const notFound = lookupList.filter(
    (item) => newData.list.map((item) => item.ownerId).indexOf(item) === -1,
  )
  const notFoundPlaceholders = notFound.map((item) => ({
    ...UserProfileTemplate,
    ownerId: item,
    name: `Unknown User (${item})`,
  }))

  return [...newData.list, ...notFoundPlaceholders]
}

// React hook to get user profiles or entities
//******************************************************************************************* */
export default function useGetInfoFromIds<T extends EntityHeader | UserProfile>(
  props: UseGetInfoFromIdsProps,
) {
  const { token, ids, type } = props
  const [data, setData] = useState<Array<T>>([])

  const idProp = (type: HookType) =>
    type === 'USER_PROFILE' ? 'ownerId' : 'id'

  // look at current list of data, see if incoming ids has new data,
  // if so grab those ids
  const curList = data.map((el) => el[idProp(type)])
  const incomingList = ids.filter((el) => el !== SynapseConstants.VALUE_NOT_SET)
  const newValues = uniq(without(incomingList, ...curList))

  // Michael TODO: There's a bug where the data held in useGetInfoFromIds will be stale if the user token changes,
  // this can be solved by using the useCompare hook on the token to track when it changes
  useDeepCompareEffect(() => {
    const getData = async () => {
      if (newValues.length > 0) {
        try {
          const newIds = Array.from<string>(newValues)
          const newReferences: LookupRequestType[] =
            type === 'USER_PROFILE'
              ? newIds
              : newIds.map((el) => ({ targetId: el }))
          const newReferencesChunks = chunk(newReferences, 45)
          const totalData: T[] = []
          for (const newReferences of newReferencesChunks) {
            const newData =
              type === 'USER_PROFILE'
                ? await getUserProfileItems(newReferences as string[], token)
                : await getEntityHeaderItems(
                    newReferences as ReferenceList,
                    token,
                  )
            totalData.push(...(newData as T[]))
          }
          setData((oldData) => oldData.concat(...(totalData as T[])))
        } catch (error) {
          console.error('Error on data retrieval', error)
        }
      }
    }
    getData()
  }, [token, type, newValues])
  return data
}
