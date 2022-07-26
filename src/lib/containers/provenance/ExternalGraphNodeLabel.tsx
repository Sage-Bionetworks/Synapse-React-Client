import React, { useMemo } from 'react'
import { UsedURL } from '../../utils/synapseTypes/Provenance/Provenance'

export type ExternalGraphNodeLabelProps = UsedURL

export const ExternalGraphNodeLabel = (data: ExternalGraphNodeLabelProps) => {
  return useMemo(
    () => (
      <>
        <a href={data.url} rel="noopener noreferrer">
          {data.name}
        </a>
      </>
    ),
    [data.name, data.url],
  )
}
