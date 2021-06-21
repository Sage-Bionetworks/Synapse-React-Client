import React from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'
import { useSynapseContext } from '../../utils/SynapseContext'
import { SynapseErrorBoundary } from '../ErrorBanner'
import DownloadCartPage from './DownloadCartPage'

/**
 * Show the Download Cart page.
 * "Wrapped" by a query client provider (for caching) and an error boundary.
 */
export default function DownloadCartPageWrapper() {
  const { accessToken } = useSynapseContext()
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 20 * 1000, // 1m
        retry: false, // SynapseClient knows which queries to retry
      },
    },
  })
  if (!accessToken) {
    return <></>
  }
  return (
    <QueryClientProvider client={queryClient}>
      <SynapseErrorBoundary>
        <DownloadCartPage />
      </SynapseErrorBoundary>
    </QueryClientProvider>
  )
}
