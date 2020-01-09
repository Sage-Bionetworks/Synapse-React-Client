import * as React from 'react'

import {
  FacetColumnResultValueCount,
  ColumnModel,
} from '../../../utils/synapseTypes/Table'
import { Checkbox } from '../Checkbox'
import { SynapseClient, SynapseConstants } from '../../../utils'
import { UserProfile } from '../../../utils/synapseTypes/UserProfile'
import { useEffect, useState } from 'react'
import { EntityHeader } from '../../../utils/synapseTypes/EntityHeader'

export type QueryEnumProps = {
  facetValues: FacetColumnResultValueCount[]
  columnModel: ColumnModel
  token?: string
  onChange: Function
  onClear: Function
}

function valueToId(value: string): string {
  return value.replace(/\s/g, '').toLowerCase()
}

function valueToLabel(
  value: string,
  profiles: UserProfile[] = [],
  entityHeaders: EntityHeader[] = [],
): string {
  if (value === SynapseConstants.VALUE_NOT_SET) {
    return 'Not Set'
  }
  if (profiles.length > 0) {
    const profile = profiles.find(profile => profile.ownerId === value)
    return !profile ? `unknown (${value})` : profile.userName
  }

  if (entityHeaders.length > 0) {
    const eh = entityHeaders.find(eh => eh.id === value)
    return !eh ? `unknown (${value})` : eh.name
  }
  return value
}

async function getEntityArray(
  //alina TODO: handle > 50 returned records
  facetValues: FacetColumnResultValueCount[],
  token?: string,
): Promise<EntityHeader[]> {
  const references = facetValues.map(facet => ({ targetId: facet.value }))
  const headers = await SynapseClient.getEntityHeader(references, token)
  return headers.results
}

async function getUserProfileArray(
  facetValues: FacetColumnResultValueCount[],

  token?: string,
): Promise<UserProfile[]> {
  const ids = facetValues.map(facet => facet.value)
  const profiles = await SynapseClient.getUserProfiles(ids, token)
  return profiles.list
}

function formatFacetValuesForDisplay(
  facetValues: FacetColumnResultValueCount[],
  isShowAll: boolean,
  visibleItemsCount: number,
) {
  //sort facets by count
  const facets = [...facetValues.sort((a, b) => b.count - a.count)]
  if (isShowAll || facets.length <= visibleItemsCount) {
    return facets
  } else {
    //if we are not hiding elected facets
    if (facets.slice(visibleItemsCount).find(item => item.isSelected)) {
      return facets
    } else {
      return facets.splice(0, visibleItemsCount)
    }
  }
}

/************* QUERY ENUM CONMPONENT  *************/

export const QueryEnum: React.FunctionComponent<QueryEnumProps> = (
  props: QueryEnumProps,
) => {
  const [userArray, setUserArray] = useState<UserProfile[]>([])
  const [entityHeaderArray, setEntityHeaderArray] = useState<EntityHeader[]>([])
  const [isShowAll, setIsShowAll] = useState<boolean>(false)
  const visibleItemsCount = 5

  useEffect(() => {
    ;(async function getDataOnLoad(
      columnModel: ColumnModel,
      facetValues: FacetColumnResultValueCount[],
      token?: string,
    ) {
      if (
        columnModel.columnType !== 'USERID' &&
        columnModel.columnType !== 'ENTITYID'
      ) {
        return
      }

      const facetValuesWithName = facetValues.filter(
        facet => facet.value !== SynapseConstants.VALUE_NOT_SET,
      )

      if (columnModel.columnType === 'USERID') {
        const profiles = await getUserProfileArray(facetValuesWithName, token)
        setUserArray(profiles)
      }

      if (columnModel.columnType === 'ENTITYID') {
        const entities = await getEntityArray(facetValuesWithName, token)
        setEntityHeaderArray(entities)
      }
    })(props.columnModel, props.facetValues, props.token)
  }, [props.columnModel, props.facetValues, props.token])

  if (!props.columnModel) {
    return <></>
  }

  const result = (
    <div>
      <button
        className="btn btn-link SRC-noPadding"
        style={{ marginLeft: '5px', marginRight: '5px' }}
        onClick={() => props.onClear(props.columnModel.name)}
      >
        All
      </button>
      <div>
        {formatFacetValuesForDisplay(
          props.facetValues,
          isShowAll,
          visibleItemsCount,
        ).map((facet: any) => {
          const id = valueToId(facet.value)
          return (
            <Checkbox
              onChange={(isChecked: boolean) =>
                props.onChange(facet.value, isChecked)
              }
              key={id}
              checked={facet.isSelected}
              label={`${valueToLabel(
                facet.value,
                userArray,
                entityHeaderArray,
              )} (${facet.count})`}
              id={id}
            ></Checkbox>
          )
        })}
        {!isShowAll && props.facetValues.length > visibleItemsCount && (
          <button className="btn-link" onClick={() => setIsShowAll(true)}>
            Show All
          </button>
        )}
      </div>
    </div>
  )
  return result
}
