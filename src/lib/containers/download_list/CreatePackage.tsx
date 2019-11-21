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
import * as ReactBoostrap from 'react-bootstrap'
import { FileDownloadStatus } from '../../utils/jsonResponses/FileDownloadSummary'

library.add(faCheck)
library.add(faDownload)
library.add(faFolder)

export type CreatePackageProps = {
  token?: string
  children?: JSX.Element
  updateDownloadList: Function
}

type Alert = {
  message: string
  variant: ReactBoostrap.AlertProps['variant']
  className: string | undefined
}

export const templateDownload =
  'files were downloaded and removed from the list.'
export const templateErrorFileName =
  'Please provide a package file name and try again.'

export const CreatePackage = (props: CreatePackageProps) => {
  const [isLoading, setIsLoading] = useState(false)
  const [fileName, setZipFileName] = useState('')
  const [alert, setAlert] = useState<Alert>({
    message: '',
    className: undefined,
    variant: undefined,
  })
  const [bulkFileDownloadResponse, setBulkFileDownloadResponse] = useState<
    BulkFileDownloadResponse | undefined
  >(undefined)
  const { token, children, updateDownloadList } = props

  const createPackageHandler = async (event: React.SyntheticEvent) => {
    event && event.preventDefault()
    if (!fileName) {
      setAlert({
        message: templateErrorFileName,
        variant: 'danger',
        className: undefined,
      })
      return
    }
    setAlert({ message: '', variant: undefined, className: undefined })
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
      setAlert({
        message: err.reason,
        variant: 'danger',
        className: undefined,
      })
    } finally {
      setIsLoading(false)
    }
  }

  const downloadPackageHandler = async () => {
    const { resultZipFileHandleId, fileSummary } = bulkFileDownloadResponse!
    try {
      const numfilesDownloaded = fileSummary.filter(
        el => el.status === FileDownloadStatus.SUCCESS,
      ).length
      setAlert({
        message: `${numfilesDownloaded} ${templateDownload}`,
        className: 'SRC-primary-background-color SRC-whiteText',
        variant: undefined,
      })
      const url = await getFileHandleByIdURL(resultZipFileHandleId, token)
      window.location.href = url
      updateDownloadList()
      setBulkFileDownloadResponse(undefined)
    } catch (err) {
      console.error('Err on getFileHandleByIdURL = ', err)
    }
  }

  const onChange = (event: React.SyntheticEvent<HTMLInputElement>) => {
    setZipFileName(event.currentTarget.value)
  }

  return (
    <>
      {alert.message && (
        <ReactBoostrap.Alert
          transition={'div'}
          variant={alert.variant}
          show={true}
          className={alert.className}
        >
          {alert.message}
        </ReactBoostrap.Alert>
      )}
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
          <div className="SRC-split">
            {!isLoading && !bulkFileDownloadResponse && (
              <>
                <form onSubmit={createPackageHandler}>
                  <input
                    onChange={onChange}
                    type="text"
                    placeholder="PackageFileName"
                  ></input>
                  <span className="zip-extension SRC-boldText">.zip</span>
                </form>
                <button
                  className="SRC-standard-button-shape SRC-primary-button action-button"
                  onClick={createPackageHandler}
                  type="button"
                >
                  <FontAwesomeIcon icon="folder" />
                  Create Package
                </button>
              </>
            )}
            {bulkFileDownloadResponse && (
              <>
                <div className="package-created">
                  <FontAwesomeIcon icon="check" color="green" />
                  <span className="create-package-text">
                    Package created! Ready for download.
                  </span>
                </div>
                <button
                  className="SRC-standard-button-shape SRC-primary-button action-button"
                  onClick={downloadPackageHandler}
                >
                  <FontAwesomeIcon icon="download" color="white" />
                  Download Package
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  )
}
