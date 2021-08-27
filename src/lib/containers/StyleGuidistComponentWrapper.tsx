import React from 'react'
import { MemoryRouter } from 'react-router'
import { SynapseContextProvider } from '../utils/SynapseContext'
import RenderIfInView from './RenderIfInView'
import { SynapseClient } from '../utils'
import { SynapseErrorBoundary } from './ErrorBanner'

export const StyleGuidistComponentWrapper: React.FC = props => {
  return (
    <SynapseContextProvider
      synapseContext={{
        accessToken: (global as any).accessToken,
        isInExperimentalMode: SynapseClient.isInSynapseExperimentalMode(),
        utcTime: SynapseClient.getUseUtcTimeFromCookie(),
      }}
    >
      <MemoryRouter>
        <RenderIfInView>
          <SynapseErrorBoundary>{props.children}</SynapseErrorBoundary>
        </RenderIfInView>
      </MemoryRouter>
    </SynapseContextProvider>
  )
}

export default StyleGuidistComponentWrapper
