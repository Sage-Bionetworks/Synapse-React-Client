import React, { useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer'
import { getEntityHeadersByIds } from '../utils/SynapseClient'
import { useSynapseContext } from '../utils/SynapseContext'
import { EntityLink } from './EntityLink'

export type EntityIdListProps = {
  entityIdList: string[]
}

const EntityIdList: React.FC<EntityIdListProps> = props => {
  const { accessToken } = useSynapseContext()
  const { entityIdList } = props
  const [entityLinkArray, setEntityLinkArray] = useState([<></>])
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
        const newEntityList = entity.results.map(el => {
          return (
            <EntityLink entity={el} key={el.id} displayTextField={'name'} />
          )
        })
        setEntityLinkArray(newEntityList)
      })
      .catch(e => {
        console.log('EntityIdList: Error getting entity headers', e)
      })
  }

  return <span ref={ref}>{entityLinkArray}</span>
}

export default EntityIdList
