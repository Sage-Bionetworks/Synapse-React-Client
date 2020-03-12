import { useEffect, useState } from 'react'
import { EntityHeader} from '../synapseTypes'
import { getAllEntityHeader } from '../SynapseClient'
import { SynapseConstants } from '..'
import { without, chunk } from 'lodash-es'

export type UseGetProfilesProps = {
  references: string[]
  token?: string
}

// React hook to get user profiles
export default function useGetEntityHeaders(props: UseGetProfilesProps) {
  const { token, references } = props
  const [data, setData] = useState<Array<EntityHeader>>([])
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
  useEffect(() => {
    const getData = async () => {
      // look at current list of data, see if incoming ids has new data,
      // if so grab those ids
      const curList = data.map(el => el.id)
      const incomingList = references
        .filter(el => el!== SynapseConstants.VALUE_NOT_SET)
      const newValues = without(incomingList, ...curList)
      if (newValues.length > 0) {
        try {
          const newReferences = Array.from<string>(newValues).map(el => {
            return { targetId: el }
          })
          const newReferencesChunks = chunk(newReferences, 45)
          for (const newReferences of newReferencesChunks) {
            const newData = await getAllEntityHeader(newReferences, token)
            const notFound = newReferences.filter(
              item => newData.map(item => item.id).indexOf(item.targetId) == -1,
            )
            const notFoundPlaceholders: EntityHeader[] = notFound.map(item => ({
              ...entityHeaderTemplate,
              id: item.targetId,
              name: `Unknown/Unable to Access (${item.targetId})`
            }))
            setData(oldData =>
              oldData.concat(...newData, ...notFoundPlaceholders)
            )

          }
        } catch (error) {
          console.error('Error on data retrieval', error)
        }
      }
    }
    getData()
  }, [token, references, data])
  return data
}
