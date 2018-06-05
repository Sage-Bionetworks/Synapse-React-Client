import HttpError from './HTTPError.js';

var endpoint = 'https://repo-prod.prod.sagebase.org';

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
        return fetch_with_exponential_timeout(url, options, delayMs*2, retries - 1);
      });
    });
  }

export const doPost =
  (url, requestJsonObject) => {
    return fetch_with_exponential_timeout(endpoint+url, 
      {
        method: 'POST',
        mode: 'cors',
        headers: {
          'Accept': '*/*',
          'Content-Type': 'application/json',
          'Access-Control-Request-Headers': 'sessiontoken'
        },
        body: JSON.stringify(requestJsonObject)
      }
      , 1000, 5);
  }

export const doGet =
  (url) => {
    return fetch_with_exponential_timeout(endpoint+url, 
      {
        method: 'GET',
        mode: 'cors',
        headers: {
          'Accept': '*/*',
          'Access-Control-Request-Headers': 'sessiontoken'
        }
      }
      , 1000, 5);
  }

export const getVersion =
  () => {
    return doGet('/repo/v1/version');
  }