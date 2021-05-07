import SparkMD5 from 'spark-md5'
import { BackendDestinationEnum, getEndpoint } from './functions/getEndpoint'
import {
  AccessCodeResponse,
  AccessControlList,
  AddFilesToDownloadListRequest,
  AddFilesToDownloadListResponse,
  AddPartResponse,
  AsyncJobId,
  BatchFileRequest,
  BatchFileResult,
  BatchPresignedUploadUrlRequest,
  BatchPresignedUploadUrlResponse,
  BulkFileDownloadRequest,
  BulkFileDownloadResponse,
  DownloadFromTableRequest,
  DownloadFromTableResult,
  DownloadList,
  DownloadOrder,
  Entity,
  EntityHeader,
  EntityLookupRequest,
  FileEntity,
  FileHandle,
  FileHandleAssociation,
  FileHandleResults,
  FileUploadComplete,
  FormChangeRequest,
  FormData,
  FormGroup,
  FormRejection,
  ListRequest,
  ListResponse,
  LoginResponse,
  MultipartUploadRequest,
  MultipartUploadStatus,
  OAuthClientPublic,
  OAuthConsentGrantedResponse,
  OIDCAuthorizationRequest,
  OIDCAuthorizationRequestDescription,
  PaginatedResults,
  ProjectFilesStatisticsRequest,
  ProjectFilesStatisticsResponse,
  QueryBundleRequest,
  QueryResultBundle,
  QueryTableResults,
  ReferenceList,
  RestrictionInformationRequest,
  RestrictionInformationResponse,
  Submission,
  SynapseVersion,
  UserBundle,
  UserGroupHeaderResponsePage,
  UserProfile,
  WikiPage,
  AccessRequirement,
  AccessApproval,
  EntityId,
  WikiPageKey,
  ObjectType,
  AccessRequirementStatus,
  FileHandleAssociateType,
  Evaluation,
  EvaluationRound,
  FileResult,
  ProjectHeaderList,
  EntityPath,
  EntityBundleRequest,
  EntityBundle,
} from './synapseTypes/'
import UniversalCookies from 'universal-cookie'
import { dispatchDownloadListChangeEvent } from './functions/dispatchDownloadListChangeEvent'
import { TableUpdateTransactionRequest } from './synapseTypes/Table/TableUpdate'
import {
  TransformSqlWithFacetsRequest,
  SqlTransformResponse,
} from './synapseTypes/Table/TransformSqlWithFacetsRequest'
import { SynapseConstants } from '.'
import { EvaluationRoundListRequest } from './synapseTypes/Evaluation/EvaluationRoundListRequest'
import { EvaluationRoundListResponse } from './synapseTypes/Evaluation/EvaluationRoundListResponse'
import { AccessTokenGenerationRequest } from './synapseTypes/AccessToken/AccessTokenGenerationRequest'
import { AccessTokenGenerationResponse } from './synapseTypes/AccessToken/AccessTokenGenerationResponse'
import { AccessTokenRecordList } from './synapseTypes/AccessToken/AccessTokenRecord'
import { UserEvaluationPermissions } from './synapseTypes/Evaluation/UserEvaluationPermissions'
import {
  EntityChildrenRequest,
  EntityChildrenResponse,
} from './synapseTypes/EntityChildren'
import { GetProjectsParameters } from './synapseTypes/GetProjectsParams'
import { VersionInfo } from './synapseTypes/VersionInfo'
import { SearchQuery, SearchResults } from './synapseTypes/Search'
import { AddBatchOfFilesToDownloadListResponse } from './synapseTypes/DownloadListV2/AddBatchOfFilesToDownloadListResponse'
import { AddBatchOfFilesToDownloadListRequest } from './synapseTypes/DownloadListV2/AddBatchOfFilesToDownloadListRequest'

/**
 * We store the session token in memory.
 * When the in-memory token changes (via setTokenInMemory), we reload the page, since components have no idea that the user changed or signed in/out
 */
let sessionToken: string | undefined
const setTokenInMemory = (newToken: string | undefined) => {
  if (newToken === sessionToken) {
    window.location.reload()
  }
}

const cookies = new UniversalCookies()

// TODO: Create JSON response types for all return types
export const IS_OUTSIDE_SYNAPSE_ORG = window.location.hostname
  .toLowerCase()
  .includes('.synapse.org')
  ? false
  : true

export const SESSION_TOKEN_COOKIE_KEY =
  'org.sagebionetworks.security.user.login.token'

// Max size file that we will allow the caller to read into memory (5MB)
const MAX_JS_FILE_DOWNLOAD_SIZE = 5242880
export const AUTH_PROVIDER = 'GOOGLE_OAUTH_2_0'
// This corresponds to the Synapse-managed S3 storage location:
export const SYNAPSE_STORAGE_LOCATION_ID = 1
export const getRootURL = () => {
  const portString = window.location.port ? `:${window.location.port}` : ''
  return `${window.location.protocol}//${window.location.hostname}${portString}/`
}

/**
 * Waits t number of milliseconds
 *
 * @export
 * @param {number} t milliseconds
 * @returns after t milliseconds
 */
export function delay(t: number) {
  return new Promise(resolve => {
    setTimeout(resolve.bind(null, {}), t)
  })
}

type SynapseError = {
  reason: string
}

export type SynapseClientError = {
  reason: string
  status: number
}

/*
  0 - no internet connection
  429 - Too Many Requests
  502 - Bad Gateway
  503 - Service Unavailable
  504 - Gateway Timeout
*/
const RETRY_STATUS_CODES = [0, 429, 502, 503, 504]

const fetchWithExponentialTimeout = <T>(
  url: RequestInfo,
  options: RequestInit,
  delayMs: number = 1000,
): Promise<T> => {
  return fetch(url, options)
    .then(resp => {
      return resp
        .text()
        .then(text => {
          // try to parse it as json
          try {
            const json = JSON.parse(text)
            return resp.ok ? Promise.resolve(json) : Promise.reject<T>(json)
          } catch (error) {
            // failed to parse json, return text
            return resp.ok ? Promise.resolve(text) : Promise.reject<T>(text)
          }
        })
        .catch((error: SynapseError) => {
          if (resp.ok) {
            // possible empty response
            return Promise.resolve({
              reason: error,
              status: resp.status,
            })
          }
          if (error.reason && resp.status) {
            // successful return from server but invalid call
            return Promise.reject({
              ...error,
              status: resp.status,
            })
          }
          // This occurs if the response is not ok and does not have json or is empty
          return Promise.reject({
            reason: error,
            status: resp.status,
          })
        })
    })
    .catch(error => {
      if (error.status && RETRY_STATUS_CODES.indexOf(error.status) !== -1) {
        return delay(delayMs).then(() => {
          return fetchWithExponentialTimeout<T>(url, options, delayMs * 2)
        })
      } else {
        return Promise.reject(error)
      }
    })
}

export const doPost = <T>(
  url: string,
  requestJsonObject: any,
  initCredentials: RequestInit['credentials'],
  endpoint: BackendDestinationEnum,
): Promise<T> => {
  const options: RequestInit = {
    body: JSON.stringify(requestJsonObject),
    headers: {
      Accept: '*/*',
      'Access-Control-Request-Headers': 'sessiontoken',
      'Content-Type': 'application/json',
    },
    method: 'POST',
    mode: 'cors',
    credentials: initCredentials,
  }
  if (sessionToken) {
    // @ts-ignore
    options.headers.sessionToken = sessionToken
  }
  const usedEndpoint = getEndpoint(endpoint)
  return fetchWithExponentialTimeout<T>(usedEndpoint + url, options)
}
export const doGet = <T>(
  url: string,
  initCredentials: RequestInit['credentials'],
  endpoint: BackendDestinationEnum,
) => {
  const options: RequestInit = {
    headers: {
      Accept: '*/*',
      'Access-Control-Request-Headers': 'sessiontoken',
    },
    method: 'GET',
    mode: 'cors',
    credentials: initCredentials,
  }
  if (sessionToken) {
    // @ts-ignore
    options.headers.sessionToken = sessionToken
  }
  const usedEndpoint = getEndpoint(endpoint)
  return fetchWithExponentialTimeout<T>(usedEndpoint + url, options)
}

export const doDelete = (
  url: string,
  initCredentials: RequestInit['credentials'],
  endpoint: BackendDestinationEnum,
) => {
  const options: RequestInit = {
    headers: {
      Accept: '*/*',
      'Access-Control-Request-Headers': 'sessiontoken',
    },
    method: 'DELETE',
    mode: 'cors',
    credentials: initCredentials,
  }
  if (sessionToken) {
    // @ts-ignore
    options.headers.sessionToken = sessionToken
  }
  const usedEndpoint = getEndpoint(endpoint)
  return fetchWithExponentialTimeout<void>(usedEndpoint + url, options)
}

