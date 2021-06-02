import React from 'react'
import ShowDownload from '../../../lib/containers/download_list/ShowDownload'
import { useSynapseContext } from '../../../lib/utils/SynapseContext'

const ShowDownloadDemo = () => {
  const { accessToken } = useSynapseContext()
  if (!accessToken) {
    return <p> You need to sign in to for ShowDownload to render </p>
  }
  return (
    <div>
      <ShowDownload />
    </div>
  )
}
export default ShowDownloadDemo
