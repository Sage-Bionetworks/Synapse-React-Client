import React from 'react'
import DownloadDetails from './DownloadDetails'

export type DownloadListStatsProps = {
  numFiles: number
  numBytes: number
}

export default function DownloadListStats(props: DownloadListStatsProps) {
  const { numFiles, numBytes } = props
  
  return (
    <div>
        <DownloadDetails
          numFiles={numFiles}
          numBytes={numBytes}
        ></DownloadDetails>
      {
      // also have access to fileStats.numberOfFilesRequiringAction 
      // and fileStats.totalNumberOfFiles
      }
    </div>
  )
}