export const doPut = <T>(
  url: string,
  requestJsonObject: any,
  initCredentials: RequestInit['credentials'],
  endpoint: BackendDestinationEnum,
): Promise<any> => {
  const options: RequestInit = {
    body: JSON.stringify(requestJsonObject),
    headers: {
      Accept: '*/*',
      'Access-Control-Request-Headers': 'sessiontoken',
      'Content-Type': 'application/json',
    },
    method: 'PUT',
    mode: 'cors',
    credentials: initCredentials,
  }
  if (sessionToken) {
    // @ts-ignore
    options.headers.sessionToken = sessionToken
  }
  const usedEndpoint = getEndpoint(endpoint)
  return fetchWithExponentialTimeout<T>(usedEndpoint + url, options)
}

export const putRefreshSessionToken = () => {
  return doPut(
    '/auth/v1/session',
    { sessionToken },
    undefined,
    BackendDestinationEnum.REPO_ENDPOINT,
  )
}

export const getVersion = (): Promise<SynapseVersion> => {
  return doGet<SynapseVersion>(
    '/repo/v1/version',
    undefined,
    BackendDestinationEnum.REPO_ENDPOINT,
  )
}

/**
 * https://docs.synapse.org/rest/POST/download/list/add/async/start.html
 */
//Start an asynchronous job to add files to a user's download list.
export const addFilesToDownloadList = (
  request: AddFilesToDownloadListRequest,
  updateParentState?: any,
) => {
  return doPost<AsyncJobId>(
    `file/v1/download/list/add/async/start`,
    request,
    undefined,
    BackendDestinationEnum.REPO_ENDPOINT,
  )
    .then((resp: AsyncJobId) => {
      const requestUrl = `file/v1/download/list/add/async/get/${resp.token}`
      return getAsyncResultFromJobId<AddFilesToDownloadListResponse>(
        requestUrl,
        updateParentState,
      ).then(data => {
        dispatchDownloadListChangeEvent(data.downloadList)
        return data
      })
    })
    .catch((error: any) => {
      throw error
    })
}

/**
 * https://docs.synapse.org/rest/POST/entity/id/table/download/csv/async/start.html
 */
export const getDownloadFromTableRequest = (
  request: DownloadFromTableRequest,
  updateParentState?: any,
) => {
  return doPost<AsyncJobId>(
    `/repo/v1/entity/${request.entityId}/table/download/csv/async/start`,
    request,
    undefined,
    BackendDestinationEnum.REPO_ENDPOINT,
  )
    .then((resp: AsyncJobId) => {
      const requestUrl = `/repo/v1/entity/${request.entityId}/table/download/csv/async/get/${resp.token}`
      return getAsyncResultFromJobId<DownloadFromTableResult>(
        requestUrl,
        updateParentState,
      )
    })
    .catch((error: any) => {
      throw error
    })
}

/**
 * https://docs.synapse.org/rest/GET/fileHandle/handleId.html
 * Get a FileHandle using its ID.
 * Note: Only the user that created the FileHandle can access it directly.
 * @return FileHandle
 **/
export const getFileHandleById = (handleId: string): Promise<FileHandle> => {
  return doGet<FileHandle>(
    `file/v1/fileHandle/${handleId}`,
    undefined,
    BackendDestinationEnum.REPO_ENDPOINT,
  )
}

/**
 * http://rest-docs.synapse.org/rest/GET/file/id.html
 * Get the actual URL of the file from with an associated object .
 * @return a short lived presignedURL to be redirected with
 **/
export const getActualFileHandleByIdURL = (
  handleId: string,
  fileAssociateType: FileHandleAssociateType,
  fileAssociateId: string,
  redirect: boolean = true,
): Promise<string> => {
  // get the presigned URL for this file handle association.
  return doGet<string>(
    `/file/v1/file/${handleId}?fileAssociateType=${fileAssociateType}&fileAssociateId=${fileAssociateId}&redirect=${redirect}`,
    undefined,
    BackendDestinationEnum.REPO_ENDPOINT,
  )
}

/**
 * https://docs.synapse.org/rest/GET/fileHandle/handleId/url.html
 * Note: Only the user that created the FileHandle can use this method for download.
 * @return a short lived presignedURL to be redirected with
 **/
export const getFileHandleByIdURL = (handleId: string) => {
  // get the presigned URL for this file handle
  return doGet<string>(
    `file/v1/fileHandle/${handleId}/url?redirect=false`,
    undefined,
    BackendDestinationEnum.REPO_ENDPOINT,
  )
}

export const getAsyncResultFromJobId = <T>(
  urlRequest: string,
  updateParentState?: any,
): Promise<T> => {
  return doGet(urlRequest, undefined, BackendDestinationEnum.REPO_ENDPOINT)
    .then((resp: any) => {
      // is this the job status?
      if (resp.jobState && resp.jobState !== 'FAILED') {
        updateParentState &&
          updateParentState({
            asyncJobStatus: resp,
          })
        // still processing, wait for a second and try again
        return delay(500).then(() => {
          return getAsyncResultFromJobId<T>(urlRequest, updateParentState)
        })
      }
      // these must be the query results!
      return resp
    })
    .catch(error => {
      throw error
    })
}

/**
 * http://docs.synapse.org/rest/POST/entity/id/table/query/nextPage/async/start.html
 * @param {*} queryBundleRequest
 * @param {*} sessionToken
 * @param {*} endpoint
 */
export const getQueryTableResults = (
  queryBundleRequest: QueryBundleRequest,
  updateParentState?: any,
): Promise<QueryResultBundle> => {
  return doPost<AsyncJobId>(
    `/repo/v1/entity/${queryBundleRequest.entityId}/table/query/async/start`,
    queryBundleRequest,
    undefined,
    BackendDestinationEnum.REPO_ENDPOINT,
  )
    .then(resp => {
      return getAsyncResultFromJobId<QueryResultBundle>(
        `/repo/v1/entity/${queryBundleRequest.entityId}/table/query/async/get/${resp.token}`,
        updateParentState,
      )
    })
    .catch((error: any) => {
      throw error
    })
}
/**
 *  Run and return results from queryBundleRequest, queryBundle request must be of the
 *  form:
 *     {
 *        concreteType: String,
 *        query: {
 *           sql: String,
 *           partMask: Number
 *        }
 *     }
 * @param {*} queryBundleRequest
 * @param {boolean} [onlyGetFacets=false] Specify if the query only needs facets and no
 * data-- (internally this limits the row count to 1 on the request)
 * @returns Full dataset from synapse table query
 */

export const getFullQueryTableResults = async (
  queryBundleRequest: QueryBundleRequest,
): Promise<QueryResultBundle> => {
  // get first page
  let offset = 0
  const { query, ...rest } = queryBundleRequest
  const queryRequest: QueryBundleRequest = {
    ...rest,
    query: { ...query, offset: offset },
    partMask:
      queryBundleRequest.partMask |
      SynapseConstants.BUNDLE_MASK_QUERY_MAX_ROWS_PER_PAGE,
  }
  const response = await getQueryTableResults(queryRequest)
  const data = response
  // we are done if we return less than a max pagesize that the backend is willing to return.
  let isDone =
    response.queryResult.queryResults.rows.length < data.maxRowsPerPage!
  offset += response.queryResult.queryResults.rows.length
  queryRequest.query.limit = data.maxRowsPerPage // set the limit to the actual max rows per page

  while (!isDone) {
    queryRequest.query.offset = offset
    // update the maxPageSize to the largest possible value after the first page is complete.  This is a no-op after the second page.

    const response = await getQueryTableResults(queryRequest)
    data.queryResult.queryResults.rows.push(
      ...response.queryResult.queryResults.rows, // ... spread operator to push all elements on
    )
    isDone =
      response.queryResult.queryResults.rows.length < queryRequest.query.limit!
    offset += response.queryResult.queryResults.rows.length
  }
  return data
}

/**
 *  Log-in using the given username and password.  Will return a session token that must be used in
 *  authenticated requests.
 *  http://docs.synapse.org/rest/POST/login.html
 */
export const login = (
  username: string,
  password: string,
  authenticationReceipt: string | null,
  endpoint = BackendDestinationEnum.REPO_ENDPOINT,
): Promise<LoginResponse> => {
  return doPost(
    '/auth/v1/login',
    { username, password, authenticationReceipt },
    undefined,
    endpoint,
  )
}
/**
 * Get redirect url
 * https://docs.synapse.org/rest/POST/oauth2/authurl.html
 * @param {*} provider
 * @param {*} redirectUrl
 * @param {*} endpoint
 */
