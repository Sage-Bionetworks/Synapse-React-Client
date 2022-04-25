import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import * as React from 'react'
import {
  DownloadConfirmation,
  DownloadConfirmationProps,
} from '../../../lib/containers/download_list/DownloadConfirmation'
import {
  QueryVisualizationContextProvider,
  QueryVisualizationContextType,
} from '../../../lib/containers/QueryVisualizationWrapper'
import {
  QueryWrapper,
  QueryContextProvider,
  QueryContextType,
} from '../../../lib/containers/QueryWrapper'
import { displayToast } from '../../../lib/containers/ToastMessage'
import { createWrapper } from '../../../lib/testutils/TestingLibraryUtils'
import { SynapseContextType } from '../../../lib/utils/SynapseContext'
import { QueryBundleRequest } from '../../../lib/utils/synapseTypes/'
import { AddToDownloadListRequest } from '../../../lib/utils/synapseTypes/DownloadListV2/AddToDownloadListRequest'
import { AddToDownloadListResponse } from '../../../lib/utils/synapseTypes/DownloadListV2/AddToDownloadListResponse'
import { FilesStatisticsResponse } from '../../../lib/utils/synapseTypes/DownloadListV2/QueryResponseDetails'
import { MOCK_CONTEXT_VALUE } from '../../../mocks/MockSynapseContext'

let getDownloadListStatisticsResultsFn: jest.Mock
let addFilesToDownloadRequestFn: jest.Mock
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

const filesStatisticsResponse: FilesStatisticsResponse = {
  concreteType:
    'org.sagebionetworks.repo.model.download.FilesStatisticsResponse',
  totalNumberOfFiles: 0,
  numberOfFilesAvailableForDownload: 0,
  numberOfFilesAvailableForDownloadAndEligibleForPackaging: 0,
  numberOfFilesRequiringAction: 0,
  sumOfFileSizesAvailableForDownload: 0,
}

const addFilesToDownloadListRequest: AddToDownloadListRequest = {
  query: query,
  concreteType:
    'org.sagebionetworks.repo.model.download.AddToDownloadListRequest',
}

const addFilesToDownloadListResponse: AddToDownloadListResponse = {
  concreteType:
    'org.sagebionetworks.repo.model.download.AddToDownloadListResponse',
  numberOfFilesAdded: 1,
}

function renderComponent(
  componentProps?: DownloadConfirmationProps,
  wrapperProps?: SynapseContextType,
) {
  return render(
    // <QueryContextProvider queryContext={queryContext}>
    //   <QueryVisualizationContextProvider
    //     queryVisualizationContext={queryVisualizationContext}
    //   >
    <DownloadConfirmation {...componentProps} />,
    //   </QueryVisualizationContextProvider>
    // </QueryContextProvider>,
    {
      wrapper: createWrapper(wrapperProps),
    },
  )
}

describe('DownloadConfirmation', () => {
  addFilesToDownloadRequestFn = SynapseClient.addFilesToDownloadListV2 = jest
    .fn()
    .mockResolvedValue(addFilesToDownloadListResponse)

  TestDownloadSpeed.testDownloadSpeed = jest.fn().mockResolvedValue(55)

  getDownloadListStatisticsResultsFn = SynapseClient.getDownloadListStatistics =
    jest.fn().mockResolvedValue(filesStatisticsResponse)

  SynapseClient.getQueryTableResults = jest
    .fn()
    .mockResolvedValue(queryBundleResponse)

  const props: DownloadConfirmationProps = {
    fnClose: mockClose,
    topLevelControlsState: {
      showDownloadConfirmation: true,
    },
    setTopLevelControlsState: jest.fn(),
    getLastQueryRequest: () => queryBundleRequest,
  }

  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('should render without crashing with just a cancel button', () => {
    renderComponent(props)
    screen.getByRole('alert')
    screen.getByRole('button', { name: 'Cancel' })
  })

  it("should call the 'close' function on cancel", () => {
    renderComponent(props)
    userEvent.click(screen.getByRole('button', { name: 'Cancel' }))
    expect(props.fnClose).toHaveBeenCalled()
  })

  it("should call getQueryTableResults with correct params and show 'add' and 'cancel' buttons once info is loaded", async () => {
    renderComponent(props)
    await waitFor(() => expect(screen.getAllByRole('button')).toHaveLength(2))
    screen.getByRole('button', { name: 'Cancel' })
    screen.getByRole('button', { name: 'Add' })
  })

  it('should call addFilesToDownload with correct params and show correct text while processing with no buttons', async () => {
    renderComponent(props)
    const addButton = await screen.findByRole('button', { name: 'Add' })
    //click to add
    userEvent.click(addButton)

    expect(addFilesToDownloadRequestFn).toHaveBeenCalledWith(
      addFilesToDownloadListRequest,
      MOCK_CONTEXT_VALUE.accessToken,
    )
    screen.getByText('Adding Files To List')
    expect(screen.queryAllByRole('button')).toHaveLength(0)
  })

  it("should show the correct 'view downloads' link when done adding", async () => {
    renderComponent(props)
    userEvent.click(await screen.findByRole('button', { name: 'Add' }))

    await waitFor(() =>
      expect(mockToastFn).toBeCalledWith(
        'File(s) were successfully added to your Download List.',
        'success',
        expect.objectContaining({
          primaryButtonConfig: expect.objectContaining({
            text: 'View Download List',
          }),
        }),
      ),
    )
  })

  it('displays a warning when files are already in the download list', async () => {
    getDownloadListStatisticsResultsFn.mockResolvedValue({
      ...filesStatisticsResponse,
      totalNumberOfFiles: 1,
    })

    renderComponent(props)

    await waitFor(() =>
      screen.getByText('Files that you add will be mixed in with the files already in your download list', {
        exact: false,
      }),
    )
  })
})
