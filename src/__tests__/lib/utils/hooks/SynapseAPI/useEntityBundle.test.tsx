import { renderHook } from '@testing-library/react-hooks'
import React from 'react'
import useGetEntityBundle from '../../../../../lib/utils/hooks/SynapseAPI/useEntityBundle'
import { EntityBundle } from '../../../../../lib/utils/synapseTypes'
import {
  MOCK_CONTEXT_VALUE,
  SynapseTestContext,
} from '../../../../../mocks/MockSynapseContext'

const wrapper = (props: { children: React.ReactChildren }) => (
  <SynapseTestContext>{props.children}</SynapseTestContext>
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
      MOCK_CONTEXT_VALUE.accessToken,
    )
    expect(result.current.data).toEqual(expected)
  })
})
