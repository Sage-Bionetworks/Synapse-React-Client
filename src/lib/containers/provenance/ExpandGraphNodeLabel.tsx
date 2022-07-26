import React, { useMemo } from 'react'
import { Reference } from '../../utils/synapseTypes'

export type ExpandGraphNodeLabelProps = {
  entityReference: Reference
}

export const ExpandGraphNodeLabel = () => {
  return useMemo(
    () => (
      <>
        <a rel="noopener noreferrer">&hellip;</a>
      </>
    ),
    [],
  )
}
