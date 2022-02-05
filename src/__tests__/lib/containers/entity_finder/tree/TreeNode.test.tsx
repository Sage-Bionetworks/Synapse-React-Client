import '@testing-library/jest-dom'
import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { when } from 'jest-when'
import React from 'react'
import { mockAllIsIntersecting } from 'react-intersection-observer/test-utils'
import {
  EntityTreeNodeType,
  TreeNode,
  TreeNodeProps,
} from '../../../../../lib/containers/entity_finder/tree/TreeNode'
import { useGetEntityChildrenInfinite } from '../../../../../lib/utils/hooks/SynapseAPI/useGetEntityChildren'
import {
  EntityBundle,
  EntityHeader,
  EntityType,
} from '../../../../../lib/utils/synapseTypes'
import { SynapseTestContext } from '../../../../../mocks/MockSynapseContext'
import { Map } from 'immutable'
import { NO_VERSION_NUMBER } from '../../../../../lib/containers/entity_finder/EntityFinder'

jest.mock(
  '../../../../../lib/utils/hooks/SynapseAPI/useGetEntityChildren',
  () => {
    return {
      useGetEntityChildrenInfinite: jest.fn(),
    }
  },
)
const mockSetSelectedId = jest.fn()
const mockUseGetEntityChildren = useGetEntityChildrenInfinite as jest.Mock

const defaultProps: TreeNodeProps = {
  entityHeader: {
    id: 'syn123',
    name: 'My File',
    lastActivity: 'yesterday',
    modifiedOn: 'today',
    modifiedBy: 100000,
    type: 'org.sagebionetworks.repo.model.FileEntity',
  },
  selected: Map([['syn456', NO_VERSION_NUMBER]]),
  setSelectedId: mockSetSelectedId,
  treeNodeType: EntityTreeNodeType.SELECT,
  selectableTypes: Object.values(EntityType),
}

const childrenFromAPI: EntityHeader[] = [
  {
    id: 'syn456',
    name: 'My Child 1',
    modifiedOn: 'today',
    modifiedBy: '100000',
    type: 'org.sagebionetworks.repo.model.Folder',
    versionNumber: 1,
    versionLabel: '',
    benefactorId: 123,
    createdOn: 'yesterday',
    createdBy: '10000',
  },
  {
    id: 'syn789',
    name: 'My Child 2',
    modifiedOn: 'today',
    modifiedBy: '100000',
    type: 'org.sagebionetworks.repo.model.Folder',
    versionNumber: 1,
    versionLabel: '',
    benefactorId: 123,
    createdOn: 'yesterday',
    createdBy: '10000',
  },
]

const childrenPassedAsRootProps: EntityHeader[] = [
  {
    id: 'syn555',
    name: 'Root Child 1',
    modifiedOn: 'today',
    modifiedBy: '100000',
    type: 'org.sagebionetworks.repo.model.Folder',
    versionNumber: 1,
    versionLabel: '',
    benefactorId: 123,
    createdOn: 'yesterday',
    createdBy: '10000',
  },
  {
    id: 'syn556',
    name: 'Root Child 2',
    modifiedOn: 'today',
    modifiedBy: '100000',
    type: 'org.sagebionetworks.repo.model.Folder',
    versionNumber: 1,
    versionLabel: '',
    benefactorId: 123,
    createdOn: 'yesterday',
    createdBy: '10000',
  },
]

const bundleResult: EntityBundle = {
  entity: {
    id: defaultProps.entityHeader!.id,
    name: defaultProps.entityHeader!.name,
    concreteType: 'org.sagebionetworks.repo.model.FileEntity',
  },
}

function renderComponent(propOverrides?: Partial<TreeNodeProps>) {
  return render(
    <SynapseTestContext>
      <TreeNode {...defaultProps} {...propOverrides} />
    </SynapseTestContext>,
  )
}

const mockFetchNextPageOfChildren = jest.fn()

