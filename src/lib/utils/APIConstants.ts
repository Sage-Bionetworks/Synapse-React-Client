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

export const ENTITY = `${REPO}/entity`
export const ENTITY_ID = (id: string | number) => `${REPO}/entity/${id}`
/**
 * Some services allow (but do not require) you to specify the version in the path.
 */
export const ENTITY_ID_VERSION = (id: string | number, version?: number) =>
  `${REPO}/entity/${id}${version ? `/version/${version}` : ''}`
export const ENTITY_BUNDLE_V2 = (id: string | number, version?: number) =>
  `${ENTITY_ID_VERSION(id, version)}/bundle2`
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

export const USER_PROFILE_ENDPOINT = `${REPO}/userProfile`

export const SCHEMA = `${REPO}/schema`
export const REGISTERED_SCHEMA = `${REPO}/schema/type/registered`
export const REGISTERED_SCHEMA_ID = (schema$id: string | number) =>
  `${REPO}/schema/type/registered/${schema$id}`

export const USER = `${REPO}/user`
export const USER_BUNDLE = `${USER}/bundle`
export const USER_ID = (id: string | number) => `${USER}/${id}`
export const USER_ID_BUNDLE = (id: string | number) => `${USER_ID(id)}/bundle`

export const USER_PROFILE = `${REPO}/userProfile`
export const USER_PROFILE_ID = (id: string | number) => `${USER_PROFILE}/${id}`

export const ACCESS_REQUIREMENT_BY_ID = (id: string | number) =>
  `${REPO}/accessRequirement/${id}`

