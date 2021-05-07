import React, { useEffect, useState } from 'react'
import {
  BatchFileRequest,
  FileHandleAssociateType,
  FileEntity,
  ExternalFileHandle,
  assertIsExternalFileHandle,
  assertIsFileEntity,
} from '../utils/synapseTypes'
import { SynapseClient } from '../utils/'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

library.add(faExternalLinkAlt)

export type ExternalFileHandleLinkProps = {
  synId: string
  className?: string
}

export const ExternalFileHandleLink = (props: ExternalFileHandleLinkProps) => {
  const { synId, className } = props
  const [data, setData] = useState<
    | { fileEntity: FileEntity; externalFileHandle: ExternalFileHandle }
    | undefined
  >(undefined)
  useEffect(() => {
    const getEntity = async () => {
      try {
        const fileEntity = await SynapseClient.getEntity<FileEntity>(synId)
        assertIsFileEntity(fileEntity)
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
        const file = await SynapseClient.getFiles(batchFileRequest)
        const externalFileHandle = file.requestedFiles[0].fileHandle
        assertIsExternalFileHandle(externalFileHandle)
        setData({
          externalFileHandle,
          fileEntity,
        })
      } catch (e) {
        console.error('Error on getting external file handle = ', e)
      }
    }
    getEntity()
  }, [synId])

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
        <FontAwesomeIcon style={{ marginLeft: 5 }} icon="external-link-alt" />
      </span>
    </a>
  ) : (
    <></>
  )
}
