import '@testing-library/jest-dom'
import { render, waitFor } from '@testing-library/react'
import React from 'react'
import { mockAllIsIntersecting } from 'react-intersection-observer/test-utils'
import {
  TreeViewRow,
  TreeViewRowProps,
} from '../../../../../lib/containers/entity_finder/tree/TreeViewRow'
import useGetEntityBundle from '../../../../../lib/utils/hooks/SynapseAPI/useEntityBundle'
import { useGetEntityChildrenInfinite } from '../../../../../lib/utils/hooks/SynapseAPI/useGetEntityChildren'
import { EntityBundle } from '../../../../../lib/utils/synapseTypes'

jest.mock('../../../../../lib/utils/hooks/SynapseAPI/useEntityBundle')
jest.mock('../../../../../lib/utils/hooks/SynapseAPI/useGetEntityChildren')
const mockSetSelectedId = jest.fn()

const defaultProps: TreeViewRowProps = {
  sessionToken: 'abcd',
  entityHeader: {
    id: 'syn123',
    name: 'My File',
    lastActivity: 'yesterday',
    modifiedOn: 'today',
    modifiedBy: 100000,
    type: 'org.sagebionetworks.repo.model.FileEntity',
  },
  selectedId: 'syn456',
  setSelectedId: mockSetSelectedId,
}

const bundleResult: EntityBundle = {
  entity: {
    id: defaultProps.entityHeader.id,
    name: defaultProps.entityHeader.name,
    concreteType: 'org.sagebionetworks.repo.model.FileEntity',
  },
}

function renderScreen(propOverrides?: Partial<TreeViewRowProps>) {
  return render(<TreeViewRow {...defaultProps} {...propOverrides} />)
}

const mockFetchNextPageOfChildren = jest.fn()

describe('TreeViewRow tests', () => {
  beforeEach(() => {
    jest.clearAllMocks()
    mockAllIsIntersecting(false)
    ;(useGetEntityBundle as jest.Mock).mockImplementation(() => ({
      data: bundleResult,
    }))
    ;(useGetEntityChildrenInfinite as jest.Mock).mockImplementation(() => ({
      data: {
        pages: [
          //   {
          //     page: [
          //       {
          //         id: 'syn456',
          //         name: 'My Child 1',
          //         lastActivity: 'yesterday',
          //         modifiedOn: 'today',
          //         modifiedBy: 100000,
          //         type: 'org.sagebionetworks.repo.model.FileEntity',
          //       },
          //       {
          //         id: 'syn789',
          //         name: 'My Child 2',
          //         lastActivity: 'yesterday',
          //         modifiedOn: 'today',
          //         modifiedBy: 100000,
          //         type: 'org.sagebionetworks.repo.model.FileEntity',
          //       },
          //     ],
          //     nextPageToken: '50a0',
          //   },
        ],
      },
      hasNextPage: false,
    }))
  })

  it('Renders self and children in rows', async () => {
    const screen = renderScreen()

    await waitFor(() => expect(useGetEntityChildrenInfinite).toBeCalled())

    expect(screen.getAllByRole('row').length).toBe(3)
  })

  it('Hides children when expand is collapsed', () => {})

  it('Retrieves the entity bundle when in view', () => {
    renderScreen()

    // Not in view
    mockAllIsIntersecting(false)

    expect(useGetEntityBundle).toBeCalledWith(
      defaultProps.sessionToken,
      defaultProps.entityHeader.id,
      expect.anything(),
      undefined,
      {
        enabled: false, // !
        staleTime: expect.anything(),
      },
    )

    // Comes into view, call under test:
    mockAllIsIntersecting(true)

    expect(useGetEntityBundle).toBeCalledWith(
      defaultProps.sessionToken,
      defaultProps.entityHeader.id,
      expect.anything(),
      undefined,
      {
        enabled: true, // !
        staleTime: expect.anything(),
      },
    )
  })

  // Test retrieving children when in view
  it('Retrieves the next page of children when in view', () => {
    ;(useGetEntityChildrenInfinite as jest.Mock).mockImplementation(() => ({
      data: { pages: [] },
      hasNextPage: true,
      isSuccess: true,
      fetchNextPage: mockFetchNextPageOfChildren,
    }))

    renderScreen()

    // Not in view
    mockAllIsIntersecting(false)

    expect(mockFetchNextPageOfChildren).not.toBeCalled()

    // Comes into view, call under test:
    mockAllIsIntersecting(true)

    expect(mockFetchNextPageOfChildren).toBeCalled()
  })
  // Test selectedId sets ARIA attribute

  // Test click sets selected ID
})
