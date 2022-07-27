import React, { useMemo } from 'react'

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
