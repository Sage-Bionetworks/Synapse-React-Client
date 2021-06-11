import * as React from 'react'
import { mockAllIsIntersecting } from 'react-intersection-observer/test-utils'
import EntityIdList, {
  EntityIdListProps,
} from '../../../lib/containers/EntityIdList'
import { act } from 'react-dom/test-utils'
import {
  MOCK_CONTEXT_VALUE,
  SynapseTestContext,
} from '../../../mocks/MockSynapseContext'
import { render, screen, waitFor } from '@testing-library/react'
import { mockFileEntityHeader } from '../../../mocks/entity/mockEntity'
import { getEntityHeadersByIds } from '../../../lib/utils/SynapseClient'

const SynapseClient = require('../../../lib/utils/SynapseClient')

SynapseClient.getEntityHeadersByIds = jest
  .fn()
  .mockResolvedValue({ results: [mockFileEntityHeader] })

describe('EntityIdList: basic functionality', () => {
  const props: EntityIdListProps = {
    entityIdList: ['syn123', 'syn345'],
  }

  it('renders and retrieves data without crashing', async () => {
    render(<EntityIdList {...props} />, {
      wrapper: SynapseTestContext,
    })
    act(() => {
      mockAllIsIntersecting(true)
    })
    await waitFor(() =>
      expect(getEntityHeadersByIds).toBeCalledWith(
        props.entityIdList,
        MOCK_CONTEXT_VALUE.accessToken,
      ),
    )
    screen.getByText(mockFileEntityHeader.name)
  })
})
