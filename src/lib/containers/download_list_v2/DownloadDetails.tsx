import React from 'react'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faFile, faDatabase } from '@fortawesome/free-solid-svg-icons'
import { calculateFriendlyFileSize } from '../../utils/functions/calculateFriendlyFileSize'
import ReactTooltip from 'react-tooltip'
import { TOOLTIP_DELAY_SHOW } from '../table/SynapseTableConstants'
import IconSvg from '../IconSvg'

library.add(faFile)
library.add(faDatabase)

export type DownloadDetailsProps = {
  numFiles: number
  numPackagableFiles: number
  numBytes: number
}

export default function DownloadDetails(props: DownloadDetailsProps) {
  const { numFiles, numPackagableFiles, numBytes } = props

  const numBytesTooltipId = 'num_bytes_id'
  const isInactive = numFiles === 0
  const iconClassName = isInactive ? 'SRC-inactive' : 'SRC-primary-text-color'
  return (
    <span className="DownloadDetailsV2">
      <span className="item">
        <span className={iconClassName}>
          <IconSvg options={{ icon: 'file' }} />
        </span>
        {!isInactive && <> {numFiles} files </>}
      </span>
      <span className="item">
        <span className={iconClassName}>
          <IconSvg options={{ icon: 'packagableFile' }} />
        </span>
        {!isInactive && <> {numPackagableFiles} files eligible for packaging </>}
      </span>
      {numBytes > 0 && <span
        data-for={numBytesTooltipId}
        data-tip="This is the total size of all files in the Download Cart that are available to download."
        className="item"
      >
        <ReactTooltip
          delayShow={TOOLTIP_DELAY_SHOW}
          place="top"
          type="dark"
          effect="solid"
          id={numBytesTooltipId}
        />
        <span className={iconClassName}>
          <IconSvg options={{ icon: 'data' }} />
        </span>
        {calculateFriendlyFileSize(numBytes)}
      </span>}
    </span>
  )
}
