import React from 'react';
import ReactDOM from 'react-dom';
import * as synapseClient from './SynapseClient.js';

it('invalid call', () => {
  return synapseClient.doGet('/repo/v1/invalid', 'https://repo-prod.prod.sagebase.org')
    .then(data => expect(data).toEqual('invalid call'))
    .catch(function (error) {
      expect(error.statusCode).toEqual(404);
      expect(error.message).toEqual('Not Found');
    });
});

it('version call', () => {
  return synapseClient.getVersion()
    .then(data => expect(data.version).toBeDefined())
});
