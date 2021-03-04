import { renderHook } from '@testing-library/react-hooks'
import React from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'
import {
  useGetProjects,
  useGetProjectsInfinite,
} from '../../../../../lib/utils/hooks/SynapseAPI/useProjects'
import {
  EntityChildrenRequest,
  EntityType,
  ProjectHeaderList,
} from '../../../../../lib/utils/synapseTypes'

const wrapper = (props: { children: React.ReactChildren }) => (
  <QueryClientProvider client={new QueryClient()}>
    {props.children}
  </QueryClientProvider>
)

const request: EntityChildrenRequest = {
  parentId: 'syn123',
  includeTypes: [EntityType.FILE],
}

const page1: ProjectHeaderList = {
  results: [
    {
      id: 'syn123',
      name: 'Project 1',
      modifiedOn: 'earlier',
      lastActivity: 'last activity',
      modifiedBy: 100000,
    },
  ],
  nextPageToken: 'token',
}

const page2: ProjectHeaderList = {
  results: [
    {
      id: 'syn321',
      name: 'Project 2',
      modifiedOn: 'earlier',
      lastActivity: 'last activity',
      modifiedBy: 100000,
    },
  ],
  nextPageToken: null,
}

const SynapseClient = require('../../../../../lib/utils/SynapseClient')
SynapseClient.getMyProjects = jest.fn()

describe('basic functionality', () => {
  it('correctly calls SynapseClient', async () => {
    SynapseClient.getMyProjects.mockResolvedValueOnce(page1)

    const sessionToken = 'abcdef'

    const { result, waitFor } = renderHook(
      () => useGetProjects(sessionToken, request),
      { wrapper },
    )

    await waitFor(() => result.current.isSuccess)

    expect(SynapseClient.getMyProjects).toBeCalledWith(sessionToken, request)
    expect(result.current.data).toEqual(page1)
  })

  it('works with infinite query pagination', async () => {
    SynapseClient.getMyProjects
      .mockResolvedValueOnce(page1)
      .mockResolvedValueOnce(page2)

    const sessionToken = 'abcdef'

    const { result, waitFor } = renderHook(
      () => useGetProjectsInfinite(sessionToken, request),
      { wrapper },
    )

    await waitFor(() => result.current.isSuccess)

    expect(SynapseClient.getMyProjects).toBeCalledWith(sessionToken, request)
    expect(result.current.data?.pages[0]).toEqual(page1)
    expect(result.current.hasNextPage).toBe(true)

    result.current.fetchNextPage()

    await waitFor(() => result.current.isFetching)
    await waitFor(() => !result.current.isFetching)

    expect(SynapseClient.getMyProjects).toBeCalledWith(sessionToken, {
      ...request,
      nextPageToken: page1.nextPageToken,
    })
    expect(result.current.data?.pages[1]).toEqual(page2)
    expect(result.current.hasNextPage).toBe(false)
  })
})
