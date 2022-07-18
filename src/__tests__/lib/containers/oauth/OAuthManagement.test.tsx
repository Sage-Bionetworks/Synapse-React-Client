import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import moment from 'moment'
import React from 'react'
import { OAuthManagement } from '../../../../lib/containers/oauth/OAuthManagement'
import { createWrapper } from '../../../../lib/testutils/TestingLibraryUtils'
import { formatDate } from '../../../../lib/utils/functions/DateFormatter'
import { useGetOAuthClientInfinite } from '../../../../lib/utils/hooks/SynapseAPI'
import { server } from '../../../../mocks/msw/server'
import {
  mockUserProfileData,
  mockUserProfileData2,
} from '../../../../mocks/user/mock_user_profile'

jest.mock('../../../../lib/utils/hooks/SynapseAPI/oauth/useOAuthClient', () => {
  return {
    useGetOAuthClientInfinite: jest.fn(),
  }
})

const mockFetchNextPage = jest.fn()
const mockGetOAuthClientInfinite = useGetOAuthClientInfinite as jest.Mock

const mockClientList1 = {
  results: [
    {
      client_id: mockUserProfileData.ownerId,
      client_name: mockUserProfileData.firstName,
      verified: false,
      redirect_uris: [mockUserProfileData.url],
      client_uri: mockUserProfileData.url,
      policy_uri: mockUserProfileData.url,
      tos_uri: mockUserProfileData.url,
      createdOn: mockUserProfileData.createdOn,
      modifiedOn: mockUserProfileData.createdOn,
      createdBy: mockUserProfileData.userName,
    },
  ],
  nextPageToken: '50a0',
}

const mockClientList2 = {
  results: [
    {
      client_id: mockUserProfileData2.ownerId,
      client_name: mockUserProfileData2.firstName,
      verified: false,
      redirect_uris: [mockUserProfileData2.url],
      client_uri: mockUserProfileData2.url,
      policy_uri: mockUserProfileData2.url,
      tos_uri: mockUserProfileData2.url,
      createdOn: mockUserProfileData2.createdOn,
      modifiedOn: mockUserProfileData2.createdOn,
      createdBy: mockUserProfileData2.userName,
    },
  ],
  nextPageToken: null,
}

const renderComponent = () => {
  render(<OAuthManagement />, {
    wrapper: createWrapper(),
  })
}

describe('oAuthManagement tests', () => {
  beforeAll(() => {
    server.listen()
    mockGetOAuthClientInfinite.mockReturnValue({
      data: {
        pages: [mockClientList1, mockClientList2],
        pageParams: [],
      },
      fetchNextPage: mockFetchNextPage,
      hasNextPage: true,
      isLoading: false,
      isSuccess: true,
    })
  })
  afterEach(() => {
    server.restoreHandlers()
    jest.clearAllMocks()
  })
  afterAll(() => server.close())

  it('Renders all headers and a row of data', async () => {
    renderComponent()

    // Check column header
    await screen.findByText('Created')
    await screen.findByText('Modified')
    await screen.findByText('Client')
    await screen.findByText('Verified')
    await screen.findByText('App Secret')
    await screen.findByText('Actions')

    // Check first row of data
    screen.findByText(formatDate(moment(mockClientList1.results[0].createdOn)))
    screen.findByText(formatDate(moment(mockClientList1.results[0].modifiedOn)))
    screen.findByText(mockClientList1.results[0].client_name)

    // Currently place holders for verification / generate secret/ actions.
    // Once implemented need to update tests acoordingly
    screen.findByText('SUBMIT_VERIFICATION_PLACE_HOLDER')
    screen.findByText('GENERATE_PLACEHOLDER')
    screen.findByText('ACTIONS_PLACEHOLDER')
  })

  it('Handles pagination', async () => {
    renderComponent()

    const loadButton = screen.queryByRole('button', { name: 'Load more' })
    expect(
      screen.queryByRole('button', { name: 'Load more' }),
    ).toBeInTheDocument()

    userEvent.click(loadButton!)

    await waitFor(() =>
      expect(screen.getAllByRole('row')).toHaveLength(
        mockClientList1.results.length + mockClientList2.results.length + 1,
      ),
    )
  })
})
