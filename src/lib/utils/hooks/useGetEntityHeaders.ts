import { useEffect, useState } from 'react'
import { EntityHeader, ReferenceList, PaginatedResults } from '../synapseTypes'
import { getEntityHeader } from '../SynapseClient'
import { difference } from '../functions/difference'
import { SynapseConstants } from '..'

export type UseGetProfilesProps = {
  references: ReferenceList
  token?: string
}

// React hook to get user profiles
export default function useGetEntityHeaders(props: UseGetProfilesProps) {
  const { token, references } = props
  const [data, setData] = useState<PaginatedResults<EntityHeader> | undefined>(
    undefined,
  )
  useEffect(() => {
    const getData = async () => {
      // look at current list of data, see if incoming ids has new data,
      // if so grab those ids
      const curList = data?.results.map(el => el.id)
      const curListSet = new Set(curList)
      const incomingListSet = new Set(
        references
          .filter(el => el.targetId !== SynapseConstants.VALUE_NOT_SET)
          .map(el => el.targetId),
      )
      const setDifference = difference(incomingListSet, curListSet)
      if (setDifference.size > 0) {
        try {
          const newReferences = Array.from<string>(setDifference).map(el => {
            return { targetId: el }
          })
          const data = await getEntityHeader(newReferences, token)
          setData(data)
        } catch (error) {
          console.error('Error on data retrieval', error)
        }
      }
    }
    getData()
  }, [token, references, data])
  return data
}
