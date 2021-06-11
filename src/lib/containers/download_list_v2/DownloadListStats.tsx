import React, { useEffect } from 'react'
import { useErrorHandler } from 'react-error-boundary'
import { toError } from '../../utils/ErrorUtils'
import { FilesStatisticsResponse } from '../../utils/synapseTypes/DownloadListV2/QueryResponseDetails'
import { SynapseSpinner } from '../LoadingScreen'
import { useGetDownloadListStatistics } from '../../utils/hooks/SynapseAPI/useGetDownloadListStatistics'
import DownloadDetails from './DownloadDetails'

export default function DownloadListStats() {
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
    <>
      {!isError && !isFetching && (
        <div>
            <DownloadDetails
              numFiles={fileStats.numberOfFilesAvailableForDownload}
              numBytes={fileStats.sumOfFileSizesAvailableForDownload}
            ></DownloadDetails>
          {
          // also have access to fileStats.numberOfFilesRequiringAction 
          // and fileStats.totalNumberOfFiles
          }
        </div>
      )}
      {isFetching && (
        <div className="EntityFinderDetailsView__Placeholder">
          <SynapseSpinner size={30} />
        </div>
      )}
    </>
  )
}
