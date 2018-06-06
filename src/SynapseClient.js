import HttpError from './HTTPError.js';

function delay(t, v) {
  return new Promise(function (resolve) {
    setTimeout(resolve.bind(null, v), t)
  });
}

const fetch_with_exponential_timeout =
  (url, options, delayMs, retries) => {
    return fetch(url, options).then(resp => {
      if (resp.status > 199 && resp.status < 300) {
        // ok!
        return resp.json();
      } else if (resp.status === 429 || resp.status === 0) {
        // TOO_MANY_REQUESTS_STATUS_CODE, or network connection is down.  Retry after a couple of seconds.
        throw new HttpError(resp.status, resp.statusText);
      } else {
        // error status that indicates no more retries
        retries = 1;
        throw new HttpError(resp.status, resp.statusText);
      }
    }).catch(function (error) {
      if (retries === 1) throw error;
      return delay(delayMs).then(function () {
        return fetch_with_exponential_timeout(url, options, delayMs * 2, retries - 1);
      });
    });
  }

export const doPost =
  (url, requestJsonObject, sessionToken, endpoint) => {
    let options = {
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
  }

export const doGet =
  (url, sessionToken, endpoint) => {
    let options = {
      method: 'GET',
      mode: 'cors',
      headers: {
        'Accept': '*/*',
        'Access-Control-Request-Headers': 'sessiontoken',
      }
    };
    if (sessionToken) {
      options.headers.sessionToken = sessionToken;
    }
    return fetch_with_exponential_timeout(endpoint + url, options, 1000, 5);
  }

export const getVersion =
  (endpoint = 'https://repo-prod.prod.sagebase.org') => {
    return doGet('/repo/v1/version', undefined, endpoint);
  }

export const getQueryTableResultsFromJobId =
  (entityId, jobId, sessionToken = undefined, endpoint = 'https://repo-prod.prod.sagebase.org') => {
    return doGet('/repo/v1/entity/' + entityId + '/table/query/async/get/' + jobId, sessionToken, endpoint)
      .then(resp => {
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
      })
  }

export const getQueryTableResults =
  (queryBundleRequest, sessionToken = undefined, endpoint = 'https://repo-prod.prod.sagebase.org') => {
    return doPost('/repo/v1/entity/' + queryBundleRequest.entityId + '/table/query/async/start', queryBundleRequest, sessionToken, endpoint)
      .then(resp => {
        //started query, now attempt to get the results.
        return getQueryTableResultsFromJobId(queryBundleRequest.entityId, resp.token, sessionToken, endpoint);
      }).catch(function (error) {
        throw error;
      })
  }

/** Log-in using the given username and password.  Will return a session token that must be used in authenticated requests. */
export const login =
  (username, password, endpoint = 'https://repo-prod.prod.sagebase.org') => {
    return doPost('/auth/v1/login', { username: username, password: password }, undefined, endpoint)
  }

/** Create an entity (Project, Folder, File, Table, View) */
export const createEntity =
  (entity, sessionToken, endpoint = 'https://repo-prod.prod.sagebase.org') => {
    return doPost('/repo/v1/entity', entity, sessionToken, endpoint);
  }

/** Create a project with the given name. */
export const createProject =
  (name, sessionToken, endpoint = 'https://repo-prod.prod.sagebase.org') => {
    return createEntity(
      {
        concreteType: "org.sagebionetworks.repo.model.Project",
        name: name
      }, sessionToken, endpoint);
  }

/** Return the User Profiles for the given list of user IDs */
export const getUserProfiles =
  (userIdsArray, endpoint = 'https://repo-prod.prod.sagebase.org') => {
    return doPost('/repo/v1/userProfile', { list: userIdsArray }, undefined, endpoint);
  }

/** Return the children (Files/Folders) of the given entity (Project or Folder). */
export const getEntityChildren =
  (request, sessionToken = undefined, endpoint = 'https://repo-prod.prod.sagebase.org') => {
    return doPost('/repo/v1/entity/children', request, sessionToken, endpoint);
  }