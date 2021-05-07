import DownloadListTable, {
  DownloadListTableProps,
  TESTING_CLEAR_BTN_CLASS,
  TESTING_TRASH_BTN_CLASS,
} from '../../../../lib/containers/download_list/DownloadListTable'
import {
  BatchFileResult,
  DownloadList,
  EntityHeader,
  FileHandleAssociateType,
  PaginatedResults,
} from '../../../../lib/utils/synapseTypes/'
import * as React from 'react'
import ReactDOM from 'react-dom'
import { act } from 'react-dom/test-utils'

describe('it performs all functionality ', () => {
  let container: HTMLDivElement
  beforeEach(() => {
    container = document.createElement('div')
    document.body.appendChild(container)
    jest.clearAllMocks()
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
  const mockGetDownloadListFn = jest.fn().mockResolvedValue(downloadListMock)
  SynapseClient.getDownloadList = mockGetDownloadListFn
  SynapseClient.isSignedIn = jest.fn().mockReturnValue(true)
  const entityHeaderMock: PaginatedResults<EntityHeader> = {
    totalNumberOfResults: 3,
    results: [
      {
        name: fileOneName,
        id: entityOneId,
        type: 'org.sagebionetworks.repo.model.FileEntity',
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
        type: 'org.sagebionetworks.repo.model.FileEntity',
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
  const mockGetEntityHeadersFn = jest.fn().mockResolvedValue(entityHeaderMock)
  SynapseClient.getEntityHeaders = mockGetEntityHeadersFn
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
  const mockGetFilesFn = jest.fn().mockResolvedValue(batchFileResultMock)
  SynapseClient.getFiles = mockGetFilesFn
  const mockDeleteDownloadListFn = jest.fn().mockResolvedValue('')
  SynapseClient.deleteDownloadListFiles = mockDeleteDownloadListFn
  const mockClearDownloadListFn = jest.fn().mockResolvedValue('')
  SynapseClient.deleteDownloadList = mockClearDownloadListFn

  const props: DownloadListTableProps = {}
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
    expect(mockGetDownloadListFn).toHaveBeenCalledTimes(1)
    expect(mockGetEntityHeadersFn).toHaveBeenCalledTimes(1)
    expect(mockGetFilesFn).toHaveBeenCalledTimes(1)
  })
  it('deletes a specific row', async () => {
    await act(async () => {
      ReactDOM.render(<DownloadListTable {...props} />, container)
    })
    mockGetDownloadListFn.mockClear()
    mockGetEntityHeadersFn.mockClear()
    mockGetFilesFn.mockClear()
    const trashBtn = container
      .querySelectorAll<HTMLTableRowElement>('tbody tr')
      .item(0)
      .querySelector<HTMLButtonElement>(`.${TESTING_TRASH_BTN_CLASS}`)!
    await act(async () => {
      trashBtn.click()
    })
    expect(mockDeleteDownloadListFn).toHaveBeenCalledWith(
      expect.arrayContaining([
        expect.objectContaining({
          fileHandleId: fileOneId,
        }),
      ]),
    )
    expect(mockGetDownloadListFn).not.toHaveBeenCalled()
    expect(mockGetEntityHeadersFn).not.toHaveBeenCalled()
    expect(mockGetFilesFn).not.toHaveBeenCalled()
  })
  it('Clears all rows', async () => {
    await act(async () => {
      ReactDOM.render(<DownloadListTable {...props} />, container)
    })
    mockGetDownloadListFn.mockClear()
    mockGetEntityHeadersFn.mockClear()
    mockGetFilesFn.mockClear()
    await act(async () => {
      container
        .querySelector<HTMLButtonElement>(`#${TESTING_CLEAR_BTN_CLASS}`)!
        .click()
    })
    expect(mockGetDownloadListFn).not.toHaveBeenCalled()
    expect(mockGetEntityHeadersFn).not.toHaveBeenCalled()
    expect(mockGetFilesFn).not.toHaveBeenCalled()
  })
})
