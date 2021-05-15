import { renderHook } from '@testing-library/react-hooks'
import React from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'
import { useGetFavorites } from '../../../../../lib/utils/hooks/SynapseAPI/useFavorites'
import {
  EntityHeader,
  EntityType,
  PaginatedResults
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
      name: 'My Favorite Entity',
      type: EntityType.FILE,
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
SynapseClient.getUserFavorites = jest.fn().mockResolvedValue(expected)

describe('useFavorites functionality', () => {
  it('correctly calls SynapseClient', async () => {
    const accessToken = 'abcdef'

    const { result, waitFor } = renderHook(
      () => useGetFavorites(accessToken),
      { wrapper },
    )

    await waitFor(() => result.current.isSuccess)

    expect(SynapseClient.getUserFavorites).toBeCalledWith(accessToken)
    expect(result.current.data).toEqual(expected)
  })
})
