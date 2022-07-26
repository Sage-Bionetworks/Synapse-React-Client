import React, { useMemo } from 'react'
import { Reference } from '../../utils/synapseTypes'

export type ExpandGraphNodeLabelProps = {
  entityReference: Reference
  onExpandEntity: (entityReference: Reference) => void
}

export const ExpandGraphNodeLabel = (data: ExpandGraphNodeLabelProps) => {
  const { entityReference, onExpandEntity } = data
  return useMemo(
    () => (
      <>
        <a
          rel="noopener noreferrer"
          onClick={() => {
            onExpandEntity(entityReference)
          }}
        >
          ...
        </a>
      </>
    ),
    [entityReference, onExpandEntity],
  )
}
