import { FileHandleAssociateType } from '../../utils/synapseTypes'
import React, { useContext, useEffect, useState } from 'react'
import { SynapseClient } from '../../utils'
import { useInView } from 'react-intersection-observer'
import { SynapseContext } from '../../utils/SynapseContext'

type ImageFileHandleProps = {
  fileHandleId: string
  tableEntityConcreteType: string | undefined
  rowId: string | undefined
  tableId: string | undefined
}
export const ImageFileHandle = (props: ImageFileHandleProps) => {
  const { fileHandleId, tableEntityConcreteType, rowId, tableId } = props
  const { accessToken } = useContext(SynapseContext)
  const [url, setUrl] = useState<string>()
  const { ref, inView } = useInView({
    triggerOnce: true,
    rootMargin: '500px 0px',
  })

  useEffect(() => {
    const getData = async () => {
      const isFileView = tableEntityConcreteType?.includes('EntityView')
      const fileAssociateType: FileHandleAssociateType = isFileView
        ? FileHandleAssociateType.FileEntity
        : FileHandleAssociateType.TableEntity
      const fileAssociateId = isFileView ? rowId : tableId
      if (fileAssociateId && inView) {
        SynapseClient.getActualFileHandleByIdURL(
          fileHandleId,
          accessToken,
          fileAssociateType,
          fileAssociateId,
          false,
        )
          .then(url => {
            setUrl(url)
          })
          .catch(err => {
            console.error('Error on retrieving file handle url ', err)
          })
      }
    }

    getData()
  }, [inView, fileHandleId, rowId, tableId, tableEntityConcreteType, accessToken])

  return (
    <span ref={ref}>
      {url && (
        <img src={url} alt="" className="ImageFileHandle" loading="lazy"></img>
      )}
    </span>
  )
}
