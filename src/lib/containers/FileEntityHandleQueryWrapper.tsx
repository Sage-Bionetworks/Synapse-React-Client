import React, { useEffect } from 'react'
import {
  BatchFileRequest,
  FileEntity,
  ExternalFileHandle,
  FileHandleAssociateType,
  FileHandleAssociation,
  Row,
} from '../utils/synapseTypes'
import { S3FileHandle } from '../utils/synapseTypes/CloudProviderFileHandle'
import {
  getEntityResult,
  getFiles,
} from '../utils/SynapseClient'

export type ExternalOrS3FileHandle = ExternalFileHandle | S3FileHandle

interface BaseFileFetchResponse {
  success: boolean
}
interface AuthorizedFileResp extends BaseFileFetchResponse {
  data: {
    fileEntity: FileEntity,
    fileHandle: ExternalOrS3FileHandle
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
      getFileEntityHandle().then((result:any) => {
        getFileEntityHandleCallback(result)
      })
    }
    return () => {
      mounted = false
    }
  }, [token, rows])

  // Get all the row's file handle ids from file entities
  const getFileEntityPromises = async () => {
    return new Promise((resolve, reject) => {
      const fileEntityPromises = rows?.map(async (row, rowIndex) => {
        const entityVersionNumber = row.versionNumber?.toString()
        const rowSynapseId = `syn${row.rowId}`
        return getEntityResult(token, rowSynapseId, entityVersionNumber)
      })
      resolve (fileEntityPromises)
    })
  }

  const getFileEntityHandle = () => {
    return new Promise((resolve, reject) => {
      getFileEntityPromises().then((fileEntityPromises:any) => {
        Promise.all(fileEntityPromises).then(async (entities) => {
          const requestedFiles:FileHandleAssociation[] = entities.map((el: any) => {
            const requestFile:FileHandleAssociation = {
              fileHandleId: el.dataFileHandleId,
              associateObjectId: el.id,
              associateObjectType: FileHandleAssociateType.FileEntity
            }
            return requestFile
          })

          const batchFileRequest: BatchFileRequest = {
            requestedFiles: requestedFiles,
            includeFileHandles: true,
            includePreSignedURLs: false,
            includePreviewPreSignedURLs: false,
          }

          try {
            const batchFileResult = await getFiles(batchFileRequest, token)
            if (batchFileResult.requestedFiles.length) {
              const fileData = batchFileResult.requestedFiles.map((fileHandleData, i) => {
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
                    fileEntity: entities[i],
                    fileHandle: fileHandleData.fileHandle,
                  }
                }
              })
              resolve(fileData)
            } else {
              reject("getFileEntityHandle: No requested file returned.")
            }
          } catch (e) {
            console.log('getFileEntityHandle: Error on getting file handle = ', e)
            reject(e)
          } // end try-catch
        })
      })
    })
  }

  return (
    <></>
  )
}

export default FileEntityHandleQueryWrapper