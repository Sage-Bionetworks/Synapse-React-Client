import { UseQueryOptions, useQuery } from 'react-query'
import { SynapseClient } from '../../..'
import { SynapseClientError } from '../../../SynapseClient'
import { useSynapseContext } from '../../../SynapseContext'
import { JsonSchemaObjectBinding } from '../../../synapseTypes/Schema/JsonSchemaObjectBinding'
import { ValidationResults } from '../../../synapseTypes/Schema/ValidationResults'

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
