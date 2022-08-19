import { render, screen } from '@testing-library/react'
import React from 'react'
import { mockAllIsIntersecting } from 'react-intersection-observer/test-utils'
import {
  SubmissionInfoPage,
  SubmissionInfoPageRequest,
} from '../../../lib/utils/synapseTypes/SubmissionInfo'
import IDUReport from '../../../lib/containers/IDUReport'
import { createWrapper } from '../../../lib/testutils/TestingLibraryUtils'
import {
  MOCK_USER_ID,
  MOCK_USER_ID_2,
} from '../../../mocks/user/mock_user_profile'
import { rest, server } from '../../../mocks/msw/server'
import { APPROVED_SUBMISSION_INFO } from '../../../lib/utils/APIConstants'
import {
  BackendDestinationEnum,
  getEndpoint,
} from '../../../lib/utils/functions/getEndpoint'
import { act } from '@testing-library/react'

const page1: SubmissionInfoPage = {
  results: [
    {
      institution: 'Mars University',
      projectLead: 'Prof. Farnsworth',
      intendedDataUseStatement: 'My test requires an IDU',
      modifiedOn: '2021-09-15T00:01:45.223Z',
      submittedBy: MOCK_USER_ID.toString(),
    },
  ],
  nextPageToken: '50a0',
}
const page2: SubmissionInfoPage = {
  results: [
    {
      institution: 'Mars University',
      projectLead: 'Wong',
      intendedDataUseStatement: 'My test requires another IDU',
      modifiedOn: '2021-09-15T00:01:47.223Z',
      submittedBy: MOCK_USER_ID_2.toString(),
    },
  ],
}
function renderComponent() {
  return render(<IDUReport accessRequirementId="2000" />, {
    wrapper: createWrapper(),
  })
}

describe('IDUReport tests', () => {
  beforeAll(() => {
    server.listen()
    server.use(
      rest.post(
        `${getEndpoint(
          BackendDestinationEnum.REPO_ENDPOINT,
        )}${APPROVED_SUBMISSION_INFO(':arId')}`,
        async (req, res, ctx) => {
          let page = page1
          if ((req.body as SubmissionInfoPageRequest).nextPageToken) {
            page = page2
          }
          return res(ctx.status(200), ctx.json(page))
        },
      ),
    )
  })
  afterEach(() => server.restoreHandlers())
  afterAll(() => server.close())

  it('loads more when inView', async () => {
    renderComponent()

    const submissionInfo1 = await screen.findAllByText('Prof. Farnsworth')
    expect(submissionInfo1).toHaveLength(1)

    act(() => {
      mockAllIsIntersecting(true)
    })
    const submissionInfo2 = await screen.findAllByText('Wong')
    expect(submissionInfo2).toHaveLength(1)
  })
})
