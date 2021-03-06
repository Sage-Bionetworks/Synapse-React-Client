import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faCheck,
  faDownload,
  faFolder,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import * as ReactBoostrap from 'react-bootstrap'
import {
  getBulkFiles,
  getDownloadOrder,
  getFileHandleByIdURL,
} from '../../utils/SynapseClient'
import {
  BulkFileDownloadRequest,
  BulkFileDownloadResponse,
  FileDownloadStatus,
  ZipFileFormat,
} from '../../utils/synapseTypes/'

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

export const TEMPLATE_DOWNLOAD_MESSAGE =
  'files were downloaded and removed from the list.'
export const TEMPLATE_ERROR_FILE_NAME =
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
    event.preventDefault()
    if (!fileName) {
      setAlert({
        message: TEMPLATE_ERROR_FILE_NAME,
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
      const currentBulkFileDownloadResponse: BulkFileDownloadResponse = await getBulkFiles(
        bulkFileDownloadRequest,
        token,
      )
      setBulkFileDownloadResponse(currentBulkFileDownloadResponse)
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
        message: `${numfilesDownloaded} ${TEMPLATE_DOWNLOAD_MESSAGE}`,
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
          transition={false}
          variant={alert.variant}
          show={true}
          className={alert.className}
        >
          {alert.message}
        </ReactBoostrap.Alert>
      )}
      <div className="create-package-container bootstrap-4-backport">
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
                <ReactBoostrap.Button
                  variant="primary"
                  className="pill-xl"
                  onClick={createPackageHandler}
                  type="button"
                >
                  <FontAwesomeIcon icon="folder" />
                  Create Package
                </ReactBoostrap.Button>
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
                <ReactBoostrap.Button
                  variant="primary"
                  className="pill-xl"
                  onClick={downloadPackageHandler}
                >
                  <FontAwesomeIcon icon="download" color="white" />
                  Download Package
                </ReactBoostrap.Button>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  )
}
