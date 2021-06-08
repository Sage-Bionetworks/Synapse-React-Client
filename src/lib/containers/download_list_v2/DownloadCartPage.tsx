import React from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'
import { useSynapseContext } from '../../utils/SynapseContext'
import { SynapseErrorBoundary } from '../ErrorBanner'
import DownloadListStats from './DownloadListStats'

/**
 * All components wrapped by a query client provider (for caching) and an error boundary.
 */
export default function DownloadCartPage() {
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
    <div className="DownloadCartPage bootstrap-4-backport">
      <QueryClientProvider client={queryClient}>
        <SynapseErrorBoundary>
          <DownloadListStats />
          <ul className="nav nav-tabs">
            <li className="nav-item">
              <a className="nav-link active" href="#">Active</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Link</a>
            </li>
          </ul>
        </SynapseErrorBoundary>
      </QueryClientProvider>
    </div>
  )
}
