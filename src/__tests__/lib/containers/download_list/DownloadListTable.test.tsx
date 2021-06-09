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
import React from 'react'
import { mount } from 'enzyme'
import {
  MOCK_CONTEXT_VALUE,
  SynapseTestContext,
} from '../../../../mocks/MockSynapseContext'
import { resolveAllPending } from '../../../../lib/testutils/EnzymeHelpers'

describe('it performs all functionality ', () => {
  beforeEach(() => {
    jest.clearAllMocks()
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

  async function mountComponent() {
    const wrapper = mount(<DownloadListTable {...props} />, {
      wrappingComponent: SynapseTestContext,
    })

    await resolveAllPending(wrapper)
    return wrapper
  }

  it('renders without crashing', async () => {
    const wrapper = await mountComponent()
    expect(wrapper).toBeDefined()
  })
  it('renders each row correctly', async () => {
    const wrapper = await mountComponent()
    const rows = wrapper.find('tbody tr')
    expect(rows).toHaveLength(2)
    expect(rows.find('td a').at(0).text()).toEqual(fileOneName)
    expect(rows.find('td a').at(1).text()).toEqual(fileTwoName)
    expect(mockGetDownloadListFn).toHaveBeenCalledTimes(1)
    expect(mockGetEntityHeadersFn).toHaveBeenCalledTimes(1)
    expect(mockGetFilesFn).toHaveBeenCalledTimes(1)
  })
  it('deletes a specific row', async () => {
    const wrapper = await mountComponent()
    mockGetDownloadListFn.mockClear()
    mockGetEntityHeadersFn.mockClear()
    mockGetFilesFn.mockClear()
    wrapper
      .find('tbody tr')
      .at(0)
      .find(`.${TESTING_TRASH_BTN_CLASS}`)
      .simulate('click')
    await resolveAllPending(wrapper)
    expect(mockDeleteDownloadListFn).toHaveBeenCalledWith(
      expect.arrayContaining([
        expect.objectContaining({
          fileHandleId: fileOneId,
        }),
      ]),
      MOCK_CONTEXT_VALUE.accessToken,
    )
    expect(mockGetDownloadListFn).not.toHaveBeenCalled()
    expect(mockGetEntityHeadersFn).not.toHaveBeenCalled()
    expect(mockGetFilesFn).not.toHaveBeenCalled()
  })
  it('Clears all rows', async () => {
    const wrapper = await mountComponent()

    mockGetDownloadListFn.mockClear()
    mockGetEntityHeadersFn.mockClear()
    mockGetFilesFn.mockClear()
    wrapper.find(`#${TESTING_CLEAR_BTN_CLASS}`).simulate('click')
    await resolveAllPending(wrapper)
    expect(mockGetDownloadListFn).not.toHaveBeenCalled()
    expect(mockGetEntityHeadersFn).not.toHaveBeenCalled()
    expect(mockGetFilesFn).not.toHaveBeenCalled()
  })
})
