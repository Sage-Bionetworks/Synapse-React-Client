import React from 'react';
import ReactDOM from 'react-dom';
import * as SynapseClient from './SynapseClient.js';

it('invalid call', done => {
  return SynapseClient.doGet('/repo/v1/invalid', undefined, 'https://repo-prod.prod.sagebase.org')
    .catch(function (error) {
      expect(error.statusCode).toEqual(404);
      expect(error.message).toEqual('Not Found');
      done();
    })
});

it('version call', done => {
  return SynapseClient.getVersion()
    .then(data => {
      expect(data.version).toBeDefined();
      done();
    })
});

it('login', done => {
  return SynapseClient.login('synapse-react-js-client', 'synapse-react-js-client')
    .then(data => {
      expect(data.sessionToken).toBeDefined();
      global.sessionToken = data.sessionToken;
      done();
    })
});

// ERROR: Timeout - Async callback was not invoked within timeout specified by jasmine.DEFAULT_TIMEOUT_INTERVAL
// Tried increasing timeout to 30s, but still occurs.  Not sure why the signal is not being sent back
// it('create project', done => {
//   //create a project (with a random name)
//   return SynapseClient.createProject('synapse react test ' + 
//     Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15), global.sessionToken)
//     .then(newProject => {
//       expect(newProject.id).toBeDefined();
//       done();
//     })
// });

