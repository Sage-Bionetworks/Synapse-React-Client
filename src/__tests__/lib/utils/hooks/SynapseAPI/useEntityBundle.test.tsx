import { renderHook } from '@testing-library/react-hooks'
import React from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'
import useGetEntityBundle from '../../../../../lib/utils/hooks/SynapseAPI/useEntityBundle'
import { EntityBundle } from '../../../../../lib/utils/synapseTypes'

const wrapper = (props: { children: React.ReactChildren }) => (
  <QueryClientProvider client={new QueryClient()}>
    {props.children}
  </QueryClientProvider>
)

const expected: EntityBundle = {
  entity: {
    id: 'syn123',
    name: 'myEntity',
    concreteType: 'org.sagebionetworks.repo.model.FileEntity',
  },
}

const SynapseClient = require('../../../../../lib/utils/SynapseClient')
SynapseClient.getEntityBundleV2 = jest.fn().mockResolvedValue(expected)

describe('useEntityBundle functionality', () => {
  it('correctly calls SynapseClient', async () => {
    const entityId = 'syn123'

    const { result, waitFor } = renderHook(() => useGetEntityBundle(entityId), {
      wrapper,
    })

    await waitFor(() => result.current.isSuccess)
    expect(SynapseClient.getEntityBundleV2).toBeCalledWith(
      entityId,
      expect.anything(),
      undefined,
    )
    expect(result.current.data).toEqual(expected)
  })
})
