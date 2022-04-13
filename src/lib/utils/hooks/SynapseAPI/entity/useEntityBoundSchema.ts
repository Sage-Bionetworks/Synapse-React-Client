import { UseQueryOptions, useQuery } from 'react-query'
import { SynapseClient } from '../../..'
import { SynapseClientError } from '../../../SynapseClient'
import { useSynapseContext } from '../../../SynapseContext'
import { JsonSchemaObjectBinding } from '../../../synapseTypes/Schema/JsonSchemaObjectBinding'
import { ValidationResults } from '../../../synapseTypes/Schema/ValidationResults'
import { entityQueryKeys } from './queryKeys'

export function useGetSchemaBinding(
  entityId: string,
  options?: UseQueryOptions<JsonSchemaObjectBinding, SynapseClientError>,
) {
  const { accessToken } = useSynapseContext()
  return useQuery<JsonSchemaObjectBinding, SynapseClientError>(
    entityQueryKeys.boundJSONSchema(entityId),
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
    entityQueryKeys.schemaValidationResults(entityId),
    () => SynapseClient.getSchemaValidationResults(entityId, accessToken),
    options,
  )
}
