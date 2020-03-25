import React from 'react'
import ShowDownload from '../../../lib/containers/download_list/ShowDownload'

const ShowDownloadDemo = ({ token }: { token: string | undefined }) => {
  if (!token) {
    return <p> You need to sign in to for ShowDownload to render </p>
  }
  return (
    <div>
      <ShowDownload token={token} />
    </div>
  )
}
export default ShowDownloadDemo
