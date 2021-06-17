import {
  BoundObjectType,
  JsonSchemaObjectBinding,
} from '../lib/utils/synapseTypes/Schema/JsonSchemaObjectBinding'

export const mockSchemaBinding: JsonSchemaObjectBinding = {
  jsonSchemaVersionInfo: {
    organizationId: '1',
    organizationName: 'org.sagebionetworks',
    schemaId: '1',
    schemaName: 'Mock schema',
    versionId: '555',
    $id: 'mock-schema',
    jsonSHA256Hex:
      '5f2cd73c0fe25b30cbee2f213b6d633951f1873ca1911f494d4654f702a69e95',
    createdOn: '2021-04-01T08:00:00.000Z',
    createdBy: '1',
  },
  objectId: 3333,
  objectType: BoundObjectType.entity,
  createdOn: '2021-04-01T08:00:00.000Z',
  createdBy: '1',
}
