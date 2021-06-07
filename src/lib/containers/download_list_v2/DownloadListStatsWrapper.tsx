import React from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'
import { useSynapseContext } from '../../utils/SynapseContext'
import { SynapseErrorBoundary } from '../ErrorBanner'
import DownloadListStats from './DownloadListStats'

/**
 * Show the count, and total size, of the files that the user has added to their Download Cart (only includes files are currently available for download).
 * "Wrapped" by a query client provider (for caching) and an error boundary.
 */
export default function DownloadListStatsWrapper() {
  const { accessToken } = useSynapseContext()
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 60 * 1000, // 1m
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
        <DownloadListStats />
      </SynapseErrorBoundary>
    </QueryClientProvider>
  )
}
