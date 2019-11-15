import * as React from 'react'
import { EntityHeader } from '../../utils/jsonResponses/EntityHeader'
import {
  getDownloadList,
  getEntityHeader,
  getFiles,
} from '../../utils/SynapseClient'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import HasAccess from '../HasAccess'
import calculateFriendlyFileSize from '../calculateFriendlyFileSize'
import DownloadDetails from './DownloadDetails'
import { Reference } from '../../utils/jsonResponses/ReferenceList'
import { PaginatedResults } from '../../utils/jsonResponses/PaginatedResults'
import { BatchFileRequest } from '../../utils/jsonResponses/BatchFileRequest'
import { BatchFileResult } from '../../utils/jsonResponses/BatchFileResult'
import moment from 'moment'
import { Table } from 'react-bootstrap'
import { DownloadList } from '../../utils/jsonResponses/Download/DownloadList'

library.add(faTrash)

type DownloadListTableState = {
  isLoading: boolean
  references?: PaginatedResults<EntityHeader>
  batchFileResult?: BatchFileResult
  downloadList?: DownloadList
}

export type DownloadListTableProps = {
  token?: string
}

export default class DownloadListTable extends React.Component<
  DownloadListTableProps,
  DownloadListTableState
> {
  constructor(props: any) {
    super(props)
    this.state = {
      isLoading: true,
      references: undefined,
      batchFileResult: undefined,
      downloadList: undefined,
    }
  }

  async componentDidMount() {
    const { token } = this.props
    if (!token) {
      // doesn't make sense with anonymous user!
      return
    }
    try {
      const downloadList = await getDownloadList(token)
      const { filesToDownload } = downloadList
      const referenceCall: Reference[] = filesToDownload.map(el => {
        return { targetId: el.fileHandleId }
      })
      const references = await getEntityHeader(referenceCall, token)
      const batchFileRequest: BatchFileRequest = {
        requestedFiles: filesToDownload,
        includeFileHandles: true,
        includePreSignedURLs: false,
        includePreviewPreSignedURLs: false,
      }
      const batchFileResult = await getFiles(batchFileRequest, token)
      this.setState({
        references,
        batchFileResult,
        downloadList,
        isLoading: false,
      })
    } catch (e) {
      console.error('Error in DownloadList API call : ', e)
    }
  }

  render() {
    const { downloadList, references, isLoading, batchFileResult } = this.state
    const e = (downloadList && downloadList.filesToDownload) || []
    const requestedFiles =
      (batchFileResult && batchFileResult.requestedFiles) || []
    const results = (references && references.results) || []
    const { token } = this.props
    let numBytes = 0
    let numFiles = requestedFiles.filter(el => el.failureCode).length
    return (
      <div>
        <div>
          Download List
          <button> Clear All </button>
        </div>
        <Table>
          <thead>
            <tr>
              <th>File Name</th>
              <th>Access</th>
              <th>Created By</th>
              <th>Created On</th>
              <th>Size</th>
            </tr>
          </thead>
          <tbody>
            {isLoading && <tr className="spinner" />}
            {e.map(item => {
              const synId = item.associateObjectId
              const fileHandleId = item.fileHandleId
              const fileResult = requestedFiles.find(
                fileRes => fileRes.fileHandleId === fileHandleId,
              )
              let createdBy = ''
              let createdOn = ''
              let fileName = ''
              let contentSize = undefined
              const fileHandle = fileResult ? fileResult.fileHandle : undefined
              if (fileHandle) {
                ;({ createdBy, createdOn, fileName, contentSize } = fileHandle)
                createdOn = moment(createdOn).format('L LT')
                numBytes += contentSize
              } else {
                const requestedFile = results.find(
                  req => req.id === `syn${fileHandleId}`,
                )!
                fileName = requestedFile.name
              }
              return (
                <tr key={fileHandleId}>
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
                    <HasAccess token={token} synapseId={synId} />
                  </td>
                  {createdBy && <td>{createdBy}</td>}
                  {createdOn && <td>{createdOn}</td>}
                  {contentSize && (
                    <td>{calculateFriendlyFileSize(contentSize)}</td>
                  )}
                  {contentSize && (
                    <td>
                      <button>
                        <FontAwesomeIcon icon="trash" />
                      </button>
                    </td>
                  )}
                </tr>
              )
            })}
          </tbody>
        </Table>
        {!isLoading && (
          <DownloadDetails
            numBytes={numBytes}
            numFiles={numFiles}
            token={token}
            backgroundColor={'white'}
          />
        )}
      </div>
    )
  }
}
