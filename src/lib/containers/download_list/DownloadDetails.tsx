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
  numBytes?: number
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
  const { numFiles, numBytes } = props
  const { accessToken } = useSynapseContext()

  const [state, setState] = useState<State>({
    isLoading: !!numBytes, // figure out the estimated download time iff we were given a byte count
    downloadSpeed: 0,
  })
  const { isLoading, downloadSpeed } = state

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
    isLoading || downloadSpeed === 0 || !numBytes ? 0 : numBytes / downloadSpeed
  const isTimeEstimateLoading = timeEstimateInSeconds === 0
  const friendlyTime = isTimeEstimateLoading
    ? ''
    : moment.duration(timeEstimateInSeconds, 'seconds').humanize()
  const numBytesTooltipId = 'num_bytes_id'
  const friendlyTimeTooltipId = 'friendly_time_id'

  const isZeroFiles = numFiles === 0
  const fileCountIconClass = isZeroFiles
    ? 'SRC-inactive'
    : 'SRC-primary-text-color'

  const timeEstimateIconClass = isTimeEstimateLoading
    ? 'SRC-inactive'
    : 'SRC-primary-text-color'
  return (
    <span className="download-details-container">
      <span>
        <FontAwesomeIcon className={fileCountIconClass} icon="file" />
        {isZeroFiles ? (
          <SkeletonInlineBlock width={50} />
        ) : (
          <> {numFiles}&nbsp;files </>
        )}
      </span>
      {numBytes && (
        <span
          data-for={numBytesTooltipId}
          data-tip="This is the total size of all files. Zipped package(s) will likely be smaller."
          data-testid="numBytesUI"
        >
          <ReactTooltip
            delayShow={TOOLTIP_DELAY_SHOW}
            place="top"
            type="dark"
            effect="solid"
            id={numBytesTooltipId}
          />
          <FontAwesomeIcon className={timeEstimateIconClass} icon="database" />
          {isTimeEstimateLoading ? (
            <SkeletonInlineBlock width={50} />
          ) : (
            calculateFriendlyFileSize(numBytes)
          )}
        </span>
      )}
      {numBytes && (
        <span
          data-for={friendlyTimeTooltipId}
          data-tip="This is an estimate of how long package download will take."
          data-testid="downloadTimeEstimateUI"
        >
          <ReactTooltip
            delayShow={TOOLTIP_DELAY_SHOW}
            place="top"
            type="dark"
            effect="solid"
            id={friendlyTimeTooltipId}
          />
          <FontAwesomeIcon className={timeEstimateIconClass} icon="clock" />
          {isLoading && numFiles > 0 ? (
            <SkeletonInlineBlock width={50} />
          ) : (
            friendlyTime
          )}
        </span>
      )}
    </span>
  )
}
