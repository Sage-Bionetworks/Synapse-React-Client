import * as React from 'react'
import { useState, useEffect } from 'react'
import { useErrorHandler } from 'react-error-boundary'
import { toError } from '../../utils/ErrorUtils'
import AvailableForDownloadTable from './AvailableForDownloadTable'
import DownloadListStats from './DownloadListStats'
import { useGetDownloadListStatistics } from '../../utils/hooks/SynapseAPI/useGetDownloadListStatistics'
import DownloadListActionsRequired from './DownloadListActionsRequired'
import { useSynapseContext } from '../../utils/SynapseContext'
import { SynapseClient } from '../../utils'
import IconSvg from '../IconSvg'
import { CreatePackageV2 } from './CreatePackageV2'
import GlobalAlert from '../GlobalAlert'

export type DownloadCartPageProps = Record<string, never>

/**
 * Show the Download Cart page.
 */
export const DownloadCartPage:React.FunctionComponent<DownloadCartPageProps> = () => {
  const { accessToken } = useSynapseContext()
  const [selectedTabIndex, setSelectedTabIndex] = useState<number>(0)
  const [isShowingCreatePackageUI, setIsShowingCreatePackageUI] = useState<boolean>(false)
  const [isShowingDownloadSuccessAlert, setIsShowingDownloadSuccessAlert] = useState(false)
  const handleError = useErrorHandler()
  const {
    data,
    isLoading,
    isError,
    error: newError,
    refetch,
  } = useGetDownloadListStatistics()
  useEffect(() => {
    if (isError && newError) {
      handleError(toError(newError))
    }
  }, [isError, newError, handleError])
  
  const clearDownloadList = async (
  ) => {
    await SynapseClient.clearDownloadListV2(accessToken)
    refetch()
  }
  return (
    <div className="DownloadCartPage bootstrap-4-backport">
      <div className="container">
        <div className="titleContainer">
          <h3 className="title">Your Download Cart</h3>
          <a onClick={clearDownloadList}>
            <span className="SRC-primary-text-color">
              <IconSvg options={{
                icon: 'delete',
                padding: 'right',
              }} />
            </span>
            Clear Your Download Cart
          </a>
        </div>
        <p className="description">You may find your added files in the tabs below. Any files which require actions before download can be found in the Access Actions Required tab,
          while any that can be downloaded now can be found in the Download List tab.</p>
      </div>
      <div className="tabs-container">
        <div className="container">
          <ul className="nav nav-tabs">
            <li className={`nav-item ${
                selectedTabIndex == 0 ? 'active' : ''
              }`} aria-selected={selectedTabIndex == 0}>
              <button onClick={() => setSelectedTabIndex(0)}>
                Access Actions Required
              </button>
            </li>
            <li className={`nav-item ${
                selectedTabIndex == 1 ? 'active' : ''
              }`} aria-selected={selectedTabIndex == 1}>
              <button onClick={() => setSelectedTabIndex(1)}>
                Download List
                {!isError && !isLoading && data &&
                  <span className="fileCount">{data.numberOfFilesAvailableForDownload}</span>
                }
              </button>
            </li>
          </ul>
        </div>
      </div>
      {selectedTabIndex == 0 && !isError && !isLoading && data &&
        <div>
          {data.numberOfFilesRequiringAction > 0 && 
            <div>
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
            </div>}
            {data.numberOfFilesRequiringAction === 0 && <div className="placeholder">
                <div>No actions are currently required.</div>
              </div>}
        </div>
      }
      {selectedTabIndex == 1 && !isError && !isLoading && data &&
        <div>
          {data.numberOfFilesAvailableForDownload > 0 && 
            <div>
              <div className="subSectionOverview">
                <div className="container">
                  <div className="subSectionContainer">
                    <span className="subSectionTitle">Complete Your Download</span>
                    <DownloadListStats numBytes={data.sumOfFileSizesAvailableForDownload} numFiles={data.numberOfFilesAvailableForDownload}/>
                  </div>
                  <p className="description">Downloading your files programmatically is the quickest and most efficient way to get all of your files, 
                  both internal and externally hosted. Metadata will always be included in your download automatically when downloading programmatically. 
                  If you choose to download as .zip files, you can download external files individually at any time.</p>
                  <span className="createZipPackageContainer">
                    <a onClick={() => {setIsShowingCreatePackageUI(true)}}>Download As .Zip Packages</a>
                  </span>
                </div>
              </div>
              <div className="availableForDownloadTableContainer container">
                {isShowingCreatePackageUI && <CreatePackageV2 onPackageCreation={(zipFileUrl: string) => {
                  setIsShowingCreatePackageUI(false)
                  window.location.href = zipFileUrl
                  setIsShowingDownloadSuccessAlert(true)
                  refetch()
                }} />}
                <AvailableForDownloadTable /> 
              </div>
            </div>}
            {data.numberOfFilesAvailableForDownload === 0 && <div className="placeholder">
                <div>Your Download List is currently empty.</div>
              </div>}
      </div>}
      <GlobalAlert
        show={isShowingDownloadSuccessAlert}
        variant='success'
        title='Package download' 
        description='The files contained in this zip file have been removed from your list.'
        // autoCloseAfterDelayInSeconds={10}
        onClose={() => { setIsShowingDownloadSuccessAlert(false) }}
      />
    </div>
  )
}
