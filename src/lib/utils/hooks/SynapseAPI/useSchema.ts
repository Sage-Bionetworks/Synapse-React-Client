/*
 * Hooks for accessing services related to JSON Schemas in the Synapse REST API
 */

import { JSONSchema7 } from 'json-schema'
import { useQuery, UseQueryOptions } from 'react-query'
import { SynapseClient } from '../..'
import { SynapseClientError } from '../../SynapseClient'
import { JsonSchemaObjectBinding } from '../../synapseTypes/Schema/JsonSchemaObjectBinding'
import { ValidationResults } from '../../synapseTypes/Schema/ValidationResults'
import { useSynapseContext } from '../../SynapseContext'

export function useGetSchemaBinding(
  entityId: string,
  options?: UseQueryOptions<JsonSchemaObjectBinding, SynapseClientError>,
) {
  const { accessToken } = useSynapseContext()
  return useQuery<JsonSchemaObjectBinding, SynapseClientError>(
    ['entity', entityId, 'bound-schema'],
    () => SynapseClient.getSchemaBinding(entityId, accessToken),
    options,
  )
}

export function useGetValidationResults(
  entityId: string,
  options?: UseQueryOptions<ValidationResults, SynapseClientError>,
) {
  const { accessToken } = useSynapseContext()

  return useQuery<ValidationResults, SynapseClientError>(
    ['entity', entityId, 'bound-schema', 'validation'],
    () => SynapseClient.getSchemaValidationResults(entityId, accessToken),
    options,
  )
}

export function useGetSchema(
  schema$id: string,
  options?: UseQueryOptions<JSONSchema7, SynapseClientError>,
) {
  return useQuery<JSONSchema7, SynapseClientError>(
    ['schema', schema$id],
    () => SynapseClient.getSchemaRecursive(schema$id),
    options,
  )
}
