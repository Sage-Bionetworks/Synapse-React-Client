import '@testing-library/jest-dom'
import { render, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { when } from 'jest-when'
import React from 'react'
import { mockAllIsIntersecting } from 'react-intersection-observer/test-utils'
import {
  TreeViewNode,
  TreeViewNodeProps,
} from '../../../../../lib/containers/entity_finder/tree/TreeViewNode'
import useGetEntityBundle from '../../../../../lib/utils/hooks/SynapseAPI/useEntityBundle'
import { useGetEntityChildrenInfinite } from '../../../../../lib/utils/hooks/SynapseAPI/useGetEntityChildren'
import {
  EntityBundle,
  EntityHeader,
} from '../../../../../lib/utils/synapseTypes'

jest.mock('../../../../../lib/utils/hooks/SynapseAPI/useEntityBundle')
jest.mock(
  '../../../../../lib/utils/hooks/SynapseAPI/useGetEntityChildren',
  () => {
    return {
      useGetEntityChildrenInfinite: jest.fn(),
    }
  },
)
const mockSetSelectedId = jest.fn()
const mockUseGetEntityBundle = useGetEntityBundle as jest.Mock
const mockUseGetEntityChildren = useGetEntityChildrenInfinite as jest.Mock

const defaultProps: TreeViewNodeProps = {
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

const children: Partial<EntityHeader>[] = [
  {
    id: 'syn456',
    name: 'My Child 1',
    modifiedOn: 'today',
    modifiedBy: '100000',
    type: 'org.sagebionetworks.repo.model.Folder',
  },
  {
    id: 'syn789',
    name: 'My Child 2',
    modifiedOn: 'today',
    modifiedBy: '100000',
    type: 'org.sagebionetworks.repo.model.Folder',
  },
]

const bundleResult: EntityBundle = {
  entity: {
    id: defaultProps.entityHeader.id,
    name: defaultProps.entityHeader.name,
    concreteType: 'org.sagebionetworks.repo.model.FileEntity',
  },
}

function renderScreen(propOverrides?: Partial<TreeViewNodeProps>) {
  return render(<TreeViewNode {...defaultProps} {...propOverrides} />)
}

const mockFetchNextPageOfChildren = jest.fn()

describe('TreeViewNode tests', () => {
  beforeEach(() => {
    jest.clearAllMocks()
    mockAllIsIntersecting(false)

    mockUseGetEntityBundle.mockImplementation(() => ({
      data: bundleResult,
    }))

    when(mockUseGetEntityChildren)
      .calledWith(
        expect.anything(),
        expect.objectContaining({
          parentId: expect.stringContaining(defaultProps.entityHeader.id),
        }),
        expect.anything(),
      )
      .mockReturnValue({
        data: {
          pages: [
            {
              page: [children[0]],
              nextPageToken: '50a0',
            },
            {
              page: [children[1]],
              nextPageToken: null,
            },
          ],
          pageParams: [],
        },
        hasNextPage: false,
      })
      .calledWith(
        expect.anything(),
        expect.objectContaining({
          parentId: expect.not.stringContaining(defaultProps.entityHeader.id),
        }),
        expect.anything(),
      )
      .mockReturnValue({
        data: {
          pages: [
            {
              page: [],
              nextPageToken: null,
            },
          ],
        },
        hasNextPage: false,
      })
  })

  it('Renders self and children', async () => {
    const screen = renderScreen()

    await waitFor(() =>
      expect(mockUseGetEntityChildren).toBeCalledWith(
        expect.anything(),
        expect.objectContaining({
          parentId: expect.stringContaining(defaultProps.entityHeader.id),
        }),
        expect.anything(),
      ),
    )

    // Before expanding
    expect(screen.getAllByRole('treeitem').length).toBe(1)

    const expandButton = screen.getByLabelText(
      `Expand ${defaultProps.entityHeader.name}`,
    )
    // Expand to show children
    userEvent.click(expandButton)
    expect(screen.getAllByRole('treeitem').length).toBe(3)

    // Verify that we can collapse
    userEvent.click(expandButton)
    expect(screen.getAllByRole('treeitem').length).toBe(1)
  })

  it('Autoexpand works when there are children', async () => {
    const screen = renderScreen({ autoExpand: () => true })

    await waitFor(() =>
      expect(mockUseGetEntityChildren).toBeCalledWith(
        expect.anything(),
        expect.objectContaining({
          parentId: expect.stringContaining(defaultProps.entityHeader.id),
        }),
        expect.anything(),
      ),
    )

    // No need to click a button since autoexpand should evaluate to `true`
    expect(screen.getAllByRole('treeitem').length).toBe(3)
  })

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

  it('Retrieves the next page of children when in view', () => {
    mockUseGetEntityChildren.mockImplementation(() => ({
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

  it('Has aria-selected as true when the selectedId matches the entity ID', async () => {
    // Set auto-expand to render children and ensure that they don't get the selected attribute
    const screen = renderScreen({
      selectedId: defaultProps.entityHeader.id,
      autoExpand: () => true,
    })

    await waitFor(() =>
      expect(mockUseGetEntityChildren).toBeCalledWith(
        expect.anything(),
        expect.objectContaining({
          parentId: expect.stringContaining(defaultProps.entityHeader.id),
        }),
        expect.anything(),
      ),
    )

    expect(screen.getAllByRole('treeitem')[0]).toHaveAttribute(
      'aria-selected',
      'true',
    )
    expect(screen.getAllByRole('treeitem')[1]).toHaveAttribute(
      'aria-selected',
      'false',
    )
    expect(screen.getAllByRole('treeitem')[2]).toHaveAttribute(
      'aria-selected',
      'false',
    )
  })

  it('invokes setSelectedId when the item is clicked ', async () => {
    const mockSetSelectedId = jest.fn()

    // Set auto-expand to automatically render children
    const screen = renderScreen({
      setSelectedId: mockSetSelectedId,
      autoExpand: () => true,
    })

    const getSelectButton = (entityName: string) =>
      screen.getByLabelText(`Select ${entityName}`)

    await waitFor(() =>
      expect(mockUseGetEntityChildren).toBeCalledWith(
        expect.anything(),
        expect.objectContaining({
          parentId: expect.stringContaining(defaultProps.entityHeader.id),
        }),
        expect.anything(),
      ),
    )

    // Select the parent
    userEvent.click(getSelectButton(defaultProps.entityHeader.name))
    expect(mockSetSelectedId).toBeCalledWith(defaultProps.entityHeader.id)

    // Select a child
    userEvent.click(getSelectButton(children[0].name!))
    expect(mockSetSelectedId).toBeCalledWith(children[0].id)
  })
})
