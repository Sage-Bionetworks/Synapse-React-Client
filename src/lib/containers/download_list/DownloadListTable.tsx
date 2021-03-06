import { library } from '@fortawesome/fontawesome-svg-core'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import moment from 'moment'
import React, { useEffect, useState, useCallback } from 'react'
import * as ReactBootstrap from 'react-bootstrap'
import { calculateFriendlyFileSize } from '../../utils/functions/calculateFriendlyFileSize'
import useGetInfoFromIds from '../../utils/hooks/useGetInfoFromIds'
import {
  deleteDownloadList,
  deleteDownloadListFiles,
  getDownloadList,
  getEntityHeaders,
  getFiles,
} from '../../utils/SynapseClient'
import {
  BatchFileRequest,
  BatchFileResult,
  DownloadList,
  EntityHeader,
  FileHandleAssociateType,
  FileHandleAssociation,
  PaginatedResults,
  Reference,
  UserProfile,
} from '../../utils/synapseTypes'
import HasAccess, {
  getDownloadTypeForFileHandle,
  FileHandleDownloadTypeEnum,
} from '../HasAccess'
import UserCard from '../UserCard'
import { CreatePackage } from './CreatePackage'
import DownloadDetails from './DownloadDetails'
import AccessRequirementList, {
  AccessRequirementListProps,
} from '../access_requirement_list/AccessRequirementList'

import {
  faSortAmountDown,
  faSortAmountUp,
} from '@fortawesome/free-solid-svg-icons'

library.add(faTrash)

type DownloadListTableData = {
  references?: PaginatedResults<EntityHeader>
  batchFileResult?: BatchFileResult
  downloadList?: DownloadList
}

type LoadingState = boolean
export type DownloadListTableProps = {
  token?: string
  listUpdatedCallback?: VoidFunction
  forceSamePage?: boolean
  renderAsModal?: boolean
  onHide?: Function
}

export const TESTING_TRASH_BTN_CLASS = 'TESTING_TRASH_BTN_CLASS'
export const TESTING_CLEAR_BTN_CLASS = 'TESTING_CLEAR_BTN_CLASS'

