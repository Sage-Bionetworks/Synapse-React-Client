import { mount } from 'enzyme'
import {
  QueryBundleRequest,
} from '../../../lib/utils/synapseTypes/'
import * as React from 'react'
import {
  DownloadConfirmation,
  DownloadConfirmationProps,
} from '../../../lib/containers/download_list/DownloadConfirmation'
import { resolveAllPending } from '../../../lib/testutils/EnzymeHelpers'
import {
  MOCK_CONTEXT_VALUE,
  SynapseTestContext,
} from '../../../mocks/MockSynapseContext'
import { displayToast } from '../../../lib/containers/ToastMessage'
import { AddToDownloadListRequest } from '../../../lib/utils/synapseTypes/DownloadListV2/AddToDownloadListRequest'
import { AddToDownloadListResponse } from '../../../lib/utils/synapseTypes/DownloadListV2/AddToDownloadListResponse'

let getQueryTableResultsFn: () => void
let addFilesToDownloadRequestFn: () => void
const SynapseClient = require('../../../lib/utils/SynapseClient')
const TestDownloadSpeed = require('../../../lib/utils/functions/testDownloadSpeed')
const mockClose = jest.fn()
jest.mock('../../../lib/containers/ToastMessage', () => {
  return { displayToast: jest.fn() }
})

const mockToastFn = displayToast

const query = {
  sql: 'SELECT * FROM syn123456789',
}

const mockGetQueryTableRequest = {
  concreteType: 'org.sagebionetworks.repo.model.table.QueryBundleRequest',
  entityId: 'syn123456789',
  partMask: 64 + 2,
  query,
}

const queryBundleRequest: QueryBundleRequest = {
  concreteType: 'org.sagebionetworks.repo.model.table.QueryBundleRequest',
  entityId: 'syn123456789',
  partMask: 0x2,
  query,
}

const queryBundleResponse: any = {
  queryCount: 8,
  sumFileSizes: { sumFileSizesBytes: 40128868, greaterThan: false },
  greaterThan: false,
  sumFileSizesBytes: 40128868,
}

const addFilesToDownloadListRequest:AddToDownloadListRequest = {
  query: query,
  concreteType: 'org.sagebionetworks.repo.model.download.AddToDownloadListRequest',
}

const addFilesToDownloadListResponse: AddToDownloadListResponse = {
  concreteType:
    'org.sagebionetworks.repo.model.download.AddToDownloadListResponse',
  numberOfFilesAdded: 1
}

const createMountedComponent = (props: DownloadConfirmationProps) => {
  const wrapper = mount<React.FunctionComponent<DownloadConfirmationProps>>(
    <SynapseTestContext>
      <DownloadConfirmation {...props} />
    </SynapseTestContext>,
  )

  return { wrapper }
}

describe('it performs the expected functionality', () => {
  addFilesToDownloadRequestFn = SynapseClient.addFilesToDownloadListV2 = jest
    .fn()
    .mockResolvedValue(addFilesToDownloadListResponse)

  TestDownloadSpeed.testDownloadSpeed = jest.fn().mockResolvedValue(55)
  getQueryTableResultsFn = SynapseClient.getQueryTableResults = jest
    .fn()
    .mockResolvedValue(queryBundleResponse)

  const props: DownloadConfirmationProps = {
    fnClose: mockClose,
    getLastQueryRequest: () => queryBundleRequest,
  }

  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('should render without crashing with just a cancel button', () => {
    const { wrapper } = createMountedComponent(props)
    expect(wrapper).toBeDefined()
    const mainDiv = wrapper.find('.download-confirmation')
    expect(mainDiv.find('Alert')).toHaveLength(1)
    expect(wrapper.find('button')).toHaveLength(1)
    expect(wrapper.find('button').text()).toBe('Cancel')
    expect(getQueryTableResultsFn).toHaveBeenCalledTimes(1)
  })

  it("should call the 'close' function on cancel", () => {
    const { wrapper } = createMountedComponent(props)
    wrapper.find('button').simulate('click')
    expect(props.fnClose).toHaveBeenCalled()
  })

  // I think resolveAllPending relies on useEffect() (rather than useDeepCompareEffect()), so getQueryTableResultsFn is never called
  it.skip("should call getQueryTableResults with correct params and show 'add' and 'cancel' buttons once info is loaded", async () => {
    const { wrapper } = createMountedComponent(props)
    await resolveAllPending(wrapper)
    expect(getQueryTableResultsFn).toHaveBeenCalledWith(
      mockGetQueryTableRequest,
      MOCK_CONTEXT_VALUE.accessToken,
    )
    expect(getQueryTableResultsFn).toHaveBeenCalledTimes(1)
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
      MOCK_CONTEXT_VALUE.accessToken,
    )
    expect(wrapper.text()).toBe('Adding Files To List')
    expect(wrapper.find('button')).toHaveLength(0)
  })

  it("should show the correct 'view downloads' link when done adding", async () => {
    const { wrapper } = createMountedComponent(props)
    await resolveAllPending(wrapper)
    wrapper.find('button.btn-primary').simulate('click')
    await resolveAllPending(wrapper)

    expect(mockToastFn).toBeCalledWith(
      'File(s) were successfully added to your Download List.',
      'success',
      expect.objectContaining({ primaryButtonText: 'View Download List' }),
    )
  })
})
