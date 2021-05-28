import { renderHook } from '@testing-library/react-hooks'
import React from 'react'
import { useGetEntityHeaders } from '../../../../../lib/utils/hooks/SynapseAPI/useGetEntityHeaders'
import {
  EntityHeader,
  PaginatedResults,
  ReferenceList,
} from '../../../../../lib/utils/synapseTypes'
import {
  MOCK_CONTEXT_VALUE,
  SynapseTestContext,
} from '../../../../../mocks/MockSynapseContext'

const wrapper = (props: { children: React.ReactChildren }) => (
  <SynapseTestContext>{props.children}</SynapseTestContext>
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

    expect(SynapseClient.getEntityHeaders).toBeCalledWith(
      references,
      MOCK_CONTEXT_VALUE.accessToken,
    )
    expect(result.current.data).toEqual(expected)
  })
})
