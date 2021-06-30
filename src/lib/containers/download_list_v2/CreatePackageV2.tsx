import React, { useState } from 'react'
import {
  Button,
  Alert,
  AlertProps,
} from 'react-bootstrap'
import {
  createPackageFromDownloadListV2,
  getFileHandleByIdURL,
} from '../../utils/SynapseClient'
import { useSynapseContext } from '../../utils/SynapseContext'
import { DownloadListPackageResponse } from '../../utils/synapseTypes/DownloadListV2/DownloadListPackageResponse'

export type CreatePackageV2Props = {
  onPackageCreation: (zipFileUrl: string) => void
}

type AlertConfig = {
  message: string
  variant: AlertProps['variant']
  className: string | undefined
}

export const TEMPLATE_ERROR_FILE_NAME =
  'Please provide a package file name and try again.'

export const CreatePackageV2 = (props: CreatePackageV2Props) => {
  const { accessToken } = useSynapseContext()
  const [isLoading, setIsLoading] = useState(false)
  const [fileName, setZipFileName] = useState('')
  const [alert, setAlert] = useState<AlertConfig>({
    message: '',
    className: undefined,
    variant: undefined,
  })
  const [bulkFileDownloadResponse, setBulkFileDownloadResponse] = useState<
    DownloadListPackageResponse | undefined
  >(undefined)
  const { onPackageCreation } = props

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
      const { resultFileHandleId } = currentBulkFileDownloadResponse
      try {
        const url = await getFileHandleByIdURL(resultFileHandleId, accessToken)
        //reset
        setZipFileName('')
        setBulkFileDownloadResponse(undefined)
        onPackageCreation(url)
      } catch (err) {
        console.error('Err on getFileHandleByIdURL = ', err)
      }
  
    } catch (err) {
      setAlert({
        message: err.reason as string,
        variant: 'danger',
        className: undefined,
      })
    } finally {
      setIsLoading(false)
    }
  }

  const onChange = (event: React.SyntheticEvent<HTMLInputElement>) => {
    setZipFileName(event.currentTarget.value)
  }

  return (
    <>
      <div className="CreatePackageV2 bootstrap-4-backport">
        <span className="createPackageTitle">
          Create your Download Package
        </span>
        {!isLoading && !bulkFileDownloadResponse && <div className="inputAndCreateButton">
          <input
            onChange={onChange}
            type="text"
            placeholder="PackageName"
            style={{width:'233px'}}
          ></input>
          <span className="zipUI">.zip</span>
          <Button
            variant={fileName ? 'primary' : 'dark'}
            onClick={createPackageHandler}
            type="button"
            style={{ marginLeft: 20 }}
            disabled={ fileName ? false : true}
          >
            Create Package
          </Button>
        </div>}
        {isLoading && (
          <div className="creatingPackage">
            <span className="spinner" />
            <span style={{ marginLeft: 5 }}>
              Creating package...
            </span>
          </div>
        )}
      </div>
      {alert.message && (
        <Alert
          transition={false}
          variant={alert.variant}
          show={true}
          className={alert.className}
        >
          {alert.message}
        </Alert>
      )}
    </>
  )
}