export const oAuthUrlRequest = (
  provider: string,
  redirectUrl: string,
  endpoint = BackendDestinationEnum.REPO_ENDPOINT,
) => {
  return doPost(
    '/auth/v1/oauth2/authurl',
    { provider, redirectUrl },
    undefined,
    endpoint,
  )
}
/**
 * Get session token from SSO
 * https://docs.synapse.org/rest/POST/oauth2/session.html
 * @param {*} provider
 * @param {*} authenticationCode
 * @param {*} redirectUrl
 * @param {*} endpoint
 */
export const oAuthSessionRequest = (
  provider: string,
  authenticationCode: string | number,
  redirectUrl: string,
  endpoint: any = BackendDestinationEnum.REPO_ENDPOINT,
) => {
  return doPost(
    '/auth/v1/oauth2/session',
    { provider, authenticationCode, redirectUrl },
    undefined,
    endpoint,
  )
}
/**
 * Create an entity (Project, Folder, File, Table, View)
 * http://docs.synapse.org/rest/POST/entity.html
 */
export const createEntity = <T extends Entity>(entity: T) => {
  return doPost<T>(
    '/repo/v1/entity',
    entity,
    undefined,
    BackendDestinationEnum.REPO_ENDPOINT,
  )
}
/**
 * Create a project with the given name.
 * http://docs.synapse.org/rest/POST/entity.html
 */
export const createProject = (name: string): Promise<Entity> => {
  return createEntity({
    name,
    concreteType: 'org.sagebionetworks.repo.model.Project',
  })
}

/**
 * Return this user's UserProfile
 * http://docs.synapse.org/rest/GET/userProfile.html
 */
export const getUserProfile = () => {
  return doGet<UserProfile>(
    '/repo/v1/userProfile',
    undefined,
    BackendDestinationEnum.REPO_ENDPOINT,
  )
}

/**
 * Return this user's UserProfile
 * http://docs.synapse.org/rest/GET/userProfile.html
 */
export const getUserProfileById = (ownerId: string) => {
  return doGet<UserProfile>(
    `/repo/v1/userProfile/${ownerId}`,
    undefined,
    BackendDestinationEnum.REPO_ENDPOINT,
  )
}

/**
 * Return this user's profile bundle
 * https://docs.synapse.org/rest/org/sagebionetworks/repo/model/UserBundle.html
 */
export const getUserBundle = (
  id: string,
  mask: number,
): Promise<UserBundle> => {
  return doGet<UserBundle>(
    `repo/v1/user/${id}/bundle?mask=${mask}`,
    undefined,
    BackendDestinationEnum.REPO_ENDPOINT,
  )
}

/**
 * Return batch of user group headers
 * https://docs.synapse.org/rest/org/sagebionetworks/repo/model/UserGroupHeaderResponsePage.html
 */
export const getGroupHeadersBatch = (
  ids: string[],
): Promise<UserGroupHeaderResponsePage> => {
  return doGet<UserGroupHeaderResponsePage>(
    `repo/v1/userGroupHeaders/batch?ids=${ids.join(',')}`,
    undefined,
    BackendDestinationEnum.REPO_ENDPOINT,
  )
}

export type UserProfileList = { list: UserProfile[] }
/**
 * Return the User Profiles for the given list of user IDs
 * http://docs.synapse.org/rest/POST/userProfile.html
 */
export const getUserProfiles = (list: string[]): Promise<UserProfileList> => {
  return doPost(
    '/repo/v1/userProfile',
    { list },
    undefined,
    BackendDestinationEnum.REPO_ENDPOINT,
  )
}

/**
 * Return the children (Files/Folders) of the given entity (Project or Folder).
 * http://docs.synapse.org/rest/POST/entity/children.html
 */
export const getEntityChildren = (request: EntityChildrenRequest) => {
  return doPost<EntityChildrenResponse>(
    '/repo/v1/entity/children',
    request,
    undefined,
    BackendDestinationEnum.REPO_ENDPOINT,
  )
}
/**
 * Retrieve an entityId for a given parent ID and entity name.
 * https://docs.synapse.org/rest/POST/entity/child.html
 */
export const lookupChildEntity = (request: EntityLookupRequest) => {
  return doPost<EntityId>(
    '/repo/v1/entity/child',
    request,
    undefined,
    BackendDestinationEnum.REPO_ENDPOINT,
  )
}

/**
 * Get a batch of pre-signed URLs and/or FileHandles for the given list of FileHandleAssociations.
 * http://docs.synapse.org/rest/POST/fileHandle/batch.html
 */
export const getFiles = (
  request: BatchFileRequest,
): Promise<BatchFileResult> => {
  return doPost(
    '/file/v1/fileHandle/batch',
    request,
    undefined,
    BackendDestinationEnum.REPO_ENDPOINT,
  )
}

/**
 * Get a batch of pre-signed URLs and/or FileHandles for the given list of FileHandleAssociations.
 * http://docs.synapse.org/rest/POST/fileHandle/batch.html
 */
export const getBulkFiles = (
  bulkFileDownloadRequest: BulkFileDownloadRequest,
): Promise<BulkFileDownloadResponse> => {
  return doPost<AsyncJobId>(
    'file/v1/file/bulk/async/start',
    bulkFileDownloadRequest,
    undefined,
    BackendDestinationEnum.REPO_ENDPOINT,
  )
    .then((asyncJobId: AsyncJobId) => {
      const urlRequest = `/file/v1/file/bulk/async/get/${asyncJobId.token}`
      return getAsyncResultFromJobId<BulkFileDownloadResponse>(urlRequest)
    })
    .catch(err => {
      console.error('Error on getBulkFiles ', err)
      throw err
    })
}
/**
 * Bundled access to Entity and related data components.
 * An EntityBundle can be used to create, fetch, or update an Entity and associated
 * objects with a single web service request.
 * See SynapseClient.test.js for an example partsMask.
 * https://docs.synapse.org/rest/org/sagebionetworks/repo/model/Entity.html
 */
type GetEntity = <T extends Entity>(
  entityId: string | number,
  versionNumber?: string,
) => Promise<T>

export const getEntity: GetEntity = <T>(
  entityId: string | number,
  versionNumber?: string,
) => {
  const url = versionNumber
    ? `/repo/v1/entity/${entityId}/version/${versionNumber}`
    : `/repo/v1/entity/${entityId}`
  return doGet(
    url,
    undefined,
    BackendDestinationEnum.REPO_ENDPOINT,
  ) as Promise<T>
}

/**
 * Get a list of entity headers given by entity ids
 * http://rest-docs.synapse.org/rest/GET/entity/type.html
 */
export const getEntityHeadersByIds = <T extends PaginatedResults<EntityHeader>>(
  entityIds: string[],
) => {
  return doGet(
    `/repo/v1/entity/type?batch=${entityIds.join(',')}`,
    undefined,
    BackendDestinationEnum.REPO_ENDPOINT,
  ) as Promise<T>
}

/**
 * Get the EntityHeader for a list of references with a POST.
 * If any item in the batch fails (e.g., with a 404) it will be EXCLUDED in the result set.
 * https://docs.synapse.org/rest/POST/entity/header.html
 */
export const getEntityHeaders = (references: ReferenceList) => {
  return doPost(
    'repo/v1/entity/header',
    { references: references },
    undefined,
    BackendDestinationEnum.REPO_ENDPOINT,
  ) as Promise<PaginatedResults<EntityHeader>>
}

/**
 * Get the EntityHeader for a single entity
 * https://docs.synapse.org/rest/GET/entity/id/type.html
 */
export const getEntityHeader = (entityId: string) => {
  return doGet(
    `repo/v1/entity/${entityId}/type`,
    undefined,
    BackendDestinationEnum.REPO_ENDPOINT,
  ) as Promise<EntityHeader>
}

export const updateEntity = <T extends Entity>(entity: T): Promise<T> => {
  const url = `/repo/v1/entity/${entity.id}`
  return doPut(url, entity, undefined, BackendDestinationEnum.REPO_ENDPOINT)
}

export const deleteEntity = (entityId: string | number) => {
  const url = `/repo/v1/entity/${entityId}`
  return doDelete(url, undefined, BackendDestinationEnum.REPO_ENDPOINT)
}

/**
 * Bundled access to Entity and related data components.
 * An EntityBundle can be used to create, fetch, or update an Entity and
 * associated objects with a single web service request.
 * See SynapseClient.test.js for an example partsMask.
 * http://docs.synapse.org/rest/GET/entity/id/version/versionNumber/bundle.html
 */
