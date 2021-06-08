// server-handlers.js

// this is put into here so I can share these same handlers between my tests

// as well as my development in the browser. Pretty sweet!

import { rest } from 'msw' // msw supports graphql too!
import {
  BackendDestinationEnum,
  getEndpoint,
} from '../../lib/utils/functions/getEndpoint'
import {
  EntityHeader,
  PaginatedResults,
  UserGroupHeaderResponsePage,
  UserProfile,
} from '../../lib/utils/synapseTypes'
import {
  mockFileEntity,
  mockFileEntityHeader,
  mockFolderEntityHeader,
} from '../entity/mockEntity'
import { mockQueryResult } from '../query/mockProjectViewQueryResults'
import {
  mockUserBundle,
  mockUserGroupHeader,
  mockUserProfileData,
} from '../user/mock_user_profile'

/**
 * To return the correct response for async jobs, we have to return a token that we can match back up
 * with the mock response
 */
const TABLE_QUERY_TOKEN = 'table-query-token'

// const preflightHandlers = [
//   rest.options(
//     `${getEndpoint(BackendDestinationEnum.REPO_ENDPOINT)}*`,
//     (req, res, ctx) => {
//       return res(ctx.status(200))
//     },
//   ),
//   rest.options('http://localhost', async (req, res, ctx) => {
//     return res(ctx.status(200))
//   }),
// ]

// const entityHandlers = [
//   rest.get(
//     `${getEndpoint(BackendDestinationEnum.REPO_ENDPOINT)}repo/v1/entity/:id`,
//     async (req, res, ctx) => {
//       return res(ctx.status(200), ctx.json({ mockFileEntity }))
//     },
//   ),

//   rest.post(
//     `${getEndpoint(BackendDestinationEnum.REPO_ENDPOINT)}repo/v1/entity/header`,
//     async (req, res, ctx) => {
//       return res(
//         ctx.status(200),
//         ctx.json({
//           results: [mockFileEntityHeader, mockFolderEntityHeader],
//         }),
//       )
//     },
//   ),

//   rest.get<never, PaginatedResults<EntityHeader>, { batch: string }>(
//     'https://repo-prod.prod.sagebase.org/repo/v1/entity/type',
//     async (req, res, ctx) => {
//       return res(
//         ctx.status(200),
//         ctx.json({ results: [mockFileEntityHeader, mockFolderEntityHeader] }),
//       )
//     },
//   ),
// ]

// const otherHandlers = [
//   rest.get(
//     'https://repo-prod.prod.sagebase.org/repo/v1/user/:id/bundle',
//     async (req, res, ctx) => {
//       const userBundle = mockUserBundle
//       userBundle.userId = req.params.id
//       userBundle.userProfile!.ownerId = req.params.id
//       return res(ctx.status(200), ctx.json({ userBundle }))
//     },
//   ),
//   rest.post<{ list: number }, PaginatedResults<UserProfile>>(
//     'https://repo-prod.prod.sagebase.org/repo/v1/userProfile',
//     async (req, res, ctx) => {
//       const results = []
//       if (req.body.list && req.body.list[0]) {
//         results.push({ ...mockUserProfileData, ownerId: req.body.list[0] })
//       }
//       return res(ctx.status(200), ctx.json({ results: results }))
//     },
//   ),
//   rest.get<never, UserGroupHeaderResponsePage, { ids: string }>(
//     'https://repo-prod.prod.sagebase.org/repo/v1/userGroupHeaders/batch',
//     async (req, res, ctx) => {
//       return res(
//         ctx.status(200),
//         ctx.json({ children: [mockUserGroupHeader], prefixFilter: '' }),
//       )
//     },
//   ),
//   rest.post(
//     'https://repo-prod.prod.sagebase.org/repo/v1/entity/:id/table/query/async/start',
//     async (req, res, ctx) => {
//       return res(ctx.status(201), ctx.json({ token: TABLE_QUERY_TOKEN }))
//     },
//   ),
//   rest.get(
//     `${getEndpoint(
//       BackendDestinationEnum.REPO_ENDPOINT,
//     )}repo/v1/entity/:id/table/query/async/get`,
//     async (req, res, ctx) => {
//       return res(ctx.status(200), ctx.json(mockQueryResult))
//     },
//   ),
// rest.get(
//   'https://repo-prod.prod.sagebase.org/repo/v1/asynchronous/job/:id',
//   async (req, res, ctx) => {
//     let response
//     if (req.params.id === TABLE_QUERY_TOKEN) {
//       response = mockQueryResult
//     }
//     return res(ctx.status(200), ctx.json({ response }))
//   },
// ),
// rest.get(
//   'https://repo-prod.prod.sagebase.org/repo/v1/version',
//   async (req, res, ctx) => {
//     return res(
//       ctx.status(200),
//       ctx.json({
//         version: 'msw-simulated',
//         stackInstance: 'msw-stack-instance',
//       }),
//     )
//   },
// ),
// ]

const handlers = [
  // ...preflightHandlers, ...entityHandlers, ...otherHandlers
]

export { handlers }
