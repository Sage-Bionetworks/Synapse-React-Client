import { useContext } from 'react'
import {
  useInfiniteQuery,
  UseInfiniteQueryOptions,
  useQuery,
  UseQueryOptions,
} from 'react-query'
import { SynapseClient } from '../..'
import { SynapseClientError } from '../../SynapseClient'
import { SynapseContext } from '../../SynapseContext'
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
  const { accessToken } = useContext(SynapseContext)
  return useQuery<ProjectHeaderList, SynapseClientError>(
    ['myProjects', accessToken, params],
    () => SynapseClient.getMyProjects(accessToken!, params),
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
  const { accessToken } = useContext(SynapseContext)

  return useInfiniteQuery<ProjectHeaderList, SynapseClientError>(
    ['myProjects', accessToken, params],
    async context => {
      return await SynapseClient.getMyProjects(accessToken!, {
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