export const getEntityBundleForVersion = (
  entityId: string | number,
  version: string | number | undefined,
  partsMask: string | number,
) => {
  let url = `/repo/v1/entity/${entityId}`
  if (version) {
    url += `/version/ + ${version}`
  }
  url += `/bundle?mask= ${partsMask}`
  return doGet(
    url,
    undefined,
    BackendDestinationEnum.REPO_ENDPOINT,
  ) as Promise<any>
}

export const getEntityBundleV2 = (
  entityId: string | number,
  requestObject: EntityBundleRequest,
  version?: number,
): Promise<EntityBundle> => {
  return doPost<EntityBundle>(
    `repo/v1/entity/${entityId}/${
      version ? `version/${version}/` : ''
    }/bundle2`,
    requestObject,
    undefined,
    BackendDestinationEnum.REPO_ENDPOINT,
  )
}

/**
 * Get a corresponding string value of ObjectType:
 **/
function getObjectTypeToString(key: ObjectType) {
  return ObjectType[key]
}

/**
 * Get Wiki page contents, call is of the form:
 * http://docs.synapse.org/rest/GET/entity/ownerId/wiki.html
 */
export const getEntityWiki = (
  ownerId: string | undefined,
  wikiId: string | undefined = '',
  objectType: ObjectType = ObjectType.ENTITY,
) => {
  const objectTypeString = getObjectTypeToString(objectType!)

  const url = `/repo/v1/${objectTypeString?.toLocaleLowerCase()}/${ownerId}/wiki/${wikiId}`
  return doGet<WikiPage>(url, undefined, BackendDestinationEnum.REPO_ENDPOINT)
}

/**
 * Returns synapse user favorites list given their session token
 * http://docs.synapse.org/rest/GET/favorite.html
 */
export const getUserFavorites = () => {
  // https://sagebionetworks.jira.com/browse/PLFM-6616
  const url = 'repo/v1/favorite?offset=0&limit=200'
  return doGet<PaginatedResults<EntityHeader>>(
    url,
    undefined,
    BackendDestinationEnum.REPO_ENDPOINT,
  )
}

/**
 * Get the user's list of teams they are on
 *
 * @param {*} id ownerID of the synapse user see - http://docs.synapse.org/rest/org/sagebionetworks/repo/model/UserProfile.html
 */
export const getUserTeamList = (id: string | number) => {
  const url = `repo/v1/user/${id}/team?offset=0&limit=200`
  return doGet(url, undefined, BackendDestinationEnum.REPO_ENDPOINT)
}
/**
 * Get the user's list of teams they are on
 *
 * @param {*} id ownerID of the synapse user see -https://docs.synapse.org/rest/GET/teamMembers/id.html
 * @param {*} fragment (optional) a prefix of the user's first or last name or email address (optional)
 * @param {*} limit    (optional) the maximum number of members to return (default 10, max limit 50)
 * @param {*} offset   (optional) the starting index of the returned results (default 0)
 *
 */
export const getTeamList = (
  id: string | number,
  fragment: string = '',
  limit: number = 10,
  offset: number = 0,
) => {
  const url = `repo/v1/teamMembers/${id}?limit=${limit}&offset=${offset}${
    fragment ? `&fragment=${fragment}` : ''
  }`
  return doGet(url, undefined, BackendDestinationEnum.REPO_ENDPOINT)
}

/**
 * https://rest-docs.synapse.org/rest/GET/entity/ownerId/wikikey.html
 * Get the root WikiPageKey for an Entity.
 * Note: The caller must be granted the ACCESS_TYPE.READ permission on the owner.
 * @return WikiPageKey
 **/
export const getWikiPageKeyForEntity = (
  ownerId: string | number,
): Promise<WikiPageKey> => {
  const url = `repo/v1/entity/${ownerId}/wikikey`
  return doGet<WikiPageKey>(
    url,
    undefined,
    BackendDestinationEnum.REPO_ENDPOINT,
  )
}

/**
 * https://rest-docs.synapse.org/rest/GET/access_requirement/ownerId/wikikey.html
 * Get the root WikiPageKey for an Access Requirement.
 * Note: The caller must be granted the ACCESS_TYPE.READ permission on the owner.
 * @return WikiPageKey
 **/
export const getWikiPageKeyForAccessRequirement = (
  ownerId: string | number,
): Promise<WikiPageKey> => {
  const url = `repo/v1/access_requirement/${ownerId}/wikikey`
  return doGet<WikiPageKey>(
    url,
    undefined,
    BackendDestinationEnum.REPO_ENDPOINT,
  )
}

export const getWikiAttachmentsFromEntity = (
  id: string | number,
  wikiId: string | number,
  objectType: ObjectType = ObjectType.ENTITY,
): Promise<FileHandleResults> => {
  const objectTypeString = getObjectTypeToString(objectType!)
  const url = `repo/v1/${objectTypeString.toLocaleLowerCase()}/${id}/wiki2/${wikiId}/attachmenthandles`
  return doGet(url, undefined, BackendDestinationEnum.REPO_ENDPOINT)
}
export const getWikiAttachmentsFromEvaluation = (
  id: string | number,
  wikiId: string | number,
) => {
  const url = `repo/v1/evaluation/${id}/wiki/${wikiId}/attachmenthandles`
  return doGet(url, undefined, BackendDestinationEnum.REPO_ENDPOINT)
}

export const getPresignedUrlForWikiAttachment = (
  id: string | number,
  wikiId: string | number,
  fileName: string,
  objectType: ObjectType = ObjectType.ENTITY,
): Promise<string> => {
  const objectTypeString = getObjectTypeToString(objectType!)
  const url = `repo/v1/${objectTypeString.toLocaleLowerCase()}/${id}/wiki2/${wikiId}/attachment?fileName=${fileName}&redirect=false`
  return doGet(url, undefined, BackendDestinationEnum.REPO_ENDPOINT)
}

export const isInSynapseExperimentalMode = (): boolean => {
  return cookies.get('SynapseTestWebsite')
}

export const isSignedIn = (): boolean => {
  return !!sessionToken
}

/**
 * Set the session token cookie.  Note that this will only succeed if your app is running on
 * a .synapse.org subdomain.
 *
 * @param {*} token Session token.  If undefined, then call should instruct the browser to delete the cookie.
 */
export const setSessionTokenCookie = async (
  token: string | undefined,
  sessionCallback: () => void,
) => {
  if (IS_OUTSIDE_SYNAPSE_ORG) {
    if (!token) {
      cookies.remove(SESSION_TOKEN_COOKIE_KEY, { path: '/' })
      // See - https://github.com/reactivestack/cookies/issues/189
      await delay(100)
    } else {
      // sets cookie in session storage
      cookies.set(SESSION_TOKEN_COOKIE_KEY, token, {
        // expires in a day
        maxAge: 60 * 60 * 24,
        path: '/',
      })
    }
    sessionCallback()
    setTokenInMemory(token)
  } else {
    // will set cookie in the http header
    doPost(
      'Portal/sessioncookie',
      { sessionToken: token },
      'include',
      BackendDestinationEnum.PORTAL_ENDPOINT,
    )
      .then(_ => {
        sessionCallback()
        setTokenInMemory(token)
      })
      .catch(err => {
        console.error('Error on setting session token ', err)
      })
  }
}
/**
 * Get the current session token from a cookie.  Note that this will only succeed if your app is running on
 * a .synapse.org subdomain.
 */
export const getSessionTokenFromCookie = async () => {
  console.log('Is outside synapse.org?', IS_OUTSIDE_SYNAPSE_ORG)
  if (IS_OUTSIDE_SYNAPSE_ORG) {
    sessionToken = cookies.get(SESSION_TOKEN_COOKIE_KEY)
  } else {
    sessionToken = await doGet<string>(
      'Portal/sessioncookie',
      'include',
      BackendDestinationEnum.PORTAL_ENDPOINT,
    )
  }
  return sessionToken
}

export const getPrincipalAliasRequest = (alias: string, type: string) => {
  const url = 'repo/v1/principal/alias'
  return doPost(
    url,
    { alias, type },
    undefined,
    BackendDestinationEnum.REPO_ENDPOINT,
  )
}

