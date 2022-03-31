import {
  BackendDestinationEnum,
  getEndpoint,
} from '../../lib/utils/functions/getEndpoint'
import { mockSchemaBinding } from '../mockSchema'
import { rest } from 'msw'
import {
  mockFileEntity,
  mockFileEntityBundle,
  mockProjectEntity,
  mockProjectEntityBundle,
  mockPaginatedEntityHeaders,
  MOCK_FILE_ENTITY_ID,
  MOCK_FILE_NAME,
  MOCK_INVALID_PROJECT_NAME,
  MOCK_PROJECT_ID,
  MOCK_PROJECT_NAME,
  mockFileEntityJson,
  mockFileEntityVersionInfo,
  mockFileEntityVersions,
} from '../entity/mockEntity'
import {
  mockUserBundle,
  mockUserProfileData,
  MOCK_USER_ID,
} from '../user/mock_user_profile'
import {
  ENTITY,
  ENTITY_BUNDLE_V2,
  ENTITY_SCHEMA_BINDING,
  FAVORITES,
  USER_ID_BUNDLE,
  USER_PROFILE_ID,
  USER_PROFILE,
  ENTITY_JSON,
  ENTITY_ID,
  ENTITY_ID_VERSION,
  ENTITY_ID_VERSIONS,
} from '../../lib/utils/APIConstants'
import {
  Entity,
  EntityBundle,
  PaginatedResults,
  UserBundle,
  UserProfile,
  VersionableEntity,
} from '../../lib/utils/synapseTypes'
import { SynapseError } from '../../lib/utils/SynapseClient'
import { VersionInfo } from '../../lib/utils/synapseTypes/VersionInfo'

// Simple utility type that just indicates that the response body could be an error like the Synapse backend may send.
type SynapseApiResponse<T> = T | SynapseError

