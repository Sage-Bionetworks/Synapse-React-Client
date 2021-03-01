import React, { useEffect, useState } from 'react'
import { Icon } from './row_renderers/utils'
import {
  BatchFileRequest,
  FileEntity,
  FileHandle,
  FileHandleAssociateType,
  FileHandleAssociation,
  implementsExternalFileHandleInterface,
} from '../utils/synapseTypes'
import {
  getFiles,
  getFileResult,
  getEntity
} from '../utils/SynapseClient'
import IconSvg from './IconSvg'

export type DirectFileDownloadProps = {
  token?: string
  associatedObjectId: string
  entityVersionNumber?: string
  associatedObjectType?: FileHandleAssociateType
  fileHandleId?: string
  displayFileName?: boolean
}

const DirectDownload: React.FunctionComponent<DirectFileDownloadProps> = (props) => {

  const {token, associatedObjectId, entityVersionNumber, associatedObjectType, fileHandleId, displayFileName} = props
  const [isExternalFile, setIsExternalFile] = useState<boolean>(false)
  const [hasFileAccess, setHasFileAccess] = useState<boolean>(false)
  const [fileEntity, setFileEntity] = useState<FileEntity>()
  const [externalURL, setExternalURL] = useState<string>()
  const [fileName, setFileName] = useState<string>("")
  let mounted:boolean = true

  useEffect( () => {
    if (mounted) {
      getFileEntityFileHandle()
    }
    return () => {
      mounted = false
    }
  }, [token])

  const getDownloadLink = async () => {
    let preSignedURL
    try {
      if (associatedObjectType === FileHandleAssociateType.TableEntity) {
        const files = await getTableEntityFileHandle()
        preSignedURL = files.requestedFiles[0].preSignedURL!
      } else {
        const file = await getFileResult(
          fileEntity!,
          token,
          false,
          true
        )
        preSignedURL = file.preSignedURL
      }
    } catch (e) {
      console.log("Fail to get file download link: ", e)
    }

    if (!preSignedURL) {
      console.log("Fail to get file download link")
    }
    window.open(preSignedURL)
  }

  const hasFileHandle = (fh:FileHandle) => {
    if (fh && !fh['isPreview']) {
      setHasFileAccess(true)
      return true
    } else {
      setHasFileAccess(false)
      return false
    }
  }

  const getTableEntityFileHandle = () => {
    const fileHandleAssociationList: FileHandleAssociation[] = [
      {
        associateObjectId: associatedObjectId!,
        associateObjectType: associatedObjectType!,
        fileHandleId: fileHandleId!,
      },
    ]
    const batchFileRequest: BatchFileRequest = {
      includeFileHandles: true,
      includePreSignedURLs: true,
      includePreviewPreSignedURLs: false,
      requestedFiles: fileHandleAssociationList,
    }
    return getFiles(batchFileRequest, token)
  }

  const getFileEntityFileHandle = () => {
    return getEntity(token, associatedObjectId, entityVersionNumber)
      .then( async (entity) => {

        // From file view
        if (entity.hasOwnProperty('dataFileHandleId')) {
          // looks like a FileEntity, get the FileHandle
          setFileEntity(entity as FileEntity)
          return getFileResult(   // TODO: Why can we just use getFiles here?
            entity as FileEntity,
            token,
            true,
          ).then((data) => {
            const fh = data.fileHandle
            if (fh && hasFileHandle(fh)) { // have file access and not file preview
              if (implementsExternalFileHandleInterface(fh)) {
                setIsExternalFile(true)
                setExternalURL(fh['externalURL'])
              }
            }
          }).catch(err => {
            console.log('Error on getFileEntityFileHandle = ', err)
          })
        } else if (associatedObjectType === FileHandleAssociateType.TableEntity) {
          const files = await getTableEntityFileHandle()
          const fh: FileHandle = files.requestedFiles[0].fileHandle!
          if (displayFileName && fh && hasFileHandle(fh)) {
            setFileName(fh.fileName)
          }
        }

        return Promise.resolve()

      }).catch(err => {
        console.log('Error on getEntity = ', err)
      })
  }

  const getIcon = () => {
    if (isExternalFile) {
      return <a rel="noreferrer" href={externalURL} target="_blank"><Icon type="externallink" /></a>
    }
    if (hasFileAccess) {
      return <button onClick={getDownloadLink}>
        <IconSvg options={{icon: "download"}} />{displayFileName && fileName? fileName : ""}
      </button>
    }
    return <></>
  }

  return (
    <span className="SRC-primary-text-color">{getIcon()}</span>
  )
}

export default DirectDownload