/*
During SSO login, the authorization provider (Google) will
send the user back to the portal with an authorization code,
which can be exchanged for a Synapse user session.
This function should be called whenever the root App is initialized
(to look for this code parameter and complete the round-trip).
*/
export const detectSSOCode = () => {
  const redirectURL = getRootURL()
  // 'code' handling (from SSO) should be preformed on the root page, and then redirect to original route.
  let code: URL | null | string = new URL(window.location.href)
  // in test environment the searchParams isn't defined
  const { searchParams } = code
  if (!searchParams) {
    return
  }
  code = searchParams.get('code')
  if (code) {
    oAuthSessionRequest(
      AUTH_PROVIDER,
      code,
      `${redirectURL}?provider=${AUTH_PROVIDER}`,
      BackendDestinationEnum.REPO_ENDPOINT,
    )
      .then((synToken: any) => {
        setSessionTokenCookie(synToken.sessionToken, () => {
          // go back to original route after successful SSO login
          const originalUrl = localStorage.getItem('after-sso-login-url')
          localStorage.removeItem('after-sso-login-url')
          if (originalUrl) {
            window.location.replace(originalUrl)
          }
        })
      })
      .catch((err: any) => {
        if (err.status === 404) {
          // Synapse account not found, send to registration page
          window.location.replace('https://www.synapse.org/#!RegisterAccount:0')
        }
        console.error('Error on sso sign in ', err)
      })
  }
}

export const signOut = (sessionCallback: () => void) => {
  setSessionTokenCookie(undefined, sessionCallback)
}

/**
 * Upload file.  Note that this currently only supports Synapse storage (Sage s3 bucket)
 * @param file
 * @param endpoint
 */
export const uploadFile = (filename: string, file: Blob) => {
  return new Promise<FileUploadComplete>(
    (fileUploadResolve, fileUploadReject) => {
      const partSize: number = Math.max(5242880, file.size / 10000)
      const request: MultipartUploadRequest = {
        contentType: file.type,
        fileName: filename,
        fileSizeBytes: file.size,
        partSizeBytes: partSize,
        storageLocationId: SYNAPSE_STORAGE_LOCATION_ID,
      }
      calculateMd5(file).then((md5: string) => {
        request.contentMD5Hex = md5
        startMultipartUpload(
          filename,
          file,
          request,
          fileUploadResolve,
          fileUploadReject,
        )
      })
    },
  )
}

const calculateMd5 = (fileBlob: File | Blob): Promise<string> => {
  // code taken from md5 example from library
  return new Promise((resolve, reject) => {
    const blobSlice = File.prototype.slice,
      file = fileBlob,
      chunkSize = 2097152, // Read in chunks of 2MB
      chunks = Math.ceil(file.size / chunkSize),
      spark = new SparkMD5.ArrayBuffer(),
      fileReader = new FileReader()
    let currentChunk = 0

    fileReader.onload = function (e) {
      console.log('read chunk nr', currentChunk + 1, 'of', chunks)
      spark.append(fileReader.result as ArrayBuffer) // Append array buffer
      currentChunk++

      if (currentChunk < chunks) {
        loadNext()
      } else {
        console.log('finished loading')
        const md5: string = spark.end()
        console.info('computed hash', md5) // Compute hash
        resolve(md5)
      }
    }

    fileReader.onerror = function () {
      console.warn('oops, something went wrong.')
      reject(fileReader.error)
    }

    const loadNext = () => {
      const start = currentChunk * chunkSize,
        end = start + chunkSize >= file.size ? file.size : start + chunkSize

      fileReader.readAsArrayBuffer(blobSlice.call(file, start, end))
    }
    loadNext()
  })
}

const processFilePart = (
  partNumber: number,
  multipartUploadStatus: MultipartUploadStatus,
  fileName: string,
  file: Blob,
  request: MultipartUploadRequest,
  fileUploadResolve: (fileUpload: FileUploadComplete) => void,
  fileUploadReject: (reason: any) => void,
) => {
  if (multipartUploadStatus.clientSidePartsState![partNumber - 1]) {
    // no-op. this part has already been processed!
    return
  }

  const uploadId = multipartUploadStatus.uploadId
  const presignedUploadUrlRequest: BatchPresignedUploadUrlRequest = {
    uploadId,
    contentType: 'application/octet-stream', // each part is binary
    partNumbers: [partNumber],
  }
  const presignedUrlUrl = `/file/v1/file/multipart/${uploadId}/presigned/url/batch`
  doPost<BatchPresignedUploadUrlResponse>(
    presignedUrlUrl,
    presignedUploadUrlRequest,
    undefined,
    BackendDestinationEnum.REPO_ENDPOINT,
  ).then(async (presignedUrlResponse: BatchPresignedUploadUrlResponse) => {
    const presignedUrl =
      presignedUrlResponse.partPresignedUrls[0].uploadPresignedUrl
    // calculate the byte range
    const startByte = (partNumber - 1) * request.partSizeBytes
    let endByte = partNumber * request.partSizeBytes - 1
    if (endByte >= request.fileSizeBytes) {
      endByte = request.fileSizeBytes - 1
    }
    const fileSlice = file.slice(
      startByte,
      endByte + 1,
      presignedUploadUrlRequest.contentType,
    )
    await uploadFilePart(
      presignedUrl,
      fileSlice,
      presignedUploadUrlRequest.contentType,
    )
    // uploaded the part.  calculate md5 of the part and add the part to the upload
    calculateMd5(fileSlice).then((md5: string) => {
      const addPartUrl = `/file/v1/file/multipart/${uploadId}/add/${partNumber}?partMD5Hex=${md5}`
      doPut(
        addPartUrl,
        undefined,
        undefined,
        BackendDestinationEnum.REPO_ENDPOINT,
      ).then((addPartResponse: AddPartResponse) => {
        if (addPartResponse.addPartState === 'ADD_SUCCESS') {
          // done with this part!
          multipartUploadStatus.clientSidePartsState![partNumber - 1] = true
          checkUploadComplete(
            multipartUploadStatus,
            fileName,
            fileUploadResolve,
            fileUploadReject,
          )
        } else {
          // retry after a brief delay
          delay(1000).then(() => {
            processFilePart(
              partNumber,
              multipartUploadStatus,
              fileName,
              file,
              request,
              fileUploadResolve,
              fileUploadReject,
            )
          })
        }
      })
    })
  })
}
export const checkUploadComplete = (
  status: MultipartUploadStatus,
  fileHandleName: string,
  fileUploadResolve: (fileUpload: FileUploadComplete) => void,
  fileUploadReject: (reason: any) => void,
) => {
  // if all client-side parts are true (uploaded), then complete the upload and get the file handle!
  if (
    status.clientSidePartsState!.every(v => {
      return v
    })
  ) {
    const url = `/file/v1/file/multipart/${status.uploadId}/complete`
    doPut(url, undefined, undefined, BackendDestinationEnum.REPO_ENDPOINT)
      .then((newStatus: MultipartUploadStatus) => {
        // success!
        fileUploadResolve({
          fileHandleId: newStatus.resultFileHandleId,
          fileName: fileHandleName,
        })
      })
      .catch(error => {
        fileUploadReject(error)
      })
  }
}
const uploadFilePart = async (
  presignedUrl: string,
  file: any,
  contentType: string,
) => {
  // TODO: could try using axios to get upload progress, then update the client-side part state (change to numbers from 0-1)
  // This would give progress for the single file (across all parts).
  // The parent would still need to figure out progress (for the total file set).
  await fetch(presignedUrl, {
    method: 'PUT',
    headers: {
      'Content-Type': contentType,
    },
    body: file,
  })
}
export const startMultipartUpload = (
  fileName: string,
  file: Blob,
  request: MultipartUploadRequest,
  fileUploadResolve: (fileUpload: FileUploadComplete) => void,
  fileUploadReject: (reason: any) => void,
) => {
  const url = 'file/v1/file/multipart'
  doPost<MultipartUploadStatus>(
    url,
    request,
    undefined,
    BackendDestinationEnum.REPO_ENDPOINT,
  )
    .then(async (status: MultipartUploadStatus) => {
      // started the upload
      // keep track of the part state client-side
      const clientSidePartsState: boolean[] = status.partsState
        .split('')
        .map(bit => bit === '1')
      status.clientSidePartsState = clientSidePartsState
      for (let i = 0; i < clientSidePartsState.length; i = i + 1) {
        if (!clientSidePartsState[i]) {
          // upload this part.  note that partNumber is always the index+1
          processFilePart(
            i + 1,
            status,
            fileName,
            file,
            request,
            fileUploadResolve,
            fileUploadReject,
          )
        }
      }
      // in case there is no upload work to do!
      checkUploadComplete(status, fileName, fileUploadResolve, fileUploadReject)
    })
    .catch(error => {
      fileUploadReject(error)
    })
}

