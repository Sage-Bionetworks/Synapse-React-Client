import '@testing-library/jest-dom'
import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import React from 'react'
import { mockAllIsIntersecting } from 'react-intersection-observer/test-utils'
import EntityIDColumnCopyIcon from '../../../../lib/containers/table/EntityIDColumnCopyIcon'
import { createWrapper } from '../../../../lib/testutils/TestingLibraryUtils'
import { SynapseContextType } from '../../../../lib/utils/SynapseContext'
import {
  QueryBundleRequest,
  QueryResultBundle,
} from '../../../../lib/utils/synapseTypes'
import {
  QueryContextProvider,
  QueryContextType,
} from '../../../../lib/containers/QueryContext'
import idsQueryResponse from '../../../../mocks/mockIDListQueryResponseData.json'
import { SynapseClient, SynapseConstants } from '../../../../lib'

const synID = 'syn55555'
const version = '7'

const originalSql = `select a, b from ${synID}.${version}`

const mockQueryRequest: QueryBundleRequest = {
  concreteType: 'org.sagebionetworks.repo.model.table.QueryBundleRequest',
  entityId: synID,
  partMask:
    SynapseConstants.BUNDLE_MASK_QUERY_RESULTS |
    SynapseConstants.BUNDLE_MASK_QUERY_FACETS |
    SynapseConstants.BUNDLE_MASK_QUERY_COLUMN_MODELS,
  query: {
    sql: originalSql,
  },
}

const queryContext: Partial<QueryContextType> = {
  data: idsQueryResponse as QueryResultBundle,
  getLastQueryRequest: () => mockQueryRequest,
  isLoadingNewBundle: false,
}

function renderComponent(wrapperProps?: SynapseContextType) {
  return render(
    <QueryContextProvider queryContext={queryContext}>
      <EntityIDColumnCopyIcon />
    </QueryContextProvider>,
    {
      wrapper: createWrapper(wrapperProps),
    },
  )
}

describe('EntityIDColumnCopyIcon tests', () => {
  beforeEach(() => {
    jest.clearAllMocks()

    SynapseClient.getFullQueryTableResults = jest
      .fn()
      .mockResolvedValue(idsQueryResponse as QueryResultBundle)
    mockAllIsIntersecting(false)
  })

  describe('Do copy', () => {
    it('Copies IDs to the clipboard', async () => {
      const mockWriteText = jest.fn()
      mockWriteText.mockResolvedValue('copied')
      const mockClipboard = {
        writeText: mockWriteText,
      }
      Object.assign(navigator, {
        clipboard: mockClipboard,
      })

      renderComponent()

      userEvent.click(await screen.findByRole('button'))

      await waitFor(() =>
        expect(SynapseClient.getFullQueryTableResults).toBeCalled(),
      )

      expect(mockWriteText).toHaveBeenCalled()
      expect(mockWriteText).toHaveBeenCalledWith(
        'syn25922102\nsyn25959271\nsyn25959274\nsyn25959276\nsyn25959279\nsyn25959281\nsyn25959285\nsyn25959288\nsyn25959290\nsyn25959292\nsyn26208690\nsyn32794351',
      )
    })
  })
})
