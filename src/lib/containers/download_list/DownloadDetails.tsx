import React, { useState, useEffect } from 'react'
import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faFile,
  faDatabase,
  faUserTimes,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import calculateFriendlyFileSize from '../calculateFriendlyFileSize'
import { testDownloadSpeed } from 'lib/utils/DownloadSpeedTest'

library.add(faFile)
library.add(faDatabase)
library.add(faUserTimes)

export type DownloadDetailsProps = {
  numFiles: number
  numBytes: number
  backgroundColor: string
  token: string | undefined
}

export default function DownloadDetails(props: DownloadDetailsProps) {
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [downloadSpeed, setDownloadSpeed] = useState<number>(0)
  const { token, numFiles, numBytes } = props

  useEffect(() => {
    if (isLoading) {
      token &&
        testDownloadSpeed(token).then(speed => {
          setDownloadSpeed(speed)
          setIsLoading(false)
        })
    }
  })

  const timeEstimateInSeconds =
    isLoading || downloadSpeed === 0 ? 0 : numBytes / downloadSpeed
  const date = new Date()
  date.setSeconds(timeEstimateInSeconds)
  const friendlyTime = date.toISOString()
  return (
    <span className="SRC-centerContentInline">
      <FontAwesomeIcon icon="file" />
      {numFiles}
      files
      <FontAwesomeIcon icon="database" />
      {numBytes}
      {calculateFriendlyFileSize(numBytes)}
      <FontAwesomeIcon icon="user-times" />
      {isLoading && <span className="loader" />}
      {!isLoading && friendlyTime}
    </span>
  )
}
