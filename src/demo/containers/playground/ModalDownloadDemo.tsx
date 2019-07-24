import * as React from 'react'
import ModalDownload from '../../../lib/containers/ModalDownload'

const ModalDownloadDemo = () => {
  return (
    <div className="container">
      <ModalDownload
        sql={'SELECT * from syn18941147'}
        entityId={'syn18941147'}
        onClose={() => {console.log('was closed')}}
      />
    </div>
  )
}

export default ModalDownloadDemo