export const getFileHandleContentFromID = (
  fileHandleId: string,
): Promise<string> => {
  // get the presigned URL, download the data, and send that back (via resolve())
  return new Promise((resolve, reject) => {
    // get the file handle and url
    const getFileHandleByIdPromise = getFileHandleById(fileHandleId)
    const getFileHandlePresignedUrlPromis = getFileHandleByIdURL(fileHandleId)
    Promise.all([getFileHandleByIdPromise, getFileHandlePresignedUrlPromis])
      .then(values => {
        const fileHandle: FileHandle = values[0]
        const presignedUrl: string = values[1]
        return getFileHandleContent(fileHandle, presignedUrl).then(
          (content: string) => {
            resolve(content)
          },
        )
      })
      .catch(err => {
        reject(err)
      })
  })
}

export const getFileHandleContent = (
  fileHandle: FileHandle,
  presignedUrl: string,
): Promise<string> => {
  // get the presigned URL, download the data, and send that back (via resolve())
  return new Promise((resolve, reject) => {
    // sanity check!  must be less than 5MB
    if (fileHandle.contentSize < MAX_JS_FILE_DOWNLOAD_SIZE) {
      fetch(presignedUrl, {
        method: 'GET',
        mode: 'cors',
        cache: 'no-cache',
        headers: {
          'Content-Type': fileHandle.contentType,
        },
      }).then(response => {
        // the response is always decoded using UTF-8
        response.text().then(text => {
          resolve(text)
        })
      })
    } else {
      reject('File size exceeds max (5MB)')
    }
  })
}

/**
 * Return the FileHandle of the file associated to the given FileEntity.
 * * @param fileEntity: FileEntity
 * @param endpoint
 */
export const getFileResult = (
  fileEntity: FileEntity,
  includeFileHandles?: boolean,
  includePreSignedURLs?: boolean,
  includePreviewPreSignedURLs?: boolean,
): Promise<FileResult> => {
  return new Promise((resolve, reject) => {
    const fileHandleAssociationList: FileHandleAssociation[] = [
      {
        associateObjectId: fileEntity.id!,
        associateObjectType: FileHandleAssociateType.FileEntity,
        fileHandleId: fileEntity.dataFileHandleId,
      },
    ]
    const request: BatchFileRequest = {
      includeFileHandles: includeFileHandles || false,
      includePreSignedURLs: includePreSignedURLs || false,
      includePreviewPreSignedURLs: includePreviewPreSignedURLs || false,
      requestedFiles: fileHandleAssociationList,
    }
    getFiles(request)
      .then((data: BatchFileResult) => {
        if (
          data.requestedFiles.length &&
          data.requestedFiles[0].fileHandleId !== undefined
        ) {
          resolve(data.requestedFiles[0])
        } else {
          reject(data.requestedFiles[0].failureCode)
        }
      })
      .catch(err => {
        reject(err)
      })
  })
}

/**
 * Add a file to the user's download list.
 * Uses http://rest-docs.synapse.org/rest/POST/download/list/add.html
 * @param fileEntityId
 * @param versionNumber
 */
export const addFileToDownloadListV2 = (
  fileEntityId: string,
  versionNumber?: number,
): Promise<AddBatchOfFilesToDownloadListResponse> => {
  const request: AddBatchOfFilesToDownloadListRequest = {
    batchToAdd: [{ fileEntityId, versionNumber }],
  }
  return doPost(
    'repo/v1/download/list/add',
    request,
    undefined,
    BackendDestinationEnum.REPO_ENDPOINT,
  )
}

/**
 * Create an ACL
 * https://docs.synapse.org/rest/POST/entity/id/acl.html
 */
export const createACL = (entityId: string, acl: AccessControlList) => {
  return doPost(
    `/repo/v1/entity/${entityId}/acl`,
    acl,
    undefined,
    BackendDestinationEnum.REPO_ENDPOINT,
  )
}

/**
 * Submit an entity to an evaluation queue
 * https://docs.synapse.org/rest/POST/evaluation/submission.html
 */
export const submitToEvaluation = (submission: Submission, etag: string) => {
  return doPost(
    `/repo/v1/evaluation/submission?etag=${etag}`,
    submission,
    undefined,
    BackendDestinationEnum.REPO_ENDPOINT,
  )
}

export const getEvaluationPermissions = (evalId: string) => {
  return doGet<UserEvaluationPermissions>(
    `/repo/v1/evaluation/${evalId}/permissions`,
    undefined,
    BackendDestinationEnum.REPO_ENDPOINT,
  )
}

/**
 * Get an evaluation queue
 * https://docs.synapse.org/rest/GET/evaluation/evalId.html
 */
export const getEvaluation = (evalId: string): Promise<Evaluation> => {
  if (!evalId) {
    // we must explicitly handle this because /repo/v1/evaluation
    // without an evalId is a valid API that returns a different API response
    return Promise.reject(new Error('evalId is empty'))
  }
  return doGet<Evaluation>(
    `/repo/v1/evaluation/${evalId}`,
    undefined,
    BackendDestinationEnum.REPO_ENDPOINT,
  )
}

/**
 * Update an existing evaluation queue
 * https://docs.synapse.org/rest/PUT/evaluation/evalId.html
 */
export const updateEvaluation = (
  evaluation: Evaluation,
): Promise<Evaluation> => {
  if (!evaluation.id) {
    // we must explicitly handle this because /repo/v1/evaluation
    // without an evalId is a valid API that returns a different API response
    return Promise.reject(new Error('evaluation does not have an ID'))
  }
  return doPut<Evaluation>(
    `/repo/v1/evaluation/${evaluation.id}`,
    evaluation,
    undefined,
    BackendDestinationEnum.REPO_ENDPOINT,
  )
}

/**
 * Create an evaluation queue
 * https://docs.synapse.org/rest/POST/evaluation.html
 */
export const createEvaluation = (
  evaluation: Evaluation,
): Promise<Evaluation> => {
  return doPost<Evaluation>(
    '/repo/v1/evaluation/',
    evaluation,
    undefined,
    BackendDestinationEnum.REPO_ENDPOINT,
  )
}

/**
 * Delete an existing evaluation queue
 * https://docs.synapse.org/rest/PUT/evaluation/evalId.html
 */
export const deleteEvaluation = (evalId: string): Promise<void> => {
  return doDelete(
    `/repo/v1/evaluation/${evalId}`,
    undefined,
    BackendDestinationEnum.REPO_ENDPOINT,
  )
}

/**
 * Get an evaluation round
 * https://docs.synapse.org/rest/GET/evaluation/evalId/round/evalRoundId.html
 */
export const getEvaluationRound = (
  evalId: string,
  evalRoundId: string,
): Promise<EvaluationRound> => {
  return doGet(
    `/repo/v1/evaluation/${evalId}/round/${evalRoundId}`,
    undefined,
    BackendDestinationEnum.REPO_ENDPOINT,
  )
}

/**
 * Get all evaluation rounds
 * https://docs.synapse.org/rest/GET/evaluation/evalId/round/list.html
 */
export const getEvaluationRoundsList = (
  evalId: string,
  evaluationRoundListRequest: EvaluationRoundListRequest | undefined,
): Promise<EvaluationRoundListResponse> => {
  return doPost(
    `/repo/v1/evaluation/${evalId}/round/list`,
    evaluationRoundListRequest ?? {},
    undefined,
    BackendDestinationEnum.REPO_ENDPOINT,
  )
}

/**
 * Create an evaluation round
 * https://docs.synapse.org/rest/POST/evaluation/evalId/round/evalRoundId.html
 */
export const createEvaluationRound = (
  evaluationRound: EvaluationRound,
): Promise<EvaluationRound> => {
  return doPost(
    `/repo/v1/evaluation/${evaluationRound.evaluationId}/round`,
    evaluationRound,
    undefined,
    BackendDestinationEnum.REPO_ENDPOINT,
  )
}

/**
 * Update an evaluation round
 * https://docs.synapse.org/rest/PUT/evaluation/evalId/round/evalRoundId.html
 */
export const updateEvaluationRound = (
  evaluationRound: EvaluationRound,
): Promise<EvaluationRound> => {
  return doPut(
    `/repo/v1/evaluation/${evaluationRound.evaluationId}/round/${evaluationRound.id}`,
    evaluationRound,
    undefined,
    BackendDestinationEnum.REPO_ENDPOINT,
  )
}

/**
 * Delete an evaluation round
 * https://docs.synapse.org/rest/DELETE/evaluation/evalId/round/evalRoundId.html
 */
export const deleteEvaluationRound = (evalId: string, evalRoundId: string) => {
  return doDelete(
    `/repo/v1/evaluation/${evalId}/round/${evalRoundId}`,
    undefined,
    BackendDestinationEnum.REPO_ENDPOINT,
  )
}

