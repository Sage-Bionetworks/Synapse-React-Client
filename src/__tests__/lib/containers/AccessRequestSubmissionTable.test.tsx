import * as React from 'react'
import userEvent from '@testing-library/user-event'
import { render, screen, waitFor } from '@testing-library/react'
import {
  AccessRequestSubmissionTable,
  AccessRequestSubmissionTableProps,
} from '../../../lib/containers/AccessRequestSubmissionTable'
import { createWrapperAndQueryClient } from '../../../lib/testutils/TestingLibraryUtils'
import {
  SubmissionReviewerFilterType,
  SubmissionSearchRequest,
  SubmissionSearchResponse,
} from '../../../lib/utils/synapseTypes/AccessSubmission'
import { AccessType, SubmissionState } from '../../../lib/utils/synapseTypes'
import { rest, server } from '../../../mocks/msw/server'
import {
  BackendDestinationEnum,
  getEndpoint,
} from '../../../lib/utils/functions/getEndpoint'
import { ACCESS_REQUEST_SUBMISSION_SEARCH } from '../../../lib/utils/APIConstants'
import { mockSubmissionSearchResponse } from '../../../mocks/mockAccessRequest'
import {
  MOCK_USER_NAME,
  MOCK_USER_NAME_2,
} from '../../../mocks/user/mock_user_profile'
import { upperFirst } from 'lodash-es'
import { formatDate } from '../../../lib/utils/functions/DateFormatter'
import moment from 'moment'

function renderComponent(props: AccessRequestSubmissionTableProps) {
  const { wrapperFn } = createWrapperAndQueryClient()
  render(<AccessRequestSubmissionTable {...props} />, {
    wrapper: wrapperFn,
  })
}

const onServiceRecievedRequest = jest.fn()
const onServiceRecievedRequestForNextPage = jest.fn()

const nextPageToken = 'mock-npt'

const mockSubmissionSearchResponsePage2: SubmissionSearchResponse = {
  results: [
    {
      id: '9608424',
      createdOn: '2017-08-23T18:48:20.892Z',
      modifiedOn: '2022-05-20T22:26:44.406Z',
      accessRequirementName: 'Access Requirement on Page 2',
      accessRequirementVersion: '269',
      accessRequirementId: '123',
      submitterId: '456',
      state: SubmissionState.SUBMITTED,
      accessorChanges: [
        {
          userId: '456',
          type: AccessType.GAIN_ACCESS,
        },
      ],
      accessRequirementReviewerIds: ['12345'],
    },
  ],
}

describe('Access Request Submission Table tests', () => {
  beforeAll(() => {
    server.listen()

    // Configure MSW
    server.use(
      rest.post(
        `${getEndpoint(
          BackendDestinationEnum.REPO_ENDPOINT,
        )}${ACCESS_REQUEST_SUBMISSION_SEARCH}`,

        async (req, res, ctx) => {
          onServiceRecievedRequest(req.body)
          let response
          if (
            (req.body as SubmissionSearchRequest).nextPageToken ===
            nextPageToken
          ) {
            onServiceRecievedRequestForNextPage()
            response = mockSubmissionSearchResponsePage2
          } else {
            response = {
              ...mockSubmissionSearchResponse,
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
    const accessorId = '456'
    const accessRequirementId = '1234321'
    const submissionState = SubmissionState.APPROVED
    const reviewerId = '12345'
    const reviewerFilterType = SubmissionReviewerFilterType.ALL

    const props = {
      showSubmitter: true,
      showStatus: true,
      showRequestors: true,
      accessorId: accessorId,
      accessRequirementId: accessRequirementId,
      submissionState: submissionState,
      reviewerId: reviewerId,
      reviewerFilterType: reviewerFilterType,
    }

    renderComponent(props)

    await waitFor(() => expect(onServiceRecievedRequest).toHaveBeenCalled())
  })

  it('Renders all headers and a row of data', async () => {
    renderComponent({
      showSubmitter: true,
      showStatus: true,
      showRequestors: true,
    })
    await screen.findByRole('table')
    await waitFor(() =>
      expect(screen.getAllByRole('row')).toHaveLength(
        mockSubmissionSearchResponse.results.length + 1,
      ),
    )

    screen.getByRole('columnheader', { name: 'REQUEST' })
    screen.getByRole('columnheader', { name: 'Access Requirement Name' })
    screen.getByRole('columnheader', { name: 'Submitter' })
    screen.getByRole('columnheader', { name: 'Status' })
    screen.getByRole('columnheader', { name: 'Requestors' })
    screen.getByRole('columnheader', { name: 'Reviewer(s)' })
    screen.getByRole('columnheader', { name: /^Created Date/ })

    screen.getByRole('cell', {
      name: mockSubmissionSearchResponse.results[0].id,
    })
    screen.getByRole('cell', {
      name: mockSubmissionSearchResponse.results[0].accessRequirementName,
    })
    await screen.findAllByText('@' + MOCK_USER_NAME)
    screen.getByRole('cell', {
      name: upperFirst(
        mockSubmissionSearchResponse.results[0].state.toLocaleLowerCase(),
      ),
    })
    await screen.findAllByText('@' + MOCK_USER_NAME_2)
    screen.getByRole('cell', { name: 'Synapse Access and Compliance Team' })
    screen.getByRole('cell', {
      name: formatDate(
        moment(mockSubmissionSearchResponse.results[0].createdOn),
      ),
    })
  })

  it('Handles pagination', async () => {
    renderComponent({
      showSubmitter: true,
      showStatus: true,
      showRequestors: true,
    })
    await screen.findByRole('table')
    await waitFor(() =>
      expect(screen.getAllByRole('row')).toHaveLength(
        mockSubmissionSearchResponse.results.length + 1, // +1 for the header row
      ),
    )

    // There is more than one page, so a button should be shown
    const showMoreButton = await screen.findByRole('button', {
      name: 'Show More',
    })

    // Clicking the button should make a request for the next page
    userEvent.click(showMoreButton)
    await waitFor(() =>
      expect(onServiceRecievedRequest).toHaveBeenLastCalledWith(
        expect.objectContaining({ nextPageToken: nextPageToken }),
      ),
    )
    expect(onServiceRecievedRequestForNextPage).toHaveBeenCalled()

    // Second page of data should be shown

    await waitFor(() =>
      expect(screen.getAllByRole('row')).toHaveLength(
        mockSubmissionSearchResponse.results.length +
          mockSubmissionSearchResponsePage2.results.length +
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
    renderComponent({
      showSubmitter: true,
      showStatus: true,
      showRequestors: true,
    })

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
    userEvent.click(createdOnSortButton)

    // desc -> asc
    await waitFor(() =>
      expect(onServiceRecievedRequest).toHaveBeenLastCalledWith(
        expect.objectContaining({
          sort: [{ field: 'CREATED_ON', direction: 'ASC' }],
        }),
      ),
    )
  })
})
