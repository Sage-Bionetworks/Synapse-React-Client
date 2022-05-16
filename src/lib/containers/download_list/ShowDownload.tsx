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
import { useSynapseContext } from '../../utils/SynapseContext'

library.add(faDownload)

export type ShowDownloadProps = {
  to?: string
}

/**
 * Nav toolbar UI to show how many files are in the Web-based Download List.
 *
 * @deprecated Moving to using the new Download List Services instead.  http://rest-docs.synapse.org/rest/#org.sagebionetworks.repo.web.controller.DownloadListController
 */
function ShowDownload({ to }: ShowDownloadProps & RouteComponentProps) {
  const { accessToken } = useSynapseContext()
  const [downloadList, setDownloadList] = useState<DownloadList | undefined>(
    undefined,
  )
  const [showDownloadModal, setShowDownloadModal] = useState(false)
  const idForToolTip = 'SHOW_DOWNLOAD_TOOLTIP'
  const tooltipText = 'Click to view items in your download list.'

  useEffect(() => {
    if (!accessToken) {
      return
    }
    const updateDownloadList = async (
      event?: CustomEventInit<DownloadList>,
    ) => {
      if (event?.detail) {
        setDownloadList(event.detail)
      } else {
        // for initialization
        SynapseClient.getDownloadList(accessToken).then(downloadList => {
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
  }, [accessToken])

  if (!accessToken) {
    return <></>
  }
  const size = downloadList?.filesToDownload.length ?? 0
  if (size === 0 && !showDownloadModal) {
    // close only if the download modal is already closed too
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