/**
 * Executes a user-defined query over the Submissions of a specific Evaluation.
 * https://docs.synapse.org/rest/GET/evaluation/submission/query.html
 */
export const getEvaluationSubmissions = (
  query: string,
): Promise<QueryTableResults> => {
  return doGet(
    `/repo/v1/evaluation/submission/query?query=${encodeURI(query)}`,
    undefined,
    BackendDestinationEnum.REPO_ENDPOINT,
  )
}

/**
 * Get user-friendly OAuth2 request information (to present to the user so they can choose if they want to give consent).
 * http://rest-docs.synapse.org/rest/POST/oauth2/description.html
 */
export const getOAuth2RequestDescription = (
  oidcAuthRequest: OIDCAuthorizationRequest,
): Promise<OIDCAuthorizationRequestDescription> => {
  return doPost(
    '/auth/v1/oauth2/description',
    oidcAuthRequest,
    undefined,
    BackendDestinationEnum.REPO_ENDPOINT,
  )
}

/**
 * Check whether user has already granted consent for the given OAuth client, scope, and claims.
 * Consent persists for one year.
 */
export const hasUserAuthorizedOAuthClient = (
  oidcAuthRequest: OIDCAuthorizationRequest,
): Promise<OAuthConsentGrantedResponse> => {
  return doPost(
    '/auth/v1/oauth2/consentcheck',
    oidcAuthRequest,
    undefined,
    BackendDestinationEnum.REPO_ENDPOINT,
  )
}

/**
 * Get OAuth2 Client information (available to the public)
 */
export const getOAuth2Client = (
  clientId: string,
): Promise<OAuthClientPublic> => {
  return doGet(
    `/auth/v1/oauth2/client/${clientId}`,
    undefined,
    BackendDestinationEnum.REPO_ENDPOINT,
  )
}

/**
 * User consents to the given OIDCAuthorizationRequest (after being presented with all information returned by getOAuth2RequestDescription())
 * @param oidcAuthRequest
 * @param endpoint
 */
export const consentToOAuth2Request = (
  oidcAuthRequest: OIDCAuthorizationRequest,
): Promise<AccessCodeResponse> => {
  return doPost(
    '/auth/v1/oauth2/consent',
    oidcAuthRequest,
    undefined,
    BackendDestinationEnum.REPO_ENDPOINT,
  )
}

/***********************
 * FORM SERVICES
 * https://docs.synapse.org/rest/#org.sagebionetworks.repo.web.controller.FormController
 *************************/
/**
 * Create a FormGroup
 * https://docs.synapse.org/rest/POST/form/group.html
 * @param name
 * @param endpoint
 */
export const createFormGroup = (name: string): Promise<FormGroup> => {
  return doPost(
    `/repo/v1/form/group?name=${encodeURI(name)}`,
    undefined,
    undefined,
    BackendDestinationEnum.REPO_ENDPOINT,
  )
}

/**
 * Get FormGroup ACL
 * https://docs.synapse.org/rest/GET/form/group/id/acl.html
 */
export const getFormACL = (formGroupId: string): Promise<AccessControlList> => {
  return doGet(
    `/repo/v1/form/group/${formGroupId}/acl`,
    undefined,
    BackendDestinationEnum.REPO_ENDPOINT,
  )
}

/**
 * Update FormGroup ACL
 * https://docs.synapse.org/rest/PUT/form/group/id/acl.html
 */
export const updateFormACL = (
  formGroupId: string,
  newAcl: AccessControlList,
): Promise<AccessControlList> => {
  return doPut(
    `/repo/v1/form/group/${formGroupId}/acl`,
    newAcl,
    undefined,
    BackendDestinationEnum.REPO_ENDPOINT,
  )
}

/**
 * Create a new FormData object
 * https://docs.synapse.org/rest/POST/form/data.html
 * @param formGroupId
 * @param name
 * @param endpoint
 */
export const createFormData = (
  formGroupId: string,
  name: string,
  dataFileHandleId: string,
): Promise<FormData> => {
  const newFormData: FormChangeRequest = {
    name,
    fileHandleId: dataFileHandleId,
  }
  return doPost(
    `/repo/v1/form/data?groupId=${formGroupId}`,
    newFormData,
    undefined,
    BackendDestinationEnum.REPO_ENDPOINT,
  )
}

/**
 * Update FormData object
 * https://docs.synapse.org/rest/PUT/form/data.html
 */
export const updateFormData = (
  formDataId: string,
  name: string,
  dataFileHandleId: string,
): Promise<FormData> => {
  const updatedFormData: FormChangeRequest = {
    name,
    fileHandleId: dataFileHandleId,
  }
  return doPut(
    `/repo/v1/form/data/${formDataId}`,
    updatedFormData,
    undefined,
    BackendDestinationEnum.REPO_ENDPOINT,
  )
}

/**
 * Delete FormData object
 * https://docs.synapse.org/rest/DELETE/form/data.html
 */
export const deleteFormData = (formDataId: string) => {
  return doDelete(
    `/repo/v1/form/data/${formDataId}`,
    undefined,
    BackendDestinationEnum.REPO_ENDPOINT,
  )
}

/**
 * Submit the identified FormData for review.
 * https://docs.synapse.org/rest/POST/form/data/id/submit.html
 */
export const submitFormData = (formDataId: string): Promise<FormData> => {
  return doPost(
    `/repo/v1/form/data/${formDataId}/submit`,
    undefined,
    undefined,
    BackendDestinationEnum.REPO_ENDPOINT,
  )
}

/**
 * List FormData objects and their associated status that match the filters of the provided request that are
 * owned by the caller. Note: Only objects owned by the caller will be returned.
 * https://docs.synapse.org/rest/POST/form/data/list.html
 */
export const listFormData = (request: ListRequest): Promise<ListResponse> => {
  return doPost(
    `/repo/v1/form/data/list`,
    request,
    undefined,
    BackendDestinationEnum.REPO_ENDPOINT,
  )
}

/**
 * List FormData objects and their associated status that match the filters of the provided request for the entire
 * group. This is used by service accounts to process submissions.
 * https://docs.synapse.org/rest/POST/form/data/list/reviewer.html
 */
export const listFormDataAsFormAdmin = (
  request: ListRequest,
): Promise<ListResponse> => {
  return doPost(
    `/repo/v1/form/data/list/reviewer`,
    request,
    undefined,
    BackendDestinationEnum.REPO_ENDPOINT,
  )
}

/**
 * Called by the form processing service to accept a submitted data.
 * https://docs.synapse.org/rest/PUT/form/data/id/accept.html
 */
export const acceptFormData = (formDataId: string): Promise<FormData> => {
  return doPut(
    `/repo/v1/form/data/${formDataId}/accept`,
    undefined,
    undefined,
    BackendDestinationEnum.REPO_ENDPOINT,
  )
}

/**
 * Called by the form processing service to reject a submitted data.
 * https://docs.synapse.org/rest/PUT/form/data/id/reject.html
 */
export const rejectFormData = (
  formDataId: string,
  reason: string,
): Promise<FormData> => {
  const formRejection: FormRejection = {
    reason,
  }
  return doPut(
    `/repo/v1/form/data/${formDataId}/reject`,
    formRejection,
    undefined,
    BackendDestinationEnum.REPO_ENDPOINT,
  )
}

/**
 * Get Statistics
 * https://docs.synapse.org/rest/POST/statistics.html
 * Generic endpoint to retrieve statistics about objects. The user should have VIEW_STATISTICS access on the object referenced by the objectId in the request.
 */
export const getProjectStatistics = (
  request: ProjectFilesStatisticsRequest,
): Promise<ProjectFilesStatisticsResponse> => {
  return doPost(
    `/repo/v1/statistics`,
    request,
    undefined,
    BackendDestinationEnum.REPO_ENDPOINT,
  )
}

// see https://docs.synapse.org/rest/POST/restrictionInformation.html
export const getRestrictionInformation = (
  request: RestrictionInformationRequest,
): Promise<RestrictionInformationResponse> => {
  return doPost(
    `/repo/v1/restrictionInformation`,
    request,
    undefined,
    BackendDestinationEnum.REPO_ENDPOINT,
  )
}
/**
 * Returns a paginated result of access requirements associated for an entity
 *
 * See https://rest-docs.synapse.org/rest/GET/entity/id/accessRequirement.html
 *
 * @param {string} id id of entity
 * @param {number} [limit=50]
 * @param {number} [offset=0]
 * @returns {Promise<PaginatedResults<AccessRequirement>>}
 */
