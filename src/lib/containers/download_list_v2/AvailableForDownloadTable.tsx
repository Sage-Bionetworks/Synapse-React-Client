import React from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'
import { useSynapseContext } from '../../utils/SynapseContext'
import { SynapseErrorBoundary } from '../ErrorBanner'
import DownloadListTable, {
  DownloadListTableProps,
} from './DownloadListTable'

export default function AvailableForDownloadTable(
  props: DownloadListTableProps,
) {
  const { accessToken } = useSynapseContext()
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 50 * 1000, // 5s
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
        <DownloadListTable />
      </SynapseErrorBoundary>
    </QueryClientProvider>
  )
}
