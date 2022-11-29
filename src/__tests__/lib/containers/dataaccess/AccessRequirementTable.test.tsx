import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import dayjs from 'dayjs'
import React from 'react'
import { QueryClient } from 'react-query'
import {
  AccessRequirementTable,
  AccessRequirementTableProps,
} from '../../../../lib/containers/dataaccess/AccessRequirementTable'
import { createWrapperAndQueryClient } from '../../../../lib/testutils/TestingLibraryUtils'
import { ACCESS_REQUIREMENT_SEARCH } from '../../../../lib/utils/APIConstants'
import { formatDate } from '../../../../lib/utils/functions/DateFormatter'
import {
  BackendDestinationEnum,
  getEndpoint,
} from '../../../../lib/utils/functions/getEndpoint'
import { ACCESS_TYPE } from '../../../../lib/utils/synapseTypes'
import {
  AccessRequirementSearchRequest,
  AccessRequirementSearchResponse,
} from '../../../../lib/utils/synapseTypes/AccessRequirement/AccessRequirementSearch'
import mockProjectData from '../../../../mocks/entity/mockProject'
import { mockSearchResults } from '../../../../mocks/mockAccessRequirements'
import { rest, server } from '../../../../mocks/msw/server'
import { MOCK_USER_NAME } from '../../../../mocks/user/mock_user_profile'

const MOCK_PROJECT_ID = mockProjectData.id
const MOCK_PROJECT_NAME = mockProjectData.name

const mockOnCreateNewAR = jest.fn()
let queryClient: QueryClient

function renderComponent(props: AccessRequirementTableProps) {
  const { wrapperFn, queryClient: wrapperQueryClient } =
    createWrapperAndQueryClient()
  queryClient = wrapperQueryClient
  render(
    <AccessRequirementTable
      {...props}
      onCreateNewAccessRequirementClicked={mockOnCreateNewAR}
    />,
    {
      wrapper: wrapperFn,
    },
  )
}

const onServiceRecievedRequest = jest.fn()
const onServiceRecievedRequestForNextPage = jest.fn()

const nextPageToken = 'mock-npt'

const mockSearchResultsPage2: AccessRequirementSearchResponse = {
  results: [
    {
      id: '9608424',
      createdOn: '2017-08-23T18:48:20.892Z',
      modifiedOn: '2022-05-20T22:26:44.406Z',
      name: 'Access Requirement on Page 2',
      version: '269',
      relatedProjectIds: [MOCK_PROJECT_ID],
      reviewerIds: [],
    },
  ],
}

