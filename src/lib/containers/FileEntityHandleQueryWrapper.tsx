import React, { useEffect } from 'react'
import { FileEntity, Row } from '../utils/synapseTypes'
import { SynapseClient } from '../utils'

export type FileHandleEntityQueryWrapperProps = {
  token?: string
  rows: Row[]
  getFileEntityHandleCallback: Function
}

const FileEntityHandleQueryWrapper: React.FunctionComponent<FileHandleEntityQueryWrapperProps> = (props) => {

  const {token, rows, getFileEntityHandleCallback} = props
  let mounted:boolean = true

  useEffect( () => {
    if (mounted) {
      console.log("emma what are the rows", rows)
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
          // Either returns a failure code or file handle with entity info
          if (fileHandleData.failureCode) {
            return fileHandleData
          }
          return {
            fileEntity: entity,
            fileHandle: fileHandleData.fileHandle,
          }
        } else {
          return reject("getFileHandles: not a file entity")
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