import { Entity } from './jsonResponses/Entity'
import { BatchFileResult } from './jsonResponses/BatchFileResult'
import { FileHandleResults } from './jsonResponses/FileHandleResults'
import { UserGroupHeaderResponsePage } from './jsonResponses/UserGroupHeaderResponsePage'
import { SynapseVersion } from './jsonResponses/SynapseVersion'
import { QueryResultBundle } from './jsonResponses/Table/QueryResultBundle'
import { WikiPage } from './jsonResponses/WikiPage'
import { UserBundle } from './jsonResponses/UserBundle'
import { AsyncJobId } from './jsonResponses/Table/AsyncJobId'
import { MultipartUploadRequest } from './jsonResponses/MultipartUploadRequest'
import { BatchPresignedUploadUrlRequest } from './jsonResponses/BatchPresignedUploadUrlRequest'
import { BatchPresignedUploadUrlResponse } from './jsonResponses/BatchPresignedUploadUrlResponse'
import { MultipartUploadStatus } from './jsonResponses/MultipartUploadStatus'
import { FileUploadComplete } from './jsonResponses/FileUploadComplete'
import { AddPartResponse } from './jsonResponses/AddPartResponse'
import { EntityLookupRequest } from './jsonResponses/EntityLookupRequest'
import { FileEntity } from './jsonResponses/FileEntity'
import { UserProfile } from './jsonResponses/UserProfile'
import { AccessControlList } from './jsonResponses/AccessControlList'
import { Submission } from './jsonResponses/Submission'
import { DownloadFromTableRequest } from './jsonResponses/Table/DownloadFromTableRequest'
import { AddFilesToDownloadListResponse} from './jsonResponses/AddFilesToDownloadListResponse'
import { AddFilesToDownloadListRequest } from './jsonResponses/AddFilesToDownloadListRequest'
import { DownloadFromTableResult } from './jsonResponses/Table/DownloadFromTableResult'
import { ReferenceList } from './jsonResponses/ReferenceList'
import { EntityHeader } from './jsonResponses/EntityHeader'
import { PaginatedResults } from './jsonResponses/PaginatedResults'
import { QueryBundleRequest } from './jsonResponses/Table/QueryBundleRequest'
import { OIDCAuthorizationRequest } from './jsonResponses/OIDCAuthorizationRequest'
import { OIDCAuthorizationRequestDescription } from './jsonResponses/OIDCAuthorizationRequestDescription'
import { AccessCodeResponse } from './jsonResponses/AccessCodeResponse'
import { OAuthClientPublic } from './jsonResponses/OAuthClientPublic'
import { BatchFileRequest } from './jsonResponses/BatchFileRequest'
import { QueryTableResults } from './jsonResponses/EvaluationQueryTable/QueryTableResults'
import {
  FormGroup,
  FormData,
  ListRequest,
  ListResponse,
  FormChangeRequest,
  FormRejection,
} from './jsonResponses/Forms'
import { FileHandle } from './jsonResponses/FileHandle'
import {
  ProjectFilesStatisticsRequest,
  ProjectFilesStatisticsResponse,
} from './jsonResponses/Statistics'
import SparkMD5 from 'spark-md5'
import { getEndpoint, BackendDestinationEnum } from './getEndpoint'
import { LoginResponse } from './jsonResponses/LoginResponse'
import {
  RestrictionInformationRequest,
  RestrictionInformationResponse,
} from './jsonResponses/RestrictionInformation'

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

export function delay(t: any) {
  return new Promise(resolve => {
    setTimeout(resolve.bind(null, {}), t)
  })
}
function parseJSON(response: any) {
  return response
    .text()
    .then((text: string) => {
      let parsedJson = ''
      try {
        parsedJson = JSON.parse(text)
      } catch (err) {
        console.log('Caught exception with parsing json ', err)
        parsedJson = text
      }
      return parsedJson ? parsedJson : {}
    })
    .catch(
      // this should never happen!
      (err: string) => {
        console.log('Caught exception loading response text ', err)
        return {}
      },
    )
}
const fetchWithExponentialTimeout = <T>(
  url: string,
  options: any,
  delayMs: any,
  retries: number,
): Promise<T> => {
  return fetch(url, options)
    .then(resp => {
      if (resp.status > 199 && resp.status < 300) {
        if (resp.status === 204) {
          // the response is empty, don't try to parse an empty response
          return resp
        }
        // ok!
        return parseJSON(resp)
      }
      if (resp.status === 429 || resp.status === 0) {
        // TOO_MANY_REQUESTS_STATUS_CODE, or network connection is down.  Retry after a couple of seconds.
        if (retries === 1) {
          return Promise.reject({
            reason: resp.statusText,
            statusCode: resp.status,
          })
        }
        return delay(delayMs).then(() => {
          return fetchWithExponentialTimeout(
            url,
            options,
            delayMs * 2,
            retries - 1,
          )
        })
      }
      // error status that indicates no more retries
      return resp
        .json()
        .then(json => {
          // on okay response return json, o.w. reject with json and
          // send to catch block
          const error = {
            reason: json.reason,
            status: resp.status,
          }
          return resp.ok ? json : Promise.reject(error)
        })
        .catch(error => {
          // call failed above
          if (error.reason && error.status) {
            // successfull return from server but invalid call
            // the call was recieved, but staus wasn't ok-- return the json response from above
            // from the response directly
            return Promise.reject({
              reason: error.reason,
              statusCode: error.status,
            })
          }
          return Promise.reject({
            reason: resp.statusText,
            statusCode: resp.status,
          })
        })
    })
    .catch(error => {
      // this should never happen
      return Promise.reject(error)
    })
}

