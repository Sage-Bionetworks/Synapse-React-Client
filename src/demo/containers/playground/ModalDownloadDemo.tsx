import * as React from 'react'
import ModalDownload from '../../../lib/containers/ModalDownload'
import { QueryBundleRequest } from 'lib/utils/jsonResponses/Table/QueryBundleRequest';

const ModalDownloadDemo = () => {
  return (
    <div className="container">
      <ModalDownload
        queryRequest={{} as QueryBundleRequest}
      />
    </div>
  )
}

export default ModalDownloadDemo