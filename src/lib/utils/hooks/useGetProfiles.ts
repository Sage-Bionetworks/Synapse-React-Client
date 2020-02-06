import { getUserProfileWithProfilePicAttached } from '../functions/getUserData'
import { useEffect, useState } from 'react'
import { without } from 'lodash-es'
import { SynapseConstants } from '..'
import { UserProfile } from '../synapseTypes'

export type UseGetProfilesProps = {
  ids: string[]
  token?: string
}

// React hook to get user profiles
export default function useGetProfiles(props: UseGetProfilesProps) {
  const { token, ids } = props
  const [data, setData] = useState<UserProfile[]>([])
  useEffect(() => {
    const getData = async () => {
      const curList = data.map(el => el.ownerId)
      const nonNullIds = ids.filter(el => el !== SynapseConstants.VALUE_NOT_SET)
      // look at current list of data, see if incoming ids has new data,
      // if so grab those ids
      const newValues = without(nonNullIds, ...curList)
      if (newValues.length > 0) {
        try {
          const newIds = Array.from<string>(newValues)
          const data = await getUserProfileWithProfilePicAttached(newIds, token)
          setData(oldData => oldData.concat(data.list))
        } catch (error) {
          console.error('Error on data retrieval', error)
        }
      }
    }
    getData()
  }, [token, ids, data])
  return data
}
