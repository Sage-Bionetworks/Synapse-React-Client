import React, { useMemo } from 'react'
import { UsedURL } from '../../utils/synapseTypes/Provenance/Provenance'
import Tooltip from '../../utils/tooltip/Tooltip'
import { ProvenanceExternalIcon } from './ProvenanceExternalIcon'

export type ExternalGraphNodeLabelProps = UsedURL

export const ExternalGraphNodeLabel = (data: ExternalGraphNodeLabelProps) => {
  return useMemo(
    () => (
      <>
        <div>
          <ProvenanceExternalIcon url={data.url} />
        </div>
        <Tooltip title={data.name} placement="top" enterNextDelay={300}>
          <a href={data.url} rel="noopener noreferrer">
            {data.name}
          </a>
        </Tooltip>
      </>
    ),
    [data.name, data.url],
  )
}
