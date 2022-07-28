import pluralize from 'pluralize'
import React, { useMemo } from 'react'
import { EntityHeaderIsCurrent } from './ProvenanceUtils'

export type ExpandGraphNodeDataProps = {
  entityHeaderIsCurrent: EntityHeaderIsCurrent
  itemCount: number
}
export const ExpandGraphNodeLabel = (props: ExpandGraphNodeDataProps) => {
  const { itemCount } = props
  return useMemo(
    () => (
      <>
        <a>
          Show {itemCount} {pluralize('item', itemCount)}&hellip;
        </a>
      </>
    ),
    [itemCount],
  )
}