export default function DownloadListTable(props: DownloadListTableProps) {
  // https://reactjs.org/docs/hooks-faq.html#should-i-use-one-or-many-state-variables
  const [data, setData] = useState<DownloadListTableData>({
    references: undefined,
    batchFileResult: undefined,
    downloadList: undefined,
  })

  type SortedColumn = {
    column: string
    isDescending: boolean
  }

  const [sortedColumn, setSortedColumn] = useState<SortedColumn>({
    column: '',
    isDescending: false,
  })

  const [arPropsFromHasAccess, set_arPropsFromHasAccess] = useState<
    AccessRequirementListProps | undefined
  >()
  // https://reactjs.org/docs/hooks-faq.html#should-i-use-one-or-many-state-variables
  const [isLoading, setIsLoading] = useState<LoadingState>(true)
  const [fileBeingDeleted, setFileBeingDeleted] = useState<string>('')
  const { token } = props
  const {
    forceSamePage = false,
    renderAsModal = false,
    onHide,
    listUpdatedCallback,
  } = props
  const { references, batchFileResult, downloadList } = data
  const requestedFiles =
    (batchFileResult && batchFileResult.requestedFiles) || []
  // Get owner ids from download list by filtering to items that have a file handle
  // then map to ownerIds
  const ownerIdsFromHeaders = references?.results
    .filter(el => el.createdBy)
    .map(el => el.createdBy)
  const ownerIdsFromFileHandles = requestedFiles
    .filter(el => el.fileHandle?.createdBy !== undefined)
    .map(el => el.fileHandle!.createdBy)

  const ownerIds: string[] = []
  if (ownerIdsFromFileHandles) {
    ownerIds.push(...ownerIdsFromFileHandles)
  }
  if (ownerIdsFromHeaders) {
    ownerIds.push(...ownerIdsFromHeaders)
  }
  // use bang operator because filter function guarentee's that file handle will be defined
  const userProfiles = useGetInfoFromIds<UserProfile>({
    ids: ownerIds,
    token,
    type: 'USER_PROFILE',
  })

  const fetchData = useCallback(async () => {
    if (!token) {
      setIsLoading(false)
      // doesn't make sense with anonymous user!
      return
    }
    try {
      setIsLoading(true)
      const currentDownloadList: DownloadList = await getDownloadList(token)
      const { filesToDownload: currentFilesToDownload } = currentDownloadList
      if (currentFilesToDownload.length === 0) {
        setData({
          downloadList: currentDownloadList,
        })
        return
      }
      const batchFileRequest: BatchFileRequest = {
        requestedFiles: currentFilesToDownload,
        includeFileHandles: true,
        includePreSignedURLs: false,
        includePreviewPreSignedURLs: false,
      }
      // batch file result gives FilesHandle for the files the user can download
      // which has additional metadata - createdBy, numBytes, etc.
      const currentBatchFileResult:BatchFileResult = await getFiles(batchFileRequest, token)

      // Only make entity header calls to the files that the user doesn't have access to,
      // which can be determined by whether the batchFileResult has a failure code for the
      // corresponding download list item
      const referenceCall: Reference[] = currentFilesToDownload
        .filter(el => {
          return (
            currentBatchFileResult.requestedFiles.find(
              batchFile => batchFile.fileHandleId === el.fileHandleId,
            )!.failureCode !== undefined
          )
        })
        .map(el => {
          return { targetId: el.associateObjectId }
        })
      // entity header is used to get the names of the files that the user
      // doesn't have access to
      const currentReferences = await getEntityHeaders(referenceCall, token)
      setData({
        references: currentReferences,
        batchFileResult: currentBatchFileResult,
        downloadList: currentDownloadList,
      })
    } catch (e) {
      console.error('Error in DownloadList API call : ', e)
    } finally {
      setIsLoading(false)
    }
  }, [token])

  useEffect(() => {
    fetchData()
  }, [fetchData])

  const clearDownloadList = async (
    _event: React.SyntheticEvent<HTMLButtonElement>,
  ) => {
    setIsLoading(true)
    try {
      await deleteDownloadList(token)
      setData({
        downloadList: undefined,
      })
      listUpdatedCallback?.()
    } catch (err) {
      console.error('Error on clearing download list: ', err)
    } finally {
      setIsLoading(false)
    }
  }

  const deleteFileFromList = async (
    fileHandleId: string,
    associateObjectId: string,
  ) => {
    const list: FileHandleAssociation[] = [
      {
        fileHandleId,
        associateObjectId,
        associateObjectType: FileHandleAssociateType.FileEntity,
      },
    ]
    setIsLoading(true)

    setFileBeingDeleted(fileHandleId)
    try {
      const currentDownloadList:DownloadList = await deleteDownloadListFiles(list, token)
      // The current references and batchFileResult can be kept because the download
      // list drives the view, so the stale values in those two won't be viewed.
      setData({ downloadList: currentDownloadList, references, batchFileResult })
      listUpdatedCallback?.()
    } catch (err) {
      console.error('Error on delete from download list', err)
    } finally {
      setFileBeingDeleted('')
      setIsLoading(false)
    }
  }

  const sortColumn = async (column: string) => {
    try {
      setIsLoading(true)

      const isDescending =
        column === sortedColumn.column ? !sortedColumn.isDescending : false

      setSortedColumn({
        column,
        isDescending,
      })

      const currentFilesToDownload:FileHandleAssociation[] = downloadList?.filesToDownload ?? []

      currentFilesToDownload.sort((itemA, itemB) => {
        return sortDownLoadList(itemA, itemB, column, isDescending)
      })
      setData({
        ...data,
        downloadList,
      })
      listUpdatedCallback?.()
    } catch (err) {
      console.error(err)
    } finally {
      setIsLoading(false)
    }
  }
  const getFileHandleInfo = (item: FileHandleAssociation) => {
    const fileResult = requestedFiles.find(
      fileRes => fileRes.fileHandleId === item.fileHandleId,
    )
    const fileHandle = fileResult ? fileResult.fileHandle : undefined

    let fileName: string | undefined = ''
    let createdBy: string | undefined = ''
    let createdOn: string | undefined = ''
    let contentSize: number | undefined = undefined

    if (fileHandle && item) {
      fileName = fileHandle.fileName
      createdBy = fileHandle.createdBy
      createdOn = fileHandle.createdOn
      contentSize = fileHandle.contentSize
    } else {
      const requestedFile = results.find(
        req => req.id === item.associateObjectId,
      )
      if (requestedFiles) {
        fileName = requestedFile?.name
        createdBy = requestedFile?.createdBy
        createdOn = requestedFile?.createdOn
      }
    }
    createdBy = userProfiles.find(el => el.ownerId === createdBy)?.userName

    return { fileName, createdBy, createdOn, contentSize }
  }

  const sortDownLoadList = (
    itemA: FileHandleAssociation,
    itemB: FileHandleAssociation,
    column: string,
    isDescending: boolean,
  ) => {
    const {
      fileName: fileName_A,
      createdBy: createdBy_A,
      createdOn: createdOn_A,
      contentSize: contentSize_A,
    } = getFileHandleInfo(itemA)

    const {
      fileName: fileName_B,
      createdBy: createdBy_B,
      createdOn: createdOn_B,
      contentSize: contentSize_B,
    } = getFileHandleInfo(itemB)

    const direction = isDescending ? 1 : -1

    switch (column) {
      case 'file':
        return fileName_B?.localeCompare(fileName_A!)! * direction
      case 'createdBy':
        return createdBy_B?.localeCompare(createdBy_A!)! * direction
      case 'createdOn':
        return createdOn_B?.localeCompare(createdOn_A!)! * direction
      case 'size':
        if (contentSize_A && !contentSize_B) {
          return -1
        } else if (contentSize_B && !contentSize_A) {
          return 1
        } else {
          return (contentSize_B! - contentSize_A!) * direction
        }
      default:
        return 1
    }
  }

  const filesToDownload = downloadList?.filesToDownload ?? []
  const results = references?.results ?? []
  let numBytes = 0
  let numFiles = 0
  const content = (
    <div className="DownloadListTable">
      <div style={{ display: arPropsFromHasAccess ? 'none' : '' }}>
        <div className="SRC-split download-list-table-top SRC-primary-background-color SRC-border-bottom-only">
          <span className="create-package-text">
            Download List &nbsp;&nbsp;
            {isLoading && <span className="spinner" />}
          </span>
          <button
            className="SRC-underline-on-hover uppercase-text"
            onClick={clearDownloadList}
            id={TESTING_CLEAR_BTN_CLASS}
          >
            Clear list
          </button>
        </div>
        <ReactBootstrap.Table striped={true} responsive={true}>
          <thead>
            <tr>
              <th>
                File
                <button
                  className={`sort SRC-primary-background-color-hover ${
                    sortedColumn.column === 'file'
                      ? 'SRC-primary-background-color'
                      : ''
                  }`}
                  onClick={() => {
                    sortColumn('file')
                  }}
                >
                  <FontAwesomeIcon
                    icon={
                      sortedColumn.column === 'file'
                        ? sortedColumn.isDescending === false
                          ? faSortAmountDown
                          : faSortAmountUp
                        : faSortAmountDown
                    }
                    color={sortedColumn.column === 'file' ? 'white' : ''}
                  />
                </button>
              </th>
              <th>Access</th>
              <th>
                Created By
                <button
                  className={`sort SRC-primary-background-color-hover ${
                    sortedColumn.column === 'createdBy'
                      ? 'SRC-primary-background-color'
                      : ''
                  }`}
                  onClick={() => {
                    sortColumn('createdBy')
                  }}
                >
                  <FontAwesomeIcon
                    icon={
                      sortedColumn.column === 'createdBy'
                        ? sortedColumn.isDescending === false
                          ? faSortAmountDown
                          : faSortAmountUp
                        : faSortAmountDown
                    }
                    color={sortedColumn.column === 'createdBy' ? 'white' : ''}
                  />
                </button>
              </th>
              <th>
                Created On
                <button
                  className={`sort SRC-primary-background-color-hover ${
                    sortedColumn.column === 'createdOn'
                      ? 'SRC-primary-background-color'
                      : ''
                  }`}
                  onClick={() => {
                    sortColumn('createdOn')
                  }}
                >
                  <FontAwesomeIcon
                    icon={
                      sortedColumn.column === 'createdOn'
                        ? sortedColumn.isDescending === false
                          ? faSortAmountDown
                          : faSortAmountUp
                        : faSortAmountDown
                    }
                    color={sortedColumn.column === 'createdOn' ? 'white' : ''}
                  />
                </button>
              </th>
              <th>
                Size
                <button
                  className={`sort SRC-primary-background-color-hover ${
                    sortedColumn.column === 'size'
                      ? 'SRC-primary-background-color'
                      : ''
                  }`}
                  onClick={() => {
                    sortColumn('size')
                  }}
                >
                  <FontAwesomeIcon
                    icon={
                      sortedColumn.column === 'size'
                        ? sortedColumn.isDescending === false
                          ? faSortAmountDown
                          : faSortAmountUp
                        : faSortAmountDown
                    }
                    color={sortedColumn.column === 'size' ? 'white' : ''}
                  />
                </button>
              </th>
              {/* th below is made for trash can icon but holds no content */}
              <th />
            </tr>
          </thead>
          <tbody className="download-list-table">
            {filesToDownload.map(item => {
              let createdBy: string | undefined = ''
              let createdOn: string | undefined = ''
              let fileName: string | undefined = ''
              let contentSize = undefined
              const synId = item.associateObjectId
              const fileHandleId = item.fileHandleId
              const isCurrentlyBeingDeletedClass =
                fileBeingDeleted === fileHandleId ? 'SRC-inactive-bg' : ''
              // See if batch file results has this fileHandleId
              const fileResult = requestedFiles.find(
                fileRes => fileRes.fileHandleId === fileHandleId,
              )
              const fileHandle = fileResult?.fileHandle
              const canDownload = fileHandle !== undefined
              if (fileHandle) {
                // fileHandle is defined, this file is downloadable, show its metadata
                ;({ createdBy, createdOn, fileName, contentSize } = fileHandle)
                if (
                  getDownloadTypeForFileHandle(fileHandle) ===
                  FileHandleDownloadTypeEnum.Accessible
                ) {
                  numBytes += contentSize
                  numFiles += 1
                }
              } else {
                // file is not downloadable, only show its name from entity header info
                const requestedFile = results.find(
                  req => req.id === item.associateObjectId,
                )
                fileName = requestedFile?.name
                createdBy = requestedFile?.createdBy
                createdOn = requestedFile?.createdOn
              }
              createdOn = moment(createdOn).format('L LT')
              const userProfile = userProfiles.find(
                el => el.ownerId === createdBy,
              )
              return (
                <tr className={isCurrentlyBeingDeletedClass} key={fileHandleId}>
                  <td>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href={`https://www.synapse.org/#!Synapse:${synId}`}
                    >
                      {fileName}
                    </a>
                  </td>
                  <td>
                    <HasAccess
                      onHide={onHide}
                      fileHandle={fileHandle}
                      token={token}
                      set_arPropsFromHasAccess={set_arPropsFromHasAccess}
                      entityId={synId}
                      isInDownloadList={true}
                      forceSamePage={forceSamePage}
                    />
                  </td>
                  <td>
                    {userProfile && (
                      <UserCard
                        size={'SMALL USER CARD'}
                        userProfile={userProfile}
                        preSignedURL={userProfile.clientPreSignedURL}
                        token={token}
                        extraSmall={true}
                      />
                    )}
                    {canDownload && !userProfile && (
                      <span className="spinner" />
                    )}
                  </td>
                  <td>{createdOn}</td>
                  <td>
                    {contentSize && calculateFriendlyFileSize(contentSize)}
                  </td>
                  <td>
                    <button
                      className={TESTING_TRASH_BTN_CLASS}
                      onClick={
                        fileBeingDeleted === ''
                          ? () => deleteFileFromList(fileHandleId, synId)
                          : undefined
                      }
                    >
                      <FontAwesomeIcon
                        className="SRC-primary-text-color"
                        icon="trash"
                      />
                    </button>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </ReactBootstrap.Table>
        <CreatePackage updateDownloadList={fetchData} token={token}>
          <DownloadDetails
            numBytes={numBytes}
            numFiles={numFiles}
            token={token}
          />
        </CreatePackage>
      </div>
      {arPropsFromHasAccess && (
        <AccessRequirementList
          {...arPropsFromHasAccess}
          token={token}
          onHide={() => {
            set_arPropsFromHasAccess(undefined)
          }}
        />
      )}
    </div>
  )

  const onHideModal = useCallback(() => {
    if (arPropsFromHasAccess) {
      set_arPropsFromHasAccess(undefined)
    } else {
      onHide?.()
    }
  }, [arPropsFromHasAccess, onHide])

  if (renderAsModal) {
    const closeBtn: React.CSSProperties = {
      position: 'absolute',
      top: 5,
      right: 20,
      zIndex: 10,
    }
    
    return (
      <ReactBootstrap.Modal
        centered={true}
        animation={false}        
        size={'lg'}
        dialogClassName={'download-list-modal-container'}
        show={true}
      >
        <ReactBootstrap.Modal.Header>
          <button style={closeBtn} onClick={onHideModal}>
            <FontAwesomeIcon style={{ fontSize: '21px' }} icon="times" />
          </button>
        </ReactBootstrap.Modal.Header>
        {content}
      </ReactBootstrap.Modal>
    )
  } else {
    return content
  }
}
