import React, { useEffect, useState } from 'react'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faDownload } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link, withRouter, RouteComponentProps } from 'react-router-dom'
import { SynapseClient } from '../../utils'
import { DownloadList } from '../../utils/synapseTypes'
import {
  DOWNLOAD_LIST_CHANGE_EVENT,
  dispatchDownloadListChangeEvent,
} from '../../utils/functions/dispatchDownloadListChangeEvent'

library.add(faDownload)

export type ShowDownloadProps = {
  token?: string
  to?: string
}

function ShowDownload({ token, to }: ShowDownloadProps & RouteComponentProps) {
  const [downloadList, setDownloadList] = useState<DownloadList | undefined>(
    undefined,
  )
  useEffect(() => {
    if (!token) {
      return
    }
    const updateDownloadList = async (
      event?: CustomEventInit<DownloadList>,
    ) => {
      if (event) {
        setDownloadList(event.detail)
      } else {
        SynapseClient.getDownloadList(token).then(downloadList => {
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
  const positionClass = to ? 'position-by-anchor' : 'position-by-button'
  const content = (
    <>
      <span className="icon-container">
        <FontAwesomeIcon icon="download" />
      </span>
      <span className={`download-size ${positionClass}`}>{size}</span>
    </>
  )
  return to ? (
    <Link className="Download-Link SRC-userImgSmall" to={to}>
      {content}
    </Link>
  ) : (
    <button
      onClick={() => dispatchDownloadListChangeEvent(downloadList)}
      className="Download-Link"
    >
      {content}
    </button>
  )
}

export default withRouter(ShowDownload)
