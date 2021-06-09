import * as React from 'react'
import { useState } from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'
import { useSynapseContext } from '../../utils/SynapseContext'
import { SynapseErrorBoundary } from '../ErrorBanner'
import AvailableForDownloadTable from './AvailableForDownloadTable'
import DownloadListStats from './DownloadListStats'

/**
 * All components wrapped by a query client provider (for caching) and an error boundary.
 */
export default function DownloadCartPage() {
  const [selectedTabIndex, setSelectedTabIndex] = useState<number>(0)
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
      <h3 className="title">Your Download Cart</h3>
      <p className="subTitle">You may find your added files in the tabs below. Any files which require actions before download can be found in the Actions Required tab,
        while any can be downloaded now can be found in the Available for Download tab.</p>
      <QueryClientProvider client={queryClient}>
        <SynapseErrorBoundary>
          <ul className="nav nav-tabs">
          <li className={`nav-item ${
                selectedTabIndex == 0 ? 'active' : ''
              }`}>
              <button onClick={() => setSelectedTabIndex(0)}>
                Access Actions Required
              </button>
            </li>
            <li className={`nav-item ${
                selectedTabIndex == 1 ? 'active' : ''
              }`}>
              <button onClick={() => setSelectedTabIndex(1)}>
                Download List
              </button>
            </li>
          </ul>
          { selectedTabIndex == 0 && <div>
            <h2>access actions required</h2>
          </div>
            }
          { selectedTabIndex == 1 && <div>
            <DownloadListStats />
            <AvailableForDownloadTable /> 
          </div>
          }
        </SynapseErrorBoundary>
      </QueryClientProvider>
    </div>
  )
}
