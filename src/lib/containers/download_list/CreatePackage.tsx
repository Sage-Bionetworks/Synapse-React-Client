import React, { useState } from 'react'
import {
  getFileHandleByIdURL,
  getDownloadOrder,
  getBulkFiles,
} from '../../utils/SynapseClient'
import {
  BulkFileDownloadRequest,
  ZipFileFormat,
} from '../../utils/jsonResponses/BulkFileDownloadRequest'
import { BulkFileDownloadResponse } from '../../utils/jsonResponses/BulkFileDownloadResponse'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faCheck,
  faDownload,
  faFolder,
} from '@fortawesome/free-solid-svg-icons'

library.add(faCheck)
library.add(faDownload)
library.add(faFolder)

export type CreatePackageProps = {
  token?: string
  children?: JSX.Element
}

export const CreatePackage = (props: CreatePackageProps) => {
  const [isLoading, setIsLoading] = useState(false)
  const [fileName, setZipFileName] = useState('')
  const [bulkFileDownloadResponse, setBulkFileDownloadResponse] = useState<
    BulkFileDownloadResponse | undefined
  >(undefined)
  const { token, children } = props

  const createPackageHandler = async () => {
    setIsLoading(true)
    try {
      const fileNameWithZipExtension = `${fileName}.zip`
      const downloadOrder = await getDownloadOrder(
        fileNameWithZipExtension,
        token,
      )
      const bulkFileDownloadRequest: BulkFileDownloadRequest = {
        concreteType:
          'org.sagebionetworks.repo.model.file.BulkFileDownloadRequest',
        requestedFiles: downloadOrder.files,
        zipFileName: fileNameWithZipExtension,
        zipFileFormat: ZipFileFormat.Flat,
      }
      const bulkFileDownloadResponse: BulkFileDownloadResponse = await getBulkFiles(
        bulkFileDownloadRequest,
        token,
      )
      setBulkFileDownloadResponse(bulkFileDownloadResponse)
    } catch (err) {
      console.error('Error on download request', err)
    } finally {
      setIsLoading(false)
    }
  }

  const downloadPackageHandler = async () => {
    const { resultZipFileHandleId } = bulkFileDownloadResponse!
    try {
      const url = await getFileHandleByIdURL(resultZipFileHandleId, token)
      window.location.href = url
    } catch (err) {
      console.error('Err on getFileHandleByIdURL = ', err)
    }
  }

  const onChange = (event: React.SyntheticEvent<HTMLInputElement>) => {
    setZipFileName(event.currentTarget.value)
  }

  return (
    <div className="create-package-container">
      {children}
      <div>
        {isLoading && (
          <span className="SRC-centerContentInline">
            <span className="spinner" />
            <span style={{ marginLeft: 5 }} className="create-package-text">
              Creating package...
            </span>
          </span>
        )}
        {!isLoading && !bulkFileDownloadResponse && (
          <div className="SRC-split">
            <section>
              <input
                onChange={onChange}
                type="text"
                placeholder="PackageFileName"
              ></input>
              <span className="zip-extension SRC-boldText">.zip</span>
            </section>
            <button
              className="SRC-standard-button-shape SRC-primary-button"
              id="create-package-btn"
              onClick={createPackageHandler}
            >
              <FontAwesomeIcon icon="folder" />
              Create Package
            </button>
          </div>
        )}
        {bulkFileDownloadResponse && (
          <div className="SRC-split">
            <section>
              <FontAwesomeIcon icon="check" color="green" />
              <span className="create-package-text">
                Package created! Ready for download.
              </span>
            </section>
            <button
              className="SRC-standard-button-shape SRC-primary-button"
              id="create-package-btn"
              onClick={downloadPackageHandler}
            >
              <FontAwesomeIcon icon="download" color="white" />
              Download Package
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
