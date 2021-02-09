import { FileHandleAssociateType } from '../../utils/synapseTypes'
import React, { useEffect, useState } from 'react'
import { SynapseClient } from '../../utils'

type ImageFileHandleProps = {
  token: string | undefined
  fileHandleId: string
  tableEntityConcreteType: string | undefined
  rowId: string | undefined
  tableId: string | undefined  
}
export const ImageFileHandle = (props: ImageFileHandleProps) => {
  const {
    token,
    fileHandleId,
    tableEntityConcreteType,
    rowId,
    tableId,    
  } = props

  const [url, setUrl] = useState<string>()

  useEffect(() => {
    const getData = async () => {
      const isFileView = tableEntityConcreteType?.includes('EntityView')
      const fileAssociateType: FileHandleAssociateType = isFileView
        ? FileHandleAssociateType.FileEntity
        : FileHandleAssociateType.TableEntity
      const fileAssociateId = isFileView ? rowId : tableId
      if (fileAssociateId) {
        SynapseClient.getActualFileHandleByIdURL(
          fileHandleId,
          token,
          fileAssociateType,
          fileAssociateId,
          false,
        ).then(url => {
          setUrl(url)
        })
        .catch(err => {
          console.error('Error on retrieving file handle url ', err)
        })
      }
      
      
    }

    getData()
  }, [fileHandleId, rowId, tableId, tableEntityConcreteType, token])


  if (!url) {
    // still loading
    return <></>
  }
  return (
    <img
      src={url}
      alt=''
      className='ImageFileHandle'
    >      
    </img>
  )
}
