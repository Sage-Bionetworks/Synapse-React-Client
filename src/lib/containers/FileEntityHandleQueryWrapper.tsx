import React, { useEffect } from 'react'
import { FileEntity, FileHandle, Row } from '../utils/synapseTypes'
import { SynapseClient } from '../utils'

interface BaseFileFetchResponse {
  success: boolean
}
interface AuthorizedFileResp extends BaseFileFetchResponse {
  data: {
    fileEntity: FileEntity,
    fileHandle: FileHandle
  }
}
interface UnauthorizedFileResp extends BaseFileFetchResponse {
  message: string
}

export type FileFetchResponse = AuthorizedFileResp | UnauthorizedFileResp

export type FileHandleEntityQueryWrapperProps = {
  token?: string
  rows: Row[]
  getFileEntityHandleCallback: Function // this is the callback function to save the file handle result in the parent component
}

const FileEntityHandleQueryWrapper: React.FunctionComponent<FileHandleEntityQueryWrapperProps> = (props) => {

  const {token, rows, getFileEntityHandleCallback} = props
  let mounted:boolean = true

  useEffect( () => {
    if (mounted) {
      getFileEntityHandle().then((filePromises:any) => {
        Promise.all(filePromises).then((result) =>{
          getFileEntityHandleCallback(result)
        })
      })
    }
    return () => {
      mounted = false
    }
  }, [token, rows])

  const getFileEntityHandle = () => {
    return new Promise((resolve, reject) => {
      const fileHandlePromises = rows?.map(async (row, rowIndex) => {
        const entityVersionNumber = row.versionNumber?.toString()
        const rowSynapseId = `syn${row.rowId}`
        const entity = await SynapseClient.getEntityResult(token, rowSynapseId, entityVersionNumber)

        if (entity.hasOwnProperty('dataFileHandleId')) {
          // looks like a FileEntity, get the FileHandle
          const fileHandleData = await SynapseClient.getFileResult(
            entity as FileEntity,
            token,
            true,
          )
          // If not file handle, return the failure object
          if (fileHandleData.failureCode) {
            return {
              success: false,
              message: fileHandleData.failureCode
            }
          }
          // else, return file entity and file handle information
          return {
            success: true,
            data: {
              fileEntity: entity,
              fileHandle: fileHandleData.fileHandle,
            }
          }
        } else {
          return reject({
            success: false,
            message: "getFileHandles: not a file entity"
          })
        }
      })
      resolve (fileHandlePromises)
    })
  }

  return (
    <></>
  )
}

export default FileEntityHandleQueryWrapper