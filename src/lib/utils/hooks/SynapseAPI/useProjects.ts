import {
  QueryOptions,
  useInfiniteQuery,
  UseInfiniteQueryOptions,
  useQuery,
} from 'react-query'
import { SynapseClient } from '../..'
import { SynapseClientError } from '../../SynapseClient'
import { ProjectHeaderList } from '../../synapseTypes'
import { GetProjectsParameters } from '../../synapseTypes/GetProjectsParams'

export function useGetProjects(
  sessionToken: string,
  params?: GetProjectsParameters,
  options?: QueryOptions<
    ProjectHeaderList,
    SynapseClientError,
    ProjectHeaderList
  >,
) {
  return useQuery<ProjectHeaderList, SynapseClientError>(
    ['myProjects', sessionToken, params],
    () => SynapseClient.getMyProjects(sessionToken, params),
    options,
  )
}

export function useGetProjectsInfinite(
  sessionToken: string,
  params: GetProjectsParameters,
  options?: UseInfiniteQueryOptions<
    ProjectHeaderList,
    SynapseClientError,
    ProjectHeaderList
  >,
) {
  return useInfiniteQuery<ProjectHeaderList, SynapseClientError>(
    ['myProjects', sessionToken, params],
    async context => {
      return await SynapseClient.getMyProjects(sessionToken, {
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
