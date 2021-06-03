import React, {useEffect} from 'react'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faDownload } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link, withRouter, RouteComponentProps } from 'react-router-dom'
import DownloadListTable from './DownloadListTable'
import ReactTooltip from 'react-tooltip'
import { TOOLTIP_DELAY_SHOW } from '../table/SynapseTableConstants'
import { useSynapseContext } from '../../utils/SynapseContext'
import { useErrorHandler } from 'react-error-boundary'
import { toError } from '../../utils/ErrorUtils'
import { FilesStatisticsResponse } from '../../utils/synapseTypes/DownloadListV2/QueryResponseDetails'
import { useGetDownloadListStatistics } from '../../utils/hooks/SynapseAPI/useGetDownloadListStatistics'


library.add(faDownload)

export type ShowDownloadProps = {
  to: string
}

function ShowDownload({ to }: ShowDownloadProps & RouteComponentProps) {
  const { accessToken } = useSynapseContext()
  const handleError = useErrorHandler()
  const idForToolTip = 'SHOW_DOWNLOAD_TOOLTIP'
  const tooltipText = 'Click to view items in your download cart.'

  const {
    data,
    isFetching,
    isError,
    error: newError,
  } = useGetDownloadListStatistics()
  const fileStats:FilesStatisticsResponse = data?.responseDetails as FilesStatisticsResponse
  
  useEffect(() => {
    if (isError && newError) {
      handleError(toError(newError))
    }
  }, [isError, newError, handleError])

  if (!accessToken || isFetching) {
    return <></>
  }
  
  const size = fileStats.totalNumberOfFiles ?? 0
  if (size === 0) {
    return <></>
  }
  const positionClass = to ? 'position-by-anchor' : 'position-by-button'
  const content = (
    <>
      <span id={idForToolTip} data-for={idForToolTip} data-tip={tooltipText}>
        <span className="icon-container">
          <FontAwesomeIcon icon="download" />
        </span>
        <span className={`download-size ${positionClass}`}>{size}</span>
      </span>
      <ReactTooltip
        delayShow={TOOLTIP_DELAY_SHOW}
        place={'bottom'}
        type={'dark'}
        effect={'solid'}
        border={true}
        id={idForToolTip}
      />
    </>
  )

  return to ? (
    <Link className="Download-Link SRC-userImgSmall" to={to}>
      {content}
    </Link>
  ) : (
    <>
      <button
        onClick={() => setShowDownloadModal(true)}
        className="Download-Link"
      >
        {content}
      </button>
      {showDownloadModal && (
        <DownloadListTable
          renderAsModal={true}
          onHide={() => setShowDownloadModal(false)}
        />
      )}
    </>
  )
}

export default withRouter(ShowDownload)
