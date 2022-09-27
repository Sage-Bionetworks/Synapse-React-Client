import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import React from 'react'
import SubmissionPage, {
  SubmissionPageProps,
} from '../../../../lib/containers/dataaccess/SubmissionPage'
import { createWrapper } from '../../../../lib/testutils/TestingLibraryUtils'
import {
  ACCESS_REQUIREMENT_ACL,
  ACCESS_REQUIREMENT_BY_ID,
  ACCESS_REQUIREMENT_WIKI_PAGE_KEY,
  DATA_ACCESS_SUBMISSION_BY_ID,
} from '../../../../lib/utils/APIConstants'
import {
  BackendDestinationEnum,
  getEndpoint,
} from '../../../../lib/utils/functions/getEndpoint'
import {
  AccessControlList,
  ACCESS_TYPE,
  SubmissionState,
} from '../../../../lib/utils/synapseTypes'
import {
  mockApprovedSubmission,
  mockRejectedSubmission,
  mockSubmissions,
  mockSubmittedSubmission,
} from '../../../../mocks/dataaccess/MockSubmission'
import { mockManagedACTAccessRequirement } from '../../../../mocks/mockAccessRequirements'
import { rest, server } from '../../../../mocks/msw/server'
import {
  MOCK_USER_ID,
  MOCK_USER_NAME,
  MOCK_USER_NAME_2,
} from '../../../../mocks/user/mock_user_profile'

function renderComponent(props: SubmissionPageProps) {
  render(<SubmissionPage {...props} />, {
    wrapper: createWrapper(),
  })
}

const SUBMITTED_SUBMISSION_ID = mockSubmittedSubmission.id
const APPROVED_SUBMISSION_ID = mockApprovedSubmission.id
const REJECTED_SUBMISSION_ID = mockRejectedSubmission.id

const onServerRecievedUpdate = jest.fn()
const onRejectCallbackFn = jest.fn()

// Mock links to file handles
jest.mock('../../../../lib/containers/widgets/FileHandleLink', () => ({
  FileHandleLink: ({ fileHandleAssociation }) => (
    <div data-testid="FileHandleLink">
      {JSON.stringify(fileHandleAssociation)}
    </div>
  ),
}))

// Mock the access requirement wiki
jest.mock('../../../../lib/containers/markdown/MarkdownSynapse', () => ({
  __esModule: true,
  default: () => <div>Wiki Contents...</div>,
}))

