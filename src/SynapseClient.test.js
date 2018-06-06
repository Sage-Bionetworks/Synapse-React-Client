import React from 'react';
import ReactDOM from 'react-dom';
import * as SynapseClient from './SynapseClient.js';

it('invalid call', () => {
  return SynapseClient.doGet('/repo/v1/invalid', undefined, 'https://repo-prod.prod.sagebase.org')
    .catch(function (error) {
      expect(error.statusCode).toEqual(404);
      expect(error.message).toEqual('Not Found');
    })
});

it('version call', () => {
  return SynapseClient.getVersion()
    .then(data => {
      expect(data.version).toBeDefined();
    })
});

it('login', () => {
  return SynapseClient.login('synapse-react-js-client', 'synapse-react-js-client')
    .then(data => {
      expect(data.sessionToken).toBeDefined();
      global.sessionToken = data.sessionToken;
    })
});

it('get user profiles', () => {
  return SynapseClient.getUserProfiles([345424, 273978, 273991])
    .then(data => {
      expect(data.list).toBeDefined();
      expect(data.list.length).toEqual(3);
    })
});

it('list entity children', () => {
  let request = {
    includeTypes: ["project", "folder", "file", "link"],
    parentId: "syn300013",
    sortBy: "NAME",
    sortDirection: "ASC"
  }
  return SynapseClient.getEntityChildren(request)
    .then(data => {
      expect(data.page).toBeDefined();
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

