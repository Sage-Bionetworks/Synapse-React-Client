import * as React from 'react'
import DownloadListTable, {
  DownloadListTableProps,
  TESTING_TRASH_BTN_CLASS,
  TESTING_CLEAR_BTN_CLASS,
} from 'lib/containers/download_list/DownloadListTable'
import { EntityHeader } from 'lib/utils/jsonResponses/EntityHeader'
import { PaginatedResults } from 'lib/utils/jsonResponses/PaginatedResults'
import { BatchFileResult } from 'lib/utils/jsonResponses/BatchFileResult'
import { DownloadList } from 'lib/utils/jsonResponses/Download/DownloadList'
import { FileHandleAssociateType } from 'lib/utils/jsonResponses/FileHandleAssociation'
import { act } from 'react-dom/test-utils'
import ReactDOM from 'react-dom'

describe('it performs all functionality ', () => {
  let container: HTMLDivElement
  beforeEach(() => {
    container = document.createElement('div')
    document.body.appendChild(container)
  })

  afterEach(() => {
    document.body.removeChild(container!)
    // @ts-ignore
    container = null
  })

  const SynapseClient = require('../../../../lib/utils/SynapseClient')
  const fileOneId = '1'
  const fileTwoId = '2'
  const entityOneId = 'syn1'
  const entityTwoId = 'syn2'
  const fileOneName = 'fileNameOne'
  const fileTwoName = 'fileTwoName'
  const downloadListMock: DownloadList = {
    ownerId: '',
    updatedOn: '',
    etag: '',
    filesToDownload: [
      {
        fileHandleId: fileOneId,
        associateObjectId: entityOneId,
        associateObjectType: FileHandleAssociateType.FileEntity,
      },
      {
        fileHandleId: fileTwoId,
        associateObjectId: entityTwoId,
        associateObjectType: FileHandleAssociateType.FileEntity,
      },
    ],
  }
  SynapseClient.getDownloadList = jest.fn().mockResolvedValue(downloadListMock)
  const entityHeaderMock: PaginatedResults<EntityHeader> = {
    totalNumberOfResults: 3,
    results: [
      {
        name: fileOneName,
        id: entityOneId,
        type: '',
        versionNumber: 0,
        versionLabel: '',
        benefactorId: 0,
        createdOn: '',
        modifiedOn: '',
        createdBy: '',
        modifiedBy: '',
      },
      {
        name: fileTwoName,
        id: entityTwoId,
        type: '',
        versionNumber: 0,
        versionLabel: '',
        benefactorId: 0,
        createdOn: '',
        modifiedOn: '',
        createdBy: '',
        modifiedBy: '',
      },
    ],
  }
  SynapseClient.getEntityHeader = jest.fn().mockResolvedValue(entityHeaderMock)
  const batchFileResultMock: BatchFileResult = {
    requestedFiles: [
      {
        fileHandleId: fileOneId,
        failureCode: 'UNAUTHORIZED',
      },
      {
        fileHandleId: fileTwoId,
      },
    ],
  }
  SynapseClient.getFiles = jest.fn().mockResolvedValue(batchFileResultMock)
  const deleteDownloadListFnMock = jest.fn().mockResolvedValue('')
  SynapseClient.deleteDownloadListFiles = deleteDownloadListFnMock
  const clearDownloadListMock = jest.fn().mockResolvedValue('')
  SynapseClient.deleteDownloadList = clearDownloadListMock

  const tokenMock = 'token'
  const props: DownloadListTableProps = {
    token: tokenMock,
  }
  it('renders without crashing', async () => {
    await act(async () => {
      ReactDOM.render(<DownloadListTable {...props} />, container)
    })
    const wrapper = container.querySelector<HTMLDivElement>('div')
    expect(wrapper).toBeDefined()
  })
  it('renders each row correctly', async () => {
    await act(async () => {
      ReactDOM.render(<DownloadListTable {...props} />, container)
    })
    const rows = container.querySelectorAll<HTMLTableRowElement>('tbody tr')
    expect(rows).toHaveLength(2)
    expect(
      rows.item(0).querySelector<HTMLAnchorElement>('td a')!.innerHTML,
    ).toEqual(fileOneName)
    expect(
      rows.item(1).querySelector<HTMLAnchorElement>('td a')!.innerHTML,
    ).toEqual(fileTwoName)
  })
  it('deletes a specific row', async () => {
    await act(async () => {
      ReactDOM.render(<DownloadListTable {...props} />, container)
    })
    const trashBtn = container
      .querySelectorAll<HTMLTableRowElement>('tbody tr')
      .item(0)
      .querySelector<HTMLButtonElement>(`.${TESTING_TRASH_BTN_CLASS}`)!
    await act(async () => {
      trashBtn.click()
    })
    expect(deleteDownloadListFnMock).toHaveBeenCalledWith(
      expect.arrayContaining([
        expect.objectContaining({
          fileHandleId: fileOneId,
        }),
      ]),
      tokenMock,
    )
  })
  it('Clears all rows', async () => {
    await act(async () => {
      ReactDOM.render(<DownloadListTable {...props} />, container)
    })
    await act(async () => {
      container
        .querySelector<HTMLButtonElement>(`#${TESTING_CLEAR_BTN_CLASS}`)!
        .click()
    })
    expect(clearDownloadListMock).toHaveBeenCalled()
  })
})
