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
  getEntityHeader,
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
  faSort,
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
  const [columns, setColumns] = useState<{}>({
    file: false,
    createdBy: false,
    createdOn: false,
    size: false,
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
      const downloadList = await getDownloadList(token)
      const { filesToDownload } = downloadList
      if (filesToDownload.length === 0) {
        setData({
          downloadList,
        })
        return
      }
      const batchFileRequest: BatchFileRequest = {
        requestedFiles: filesToDownload,
        includeFileHandles: true,
        includePreSignedURLs: false,
        includePreviewPreSignedURLs: false,
      }
      // batch file result gives FilesHandle for the files the user can download
      // which has additional metadata - createdBy, numBytes, etc.
      const batchFileResult = await getFiles(batchFileRequest, token)

      // Only make entity header calls to the files that the user doesn't have access to,
      // which can be determined by whether the batchFileResult has a failure code for the
      // corresponding download list item
      const referenceCall: Reference[] = filesToDownload
        .filter(el => {
          return (
            batchFileResult.requestedFiles.find(
              batchFile => batchFile.fileHandleId === el.fileHandleId,
            )!.failureCode !== undefined
          )
        })
        .map(el => {
          return { targetId: el.associateObjectId }
        })
      // entity header is used to get the names of the files that the user
      // doesn't have access to
      const references = await getEntityHeader(referenceCall, token)
      setData({
        references,
        batchFileResult,
        downloadList,
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
      const downloadList = await deleteDownloadListFiles(list, token)
      // The current references and batchFileResult can be kept because the download
      // list drives the view, so the stale values in those two won't be viewed.
      setData({ downloadList, references, batchFileResult })
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

      setColumns({
        file: column === 'file' ? !columns[column] : false,
        createdBy: column === 'createdBy' ? !columns[column] : false,
        createdOn: column === 'createdOn' ? !columns[column] : false,
        size: column === 'size' ? !columns[column] : false,
      })

      const filesToDownload = downloadList?.filesToDownload ?? []

      filesToDownload.sort((itemA, itemB) => {
        return sortDownLoadList(itemA, itemB, column)
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

  const sortDownLoadList = (
    itemA: FileHandleAssociation,
    itemB: FileHandleAssociation,
    column: string,
  ) => {
    let fileName_A: string | undefined = ''
    let fileName_B: string | undefined = ''

    let createdBy_A: string | undefined = ''
    let createdBy_B: string | undefined = ''
    let createdOn_A: string | undefined = ''
    let createdOn_B: string | undefined = ''
    let contentSize_A: number | undefined = undefined
    let contentSize_B: number | undefined = undefined

    const fileHandleId = itemA ? itemA.fileHandleId : itemB.fileHandleId

    const fileResult = requestedFiles.find(
      fileRes => fileRes.fileHandleId === fileHandleId,
    )
    const fileHandle = fileResult ? fileResult.fileHandle : undefined

    // fileHandle is defined, this file is downloadable, show its metadata
    if (fileHandle && itemA) {
      fileName_A = fileHandle.fileName
      createdBy_A = fileHandle.createdBy
      createdOn_A = fileHandle.createdOn
      contentSize_A = fileHandle.contentSize
    } else if (fileHandle && itemB) {
      fileName_B = fileHandle.fileName
      createdBy_B = fileHandle.createdBy
      createdOn_B = fileHandle.createdOn
      contentSize_B = fileHandle.contentSize
    } else {
      // file is not downloadable, only show its name from entity header info
      const requestId = itemA
        ? itemA.associateObjectId
        : itemB.associateObjectId
      const requestedFile = results.find(req => req.id === requestId)

      if (itemA) {
        fileName_A = requestedFile?.name
        createdBy_A = requestedFile?.createdBy
        createdOn_A = requestedFile?.createdOn
      } else if (itemB) {
        fileName_B = requestedFile?.name
        createdBy_B = requestedFile?.createdBy
        createdOn_B = requestedFile?.createdOn
      }
    }

    switch (column) {
      case 'file':
        return fileName_B?.localeCompare(fileName_A!)!
      case 'access':
        return 1
      case 'createdBy':
        return createdBy_B?.localeCompare(createdBy_A!)!
      case 'createdOn':
        return createdOn_B?.localeCompare(createdOn_A!)!
      case 'size':
        return contentSize_B! - contentSize_A!
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
            Download List &nbsp;&nbsp;{' '}
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
                  className="sort"
                  onClick={() => {
                    sortColumn('file')
                  }}
                >
                  <FontAwesomeIcon
                    icon={columns['file'] ? faSortAmountUp : faSortAmountDown}
                  />
                </button>
              </th>
              <th>
                Access
                <button className="sort" onClick={() => sortColumn('access')}>
                  <FontAwesomeIcon icon={faSort} />
                </button>
              </th>
              <th>
                Created By
                <button
                  className="sort"
                  onClick={() => {
                    sortColumn('createdBy')
                  }}
                >
                  <FontAwesomeIcon
                    icon={
                      columns['createdBy'] ? faSortAmountUp : faSortAmountDown
                    }
                  />
                </button>
              </th>
              <th>
                Created On
                <button
                  className="sort"
                  onClick={() => {
                    sortColumn('createdOn')
                  }}
                >
                  <FontAwesomeIcon
                    icon={
                      columns['createdOn'] ? faSortAmountUp : faSortAmountDown
                    }
                  />
                </button>
              </th>
              <th>
                Size
                <button
                  className="sort"
                  onClick={() => {
                    sortColumn('size')
                  }}
                >
                  <FontAwesomeIcon
                    icon={columns['size'] ? faSortAmountUp : faSortAmountDown}
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
    return (
      <ReactBootstrap.Modal
        centered={true}
        animation={false}
        size={'lg'}
        dialogClassName={'download-list-modal-container'}
        show={true}
        onHide={onHideModal}
      >
        {content}
      </ReactBootstrap.Modal>
    )
  } else {
    return content
  }
}
