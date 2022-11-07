import {
  BatchFileRequest,
  BatchFileResult,
  FileHandleAssociation,
} from '../../utils/synapseTypes'
import React, { useEffect, useState } from 'react'
import { SynapseConstants, SynapseClient } from '../../utils'
import { useSynapseContext } from '../../utils/SynapseContext'
import IconSvg from '../IconSvg'

type FileHandleLinkProps = {
  fileHandleAssociation: FileHandleAssociation
  redirect?: boolean
  showDownloadIcon: boolean
  displayValue?: string
}
export const FileHandleLink = (props: FileHandleLinkProps) => {
  const {
    fileHandleAssociation,
    showDownloadIcon,
    redirect = false,
    displayValue,
  } = props
  const { accessToken } = useSynapseContext()

  const [batchFileResult, setBatchFileResult] = useState<
    BatchFileResult | undefined
  >()

  useEffect(() => {
    if (displayValue === undefined) {
      const getFiles = async () => {
        const batchFileRequest: BatchFileRequest = {
          requestedFiles: [fileHandleAssociation],
          includeFileHandles: true,
          includePreSignedURLs: false,
          includePreviewPreSignedURLs: false,
        }
        setBatchFileResult(
          await SynapseClient.getFiles(batchFileRequest, accessToken),
        )
      }
      getFiles()
    }
  }, [accessToken, displayValue, fileHandleAssociation])

  let fileName = undefined
  if (batchFileResult) {
    fileName = batchFileResult.requestedFiles[0].fileHandle?.fileName
  }

  return (
    <button
      onClick={() => {
        if (accessToken && fileHandleAssociation) {
          SynapseClient.getActualFileHandleByIdURL(
            fileHandleAssociation.fileHandleId,
            accessToken,
            fileHandleAssociation.associateObjectType,
            fileHandleAssociation.associateObjectId,
            redirect,
          )
            .then(url => {
              window.open(url, '_blank')
            })
            .catch(err => {
              console.error('Error on retrieving file handle url ', err)
            })
        }
      }}
      className={`SRC-primary-text-color ${SynapseConstants.SRC_SIGN_IN_CLASS}`}
      type="button"
      style={{ padding: 0 }}
    >
      {displayValue ?? fileName ?? fileHandleAssociation.fileHandleId}
      {showDownloadIcon && <IconSvg icon="download" />}
    </button>
  )
}
