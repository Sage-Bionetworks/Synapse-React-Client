import React from 'react'
import ShowDownload from '../../../lib/containers/download_list/ShowDownload'
import { isSignedIn } from '../../../lib/utils/SynapseClient'

const ShowDownloadDemo = () => {
  if (!isSignedIn()) {
    return <p> You need to sign in to for ShowDownload to render </p>
  }
  return (
    <div>
      <ShowDownload />
    </div>
  )
}
export default ShowDownloadDemo
