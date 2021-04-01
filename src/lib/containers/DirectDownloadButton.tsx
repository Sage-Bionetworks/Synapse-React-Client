import React, { useEffect } from 'react'
import { Button } from 'react-bootstrap'
import { BatchFileRequest, FileHandleAssociateType } from '../utils/synapseTypes'
import { getFiles } from '../utils/SynapseClient'

export type DirectFileDownloadButtonProps = {
  id?: string
  token?: string
  associatedObjectId: string | undefined
  associateObjectType: FileHandleAssociateType | undefined
  fileHandleId: string | undefined
  fileName: string | undefined
  className?: string
  variant?: string  // This allows you to change the look of the button (see react bootstrap doc)
}

const DirectDownloadButton: React.FC<DirectFileDownloadButtonProps> = props => {

  const {id, token, associatedObjectId, associateObjectType, fileHandleId, className, variant, fileName}  = props
  let mounted:boolean = true

  useEffect( () => {
    if (mounted) {
      //
    }
    return () => {
      mounted = false
    }
  }, [token])

  const getDownloadLink = async () => {
    if (!fileHandleId) return

    const batchFileRequest:BatchFileRequest = {
      requestedFiles: [{
        associateObjectId: associatedObjectId!,
        associateObjectType: associateObjectType!,
        fileHandleId: fileHandleId!,
      }],
      includePreSignedURLs: true,
      includeFileHandles: true,
      includePreviewPreSignedURLs: false
    }
    try {
      // TODO: Check permission
      const file = await getFiles(batchFileRequest, token)
      const preSignedURL = file.requestedFiles[0].preSignedURL
      if (!preSignedURL) {
        console.log("Fail to get file download link")
      } else {
        window.open(preSignedURL)
      }
    } catch (e) {
      console.log("Fail to get file download link", e)
    }
  }

  return (<>
    <Button
      id={id}
      variant={variant}
      className={className}
      onClick={(e) => getDownloadLink()}>
      {fileName}
    </Button>
  </>)
}

export default DirectDownloadButton