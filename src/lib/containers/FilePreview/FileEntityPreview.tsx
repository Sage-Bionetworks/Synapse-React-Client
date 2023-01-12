import React from 'react'
import {
  EntityBundle,
  isFileEntity,
  FileHandleAssociateType,
  implementsCloudProviderFileHandleInterface,
} from '../../utils/synapseTypes'
import FileHandleContentRenderer from './FileHandleContentRenderer'
import { PreviewRendererType } from './PreviewRendererType'
import {
  getOriginalFileHandleRenderer,
  getPreviewFileHandleRenderer,
} from './PreviewUtils'
import { useSynapseContext } from '../../utils/SynapseContext'
import { Alert } from 'react-bootstrap'
import { SignInPrompt } from '../error/ErrorBanner'

export type FileEntityPreviewProps = {
  /** An entity bundle containing a FileEntity, and its fileHandles */
  bundle: EntityBundle
}

/**
 * Given an entity bundle that contains a FileEntity, render a preview of the file. The rendered preview will be determined based on the
 * content type and file name of the file handle(s) associated with the FileEntity.
 * @param props
 */
export default function FileEntityPreview(props: FileEntityPreviewProps) {
  const { bundle } = props
  const { accessToken } = useSynapseContext()
  const isLoggedIn = !!accessToken

  if (!isFileEntity(bundle.entity)) {
    throw new Error(`Entity ${bundle.entity.id!} is not a FileEntity`)
  }

  /**
   * The dataFileHandle and the previewFileHandle may not have the same contentType.
   *
   * For example, ZIP files are assigned a CSV preview listing the ZIP file contents.
   */
  const dataFileHandleId = bundle.entity.dataFileHandleId
  const dataFileHandle = bundle.fileHandles.find(
    fh => fh.id === dataFileHandleId,
  )

  if (!dataFileHandle && !isLoggedIn) {
    // We may be previewing a file handle that the anonymous user cannot see. Prompt the user to log in.
    return (
      <Alert
        dismissible={false}
        show={true}
        variant={'danger'}
        transition={false}
      >
        <SignInPrompt />
      </Alert>
    )
  }

  // If we can render the original file, do so:
  if (dataFileHandle) {
    const previewType = getOriginalFileHandleRenderer(dataFileHandle)
    if (previewType !== PreviewRendererType.NONE) {
      return (
        <FileHandleContentRenderer
          fileHandle={dataFileHandle}
          fileHandleAssociation={{
            fileHandleId: dataFileHandleId,
            associateObjectId: bundle.entity.id!,
            associateObjectType: FileHandleAssociateType.FileEntity,
          }}
          previewType={previewType}
        />
      )
    }
  }

  // Otherwise, see if we can render the preview file handle that Synapse created
  const previewFileHandle = bundle.fileHandles.find(
    fh => implementsCloudProviderFileHandleInterface(fh) && fh.isPreview,
  )

  if (previewFileHandle && dataFileHandle) {
    const previewType = getPreviewFileHandleRenderer(
      previewFileHandle,
      dataFileHandle,
    )
    if (previewType !== PreviewRendererType.NONE) {
      return (
        <FileHandleContentRenderer
          fileHandle={previewFileHandle}
          fileHandleAssociation={{
            fileHandleId: previewFileHandle.id,
            associateObjectId: bundle.entity.id!,
            associateObjectType: FileHandleAssociateType.FileEntity,
          }}
          previewType={previewType}
        />
      )
    }
  }

  // We can't render the file, so throw an Error so the ErrorBoundary will show an alert.
  throw new Error(`Could not render a preview for entity: ${bundle.entity.id!}`)
}