describe('Access Requirement Table tests', () => {
  beforeAll(() => {
    server.listen()

    // Configure MSW
    server.use(
      rest.post(
        `${getEndpoint(
          BackendDestinationEnum.REPO_ENDPOINT,
        )}${ACCESS_REQUIREMENT_SEARCH}`,

        async (req, res, ctx) => {
          onServiceRecievedRequest(req.body)
          let response
          if (
            (req.body as AccessRequirementSearchRequest).nextPageToken ===
            nextPageToken
          ) {
            onServiceRecievedRequestForNextPage()
            response = mockSearchResultsPage2
          } else {
            response = {
              ...mockSearchResults,
              nextPageToken: nextPageToken,
            }
          }

          return res(ctx.status(200), ctx.json(response))
        },
      ),
    )
  })

  afterEach(() => {
    server.restoreHandlers()
    jest.clearAllMocks()
  })

  afterAll(() => server.close())

  it('Passes along props to the search request', async () => {
    const nameContains = 'abc'
    const relatedProject = 'syn123'
    const reviewerId = '123'
    const accessType = ACCESS_TYPE.REVIEW_SUBMISSIONS

    const props = {
      nameContains: nameContains,
      relatedProjectId: relatedProject,
      reviewerId: reviewerId,
      accessType: accessType,
    }

    const defaultSort = [{ field: 'CREATED_ON', direction: 'DESC' }]

    renderComponent(props)

    await waitFor(() => expect(onServiceRecievedRequest).toHaveBeenCalled())

    expect(onServiceRecievedRequest).toHaveBeenCalledWith(
      expect.objectContaining({
        ...props,
        sort: defaultSort,
      }),
    )
  })

  it('Renders all headers and a row of data', async () => {
    renderComponent({})
    await screen.findByRole('table')
    await waitFor(() =>
      expect(screen.getAllByRole('row')).toHaveLength(
        mockSearchResults.results.length + 1, // +1 for the header row
      ),
    )

    // Check each column header -- the sortable columns use a regex because the sort button label appears in the name
    screen.getByRole('columnheader', { name: 'AR ID' })
    screen.getByRole('columnheader', {
      name: /^Access Requirement Name/,
    })
    screen.getByRole('columnheader', { name: 'Related to Projects' })
    screen.getByRole('columnheader', { name: 'Reviewer' })
    screen.getByRole('columnheader', { name: 'Last Modified' })
    screen.getByRole('columnheader', { name: /^Created On/ })

    // check the first row of data
    screen.getByRole('cell', { name: mockSearchResults.results[0].id })
    screen.getByRole('cell', { name: mockSearchResults.results[0].name })
    // The related project and reviewer ID both get rendered
    await screen.findAllByText(MOCK_PROJECT_NAME)
    await screen.findAllByText('@' + MOCK_USER_NAME)
    screen.getByRole('cell', {
      name: formatDate(dayjs(mockSearchResults.results[0].modifiedOn)),
    })
    screen.getByRole('cell', {
      name: formatDate(dayjs(mockSearchResults.results[0].createdOn)),
    })
  })

  it('Shows button to create an access requirement', async () => {
    renderComponent({})

    const button = await screen.findByRole('button', {
      name: 'New Access Requirement',
    })

    await userEvent.click(button)

    expect(mockOnCreateNewAR).toHaveBeenCalled()
  })

  it('Handles pagination', async () => {
    renderComponent({})
    await screen.findByRole('table')
    await waitFor(() =>
      expect(screen.getAllByRole('row')).toHaveLength(
        mockSearchResults.results.length + 1, // +1 for the header row
      ),
    )

    // There is more than one page, so a button should be shown
    const showMoreButton = await screen.findByRole('button', {
      name: 'Show More',
    })

    // Clicking the button should make a request for the next page
    await userEvent.click(showMoreButton)
    await waitFor(() =>
      expect(onServiceRecievedRequest).toHaveBeenLastCalledWith(
        expect.objectContaining({ nextPageToken: nextPageToken }),
      ),
    )
    expect(onServiceRecievedRequestForNextPage).toHaveBeenCalled()

    // Second page of data should be shown

    await waitFor(() =>
      expect(screen.getAllByRole('row')).toHaveLength(
        mockSearchResults.results.length +
          mockSearchResultsPage2.results.length +
          1, // +1 for the header row
      ),
    )

    // No third page, so the next button should be gone
    expect(
      screen.queryByRole('button', {
        name: 'Show More',
      }),
    ).not.toBeInTheDocument()
  })

  it('Handles sorting', async () => {
    renderComponent({})

    await waitFor(() => expect(onServiceRecievedRequest).toHaveBeenCalled())

    // By default, should sort by created on, descending
    const defaultSort = [{ field: 'CREATED_ON', direction: 'DESC' }]
    expect(onServiceRecievedRequest).toHaveBeenCalledWith(
      expect.objectContaining({
        sort: defaultSort,
      }),
    )

    // clicking the current sort should reverse the direction
    const createdOnSortButton = screen.getByLabelText('Sort by Created On')
    await userEvent.click(createdOnSortButton)

    // desc -> asc
    await waitFor(() =>
      expect(onServiceRecievedRequest).toHaveBeenLastCalledWith(
        expect.objectContaining({
          sort: [{ field: 'CREATED_ON', direction: 'ASC' }],
        }),
      ),
    )

    // asc -> desc
    // Clear the query client to verify the requested data changes (otherwise we get a cache hit)
    queryClient.clear()
    await userEvent.click(createdOnSortButton)
    await waitFor(() =>
      expect(onServiceRecievedRequest).toHaveBeenLastCalledWith(
        expect.objectContaining({
          sort: [{ field: 'CREATED_ON', direction: 'DESC' }],
        }),
      ),
    )

    // clicking a different column (name) should sort by that column, descending
    const nameSortButton = screen.getByLabelText('Sort by Name')
    await userEvent.click(nameSortButton)
    await waitFor(() =>
      expect(onServiceRecievedRequest).toHaveBeenLastCalledWith(
        expect.objectContaining({
          sort: [{ field: 'NAME', direction: 'DESC' }],
        }),
      ),
    )
  })
})
