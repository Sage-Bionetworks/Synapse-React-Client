import React, { useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer'
import {
  getEntityTypeByIds
} from '../utils/SynapseClient'

export type EntityIdListProps = {
  entityIdList: string[],
  token: string | undefined
}

const EntityIdList: React.FC<EntityIdListProps> = props => {
  const { entityIdList, token } = props
  const [entityNameList, setEntityNameList] = useState<string>("")
  const { ref, inView } = useInView()
  let mounted:boolean = true

  useEffect( () => {
    if (mounted && inView) {
      getEntityTypes()
    }
    return () => {
      mounted = false
    }
  }, [entityIdList, inView])

  const getEntityTypes = async () => {
    const entityIds = entityIdList.join(",")
    getEntityTypeByIds(entityIds, token).then((entity) =>{
      const list = entity.results.map(el => el.name).join(", ")
      setEntityNameList(list)
    })
  }

  return (
    <span ref={ref}>
      {entityNameList}
    </span>
  )
}

export default EntityIdList