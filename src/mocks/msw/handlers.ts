import {
  BackendDestinationEnum,
  getEndpoint,
} from '../../lib/utils/functions/getEndpoint'
import { mockSchemaBinding } from '../mockSchema'
import { rest } from 'msw'
import {
  mockFileEntityBundle,
  mockProjectEntityBundle,
  MOCK_FILE_ENTITY_ID,
  MOCK_PROJECT_ID,
} from '../entity/mockEntity'
import { mockUserBundle, mockUserProfileData, MOCK_USER_ID } from '../user/mock_user_profile'

const handlers = [
  rest.options('*', async (req, res, ctx) => {
    return res(ctx.status(200))
  }),

  rest.get(
    `${getEndpoint(
      BackendDestinationEnum.REPO_ENDPOINT,
    )}repo/v1/userProfile/:id`,
    async (req, res, ctx) => {
      let response
      if (req.params.id === MOCK_USER_ID.toString()) {
        response = mockUserProfileData
      }
      return res(ctx.status(200), ctx.json(response))
    },
  ),

  rest.get(
    `${getEndpoint(
      BackendDestinationEnum.REPO_ENDPOINT,
    )}repo/v1/user/:id/bundle`,
    async (req, res, ctx) => {
      let response
      if (req.params.id === MOCK_USER_ID.toString()) {
        response = mockUserBundle
      }
      return res(ctx.status(200), ctx.json(response))
    },
  ),

  rest.post(
    `${getEndpoint(
      BackendDestinationEnum.REPO_ENDPOINT,
    )}repo/v1/entity/:entityId/bundle2`,
    async (req, res, ctx) => {
      let response
      if (req.params.entityId === MOCK_FILE_ENTITY_ID) {
        response = mockFileEntityBundle
      } else if (req.params.entityId === MOCK_PROJECT_ID) {
        response = mockProjectEntityBundle
      }
      return res(ctx.status(200), ctx.json(response))
    },
  ),

  rest.get(
    `${getEndpoint(
      BackendDestinationEnum.REPO_ENDPOINT,
    )}/repo/v1/entity/:entityId/schema/binding`,
    async (req, res, ctx) => {
      return res(ctx.status(200), ctx.json(mockSchemaBinding))
    },
  ),
]

export { handlers }
