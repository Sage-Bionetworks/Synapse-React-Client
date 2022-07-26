import React, { useMemo } from 'react'
import { UsedURL } from '../../utils/synapseTypes/Provenance/Provenance'
import { ProvenanceExternalIcon } from './ProvenanceExternalIcon'

export type ExternalGraphNodeLabelProps = UsedURL

export const ExternalGraphNodeLabel = (data: ExternalGraphNodeLabelProps) => {
  return useMemo(
    () => (
      <>
        <div>
          <ProvenanceExternalIcon url={data.url} />
        </div>
        <a href={data.url} rel="noopener noreferrer">
          {data.name}
        </a>
      </>
    ),
    [data.name, data.url],
  )
}
