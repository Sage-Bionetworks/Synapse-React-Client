/*
 * Hooks to access Entity Services in Synapse
 */

import { omit, pick } from 'lodash-es'
import { useEffect, useState } from 'react'
import {
  useMutation,
  UseMutationOptions,
  useQuery,
  useQueryClient,
  UseQueryOptions,
} from 'react-query'
import { SynapseClient } from '../..'
import { SynapseClientError } from '../../SynapseClient'
import { useSynapseContext } from '../../SynapseContext'
import { EntityJson, entityJsonKeys, EntityJsonValue } from '../../synapseTypes'

export function getStandardEntityFields(json: EntityJson): EntityJson {
  return pick(json, entityJsonKeys) as EntityJson
}

export function removeStandardEntityFields(
  json: EntityJson,
): Record<
  string,
  string | number | boolean | string[] | number[] | boolean[] | undefined
> {
  return omit(json, entityJsonKeys)
}

/**
 * In addition to the standard objects returned by {@link useQuery}, this hook also returns the following objects:
 * - `entityMetadata`: the standard entity fields contained in the JSON response
 * - `annotations`: the annotations contained in the JSON response
 *
 * The union of these objects would be equal in value to the `data` object.
 */
export function useGetJson(
  entityId: string,
  options?: UseQueryOptions<EntityJson, SynapseClientError>,
) {
  const [entityMetadata, setEntityMetadata] = useState<EntityJson | undefined>()
  const [annotations, setAnnotations] = useState<
    Record<string, EntityJsonValue> | undefined
  >()
  const { accessToken } = useSynapseContext()
  const query = useQuery<EntityJson, SynapseClientError>(
    [accessToken, 'entity', entityId, 'json'],
    () => SynapseClient.getEntityJson(entityId, accessToken),
    options,
  )

  // Separate the standard fields and annotations.
  useEffect(() => {
    if (query.data) {
      setEntityMetadata(getStandardEntityFields(query.data))
      setAnnotations(removeStandardEntityFields(query.data))
    }
  }, [query.data])

  return {
    ...query,
    entityMetadata,
    annotations,
  }
}

export function useUpdateViaJson(
  entityId: string,
  json: unknown,
  options?: UseMutationOptions<EntityJson, SynapseClientError>,
) {
  const queryClient = useQueryClient()
  const { accessToken } = useSynapseContext()

  return useMutation<EntityJson, SynapseClientError>(
    [accessToken, 'entity', entityId, 'json'],
    () => SynapseClient.updateEntityJson(entityId, json, accessToken),
    {
      ...options,
      onSuccess: async (data, variables, ctx) => {
        await queryClient.invalidateQueries([accessToken, 'entity', entityId], {
          exact: false,
        })
        queryClient.setQueryData(
          [accessToken, 'entity', entityId, 'json'],
          data,
        )

        if (options?.onSuccess) {
          await options.onSuccess(data, variables, ctx)
        }
      },
    },
  )
}
