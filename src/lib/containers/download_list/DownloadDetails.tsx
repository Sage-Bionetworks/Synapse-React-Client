import './DownloadList.scss'

import React, { useState, useEffect } from 'react'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faFile, faDatabase, faClock } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {calculateFriendlyFileSize} from '../../utils/UtilityFns'
import { testDownloadSpeed } from '../../utils/DownloadSpeedTest'
import ReactTooltip from 'react-tooltip'
import moment from 'moment'
import { TOOLTIP_DELAY_SHOW } from '../table/SynapseTableConstants'

library.add(faFile)
library.add(faDatabase)
library.add(faClock)

export type DownloadDetailsProps = {
  numFiles: number
  numBytes: number
  token: string | undefined
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
  const { token, numFiles, numBytes } = props

  useEffect(() => {
    if (isLoading) {
      token &&
        testDownloadSpeed(token).then(speed => {
          setState({
            isLoading: false,
            downloadSpeed: speed,
          })
        })
    }
  })

  const timeEstimateInSeconds =
    isLoading || downloadSpeed === 0 ? 0 : numBytes / downloadSpeed
  const friendlyTime =
    timeEstimateInSeconds === 0
      ? ''
      : moment.duration(timeEstimateInSeconds, 'seconds').humanize()
  const numBytesTooltipId = 'num_bytes_id'
  const friendlyTimeTooltipId = 'friendly_time_id'
  const iconClassName =
    numFiles === 0 ? 'SRC-inactive' : 'SRC-primary-text-color'
  return (
    <span className="download-details-container">
      <span>
        <FontAwesomeIcon className={iconClassName} icon="file" />
        {numFiles > 0 && <> {numFiles} &nbsp; files </>}
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
        {isLoading && <span className="loader" />}
        {!isLoading && friendlyTime}
      </span>
    </span>
  )
}