const handlers = [
  rest.options('*', async (req, res, ctx) => {
    return res(ctx.status(200))
  }),

  rest.get(
    `${getEndpoint(BackendDestinationEnum.REPO_ENDPOINT)}${USER_PROFILE_ID(
      ':id',
    )}`,
    async (req, res, ctx) => {
      let status = 404
      let response: SynapseApiResponse<UserProfile> = {
        reason: `Mock Service worker could not find a user profile with ID ${req.params.id}`,
      }
      if (req.params.id === MOCK_USER_ID.toString()) {
        response = mockUserProfileData
        status = 200
      }
      return res(ctx.status(status), ctx.json(response))
    },
  ),

  rest.get(
    `${getEndpoint(BackendDestinationEnum.REPO_ENDPOINT)}${USER_PROFILE}`,
    async (req, res, ctx) => {
      // default return a mock UserProfile.
      const response: UserProfile = mockUserProfileData
      const status = 200
      return res(ctx.status(status), ctx.json(response))
    },
  ),

  rest.get(
    `${getEndpoint(BackendDestinationEnum.REPO_ENDPOINT)}${USER_ID_BUNDLE(
      ':id',
    )}`,
    async (req, res, ctx) => {
      let status = 404
      let response: SynapseApiResponse<UserBundle> = {
        reason: `Mock Service worker could not find a user bundle with ID ${req.params.id}`,
      }
      if (req.params.id === MOCK_USER_ID.toString()) {
        response = mockUserBundle
        status = 200
      }
      return res(ctx.status(status), ctx.json(response))
    },
  ),

  // create entity
  rest.post(
    `${getEndpoint(BackendDestinationEnum.REPO_ENDPOINT)}${ENTITY}`,
    async (req, res, ctx) => {
      let status = 404
      let response: SynapseApiResponse<Entity> = {
        reason: `Mock Service worker could not find a matching mock entity for this request : ${JSON.stringify(
          req.body,
        )}`,
      }
      if (req.body) {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        const requestBody = req.body as any
        if (requestBody.name === MOCK_FILE_NAME) {
          response = mockFileEntity
          status = 200
        } else if (requestBody.name === MOCK_PROJECT_NAME) {
          response = mockProjectEntity
          status = 200
        } else if (requestBody.name === MOCK_INVALID_PROJECT_NAME) {
          response.reason = 'Invalid project name'
          status = 403
        }
      }

      return res(ctx.status(status), ctx.json(response))
    },
  ),

  rest.get(
    `${getEndpoint(BackendDestinationEnum.REPO_ENDPOINT)}${ENTITY_ID(
      ':entityId',
    )}`,
    async (req, res, ctx) => {
      let status = 404
      let response: SynapseApiResponse<Entity> = {
        reason: `Mock Service worker could not find a mock entity with ID ${req.params.entityId}`,
      }
      if (req.params.entityId === MOCK_FILE_ENTITY_ID) {
        response = mockFileEntity
        status = 200
      } else if (req.params.entityId === MOCK_PROJECT_ID) {
        response = mockProjectEntity
        status = 200
      }
      return res(ctx.status(status), ctx.json(response))
    },
  ),

  rest.get(
    `${getEndpoint(BackendDestinationEnum.REPO_ENDPOINT)}${ENTITY_ID_VERSIONS(
      ':entityId',
    )}`,
    async (req, res, ctx) => {
      let status = 404
      let response: SynapseApiResponse<PaginatedResults<VersionInfo>> = {
        reason: `Mock Service worker could not find mock entity versions for ID ${req.params.entityId}`,
      }
      if (req.params.entityId === MOCK_FILE_ENTITY_ID) {
        response = { results: mockFileEntityVersionInfo }
        status = 200
      }
      return res(ctx.status(status), ctx.json(response))
    },
  ),

  rest.get(
    `${getEndpoint(BackendDestinationEnum.REPO_ENDPOINT)}${ENTITY_ID_VERSION(
      ':entityId',
      ':versionNumber',
    )}`,
    async (req, res, ctx) => {
      let status = 404
      const entityId = req.params.entityId
      const versionNumber = req.params.versionNumber.toString()

      let response: SynapseApiResponse<VersionableEntity> = {
        reason: `Mock Service worker could not find a mock versioned entity with ID ${entityId}.${versionNumber}`,
      }
      if (req.params.entityId === MOCK_FILE_ENTITY_ID) {
        const requestedVersionNumber = parseInt(versionNumber)
        const versionableEntity = mockFileEntityVersions.find(
          (entity: VersionableEntity) =>
            entity.versionNumber === requestedVersionNumber,
        )
        if (versionableEntity) {
          response = versionableEntity
        }
        status = 200
      }
      return res(ctx.status(status), ctx.json(response))
    },
  ),

  rest.post(
    `${getEndpoint(BackendDestinationEnum.REPO_ENDPOINT)}${ENTITY_BUNDLE_V2(
      ':entityId',
    )}`,
    async (req, res, ctx) => {
      let status = 404
      let response: SynapseApiResponse<EntityBundle> = {
        reason: `Mock Service worker could not find a mock entity bundle with ID ${req.params.entityId}`,
      }
      if (req.params.entityId === MOCK_FILE_ENTITY_ID) {
        response = mockFileEntityBundle
        status = 200
      } else if (req.params.entityId === MOCK_PROJECT_ID) {
        response = mockProjectEntityBundle
        status = 200
      }
      return res(ctx.status(status), ctx.json(response))
    },
  ),

  rest.post(
    `${getEndpoint(BackendDestinationEnum.REPO_ENDPOINT)}${ENTITY_BUNDLE_V2(
      ':entityId',
      ':versionNumber',
    )}`,
    async (req, res, ctx) => {
      const entityId = req.params.entityId
      const versionNumber = req.params.versionNumber.toString()
      let status = 404
      let response: SynapseApiResponse<EntityBundle> = {
        reason: `Mock Service worker could not find a mock entity bundle with ID ${entityId}`,
      }
      if (req.params.entityId === MOCK_FILE_ENTITY_ID) {
        response = mockFileEntityBundle
        if (req.params.versionNumber) {
          response.entity = mockFileEntityVersions.find(
            (entity: VersionableEntity) =>
              entity.versionNumber === parseInt(versionNumber),
          )
        }
        status = 200
      } else if (req.params.entityId === MOCK_PROJECT_ID) {
        response = mockProjectEntityBundle
        status = 200
      }
      return res(ctx.status(status), ctx.json(response))
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

  rest.get(
    `${getEndpoint(BackendDestinationEnum.REPO_ENDPOINT)}${FAVORITES}`,
    async (req, res, ctx) => {
      return res(ctx.status(200), ctx.json(mockPaginatedEntityHeaders))
    },
  ),

  rest.get(
    `${getEndpoint(BackendDestinationEnum.REPO_ENDPOINT)}${ENTITY_JSON(
      ':entityId',
    )}`,

    async (req, res, ctx) => {
      const response = mockFileEntityJson
      return res(ctx.status(200), ctx.json(response))
    },
  ),
]

export { handlers }
