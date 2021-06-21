import React, { useEffect } from 'react'
import { useErrorHandler } from 'react-error-boundary'
import { toError } from '../../utils/ErrorUtils'
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
  useEffect(() => {
    if (isError && newError) {
      handleError(toError(newError))
    }
  }, [isError, newError, handleError])

  return (
    <>
      {!isError && !isFetching && data && (
        <div>
            <DownloadDetails
              numFiles={data.numberOfFilesAvailableForDownload}
              numBytes={data.sumOfFileSizesAvailableForDownload}
            ></DownloadDetails>
          {
          // also have access to fileStats.numberOfFilesRequiringAction 
          // and fileStats.totalNumberOfFiles
          }
        </div>
      )}
      {isFetching && (
        <div className="placeholder">
          <SynapseSpinner size={30} />
        </div>
      )}
    </>
  )
}
