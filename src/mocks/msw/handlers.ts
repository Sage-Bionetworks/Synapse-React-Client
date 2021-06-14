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
import {
  mockUserBundle,
  mockUserProfileData,
  MOCK_USER_ID,
} from '../user/mock_user_profile'
import {
  ENTITY_BUNDLE_V2,
  ENTITY_SCHEMA_BINDING,
  USER_ID_BUNDLE,
  USER_PROFILE_ID,
} from '../../lib/utils/APIConstants'

const handlers = [
  rest.options('*', async (req, res, ctx) => {
    return res(ctx.status(200))
  }),

  rest.get(
    `${getEndpoint(BackendDestinationEnum.REPO_ENDPOINT)}${USER_PROFILE_ID(
      ':id',
    )}`,
    async (req, res, ctx) => {
      let response
      if (req.params.id === MOCK_USER_ID.toString()) {
        response = mockUserProfileData
      }
      return res(ctx.status(200), ctx.json(response))
    },
  ),

  rest.get(
    `${getEndpoint(BackendDestinationEnum.REPO_ENDPOINT)}${USER_ID_BUNDLE(
      ':id',
    )}`,
    async (req, res, ctx) => {
      let response
      if (req.params.id === MOCK_USER_ID.toString()) {
        response = mockUserBundle
      }
      return res(ctx.status(200), ctx.json(response))
    },
  ),

  rest.post(
    `${getEndpoint(BackendDestinationEnum.REPO_ENDPOINT)}${ENTITY_BUNDLE_V2(
      ':entityId',
    )}`,
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
    )}${ENTITY_SCHEMA_BINDING(':entityId')}`,
    async (req, res, ctx) => {
      return res(ctx.status(200), ctx.json(mockSchemaBinding))
    },
  ),
]

export { handlers }
