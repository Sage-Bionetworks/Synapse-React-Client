import React, { useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer'
import { getEntityHeadersByIds } from '../utils/SynapseClient'

export type EntityIdListProps = {
  entityIdList: string[]
}

const EntityIdList: React.FC<EntityIdListProps> = props => {
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

  const getEntityTypes = async () => {
    if (!entityIdList.length) return

    getEntityHeadersByIds(entityIdList)
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
