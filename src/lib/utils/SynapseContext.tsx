import React from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'
import Cookies from 'universal-cookie'
import { DATETIME_UTC_COOKIE_KEY } from './functions/DateFormatter'
import { defaultQueryClient } from './hooks/SynapseAPI/QueryClientProviderWrapper'
import { EXPERIMENTAL_MODE_COOKIE } from './SynapseConstants'

const cookies = new Cookies()

export type SynapseContextType = {
  accessToken?: string
  isInExperimentalMode: boolean
  utcTime: boolean
}

export const DEFAULT_SYNAPSE_CONTEXT: SynapseContextType = {
  accessToken: undefined, // TODO
  isInExperimentalMode: cookies.get(EXPERIMENTAL_MODE_COOKIE),
  utcTime: cookies.get(DATETIME_UTC_COOKIE_KEY),
}

export const SynapseContext = React.createContext<SynapseContextType>(
  DEFAULT_SYNAPSE_CONTEXT,
)

export type SynapseWrapperProps = {
  synapseContext?: SynapseContextType
  queryClient?: QueryClient
}

/**
 * Provides context necessary for most components in SRC
 * @param param0
 * @returns
 */
export const SynapseWrapper: React.FunctionComponent<SynapseWrapperProps> = ({
  children,
  synapseContext,
  queryClient,
}) => {
  return (
    <SynapseContext.Provider value={synapseContext ?? DEFAULT_SYNAPSE_CONTEXT}>
      <QueryClientProvider client={queryClient ?? defaultQueryClient}>
        {children}
      </QueryClientProvider>
    </SynapseContext.Provider>
  )
}
