import { useEffect, useState } from 'react'
import { EntityHeader, ReferenceList } from '../synapseTypes'
import { getAllEntityHeader } from '../SynapseClient'
import { SynapseConstants } from '..'
import { without } from 'lodash-es'

export type UseGetProfilesProps = {
  references: ReferenceList
  token?: string
}

// React hook to get user profiles
export default function useGetEntityHeaders(props: UseGetProfilesProps) {
  const { token, references } = props
  const [data, setData] = useState<Array<EntityHeader>>([])
  useEffect(() => {
    const getData = async () => {
      // look at current list of data, see if incoming ids has new data,
      // if so grab those ids
      const curList = data.map(el => el.id)
      const incomingList = references
        .filter(el => el.targetId !== SynapseConstants.VALUE_NOT_SET)
        .map(el => el.targetId)
      const newValues = without(incomingList, ...curList)
      if (newValues.length > 0) {
        try {
          const newReferences = Array.from<string>(newValues).map(el => {
            return { targetId: el }
          })
          const newData = await getAllEntityHeader(newReferences, token)
          setData(oldData => oldData.concat(...newData))
        } catch (error) {
          console.error('Error on data retrieval', error)
        }
      }
    }
    getData()
  }, [token, references, data])
  return data
}
