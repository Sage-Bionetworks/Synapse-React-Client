import React, { useState, useEffect } from 'react'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faFile, faDatabase, faClock } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { testDownloadSpeed } from '../../utils/functions/testDownloadSpeed'
import { calculateFriendlyFileSize } from '../../utils/functions/calculateFriendlyFileSize'
import ReactTooltip from 'react-tooltip'
import moment from 'moment'
import { TOOLTIP_DELAY_SHOW } from '../table/SynapseTableConstants'
import { isSignedIn } from '../../utils/SynapseClient'

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

export default function DownloadDetails(props: DownloadDetailsProps) {
  const [state, setState] = useState<State>({
    isLoading: true,
    downloadSpeed: 0,
  })
  const { isLoading, downloadSpeed } = state
  const { numFiles, numBytes } = props

  useEffect(() => {
    if (isSignedIn()) {
      testDownloadSpeed().then(speed => {
        setState({
          isLoading: false,
          downloadSpeed: speed,
        })
      })
    }
  }, [])

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
        {!isInactive && <> {numFiles} &nbsp; files </>}
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
        {calculateFriendlyFileSize(numBytes)}
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
        {isLoading && numFiles > 0 && <span className="spinner" />}
        {!isLoading && friendlyTime}
      </span>
    </span>
  )
}
