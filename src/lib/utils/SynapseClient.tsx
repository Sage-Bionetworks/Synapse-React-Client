import { WikiPage } from './jsonResponses/WikiPage';
import { SynapseVersion } from './jsonResponses/SynapseVersion';
import { QueryResultBundle } from './jsonResponses/Table/QueryResultBundle';
import { Entity } from './jsonResponses/Entity';
import { BatchFileResult } from './jsonResponses/BatchFileResult';
import { FileHandleResults } from './jsonResponses/FileHandleResults';

// TODO: Create JSON response types for return types
const DEFAULT_ENDPOINT = "https://repo-prod.prod.sagebase.org/"

function delay(t: any) {
  return new Promise(function(resolve) {
    setTimeout(resolve.bind(null,null), t);
  });
}
const fetch_with_exponential_timeout = (url: string, options: any, delayMs: any, retries: number): Promise<any> => {
  return fetch(url, options)
    .then(resp => {
      if (resp.status > 199 && resp.status < 300) {
        // ok!
        return resp.json();
      } else if (resp.status === 429 || resp.status === 0) {
        // TOO_MANY_REQUESTS_STATUS_CODE, or network connection is down.  Retry after a couple of seconds.
        if (retries === 1) {
          return Promise.reject({
            statusCode: resp.status,
            reason: resp.statusText
          });
        }
        return delay(delayMs).then(function() {
          return fetch_with_exponential_timeout(url, options, delayMs * 2, retries - 1);
        });
      } else {
        // error status that indicates no more retries
        retries = 1;
        return resp
          .json()
          .then(json => {
            // on okay response return json, o.w. reject with json and
            // send to catch block
            let error = {
              reason: json.reason,
              status: resp.status
            };
            return resp.ok ? json : Promise.reject(error);
          })
          .catch(error => {
            // call failed above
            if (error.reason && error.status) {
              // successfull return from server but invalid call
              // the call was recieved, but staus wasn't ok-- return the json response from above
              // from the response directly
              return Promise.reject({
                statusCode: error.status,
                reason: error.reason
              });
            } else {
              return Promise.reject({
                statusCode: resp.status,
                reason: resp.statusText
              });
            }
          });
      }
    })
    .catch(function(error) {
      // this should never happen
      return Promise.reject(error);
    });
};
export const doPost = (url: string, requestJsonObject: any, sessionToken: string | undefined, endpoint: string): Promise<any> => {
  let options: any = {
    method: 'POST',
    mode: 'cors',
    headers: {
      Accept: '*/*',
      'Content-Type': 'application/json',
      'Access-Control-Request-Headers': 'sessiontoken'
    },
    body: JSON.stringify(requestJsonObject)
  };
  if (sessionToken) {
    options.headers.sessionToken = sessionToken;
  }
  return fetch_with_exponential_timeout(endpoint + url, options, 1000, 5);
};
export const doGet = (url: string, sessionToken: string | undefined, endpoint:string) => {
  let options: any = {
    method: 'GET',
    mode: 'cors',
    headers: {
      Accept: '*/*',
      'Access-Control-Request-Headers': 'sessiontoken'
    }
  };
  if (sessionToken) {
    options.headers.sessionToken = sessionToken;
  }
  return fetch_with_exponential_timeout(endpoint + url, options, 1000, 5);
};


export const getVersion = (endpoint: string = DEFAULT_ENDPOINT): Promise<SynapseVersion> => {
  return doGet('/repo/v1/version', undefined, endpoint) as Promise<SynapseVersion>;
};

export const getQueryTableResultsFromJobId = (
  entityId: string,
  jobId: string,
  sessionToken: string | undefined = undefined,
  endpoint: string = DEFAULT_ENDPOINT
): Promise<QueryResultBundle> => {
  return doGet(`/repo/v1/entity/${entityId}/table/query/async/get/${jobId}`, sessionToken, endpoint)
    .then((resp: any) => {
      // is this the job status?
      if (resp.jobState && resp.jobState !== 'FAILED') {
        // still processing, wait for a second and try again
        return delay(500).then(function() {
          return getQueryTableResultsFromJobId(entityId, jobId, sessionToken, endpoint);
        });
      } else {
        // these must be the query results!
        return resp;
      }
    })
    .catch(function(error) {
      throw error;
    });
};
/**
 * http://docs.synapse.org/rest/POST/entity/id/table/query/nextPage/async/start.html
 * @param {*} queryBundleRequest
 * @param {*} sessionToken
 * @param {*} endpoint
 */
