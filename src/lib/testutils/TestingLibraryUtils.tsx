import { ReactNode } from 'react'
import { QueryClient } from 'react-query'
import { MOCK_CONTEXT_VALUE } from '../../mocks/MockSynapseContext'
import {
  SynapseContextProvider,
  SynapseContextType,
} from '../utils/SynapseContext'

type RtlWrapperProps = {
  children?: ReactNode
}

/**
 * Creates a test wrapper for components being tested with @testing-library/react. This wrapper
 * includes context and an isolated query cache.
 */
export const createWrapper = (props?: SynapseContextType) => {
  // Creating a new query client for each rendering is important isolating tests, otherwise the
  // cache could be shared across tests.
  // This is also easier/more reliable than clearing the queryCache after each test.
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 30 * 1000, // 30s
        retry: false, // SynapseClient knows which queries to retry
      },
    },
  })
  const wrapperProps = props ?? MOCK_CONTEXT_VALUE
  return function RtlWrapper({ children }: RtlWrapperProps) {
    return (
      <SynapseContextProvider
        synapseContext={wrapperProps}
        queryClient={queryClient}
      >
        {children}
      </SynapseContextProvider>
    )
  }
}
