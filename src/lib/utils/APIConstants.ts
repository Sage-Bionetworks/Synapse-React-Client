/**
 * Separating API endpoints into their own constants file
 */

import { getEndpoint, BackendDestinationEnum } from './functions/getEndpoint'

export const BACKEND_ENDPOINT = `${getEndpoint(
  BackendDestinationEnum.REPO_ENDPOINT,
)}`

export const REPO = `/repo/v1`
export const AUTH = `/auth/v1`
export const FILE = `/file/v1`

const ASYNC_START = '/async/start'
const ASYNC_GET = '/async/get'

export const ENTITY = `${REPO}/entity`
export const ENTITY_ID = (id: string | number) => `${REPO}/entity/${id}`
/**
 * Some services allow (but do not require) you to specify the version in the path.
 */
export const ENTITY_ID_VERSION = (
  id: string | number,
  version?: string | number,
) => `${REPO}/entity/${id}${version ? `/version/${version}` : ''}`
export const ENTITY_ID_VERSIONS = (id: string | number) =>
  `${REPO}/entity/${id}/version`
export const ENTITY_BUNDLE_V2 = (
  id: string | number,
  version?: string | number,
) => `${ENTITY_ID_VERSION(id, version)}/bundle2`
export const ENTITY_ACCESS = (id: string | number) =>
  `${REPO}/entity/${id}/access`

export const ENTITY_HEADERS = `${REPO}/entity/header`

export const ENTITY_JSON = (id: string | number) => `${REPO}/entity/${id}/json`

export const ENTITY_SCHEMA = (id: string | number) =>
  `${REPO}/entity/${id}/schema`
export const ENTITY_SCHEMA_BINDING = (id: string | number) =>
  `${ENTITY_SCHEMA(id)}/binding`
export const ENTITY_SCHEMA_VALIDATION = (id: string | number) =>
  `${ENTITY_SCHEMA(id)}/validation`

export const TABLE_QUERY_ASYNC_START = (id: string | number) =>
  `${ENTITY_ID(id)}/table/query/async/start`

export const TABLE_QUERY_ASYNC_GET = (
  entityId: string | number,
  asyncJobToken: string,
) => `${ENTITY_ID(entityId)}/table/query/async/get/${asyncJobToken}`

export const ASYNCHRONOUS_JOB_TOKEN = (asyncJobToken: string) =>
  `${REPO}/asynchronous/job/${asyncJobToken}`

export const USER_PROFILE_ENDPOINT = `${REPO}/userProfile`

export const SCHEMA = `${REPO}/schema`
export const REGISTERED_SCHEMA = `${REPO}/schema/type/registered`
export const REGISTERED_SCHEMA_ID = (schema$id: string | number) =>
  `${REPO}/schema/type/registered/${schema$id}`
export const SCHEMA_VALIDATION_START = `${SCHEMA}/type/validation${ASYNC_START}`
export const SCHEMA_VALIDATION_GET = (asyncJobId: string | number) =>
  `${SCHEMA}/type/validation${ASYNC_GET}/${asyncJobId}`

export const USER = `${REPO}/user`
export const USER_BUNDLE = `${USER}/bundle`
export const USER_ID = (id: string | number) => `${USER}/${id}`
export const USER_ID_BUNDLE = (id: string | number) => `${USER_ID(id)}/bundle`

export const USER_PROFILE = `${REPO}/userProfile`
export const USER_PROFILE_ID = (id: string | number) => `${USER_PROFILE}/${id}`

export const NOTIFICATION_EMAIL = `${REPO}/notificationEmail`
export const ALIAS_AVAILABLE = `${REPO}/principal/available`
export const REGISTER_ACCOUNT_STEP_1 = (portalEndpoint: string) =>
  `${REPO}/account/emailValidation?portalEndpoint=${portalEndpoint}`
export const REGISTER_ACCOUNT_STEP_2 = `${REPO}/account2`
export const SIGN_TERMS_OF_USE = `${AUTH}/termsOfUse2`
export const VERIFICATION_SUBMISSION = `${REPO}/verificationSubmission`

export const ACCESS_REQUIREMENT_SEARCH = `${REPO}/accessRequirement/search`
export const ACCESS_REQUEST_SUBMISSION_SEARCH = `${REPO}/dataAccessSubmission/search`

export const ACCESS_REQUIREMENT_BY_ID = (id: string | number) =>
  `${REPO}/accessRequirement/${id}`

export const ACCESS_REQUIREMENT_ACL = (id: string | number) =>
  ACCESS_REQUIREMENT_BY_ID(id) + '/acl'

export const ACCESS_REQUIREMENT_STATUS = (id: string | number) =>
  ACCESS_REQUIREMENT_BY_ID(id) + '/status'

export const ACCESS_REQUIREMENT_WIKI_PAGE_KEY = (id: string | number) =>
  // Note that this is `access_requirement` not `accessRequirement`!
  `${REPO}/access_requirement/${id}/wikikey`

export const FAVORITES = `${REPO}/favorite`

export const USER_GROUP_HEADERS = `${REPO}/userGroupHeaders`
export const USER_GROUP_HEADERS_BATCH = `${REPO}/userGroupHeaders/batch`

export const DATA_ACCESS_SUBMISSION_BY_ID = (id: string | number) =>
  `${REPO}/dataAccessSubmission/${id}`

export const PROFILE_IMAGE_PREVIEW = (userId: string) =>
  `${REPO}/userProfile/${userId}/image/preview`
