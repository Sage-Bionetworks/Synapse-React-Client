import React, { useContext } from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'
import { SynapseErrorBoundary } from '../containers/ErrorBanner'

const defaultQueryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000, // 60s
      retry: false, // SynapseClient knows which queries to retry
    },
  },
})

export type SynapseContextType = {
  /** The user's access token. If undefined, the user is not logged in */
  accessToken?: string
  /** If the user has enabled experimental mode */
  isInExperimentalMode: boolean
  /** If the user prefers time to be displayed in UTC format */
  utcTime: boolean
  /** Whether to wrap all children of this context in an error boundary. Useful if this context wraps just one component. */
  withErrorBoundary?: boolean
}

/**
 * This must be exported to use the context in class components.
 */
export const SynapseContext = React.createContext<
  SynapseContextType | undefined
>(undefined)

export type SynapseContextProviderProps = {
  synapseContext?: SynapseContextType
  queryClient?: QueryClient
}

/**
 * Provides context necessary for most components in SRC
 * @param param0
 * @returns
 */
export const SynapseContextProvider: React.FunctionComponent<SynapseContextProviderProps> =
  ({ children, synapseContext, queryClient }) => {
    return (
      <SynapseContext.Provider value={synapseContext}>
        <QueryClientProvider client={queryClient ?? defaultQueryClient}>
          {synapseContext?.withErrorBoundary ? (
            <SynapseErrorBoundary>{children}</SynapseErrorBoundary>
          ) : (
            children
          )}
        </QueryClientProvider>
      </SynapseContext.Provider>
    )
  }

export const SynapseContextConsumer = SynapseContext.Consumer

export function useSynapseContext(): SynapseContextType {
  const context = useContext(SynapseContext)
  if (context === undefined) {
    throw new Error(
      'useSynapseContext must be used within a SynapseContextProvider',
    )
  }
  return context
}
