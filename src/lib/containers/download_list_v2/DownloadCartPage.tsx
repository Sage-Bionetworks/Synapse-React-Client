import * as React from 'react'
import { useState, useEffect } from 'react'
import { useErrorHandler } from 'react-error-boundary'
import { toError } from '../../utils/ErrorUtils'
import { useSynapseContext } from '../../utils/SynapseContext'
import AvailableForDownloadTable from './AvailableForDownloadTable'
import DownloadListStats from './DownloadListStats'
import { FilesStatisticsResponse } from '../../utils/synapseTypes/DownloadListV2/QueryResponseDetails'
import { useGetDownloadListStatistics } from '../../utils/hooks/SynapseAPI/useGetDownloadListStatistics'
import DownloadListActionsRequired from './DownloadListActionsRequired'

/**
 * Show the Download Cart page.
 */
export default function DownloadCartPage() {
  const [selectedTabIndex, setSelectedTabIndex] = useState<number>(0)
  const { accessToken } = useSynapseContext()
  if (!accessToken) {
    return <></>
  }

  const handleError = useErrorHandler()
  const {
    data,
    isFetching,
    isError,
    error: newError,
  } = useGetDownloadListStatistics()
  const fileStats:FilesStatisticsResponse = data?.responseDetails as FilesStatisticsResponse
  useEffect(() => {
    if (isError && newError) {
      handleError(toError(newError))
    }
  }, [isError, newError, handleError])


  return (
    <div className="DownloadCartPage bootstrap-4-backport">
      <div className="container">
        <h3 className="title">Your Download Cart</h3>
        <p className="description">You may find your added files in the tabs below. Any files which require actions before download can be found in the Access Actions Required tab,
          while any that can be downloaded now can be found in the Download List tab.</p>
      </div>
      <div className="tabs-container">
        <div className="container">
          <ul className="nav nav-tabs">
            <li className={`nav-item ${
                selectedTabIndex == 0 ? 'active' : ''
              }`}>
              <button onClick={() => setSelectedTabIndex(0)}>
                Access Actions Required
                {!isError && !isFetching && fileStats &&
                  <span className="fileCount">{fileStats.numberOfFilesRequiringAction}</span>
                }
              </button>
            </li>
            <li className={`nav-item ${
                selectedTabIndex == 1 ? 'active' : ''
              }`}>
              <button onClick={() => setSelectedTabIndex(1)}>
                Download List
                {!isError && !isFetching && fileStats &&
                  <span className="fileCount">{fileStats.numberOfFilesAvailableForDownload}</span>
                }
              </button>
            </li>
          </ul>
        </div>
      </div>
      { selectedTabIndex == 0 && <div>
        <div className="subSectionOverview">
          <div className="container">
            <div className="subSectionContainer">
              <span className="subSectionTitle">You Have Files Which Require Actions Before Downloading</span>
            </div>
            <p className="description">The items in this category require different actions in order 
            to download them. Select Start to complete the action.</p>
          </div>
        </div>
        <div className="actionsRequiredContainer container">
          <DownloadListActionsRequired />
        </div>
      </div>
        }
      { selectedTabIndex == 1 && <div>
        <div className="subSectionOverview">
          <div className="container">
            <div className="subSectionContainer">
              <span className="subSectionTitle">Complete Your Download</span>
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
    </div>
  )
}
