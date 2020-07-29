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
  token?: string
  className?: string
}

export const ExternalFileHandleLink = (props: ExternalFileHandleLinkProps) => {
  const { synId, token, className } = props
  const [file, setFile] = useState<ExternalFileHandle | undefined>(undefined)
  useEffect(() => {
    const getEntity = async () => {
      try {
        const entity = await SynapseClient.getEntity<FileEntity>(token, synId)
        assertIsFileEntity(entity)
        const batchFileRequest: BatchFileRequest = {
          requestedFiles: [
            {
              associateObjectId: synId,
              associateObjectType: FileHandleAssociateType.FileEntity,
              fileHandleId: entity.dataFileHandleId,
            },
          ],
          includeFileHandles: true,
          includePreSignedURLs: false,
          includePreviewPreSignedURLs: false,
        }
        const file = await SynapseClient.getFiles(batchFileRequest, token)
        const externalFileHandle = file.requestedFiles[0].fileHandle
        assertIsExternalFileHandle(externalFileHandle)
        setFile(externalFileHandle)
      } catch (e) {
        console.error('Error on getting external file handle = ', e)
      }
    }
    getEntity()
  }, [synId, token])

  return file ? (
    <a href={file.externalURL} className={className} target="_blank">
      <span>
        {file?.fileName}
        <FontAwesomeIcon style={{ marginLeft: 5 }} icon="external-link-alt" />
      </span>
    </a>
  ) : (
    <></>
  )
}
