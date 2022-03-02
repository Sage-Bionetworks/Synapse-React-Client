import React from 'react'
import {
  SynapseContextProvider,
  SynapseContextType,
} from '../lib/utils/SynapseContext'
import { defaultInjector } from '../lib/utils/SynapseReactClientDependencyInjector'

export const MOCK_ACCESS_TOKEN = 'mock-access-token'

export const MOCK_CONTEXT_VALUE: SynapseContextType = {
  accessToken: MOCK_ACCESS_TOKEN,
  utcTime: false,
  isInExperimentalMode: false,
  injector: defaultInjector,
}

export const MOCK_CONTEXT = React.createContext(MOCK_CONTEXT_VALUE)

/**
 * Full context object with default values for testing.
 *
 * If using @testing-library/react, see {@link TestingLibraryUtils#createWrapper}
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
