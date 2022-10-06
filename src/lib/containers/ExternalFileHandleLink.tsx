import React, { useEffect, useState } from 'react'
import {
  BatchFileRequest,
  FileHandleAssociateType,
  FileEntity,
  ExternalFileHandle,
  isExternalFileHandle,
  isFileEntity,
} from '../utils/synapseTypes'
import { SynapseClient } from '../utils/'
import { OpenInNewTwoTone } from '@material-ui/icons'
import { useSynapseContext } from '../utils/SynapseContext'

export type ExternalFileHandleLinkProps = {
  synId: string
  className?: string
}

export const ExternalFileHandleLink = (props: ExternalFileHandleLinkProps) => {
  const { accessToken } = useSynapseContext()
  const { synId, className } = props
  const [data, setData] = useState<
    | { fileEntity: FileEntity; externalFileHandle: ExternalFileHandle }
    | undefined
  >(undefined)
  useEffect(() => {
    const getEntity = async () => {
      try {
        const fileEntity = await SynapseClient.getEntity<FileEntity>(
          accessToken,
          synId,
        )
        if (!isFileEntity(fileEntity)) {
          throw new Error(`File Entity expected but found ${fileEntity}`)
        }
        const batchFileRequest: BatchFileRequest = {
          requestedFiles: [
            {
              associateObjectId: synId,
              associateObjectType: FileHandleAssociateType.FileEntity,
              fileHandleId: fileEntity.dataFileHandleId,
            },
          ],
          includeFileHandles: true,
          includePreSignedURLs: false,
          includePreviewPreSignedURLs: false,
        }
        const file = await SynapseClient.getFiles(batchFileRequest, accessToken)
        const externalFileHandle = file.requestedFiles[0].fileHandle
        if (externalFileHandle && isExternalFileHandle(externalFileHandle)) {
          setData({
            externalFileHandle,
            fileEntity,
          })
        } else {
          throw new Error(
            'Not an external file handle: ' + externalFileHandle?.id,
          )
        }
      } catch (e) {
        console.error('Error on getting external file handle = ', e)
      }
    }
    getEntity()
  }, [synId, accessToken])

  const externalFileHandle = data?.externalFileHandle
  const fileEntity = data?.fileEntity

  return externalFileHandle ? (
    <a
      href={externalFileHandle.externalURL}
      className={className}
      target="_blank"
      rel="noopener noreferrer"
    >
      <span>
        {fileEntity?.name}
        <OpenInNewTwoTone style={{ marginLeft: 5 }} />
      </span>
    </a>
  ) : (
    <></>
  )
}
