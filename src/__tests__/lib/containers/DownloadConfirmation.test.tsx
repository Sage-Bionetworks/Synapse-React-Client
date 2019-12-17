import { mount, ReactWrapper } from 'enzyme'
import {
  AddFilesToDownloadListResponse,
  FileHandleAssociateType,
  AddFilesToDownloadListRequest,
  QueryBundleRequest,
} from 'lib/utils/synapseTypes/'
import * as React from 'react'
import { act } from 'react-dom/test-utils'
import {
  DownloadConfirmation,
  DownloadConfirmationProps,
} from '../../../lib/containers/download_list/DownloadConfirmation'

let getQueryTableResultsFn: Function

let addFilesToDownloadRequestFn: Function
const SynapseClient = require('../../../lib/utils/SynapseClient')
let TestDownloadSpeed = require('../../../lib/utils/functions/testDownloadSpeed')
const mockClose = jest.fn()

const query = {
  sql: 'SELECT * FROM syn123456789',
}

const mockGetQueryTableRequest = {
  concreteType: 'org.sagebionetworks.repo.model.table.QueryBundleRequest',
  partMask: 64 + 2,
  query,
}

const queryBundleRequest: QueryBundleRequest = {
  concreteType: 'org.sagebionetworks.repo.model.table.QueryBundleRequest',
  partMask: 0x2,
  query,
}

const queryBundleResponse: any = {
  queryCount: 8,
  sumFileSizes: { sumFileSizesBytes: 40128868, greaterThan: false },
  greaterThan: false,
  sumFileSizesBytes: 40128868,
}

const addFilesToDownloadListRequest: AddFilesToDownloadListRequest = {
  concreteType:
    'org.sagebionetworks.repo.model.file.AddFileToDownloadListRequest',
  query,
}

const addFilesToDownloadListResponse: AddFilesToDownloadListResponse = {
  concreteType:
    'org.sagebionetworks.repo.model.file.AddFileToDownloadListResponse',

  downloadList: {
    tag: 'c57433e3-65b5-4aa8-888b-215da8585351',
    filesToDownload: [
      {
        fileHandleId: '000',
        associateObjectId: '000',
        associateObjectType: FileHandleAssociateType.FileEntity,
      },
      {
        fileHandleId: '111',
        associateObjectId: '111',
        associateObjectType: FileHandleAssociateType.FileEntity,
      },
    ],
    ownerId: '123',
    updatedOn: Date().toString(),
  },
}

const createMountedComponent = (props: DownloadConfirmationProps) => {
  const wrapper = mount<React.FunctionComponent<DownloadConfirmationProps>>(
    <DownloadConfirmation {...props} />,
  )

  return { wrapper }
}

const resolveAllPending = async (
  wrapper: ReactWrapper<
    React.FunctionComponent<DownloadConfirmationProps>,
    any,
    React.Component<{}, {}, any>
  >,
) => {
  await act(
    async (): Promise<any> => {
      await Promise.resolve(wrapper)
      await new Promise(resolve => setImmediate(resolve))
      wrapper.update()
      return wrapper
    },
  )
}

describe('it performs the expected functionality', () => {
  addFilesToDownloadRequestFn = SynapseClient.addFilesToDownloadList = jest
    .fn()
    .mockResolvedValue(addFilesToDownloadListResponse)

  TestDownloadSpeed.testDownloadSpeed = jest.fn().mockResolvedValue(55)

  const props: DownloadConfirmationProps = {
    fnClose: mockClose,
    token: '12345',
    queryBundleRequest: queryBundleRequest,
  }

  beforeEach(() => {
    getQueryTableResultsFn = SynapseClient.getQueryTableResults = jest
      .fn()
      .mockResolvedValue(queryBundleResponse)
  })

  it('should render without crashing with just a cancel button', () => {
    const { wrapper } = createMountedComponent(props)
    expect(wrapper).toBeDefined()
    const mainDiv = wrapper.find('.download-confirmation')
    expect(mainDiv.hasClass('alert-info')).toBe(true)
    expect(wrapper.find('button')).toHaveLength(1)
    expect(wrapper.find('button').text()).toBe('Cancel')
  })

  it("should call the 'close' function on cancel", () => {
    const { wrapper } = createMountedComponent(props)
    wrapper.find('button').simulate('click')
    expect(props.fnClose).toHaveBeenCalled()
  })

  it("should call getQueryTableResults with correct params and show 'add' and 'cancel' buttons once info is loaded", async () => {
    const { wrapper } = createMountedComponent(props)
    await resolveAllPending(wrapper)

    expect(getQueryTableResultsFn).toHaveBeenCalledWith(
      mockGetQueryTableRequest,
    )
    expect(wrapper.find('button')).toHaveLength(2)
    expect(wrapper.find('button.btn-link').text()).toBe('Cancel')
    expect(wrapper.find('button.btn-primary').text()).toBe('Add')
  })

  it('should call addFilesToDownload with correct params and show correct text while processing with no buttons', async () => {
    const { wrapper } = createMountedComponent(props)
    await resolveAllPending(wrapper)
    //click to add
    wrapper.find('button.btn-primary').simulate('click')
    expect(addFilesToDownloadRequestFn).toHaveBeenCalledWith(
      addFilesToDownloadListRequest,
      props.token,
    )
    expect(wrapper.text()).toBe('Adding Files To List')
    expect(wrapper.find('button')).toHaveLength(0)
  })

  it("should show the correct 'view downloads' link when done adding", async () => {
    const { wrapper } = createMountedComponent(props)
    await resolveAllPending(wrapper)
    wrapper.find('button.btn-primary').simulate('click')
    await resolveAllPending(wrapper)
    expect(wrapper.find('button.btn-primary')).toHaveLength(0)
    const link = wrapper.find('a')
    expect(link.text()).toBe('View Download List')
    expect(link.props().href).toBe(
      `https://www.synapse.org/#!Profile:${addFilesToDownloadListResponse.downloadList.ownerId}/downloads`,
    )
  })
})
