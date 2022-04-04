import { rest } from 'msw'
import {
  ENTITY,
  ENTITY_BUNDLE_V2,
  ENTITY_ID,
  ENTITY_ID_VERSION,
  ENTITY_ID_VERSIONS,
  ENTITY_JSON,
  ENTITY_SCHEMA_BINDING,
} from '../../../lib/utils/APIConstants'
import {
  BackendDestinationEnum,
  getEndpoint,
} from '../../../lib/utils/functions/getEndpoint'
import {
  Entity,
  EntityBundle,
  PaginatedResults,
  VersionableEntity,
} from '../../../lib/utils/synapseTypes'
import { VersionInfo } from '../../../lib/utils/synapseTypes/VersionInfo'
import { mockSchemaBinding } from '../../mockSchema'
import {
  mockFileEntity,
  mockFileEntityBundle,
  mockFileEntityJson,
  mockFileEntityVersionInfo,
  mockFileEntityVersions,
  mockProjectEntity,
  mockProjectEntityBundle,
  MOCK_FILE_ENTITY_ID,
  MOCK_FILE_NAME,
  MOCK_INVALID_PROJECT_NAME,
  MOCK_PROJECT_ID,
  MOCK_PROJECT_NAME,
} from '../../entity/mockEntity'
import { SynapseApiResponse } from '../handlers'

export const entityHandlers = [
  /**
   * Create a new entity
   */
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

  /**
   * Get entity by ID
   */
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
    `${getEndpoint(BackendDestinationEnum.REPO_ENDPOINT)}${ENTITY_JSON(
      ':entityId',
    )}`,

    async (req, res, ctx) => {
      const response = mockFileEntityJson
      return res(ctx.status(200), ctx.json(response))
    },
  ),
]
