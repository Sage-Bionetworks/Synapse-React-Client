import React, { useEffect, useState } from 'react'
import { Icon } from './row_renderers/utils'
import {
  FileEntity,
  implementsExternalFileHandleInterface,
} from '../utils/synapseTypes'
import { SynapseClient } from '../utils'

export type DirectFileDownloadProps = {
  token?: string
  associatedObjectId: string
  entityVersionNumber?: string
}

const DirectDownload: React.FunctionComponent<DirectFileDownloadProps> = (props) => {

  const {token, associatedObjectId, entityVersionNumber} = props
  const [isExternalFile, setIsExternalFile] = useState<boolean>(false)
  const [hasFileAccess, setHasFileAccess] = useState<boolean>(false)
  const [fileEntity, setFileEntity] = useState<FileEntity>()
  const [externalURL, setExternalURL] = useState<string>()
  let mounted:boolean = true

  useEffect( () => {
    if (mounted) {
      getFileEntityFileHandle()
    }
    return () => {
      mounted = false
    }
  }, [token])

  const getDownloadLink = () => {
    SynapseClient.getFileResult(
      fileEntity!,
      token,
      false,
      true
    ).then(data => {
      if (data.preSignedURL) {
        window.open(data.preSignedURL)
      }
    }).catch(error => {
      console.log("Fail to get file download link")
    })
  }

  const getFileEntityFileHandle = () => {
    return SynapseClient.getEntity(token, associatedObjectId, entityVersionNumber)
      .then(entity => {
        if (entity.hasOwnProperty('dataFileHandleId')) {
          // looks like a FileEntity, get the FileHandle
          setFileEntity(entity as FileEntity)
          return SynapseClient.getFileResult(
            entity as FileEntity,
            token,
            true,
          ).then((data) => {
            const fh = data.fileHandle
            if (fh && !fh['isPreview']) { // have file access and not file preview
              setHasFileAccess(true)
              if (implementsExternalFileHandleInterface(fh)) {
                setIsExternalFile(true)
                setExternalURL(fh['externalURL'])
              }
            }
          }).catch(err => {
            console.log('Error on getFileEntityFileHandle = ', err)
          })
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
      return <button onClick={getDownloadLink}><Icon type="download"/></button>
    }
    return <></>
  }

  return (
    <span className="SRC-primary-text-color">{getIcon()}</span>
  )
}

export default DirectDownload