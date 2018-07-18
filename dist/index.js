'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SynapseConstants = exports.SynapseClient = undefined;

var _SynapseClient = require('./utils/SynapseClient.js');

var SynapseClient = _interopRequireWildcard(_SynapseClient);

var _SynapseConstants = require('./utils/SynapseConstants');

var SynapseConstants = _interopRequireWildcard(_SynapseConstants);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

exports.SynapseClient = SynapseClient;
exports.SynapseConstants = SynapseConstants;