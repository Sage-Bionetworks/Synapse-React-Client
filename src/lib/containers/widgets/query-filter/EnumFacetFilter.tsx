import * as React from 'react'

import {
  FacetColumnResultValueCount,
  ColumnModel,
} from '../../../utils/synapseTypes/Table'
import { Checkbox } from '../Checkbox'
import { SynapseConstants } from '../../../utils'
import { useState } from 'react'
import { EntityHeader } from '../../../utils/synapseTypes/EntityHeader'
import useGetProfiles from '../../../utils/hooks/useGetProfiles'
import useGetEntityHeaders from '../../../utils/hooks/useGetEntityHeaders'
import { ReferenceList, UserProfile } from 'lib/utils/synapseTypes'

export type EnumFacetFilterProps = {
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
  facet: FacetColumnResultValueCount,
  profiles: UserProfile[] = [],
  entityHeaders: EntityHeader[] = [],
): string {
  const { value, count } = facet
  let displayValue = value
  if (value === SynapseConstants.VALUE_NOT_SET) {
    displayValue = 'Not Set'
  }
  const profile = profiles.find(profile => profile.ownerId === value)
  if (profile) {
    displayValue = profile ? profile.userName : `unknown (${value})`
  }

  const eh = entityHeaders.find(eh => eh.id === value)
  if (eh) {
    displayValue = eh ? eh.name : `unknown (${value})`
  }
  return `${displayValue} (${count})`
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

export const EnumFacetFilter: React.FunctionComponent<EnumFacetFilterProps> = ({
  token,
  facetValues,
  columnModel,
  onClear,
  onChange,
}: EnumFacetFilterProps) => {
  const [isShowAll, setIsShowAll] = useState<boolean>(false)
  const visibleItemsCount = 5

  const userIds =
    columnModel.columnType === 'USERID'
      ? facetValues.map(facet => facet.value)
      : []
  const userProfiles = useGetProfiles({ ids: userIds, token })?.list

  const entityIds: ReferenceList =
    columnModel.columnType === 'ENTITYID'
      ? facetValues.map(facet => {
          return { targetId: facet.value }
        })
      : []
  const entityHeaders = useGetEntityHeaders({
    references: entityIds,
    token,
  })?.results
  if (!columnModel) {
    return <></>
  }

  return (
    <div>
      <button
        className="btn btn-link SRC-noPadding"
        onClick={() => onClear(columnModel.name)}
      >
        All
      </button>
      <div>
        {formatFacetValuesForDisplay(
          facetValues,
          isShowAll,
          visibleItemsCount,
        ).map((facet, index: number) => {
          const id = valueToId(facet.value)
          return (
            <Checkbox
              onChange={(isChecked: boolean) =>
                onChange(facet.value, isChecked)
              }
              key={id + index}
              checked={facet.isSelected}
              label={valueToLabel(facet, userProfiles, entityHeaders)}
              id={id}
            ></Checkbox>
          )
        })}
        {!isShowAll && facetValues.length > visibleItemsCount && (
          <button
            className="btn btn-link SRC-noPadding"
            onClick={() => setIsShowAll(true)}
          >
            Show All
          </button>
        )}
      </div>
    </div>
  )
}
