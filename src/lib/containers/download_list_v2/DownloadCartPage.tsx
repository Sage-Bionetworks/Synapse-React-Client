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
      <div className="container">
        <h3 className="title">Your Download Cart</h3>
        <p className="description">You may find your added files in the tabs below. Any files which require actions before download can be found in the Actions Required tab,
          while any can be downloaded now can be found in the Download List tab.</p>
      </div>
      <QueryClientProvider client={queryClient}>
        <SynapseErrorBoundary>
          <div className="tabs-container">
            <div className="container">
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
            </div>
          </div>
          { selectedTabIndex == 0 && <div>
            <h2>access actions required</h2>
          </div>
            }
          { selectedTabIndex == 1 && <div>
            <div className="availableForDownloadOverview">
              <div className="container">
                <div className="completeYourDownloadContainer">
                  <span className="completeYourDownload">Complete Your Download</span>
                  <DownloadListStats />
                </div>
                <p className="description">Downloading your files programmatically is the quickest and most efficient way to get all of your files, 
                both internal and externally hosted. Metadata will always be included in your download automatically when downloading programmatically. 
                If you choose to download as .zip files, you can download external files individually at any time.</p>
              </div>
            </div>
            <div className="availableForDownloadTableContainer container">
              <AvailableForDownloadTable /> 
            </div>
          </div>
          }
        </SynapseErrorBoundary>
      </QueryClientProvider>
    </div>
  )
}
