import React, { useState } from 'react'
import UserCardListRotate from 'lib/containers/UserCardListRotate'
import { FacetColumnValuesRequest } from 'lib/utils/synapseTypes'
import { UserCardSize } from './UserCard'

export type UserCardListGroupsProps = {
  sql:string
  columnName:string
  facetValues: string[]
  size: UserCardSize,
  summaryLink?: string
  summaryLinkText?: string
  count: number
  token?: string
}

export default function UserCardListGroups(props: UserCardListGroupsProps) {
  const [selectedGroupIndex, setSelectedGroupIndex] = useState<number>(0)
  const { columnName, facetValues, ...rest } = props
  const selectedFacet:FacetColumnValuesRequest = {
    columnName,
    facetValues:[facetValues[selectedGroupIndex]],
    concreteType: 'org.sagebionetworks.repo.model.table.FacetColumnValuesRequest',
  }
  return (
    <div className="UserCardListGroups">
      <div className="control-container">
        <div className="button-container">
          {facetValues?.map((el, curIndex) => {
            return (
              <button
                className={selectedGroupIndex === curIndex ? 'isSelected' : ''}
                onClick={() => setSelectedGroupIndex(curIndex)}
                key={el}
              >
                {el}
              </button>
            )
          })}
          {/* 
              This button keeps the border line in the button container running from top to bottom,
              it doesn't have any functionality.
            */}
          <button className="gap-fill" />
        </div>
        <div className="content-container">
          <UserCardListRotate key={`UserCardListGroup-${selectedGroupIndex}`}
              {...rest}
              selectedFacets={[selectedFacet]}
            />
        </div>
      </div>
    </div>
  )
}
