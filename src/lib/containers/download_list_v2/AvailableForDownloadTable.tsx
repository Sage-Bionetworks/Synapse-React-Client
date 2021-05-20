import React from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'
import { SynapseErrorBoundary } from '../ErrorBanner'
import DownloadListTableV2, { DownloadListTableV2Props } from './DownloadListTableV2'

export default function AvailableForDownloadTable(props: DownloadListTableV2Props) {
    const queryClient = new QueryClient({
        defaultOptions: {
            queries: {
                staleTime: 50 * 1000, // 5s
                retry: false, // SynapseClient knows which queries to retry
            },
        },
    })
    if (!props.token) {
        return <></>
    }
    return (
        <QueryClientProvider client={queryClient}>
            <SynapseErrorBoundary>
                <DownloadListTableV2 token={props.token} />
            </SynapseErrorBoundary>
        </QueryClientProvider>
    )
}