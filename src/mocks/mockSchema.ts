import {
  BoundObjectType,
  JsonSchemaObjectBinding,
} from '../lib/utils/synapseTypes/Schema/JsonSchemaObjectBinding'
import { ObjectType } from '../lib/utils/synapseTypes/Schema/ObjectType'
import { ValidationResults } from '../lib/utils/synapseTypes/Schema/ValidationResults'
import { mockFileEntity } from './entity/mockEntity'

export const mockSchemaBinding: JsonSchemaObjectBinding = {
  jsonSchemaVersionInfo: {
    organizationId: '1',
    organizationName: 'org.sagebionetworks',
    schemaId: '1',
    schemaName: 'Mock schema',
    versionId: '555',
    $id: 'org.sagebionetworks-mock-schema',
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

export const mockSchemaValidationResults: ValidationResults = {
  objectId: mockFileEntity.id!,
  objectType: ObjectType.entity,
  objectEtag: mockFileEntity.etag!,
  schema$id: `https://repo-prod.prod.sagebase.org/repo/v1/schema/type/registered/${mockSchemaBinding.jsonSchemaVersionInfo.$id}`,
  isValid: true,
  validatedOn: '2021-06-28T20:08:44.046Z',
}
