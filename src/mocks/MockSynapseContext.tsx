import React from 'react'
import {
  SynapseContextProvider,
  SynapseContextType,
} from '../lib/utils/SynapseContext'

export const MOCK_ACCESS_TOKEN = 'mock-access-token'

export const MOCK_CONTEXT_VALUE: SynapseContextType = {
  accessToken: MOCK_ACCESS_TOKEN,
  utcTime: false,
  isInExperimentalMode: false,
}

export const MOCK_CONTEXT = React.createContext(MOCK_CONTEXT_VALUE)

/**
 * Full context object using default values for testing.
 */
export const SynapseTestContext = jest
  .fn()
  .mockImplementation(({ children }) => {
    return (
      <SynapseContextProvider synapseContext={MOCK_CONTEXT_VALUE}>
        {children}
      </SynapseContextProvider>
    )
  })
