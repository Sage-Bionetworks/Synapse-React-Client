import { getUserProfileWithProfilePicAttached } from '../functions/getUserData'
import { useEffect, useState } from 'react'
import { UserProfileList } from '../SynapseClient'
import { difference } from '../functions/difference'

export type UseGetProfilesProps = {
  ids: string[]
  token?: string
}

// React hook to get user profiles
export default function useGetProfiles(props: UseGetProfilesProps) {
  const { token, ids } = props
  const [data, setData] = useState<UserProfileList | undefined>(undefined)
  useEffect(() => {
    const getData = async () => {
      // look at current list of data, see if incoming ids has new data,
      // if so grab those ids
      const curList = data?.list.map(el => el.ownerId)
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
