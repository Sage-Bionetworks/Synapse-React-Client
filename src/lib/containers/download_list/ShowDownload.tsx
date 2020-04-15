import React, { useEffect, useState } from 'react'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faDownload } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link, withRouter, RouteComponentProps } from 'react-router-dom'
import { SynapseClient } from '../../utils'
import { DownloadList } from '../../utils/synapseTypes'
import { DOWNLOAD_LIST_CHANGE_EVENT } from '../../utils/functions/dispatchDownloadListChangeEvent'
import DownloadListTable from './DownloadListTable'
import ReactTooltip from 'react-tooltip'
import { TOOLTIP_DELAY_SHOW } from '../table/SynapseTableConstants'

library.add(faDownload)

export type ShowDownloadProps = {
  token?: string
  to?: string
}

function ShowDownload({ token, to }: ShowDownloadProps & RouteComponentProps) {
  const [downloadList, setDownloadList] = useState<DownloadList | undefined>(
    undefined,
  )
  const [showDownloadModal, setShowDownloadModal] = useState(true)
  const idForToolTip = 'SHOW_DOWNLOAD_TOOLTIP'
  const tooltipText = 'Click to view items in your download list.'
  useEffect(() => {
    if (!token) {
      return
    }
    const updateDownloadList = async (
      event?: CustomEventInit<DownloadList>,
    ) => {
      if (event?.detail) {
        setDownloadList(event.detail)
      } else {
        // for initialization
        SynapseClient.getDownloadList(token).then((downloadList) => {
          setDownloadList(downloadList)
        })
      }
    }
    updateDownloadList()
    document.addEventListener(DOWNLOAD_LIST_CHANGE_EVENT, updateDownloadList)
    return () => {
      document.removeEventListener(
        DOWNLOAD_LIST_CHANGE_EVENT,
        updateDownloadList,
      )
    }
  }, [token])

  if (!token) {
    return <></>
  }
  const size = downloadList?.filesToDownload.length ?? 0
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
          token={token}
          renderAsModal={true}
          onHide={() => setShowDownloadModal(false)}
        />
      )}
    </>
  )
}

export default withRouter(ShowDownload)
