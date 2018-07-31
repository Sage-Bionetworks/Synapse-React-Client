function delay(t, v) {
  return new Promise(function (resolve) {
    setTimeout(resolve.bind(null, v), t);
  });
}

var fetch_with_exponential_timeout = function fetch_with_exponential_timeout(url, options, delayMs, retries) {
  return fetch(url, options).then(function (resp) {
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
      return delay(delayMs).then(function () {
        return fetch_with_exponential_timeout(url, options, delayMs * 2, retries - 1);
      });
    } else {
      // error status that indicates no more retries
      retries = 1;
      return resp.json().then(function (json) {
        // on okay response return json, o.w. reject with json and 
        // send to catch block
        var error = {
          reason: json.reason,
          status: resp.status
        };
        return resp.ok ? json : Promise.reject(error);
      }).catch(function (error) {
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
  }).catch(function (error) {
    // this should never happen
    return Promise.reject(error);
  });
};

export var doPost = function doPost(url, requestJsonObject, sessionToken, endpoint) {
  var options = {
    method: 'POST',
    mode: 'cors',
    headers: {
      'Accept': '*/*',
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

export var doGet = function doGet(url, sessionToken, endpoint) {
  var options = {
    method: 'GET',
    mode: 'cors',
    headers: {
      'Accept': '*/*',
      'Access-Control-Request-Headers': 'sessiontoken'
    }
  };
  if (sessionToken) {
    options.headers.sessionToken = sessionToken;
  }
  return fetch_with_exponential_timeout(endpoint + url, options, 1000, 5);
};

export var getVersion = function getVersion() {
  var endpoint = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'https://repo-prod.prod.sagebase.org';

  return doGet('/repo/v1/version', undefined, endpoint);
};

export var getQueryTableResultsFromJobId = function getQueryTableResultsFromJobId(entityId, jobId) {
  var sessionToken = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : undefined;
  var endpoint = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'https://repo-prod.prod.sagebase.org';

  return doGet('/repo/v1/entity/' + entityId + '/table/query/async/get/' + jobId, sessionToken, endpoint).then(function (resp) {
    // is this the job status?
    if (resp.jobState && resp.jobState !== 'FAILED') {
      // still processing, wait for a second and try again
      return delay(500).then(function () {
        return getQueryTableResultsFromJobId(entityId, jobId, sessionToken, endpoint);
      });
    } else {
      // these must be the query results!
      return resp;
    }
  }).catch(function (error) {
    throw error;
  });
};

/**
 * http://docs.synapse.org/rest/POST/entity/id/table/query/nextPage/async/start.html
 * @param {*} queryBundleRequest 
 * @param {*} sessionToken 
 * @param {*} endpoint 
 */
export var getQueryTableResults = function getQueryTableResults(queryBundleRequest) {
  var sessionToken = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;
  var endpoint = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'https://repo-prod.prod.sagebase.org';

  return doPost('/repo/v1/entity/' + queryBundleRequest.entityId + '/table/query/async/start', queryBundleRequest, sessionToken, endpoint).then(function (resp) {
    //started query, now attempt to get the results.
    return getQueryTableResultsFromJobId(queryBundleRequest.entityId, resp.token, sessionToken, endpoint);
  }).catch(function (error) {
    throw error;
  });
};

/** Log-in using the given username and password.  Will return a session token that must be used in authenticated requests. 
 * http://docs.synapse.org/rest/POST/login.html
*/
export var login = function login(username, password) {
  var endpoint = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'https://repo-prod.prod.sagebase.org';

  return doPost('/auth/v1/login', { username: username, password: password }, undefined, endpoint);
};

/** Create an entity (Project, Folder, File, Table, View) 
 * http://docs.synapse.org/rest/POST/entity.html
*/
export var createEntity = function createEntity(entity, sessionToken) {
  var endpoint = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'https://repo-prod.prod.sagebase.org';

  return doPost('/repo/v1/entity', entity, sessionToken, endpoint);
};

/** Create a project with the given name. 
 * http://docs.synapse.org/rest/POST/entity.html
*/
export var createProject = function createProject(name, sessionToken) {
  var endpoint = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'https://repo-prod.prod.sagebase.org';

  return createEntity({
    concreteType: "org.sagebionetworks.repo.model.Project",
    name: name
  }, sessionToken, endpoint);
};

/** Return this user's UserProfile
 * http://docs.synapse.org/rest/GET/userProfile.html
*/
export var getUserProfile = function getUserProfile(sessionToken) {
  var endpoint = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'https://repo-prod.prod.sagebase.org';

  return doGet('/repo/v1/userProfile', sessionToken, endpoint);
};

/** Return the User Profiles for the given list of user IDs 
 * http://docs.synapse.org/rest/POST/userProfile.html
*/
export var getUserProfiles = function getUserProfiles(userIdsArray) {
  var endpoint = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'https://repo-prod.prod.sagebase.org';

  return doPost('/repo/v1/userProfile', { list: userIdsArray }, undefined, endpoint);
};

/** Return the children (Files/Folders) of the given entity (Project or Folder). 
 * http://docs.synapse.org/rest/POST/entity/children.html
*/
export var getEntityChildren = function getEntityChildren(request) {
  var sessionToken = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;
  var endpoint = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'https://repo-prod.prod.sagebase.org';

  return doPost('/repo/v1/entity/children', request, sessionToken, endpoint);
};

/** Get a batch of pre-signed URLs and/or FileHandles for the given list of FileHandleAssociations.
 * http://docs.synapse.org/rest/POST/fileHandle/batch.html
*/
export var getFiles = function getFiles(request) {
  var sessionToken = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;
  var endpoint = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'https://repo-prod.prod.sagebase.org';

  return doPost('/file/v1/fileHandle/batch', request, sessionToken, endpoint);
};

/**
 * Bundled access to Entity and related data components. 
 * An EntityBundle can be used to create, fetch, or update an Entity and associated objects with a single web service request.
 * See SynapseClient.test.js for an example partsMask.
 * http://docs.synapse.org/rest/GET/entity/id/version/versionNumber/bundle.html
 */
export var getEntityBundleForVersion = function getEntityBundleForVersion(entityId, version, partsMask) {
  var sessionToken = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : undefined;
  var endpoint = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 'https://repo-prod.prod.sagebase.org';

  var url = '/repo/v1/entity/' + entityId;
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
export var getEntityWiki = function getEntityWiki(sessionToken, ownerId, wikiId) {
  var endpoint = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "https://repo-prod.prod.sagebase.org";

  var url = '/repo/v1/entity/' + ownerId + '/wiki/' + wikiId;
  return doGet(url, sessionToken, endpoint);
};

/**
  * Returns synapse user favorites list given their session token
  * http://docs.synapse.org/rest/GET/favorite.html
*/
export var getUserFavorites = function getUserFavorites(sessionToken) {
  var endpoint = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "https://repo-prod.prod.sagebase.org/";

  var url = 'repo/v1/favorite?offset=0&limit=200';
  return doGet(url, sessionToken, endpoint);
};

/**
 *  http://docs.synapse.org/rest/GET/projects/type.html
 *  @param {String} projectDetails Can be "MY_PROJECTS", "MY_CREATED_PROJECTS" or "MY_PARTICIPATED_PROJECTS"
 */
export var getUserProjectList = function getUserProjectList(sessionToken, projectDetails) {
  var endpoint = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "https://repo-prod.prod.sagebase.org/";

  var url = 'repo/v1/projects/' + projectDetails + '?offset=0&limit=200';
  return doGet(url, sessionToken, endpoint);
};

/**
 * Get the user's list of teams they are on
 * 
 * @param {*} id ownerID of the synapse user see - http://docs.synapse.org/rest/org/sagebionetworks/repo/model/UserProfile.html
 */
export var getUserTeamList = function getUserTeamList(sessionToken, id) {
  var endpoint = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "https://repo-prod.prod.sagebase.org/";

  var url = 'repo/v1/user/' + id + '/team?offset=0&limit=200';
  return doGet(url, sessionToken, endpoint);
};

export var getWikiAttachmentsFromEntity = function getWikiAttachmentsFromEntity(sessionToken, id, wikiId) {
  var endpoint = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "https://repo-prod.prod.sagebase.org/";

  var url = 'repo/v1/entity/' + id + '/wiki/' + wikiId + '/attachmenthandles';
  return doGet(url, sessionToken, endpoint);
};

export var getWikiAttachmentsFromEvaluation = function getWikiAttachmentsFromEvaluation(sessionToken, id, wikiId) {
  var endpoint = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "https://repo-prod.prod.sagebase.org/";

  var url = 'repo/v1/evaluation/' + id + '/wiki/' + wikiId + '/attachmenthandles';
  return doGet(url, sessionToken, endpoint);
};