export const getQueryTableResults = (
  queryBundleRequest: any,
  sessionToken: string | undefined = undefined,
  endpoint: string = DEFAULT_ENDPOINT
) => {
  return doPost(`/repo/v1/entity/${queryBundleRequest.entityId}/table/query/async/start`, queryBundleRequest, sessionToken, endpoint)
  .then((resp: any) => {
      //started query, now attempt to get the results.
      return getQueryTableResultsFromJobId(queryBundleRequest.entityId, resp.token, sessionToken, endpoint);
    })
    .catch(function(error) {
      throw error;
    });
};
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
export const getFullQueryTableResults = async (queryBundleRequest: any, sessionToken: string | undefined = undefined): Promise<QueryResultBundle> => {
  // TODO: Find out why theres a bug causing the query limut
  const { query, ...rest } = queryBundleRequest;
  let data: any = {};
  let maxPageSize: number = 150;
  let queryRequest: any = {
    ...rest,
    query: { ...query, limit: maxPageSize }
  };
  // Have to make two "sets" of calls for query, the first one tells us the maximum size per page of data
  // we can get, the following uses that maximum and offsets to the appropriate location to get the data
  // afterwards, the process repeats
  await getQueryTableResults(queryRequest, sessionToken).then(
    async (initData: QueryResultBundle) => {
      let queryCount: any = initData.queryResult.queryResults.rows.length;
      let currentQueryCount: number = queryCount;
      data = initData;
      // Get the subsequent data, note- although the function calls itself, it runs
      // iteratively due to the await
      const getData = async () => {
        if (queryCount === maxPageSize) {
          maxPageSize = initData.maxRowsPerPage;
          let queryRequestWithMaxPageSize = {
            ...rest,
            query: { ...query, limit: maxPageSize, offset: currentQueryCount }
          };
          await getQueryTableResults(queryRequestWithMaxPageSize, sessionToken)
            .then((post_data: any) => {
              queryCount += post_data.queryResult.queryResults.rows.length;
              if (queryCount > 0) {
                currentQueryCount += queryCount;
                data.queryResult.queryResults.rows.push(
                  ...post_data.queryResult.queryResults.rows // ... spread operator to push all elements on
                );
              }
              return getData();
            })
            .catch(err => {
              console.log('Error on getting table results ', err);
            });
        } else {
          // set data to this plots sql in the query data
          return data;
        }
      };
      return getData();
  });
  return data;
};
/** Log-in using the given username and password.  Will return a session token that must be used in authenticated requests.
 * http://docs.synapse.org/rest/POST/login.html
 */
export const login = (username: string, password: string, endpoint = DEFAULT_ENDPOINT) => {
  return doPost('/auth/v1/login', { username: username, password: password }, undefined, endpoint);
};
/**
 * Get redirect url
 * https://docs.synapse.org/rest/POST/oauth2/authurl.html
 * @param {*} provider
 * @param {*} redirectUrl
 * @param {*} endpoint
 */
export var oAuthUrlRequest = function(provider: string, redirectUrl: string, endpoint = DEFAULT_ENDPOINT) {
  return doPost('/auth/v1/oauth2/authurl', { provider, redirectUrl }, undefined, endpoint);
};
/**
 * Get session token from SSO
 * https://docs.synapse.org/rest/POST/oauth2/session.html
 * @param {*} provider
 * @param {*} authenticationCode
 * @param {*} redirectUrl
 * @param {*} endpoint
 */
export var oAuthSessionRequest = function(provider: string, authenticationCode: string|number, redirectUrl: string, endpoint = DEFAULT_ENDPOINT) {
  return doPost('/auth/v1/oauth2/session', { provider, authenticationCode, redirectUrl }, undefined, endpoint);
};
/** Create an entity (Project, Folder, File, Table, View)
 * http://docs.synapse.org/rest/POST/entity.html
 */
export const createEntity = (entity: any, sessionToken: string | undefined, endpoint: string = DEFAULT_ENDPOINT) => {
  return doPost('/repo/v1/entity', entity, sessionToken, endpoint);
};
/** Create a project with the given name.
 * http://docs.synapse.org/rest/POST/entity.html
 */
export const createProject = (name: string, sessionToken: string | undefined, endpoint: string = DEFAULT_ENDPOINT): Promise<Response> => {
  return createEntity(
    {
      concreteType: 'org.sagebionetworks.repo.model.Project',
      name: name
    },
    sessionToken,
    endpoint
  );
};
/** Return this user's UserProfile
 * http://docs.synapse.org/rest/GET/userProfile.html
 */
export const getUserProfile = (sessionToken: string | undefined, endpoint = DEFAULT_ENDPOINT) => {
  return doGet('/repo/v1/userProfile', sessionToken, endpoint);
};
/** Return the User Profiles for the given list of user IDs
 * http://docs.synapse.org/rest/POST/userProfile.html
 */
export const getUserProfiles = (userIdsArray: Array<Number> = [], endpoint: string = DEFAULT_ENDPOINT) => {
  return doPost('/repo/v1/userProfile', { list: userIdsArray }, undefined, endpoint);
};
/** Return the children (Files/Folders) of the given entity (Project or Folder).
 * http://docs.synapse.org/rest/POST/entity/children.html
 */
