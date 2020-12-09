import React, { useEffect, useState } from 'react'
import { Icon } from './row_renderers/utils'
import {
  FileEntity,
  FileHandle,
  implementsExternalFileHandleInterface,
} from '../utils/synapseTypes'
import { SynapseClient } from '../utils'
// import { FileFetchResponse } from './table/SynapseTable'

export type DirectFileDownloadProps = {
  token?: string
  fileDataPromises?: any
  rowIndex: number
  associatedObjectId: string
  entityVersionNumber?: string
  fileEntityHandleArray?: FileFetchResponse[]
}

export type AuthorizedFileRespType = {
  fileEntity: FileEntity,
  fileHandle: FileHandle
}

export type UnauthorizedFileRespType = {
  fileHandleId: string,
  failureCode: string
}

export type FileFetchResponse = AuthorizedFileRespType & UnauthorizedFileRespType

const DirectDownload: React.FunctionComponent<DirectFileDownloadProps> = (props) => {

  const {token, fileDataPromises, rowIndex, fileEntityHandleArray} = props
  // const {token, rowIndex, fileEntityHandleArray} = props
  const [isExternalFile, setIsExternalFile] = useState<boolean>(false)
  const [hasFileAccess, setHasFileAccess] = useState<boolean>(false)
  const [fileEntity, setFileEntity] = useState<FileEntity>()
  const [externalURL, setExternalURL] = useState<string>()
  let mounted:boolean = true

  useEffect( () => {
    if (mounted) {
      console.log("do we have file entity?", fileEntityHandleArray)
      fileDataPromises.then((value:any) => {
        return value[rowIndex]
      }).then((file:FileFetchResponse) => {
        if (file.failureCode) {
          console.log("Error fetching file data: ", file.failureCode)
        } else {
          const { fileEntity, fileHandle } = file
          setFileEntity(fileEntity)
          if (fileHandle && !fileHandle.isPreview) { // have file access and not file preview
            setHasFileAccess(true)
            if (implementsExternalFileHandleInterface(fileHandle)) {
              setIsExternalFile(true)
              setExternalURL(fileHandle.externalURL)
            }
          }
        }
      })
    }
    return () => {
      mounted = false
    }
  }, [token, fileEntityHandleArray])

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