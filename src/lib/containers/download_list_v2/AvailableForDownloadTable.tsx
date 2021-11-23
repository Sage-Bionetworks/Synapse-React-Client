import React from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'
import { useSynapseContext } from '../../utils/SynapseContext'
import { FilesStatisticsResponse } from '../../utils/synapseTypes/DownloadListV2/QueryResponseDetails'
import { SynapseErrorBoundary } from '../ErrorBanner'
import DownloadListTable from './DownloadListTable'

export type AvailableForDownloadTableProps = {
  filesStatistics: FilesStatisticsResponse
}

/**
 * Table of the files added to the Download Cart that are currently available for download.
 * Note that this creates it's own QueryClient, so it's cache does not persist if you remount.
 */
export default function AvailableForDownloadTable(props: AvailableForDownloadTableProps) {
  const { accessToken } = useSynapseContext()
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 50 * 1000, // 50s
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
        {
          props.filesStatistics && (
            //SWC-5858: Update the Download List files table when the statistics change
            <DownloadListTable key={props.filesStatistics.totalNumberOfFiles} />
          )
        }
      </SynapseErrorBoundary>
    </QueryClientProvider>
    
  )
}
