import { renderHook } from '@testing-library/react-hooks'
import React from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'
import {
  useGetEntityChildren,
  useGetEntityChildrenInfinite,
} from '../../../../../lib/utils/hooks/SynapseAPI/useGetEntityChildren'
import {
  EntityChildrenRequest,
  EntityChildrenResponse,
  EntityType,
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

const page1: EntityChildrenResponse = {
  page: [
    {
      id: 'syn123',
      name: 'Child 1',
      type: 'org.sagebionetworks.repo.model.FileEntity',
      versionNumber: 1,
      versionLabel: '1',
      benefactorId: 122,
      createdOn: 'today',
      modifiedOn: 'earlier',
      createdBy: 'me',
      modifiedBy: 'you',
    },
  ],
  nextPageToken: 'token',
}

const page2: EntityChildrenResponse = {
  page: [
    {
      id: 'syn124',
      name: 'Child 2',
      type: 'org.sagebionetworks.repo.model.FileEntity',
      versionNumber: 1,
      versionLabel: '1',
      benefactorId: 122,
      createdOn: 'today',
      modifiedOn: 'earlier',
      createdBy: 'me',
      modifiedBy: 'you',
    },
  ],
  nextPageToken: null,
}

const SynapseClient = require('../../../../../lib/utils/SynapseClient')
SynapseClient.getEntityChildren = jest.fn()

describe('basic functionality', () => {
  it('correctly calls SynapseClient', async () => {
    SynapseClient.getEntityChildren.mockResolvedValueOnce(page1)

    const { result, waitFor } = renderHook(
      () => useGetEntityChildren(request),
      { wrapper },
    )

    await waitFor(() => result.current.isSuccess)

    expect(SynapseClient.getEntityChildren).toBeCalledWith(request)
    expect(result.current.data).toEqual(page1)
  })

  it('works with infinite query pagination', async () => {
    SynapseClient.getEntityChildren
      .mockResolvedValueOnce(page1)
      .mockResolvedValueOnce(page2)

    const { result, waitFor } = renderHook(
      () => useGetEntityChildrenInfinite(request),
      { wrapper },
    )

    await waitFor(() => result.current.isSuccess)

    expect(SynapseClient.getEntityChildren).toBeCalledWith(request)
    expect(result.current.data?.pages[0]).toEqual(page1)
    expect(result.current.hasNextPage).toBe(true)

    result.current.fetchNextPage()

    await waitFor(() => result.current.isFetching)
    await waitFor(() => !result.current.isFetching)

    expect(SynapseClient.getEntityChildren).toBeCalledWith({
      ...request,
      nextPageToken: page1.nextPageToken,
    })
    expect(result.current.data?.pages[1]).toEqual(page2)
    expect(result.current.hasNextPage).toBe(false)
  })
})
