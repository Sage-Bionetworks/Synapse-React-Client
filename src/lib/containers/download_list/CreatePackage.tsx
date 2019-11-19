import React, { useState } from 'react'
import {
  getFileHandleByIdURL,
  getDownloadOrder,
  getBulkFiles,
} from '../../utils/SynapseClient'
import { BulkFileDownloadRequest } from 'lib/utils/jsonResponses/BulkFileDownloadRequest'
import { BulkFileDownloadResponse } from 'lib/utils/jsonResponses/BulkFileDownloadResponse'

export type CreatePackageProps = {
  token: string
}

export const CreatePackage = (props: CreatePackageProps) => {
  const [isLoading, setIsLoading] = useState(false)
  const [zipFileName, setZipFileName] = useState('')
  const { token } = props

  const onClickHandler = async () => {
    setIsLoading(true)
    try {
      const downloadOrder = await getDownloadOrder(zipFileName, token)
      const bulkFileDownloadRequest: BulkFileDownloadRequest = {
        concreteType:
          'org.sagebionetworks.repo.model.file.BulkFileDownloadRequest',
        requestedFiles: downloadOrder.files,
        zipFileName,
      }
      const bulkFileDownloadResponse: BulkFileDownloadResponse = await getBulkFiles(
        bulkFileDownloadRequest,
        token,
      )
      const { resultZipFileHandleId } = bulkFileDownloadResponse
      const url = await getFileHandleByIdURL(resultZipFileHandleId, token)
      window.location.href = url
    } catch (err) {
      console.error('Error on download request', err)
    }
  }

  const onChange = (event: React.SyntheticEvent<HTMLInputElement>) => {
    setZipFileName(event.currentTarget.value)
  }

  return (
    <div>
      {isLoading && <span className="spinner" />}
      <input
        onChange={onChange}
        type="text"
        placeholder="PackageFileName"
      ></input>
      <span>.zip</span>
      <button onClick={onClickHandler}>Create Package</button>
    </div>
  )
}
