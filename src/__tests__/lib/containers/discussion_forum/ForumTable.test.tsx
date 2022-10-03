import { render, screen, waitFor, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { createMemoryHistory } from 'history'
import React from 'react'
import {
  ForumTable,
  ForumTableProps,
} from '../../../../lib/containers/discussion_forum/ForumTable'
import { createWrapper } from '../../../../lib/testutils/TestingLibraryUtils'
import { FORUM_THREAD } from '../../../../lib/utils/APIConstants'
import {
  BackendDestinationEnum,
  getEndpoint,
} from '../../../../lib/utils/functions/getEndpoint'
import { PaginatedResults } from '../../../../lib/utils/synapseTypes'
import { DiscussionThreadBundle } from '../../../../lib/utils/synapseTypes/DiscussionBundle'
import { rest, server } from '../../../../mocks/msw/server'
import {
  mockUserProfileData,
  mockUserProfileData2,
} from '../../../../mocks/user/mock_user_profile'

const MOCK_FORUM_ID = 'syn123'

const defaultProps: ForumTableProps = {
  forumId: MOCK_FORUM_ID,
  limit: 1,
}

const forumThread: PaginatedResults<DiscussionThreadBundle>[] = [
  {
    totalNumberOfResults: 2,
    results: [
      {
        id: '999',
        forumId: MOCK_FORUM_ID,
        projectId: '123',
        title: 'mockTitle1',
        createdOn: '2022-09-28',
        createdBy: mockUserProfileData.ownerId,
        modifiedOn: '2022-09-28',
        etag: 'xxx',
        messageKey: 'xxx',
        numberOfViews: 2,
        numberOfReplies: 3,
        lastActivity: '2022-09-28',
        activeAuthors: [
          mockUserProfileData.ownerId,
          mockUserProfileData2.ownerId,
        ],
        isEdited: false,
        isDeleted: false,
        isPinned: false,
      },
    ],
  },
  {
    totalNumberOfResults: 2,
    results: [
      {
        id: '888',
        forumId: MOCK_FORUM_ID,
        projectId: '12',
        title: 'mockTitle2',
        createdOn: '2022-09-28',
        createdBy: mockUserProfileData2.ownerId,
        modifiedOn: '2022-09-28',
        etag: 'xxx',
        messageKey: 'xxx',
        numberOfViews: 14,
        numberOfReplies: 3,
        lastActivity: '2022-09-28',
        activeAuthors: [
          mockUserProfileData.ownerId,
          mockUserProfileData2.ownerId,
        ],
        isEdited: false,
        isDeleted: false,
        isPinned: false,
      },
    ],
  },
]

function renderComponent() {
  const history = createMemoryHistory()
  const renderResult = render(<ForumTable {...defaultProps} />, {
    wrapper: createWrapper(),
  })
  return { ...renderResult, history }
}

describe('Forum Table test', () => {
  beforeAll(() => {
    server.listen()
  })
  beforeEach(() => {
    server.use(
      rest.get(
        `${getEndpoint(BackendDestinationEnum.REPO_ENDPOINT)}${FORUM_THREAD(
          MOCK_FORUM_ID,
        )}`,
        async (req, res, ctx) => {
          const offset = req.url.searchParams.get('offset') ?? '0'
          return res(ctx.status(200), ctx.json(forumThread[parseInt(offset)]))
        },
      ),
    )
  })
  afterEach(() => {
    server.resetHandlers()
    jest.clearAllMocks()
  })
  afterAll(() => server.close())

  it('Renders all headers and a row of data', async () => {
    renderComponent()

    const table = await screen.findByRole('table')
    const tbody = table.querySelector('tbody')!
    const rows = await within(tbody).findAllByRole('row')
    expect(rows).toHaveLength(1) // Only one entity on the first page

    await screen.findByRole('columnheader', { name: 'Topic' })
    await screen.findByRole('columnheader', { name: 'Author' })
    await screen.findByRole('columnheader', { name: 'Active Users' })
    await screen.findByRole('columnheader', { name: 'Views' })
    await screen.findByRole('columnheader', { name: 'Activity' })
  })

  it('Loads more when there is more data', async () => {
    renderComponent()

    const loadMoreButton = await screen.findByRole('button', {
      name: 'Show more results',
    })
    await userEvent.click(loadMoreButton)

    await waitFor(() => expect(screen.getAllByRole('row')).toHaveLength(3))
  })
})
