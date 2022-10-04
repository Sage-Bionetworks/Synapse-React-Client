import { render, screen, waitFor, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
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
import { Direction, PaginatedResults } from '../../../../lib/utils/synapseTypes'
import { DiscussionThreadBundle } from '../../../../lib/utils/synapseTypes/DiscussionBundle'
import {
  SubscriptionObjectType,
  SubscriptionRequest,
  Topic,
  SortByType,
} from '../../../../lib/utils/synapseTypes/Subscription'
import { MOCK_ACCESS_TOKEN } from '../../../../mocks/MockSynapseContext'
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

const followRequest: Topic = {
  objectId: MOCK_FORUM_ID,
  objectType: SubscriptionObjectType.FORUM,
}

const SynapseClient = require('../../../../lib/utils/SynapseClient')
SynapseClient.postSubscription = jest.fn()

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

const mockSubscriptionRequest: SubscriptionRequest = {
  objectType: SubscriptionObjectType.FORUM,
  idList: [MOCK_FORUM_ID],
  sortByType: SortByType.OBJECT_ID,
  sortDirection: Direction.ASC,
}

function renderComponent() {
  render(<ForumTable {...defaultProps} />, {
    wrapper: createWrapper(),
  })
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
      rest.post(
        `${getEndpoint(
          BackendDestinationEnum.REPO_ENDPOINT,
        )}/repo/v1/subscription/list`,
        async (req, res, ctx) => {
          return res(ctx.status(200), ctx.json({ mockSubscriptionRequest }))
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

  it('Has a follow button', async () => {
    renderComponent()

    const followButton = await screen.findByRole('button', { name: 'Follow' })
    await userEvent.click(followButton)
    expect(SynapseClient.postSubscription).toBeCalledWith(
      MOCK_ACCESS_TOKEN,
      followRequest,
    )
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
