import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import React from 'react'
import { mockAllIsIntersecting } from 'react-intersection-observer/test-utils'
import { mockUserProfileData } from '../../../../mocks/mock_user_profile'
import DownloadListTableV2, {
  DownloadListTableV2Props,
} from '../../../../lib/containers/download_list_v2/DownloadListTableV2'
import { useGetAvailableFilesToDownloadInfinite } from '../../../../lib/utils/hooks/SynapseAPI/useGetAvailableFilesToDownload'
import { DownloadListItemResult } from '../../../../lib/utils/synapseTypes/DownloadListV2/DownloadListItemResult'

jest.mock('../../../../lib/utils/SynapseClient', () => {
  return {
    removeItemFromDownloadListV2: jest.fn(),
    getUserProfileById: jest.fn().mockImplementation(() => Promise.resolve(mockUserProfileData)),
  }
})
jest.mock('../../../../lib/utils/hooks/SynapseAPI/useGetAvailableFilesToDownload', () => {
  return {
    useGetAvailableFilesToDownloadInfinite: jest.fn(),
  }
})

const mockFetchNextPage = jest.fn()
const mockUseGetAvailableFilesToDownloadInfinite = useGetAvailableFilesToDownloadInfinite as jest.Mock

const defaultProps: DownloadListTableV2Props = {
  token: 'abcd',
}

const page1: Partial<DownloadListItemResult>[] = [
  {
    fileEntityId: 'syn1',
    versionNumber: 1,
    createdOn: 'yesterday',
    addedOn: 'today',
    fileName: 'file1.txt',
    fileSizeBytes: 1,
    projectId: 'syn200',
    projectName: 'Project that has dataset',
    createdBy: '100000',
  },
]

const page2: Partial<DownloadListItemResult>[] = [
  {
    fileEntityId: 'syn2',
    versionNumber: 1,
    createdOn: 'yesterday',
    addedOn: 'today',
    fileName: 'file2.txt',
    fileSizeBytes: 2,
    projectId: 'syn200',
    projectName: 'Project that has dataset',
    createdBy: '100000',
  },
]

function renderComponent(propOverrides?: Partial<DownloadListTableV2Props>) {
  return render(<DownloadListTableV2 {...defaultProps} {...propOverrides} />)
}

describe('DownloadListTableV2 tests', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })
  it('loads more available download files when inView', async () => {
    mockAllIsIntersecting(true)
    mockUseGetAvailableFilesToDownloadInfinite.mockReturnValue({
      data: {
        pages: [
          {
            reponseDetails: {
              page: page1,
              nextPageToken: '50a0',
            },
          },
          {
            reponseDetails: {
              page: page2,
              nextPageToken: null,
            },
          },
        ],
        pageParams: [],
      },
      fetchNextPage: mockFetchNextPage,
      hasNextPage: true,
      isLoading: false,
      isSuccess: true,
    })

    renderComponent()

    const fileEntity1 = await screen.findAllByText('file1.txt')
    expect(fileEntity1).toHaveLength(1)
    const fileEntity2 = await screen.findAllByText('file2.txt')
    expect(fileEntity2).toHaveLength(1)
  })
})