export const getEntityChildren = (request: string, sessionToken: string | undefined = undefined, endpoint: string = DEFAULT_ENDPOINT) => {
  return doPost('/repo/v1/entity/children', request, sessionToken, endpoint);
};
/** Get a batch of pre-signed URLs and/or FileHandles for the given list of FileHandleAssociations.
 * http://docs.synapse.org/rest/POST/fileHandle/batch.html
 */
export const getFiles = (request: string, sessionToken: string | undefined = undefined, endpoint:string = DEFAULT_ENDPOINT): Promise<BatchFileResult> => {
  return doPost('/file/v1/fileHandle/batch', request, sessionToken, endpoint);
};
/**
 * Bundled access to Entity and related data components.
 * An EntityBundle can be used to create, fetch, or update an Entity and associated objects with a single web service request.
 * See SynapseClient.test.js for an example partsMask.
 * https://docs.synapse.org/rest/org/sagebionetworks/repo/model/Entity.html
 */
export const getEntity = (sessionToken: string | undefined = undefined, entityId: string | number, endpoint = DEFAULT_ENDPOINT): Promise<Entity> => {
  let url = `/repo/v1/entity/${entityId}`;
  return doGet(url, sessionToken, endpoint);
};
/**
 * Bundled access to Entity and related data components.
 * An EntityBundle can be used to create, fetch, or update an Entity and associated objects with a single web service request.
 * See SynapseClient.test.js for an example partsMask.
 * http://docs.synapse.org/rest/GET/entity/id/version/versionNumber/bundle.html
 */
export const getEntityBundleForVersion = (
  entityId: string|number,
  version: string|number,
  partsMask: string|number,
  sessionToken: string|undefined = undefined,
  endpoint = DEFAULT_ENDPOINT
) => {
  let url = `/repo/v1/entity/${entityId}`;
  if (version) {
    url += '/version/' + version;
  }
  url += '/bundle?mask=' + partsMask;
  return doGet(url, sessionToken, endpoint);
};
/**
 * Get Wiki page contents, call is of the form:
 * http://docs.synapse.org/rest/GET/entity/ownerId/wiki.html
 */
export const getEntityWiki = (sessionToken:string|undefined, ownerId: string | undefined, wikiId: string | undefined, endpoint: string = DEFAULT_ENDPOINT) => {
  let url = `/repo/v1/entity/${ownerId}/wiki/${wikiId}`;
  return doGet(url, sessionToken, endpoint) as Promise<WikiPage>;
};
/**
 * Returns synapse user favorites list given their session token
 * http://docs.synapse.org/rest/GET/favorite.html
 */
export const getUserFavorites = (sessionToken: string | undefined, endpoint = DEFAULT_ENDPOINT) => {
  let url = 'repo/v1/favorite?offset=0&limit=200';
  return doGet(url, sessionToken, endpoint);
};
/**
 *  http://docs.synapse.org/rest/GET/projects/type.html
 *  @param {String} projectDetails Can be "MY_PROJECTS", "MY_CREATED_PROJECTS" or "MY_PARTICIPATED_PROJECTS"
 */
export const getUserProjectList = (sessionToken: string | undefined, projectDetails: string, endpoint = DEFAULT_ENDPOINT) => {
  let url = `repo/v1/projects/${projectDetails}?offset=0&limit=200`;
  return doGet(url, sessionToken, endpoint);
};
/**
 * Get the user's list of teams they are on
 *
 * @param {*} id ownerID of the synapse user see - http://docs.synapse.org/rest/org/sagebionetworks/repo/model/UserProfile.html
 */
export const getUserTeamList = (sessionToken: string | undefined, id: string | number, endpoint = DEFAULT_ENDPOINT) => {
  let url = `repo/v1/user/${id}/team?offset=0&limit=200`;
  return doGet(url, sessionToken, endpoint);
};
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
  sessionToken: string|undefined,
  id: string|number,
  fragment: string = '',
  limit: number = 10,
  offset:number = 0,
  endpoint:string = DEFAULT_ENDPOINT
) => {
  let url = `repo/v1/teamMembers/${id}?limit=${limit}&offset=${offset}${fragment ? `&fragment=${fragment}` : ''}`;
  return doGet(url, sessionToken, endpoint);
};

export const getWikiAttachmentsFromEntity = 
    ( sessionToken: string|undefined,
      id: string|number,
      wikiId: string|number,
      endpoint: string = DEFAULT_ENDPOINT): Promise<FileHandleResults> => {
  let url = `repo/v1/entity/${id}/wiki/${wikiId}/attachmenthandles`;
  return doGet(url, sessionToken, endpoint);
};
export const getWikiAttachmentsFromEvaluation = (sessionToken:string|undefined, id:string|number, wikiId: string|number, endpoint: string = DEFAULT_ENDPOINT) => {
  let url = `repo/v1/evaluation/${id}/wiki/${wikiId}/attachmenthandles`;
  return doGet(url, sessionToken, endpoint);
};
  