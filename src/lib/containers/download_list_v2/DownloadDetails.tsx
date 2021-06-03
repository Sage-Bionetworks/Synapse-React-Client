import React from 'react'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faFile, faDatabase } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { calculateFriendlyFileSize } from '../../utils/functions/calculateFriendlyFileSize'
import ReactTooltip from 'react-tooltip'
import { TOOLTIP_DELAY_SHOW } from '../table/SynapseTableConstants'

library.add(faFile)
library.add(faDatabase)

export type DownloadDetailsProps = {
  numFiles: number
  numBytes: number
}

export default function DownloadDetails(props: DownloadDetailsProps) {
  const { numFiles, numBytes } = props

  const numBytesTooltipId = 'num_bytes_id'
  const isInactive = numFiles === 0
  const iconClassName = isInactive ? 'SRC-inactive' : 'SRC-primary-text-color'
  return (
    <span className="DownloadDetailsV2">
      <span className="item">
        <FontAwesomeIcon className={iconClassName} icon="file" />
        {!isInactive && <> {numFiles} files </>}
      </span>
      <span
        data-for={numBytesTooltipId}
        data-tip="This is the total size of all files."
        className="item"
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
    </span>
  )
}
