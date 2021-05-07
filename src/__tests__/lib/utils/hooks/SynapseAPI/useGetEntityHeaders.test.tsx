import { renderHook } from '@testing-library/react-hooks'
import React from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'
import { useGetEntityHeaders } from '../../../../../lib/utils/hooks/SynapseAPI/useGetEntityHeaders'
import {
  EntityHeader,
  PaginatedResults,
  ReferenceList,
} from '../../../../../lib/utils/synapseTypes'

const wrapper = (props: { children: React.ReactChildren }) => (
  <QueryClientProvider client={new QueryClient()}>
    {props.children}
  </QueryClientProvider>
)

const expected: PaginatedResults<EntityHeader> = {
  results: [
    {
      id: 'syn123',
      name: 'My Entity',
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
}

const SynapseClient = require('../../../../../lib/utils/SynapseClient')
SynapseClient.getEntityHeaders = jest.fn().mockResolvedValue(expected)

describe('basic functionality', () => {
  it('correctly calls SynapseClient', async () => {
    const references: ReferenceList = [{ targetId: 'syn123' }]

    const { result, waitFor } = renderHook(
      () => useGetEntityHeaders(references),
      { wrapper },
    )

    await waitFor(() => result.current.isSuccess)

    expect(SynapseClient.getEntityHeaders).toBeCalledWith(references)
    expect(result.current.data).toEqual(expected)
  })
})
