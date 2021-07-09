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
import { Checkbox } from '../widgets/Checkbox'

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
  const [isIncludingManifest, setIsIncludingManifest] = useState(true)
  const [progressPercent, setProgressPercent] = useState<number>(20)
  const [isOnCreatePackagePage, setIsOnCreatePackagePage] = useState(false)
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
    setProgressPercent(80)
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
        setProgressPercent(20)
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
    setProgressPercent(event.currentTarget.value ? 60: 40)
  }

  return (
    <>
      <div className="CreatePackageV2 bootstrap-4-backport">
        <div
          className="page-progress-percent SRC-primary-background-color"
          style={{
            width: `${progressPercent}%`,
          }}
        />
        {!isOnCreatePackagePage && <div className="createManifestStep">
          <span className="createManifestTitle">
            Would you like to include file metadata in your download?
          </span>
          <Checkbox
            label="Include the metadata for all files on your Download List"
            id="includeMetadata"
            checked={isIncludingManifest}
            onChange={() => setIsIncludingManifest(!isIncludingManifest)}
          >
            <div />
          </Checkbox>
          <Button
              variant='primary'
              onClick={() => {
                setIsOnCreatePackagePage(true)
                setProgressPercent(50)
              }}
              type="button"
            >
              Next
            </Button>
        </div>}
        {isOnCreatePackagePage && <div className="createPackageStep">
          <span className="createPackageTitle">
            Create your Download Package
          </span>
          <span className="createPackageDescription">
            Name your download package and select Download Package to get started.
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
              Download Package
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
        </div>}
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
