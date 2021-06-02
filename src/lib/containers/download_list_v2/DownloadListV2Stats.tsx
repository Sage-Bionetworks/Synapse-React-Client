import React, { useEffect } from 'react'
import { useErrorHandler } from 'react-error-boundary'
import { toError } from '../../utils/ErrorUtils'
import { calculateFriendlyFileSize } from '../../utils/functions/calculateFriendlyFileSize'
import { FilesStatisticsResponse } from '../../utils/synapseTypes/DownloadListV2/QueryResponseDetails'
import { SynapseSpinner } from '../LoadingScreen'
import { useGetDownloadListStatistics } from '../../utils/hooks/SynapseAPI/useGetDownloadListStatistics'

export type DownloadListV2StatsProps = {}

export default function DownloadListV2Stats(props: DownloadListV2StatsProps) {
  const handleError = useErrorHandler()
  const {
    data,
    isFetching,
    isError,
    error: newError,
  } = useGetDownloadListStatistics()
  console.log(`data=${data}`)
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
          <p>numberOfFilesAvailableForDownload: {fileStats.numberOfFilesAvailableForDownload}</p>
          <p>numberOfFilesRequiringAction: {fileStats.numberOfFilesRequiringAction}</p>
          <p>sumOfFileSizesAvailableForDownload: {calculateFriendlyFileSize(fileStats.sumOfFileSizesAvailableForDownload)}</p>
          <p>totalNumberOfFiles: {fileStats.totalNumberOfFiles}</p>
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