export const getAccessRequirement = (
  id: string,
  limit: number = 50,
  offset: number = 0,
): Promise<PaginatedResults<AccessRequirement>> => {
  const url = `/repo/v1/entity/${id}/accessRequirement?limit=${limit}&offset=${offset}`
  return doGet<PaginatedResults<AccessRequirement>>(
    url,
    undefined,
    BackendDestinationEnum.REPO_ENDPOINT,
  )
}

/**
 * Retrieve an access requirement status for a given access requirement ID.
 *
 * @param {string} requirementId id of entity to lookup
 * @returns {AccessRequirementStatus}
 */

export const getAccessRequirementStatus = (
  requirementId: string | number,
): Promise<AccessRequirementStatus> => {
  const url = `repo/v1/accessRequirement/${requirementId}/status`
  return doGet(url, undefined, BackendDestinationEnum.REPO_ENDPOINT)
}

/**
 * Returns all the access requirements associated to an entity {id}, calling the
 * paginated getAccessRequirement service until all results are returned.
 *
 * @param {string} id id of entity to lookup
 * @returns {Promise<Array<AccessRequirement>>}
 */
export const getAllAccessRequirements = (
  id: string,
): Promise<Array<AccessRequirement>> => {
  // format function to be callable by getAllOfPaginatedService
  const fn = (limit: number, offset: number) => {
    const url = `/repo/v1/entity/${id}/accessRequirement?limit=${limit}&offset=${offset}`
    return doGet<PaginatedResults<AccessRequirement>>(
      url,
      undefined,
      BackendDestinationEnum.REPO_ENDPOINT,
    )
  }
  return getAllOfPaginatedService(fn)
}

/**
 *
 *
 * @param {(number | undefined)} id the unique immutable ID
 * @returns {AccessApproval}
 */
export const getAccessApproval = async (
  approvalId: number | undefined,
): Promise<AccessApproval> => {
  const url = `repo/v1/accessApproval/${approvalId}`
  return doGet<AccessApproval>(
    url,
    undefined,
    BackendDestinationEnum.REPO_ENDPOINT,
  )
}

/**
 *
 *
 * @param {AccessApproval} accessApproval access approval request object
 * @returns {AccessApproval}
 */
export const postAccessApproval = async (
  accessApproval: AccessApproval,
): Promise<AccessApproval> => {
  return doPost<AccessApproval>(
    'repo/v1/accessApproval',
    accessApproval,
    undefined,
    BackendDestinationEnum.REPO_ENDPOINT,
  )
}

// https://rest-docs.synapse.org/rest/GET/download/list.html
export const getDownloadList = () => {
  return doGet<DownloadList>(
    '/file/v1/download/list',
    undefined,
    BackendDestinationEnum.REPO_ENDPOINT,
  )
}

export const getDownloadOrder = (
  zipFileName: string | undefined,
): Promise<DownloadOrder> => {
  const baseURL = '/file/v1/download/order'
  const url = zipFileName ? `${baseURL}?zipFileName=${zipFileName}` : baseURL
  return doPost(url, undefined, undefined, BackendDestinationEnum.REPO_ENDPOINT)
}

export type FunctionReturningPaginatedResults<T> = (
  limit: number,
  offset: number,
) => Promise<PaginatedResults<T>>
/**
 * Utility function to get all the results of a paginated service
 *
 * @template T Type of paginated service
 * @param {FunctionReturningPaginatedResults<T>} fn Function that returns a paginated synapse object, accepts a limit and offset
 * @returns
 */
export const getAllOfPaginatedService = async <T>(
  fn: FunctionReturningPaginatedResults<T>,
) => {
  const limit = 50
  let offset = 0
  let existsMoreData = true
  const results: T[] = []

  while (existsMoreData) {
    try {
      const data = await fn(limit, offset)
      results.push(...data.results)
      offset += data.results.length
      if (data.results.length < limit) {
        existsMoreData = false
      }
    } catch (e) {
      throw Error(`Error on getting paginated results ${e}`)
    }
  }

  return results
}

// https://rest-docs.synapse.org/rest/POST/download/list/remove.html
export const deleteDownloadListFiles = (
  list: FileHandleAssociation[],
): Promise<DownloadList> => {
  return doPost<DownloadList>(
    '/file/v1/download/list/remove',
    { list },
    undefined,
    BackendDestinationEnum.REPO_ENDPOINT,
  ).then(data => {
    dispatchDownloadListChangeEvent(data)
    return data
  })
}

// https://rest-docs.synapse.org/rest/DELETE/download/list.html ?
export const deleteDownloadList = () => {
  return doDelete(
    '/file/v1/download/list',
    undefined,
    BackendDestinationEnum.REPO_ENDPOINT,
  ).then(_ => {
    dispatchDownloadListChangeEvent(undefined)
  })
}

/**
 * http://rest-docs.synapse.org/rest/POST/entity/id/table/transaction/async/start.html
 * @param {*} tableUpdateRequest
 * @param {*} endpoint
 * // technically returns a TableUpdateTransactionResponse, but I don't see any reason we need this
 */
export const updateTable = (
  tableUpdateRequest: TableUpdateTransactionRequest,
  updateParentState?: any,
): Promise<any> => {
  return doPost<AsyncJobId>(
    `/repo/v1/entity/${tableUpdateRequest.entityId}/table/transaction/async/start`,
    tableUpdateRequest,
    undefined,
    BackendDestinationEnum.REPO_ENDPOINT,
  )
    .then(resp => {
      return getAsyncResultFromJobId<any>(
        `/repo/v1/entity/${tableUpdateRequest.entityId}/table/transaction/async/get/${resp.token}`,
        updateParentState,
      )
    })
    .catch((error: any) => {
      throw error
    })
}

export const getTransformSqlWithFacetsRequest = (
  transformSqlWithFacetsRequest: TransformSqlWithFacetsRequest,
) => {
  return doPost<SqlTransformResponse>(
    '/repo/v1/table/sql/transform',
    transformSqlWithFacetsRequest,
    undefined,
    BackendDestinationEnum.REPO_ENDPOINT,
  )
}

export const createPersonalAccessToken = (
  accessTokenGenerationRequest: AccessTokenGenerationRequest,
) => {
  return doPost<AccessTokenGenerationResponse>(
    '/auth/v1/personalAccessToken',
    accessTokenGenerationRequest,
    undefined,
    BackendDestinationEnum.REPO_ENDPOINT,
  )
}

export const getPersonalAccessTokenRecords = (
  nextPageToken: string | undefined,
) => {
  return doGet<AccessTokenRecordList>(
    `/auth/v1/personalAccessToken${
      nextPageToken ? '?nextPageToken=' + nextPageToken : ''
    }`,
    undefined,
    BackendDestinationEnum.REPO_ENDPOINT,
  )
}

export const deletePersonalAccessToken = (accessTokenId: string) => {
  return doDelete(
    `/auth/v1/personalAccessToken/${accessTokenId}`,
    undefined,
    BackendDestinationEnum.REPO_ENDPOINT,
  )
}

// https://rest-docs.synapse.org/rest/GET/projects.html
export const getMyProjects = (params?: GetProjectsParameters) => {
  const { nextPageToken, teamId, filter, sort, sortDirection } = params || {}
  return doGet<ProjectHeaderList>(
    `/repo/v1/projects${
      [nextPageToken, teamId, filter, sort, sortDirection].some(x => !!x)
        ? '?'
        : ''
    }${nextPageToken ? 'nextPageToken=' + nextPageToken + '&' : ''}${
      teamId ? 'teamId=' + teamId + '&' : ''
    }${filter ? 'filter=' + filter + '&' : ''}
    ${sort ? 'sort=' + sort + '&' : ''}${
      sortDirection ? 'sortDirection=' + sortDirection + '&' : ''
    }`,
    undefined,
    BackendDestinationEnum.REPO_ENDPOINT,
  )
}

// https://rest-docs.synapse.org/rest/GET/entity/id/path.html
export const getEntityPath = (entityId: string) => {
  return doGet<EntityPath>(
    `/repo/v1/entity/${entityId}/path`,
    undefined,
    BackendDestinationEnum.REPO_ENDPOINT,
  )
}

// https://docs.synapse.org/rest/GET/entity/id/version.html
// TODO: Pagination
export const getEntityVersions = (entityId: string) => {
  return doGet<PaginatedResults<VersionInfo>>(
    `/repo/v1/entity/${entityId}/version?offset=0&limit=200`,
    undefined,
    BackendDestinationEnum.REPO_ENDPOINT,
  )
}

// https://docs.synapse.org/rest/POST/search.html
export const searchEntities = (query: SearchQuery) => {
  return doPost<SearchResults>(
    '/repo/v1/search',
    query,
    undefined,
    BackendDestinationEnum.REPO_ENDPOINT,
  )
}
