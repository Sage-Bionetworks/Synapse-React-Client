import {
  useInfiniteQuery,
  UseInfiniteQueryOptions,
  useQuery,
  UseQueryOptions,
} from 'react-query'
import { SynapseClient } from '../..'
import { SynapseClientError } from '../../SynapseClient'
import { ProjectHeaderList } from '../../synapseTypes'
import { GetProjectsParameters } from '../../synapseTypes/GetProjectsParams'

export function useGetProjects(
  params?: GetProjectsParameters,
  options?: UseQueryOptions<
    ProjectHeaderList,
    SynapseClientError,
    ProjectHeaderList
  >,
) {
  return useQuery<ProjectHeaderList, SynapseClientError>(
    ['myProjects', params],
    () => SynapseClient.getMyProjects(params),
    options,
  )
}

export function useGetProjectsInfinite(
  params: GetProjectsParameters,
  options?: UseInfiniteQueryOptions<
    ProjectHeaderList,
    SynapseClientError,
    ProjectHeaderList
  >,
) {
  return useInfiniteQuery<ProjectHeaderList, SynapseClientError>(
    ['myProjects', params],
    async context => {
      return await SynapseClient.getMyProjects({
        ...params,
        nextPageToken: context.pageParam,
      })
    },
    {
      ...options,
      getNextPageParam: page => page.nextPageToken,
    },
  )
}
