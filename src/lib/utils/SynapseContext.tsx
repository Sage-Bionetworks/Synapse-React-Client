import React, { useContext } from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'

const defaultQueryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 30 * 1000, // 30s
      retry: false, // SynapseClient knows which queries to retry
    },
  },
})

export type SynapseContextType = {
  accessToken?: string
  isInExperimentalMode: boolean
  utcTime: boolean
}

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
export const SynapseContextProvider: React.FunctionComponent<SynapseContextProviderProps> = ({
  children,
  synapseContext,
  queryClient,
}) => {
  return (
    <SynapseContext.Provider value={synapseContext}>
      <QueryClientProvider client={queryClient ?? defaultQueryClient}>
        {children}
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
