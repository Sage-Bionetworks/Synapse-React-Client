import { FileHandleAssociateType } from '../../utils/synapseTypes'
import React from 'react'
import { SynapseConstants, SynapseClient } from '../../utils'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useSynapseContext } from '../../utils/SynapseContext'

type FileHandleLinkProps = {
  fileHandleId: string
  redirect?: boolean
  showDownloadIcon: boolean
  tableEntityConcreteType: string | undefined
  rowId: string | undefined
  tableId: string | undefined
  displayValue: string | undefined
}
export const FileHandleLink = (props: FileHandleLinkProps) => {
  const {
    fileHandleId,
    showDownloadIcon,
    tableEntityConcreteType,
    rowId,
    tableId,
    redirect = false,
    displayValue,
  } = props
  const { accessToken } = useSynapseContext()
  if (!tableEntityConcreteType) {
    // still loading
    return <></>
  }
  const isFileView = tableEntityConcreteType.includes('EntityView')
  const fileAssociateType: FileHandleAssociateType = isFileView
    ? FileHandleAssociateType.FileEntity
    : FileHandleAssociateType.TableEntity
  const fileAssociateId = isFileView ? rowId : tableId
  return (
    <button
      // @ts-ignore
      onClick={() => {
        if (accessToken && fileAssociateId) {
          SynapseClient.getActualFileHandleByIdURL(
            fileHandleId,
            accessToken,
            fileAssociateType,
            fileAssociateId,
            redirect,
          )
            .then(url => {
              window.open(url, '_blank')
            })
            .catch(err => {
              console.error('Error on retrieving file handle url ', err)
            })
        }
      }}
      className={`SRC-primary-text-color ${SynapseConstants.SRC_SIGN_IN_CLASS}`}
      type="button"
      style={{ padding: 0 }}
    >
      {displayValue ?? fileHandleId}
      {showDownloadIcon && (
        <FontAwesomeIcon style={{ marginLeft: 5 }} icon="download" />
      )}
    </button>
  )
}