describe('Submission Page tests', () => {
  beforeAll(() => {
    server.listen()

    // Configure MSW
    server.use(
      // Return submission based on ID
      rest.get(
        `${getEndpoint(
          BackendDestinationEnum.REPO_ENDPOINT,
        )}${DATA_ACCESS_SUBMISSION_BY_ID(':id')}`,

        async (req, res, ctx) => {
          const submission = mockSubmissions.find(
            submission => req.params.id === submission.id,
          )
          return res(ctx.status(200), ctx.json(submission))
        },
      ),

      // Return a mocked access requirement
      rest.get(
        `${getEndpoint(
          BackendDestinationEnum.REPO_ENDPOINT,
        )}${ACCESS_REQUIREMENT_BY_ID(':id')}`,

        async (req, res, ctx) => {
          return res(ctx.status(200), ctx.json(mockManagedACTAccessRequirement))
        },
      ),
      // Return a 404 for the AR's ACL (there are no designated reviewers)
      rest.get(
        `${getEndpoint(
          BackendDestinationEnum.REPO_ENDPOINT,
        )}${ACCESS_REQUIREMENT_ACL(':id')}`,

        async (req, res, ctx) => {
          return res(ctx.status(404), ctx.json({ status: 'Not Found' }))
        },
      ),
      // Return a wiki page key for the AR (we'll mock out the actual wiki part)
      rest.get(
        `${getEndpoint(
          BackendDestinationEnum.REPO_ENDPOINT,
        )}${ACCESS_REQUIREMENT_WIKI_PAGE_KEY(':id')}`,

        async (req, res, ctx) => {
          return res(
            ctx.status(200),
            ctx.json({
              wikiPageId: 123,
              ownerObjectId: mockManagedACTAccessRequirement.id,
              ownerObjectType: 'ACCESS_REQUIREMENT',
            }),
          )
        },
      ),
      rest.put(
        `${getEndpoint(
          BackendDestinationEnum.REPO_ENDPOINT,
        )}${DATA_ACCESS_SUBMISSION_BY_ID(':id')}`,
        async (req, res, ctx) => {
          onServerRecievedUpdate(req.body)
          return res(ctx.status(200))
        },
      ),
    )
  })
  afterEach(() => {
    server.restoreHandlers()
    jest.clearAllMocks()
  })
  afterAll(() => server.close())

  it('Renders all fields', async () => {
    renderComponent({
      submissionId: SUBMITTED_SUBMISSION_ID,
      onRejectClicked: onRejectCallbackFn,
    })

    await screen.findByText('Status')
    await screen.findByText('SUBMITTED')

    await screen.findByRole('button', { name: 'Approve' })
    await screen.findByRole('button', { name: 'Reject' })

    await screen.findByText('Assigned Reviewer')
    await screen.findByText('Synapse Access and Compliance Team')

    await screen.findByText('Conditions')
    await screen.findByText('Expiration period: 1 day(s)')

    await screen.findByText('Modified By')
    await screen.findByText('Modified On')

    await screen.findByText('Submitted By')
    await screen.findByText('Submitted On')

    await screen.findByText(
      'Data Requesters (' +
        mockSubmittedSubmission.accessorChanges.length.toString() +
        ')',
    )

    // This username appears three times, in 'submittedBy', 'modifiedBy', and as an accessor
    expect(await screen.findAllByText('@' + MOCK_USER_NAME)).toHaveLength(3)

    // This username only appears as an accessor
    await screen.findByText('@' + MOCK_USER_NAME_2)

    await screen.findByText('Institution')
    await screen.findByText(
      mockSubmittedSubmission.researchProjectSnapshot.institution,
    )

    await screen.findByText('Project Lead')
    await screen.findByText(
      mockSubmittedSubmission.researchProjectSnapshot.projectLead,
    )

    await screen.findByText('Intended Data Use Statement')
    await screen.findByText(
      mockSubmittedSubmission.researchProjectSnapshot.intendedDataUseStatement,
    )

    // The page should show 4 file handle downloads - the IRB, the DUC, and the two additional attachments
    expect(await screen.findAllByTestId('FileHandleLink')).toHaveLength(4)
  })

  it('Allows approving a SUBMITTED submission', async () => {
    renderComponent({
      submissionId: SUBMITTED_SUBMISSION_ID,
      onRejectClicked: onRejectCallbackFn,
    })

    const approveButton = await screen.findByRole('button', { name: 'Approve' })

    await userEvent.click(approveButton)

    // Modal appears
    await screen.findByText('Approve Request?')
    const approveConfirmButton = (
      await screen.findAllByRole('button', { name: 'Approve' })
    )[0]

    await userEvent.click(approveConfirmButton)

    await waitFor(() =>
      expect(onServerRecievedUpdate).toBeCalledWith(
        expect.objectContaining({
          newState: SubmissionState.APPROVED,
        }),
      ),
    )
  })

  it('Invokes a callback when rejecting a SUBMITTED submission', async () => {
    renderComponent({
      submissionId: SUBMITTED_SUBMISSION_ID,
      onRejectClicked: onRejectCallbackFn,
    })

    const approveButton = await screen.findByRole('button', { name: 'Reject' })

    await userEvent.click(approveButton)

    await waitFor(() => expect(onRejectCallbackFn).toBeCalled())
    expect(onServerRecievedUpdate).not.toHaveBeenCalled()
  })

  it('Does not render action buttons for an APPROVED submission', () => {
    renderComponent({
      submissionId: APPROVED_SUBMISSION_ID,
      onRejectClicked: onRejectCallbackFn,
    })

    expect(
      screen.queryByRole('button', { name: 'Approve' }),
    ).not.toBeInTheDocument()
    expect(
      screen.queryByRole('button', { name: 'Reject' }),
    ).not.toBeInTheDocument()
  })

  it('Does not render action buttons for a REJECTED submission', () => {
    renderComponent({
      submissionId: REJECTED_SUBMISSION_ID,
      onRejectClicked: onRejectCallbackFn,
    })

    expect(
      screen.queryByRole('button', { name: 'Approve' }),
    ).not.toBeInTheDocument()
    expect(
      screen.queryByRole('button', { name: 'Reject' }),
    ).not.toBeInTheDocument()
  })

  // Flaky in TravisCI
  it.skip('Renders a user card if the AR has an ACL', async () => {
    // Fetching the AR's ACL will yield a designated reviewer
    server.use(
      rest.get(
        `${getEndpoint(
          BackendDestinationEnum.REPO_ENDPOINT,
        )}${ACCESS_REQUIREMENT_ACL(':id')}`,

        async (req, res, ctx) => {
          const responseBody: AccessControlList = {
            id: '1234',
            resourceAccess: [
              {
                principalId: MOCK_USER_ID,
                accessType: [ACCESS_TYPE.REVIEW_SUBMISSIONS],
              },
            ],
          }
          return res(ctx.status(200), ctx.json(responseBody))
        },
      ),
    )

    renderComponent({
      submissionId: SUBMITTED_SUBMISSION_ID,
      onRejectClicked: onRejectCallbackFn,
    })

    // When an ACL exists, don't show the ACT as the reviewer
    expect(
      screen.queryByText('Synapse Access and Compliance Team'),
    ).not.toBeInTheDocument()

    // User 1 now appears as the submitter, modifier, an accessor, and the Reviewer
    await waitFor(() =>
      expect(screen.getAllByText('@' + MOCK_USER_NAME)).toHaveLength(4),
    )
  })
})
