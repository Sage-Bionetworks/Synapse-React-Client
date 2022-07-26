import React, { useMemo } from 'react'
import { Reference } from '../../utils/synapseTypes'

export type ExpandGraphNodeLabelProps = {
  entityReference: Reference
}

export const ExpandGraphNodeLabel = (data: ExpandGraphNodeLabelProps) => {
  const { entityReference } = data
  return useMemo(
    () => (
      <>
        <a rel="noopener noreferrer">...</a>
      </>
    ),
    [entityReference],
  )
}
