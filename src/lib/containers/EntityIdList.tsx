import React, { useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer'
import { getEntityHeadersByIds } from '../utils/SynapseClient'
import { useSynapseContext } from '../utils/SynapseContext'

export type EntityIdListProps = {
  entityIdList: string[]
}

const EntityIdList: React.FC<EntityIdListProps> = props => {
  const { accessToken } = useSynapseContext()
  const { entityIdList } = props
  const [entityNameList, setEntityNameList] = useState<string>('')
  const { ref, inView } = useInView()
  let mounted: boolean = true

  useEffect(() => {
    if (mounted && inView) {
      getEntityTypes()
    }
    return () => {
      mounted = false
    }
  }, [entityIdList, inView])

  const getEntityTypes = () => {
    if (!entityIdList.length) return

    getEntityHeadersByIds(entityIdList, accessToken)
      .then(entity => {
        const list = entity.results.map(el => el.name).join(', ')
        setEntityNameList(list)
      })
      .catch(e => {
        console.log('EntityIdList: Error getting entity header names', e)
      })
  }

  return <span ref={ref}>{entityNameList}</span>
}

export default EntityIdList
