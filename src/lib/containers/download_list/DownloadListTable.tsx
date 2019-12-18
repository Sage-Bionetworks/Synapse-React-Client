import { library } from '@fortawesome/fontawesome-svg-core'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import moment from 'moment'
import React, { useEffect, useState } from 'react'
import * as ReactBootstrap from 'react-bootstrap'
import { calculateFriendlyFileSize } from '../../utils/functions/calculateFriendlyFileSize'
import useGetProfiles from '../../utils/hooks/useGetProfiles'
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
} from '../../utils/synapseTypes'
import HasAccess from '../HasAccess'
import UserCard from '../UserCard'
import { CreatePackage } from './CreatePackage'
import DownloadDetails from './DownloadDetails'
import './DownloadList.scss'

library.add(faTrash)

type DownloadListTableData = {
  references?: PaginatedResults<EntityHeader>
  batchFileResult?: BatchFileResult
  downloadList?: DownloadList
}

type LoadingState = boolean
export type DownloadListTableProps = {
  token?: string
}

export const TESTING_TRASH_BTN_CLASS = 'TESTING_TRASH_BTN_CLASS'
export const TESTING_CLEAR_BTN_CLASS = 'TESTING_CLEAR_BTN_CLASS'

export default function DownloadListTable(props: DownloadListTableProps) {
  // https://reactjs.org/docs/hooks-faq.html#should-i-use-one-or-many-state-variables
  let [data, setData] = useState<DownloadListTableData>({
    references: undefined,
    batchFileResult: undefined,
    downloadList: undefined,
  })
  // https://reactjs.org/docs/hooks-faq.html#should-i-use-one-or-many-state-variables
  let [isLoading, setIsLoading] = useState<LoadingState>(true)
  let [fileBeingDeleted, setFileBeingDeleted] = useState<string>('')
  const { token } = props
  const { references, batchFileResult, downloadList } = data
  const requestedFiles =
    (batchFileResult && batchFileResult.requestedFiles) || []
  // Get owner ids from download list by filtering to items that have a file handle
  // then map to ownerIds
  const ownerIds: string[] = requestedFiles
    .filter(el => el.fileHandle && el.fileHandle.createdBy)
    // @ts-ignore the error below could not occur if the filter is
    .map(el => el.fileHandle.createdBy)
  let userProfiles = useGetProfiles({ ids: ownerIds, token })

  useEffect(() => {
    fetchData(token)
  }, [token])

  const fetchData = async (token: string | undefined) => {
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
  }

  const clearDownloadList = async (
    _event: React.SyntheticEvent<HTMLButtonElement>,
  ) => {
    setIsLoading(true)
    try {
      await deleteDownloadList(token)
      setData({
        downloadList: undefined,
      })
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
    } catch (err) {
      console.error('Error on delete from download list', err)
    } finally {
      setFileBeingDeleted('')
      setIsLoading(false)
    }
  }

  const filesToDownload = (downloadList && downloadList.filesToDownload) || []
  const results = (references && references.results) || []
  let numBytes = 0
  let numFiles = requestedFiles.filter(el => !el.failureCode).length
  return (
    <div>
      <div className="SRC-split download-list-table-top">
        <span className="create-package-text SRC-centerContentInline">
          Download List &nbsp;&nbsp; {isLoading && <span className="spinner" />}
        </span>
        <button
          className="SRC-primary-text-color SRC-underline-on-hover"
          onClick={clearDownloadList}
          id={TESTING_CLEAR_BTN_CLASS}
        >
          Clear All
        </button>
      </div>
      <ReactBootstrap.Table responsive={true}>
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
              if (contentSize) {
                numBytes += contentSize
              }
            } else {
              // file is not downloadable, only show its name from entity header info
              const requestedFile = results.find(
                req => req.id === item.associateObjectId,
              )!
              fileName = requestedFile.name
            }
            const userProfile =
              userProfiles &&
              userProfiles.list &&
              userProfiles.list.find(el => el.ownerId === createdBy)
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
                    forceIsRestricted={!canDownload}
                    fileHandle={fileHandle}
                    token={token}
                    entityId={synId}
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
                  {canDownload && !userProfile && <span className="spinner" />}
                </td>
                <td>{createdOn}</td>
                <td>{contentSize && calculateFriendlyFileSize(contentSize)}</td>
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
      <CreatePackage updateDownloadList={() => fetchData(token)} token={token}>
        <DownloadDetails
          numBytes={numBytes}
          numFiles={numFiles}
          token={token}
        />
      </CreatePackage>
    </div>
  )
}
