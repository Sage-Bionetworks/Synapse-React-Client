import { getUserProfileWithProfilePicAttached } from '../../containers/getUserData'
import { useEffect, useState } from 'react'
import { UserProfileList } from '../SynapseClient'

export type UseGetProfilesProps = {
  ids: string[]
  token?: string
}

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set#Implementing_basic_set_operations
const difference = (setA: Set<string>, setB: Set<string>) => {
  const _difference = new Set(setA)
  for (const elem of Array.from(setB)) {
    _difference.delete(elem)
  }
  return _difference
}

export default function useGetProfiles(props: UseGetProfilesProps) {
  const { token, ids } = props
  const [data, setData] = useState<UserProfileList | undefined>(undefined)
  useEffect(() => {
    const getData = async () => {
      // look at current list of data, see if incoming ids is different
      const curList = (data && data.list.map(el => el.ownerId)) || []
      const curListSet = new Set(curList)
      const incomingListSet = new Set(ids)
      const setDifference = difference(incomingListSet, curListSet)
      if (setDifference.size > 0) {
        try {
          const newIds = Array.from<string>(setDifference)
          const data = await getUserProfileWithProfilePicAttached(newIds, token)
          setData(data)
        } catch (error) {
          console.error('Error on data retrieval', error)
        }
      }
    }
    getData()
  }, [token, ids, data])
  return data
}
