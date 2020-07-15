import { FileHandleAssociateType } from '../../utils/synapseTypes'
import React from 'react'
import { SynapseConstants, SynapseClient } from '../../utils'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

type FileHandleLinkProps = {
  token: string | undefined
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
    token,
    fileHandleId,
    showDownloadIcon,
    tableEntityConcreteType,
    rowId,
    tableId,
    redirect = false,
    displayValue,
  } = props

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
        if (token && fileAssociateId) {
          SynapseClient.getActualFileHandleByIdURL(
            fileHandleId,
            token,
            fileAssociateType,
            fileAssociateId,
            redirect,
          )
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
