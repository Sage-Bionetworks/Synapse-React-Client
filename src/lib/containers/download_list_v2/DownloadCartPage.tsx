import * as React from 'react'
import { useState, useEffect } from 'react'
import AvailableForDownloadTable from './AvailableForDownloadTable'
import DownloadListStats from './DownloadListStats'
import { useGetDownloadListStatistics } from '../../utils/hooks/SynapseAPI/download/useGetDownloadListStatistics'
import {
  DownloadListActionsRequired,
  DownloadListActionsRequiredProps,
} from './DownloadListActionsRequired'
import { useSynapseContext } from '../../utils/SynapseContext'
import { SynapseClient } from '../../utils'
import IconSvg from '../IconSvg'
import { CreatePackageV2 } from './CreatePackageV2'
import FullWidthAlert from '../FullWidthAlert'
import { ErrorBanner } from '../ErrorBanner'
import Typography from '../../utils/typography/Typography'
import { HelpPopover } from '../HelpPopover'
import Tooltip from '../../utils/tooltip/Tooltip'
import { Button } from 'react-bootstrap'

/**
 * Show the Download Cart page.
 */
export const DownloadCartPage: React.FunctionComponent<
  DownloadListActionsRequiredProps
> = props => {
  const { accessToken } = useSynapseContext()
  const [selectedTabIndex, setSelectedTabIndex] = useState<number>(0)
  const [isShowingCreatePackageUI, setIsShowingCreatePackageUI] =
    useState<boolean>(false)
  const [isShowingDownloadSuccessAlert, setIsShowingDownloadSuccessAlert] =
    useState(false)
  const [error, setError] = useState<Error>()
  const {
    data,
    isLoading,
    isError,
    error: newError,
    refetch,
  } = useGetDownloadListStatistics()
  useEffect(() => {
    if (isError && newError) {
      setError(newError)
    }
  }, [isError, newError])

  // SWC-5874: When arriving at the download cart when there are no ARs, the user should start in the Download list
  useEffect(() => {
    if (data && data.numberOfFilesRequiringAction == 0) {
      setSelectedTabIndex(1)
    }
  }, [data])

  if (error) {
    return <ErrorBanner error={error} />
  }
  const clearDownloadList = async () => {
    await SynapseClient.clearDownloadListV2(accessToken)
    refetch()
  }
  return (
    <div className="DownloadCartPage bootstrap-4-backport">
      <div>
        <div className="pageHeader">
          <div className="grid">
            <h3 className="pageHeaderTitle">Your Download Cart</h3>
            <Tooltip
              title="Immediately removes all items from your download list"
              enterNextDelay={300}
              placement="right"
            >
              <a className="clearDownloadListLink" onClick={clearDownloadList}>
                <span>
                  <IconSvg
                    options={{
                      icon: 'delete',
                      padding: 'right',
                    }}
                  />
                </span>
                Clear Your Download Cart
              </a>
            </Tooltip>
          </div>
          <Typography className="description" variant="body1">
            You may find your added files in the tabs below. Any files which
            require actions before download can be found in the Access Actions
            Required tab, while any that can be downloaded now can be found in
            the Download List tab.
          </Typography>
        </div>
      </div>
      <div className="tabs-container">
        <div className="container">
          <ul className="nav nav-tabs">
            <li
              className={`nav-item ${selectedTabIndex == 0 ? 'active' : ''}`}
              aria-selected={selectedTabIndex == 0}
            >
              <button onClick={() => setSelectedTabIndex(0)}>
                Access Actions Required
                {!isError && !isLoading && data && (
                  <span className="fileCount">
                    {data.totalNumberOfFiles -
                      data.numberOfFilesAvailableForDownload}
                  </span>
                )}
              </button>
            </li>
            <li
              className={`nav-item ${selectedTabIndex == 1 ? 'active' : ''}`}
              aria-selected={selectedTabIndex == 1}
            >
              <button onClick={() => setSelectedTabIndex(1)}>
                Download List
                {!isError && !isLoading && data && (
                  <span className="fileCount">
                    {data.numberOfFilesAvailableForDownload}
                  </span>
                )}
              </button>
            </li>
          </ul>
        </div>
      </div>
      {selectedTabIndex == 0 && !isError && !isLoading && data && (
        <div>
          {data.numberOfFilesRequiringAction > 0 && (
            <div>
              <div className="actionsRequiredContainer container">
                <DownloadListActionsRequired {...props} />
              </div>
            </div>
          )}
          {data.numberOfFilesRequiringAction === 0 && (
            <div className="placeholder">
              <div>No actions are currently required.</div>
            </div>
          )}
        </div>
      )}
      {selectedTabIndex == 1 && !isError && !isLoading && data && (
        <div>
          {data.numberOfFilesAvailableForDownload > 0 && (
            <div className="DownloadListTabContent">
              <div className="subSectionOverviewContainer">
                <div className="subSectionOverview container">
                  <div>
                    <div className="headlineWithHelp">
                      <Typography variant={'headline3'}>
                        <IconSvg options={{ icon: 'packagableFile' }} /> Web
                        Download (.ZIP Packages)
                      </Typography>
                      <HelpPopover markdownText="This will allow you to create a .zip file that contains eligible files. Files greater that 100 MB, external links, or files which are not stored on Synapse native storage are ineligible. In most cases, ineligible files can be downloaded individually. External links will require navigation to an external site, which may require a seperate login process." />
                    </div>
                    <Typography variant={'body1'}>
                      <ul>
                        <li>
                          Eligible files will be added to .ZIP packages of up to
                          1GB in size
                        </li>
                        <li>
                          If you have more than 1GB, you can create multiple
                          packages
                        </li>
                        <li>
                          Will only include files which are hosted on Synapse
                          native storage
                        </li>
                        <li>
                          Packages include a CSV Manifest containing Metadata
                          for each file
                        </li>
                      </ul>
                    </Typography>
                    <span>
                      {data.numberOfFilesAvailableForDownloadAndEligibleForPackaging >
                        0 && (
                        <Button
                          variant="sds-primary"
                          onClick={() => {
                            setIsShowingCreatePackageUI(true)
                          }}
                        >
                          <IconSvg options={{ icon: 'download' }} />
                          Download As .Zip Packages
                        </Button>
                      )}
                      {data.numberOfFilesAvailableForDownloadAndEligibleForPackaging ==
                        0 && (
                        <Tooltip
                          title="You cannot create a .zip package because there are no eligible files."
                          enterNextDelay={300}
                          placement="top"
                        >
                          <Button variant="sds-primary" disabled>
                            <IconSvg options={{ icon: 'download' }} />
                            Download As .Zip Packages
                          </Button>
                        </Tooltip>
                      )}
                    </span>
                  </div>
                  <div>
                    <div className="headlineWithHelp">
                      <Typography variant={'headline3'}>
                        <IconSvg options={{ icon: 'code' }} /> Programmatic
                        Download
                      </Typography>
                      <HelpPopover markdownText="This will provide syntax which you can enter into your programmatic client. It is suitable for large files (>100 MB), for packages > 1GB, and for files which aren’t stored on Synapse native storage (e.g. in a special AWS S3 or Google Cloud bucket).  External links will require navigation to an external site, which may require a separate login process." />
                    </div>
                    <Typography variant={'body1'}>
                      <ul>
                        <li>
                          Requires installation of a programmatic client (R,
                          Python, CLI)
                        </li>
                        <li>
                          No limit to the file size or the size of the package
                          that can be downloaded
                        </li>
                        <li>
                          Will include files which are hosted on and off Synapse
                          native storage
                        </li>
                        <li>
                          Packages include a CSV Manifest containing Metadata
                          for each file
                        </li>
                      </ul>
                    </Typography>
                    <span>
                      <Tooltip
                        title="This feature is coming soon. Click here to learn how to download programmatically using other methods"
                        enterNextDelay={300}
                        placement="top"
                      >
                        <a
                          className="highlight-link"
                          rel="noreferrer"
                          target="_blank"
                          href="https://help.synapse.org/docs/API-Clients.1985446128.html"
                        >
                          Create Programmatic Package (Coming soon)
                        </a>
                      </Tooltip>
                    </span>
                  </div>
                </div>
              </div>
              <div className="availableForDownloadTableContainer container">
                {isShowingCreatePackageUI && (
                  <CreatePackageV2
                    onPackageCreation={() => {
                      setIsShowingDownloadSuccessAlert(true)
                      // we refetch the data because the backend will instantly remove the downloadable files from the download list after a package has been created
                      refetch()
                    }}
                  />
                )}
                <DownloadListStats
                  numBytes={data.sumOfFileSizesAvailableForDownload}
                  numPackagableFiles={
                    data.numberOfFilesAvailableForDownloadAndEligibleForPackaging
                  }
                  numFiles={data.numberOfFilesAvailableForDownload}
                />
                {refetch && (
                  <AvailableForDownloadTable
                    filesStatistics={data}
                    refetchStatistics={refetch}
                  />
                )}
              </div>
            </div>
          )}
          {data.numberOfFilesAvailableForDownload === 0 && (
            <div className="placeholder">
              <div>Your Download List is currently empty.</div>
            </div>
          )}
        </div>
      )}
      <FullWidthAlert
        show={isShowingDownloadSuccessAlert}
        variant="success"
        title="Package Created"
        description="A package has been created with eligible files. The items contained in this .zip file have been removed from your list. If your package is over 1GB, you will need to create multiple packages."
        autoCloseAfterDelayInSeconds={10}
        onClose={() => {
          setIsShowingDownloadSuccessAlert(false)
        }}
      />
    </div>
  )
}
