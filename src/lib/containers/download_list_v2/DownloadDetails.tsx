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
  const numIneligibleFiles = numFiles - numPackagableFiles
  const numBytesTooltipId = 'num_bytes_id'
  const isInactive = numFiles === 0
  const iconClassName = isInactive ? 'SRC-inactive' : 'SRC-primary-text-color'
  return (
    <span className="DownloadDetailsV2">
      <span className="item">
        {!isInactive && <> {numFiles} Files </>}
      </span>
      <span className="item">
        <span className={iconClassName}>
          <IconSvg options={{ icon: 'packagableFile' }} />
        </span>
        {!isInactive && <> {numPackagableFiles} Files eligible for packaging </>}
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
        {calculateFriendlyFileSize(numBytes)}
      </span>}
      {numIneligibleFiles > 0 && <span className="item">
        <span className={`SRC-warning-color`}>
          <IconSvg options={{ icon: 'warningOutlined' }} />
        </span>
        {!isInactive && <> {numIneligibleFiles} Files ineligible for packaging </>}
      </span>}
    </span>
  )
}
