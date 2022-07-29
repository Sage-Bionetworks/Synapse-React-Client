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
  mockClientList1,
  mockClientList2,
} from '../../../../mocks/oauth/MockClient'

jest.mock('../../../../lib/utils/hooks/SynapseAPI/oauth/useOAuthClient', () => {
  return {
    useGetOAuthClientInfinite: jest.fn(),
  }
})

const mockFetchNextPage = jest.fn()
const mockGetOAuthClientInfinite = useGetOAuthClientInfinite as jest.Mock

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
        pages: [
          {
            results: mockClientList1.results,
            nextTokenPage: mockClientList1.nextPageToken,
          },
          {
            results: mockClientList2.results,
            nextTokenPage: mockClientList2.nextPageToken,
          },
        ],
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
    screen.findAllByText(
      formatDate(moment(mockClientList1.results[0].createdOn)),
    )
    screen.findAllByText(
      formatDate(moment(mockClientList1.results[0].modifiedOn)),
    )
    screen.findByText(mockClientList1.results[0].client_name)

    // Currently place holders for verification / generate secret
    // Once implemented need to update tests acoordingly
    await screen.findByText('Yes')
    await screen.findAllByRole('button', { name: 'EDIT' })
    await screen.findAllByText('GENERATE_PLACEHOLDER')
  })

  it('Handles pagination', async () => {
    renderComponent()

    const loadButton = screen.queryByRole('button', { name: 'Load more' })
    expect(
      screen.getByRole('button', { name: 'Load more' }),
    ).toBeInTheDocument()

    userEvent.click(loadButton!)

    await waitFor(() =>
      expect(screen.getAllByRole('row')).toHaveLength(
        mockClientList1.results.length + mockClientList2.results.length + 1,
      ),
    )
  })
})
