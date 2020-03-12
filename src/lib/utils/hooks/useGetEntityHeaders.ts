import { useEffect, useState } from 'react'
import { EntityHeader } from '../synapseTypes'
import { getAllEntityHeader } from '../SynapseClient'
import { SynapseConstants } from '..'
import { without, chunk } from 'lodash-es'

export type useGetEntityHeadersProps = {
  references: string[]
  token?: string
}

// React hook to get user profiles
export default function useGetEntityHeaders(props: useGetEntityHeadersProps) {
  const { token, references } = props
  const [data, setData] = useState<Array<EntityHeader>>([])
  useEffect(() => {
    const getData = async () => {
      // look at current list of data, see if incoming ids has new data,
      // if so grab those ids
      console.log('called')
      const curList = data.map(el => el.id)
      const incomingList = references.filter(
        el => el !== SynapseConstants.VALUE_NOT_SET,
      )
      const newValues = without(incomingList, ...curList)
      if (newValues.length > 0) {
        try {
          const newReferences = Array.from<string>(newValues).map(el => {
            return { targetId: el }
          })
          const newReferencesChunks = chunk(newReferences, 45)
          for (const newReferences of newReferencesChunks) {
            const newData = await getAllEntityHeader(newReferences, token)
            setData(oldData => oldData.concat(...newData))
          }
        } catch (error) {
          console.error('Error on data retrieval', error)
        }
      }
    }
    getData()
  }, [token])
  return data
}
