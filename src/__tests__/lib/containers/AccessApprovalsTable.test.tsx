import * as React from 'react'
import { rest, server } from '../../../mocks/msw/server'
import { render, screen } from '@testing-library/react'
import {
  AccessApprovalsTable,
  AccessApprovalsTableProps,
} from '../../../lib/containers/AccessApprovalsTable'
import { createWrapper } from '../../../lib/testutils/TestingLibraryUtils'
import { MOCK_USER_ID } from '../../../mocks/user/mock_user_profile'
import {
  mockApprovalSearchResponse,
  mockAccessApprovalSearchResult,
} from '../../../mocks/MockAccessApprovals'
import {
  BackendDestinationEnum,
  getEndpoint,
} from '../../../lib/utils/functions/getEndpoint'
import { mockAllIsIntersecting } from 'react-intersection-observer/test-utils'

function renderComponent(props: AccessApprovalsTableProps) {
  render(<AccessApprovalsTable {...props} />, {
    wrapper: createWrapper(),
  })
}

const onServerRecievedPost = jest.fn()

describe('AccessApprovalsTable tests', () => {
  beforeAll(() => {
    server.listen()
    server.use(
      rest.get(
        `${getEndpoint(
          BackendDestinationEnum.REPO_ENDPOINT,
        )}/repo/v1/accessApproval/search`,
        async (req, res, ctx) => {
          onServerRecievedPost(req.body)
          console.log(res)
          return res(ctx.status(200), ctx.json(mockApprovalSearchResponse))
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
      accessorId: MOCK_USER_ID.toString(),
    })

    await screen.findByText('AR ID')
    await screen.findByText('Access Requirement Name')
    await screen.findByText('Submitter')
    await screen.findByText('Status')
    await screen.findByText('Modified Date')
    await screen.findByText('Expires')
  })

  it('Renders all of the data', async () => {
    renderComponent({
      accessorId: MOCK_USER_ID.toString(),
    })
    mockAllIsIntersecting(true)
    await screen.findAllByText(
      mockAccessApprovalSearchResult.accessRequirementName,
    )
  })
})