describe('TreeNode tests', () => {
  beforeEach(() => {
    jest.clearAllMocks()
    mockAllIsIntersecting(false)
    when(mockUseGetEntityChildren)
      .calledWith(
        expect.objectContaining({
          parentId: expect.stringContaining(defaultProps.entityHeader!.id),
        }),
        expect.anything(),
      )
      .mockReturnValue({
        data: {
          pages: [
            {
              page: [childrenFromAPI[0]],
              nextPageToken: '50a0',
            },
            {
              page: [childrenFromAPI[1]],
              nextPageToken: null,
            },
          ],
          pageParams: [],
        },
        fetchNextPage: mockFetchNextPageOfChildren,
        hasNextPage: true,
        isSuccess: true,
      })
      .calledWith(
        expect.objectContaining({
          parentId: expect.not.stringContaining(defaultProps.entityHeader!.id),
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
        fetchNextPage: mockFetchNextPageOfChildren,
        hasNextPage: false,
        isSuccess: true,
      })
  })
  it('Renders self and children', async () => {
    renderComponent()
    await waitFor(() =>
      expect(mockUseGetEntityChildren).toBeCalledWith(
        expect.objectContaining({
          parentId: expect.stringContaining(defaultProps.entityHeader!.id),
        }),
        expect.anything(),
      ),
    )
    // Before expanding
    expect(screen.getAllByRole('treeitem').length).toBe(1)
    const expandButton = screen.getByLabelText(
      `Expand ${defaultProps.entityHeader!.name}`,
    )
    // Expand to show children
    userEvent.click(expandButton)
    expect(screen.getAllByRole('treeitem').length).toBe(3)
    // Verify that we can collapse
    userEvent.click(expandButton)
    expect(screen.getAllByRole('treeitem').length).toBe(1)
  })
  it('Autoexpand works when there are children', async () => {
    renderComponent({ autoExpand: () => true })
    await waitFor(() =>
      expect(mockUseGetEntityChildren).toBeCalledWith(
        expect.objectContaining({
          parentId: expect.stringContaining(defaultProps.entityHeader!.id),
        }),
        expect.anything(),
      ),
    )
    // No need to click a button since autoexpand should evaluate to `true`
    expect(screen.getAllByRole('treeitem').length).toBe(3)
  })

  it('Retrieves the next page of children when in view', async () => {
    renderComponent()
    // Not in view
    mockAllIsIntersecting(false)
    expect(mockFetchNextPageOfChildren).not.toBeCalled()
    // Comes into view, call under test:
    mockAllIsIntersecting(true)
    await waitFor(() => expect(mockFetchNextPageOfChildren).toBeCalled())
  })

  it('Has aria-selected as true when the selectedId matches the entity ID (SELECT)', async () => {
    // Set auto-expand to render children and ensure that they don't get the selected attribute
    renderComponent({
      treeNodeType: EntityTreeNodeType.SELECT,
      selected: Map([[defaultProps.entityHeader!.id, NO_VERSION_NUMBER]]),
      autoExpand: () => true,
    })
    await waitFor(() =>
      expect(mockUseGetEntityChildren).toBeCalledWith(
        expect.objectContaining({
          parentId: expect.stringContaining(defaultProps.entityHeader!.id),
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

  it('Has aria-selected as true when the currentContainer matches the entity ID (BROWSE)', async () => {
    renderComponent({
      treeNodeType: EntityTreeNodeType.BROWSE,
      currentContainer: defaultProps.entityHeader!.id,
      autoExpand: () => true,
    })
    await waitFor(() =>
      expect(mockUseGetEntityChildren).toBeCalledWith(
        expect.objectContaining({
          parentId: expect.stringContaining(defaultProps.entityHeader!.id),
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
    // Set auto-expand to automatically render children
    renderComponent({
      setSelectedId: mockSetSelectedId,
      autoExpand: () => true,
    })
    const getSelectButton = (entityName: string) =>
      screen.getByLabelText(`Select ${entityName}`)
    await waitFor(() =>
      expect(mockUseGetEntityChildren).toBeCalledWith(
        expect.objectContaining({
          parentId: expect.stringContaining(defaultProps.entityHeader!.id),
        }),
        expect.anything(),
      ),
    )
    // Select the parent
    userEvent.click(getSelectButton(defaultProps.entityHeader!.name))
    expect(mockSetSelectedId).toBeCalledWith(defaultProps.entityHeader!.id)
    // Select a child
    userEvent.click(getSelectButton(childrenFromAPI[0].name!))
    expect(mockSetSelectedId).toBeCalledWith(childrenFromAPI[0].id)
  })
  describe('Root Node tests', () => {
    it('renders children passed as props', async () => {
      const rootNodeName = 'All of My Entities'
      renderComponent({
        rootNodeConfiguration: {
          nodeText: rootNodeName,
          children: childrenPassedAsRootProps,
        },
        autoExpand: () => true,
      })
      // Renders the root node
      expect(screen.getByLabelText('Select ' + rootNodeName)).not.toBeNull()
      // Renders a node for each child passed via props
      expect(
        screen.getByLabelText('Select ' + childrenPassedAsRootProps[0].name),
      ).not.toBeNull()
      expect(
        screen.getByLabelText('Select ' + childrenPassedAsRootProps[1].name),
      ).not.toBeNull()
      // Does not render nodes for entities returned via API call
      expect(() =>
        screen.getByLabelText('Select ' + childrenFromAPI[0].name),
      ).toThrow()
      expect(() =>
        screen.getByLabelText('Select ' + childrenFromAPI[1].name),
      ).toThrow()
    })
    it('disables useGetEntityChildrenInfinite', async () => {
      const rootNodeName = 'All of My Entities'
      renderComponent({
        rootNodeConfiguration: {
          nodeText: rootNodeName,
          // requests would be made on behalf of the child nodes, so we pass no children
          children: [],
        },
      })
      expect(mockUseGetEntityChildren).toBeCalledWith(
        expect.anything(),
        expect.objectContaining({
          enabled: false, // !
        }),
      )
    })
  })
})