export const doPost = (
  url: string,
  requestJsonObject: any,
  sessionToken: string | undefined,
  initCredentials: string | undefined,
  endpoint: BackendDestinationEnum,
): Promise<any> => {
  const options: any = {
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
  if (initCredentials) {
    options.credentials = initCredentials
  }
  if (sessionToken) {
    options.headers.sessionToken = sessionToken
  }
  const usedEndpoint = getEndpoint(endpoint)
  return fetchWithExponentialTimeout(usedEndpoint + url, options, 1000, 5)
}
export const doGet = <T>(
  url: string,
  sessionToken: string | undefined,
  initCredentials: string | undefined,
  endpoint: BackendDestinationEnum,
) => {
  const options: any = {
    headers: {
      Accept: '*/*',
      'Access-Control-Request-Headers': 'sessiontoken',
    },
    method: 'GET',
    mode: 'cors',
  }
  if (initCredentials) {
    options.credentials = initCredentials
  }
  if (sessionToken) {
    options.headers.sessionToken = sessionToken
  }
  const usedEndpoint = getEndpoint(endpoint)
  return fetchWithExponentialTimeout<T>(usedEndpoint + url, options, 1000, 5)
}

export const doDelete = (
  url: string,
  sessionToken: string | undefined,
  initCredentials: string | undefined,
  endpoint: BackendDestinationEnum,
) => {
  const options: any = {
    headers: {
      Accept: '*/*',
      'Access-Control-Request-Headers': 'sessiontoken',
    },
    method: 'DELETE',
    mode: 'cors',
    credentials: initCredentials,
  }
  if (initCredentials) {
    options.credentials = initCredentials
  }
  if (sessionToken) {
    options.headers.sessionToken = sessionToken
  }
  const usedEndpoint = getEndpoint(endpoint)
  return fetchWithExponentialTimeout(usedEndpoint + url, options, 1000, 5)
}

export const doPut = (
  url: string,
  requestJsonObject: any,
  sessionToken: string | undefined,
  initCredentials: string | undefined,
  endpoint: BackendDestinationEnum,
): Promise<any> => {
  const options: any = {
    body: JSON.stringify(requestJsonObject),
    headers: {
      Accept: '*/*',
      'Access-Control-Request-Headers': 'sessiontoken',
      'Content-Type': 'application/json',
    },
    method: 'PUT',
    mode: 'cors',
  }
  if (initCredentials) {
    options.credentials = initCredentials
  }
  if (sessionToken) {
    options.headers.sessionToken = sessionToken
  }
  const usedEndpoint = getEndpoint(endpoint)
  return fetchWithExponentialTimeout(usedEndpoint + url, options, 1000, 5)
}

export const putRefreshSessionToken = (sessionToken: string) => {
  return doPut(
    '/auth/v1/session',
    { sessionToken },
    undefined,
    undefined,
    BackendDestinationEnum.REPO_ENDPOINT,
  )
}

export const getVersion = (): Promise<SynapseVersion> => {
  return doGet<SynapseVersion>(
    '/repo/v1/version',
    undefined,
    undefined,
    BackendDestinationEnum.REPO_ENDPOINT,
  )
}

/**
 * https://docs.synapse.org/rest/POST/download/list/add/async/start.html
 */
//Start an asynchronous job to add files to a user's download list.
export const addFilestoDownloadListRequest = (
  request: AddFilesToDownloadListRequest,
  sessionToken: string,
  updateParentState?: any,
) => {
  return doPost(
    `file/v1/download/list/add/async/start`,
    request,
    sessionToken,
    undefined,
    BackendDestinationEnum.REPO_ENDPOINT,
  )
    .then((resp: AsyncJobId) => {
      const requestUrl = `file/v1/download/list/add/async/get/${resp.token}`
      return getAsyncResultFromJobId<AddFilesToDownloadListResponse>(
        requestUrl,
        sessionToken,
        updateParentState,
      )
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
  sessionToken: string | undefined = undefined,
  updateParentState?: any,
) => {
  return doPost(
    `/repo/v1/entity/${request.entityId}/table/download/csv/async/start`,
    request,
    sessionToken,
    undefined,
    BackendDestinationEnum.REPO_ENDPOINT,
  )
    .then((resp: AsyncJobId) => {
      const requestUrl = `/repo/v1/entity/${request.entityId}/table/download/csv/async/get/${resp.token}`
      return getAsyncResultFromJobId<DownloadFromTableResult>(
        requestUrl,
        sessionToken,
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
export const getFileHandleById = (
  handleId: string,
  sessionToken: string | undefined = undefined,
): Promise<FileHandle> => {
  return doGet<FileHandle>(
    `file/v1/fileHandle/${handleId}`,
    sessionToken,
    undefined,
    BackendDestinationEnum.REPO_ENDPOINT,
  )
}

/**
 * https://docs.synapse.org/rest/GET/fileHandle/handleId/url.html
 * @return a short lived presignedURL to be redirected with
 **/
export const getFileHandleByIdURL = (
  handleId: string,
  sessionToken: string | undefined = undefined,
) => {
  // get the presigned URL for this file handle
  return doGet<string>(
    `file/v1/fileHandle/${handleId}/url?redirect=false`,
    sessionToken,
    undefined,
    BackendDestinationEnum.REPO_ENDPOINT,
  )
}

export const getAsyncResultFromJobId = <T>(
  urlRequest: string,
  sessionToken: string | undefined = undefined,
  updateParentState?: any,
): Promise<T> => {
  return doGet(
    urlRequest,
    sessionToken,
    undefined,
    BackendDestinationEnum.REPO_ENDPOINT,
  )
    .then((resp: any) => {
      // is this the job status?
      if (resp.jobState && resp.jobState !== 'FAILED') {
        updateParentState &&
          updateParentState({
            asyncJobStatus: resp,
          })
        // still processing, wait for a second and try again
        return delay(500).then(() => {
          return getAsyncResultFromJobId<T>(
            urlRequest,
            sessionToken,
            updateParentState,
          )
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
  sessionToken: string | undefined = undefined,
  updateParentState?: any,
): Promise<QueryResultBundle> => {
  return doPost(
    `/repo/v1/entity/${queryBundleRequest.entityId}/table/query/async/start`,
    queryBundleRequest,
    sessionToken,
    undefined,
    BackendDestinationEnum.REPO_ENDPOINT,
  )
    .then(resp => {
      return getAsyncResultFromJobId<QueryResultBundle>(
        `/repo/v1/entity/${queryBundleRequest.entityId}/table/query/async/get/${resp.token}`,
        sessionToken,
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
 *           isConsistent: Boolean,
 *           partMask: Number
 *        }
 *     }
 * @param {*} queryBundleRequest
 * @param {*} [sessionToken=undefined]
 * @param {boolean} [onlyGetFacets=false] Specify if the query only needs facets and no
 * data-- (internally this limits the row count to 1 on the request)
 * @returns Full dataset from synapse table query
 */
export const getFullQueryTableResults = async (
  queryBundleRequest: any,
  sessionToken: string | undefined = undefined,
): Promise<QueryResultBundle> => {
  // TODO: Find out why theres a bug causing the query limit
  const { query, ...rest } = queryBundleRequest
  let data: any = {}
  let maxPageSize: number = 150
  const queryRequest: any = {
    ...rest,
    query: { ...query, limit: maxPageSize },
  }
  // Have to make two "sets" of calls for query, the first one tells us the maximum size per page of data
  // we can get, the following uses that maximum and offsets to the appropriate location to get the data
  // afterwards, the process repeats
  await getQueryTableResults(queryRequest, sessionToken).then(
    async (initData: QueryResultBundle) => {
      let queryCount: any = initData.queryResult.queryResults.rows.length
      let currentQueryCount: number = queryCount
      data = initData
      // Get the subsequent data, note- although the function calls itself, it runs
      // iteratively due to the await
      const getData = async () => {
        if (queryCount === maxPageSize) {
          maxPageSize = initData.maxRowsPerPage!
          const queryRequestWithMaxPageSize = {
            ...rest,
            query: { ...query, limit: maxPageSize, offset: currentQueryCount },
          }
          await getQueryTableResults(queryRequestWithMaxPageSize, sessionToken)
            .then((postData: any) => {
              queryCount += postData.queryResult.queryResults.rows.length
              if (queryCount > 0) {
                currentQueryCount += queryCount
                data.queryResult.queryResults.rows.push(
                  ...postData.queryResult.queryResults.rows, // ... spread operator to push all elements on
                )
              }
              return getData()
            })
            .catch(err => {
              console.log('Error on getting table results ', err)
            })
        } else {
          // set data to this plots sql in the query data
          return data
        }
      }
      return getData()
    },
  )
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
export let oAuthUrlRequest = (
  provider: string,
  redirectUrl: string,
  endpoint = BackendDestinationEnum.REPO_ENDPOINT,
) => {
  return doPost(
    '/auth/v1/oauth2/authurl',
    { provider, redirectUrl },
    undefined,
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
export let oAuthSessionRequest = (
  provider: string,
  authenticationCode: string | number,
  redirectUrl: string,
  endpoint: any = BackendDestinationEnum.REPO_ENDPOINT,
) => {
  return doPost(
    '/auth/v1/oauth2/session',
    { provider, authenticationCode, redirectUrl },
    undefined,
    undefined,
    endpoint,
  )
}
/**
 * Create an entity (Project, Folder, File, Table, View)
 * http://docs.synapse.org/rest/POST/entity.html
 */
export const createEntity = (entity: any, sessionToken: string | undefined) => {
  return doPost(
    '/repo/v1/entity',
    entity,
    sessionToken,
    undefined,
    BackendDestinationEnum.REPO_ENDPOINT,
  )
}
/**
 * Create a project with the given name.
 * http://docs.synapse.org/rest/POST/entity.html
 */
export const createProject = (
  name: string,
  sessionToken: string | undefined,
): Promise<Response> => {
  return createEntity(
    {
      name,
      concreteType: 'org.sagebionetworks.repo.model.Project',
    },
    sessionToken,
  )
}

/**
 * Return this user's UserProfile
 * http://docs.synapse.org/rest/GET/userProfile.html
 */
export const getUserProfile = (sessionToken: string | undefined) => {
  return doGet<UserProfile>(
    '/repo/v1/userProfile',
    sessionToken,
    undefined,
    BackendDestinationEnum.REPO_ENDPOINT,
  )
}

/**
 * Return this user's UserProfile
 * http://docs.synapse.org/rest/GET/userProfile.html
 */
export const getUserProfileById = (
  sessionToken: string | undefined,
  ownerId: string,
) => {
  return doGet<UserProfile>(
    `/repo/v1/userProfile/${ownerId}`,
    sessionToken,
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
  sessionToken: string | undefined,
): Promise<UserBundle> => {
  return doGet<UserBundle>(
    `repo/v1/user/${id}/bundle?mask=${mask}`,
    sessionToken,
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
  sessionToken: string | undefined,
): Promise<UserGroupHeaderResponsePage> => {
  return doGet<UserGroupHeaderResponsePage>(
    `repo/v1/userGroupHeaders/batch?ids=${ids.join(',')}`,
    sessionToken,
    undefined,
    BackendDestinationEnum.REPO_ENDPOINT,
  )
}

export type UserProfileList = { list: UserProfile[] }
/**
 * Return the User Profiles for the given list of user IDs
 * http://docs.synapse.org/rest/POST/userProfile.html
 */
export const getUserProfiles = (
  list: string[],
  sessionToken: string | undefined = undefined,
): Promise<UserProfileList> => {
  return doPost(
    '/repo/v1/userProfile',
    { list },
    sessionToken,
    undefined,
    BackendDestinationEnum.REPO_ENDPOINT,
  )
}

/**
 * Return the children (Files/Folders) of the given entity (Project or Folder).
 * http://docs.synapse.org/rest/POST/entity/children.html
 */
export const getEntityChildren = (
  request: any,
  sessionToken: string | undefined = undefined,
) => {
  return doPost(
    '/repo/v1/entity/children',
    request,
    sessionToken,
    undefined,
    BackendDestinationEnum.REPO_ENDPOINT,
  )
}
/**
 * Retrieve an entityId for a given parent ID and entity name.
 * https://docs.synapse.org/rest/POST/entity/child.html
 */
export const lookupChildEntity = (
  request: EntityLookupRequest,
  sessionToken: string | undefined = undefined,
) => {
  return doPost(
    '/repo/v1/entity/child',
    request,
    sessionToken,
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
  sessionToken: string | undefined = undefined,
): Promise<BatchFileResult> => {
  return doPost(
    '/file/v1/fileHandle/batch',
    request,
    sessionToken,
    undefined,
    BackendDestinationEnum.REPO_ENDPOINT,
  )
}
/**
 * Bundled access to Entity and related data components.
 * An EntityBundle can be used to create, fetch, or update an Entity and associated
 * objects with a single web service request.
 * See SynapseClient.test.js for an example partsMask.
 * https://docs.synapse.org/rest/org/sagebionetworks/repo/model/Entity.html
 */
type GetEntity = <T extends Entity>(
  sessionToken: string | undefined,
  entityId: string | number,
  versionNumber?: string,
) => Promise<T>

export const getEntity: GetEntity = <T>(
  sessionToken: string | undefined = undefined,
  entityId: string | number,
  versionNumber?: string,
) => {
  const url = versionNumber
    ? `/repo/v1/entity/${entityId}/version/${versionNumber}`
    : `/repo/v1/entity/${entityId}`
  return doGet(
    url,
    sessionToken,
    undefined,
    BackendDestinationEnum.REPO_ENDPOINT,
  ) as Promise<T>
}

/**
 * Get the EntityHeader for a list of references with a POST.
 * If any item in the batch fails (e.g., with a 404) it will be EXCLUDED in the result set.
 * https://docs.synapse.org/rest/POST/entity/header.html
 */
export const getEntityHeader = (
  references: ReferenceList,
  sessionToken: string | undefined = undefined,
) => {
  return doPost(
    'repo/v1/entity/header',
    { references },
    sessionToken,
    undefined,
    BackendDestinationEnum.REPO_ENDPOINT,
  ) as Promise<PaginatedResults<EntityHeader>>
}

export const updateEntity = (
  entity: Entity,
  sessionToken: string | undefined = undefined,
): Promise<Entity> => {
  const url = `/repo/v1/entity/${entity.id}`
  return doPut(
    url,
    entity,
    sessionToken,
    undefined,
    BackendDestinationEnum.REPO_ENDPOINT,
  )
}

export const deleteEntity: GetEntity = <T>(
  sessionToken: string | undefined = undefined,
  entityId: string | number,
) => {
  const url = `/repo/v1/entity/${entityId}`
  return doDelete(
    url,
    sessionToken,
    undefined,
    BackendDestinationEnum.REPO_ENDPOINT,
  ) as Promise<T>
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
  sessionToken: string | undefined = undefined,
) => {
  let url = `/repo/v1/entity/${entityId}`
  if (version) {
    url += `/version/ + ${version}`
  }
  url += `/bundle?mask= ${partsMask}`
  return doGet(
    url,
    sessionToken,
    undefined,
    BackendDestinationEnum.REPO_ENDPOINT,
  ) as Promise<any>
}
/**
 * Get Wiki page contents, call is of the form:
 * http://docs.synapse.org/rest/GET/entity/ownerId/wiki.html
 */
export const getEntityWiki = (
  sessionToken: string | undefined,
  ownerId: string | undefined,
  wikiId: string | undefined,
) => {
  const url = `/repo/v1/entity/${ownerId}/wiki/${wikiId}`
  return doGet(
    url,
    sessionToken,
    undefined,
    BackendDestinationEnum.REPO_ENDPOINT,
  ) as Promise<WikiPage>
}

/**
 * Returns synapse user favorites list given their session token
 * http://docs.synapse.org/rest/GET/favorite.html
 */
export const getUserFavorites = (sessionToken: string | undefined) => {
  const url = 'repo/v1/favorite?offset=0&limit=200'
  return doGet(
    url,
    sessionToken,
    undefined,
    BackendDestinationEnum.REPO_ENDPOINT,
  ) as Promise<any>
}

/**
 * Get the user's list of teams they are on
 *
 * @param {*} id ownerID of the synapse user see - http://docs.synapse.org/rest/org/sagebionetworks/repo/model/UserProfile.html
 */
export const getUserTeamList = (
  sessionToken: string | undefined,
  id: string | number,
) => {
  const url = `repo/v1/user/${id}/team?offset=0&limit=200`
  return doGet(
    url,
    sessionToken,
    undefined,
    BackendDestinationEnum.REPO_ENDPOINT,
  )
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
  sessionToken: string | undefined,
  id: string | number,
  fragment: string = '',
  limit: number = 10,
  offset: number = 0,
) => {
  const url = `repo/v1/teamMembers/${id}?limit=${limit}&offset=${offset}${
    fragment ? `&fragment=${fragment}` : ''
  }`
  return doGet(
    url,
    sessionToken,
    undefined,
    BackendDestinationEnum.REPO_ENDPOINT,
  )
}

export const getWikiAttachmentsFromEntity = (
  sessionToken: string | undefined,
  id: string | number,
  wikiId: string | number,
): Promise<FileHandleResults> => {
  const url = `repo/v1/entity/${id}/wiki/${wikiId}/attachmenthandles`
  return doGet(
    url,
    sessionToken,
    undefined,
    BackendDestinationEnum.REPO_ENDPOINT,
  )
}
export const getWikiAttachmentsFromEvaluation = (
  sessionToken: string | undefined,
  id: string | number,
  wikiId: string | number,
) => {
  const url = `repo/v1/evaluation/${id}/wiki/${wikiId}/attachmenthandles`
  return doGet(
    url,
    sessionToken,
    undefined,
    BackendDestinationEnum.REPO_ENDPOINT,
  )
}
/**
 * Set the session token cookie.  Note that this will only succeed if your app is running on
 * a .synapse.org subdomain.
 *
 * @param {*} token Session token.  If undefined, then call should instruct the browser to delete the cookie.
 */
export const setSessionTokenCookie = (token: string | undefined) => {
  if (!IS_OUTSIDE_SYNAPSE_ORG) {
    return doPost(
      'Portal/sessioncookie',
      { sessionToken: token },
      undefined,
      'include',
      BackendDestinationEnum.PORTAL_ENDPOINT,
    )
  }
  // else not on a synapse.org subdomain, no Synapse SSO
  setCookie(SESSION_TOKEN_COOKIE_KEY, token, 1)
  return Promise.resolve()
}
/**
 * Get the current session token from a cookie.  Note that this will only succeed if your app is running on
 * a .synapse.org subdomain.
 */
export const getSessionTokenFromCookie = () => {
  if (!IS_OUTSIDE_SYNAPSE_ORG) {
    return doGet<string>(
      'Portal/sessioncookie',
      undefined,
      'include',
      BackendDestinationEnum.PORTAL_ENDPOINT,
    )
  }
  // else (is not on a synapse.org subdomain)
  return Promise.resolve(getCookie(SESSION_TOKEN_COOKIE_KEY))
}

export const getPrincipalAliasRequest = (
  sessionToken: string | undefined,
  alias: string,
  type: string,
) => {
  const url = 'repo/v1/principal/alias'
  return doPost(
    url,
    { alias, type },
    sessionToken,
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
        setSessionTokenCookie(synToken.sessionToken)
          .then(() => {
            // go back to original route after successful SSO login
            const originalUrl = localStorage.getItem('after-sso-login-url')
            localStorage.removeItem('after-sso-login-url')
            if (originalUrl) {
              window.location.replace(originalUrl)
            }
          })
          .catch(errSetSession => {
            console.error('Error on set sesion token cookie ', errSetSession)
          })
      })
      .catch((err: any) => {
        if (err.statusCode === 404) {
          // Synapse account not found, send to registration page
          window.location.replace('https://www.synapse.org/#!RegisterAccount:0')
        }
        console.error('Error on sso sign in ', err)
      })
  }
}

export const signOut = () => {
  if (!IS_OUTSIDE_SYNAPSE_ORG) {
    setSessionTokenCookie(undefined)
      .then(() => {
        window.location.reload()
      })
      .catch(err => {
        console.error('err when clearing the session cookie ', err)
      })
  } else {
    // is not on a synapse.org subdomain
    removeCookie(SESSION_TOKEN_COOKIE_KEY)
    window.location.reload()
  }
}

/**
 * Upload file.  Note that this currently only supports Synapse storage (Sage s3 bucket)
 * @param sessionToken
 * @param file
 * @param endpoint
 */
export const uploadFile = (
  sessionToken: string | undefined,
  filename: string,
  file: Blob,
) => {
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
          sessionToken,
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
    let blobSlice = File.prototype.slice,
      file = fileBlob,
      chunkSize = 2097152, // Read in chunks of 2MB
      chunks = Math.ceil(file.size / chunkSize),
      currentChunk = 0,
      spark = new SparkMD5.ArrayBuffer(),
      fileReader = new FileReader()

    fileReader.onload = function(e) {
      console.log('read chunk nr', currentChunk + 1, 'of', chunks)
      spark.append(fileReader.result as ArrayBuffer) // Append array buffer
      currentChunk++

      if (currentChunk < chunks) {
        loadNext()
      } else {
        console.log('finished loading')
        let md5: string = spark.end()
        console.info('computed hash', md5) // Compute hash
        resolve(md5)
      }
    }

    fileReader.onerror = function() {
      console.warn('oops, something went wrong.')
      reject(fileReader.error)
    }

    let loadNext = () => {
      let start = currentChunk * chunkSize,
        end = start + chunkSize >= file.size ? file.size : start + chunkSize

      fileReader.readAsArrayBuffer(blobSlice.call(file, start, end))
    }
    loadNext()
  })
}

const processFilePart = (
  partNumber: number,
  multipartUploadStatus: MultipartUploadStatus,
  sessionToken: string | undefined,
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
  doPost(
    presignedUrlUrl,
    presignedUploadUrlRequest,
    sessionToken,
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
        sessionToken,
        undefined,
        BackendDestinationEnum.REPO_ENDPOINT,
      ).then((addPartResponse: AddPartResponse) => {
        if (addPartResponse.addPartState === 'ADD_SUCCESS') {
          // done with this part!
          multipartUploadStatus.clientSidePartsState![partNumber - 1] = true
          checkUploadComplete(
            multipartUploadStatus,
            fileName,
            sessionToken,
            fileUploadResolve,
            fileUploadReject,
          )
        } else {
          // retry after a brief delay
          delay(1000).then(() => {
            processFilePart(
              partNumber,
              multipartUploadStatus,
              sessionToken,
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
  sessionToken: string | undefined,
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
    doPut(
      url,
      undefined,
      sessionToken,
      undefined,
      BackendDestinationEnum.REPO_ENDPOINT,
    )
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
  sessionToken: string | undefined,
  fileName: string,
  file: Blob,
  request: MultipartUploadRequest,
  fileUploadResolve: (fileUpload: FileUploadComplete) => void,
  fileUploadReject: (reason: any) => void,
) => {
  const url = 'file/v1/file/multipart'
  doPost(
    url,
    request,
    sessionToken,
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
          await processFilePart(
            i + 1,
            status,
            sessionToken,
            fileName,
            file,
            request,
            fileUploadResolve,
            fileUploadReject,
          )
        }
      }
      // in case there is no upload work to do!
      checkUploadComplete(
        status,
        fileName,
        sessionToken,
        fileUploadResolve,
        fileUploadReject,
      )
    })
    .catch(error => {
      fileUploadReject(error)
    })
}

/**
 * Return the content of the file (latest version) associated to the given FileEntity.
 * Be aware that if the target file size > 5MB, this method will throw an error.
 * @param sessionToken
 * @param fileEntity
 * @param endpoint
 */
export const getFileEntityContent = (
  sessionToken: string,
  fileEntity: FileEntity,
): Promise<string> => {
  // get the presigned URL, download the data, and send that back (via resolve())
  return new Promise((resolve, reject) => {
    const fileHandleAssociationList = [
      {
        associateObjectId: fileEntity.id,
        associateObjectType: 'FileEntity',
        fileHandleId: fileEntity.dataFileHandleId,
      },
    ]
    const request: any = {
      includeFileHandles: true,
      includePreSignedURLs: true,
      includePreviewPreSignedURLs: false,
      requestedFiles: fileHandleAssociationList,
    }
    getFiles(request, sessionToken)
      .then((data: BatchFileResult) => {
        const presignedUrl: string = data.requestedFiles[0].preSignedURL
        const fileHandle: FileHandle = data.requestedFiles[0].fileHandle
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

export const getFileHandleContentFromID = (
  fileHandleId: string,
  sessionToken: string,
): Promise<string> => {
  // get the presigned URL, download the data, and send that back (via resolve())
  return new Promise((resolve, reject) => {
    // get the file handle and url
    const getFileHandleByIdPromise = getFileHandleById(
      fileHandleId,
      sessionToken,
    )
    const getFileHandlePresignedUrlPromis = getFileHandleByIdURL(
      fileHandleId,
      sessionToken,
    )
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
 * Create an ACL
 * https://docs.synapse.org/rest/POST/entity/id/acl.html
 */
export const createACL = (
  entityId: string,
  acl: AccessControlList,
  sessionToken: string | undefined,
) => {
  return doPost(
    `/repo/v1/entity/${entityId}/acl`,
    acl,
    sessionToken,
    undefined,
    BackendDestinationEnum.REPO_ENDPOINT,
  )
}

/**
 * Submit an entity to an evaluation queue
 * https://docs.synapse.org/rest/POST/evaluation/submission.html
 */
export const submitToEvaluation = (
  submission: Submission,
  etag: string,
  sessionToken: string | undefined,
) => {
  return doPost(
    `/repo/v1/evaluation/submission?etag=${etag}`,
    submission,
    sessionToken,
    undefined,
    BackendDestinationEnum.REPO_ENDPOINT,
  )
}

/**
 * Get an evaluation queue
 * https://docs.synapse.org/rest/GET/evaluation/evalId.html
 */
export const getEvaluation = (
  evalId: string,
  sessionToken: string | undefined,
) => {
  return doGet(
    `/repo/v1/evaluation/${evalId}`,
    sessionToken,
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
  sessionToken: string | undefined,
): Promise<QueryTableResults> => {
  return doGet(
    `/repo/v1/evaluation/submission/query?query=${encodeURI(query)}`,
    sessionToken,
    undefined,
    BackendDestinationEnum.REPO_ENDPOINT,
  )
}

/**
 * Get user-friendly OAuth2 request information (to present to the user so they can choose if they want to give consent).
 */
export const getOAuth2RequestDescription = (
  oidcAuthRequest: OIDCAuthorizationRequest,
  sessionToken: string | undefined,
): Promise<OIDCAuthorizationRequestDescription> => {
  return doPost(
    '/auth/v1/oauth2/description',
    oidcAuthRequest,
    sessionToken,
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
    undefined,
    BackendDestinationEnum.REPO_ENDPOINT,
  )
}

/**
 * User consents to the given OIDCAuthorizationRequest (after being presented with all information returned by getOAuth2RequestDescription())
 * @param oidcAuthRequest
 * @param sessionToken
 * @param endpoint
 */
export const consentToOAuth2Request = (
  oidcAuthRequest: OIDCAuthorizationRequest,
  sessionToken: string | undefined,
): Promise<AccessCodeResponse> => {
  return doPost(
    '/auth/v1/oauth2/consent',
    oidcAuthRequest,
    sessionToken,
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
 * @param sessionToken
 * @param endpoint
 */
export const createFormGroup = (
  name: string,
  sessionToken: string,
): Promise<FormGroup> => {
  return doPost(
    `/repo/v1/form/group?name=${encodeURI(name)}`,
    undefined,
    sessionToken,
    undefined,
    BackendDestinationEnum.REPO_ENDPOINT,
  )
}

/**
 * Get FormGroup ACL
 * https://docs.synapse.org/rest/GET/form/group/id/acl.html
 */
export const getFormACL = (
  formGroupId: string,
  sessionToken: string | undefined,
): Promise<AccessControlList> => {
  return doGet(
    `/repo/v1/form/group/${formGroupId}/acl`,
    sessionToken,
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
  sessionToken: string | undefined,
): Promise<AccessControlList> => {
  return doPut(
    `/repo/v1/form/group/${formGroupId}/acl`,
    newAcl,
    sessionToken,
    undefined,
    BackendDestinationEnum.REPO_ENDPOINT,
  )
}

/**
 * Create a new FormData object
 * https://docs.synapse.org/rest/POST/form/data.html
 * @param formGroupId
 * @param name
 * @param sessionToken
 * @param endpoint
 */
export const createFormData = (
  formGroupId: string,
  name: string,
  dataFileHandleId: string,
  sessionToken: string,
): Promise<FormData> => {
  const newFormData: FormChangeRequest = {
    name,
    fileHandleId: dataFileHandleId,
  }
  return doPost(
    `/repo/v1/form/data?groupId=${formGroupId}`,
    newFormData,
    sessionToken,
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
  sessionToken: string,
): Promise<FormData> => {
  const updatedFormData: FormChangeRequest = {
    name,
    fileHandleId: dataFileHandleId,
  }
  return doPut(
    `/repo/v1/form/data/${formDataId}`,
    updatedFormData,
    sessionToken,
    undefined,
    BackendDestinationEnum.REPO_ENDPOINT,
  )
}

/**
 * Delete FormData object
 * https://docs.synapse.org/rest/DELETE/form/data.html
 */
export const deleteFormData = (
  formDataId: string,
  sessionToken: string | undefined,
) => {
  return doDelete(
    `/repo/v1/form/data/${formDataId}`,
    sessionToken,
    undefined,
    BackendDestinationEnum.REPO_ENDPOINT,
  )
}

/**
 * Submit the identified FormData for review.
 * https://docs.synapse.org/rest/POST/form/data/id/submit.html
 */
export const submitFormData = (
  formDataId: string,
  sessionToken: string | undefined,
): Promise<FormData> => {
  return doPost(
    `/repo/v1/form/data/${formDataId}/submit`,
    undefined,
    sessionToken,
    undefined,
    BackendDestinationEnum.REPO_ENDPOINT,
  )
}

/**
 * List FormData objects and their associated status that match the filters of the provided request that are
 * owned by the caller. Note: Only objects owned by the caller will be returned.
 * https://docs.synapse.org/rest/POST/form/data/list.html
 */
export const listFormData = (
  request: ListRequest,
  sessionToken: string | undefined,
): Promise<ListResponse> => {
  return doPost(
    `/repo/v1/form/data/list`,
    request,
    sessionToken,
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
  sessionToken: string | undefined,
): Promise<ListResponse> => {
  return doPost(
    `/repo/v1/form/data/list/reviewer`,
    request,
    sessionToken,
    undefined,
    BackendDestinationEnum.REPO_ENDPOINT,
  )
}

/**
 * Called by the form processing service to accept a submitted data.
 * https://docs.synapse.org/rest/PUT/form/data/id/accept.html
 */
export const acceptFormData = (
  formDataId: string,
  sessionToken: string | undefined,
): Promise<FormData> => {
  return doPut(
    `/repo/v1/form/data/${formDataId}/accept`,
    undefined,
    sessionToken,
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
  sessionToken: string | undefined,
): Promise<FormData> => {
  const formRejection: FormRejection = {
    reason,
  }
  return doPut(
    `/repo/v1/form/data/${formDataId}/reject`,
    formRejection,
    sessionToken,
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
  sessionToken: string | undefined,
): Promise<ProjectFilesStatisticsResponse> => {
  return doPost(
    `/repo/v1/statistics`,
    request,
    sessionToken,
    undefined,
    BackendDestinationEnum.REPO_ENDPOINT,
  )
}

const setCookie = (name: string, value: string | undefined, days: number) => {
  if (!value) {
    return
  }
  let expires = ''
  if (days) {
    const date = new Date()
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000)
    expires = `; expires=${date.toUTCString()}`
  }
  document.cookie = `${name}=${value || ''}${expires}; path=/`
}
const getCookie = (name: string) => {
  const nameEQ = `${name}=`
  const ca = document.cookie.split(';')
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i]
    while (c.charAt(0) == ' ') c = c.substring(1, c.length)
    if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length)
  }
  return null
}
const removeCookie = (name: string) => {
  document.cookie = `${name}= ; expires= Thu, 21 Aug 2014 20:00:00 UTC; path=/`
}

// see https://docs.synapse.org/rest/POST/restrictionInformation.html
export const getRestrictionInformation = (
  request: RestrictionInformationRequest,
  sessionToken: string | undefined,
): Promise<RestrictionInformationResponse> => {
  return doPost(
    `/repo/v1/restrictionInformation`,
    request,
    sessionToken,
    undefined,
    BackendDestinationEnum.REPO_ENDPOINT,
  )
}
