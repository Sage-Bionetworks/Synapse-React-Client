import React, { useState, useEffect } from 'react'
import ShowDownload from '../../../lib/containers/download_list/ShowDownload'
import DownloadListTable from 'lib/containers/download_list/DownloadListTable'
import { DOWNLOAD_LIST_CHANGE_EVENT } from 'lib/utils/functions/dispatchDownloadListChangeEvent'
import { Modal } from 'react-bootstrap'

const ShowDownloadDemo = ({ token }: { token: string | undefined }) => {
  const [showDownloadList, setShowDownloadList] = useState(false)
  useEffect(() => {
    const listener = document.addEventListener(
      DOWNLOAD_LIST_CHANGE_EVENT,
      () => {
        setShowDownloadList(true)
      },
    )
    return listener
  })
  if (!token) {
    return <p> You need to sign in to for ShowDownload to render </p>
  }
  return (
    <div>
      <ShowDownload token={token} />
      <Modal
        centered={true}
        animation={false}
        size={'lg'}
        onHide={() => {
          setShowDownloadList(false)
        }}
        show={showDownloadList}
      >
        <DownloadListTable token={token} />
      </Modal>
    </div>
  )
}
export default ShowDownloadDemo
