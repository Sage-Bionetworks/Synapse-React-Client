/*
 * Hooks to access Entity Services in Synapse
 */

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

export function useGetJson(
  entityId: string,
  options?: UseQueryOptions<unknown, SynapseClientError>,
) {
  const { accessToken } = useSynapseContext()
  return useQuery<unknown, SynapseClientError>(
    [accessToken, 'entity', entityId, 'json'],
    () => SynapseClient.getEntityJson(entityId, accessToken),
    options,
  )
}

export function useUpdateViaJson(
  entityId: string,
  json: unknown,
  options?: UseMutationOptions<unknown, SynapseClientError>,
) {
  const queryClient = useQueryClient()
  const { accessToken } = useSynapseContext()

  return useMutation<unknown, SynapseClientError>(
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
