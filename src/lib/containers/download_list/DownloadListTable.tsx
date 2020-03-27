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
  const ownerIds: string[] = requestedFiles
    .filter(el => el.fileHandle && el.fileHandle.createdBy)
    // use bang operator because filter function guarentee's that file handle will be defined
    .map(el => el.fileHandle!.createdBy!)
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

  const Container = useCallback(
    (props: any) => {
      return renderAsModal ? (
        <ReactBootstrap.Modal
          centered={true}
          animation={false}
          size={'lg'}
          dialogClassName={'download-list-modal-container'}
          show={true}
          onHide={() => {
            onHide?.()
          }}
        >
          {props.children}
        </ReactBootstrap.Modal>
      ) : (
        <>{props.children}</>
      )
    },
    [onHide, renderAsModal],
  )

  const filesToDownload = downloadList?.filesToDownload ?? []
  const results = references?.results ?? []
  let numBytes = 0
  let numFiles = 0
  return (
    <Container>
      <div className="DownloadListTable">
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
              <th>File Name</th>
              <th>Access</th>
              <th>Created By</th>
              <th>Created On</th>
              <th>Size</th>
              {/* th below is made for trash can icon but holds no content */}
              <th />
            </tr>
          </thead>
          <tbody className="download-list-table">
            {filesToDownload.map(item => {
              let createdBy = ''
              let createdOn = ''
              let fileName = ''
              let contentSize = undefined
              const synId = item.associateObjectId
              const fileHandleId = item.fileHandleId
              const isCurrentlyBeingDeletedClass =
                fileBeingDeleted === fileHandleId ? 'SRC-inactive-bg' : ''
              // See if batch file results has this fileHandleId
              const fileResult = requestedFiles.find(
                fileRes => fileRes.fileHandleId === fileHandleId,
              )
              const fileHandle = fileResult ? fileResult.fileHandle : undefined
              const canDownload = fileHandle !== undefined
              if (fileHandle) {
                // fileHandle is defined, this file is downloadable, show its metadata
                ;({ createdBy, createdOn, fileName, contentSize } = fileHandle)
                createdOn = moment(createdOn).format('L LT')
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
                )!
                fileName = requestedFile.name
              }
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
                      fileHandle={fileHandle}
                      token={token}
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
    </Container>
  )
}
