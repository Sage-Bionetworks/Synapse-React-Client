import React from 'react'
import { MemoryRouter } from 'react-router'
import { SynapseContextProvider } from '../utils/SynapseContext'
import RenderIfInView from './RenderIfInView'
import { SynapseClient } from '../utils'

export const StyleGuidistComponentWrapper: React.FC = props => {
  return (
    <SynapseContextProvider
      synapseContext={{
        accessToken: (global as any).accessToken,
        isInExperimentalMode: SynapseClient.getIsInExperimentalModeFromCookie(),
        utcTime: SynapseClient.getUseUtcTimeFromCookie(),
      }}
    >
      <MemoryRouter>
        <RenderIfInView>{props.children}</RenderIfInView>
      </MemoryRouter>
    </SynapseContextProvider>
  )
}

export default StyleGuidistComponentWrapper
