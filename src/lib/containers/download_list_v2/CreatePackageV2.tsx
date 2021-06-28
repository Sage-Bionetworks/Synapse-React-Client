import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faCheck,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import * as ReactBoostrap from 'react-bootstrap'
import {
  createPackageFromDownloadListV2,
  getFileHandleByIdURL,
} from '../../utils/SynapseClient'
import { useSynapseContext } from '../../utils/SynapseContext'
import { DownloadListPackageResponse } from '../../utils/synapseTypes/DownloadListV2/DownloadListPackageResponse'

library.add(faCheck)

export type CreatePackageV2Props = {
  updateDownloadList: () => void
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

export const CreatePackageV2 = (props: CreatePackageV2Props) => {
  const { accessToken } = useSynapseContext()
  const [isLoading, setIsLoading] = useState(false)
  const [fileName, setZipFileName] = useState('')
  const [alert, setAlert] = useState<Alert>({
    message: '',
    className: undefined,
    variant: undefined,
  })
  const [bulkFileDownloadResponse, setBulkFileDownloadResponse] = useState<
    DownloadListPackageResponse | undefined
  >(undefined)
  const { updateDownloadList } = props

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
      const currentBulkFileDownloadResponse = await createPackageFromDownloadListV2(
        fileNameWithZipExtension,
        accessToken,
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
    const { resultFileHandleId } = bulkFileDownloadResponse!
    try {
      setAlert({
        message: 'Downloaded',
        className: '',
        variant: 'primary',
      })
      const url = await getFileHandleByIdURL(resultFileHandleId, accessToken)
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
        <div>
          {isLoading && (
            <span className="SRC-centerContentInline">
              <span className="spinner" />
              <span style={{ marginLeft: 5 }}>
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
                  Create Package
                </ReactBoostrap.Button>
              </>
            )}
            {bulkFileDownloadResponse && (
              <>
                <div className="package-created">
                  <FontAwesomeIcon icon="check" color="green" />
                  <span>
                    Package created! Ready for download.
                  </span>
                </div>
                <ReactBoostrap.Button
                  variant="primary"
                  className="pill-xl"
                  onClick={downloadPackageHandler}
                >
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
