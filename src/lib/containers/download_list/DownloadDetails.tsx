import React, { useState, useEffect } from 'react'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faFile, faDatabase, faClock } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { testDownloadSpeed } from '../../utils/functions/testDownloadSpeed'
import { calculateFriendlyFileSize } from '../../utils/functions/calculateFriendlyFileSize'
import ReactTooltip from 'react-tooltip'
import moment from 'moment'
import { TOOLTIP_DELAY_SHOW } from '../table/SynapseTableConstants'
import { useSynapseContext } from '../../utils/SynapseContext'
import { SkeletonInlineBlock } from '../../assets/skeletons/SkeletonInlineBlock'

library.add(faFile)
library.add(faDatabase)
library.add(faClock)

export type DownloadDetailsProps = {
  numFiles: number
  numBytes: number
}

type State = {
  isLoading: boolean
  downloadSpeed: number
}

/**
 * Displays download information including number of files, size of download, and time to download.
 * Prefer to use {@link download_list_v2/DownloadDetails} instead, particularly when you have information about file packaging in/eligibility
 * @param props
 * @returns
 */
export default function DownloadDetails(props: DownloadDetailsProps) {
  const [state, setState] = useState<State>({
    isLoading: true,
    downloadSpeed: 0,
  })
  const { accessToken } = useSynapseContext()
  const { isLoading, downloadSpeed } = state
  const { numFiles, numBytes } = props

  useEffect(() => {
    if (accessToken) {
      testDownloadSpeed(accessToken).then(speed => {
        setState({
          isLoading: false,
          downloadSpeed: speed,
        })
      })
    }
  }, [accessToken])

  const timeEstimateInSeconds =
    isLoading || downloadSpeed === 0 ? 0 : numBytes / downloadSpeed
  const friendlyTime =
    timeEstimateInSeconds === 0
      ? ''
      : moment.duration(timeEstimateInSeconds, 'seconds').humanize()
  const numBytesTooltipId = 'num_bytes_id'
  const friendlyTimeTooltipId = 'friendly_time_id'
  const isInactive = numFiles === 0 || timeEstimateInSeconds === 0
  const iconClassName = isInactive ? 'SRC-inactive' : 'SRC-primary-text-color'
  return (
    <span className="download-details-container">
      <span>
        <FontAwesomeIcon className={iconClassName} icon="file" />
        {isInactive ? (
          <SkeletonInlineBlock width={50} />
        ) : (
          <> {numFiles}&nbsp;files </>
        )}
      </span>
      <span
        data-for={numBytesTooltipId}
        data-tip="This is the total size of all files. Zipped package(s) will likely be smaller."
      >
        <ReactTooltip
          delayShow={TOOLTIP_DELAY_SHOW}
          place="top"
          type="dark"
          effect="solid"
          id={numBytesTooltipId}
        />
        <FontAwesomeIcon className={iconClassName} icon="database" />
        {isInactive ? (
          <SkeletonInlineBlock width={50} />
        ) : (
          calculateFriendlyFileSize(numBytes)
        )}
      </span>
      <span
        data-for={friendlyTimeTooltipId}
        data-tip="This is an estimate of how long package download will take."
      >
        <ReactTooltip
          delayShow={TOOLTIP_DELAY_SHOW}
          place="top"
          type="dark"
          effect="solid"
          id={friendlyTimeTooltipId}
        />
        <FontAwesomeIcon className={iconClassName} icon="clock" />
        {isLoading && numFiles > 0 ? (
          <SkeletonInlineBlock width={50} />
        ) : (
          friendlyTime
        )}
      </span>
    </span>
  )
}
